// 📄 admin.js — หน้า Admin ดูผลการประเมิน
// ─────────────────────────────────────────────────────────────
//  เข้าด้วยรหัสผ่าน → เลือกชุดสอบ → รายชื่อผู้สอบ → เจาะรายคน
//  (ข้อที่ผิด + เวลาแต่ละข้อ + เวลารวม)
// ─────────────────────────────────────────────────────────────

const CFG = window.QUIZ_CONFIG;

let adminPassword = "";          // เก็บไว้ส่งให้ gateway ตรวจซ้ำฝั่ง server
let currentTestKeyFull = "";     // "<courseId>__<testKey>"
let listRows = [];               // ผลจาก getResults
const questionCache = {};        // cache โจทย์ของแต่ละชุด {full: [questions]}

// ============ Utility ============
function $(id) { return document.getElementById(id); }

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function fmtTime(sec) {
  sec = Number(sec) || 0;
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${s < 10 ? "0" + s : s}`;
}

function fmtDate(ts) {
  if (!ts) return "-";
  const d = new Date(ts);
  if (isNaN(d)) return String(ts);
  return d.toLocaleDateString("th-TH", { day: "2-digit", month: "2-digit", year: "2-digit" }) +
    " " + d.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
}

function skillLabel(skill) {
  return (CFG.skills[skill] && CFG.skills[skill].label) || skill || "-";
}

function typesetMath() {
  if (window.MathJax && typeof MathJax.typesetPromise === "function") {
    MathJax.typesetPromise().catch(() => {});
  }
}

async function callApi(payload) {
  const res = await fetch(CFG.examApiUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `${src}?v=${Date.now()}`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("โหลดไฟล์คำถามไม่สำเร็จ"));
    document.head.appendChild(s);
  });
}

// ============ Login ============
function doLogin() {
  const pass = $("admin-pass").value.trim();
  if (pass === CFG.adminPassword) {
    adminPassword = pass;
    $("login-screen").classList.add("hidden");
    $("admin-app").classList.remove("hidden");
    buildTestDropdown();
  } else {
    $("login-error").classList.remove("hidden");
  }
}

$("login-btn").addEventListener("click", doLogin);
$("admin-pass").addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
$("logout-btn").addEventListener("click", () => location.reload());

// ============ Dropdown ชุดสอบ (จาก config) ============
function buildTestDropdown() {
  const opts = Object.keys(CFG.tests).map(full => {
    const t = CFG.tests[full];
    return `<option value="${full}">${escapeHtml(t.title || full)}</option>`;
  }).join("");
  $("test-select").innerHTML = opts || `<option value="">— ยังไม่มีชุดสอบใน config —</option>`;
}

$("reload-btn").addEventListener("click", () => loadResults($("test-select").value));
$("test-select").addEventListener("change", () => loadResults($("test-select").value));
$("search-box").addEventListener("input", renderList);
$("back-list-btn").addEventListener("click", () => {
  $("detail-view").classList.add("hidden");
  $("list-view").classList.remove("hidden");
});

// ============ View 1: รายชื่อผู้สอบ ============
async function loadResults(full) {
  if (!full) return;
  currentTestKeyFull = full;
  const t = CFG.tests[full];

  $("detail-view").classList.add("hidden");
  $("list-view").classList.remove("hidden");
  $("list-title").textContent = "รายชื่อผู้สอบ — " + (t.title || full);
  $("list-body").innerHTML = `<tr><td class="state" colspan="7">⏳ กำลังโหลด...</td></tr>`;

  try {
    const r = await callApi({
      action: "getResults",
      courseId: t.courseId, testKey: t.testKey,
      adminPassword,
    });
    if (!r.ok) throw new Error(r.message || "โหลดไม่สำเร็จ");
    listRows = r.rows || [];
    renderList();
  } catch (e) {
    $("list-body").innerHTML = `<tr><td class="state" colspan="7">❌ ${escapeHtml(e.message)}</td></tr>`;
  }
}

function renderList() {
  const kw = $("search-box").value.trim().toLowerCase();
  const rows = listRows.filter(r =>
    !kw || `${r.displayName} ${r.userId}`.toLowerCase().includes(kw));

  if (!rows.length) {
    $("list-body").innerHTML = `<tr><td class="state" colspan="7">ไม่พบผู้สอบ</td></tr>`;
    return;
  }

  $("list-body").innerHTML = rows.map(r => {
    const total = r.totalQuestions || "?";
    const rObj = CFG.calcRank((r.totalScore / (r.totalQuestions || 1)) * 100);
    return `
      <tr>
        <td class="left">${escapeHtml(r.displayName || r.userId)}</td>
        <td class="score-pill">${r.totalScore} / ${total}</td>
        <td><span class="rank-badge" style="background:${rObj.color}">${escapeHtml(r.rank || rObj.rank)}</span></td>
        <td>${riskBadge(r.riskScore)}</td>
        <td>${fmtTime(r.timeTotal)}</td>
        <td>${fmtDate(r.timestamp)}</td>
        <td><button class="row-link" onclick="openDetail('${encodeURIComponent(r.userId)}')">ดูรายละเอียด</button></td>
      </tr>`;
  }).join("");
}

// ============ View 2: รายละเอียดรายคน ============
async function getQuestions(full) {
  if (questionCache[full]) return questionCache[full];
  const t = CFG.tests[full];
  window.TEST_DATA = null;
  window.QUIZ_DATA = null;
  // ชุดแบบ final-test ประกาศคำถามเป็น QUIZ_DATA (ระบุ questionFile ไว้ใน config) / ชุดเดิมใช้ TEST_DATA
  await loadScript(t.questionFile || CFG.getQuestionFile(t.courseId, t.testKey));
  questionCache[full] = (t.questionFile ? window.QUIZ_DATA : window.TEST_DATA) || [];
  return questionCache[full];
}

async function openDetail(userIdEnc) {
  const userId = decodeURIComponent(userIdEnc);
  const full = currentTestKeyFull;
  const t = CFG.tests[full];

  $("list-view").classList.add("hidden");
  $("detail-view").classList.remove("hidden");
  $("detail-summary").innerHTML = `<div class="state" style="grid-column:1/-1;">⏳ กำลังโหลด...</div>`;
  $("detail-body").innerHTML = "";

  try {
    const [detRes, questions] = await Promise.all([
      callApi({ action: "getStudentDetail", courseId: t.courseId, testKey: t.testKey, userId, adminPassword }),
      getQuestions(full),
    ]);
    if (!detRes.ok) throw new Error(detRes.message || "ไม่พบข้อมูล");
    renderDetail(detRes.detail, questions);
  } catch (e) {
    $("detail-summary").innerHTML = `<div class="state" style="grid-column:1/-1;">❌ ${escapeHtml(e.message)}</div>`;
  }
}

function renderDetail(detail, questions) {
  const answers = detail.answers || {};
  const timeSpent = detail.timeSpent || {};
  const totalTime = Object.values(timeSpent).reduce((a, b) => a + (Number(b) || 0), 0);
  const rObj = CFG.calcRank((detail.totalScore / (detail.totalQuestions || 1)) * 100);

  $("detail-summary").innerHTML = `
    <div class="sum-box name-box">
      <div class="sum-label">ผู้สอบ</div>
      <div class="sum-value">${escapeHtml(detail.displayName || detail.userId)}</div>
    </div>
    <div class="sum-box">
      <div class="sum-label">คะแนน</div>
      <div class="sum-value">${detail.totalScore} / ${detail.totalQuestions || "?"}</div>
    </div>
    <div class="sum-box">
      <div class="sum-label">Rank รวม</div>
      <div class="sum-value" style="color:${rObj.color}">${escapeHtml(detail.rank || rObj.rank)}</div>
    </div>
    <div class="sum-box">
      <div class="sum-label">เวลารวมทั้งหมด</div>
      <div class="sum-value">${fmtTime(totalTime)}</div>
    </div>
    <div class="sum-box">
      <div class="sum-label">วันที่สอบ</div>
      <div class="sum-value" style="font-size:1rem;">${fmtDate(detail.timestamp)}</div>
    </div>`;

  renderEvaluation(detail, questions, totalTime);
  renderRisk(detail.risk);

  $("detail-body").innerHTML = questions.map((q, i) => {
    const stuKey = answers[q.id];
    const correctKey = q.answer;
    const isBlank = (stuKey == null || stuKey === "");
    const isCorrect = (stuKey === correctKey);

    const choiceText = key => {
      const c = (q.choices || []).find(c => c.key === key);
      return c ? c.text : (key == null ? "—" : key);
    };

    const rowCls = isBlank ? "q-blank" : (isCorrect ? "" : "q-wrong");
    const resIco = isBlank ? "—" : (isCorrect ? "✅" : "❌");
    const stuCls = isBlank ? "cell-blank" : (isCorrect ? "cell-correct" : "cell-wrong");

    return `
      <tr class="${rowCls}">
        <td>${i + 1}</td>
        <td class="left q-prompt">
          <div><strong>${escapeHtml(q.chapter || "")}</strong> / ${escapeHtml(q.subtopic || "")}</div>
        </td>
        <td>${skillLabel(q.skill)}</td>
        <td class="${stuCls}">${isBlank ? "ไม่ได้ตอบ" : escapeHtml(choiceText(stuKey))}</td>
        <td class="cell-correct">${escapeHtml(choiceText(correctKey))}</td>
        <td class="res-ico">${resIco}</td>
        <td>${fmtTime(timeSpent[q.id])}</td>
      </tr>`;
  }).join("");

  typesetMath();
}

// ============ ผลการประเมิน: สัตว์ / คะแนน+Rank รายหัวข้อ / Radar ============
let adminChart = null;

// เลือกสัตว์ให้เหมือนที่นักเรียนเห็นในหน้าสอบ
//  - personaRules "v16": กติกาครบ 16 ตัว (final-test ชุดใหม่)
//  - อื่น ๆ: กติกาเดิมของระบบ exam (เลือกได้ 9 ตัว)
function pickPersona(t, radar, chapterKeys, totalPercent, timeAvg, answered, totalQ) {
  const P = id => CFG.personas.find(a => a.id === id);
  const theory = radar.theory || 0, calc = radar.calc || 0, apply = radar.apply || 0;

  if (t.personaRules === "v16") {
    const ch = chapterKeys.map(k => radar[k] || 0);
    const best = Math.max(...ch), worst = Math.min(...ch), gap = best - worst;
    const hard = radar[t.hardChapter] || 0;
    if (totalPercent >= 85) return P("eagle");
    if (hard >= 80 && calc >= 80 && totalPercent >= 75) return P("dragon");
    if (theory >= 80 && calc < 60) return P("owl");
    if (timeAvg > 0 && timeAvg < 40 && totalPercent >= 60) return P("cheetah");
    if (calc >= 80 && theory < 60) return P("monkey");
    if (calc >= 70 && calc >= theory + 20) return P("shark");
    if (apply >= 80) return P("dolphin");
    if (theory >= 70 && apply < 50) return P("parrot");
    if (timeAvg > 100 && totalPercent >= 70) return P("elephant");
    if (timeAvg > 100 && totalPercent >= 40) return P("tortoise");
    if (gap >= 50 && best >= 75 && totalPercent < 60) return P("cat");
    if (gap >= 40 && totalPercent >= 60) return P("fox");
    if (gap <= 20 && totalPercent >= 50) return P("spider");
    if (answered >= totalQ && totalPercent >= 40 && totalPercent < 60) return P("bee");
    if (totalPercent < 40) return P("ant");
    return P("bear");
  }

  if (totalPercent >= 85) return P("eagle");
  if (calc >= 80 && apply >= 80 && totalPercent >= 75) return P("dragon");
  if (theory >= 80 && calc < 60) return P("owl");
  if (timeAvg > 0 && timeAvg < 40 && totalPercent >= 60) return P("cheetah");
  if (calc >= 80 && theory < 60) return P("monkey");
  if (apply >= 80) return P("dolphin");
  if (timeAvg > 100 && totalPercent >= 70) return P("elephant");
  if (totalPercent < 40) return P("ant");
  return P("bear");
}

function renderEvaluation(detail, questions, totalTime) {
  const box = $("detail-eval");
  if (adminChart) { adminChart.destroy(); adminChart = null; }

  const sk = detail.skills || {};
  const details = sk.details || {};
  const keys = Object.keys(details);
  if (!keys.length) {
    box.innerHTML = `<div class="eval-note">ไม่มีข้อมูลการประเมินรายหัวข้อของผู้สอบคนนี้ (บันทึกก่อนมีระบบประเมิน)</div>`;
    return;
  }

  const t = CFG.tests[currentTestKeyFull] || {};
  const totalQ = detail.totalQuestions || questions.length || 1;
  const totalPercent = (Number(detail.totalScore) / totalQ) * 100;
  const timeAvg = totalTime > 0 ? totalTime / totalQ : 0;
  const answers = detail.answers || {};
  const answered = Object.keys(answers).filter(k => answers[k] != null && answers[k] !== "").length;
  const chapterKeys = keys.filter(k => !CFG.skills[k]);

  // 1) สัตว์ + จุดแข็ง/จุดอ่อน
  const persona = pickPersona(t, sk, chapterKeys, totalPercent, timeAvg, answered, totalQ);
  const personaHtml = persona ? `
    <div class="eval-persona">
      <img src="${escapeHtml(persona.img)}" alt="${escapeHtml(persona.name)}">
      <div>
        <div class="p-label">ประเภทการทำข้อสอบที่ได้รับการประเมิน</div>
        <h2>${escapeHtml(persona.name)}</h2>
        <div class="p-desc">${escapeHtml(persona.desc)}</div>
        <div class="trait">🟢 <strong>จุดแข็ง:</strong> ${escapeHtml(persona.strength)}</div>
        <div class="trait">🔴 <strong>จุดที่ควรพัฒนา:</strong> ${escapeHtml(persona.weakness)}</div>
      </div>
    </div>` : "";

  // 2) คะแนน + Rank รายหัวข้อ (ทักษะก่อน แล้วตามด้วยหัวข้อหลัก)
  const order = [...keys.filter(k => CFG.skills[k]), ...chapterKeys];
  const topicsHtml = order.map(k => {
    const d = details[k] || {};
    const pct = Number(sk[k]) || 0;
    const r = CFG.calcRank(pct);
    const name = d.name || skillLabel(k);
    let subs = "";
    if (d.subtopics && Object.keys(d.subtopics).length) {
      subs = `<div class="t-sub">` + Object.keys(d.subtopics).map(s => {
        const c = d.subtopics[s].c, tt = d.subtopics[s].t;
        const col = c === tt ? "#16a34a" : (c > 0 ? "#ca8a04" : "#dc2626");
        return `<div><span>- ${escapeHtml(s)}</span><strong style="color:${col}">${c}/${tt}</strong></div>`;
      }).join("") + `</div>`;
    }
    return `
      <div class="topic-card">
        <div class="t-title">${escapeHtml(name)}</div>
        <div class="t-bar"><div class="t-fill" style="width:${pct}%;background:${r.color}"></div></div>
        <div class="t-row">
          <span>${pct}%${(d.t != null) ? ` <span style="color:#64748b">(${d.c}/${d.t} ข้อ)</span>` : ""}</span>
          <span class="t-rank" style="background:${r.color}22;color:${r.color}">${escapeHtml(r.rank)}</span>
        </div>
        ${subs}
      </div>`;
  }).join("");

  // 3) Radar
  box.innerHTML = personaHtml + `
    <div class="eval-grid">
      <div>
        <h3 style="margin:0 0 10px;">คะแนนและ Rank รายหัวข้อ</h3>
        <div class="eval-topics">${topicsHtml}</div>
      </div>
      <div class="eval-chart">
        <h3 style="margin:0 0 6px;text-align:center;">กราฟความสมดุล (Radar)</h3>
        <canvas id="adminRadar"></canvas>
      </div>
    </div>`;

  const canvas = $("adminRadar");
  if (canvas && window.Chart) {
    adminChart = new Chart(canvas.getContext("2d"), {
      type: "radar",
      data: {
        labels: order.map(k => (details[k] && details[k].name) || skillLabel(k)),
        datasets: [{
          label: "ความสามารถ (%)",
          data: order.map(k => Number(sk[k]) || 0),
          backgroundColor: "rgba(30, 61, 143, 0.2)",
          borderColor: "rgba(30, 61, 143, 1)",
          pointBackgroundColor: "rgba(217, 76, 76, 1)",
          borderWidth: 2,
        }],
      },
      options: { scales: { r: { suggestedMin: 0, suggestedMax: 100 } }, plugins: { legend: { display: false } } },
    });
  }
}


// ============ ความเสี่ยงทุจริต (Anti-cheat) ============
//  ระดับ: < 30 = ปกติ, 30–59 = ติดธง, >= 60 = ถูกถือผล (ต้องตรงกับ RISK ใน anti-cheat.js / gateway)
function riskLevelOf(score) { return score >= 60 ? "hold" : (score >= 30 ? "flag" : "ok"); }

function riskBadge(score) {
  if (score === "" || score == null || isNaN(Number(score))) return `<span class="risk-badge risk-none" title="ไม่มีข้อมูล (ส่งก่อนมีระบบ anti-cheat)">—</span>`;
  const n = Number(score), lv = riskLevelOf(n);
  const icon = lv === "hold" ? "🔴" : (lv === "flag" ? "🟡" : "🟢");
  return `<span class="risk-badge risk-${lv}">${icon} ${n}</span>`;
}

function fmtClock(ts) {
  const d = new Date(ts);
  return isNaN(d) ? "-" : d.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function eventLabel(e) {
  switch (e.type) {
    case "leave":     return "🚪 ออกจากหน้าสอบ" + (e.reason ? ` (${escapeHtml(e.reason)})` : "");
    case "return":    return `↩️ กลับเข้าหน้าสอบ (หายไป ${e.sec || 0} วินาที)`;
    case "copy":      return "📋 คัดลอกโจทย์";
    case "cut":       return "✂️ ตัดข้อความ";
    case "paste":     return "📥 วางข้อความ";
    case "contextmenu": return "🖱️ คลิกขวา";
    case "dragstart": return "🖱️ ลากข้อความ";
    case "quick":     return `⚡ ตอบทันทีหลังกลับเข้าหน้า${e.q ? ` (${escapeHtml(e.q)})` : ""}`;
    case "multitab":  return "🗂️ ตรวจพบการเปิดข้อสอบหลายแท็บ";
    default:          return escapeHtml(e.type);
  }
}

function renderRisk(risk) {
  const box = $("detail-risk");
  const hasScore = risk && risk.score !== "" && risk.score != null && !isNaN(Number(risk.score));
  if (!hasScore) {
    box.innerHTML = `<div class="risk-panel"><h3>🛡️ พฤติกรรมระหว่างสอบ</h3><div class="risk-sig">ไม่มีข้อมูล (ผลสอบนี้ส่งก่อนเปิดใช้ระบบ anti-cheat หรือผ่านหน้าสอบรุ่นเก่า)</div></div>`;
    return;
  }
  const score = Number(risk.score), lv = riskLevelOf(score);
  const lvText = { ok: "ปกติ", flag: "ติดธง (ควรตรวจสอบ)", hold: "เสี่ยงสูง (ถูกถือผลไว้)" }[lv];
  const ac = risk.ac || {};
  const sg = ac.signals;

  let sigHtml = "";
  if (sg) {
    sigHtml = `<div class="risk-sig">
      สลับหน้าจอ/แอป <b>${sg.switches || 0}</b> ครั้ง (หายไปรวม <b>${sg.awaySec || 0}</b> วินาที) ·
      โจทย์คำนวณ/ประยุกต์ที่ตอบเร็วกว่า 10 วินาที <b>${sg.fastAnswers || 0}</b> ข้อ ·
      คัดลอก/คลิกขวา/วาง <b>${sg.clip || 0}</b> ครั้ง ·
      ตอบทันทีหลังกลับเข้าหน้า <b>${sg.quick || 0}</b> ครั้ง<br>
      เวลาต่อข้อสม่ำเสมอผิดธรรมชาติ: <b>${sg.uniform ? "ใช่" : "ไม่"}</b> ·
      คะแนนสูงมากแต่ใช้เวลาน้อย: <b>${sg.fastHigh ? "ใช่" : "ไม่"}</b> ·
      เปิดหลายแท็บ: <b>${sg.multiTab ? "ใช่" : "ไม่"}</b>
    </div>`;
  } else {
    sigHtml = `<div class="risk-sig">ไม่มีรายละเอียดสัญญาณ (เก็บเฉพาะคะแนนความเสี่ยง)</div>`;
  }

  const events = Array.isArray(ac.events) ? ac.events : [];
  const evHtml = events.length ? `
    <details style="margin-top:8px;"><summary style="cursor:pointer;color:#1E3D8F;">ลำดับเหตุการณ์ (${events.length} รายการ)</summary>
      <div class="risk-events"><table>${events.map(e => `<tr><td>${fmtClock(e.t)}</td><td>${eventLabel(e)}</td></tr>`).join("")}</table></div>
    </details>` : "";

  box.innerHTML = `
    <div class="risk-panel">
      <h3>🛡️ พฤติกรรมระหว่างสอบ &nbsp;<span class="risk-badge risk-${lv}">${riskBadge(score).replace(/<[^>]+>/g, "")} · ${lvText}</span></h3>
      ${sigHtml}${evHtml}
    </div>`;
}


// expose สำหรับ onclick ใน HTML
window.openDetail = openDetail;
