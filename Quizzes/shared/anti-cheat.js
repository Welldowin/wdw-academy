// 📄 shared/anti-cheat.js — ตรวจพฤติกรรมระหว่างสอบ → คะแนนความเสี่ยง (Risk Score)
// ─────────────────────────────────────────────────────────────
//  ใช้กับหน้า final-test (ใส่ <script src="../../shared/anti-cheat.js"> ก่อน final-test.js)
//
//  ระบบนี้ "ไม่ตัดสินว่าโกง" แค่เก็บสัญญาณพฤติกรรมแล้วให้คะแนนความเสี่ยง
//    0–29  → ปล่อยผลปกติ
//    30–59 → ปล่อยผล แต่ติดธงให้แอดมินดูย้อนหลัง
//    60+   → ถือผลไว้ จนกว่าแอดมินจะอนุมัติ
//
//  ⚠️ น้ำหนัก/เกณฑ์ด้านล่าง ต้องตรงกับ evalRisk() ใน exam/apps-script-gateway.gs
//     (เซิร์ฟเวอร์คำนวณคะแนนความเสี่ยงซ้ำจาก signals เอง ไม่เชื่อค่าที่หน้าเว็บส่งมา)
// ─────────────────────────────────────────────────────────────
(function () {
  const RISK = {
    flagAt: 30,
    holdAt: 60,
    switchEach: 10, switchCap: 50,     // สลับแท็บ/แอป/หน้าต่าง
    awayPer10s: 1,  awayCap: 30,       // เวลาที่หายไปจากหน้าสอบ (ต่อ 10 วินาที)
    fastEach: 5,    fastCap: 30,       // โจทย์คำนวณ/ประยุกต์ที่ตอบเร็วเกินไป
    fastSec: 10,
    uniform: 15,                       // เวลาต่อข้อสม่ำเสมอผิดธรรมชาติ
    uniformCV: 0.25, uniformMinN: 15,
    fastHigh: 20,                      // คะแนนสูงมากแต่ใช้เวลาน้อยมาก
    fastHighScore: 90, fastHighTimeFrac: 0.4,
    clipEach: 5,    clipCap: 25,       // copy / cut / paste / คลิกขวา / ลากข้อความ
    multiTab: 15,                      // เปิดข้อสอบเดียวกันหลายแท็บ
    quickEach: 10,  quickCap: 20,      // ตอบทันทีหลังกลับเข้าหน้าสอบ
    quickSec: 3,
  };

  const S = {
    key: "", active: false, suspended: false,
    away: false, awayAt: 0,
    switches: 0, awaySec: 0, clip: 0, quick: 0, multiTab: false,
    lastReturnAt: 0, events: [],
    channel: null, toastTimer: null,
  };

  const storeKey = () => "WDW_AC_" + S.key;

  function save() {
    try {
      localStorage.setItem(storeKey(), JSON.stringify({
        switches: S.switches, awaySec: S.awaySec, clip: S.clip, quick: S.quick,
        multiTab: S.multiTab, events: S.events.slice(-300),
      }));
    } catch (e) { /* ไม่เป็นไร */ }
  }

  function load() {
    try {
      const o = JSON.parse(localStorage.getItem(storeKey()) || "null");
      if (!o) return;
      S.switches = o.switches || 0; S.awaySec = o.awaySec || 0; S.clip = o.clip || 0;
      S.quick = o.quick || 0; S.multiTab = !!o.multiTab; S.events = o.events || [];
    } catch (e) { /* ไม่เป็นไร */ }
  }

  function log(type, extra) {
    S.events.push(Object.assign({ t: Date.now(), type }, extra || {}));
    if (S.events.length > 400) S.events.splice(0, S.events.length - 400);
    save();
  }

  // ---------- toast เตือนนักเรียน ----------
  function toast(msg) {
    let el = document.getElementById("ac-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ac-toast";
      el.style.cssText = "position:fixed;left:50%;top:16px;transform:translateX(-50%);max-width:92vw;background:#fef3c7;color:#92400e;border:2px solid #f59e0b;border-radius:12px;padding:10px 18px;font-size:.95rem;font-family:inherit;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.18);display:none;text-align:center;";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.display = "block";
    clearTimeout(S.toastTimer);
    S.toastTimer = setTimeout(() => { el.style.display = "none"; }, 6000);
  }

  // ---------- ออกจาก/กลับเข้าหน้าสอบ ----------
  function leave(reason) {
    if (!S.active || S.suspended || S.away) return;
    S.away = true; S.awayAt = Date.now();
    S.switches++;
    log("leave", { reason });
  }

  function back() {
    if (!S.active || !S.away) return;
    S.away = false;
    const sec = Math.round((Date.now() - S.awayAt) / 1000);
    S.awaySec += sec;
    S.lastReturnAt = Date.now();
    log("return", { sec });
    toast(`⚠️ ระบบบันทึกว่าคุณออกจากหน้าสอบ (ครั้งที่ ${S.switches}) — พฤติกรรมนี้จะถูกส่งให้ครูตรวจสอบ`);
  }

  function onVisibility() { document.hidden ? leave("hidden") : back(); }

  function clipHandler(type) {
    return function (e) {
      if (!S.active || S.suspended) return;
      if (type !== "paste") e.preventDefault();      // กัน copy / cut / คลิกขวา / ลาก ในกล่องโจทย์
      S.clip++;
      log(type);
    };
  }

  // ---------- API ----------
  const AntiCheat = {
    RISK,

    start(opts) {
      S.key = opts.key; S.active = true; S.suspended = false;
      load();
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("blur", () => { if (!document.hidden) leave("blur"); });
      window.addEventListener("focus", back);
      window.addEventListener("pagehide", () => leave("pagehide"));
      document.addEventListener("paste", clipHandler("paste"));
      // ตรวจเปิดหลายแท็บ
      try {
        if (window.BroadcastChannel) {
          S.channel = new BroadcastChannel("wdw-ac-" + S.key);
          const me = Math.random().toString(36).slice(2);
          S.channel.onmessage = (m) => {
            if (m.data && m.data.id !== me && !S.multiTab) { S.multiTab = true; log("multitab"); save(); }
            if (m.data && m.data.hello && m.data.id !== me) S.channel.postMessage({ id: me });
          };
          S.channel.postMessage({ id: me, hello: true });
        }
      } catch (e) { /* ไม่เป็นไร */ }
    },

    // กัน copy / คลิกขวา / ลากข้อความ ในกล่องโจทย์ + ห้ามเลือกข้อความ
    guard(el) {
      if (!el) return;
      el.style.userSelect = "none"; el.style.webkitUserSelect = "none";
      ["copy", "cut", "contextmenu", "dragstart"].forEach(t => el.addEventListener(t, clipHandler(t)));
    },

    // หยุดนับชั่วคราว (เช่น ตอนเด้ง confirm/alert ของเบราว์เซอร์ ซึ่งทำให้ blur)
    suspend(on) {
      S.suspended = !!on;
      if (on && S.away) { S.away = false; }   // ไม่นับช่วง dialog
    },

    onAnswer(qid) {
      if (!S.active || S.suspended) return;
      if (S.lastReturnAt && Date.now() - S.lastReturnAt <= RISK.quickSec * 1000) {
        S.quick++; log("quick", { q: qid }); S.lastReturnAt = 0;
      }
    },

    // สรุปตอนส่งข้อสอบ → { signals, score, level, events }
    finish(ctx) {
      if (S.away) back();
      S.active = false;
      const answeredQs = ctx.quizData.filter(q => ctx.userAnswers[q.id]);
      const times = answeredQs.map(q => ctx.timeSpent[q.id] || 0).filter(t => t > 0);
      const mean = times.length ? times.reduce((a, b) => a + b, 0) / times.length : 0;
      const sd = times.length ? Math.sqrt(times.reduce((a, b) => a + (b - mean) * (b - mean), 0) / times.length) : 0;
      const totalTime = Object.keys(ctx.timeSpent).reduce((a, k) => a + (ctx.timeSpent[k] || 0), 0);
      const scorePct = ctx.quizData.length ? (ctx.totalScore / ctx.quizData.length) * 100 : 0;

      const signals = {
        switches: S.switches,
        awaySec: S.awaySec,
        fastAnswers: answeredQs.filter(q => (q.skill === "calc" || q.skill === "apply") && (ctx.timeSpent[q.id] || 0) < RISK.fastSec).length,
        uniform: times.length >= RISK.uniformMinN && mean > 0 && (sd / mean) < RISK.uniformCV,
        fastHigh: scorePct >= RISK.fastHighScore && totalTime < RISK.fastHighTimeFrac * (ctx.timeLimitSec || 1),
        clip: S.clip,
        multiTab: S.multiTab,
        quick: S.quick,
      };
      const r = AntiCheat.evaluate(signals);
      save();
      return { signals, score: r.score, level: r.level, events: S.events.slice(-100) };
    },

    // คำนวณคะแนนความเสี่ยงจาก signals (ฟังก์ชันบริสุทธิ์ — เซิร์ฟเวอร์ใช้สูตรเดียวกัน)
    evaluate(sg) {
      const R = RISK;
      let score = 0;
      score += Math.min(R.switchCap, (sg.switches || 0) * R.switchEach);
      score += Math.min(R.awayCap, Math.floor((sg.awaySec || 0) / 10) * R.awayPer10s);
      score += Math.min(R.fastCap, (sg.fastAnswers || 0) * R.fastEach);
      if (sg.uniform) score += R.uniform;
      if (sg.fastHigh) score += R.fastHigh;
      score += Math.min(R.clipCap, (sg.clip || 0) * R.clipEach);
      if (sg.multiTab) score += R.multiTab;
      score += Math.min(R.quickCap, (sg.quick || 0) * R.quickEach);
      score = Math.min(100, score);
      return { score, level: score >= R.holdAt ? "hold" : (score >= R.flagAt ? "flag" : "ok") };
    },
  };

  window.AntiCheat = AntiCheat;
})();
