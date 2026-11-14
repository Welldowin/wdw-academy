// worksheet.js — ตัวเรนเดอร์ "ใบงาน" (ถูก/ผิด · เติมคำ · ภารกิจปรับค่า · 4 ตัวเลือก)
// ใช้ Apps Script ตัวเดียวกับ quiz.js (getQuizStatus / submitQuiz / getLeaderboard)
// คะแนน = ข้อละ 1 คะแนน รวม 30 ; เกณฑ์เพชรเหมือน quiz เดิม (90% → 2, 70% → 1, 50% → 0.5)

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6di6lq-HYIUPFuXRuy0rzg5n3Xw4IsqkvcTbTp3AAzakhXfijGx7XwcTT4IWr-h_3oQ/exec";

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course") || "m5-term2-nebula";
const quizKey = params.get("quiz") || "quiz1";

// โหมดตัวอย่าง: ใช้ได้เฉพาะบน localhost เท่านั้น (ไม่แตะระบบจริง / ไม่ต้องล็อกอิน)
const IS_LOCAL = ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
const PREVIEW = IS_LOCAL && params.get("preview") === "1";

const REVEAL_DELAY_MS = 15 * 60 * 1000; // เฉลยข้อที่ผิดหลังส่ง 15 นาที (เหมือน quiz.js)

let currentUser = null;
let WS = null;            // meta + pages + data
let ITEMS = [];           // ทุกข้อแบบแบน
let answers = {};
let currentPage = 0;
let reviewMode = false;
let startTime = Date.now();
let timerInterval = null;

const $ = (id) => document.getElementById(id);

/* ============================== utilities ============================== */
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function fmtTime(sec) {
  sec = Number(sec || 0);
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}
function rewardByScore(score, max) {
  const p = score / max;
  if (p >= 0.9) return { diamonds: 2, firework: "gold" };
  if (p >= 0.7) return { diamonds: 1, firework: "silver" };
  if (p >= 0.5) return { diamonds: 0.5, firework: "bronze" };
  return { diamonds: 0, firework: "none" };
}
function launchFirework(type) {
  if (typeof confetti !== "function") return;
  const map = {
    gold: ["#FFD700", "#FFEC80", "#FFF4B0"],
    silver: ["#C0C0C0", "#E5E7EB", "#9CA3AF"],
    bronze: ["#CD7F32", "#B45309", "#F59E0B"]
  };
  if (map[type]) confetti({ particleCount: 170, spread: 90, origin: { y: 0.6 }, colors: map[type] });
}
function showMessage(text, mode = "") {
  $("studentInfo").textContent = text;
  $("modeInfo").textContent = mode;
}

/* ---------- ตั้งเวลาเฉลย (ฝั่ง client) ---------- */
function submitTimeKey() { return `wdw_submitAt_${courseId}_${quizKey}_${currentUser ? currentUser.uid : "anon"}`; }
function markSubmitTime() { try { localStorage.setItem(submitTimeKey(), String(Date.now())); } catch (e) {} }
function getRevealState() {
  let t = null;
  try { const v = localStorage.getItem(submitTimeKey()); t = v ? Number(v) : null; } catch (e) {}
  if (!t || Number.isNaN(t)) return { reveal: true, remainMs: 0 };
  const remainMs = REVEAL_DELAY_MS - (Date.now() - t);
  return { reveal: remainMs <= 0, remainMs: Math.max(0, remainMs) };
}

/* ---------- draft ในเครื่อง (กันรีเฟรชแล้วงานหาย) ---------- */
function draftKey() { return `wdw_ws_draft_${courseId}_${quizKey}_${currentUser ? currentUser.uid : "anon"}`; }
function saveDraft() {
  if (reviewMode) return;
  try {
    localStorage.setItem(draftKey(), JSON.stringify({ answers, start: startTime, page: currentPage, name: $("displayNameInput").value }));
  } catch (e) {}
}
function loadDraft() {
  try { return JSON.parse(localStorage.getItem(draftKey()) || "null"); } catch (e) { return null; }
}
function clearDraft() { try { localStorage.removeItem(draftKey()); } catch (e) {} }

/* ============================== API ============================== */
async function postJSON(payload) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

const MOCK_ROSTER = [
  { userId: "u1", firstName: "มินตรา", nickname: "มิน" }, { userId: "u2", firstName: "ภูมิ", nickname: "ภูมิ" },
  { userId: "u3", firstName: "ต้นกล้า", nickname: "กล้า" }, { userId: "u4", firstName: "เอวา", nickname: "เอวา" },
  { userId: "u5", firstName: "พีท", nickname: "พีท" }, { userId: "u6", firstName: "นุ่น", nickname: "นุ่น" },
  { userId: "u7", firstName: "ก้อง", nickname: "ก้อง" }, { userId: "u8", firstName: "มายด์", nickname: "มายด์" }
];
function previewKey() { return `wdw_preview_ws_${courseId}_${quizKey}`; }
function mockApi(p) {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(previewKey()) || "null"); } catch (e) {}
  if (p.action === "getQuizStatus") return saved ? { ok: true, submitted: true, ...saved } : { ok: true, submitted: false };
  if (p.action === "submitQuiz") {
    localStorage.setItem(previewKey(), JSON.stringify({ score: p.score, timeSec: p.timeSec, displayName: p.displayName, answers: p.answers, detail: p.detail }));
    return { ok: true, score: p.score };
  }
  if (p.action === "getLeaderboard") {
    const rows = [
      { userId: "u1", displayName: "มิน", score: 28, timeSec: 1500 },
      { userId: "u2", displayName: "ภูมิ", score: 24, timeSec: 1700 },
      { userId: "u3", displayName: "กล้า", score: 19, timeSec: 2100 },
      { userId: "u4", displayName: "เอวา", score: 14, timeSec: 1300 }
    ];
    if (saved) rows.push({ userId: "preview-user", displayName: saved.displayName, score: saved.score, timeSec: saved.timeSec });
    return { ok: true, rows };
  }
  if (p.action === "getCourseProgress") return { ok: true, rows: MOCK_ROSTER };
  return { ok: false, message: "unknown" };
}
async function api(payload) {
  if (PREVIEW) { await new Promise((r) => setTimeout(r, 250)); return mockApi(payload); }
  return postJSON(payload);
}
async function fetchRoster() {
  if (PREVIEW) return mockApi({ action: "getCourseProgress" }).rows;
  try {
    const url = window.PROGRESS_API_URL;
    if (!url) return [];
    const res = await fetch(url, {
      method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "getCourseProgress", courseId })
    });
    const j = await res.json();
    return j.ok ? j.rows || [] : [];
  } catch (e) { return []; }
}

/* ============================== รูปประกอบ (SVG) ============================== */
const COL = { "+": "#ff5d73", "-": "#4da3ff", "?": "#3a3270" };
const W = 'style="fill:#fff"';

function dot(cx, cy, s, r = 20, ring = false) {
  const sym = s === "+" ? "+" : s === "-" ? "−" : "?";
  return `${ring ? `<circle cx="${cx}" cy="${cy}" r="${r + 8}" fill="none" stroke="#e08600" stroke-width="2.5" stroke-dasharray="4 4"/>` : ""}
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${COL[s] || COL["?"]}" stroke="#fff" stroke-opacity=".55" stroke-width="1.5"/>
    <text x="${cx}" y="${cy + r * 0.36}" text-anchor="middle" font-size="${r * 1.1}" font-weight="700" ${W}>${sym}</text>`;
}
function dimH(x1, x2, y, label) {
  return `<line class="dim" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/><line class="dim" x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}"/><line class="dim" x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}"/>
    <text x="${(x1 + x2) / 2}" y="${y - 8}" text-anchor="middle" font-size="14" style="fill:#e08600">${esc(label)}</text>`;
}
function dimV(x, y1, y2, label) {
  return `<line class="dim" x1="${x}" y1="${y1}" x2="${x}" y2="${y2}"/><line class="dim" x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}"/><line class="dim" x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}"/>
    <text x="${x - 10}" y="${(y1 + y2) / 2 + 5}" text-anchor="end" font-size="14" style="fill:#e08600">${esc(label)}</text>`;
}
function arrowLine(x1, y1, x2, y2) {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
  const p1 = [x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)];
  const p2 = [x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)];
  return `<line class="force" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><polygon points="${x2},${y2} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}" fill="#ff8a1f"/>`;
}
const svgWrap = (w, h, body) => `<svg class="fig" viewBox="0 0 ${w} ${h}" width="${w}" role="img">${body}</svg>`;
const num = (t) => parseFloat(String(t).replace(/[^\d.]/g, "")) || 1;

function figLine(f) {
  const n = f.charges.length;
  if (f.orient === "v") {
    const gaps = f.gaps.map(num), total = gaps.reduce((a, b) => a + b, 0), span = 230, top = 46;
    const ys = [top]; gaps.forEach((g) => ys.push(ys[ys.length - 1] + (g / total) * span));
    const H = top + span + 50, cx = 150;
    let s = `<line class="thin" x1="${cx}" y1="14" x2="${cx}" y2="${H - 16}"/>`;
    f.charges.forEach((c, i) => {
      s += dot(cx, ys[i], c.s, 20, c.target);
      s += `<text x="${cx + 34}" y="${ys[i] - 2}" font-size="16" font-weight="600">${esc(c.name)}</text><text x="${cx + 34}" y="${ys[i] + 18}" font-size="15">${esc(c.q)}</text>`;
    });
    gaps.forEach((g, i) => { s += dimV(56, ys[i], ys[i + 1], f.gaps[i]); });
    return svgWrap(330, H, s);
  }
  const gaps = f.gaps.map(num), total = gaps.reduce((a, b) => a + b, 0), span = 420, left = 70;
  const xs = [left]; gaps.forEach((g) => xs.push(xs[xs.length - 1] + (g / total) * span));
  const hasMass = f.charges.some((c) => c.mass), H = hasMass ? 196 : 176, cy = 74;
  let s = `<line class="thin" x1="30" y1="${cy}" x2="530" y2="${cy}"/>`;
  f.charges.forEach((c, i) => {
    s += dot(xs[i], cy, c.s, 20, c.target);
    s += `<text x="${xs[i]}" y="26" text-anchor="middle" font-size="16" font-weight="600">${esc(c.name)}</text>`;
    s += `<text x="${xs[i]}" y="${cy + 46}" text-anchor="middle" font-size="15">${esc(c.q)}</text>`;
    if (c.mass) s += `<text x="${xs[i]}" y="${cy + 66}" text-anchor="middle" font-size="14" style="fill:#6f68b0">m = ${esc(c.mass)}</text>`;
  });
  gaps.forEach((g, i) => { s += dimH(xs[i], xs[i + 1], H - 22, f.gaps[i]); });
  return svgWrap(560, H, s);
}

function figRight(f) {
  const dxv = num(f.dx), dyv = num(f.dy), sc = 210 / Math.max(dxv, dyv);
  const dxp = dxv * sc, dyp = dyv * sc, cx = 140, top = 52, cy = top + dyp, H = cy + 70;
  let s = `<line class="solid" x1="${cx}" y1="${cy}" x2="${cx + dxp}" y2="${cy}"/><line class="solid" x1="${cx}" y1="${cy}" x2="${cx}" y2="${top}"/><line class="thin" x1="${cx + dxp}" y1="${cy}" x2="${cx}" y2="${top}"/>`;
  s += `<path class="dim" d="M${cx + 16} ${cy} V${cy - 16} H${cx}"/>`;
  s += dot(cx, cy, f.corner.s) + dot(cx + dxp, cy, f.px.s) + dot(cx, top, f.py.s);
  s += `<text x="${cx - 30}" y="${cy + 30}" text-anchor="end" font-size="15">${esc(f.corner.name)} ${esc(f.corner.q)}</text>`;
  s += `<text x="${cx + dxp}" y="${cy - 32}" text-anchor="middle" font-size="15">${esc(f.px.name)} ${esc(f.px.q)}</text>`;
  s += `<text x="${cx + 32}" y="${top + 5}" font-size="15">${esc(f.py.name)} ${esc(f.py.q)}</text>`;
  s += dimH(cx, cx + dxp, cy + 44, f.dx);
  s += dimV(cx - 54, top, cy, f.dy);
  return svgWrap(Math.max(440, cx + dxp + 120), H, s);
}

function figSquare(f) {
  const side = 180, x0 = 120, y0 = 60;
  const pos = { D: [x0, y0], C: [x0 + side, y0], B: [x0 + side, y0 + side], A: [x0, y0 + side] };
  const lab = { D: [-30, -26, "end"], C: [30, -26, "start"], B: [30, 40, "start"], A: [-30, 40, "end"] };
  let s = `<rect class="solid" x="${x0}" y="${y0}" width="${side}" height="${side}"/>`;
  if (f.target) {
    const opp = { A: "C", B: "D", C: "A", D: "B" }[f.target];
    s += `<line class="thin" x1="${pos[f.target][0]}" y1="${pos[f.target][1]}" x2="${pos[opp][0]}" y2="${pos[opp][1]}"/>`;
  }
  ["A", "B", "C", "D"].forEach((k) => {
    const [x, y] = pos[k], [ox, oy, an] = lab[k];
    s += dot(x, y, f.signs[k], 18, f.target === k);
    s += `<text x="${x + ox}" y="${y + oy}" text-anchor="${an}" font-size="15">${k}: ${esc(f.corners[k])}</text>`;
  });
  if (f.side) s += dimH(x0, x0 + side, y0 + side + 64, f.side);
  return svgWrap(440, y0 + side + 84, s);
}

function figFloat(f) {
  const cx = 190, groundY = 292;
  let s = `<rect x="40" y="${groundY}" width="300" height="16" rx="4" fill="#3a3270"/><text x="190" y="${groundY + 13}" text-anchor="middle" font-size="11" style="fill:#d9d3ff">พื้น (ฉนวน)</text>`;
  s += dot(cx, groundY - 20, "+", 18);
  s += `<text x="${cx + 32}" y="${groundY - 14}" font-size="15">${esc(f.fixedQ)} (ตรึงไว้)</text>`;
  s += `<line class="thin" x1="${cx}" y1="106" x2="${cx}" y2="${groundY - 40}"/>`;
  s += dimV(cx + 64, 84, groundY - 20, "");
  s += `<text x="${cx + 76}" y="${(84 + groundY - 20) / 2 + 5}" font-size="14" style="fill:#e08600">${esc(f.h)}</text>`;
  s += dot(cx, 84, "+", 22);
  s += `<text x="${cx - 36}" y="90" text-anchor="end" font-size="15">${esc(f.ballQ)}</text><text x="${cx - 36}" y="110" text-anchor="end" font-size="13" style="fill:#6f68b0">ลอยนิ่ง</text>`;
  s += arrowLine(cx, 54, cx, 14) + `<text x="${cx + 10}" y="30" font-size="13" style="fill:#ff8a1f">แรงผลักทางไฟฟ้า</text>`;
  return svgWrap(380, 322, s);
}

function figHang(f) {
  const px = 200, py = 26, bx = 82, by = 150;
  let s = `<rect x="120" y="14" width="160" height="10" rx="3" fill="#3a3270"/>`;
  s += `<line class="thin" x1="${px}" y1="${py}" x2="${px}" y2="${by}"/>`;
  s += `<line class="solid" x1="${px}" y1="${py}" x2="${bx}" y2="${by}"/><line class="solid" x1="${px}" y1="${py}" x2="${400 - bx}" y2="${by}"/>`;
  s += `<path class="dim" d="M200 86 A60 60 0 0 1 157.6 68.4"/><text x="150" y="104" text-anchor="end" font-size="14" style="fill:#e08600">${esc(f.angle)}</text>`;
  s += dot(bx, by, "+", 20) + dot(400 - bx, by, "+", 20);
  s += `<text x="${bx}" y="${by + 40}" text-anchor="middle" font-size="14">+q</text><text x="${400 - bx}" y="${by + 40}" text-anchor="middle" font-size="14">+q</text>`;
  s += `<text x="${bx}" y="${by + 58}" text-anchor="middle" font-size="13" style="fill:#6f68b0">m = ${esc(f.m)}</text><text x="${400 - bx}" y="${by + 58}" text-anchor="middle" font-size="13" style="fill:#6f68b0">m = ${esc(f.m)}</text>`;
  s += dimH(bx, 400 - bx, 224, f.d);
  return svgWrap(400, 248, s);
}

function marks(sign, x, y, n = 3, dx = 12) {
  const sym = sign === "+" ? "+" : "−", col = sign === "+" ? "#e23b57" : "#2f7de0";
  let o = "";
  for (let i = 0; i < n; i++) o += `<text x="${x + i * dx}" y="${y}" font-size="16" font-weight="700" style="fill:${col}">${sym}</text>`;
  return o;
}
function figElectroscope(f) {
  const rod = f.rod, opp = rod === "+" ? "-" : "+";
  const domeSign = f.touching ? rod : opp, leafSign = rod;
  const open = f.state === "spread" ? 40 : 4;
  let s = `<rect x="118" y="118" width="124" height="176" rx="16" fill="rgba(143,134,201,0.1)" stroke="#8f86c9" stroke-width="2"/>`;
  s += `<line class="solid" x1="180" y1="82" x2="180" y2="214"/>`;
  s += `<circle cx="180" cy="64" r="22" fill="#ffffff" stroke="#5b52a8" stroke-width="2"/>`;
  s += `<line x1="180" y1="214" x2="${180 - open}" y2="${214 + 54}" stroke="#e08600" stroke-width="6" stroke-linecap="round"/><line x1="180" y1="214" x2="${180 + open}" y2="${214 + 54}" stroke="#e08600" stroke-width="6" stroke-linecap="round"/>`;
  s += marks(domeSign, 166, 70, 2, 14);
  s += marks(leafSign, 180 - open - 22, 214 + 40, 1) + marks(leafSign, 180 + open + 10, 214 + 40, 1);
  const col = COL[rod], ex = f.touching ? 160 : 128, ey = 62;
  s += `<line x1="22" y1="34" x2="${ex}" y2="${ey}" stroke="${col}" stroke-width="14" stroke-linecap="round"/>`;
  s += `<text x="20" y="18" font-size="14" font-weight="600">แท่งประจุ ${rod === "+" ? "+" : "−"}</text>`;
  s += `<text x="180" y="316" text-anchor="middle" font-size="13" style="fill:#6f68b0">อิเล็กโทรสโคปแผ่นโลหะบาง</text>`;
  return svgWrap(360, 328, s);
}
function figPith(f) {
  const rod = f.rod, opp = rod === "+" ? "-" : "+";
  let s = `<rect x="110" y="14" width="160" height="10" rx="3" fill="#3a3270"/>`;
  s += `<line class="thin" x1="190" y1="24" x2="190" y2="170"/><line class="solid" x1="190" y1="24" x2="236" y2="154"/>`;
  s += `<circle cx="240" cy="166" r="22" fill="#d9d3ff" fill-opacity=".85" stroke="#fff" stroke-width="2"/>`;
  s += marks(opp, 242, 162, 1) + marks(rod, 222, 172, 1);
  s += `<rect x="284" y="152" width="78" height="30" rx="15" fill="${COL[rod]}"/>`;
  s += `<text x="323" y="140" text-anchor="middle" font-size="14" font-weight="600">แท่งประจุ ${rod === "+" ? "+" : "−"}</text>`;
  s += `<text x="150" y="214" text-anchor="middle" font-size="13" style="fill:#6f68b0">ลูกพิธเป็นกลาง</text>`;
  return svgWrap(380, 232, s);
}
function figure(f) {
  if (!f) return "";
  const map = {
    line: figLine, right: figRight, square: figSquare, float: figFloat, hang: figHang, electroscope: figElectroscope, pith: figPith,
    electro: figElectro, balance: figBalance, water: figWater, fsgraph: figFsGraph, track: figTrack, perp: figPerp
  };
  return `<div class="fig-wrap">${map[f.kind](f)}</div>`;
}

/* ============================== ภารกิจปรับค่า ============================== */
const Q_CHIPS = [1, 2, 3, 4, 5, 6];
const R_CHIPS = [{ n: 1, d: 2, label: "×½" }, { n: 1, d: 1, label: "×1" }, { n: 2, d: 1, label: "×2" }, { n: 3, d: 1, label: "×3" }];
const rLabel = (n, d) => (d === 2 ? "½" : String(n));

// ภารกิจแต่ละแบบ (item.sim) ลงทะเบียนใน SIMS : defaults / ok / act / panel
const SIMS = {};
const simOf = (item) => SIMS[item.sim || "charge"];
function missionState(item) {
  return Object.assign(simOf(item).defaults(item), answers[item.id] || {});
}
function missionOk(item, st) { return simOf(item).ok(item, st); }

SIMS.charge = {
  defaults(item) {
    const lk = item.lock || {};
    return { s1: "+", q1: lk.q1 || 1, s2: "+", q2: lk.q2 || 1, rn: lk.r ? lk.r.num : 1, rd: lk.r ? lk.r.den : 1, done: false, ok: null };
  },
  ok(item, st) {
    const sameSign = st.s1 === st.s2;
    if (item.goal.kind === "repel" && !sameSign) return false;
    if (item.goal.kind === "attract" && sameSign) return false;
    // F = q1·q2·rd² / rn²  เทียบกับ num/den แบบเศษส่วน (ไม่ใช้ทศนิยม)
    return st.q1 * st.q2 * st.rd * st.rd * item.goal.den === item.goal.num * st.rn * st.rn;
  },
  failText: "ค่าที่เลือกยังไม่ให้แรงตามเป้าหมาย",
  submitNote: "ส่งแล้วแก้ไม่ได้ · ระบบจะไม่บอกจำนวนเท่าก่อนส่ง",
  act(st, btn) {
    const act = btn.dataset.act;
    if (act === "sign") st["s" + btn.dataset.which] = btn.dataset.val;
    if (act === "q") st["q" + btn.dataset.which] = Number(btn.dataset.val);
    if (act === "r") { const [n, d] = btn.dataset.val.split("/").map(Number); st.rn = n; st.rd = d; }
  },
  panel(item, st, ro) {
    const lk = item.lock || {};
    const kindCls = item.goal.kind === "repel" ? "repel" : "attract";
    const kindTxt = item.goal.kind === "repel" ? "แรงผลัก" : "แรงดูด";
    return `
    <div class="mission-goal">
      <span class="goal-chip ${kindCls}">${kindTxt}</span>
      <span class="goal-text">ทำให้เกิด${kindTxt} <b>${item.goal.label}</b> ของแรงเดิม</span>
    </div>
    <p class="mission-hint">${esc(item.hint)}</p>
    <div class="sim-box">${simSvg(st)}</div>
    <div class="ctrl-grid">
      <div class="ctrl"><h4>ประจุ 1 ${lk.q1 ? '<span class="lock">🔒 ล็อกขนาด</span>' : ""}</h4>
        ${signRow("1", st.s1, ro)}${chipRow("q", "1", Q_CHIPS, st.q1, ro || !!lk.q1)}</div>
      <div class="ctrl"><h4>ระยะห่าง ${lk.r ? '<span class="lock">🔒 ล็อก</span>' : ""}</h4>
        ${chipRow("r", "r", R_CHIPS, `${st.rn}/${st.rd}`, ro || !!lk.r)}</div>
      <div class="ctrl"><h4>ประจุ 2 ${lk.q2 ? '<span class="lock">🔒 ล็อกขนาด</span>' : ""}</h4>
        ${signRow("2", st.s2, ro)}${chipRow("q", "2", Q_CHIPS, st.q2, ro || !!lk.q2)}</div>
    </div>`;
  }
};
function simSvg(st) {
  const d = (150 * st.rn) / st.rd, x1 = 280 - d / 2, x2 = 280 + d / 2, cy = 104;
  const rho = (q) => 12 + 4 * q, r1 = rho(st.q1), r2 = rho(st.q2);
  const attract = st.s1 !== st.s2;
  let s = `<line class="thin" x1="20" y1="${cy}" x2="540" y2="${cy}"/>`;
  const aL = attract ? [x1 - 20, x1 + 20] : [x1 + 20, x1 - 20];
  const aR = attract ? [x2 + 20, x2 - 20] : [x2 - 20, x2 + 20];
  s += arrowLine(aL[0], 40, aL[1], 40) + arrowLine(aR[0], 40, aR[1], 40);
  s += `<text x="${x1}" y="24" text-anchor="middle" font-size="13" style="fill:#ff8a1f">F</text><text x="${x2}" y="24" text-anchor="middle" font-size="13" style="fill:#ff8a1f">F</text>`;
  s += dot(x1, cy, st.s1 === "+" ? "+" : "-", r1) + dot(x2, cy, st.s2 === "+" ? "+" : "-", r2);
  s += `<text x="${x1}" y="${cy + r1 + 20}" text-anchor="middle" font-size="14">ประจุ 1 : ×${st.q1}</text>`;
  s += `<text x="${x2}" y="${cy + r2 + 20}" text-anchor="middle" font-size="14">ประจุ 2 : ×${st.q2}</text>`;
  s += dimH(x1, x2, 184, `ระยะห่าง ×${rLabel(st.rn, st.rd)}`);
  return `<svg class="fig" viewBox="0 0 560 200" role="img">${s}</svg>`;
}
function chipRow(act, which, values, selVal, locked, fmt) {
  return `<div class="chips">${values.map((v) => {
    const val = typeof v === "object" ? `${v.n}/${v.d}` : v;
    const lab = typeof v === "object" ? v.label : fmt ? fmt(v) : `×${v}`;
    return `<button type="button" class="chip ${String(val) === String(selVal) ? "sel" : ""}" data-act="${act}" data-which="${which}" data-val="${val}" ${locked ? "disabled" : ""}>${lab}</button>`;
  }).join("")}</div>`;
}
function signRow(which, sel, locked) {
  return `<div class="sign-row"><button type="button" class="sign-btn p ${sel === "+" ? "sel" : ""}" data-act="sign" data-which="${which}" data-val="+" ${locked ? "disabled" : ""}>+</button><button type="button" class="sign-btn n ${sel === "-" ? "sel" : ""}" data-act="sign" data-which="${which}" data-val="-" ${locked ? "disabled" : ""}>−</button></div>`;
}
function missionBody(item, ctx) {
  const sim = simOf(item), st = missionState(item), ro = ctx.readOnly || st.done;
  let result = "";
  if (st.done) {
    const ok = ctx.readOnly && ctx.detail ? isFull(ctx.detail[item.id]) : missionOk(item, st);
    const extra = ctx.readOnly && ctx.reveal && !ok && item.solution ? `<small>เฉลย: ${esc(item.solution)}</small>` : "";
    result = ok
      ? `<div class="mission-result ok">✅ ภารกิจสำเร็จ!<small>ทำถูกต้อง ได้ ${ptsOf(item)} คะแนน</small></div>`
      : `<div class="mission-result fail">❌ ภารกิจล้มเหลว<small>${sim.failText}${ctx.readOnly ? "" : " (ภารกิจนี้ถูกส่งแล้ว แก้ไม่ได้)"}</small>${extra}</div>`;
  }
  return `${sim.panel(item, st, ro)}
    ${ro ? "" : `<div class="mission-actions"><button type="button" class="btn mission" data-act="msubmit">📡 ส่งภารกิจนี้</button><span class="small-note" style="margin:0">${sim.submitNote || "ส่งแล้วแก้ไม่ได้ · ระบบจะไม่บอกว่าถูกก่อนส่ง"}</span></div>`}
    ${result}`;
}

/* ============================== ชนิดข้อเพิ่มเติม : จับคู่ · เรียงลำดับ · แตะกราฟ ============================== */
const TYPES = {};
const isFull = (v) => v === true || v === 1;
const ratioOf = (v) => (v === true ? 1 : typeof v === "number" ? v : 0);
const ptsOf = (it) => (typeof it.points === "number" ? it.points : 1);
const MATCH_COLORS = ["#6c5ce7", "#ff5f9e", "#00a8b8", "#ff8a1f", "#12b886", "#2f80ff"];

TYPES.match = {
  answered: (it, a) => !!(a && a.map) && it.left.every((_, i) => a.map[i] !== undefined),
  grade: (it, a) => it.left.filter((_, i) => a && a.map && a.map[i] === it.pairs[i]).length / it.left.length,
  render(it, ctx) {
    const a = answers[it.id] || {}, map = a.map || {}, sel = a.sel;
    const used = {};
    Object.keys(map).forEach((l) => { used[map[l]] = Number(l); });
    const ro = ctx.readOnly, rev = ro && ctx.reveal;
    const L = it.left.map((t, i) => {
      const paired = map[i] !== undefined, col = MATCH_COLORS[i % MATCH_COLORS.length];
      let mark = "";
      if (rev && paired) mark = map[i] === it.pairs[i] ? ' <span class="reveal-tag">✔</span>' : ' <span class="reveal-tag wrong">✗</span>';
      return `<button type="button" class="m-item left ${sel === i ? "picked" : ""} ${paired ? "paired" : ""}" style="--c:${col}" data-act="mleft" data-i="${i}" ${ro ? "disabled" : ""}><span class="m-dot">${i + 1}</span><span>${esc(t)}${mark}</span></button>`;
    }).join("");
    const R = it.right.map((t, j) => {
      const owner = used[j];
      const col = owner !== undefined ? MATCH_COLORS[owner % MATCH_COLORS.length] : "#cfc9ee";
      return `<button type="button" class="m-item right ${owner !== undefined ? "paired" : ""}" style="--c:${col}" data-act="mright" data-j="${j}" ${ro ? "disabled" : ""}><span class="m-dot">${owner !== undefined ? owner + 1 : ""}</span><span>${esc(t)}</span></button>`;
    }).join("");
    const key = rev && ctx.detail && !isFull(ctx.detail[it.id])
      ? `<p class="small-note" style="margin:10px 0 0">เฉลย: ${it.left.map((t, i) => `${i + 1} → ${esc(it.right[it.pairs[i]])}`).join(" · ")}</p>` : "";
    return `<p class="q-text">${esc(it.prompt)}</p>
      ${ro ? "" : '<p class="mission-hint">แตะรายการ <b>ซ้าย</b> ก่อน แล้วแตะรายการ <b>ขวา</b> ที่เข้าคู่กัน · แตะข้อขวาที่จับคู่แล้วอีกครั้งเพื่อยกเลิก</p>'}
      <div class="match-grid"><div class="m-col">${L}</div><div class="m-col">${R}</div></div>${key}`;
  },
  click(it, btn) {
    const a = Object.assign({ map: {}, sel: null }, answers[it.id] || {});
    a.map = Object.assign({}, a.map);
    if (btn.dataset.act === "mleft") {
      const i = Number(btn.dataset.i);
      a.sel = a.sel === i ? null : i;
    } else if (btn.dataset.act === "mright") {
      const j = Number(btn.dataset.j);
      const owner = Object.keys(a.map).find((l) => a.map[l] === j);
      if (a.sel !== null && a.sel !== undefined) {
        if (owner !== undefined) delete a.map[owner];
        a.map[a.sel] = j; a.sel = null;
      } else if (owner !== undefined) delete a.map[owner];
      else return false;
    } else return false;
    answers[it.id] = a;
    return true;
  }
};

TYPES.order = {
  answered: (it, a) => !!(a && a.touched),
  grade: (it, a) => (a && a.ord && a.ord.every((v, i) => v === i) ? 1 : 0),
  render(it, ctx) {
    const a = answers[it.id], ord = a && a.ord ? a.ord : it.start, ro = ctx.readOnly;
    const rows = ord.map((si, pos) => `<div class="o-row"><span class="o-num">${pos + 1}</span><span class="o-text">${esc(it.steps[si])}</span>
      <span class="o-btns"><button type="button" class="o-btn" data-act="oup" data-pos="${pos}" ${ro || pos === 0 ? "disabled" : ""}>↑</button><button type="button" class="o-btn" data-act="odown" data-pos="${pos}" ${ro || pos === ord.length - 1 ? "disabled" : ""}>↓</button></span></div>`).join("");
    const key = ro && ctx.reveal && ctx.detail && !isFull(ctx.detail[it.id])
      ? `<p class="small-note" style="margin:10px 0 0">ลำดับที่ถูก: ${it.steps.map((s, i) => `${i + 1}) ${esc(s)}`).join(" → ")}</p>` : "";
    return `<p class="q-text">${esc(it.prompt)}</p>${ro ? "" : '<p class="mission-hint">กดปุ่ม ↑ ↓ เพื่อสลับลำดับ จากขั้นแรกไปขั้นสุดท้าย</p>'}<div class="o-list">${rows}</div>${key}`;
  },
  click(it, btn) {
    const a = answers[it.id] || { ord: it.start.slice(), touched: false };
    const ord = a.ord.slice(), p = Number(btn.dataset.pos);
    const q = btn.dataset.act === "oup" ? p - 1 : btn.dataset.act === "odown" ? p + 1 : -1;
    if (q < 0 || q >= ord.length) return false;
    [ord[p], ord[q]] = [ord[q], ord[p]];
    answers[it.id] = { ord, touched: true };
    return true;
  }
};

TYPES.hotspot = {
  answered: (it, a) => !!a,
  grade: (it, a) => (a === it.answer ? 1 : 0),
  render(it, ctx) {
    const a = answers[it.id], ro = ctx.readOnly, rev = ro && ctx.reveal;
    const z = it.figure.zones.find((x) => x.id === a);
    return `<p class="q-text">${esc(it.prompt)}</p>${ro ? "" : '<p class="mission-hint">แตะบนกราฟในช่วงที่ต้องการ</p>'}
      <div class="fig-wrap">${figHeat(it.figure, a, ro, rev ? it.answer : null)}</div>
      ${z ? `<p class="small-note" style="margin:0">ช่วงที่เลือก: <b>${esc(z.label)}</b></p>` : ""}`;
  },
  click(it, btn) {
    if (btn.dataset.act !== "zone") return false;
    answers[it.id] = btn.dataset.zone;
    return true;
  }
};

/* ============================== เคมี : เลขออกซิเดชัน · ระบุรีดอกซ์ · ดุลสมการทีละขั้น ============================== */
const SUBD = "₀₁₂₃₄₅₆₇₈₉", SUPD = "⁰¹²³⁴⁵⁶⁷⁸⁹";
// แปลงสูตรแบบพิมพ์ง่าย "Cr2O7^2-" → "Cr₂O₇²⁻"  ( -> เป็นลูกศร )
function chemU(s) {
  s = String(s).replace(/->/g, "→");
  let out = "", i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === "^") {
      i++;
      while (i < s.length && /[0-9]/.test(s[i])) { out += SUPD[+s[i]]; i++; }
      if (s[i] === "+") { out += "⁺"; i++; } else if (s[i] === "-") { out += "⁻"; i++; }
      continue;
    }
    if (/[0-9]/.test(ch) && /[A-Za-z)\]₀-₉]$/.test(out)) out += SUBD[+ch];
    else out += ch;
    i++;
  }
  return out;
}
const cu = (s) => esc(chemU(s));

// อ่านตัวเลขที่นักเรียนพิมพ์ (รองรับ +6  −2  5/2) → [เศษ, ส่วน] หรือ null
function parseNum(s) {
  s = String(s == null ? "" : s).trim().replace(/[−–—]/g, "-").replace(/\s+/g, "").replace(/^\+/, "");
  const m = /^(-?\d+)(?:\/(\d+))?$/.exec(s);
  if (!m) return null;
  const n = Number(m[1]), d = m[2] ? Number(m[2]) : 1;
  return d ? [n, d] : null;
}
function numEq(s, v) {
  const a = parseNum(s), b = parseNum(String(v));
  return !!a && !!b && a[0] * b[1] === b[0] * a[1];
}
const getPath = (a, p) => p.split(".").reduce((o, k) => (o == null ? undefined : o[k]), a);
function setPath(id, path, val) {
  const ks = path.split(".");
  let o = (answers[id] = answers[id] || {});
  ks.slice(0, -1).forEach((k) => { o = o[k] = o[k] || {}; });
  o[ks[ks.length - 1]] = val;
}
const rxChange = (it, el) => {
  if (!el.matches("input.rx-in, select.rx-sel") || !el.dataset.f) return false;
  setPath(it.id, el.dataset.f, el.value);
  return true;
};
const fmtOx = (v) => { const n = Number(v); return Number.isFinite(n) ? (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n) : String(v); };
function rxInput(cls, path, val, ro, state, fix) {
  return `<input type="text" class="rx-in ${cls} ${state || ""}" data-f="${path}" value="${esc(val == null ? "" : val)}" autocomplete="off" inputmode="text" ${ro ? "disabled" : ""}/>` +
    (state === "bad" && fix !== undefined ? `<span class="rx-fix"><i>✘</i> ✔ ${esc(fmtOx(fix))}</span>` : "");
}
function rxSelect(path, val, options, key, ro, rev, cls) {
  const opts = options.map((o) => {
    const v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : chemU(o);
    return `<option value="${esc(v)}" ${val === v ? "selected" : ""}>${esc(t)}</option>`;
  }).join("");
  return `<select class="rx-sel ${cls || ""} ${rev ? (val === key ? "ok" : "bad") : ""}" data-f="${path}" ${ro ? "disabled" : ""}><option value="">— เลือก —</option>${opts}</select>` +
    (rev && !cls && val !== key ? `<span class="rx-fix"><i>✘</i> ✔ ${esc(chemU(key))}</span>` : "");
}

/* ---------- (ก) ผลรวมเลขออกซิเดชันของธาตุเดียวกันใน 3 สารประกอบ ---------- */
TYPES.oxsum = {
  change: rxChange,
  answered: (it, a) => !!a && it.cmps.every((_, i) => parseNum(a["c" + i])) && !!parseNum(a.sum),
  grade: (it, a) => (a && it.cmps.every((c, i) => numEq(a["c" + i], c.ox)) && numEq(a.sum, it.sum) ? 1 : 0),
  render(it, ctx) {
    const a = answers[it.id] || {}, chk = (a._chk || 0) >= 1, ro = ctx.readOnly || chk, rev = (ctx.readOnly && ctx.reveal) || chk;
    const st = (v, key) => (rev ? (numEq(v, key) ? "ok" : "bad") : "");
    const rows = it.cmps.map((c, i) => `<div class="ox-row"><span class="ox-no">${i + 1}</span><span class="ox-f">${cu(c.f)}</span>
      <span class="ox-lab">${esc(it.el)} =</span>${rxInput("", "c" + i, a["c" + i], ro, st(a["c" + i], c.ox), c.ox)}</div>`).join("");
    return `<p class="q-text">จงหาเลขออกซิเดชันของ <b>${esc(it.el)}</b> ในสารประกอบแต่ละตัว (ตอบแยกทีละตัว) แล้วหา <b>ผลรวม</b> ของทั้ง 3 ตัว</p>
      ${ro ? "" : '<p class="mission-hint">กรอกเป็นตัวเลข เช่น 6 · −2 · 0 · หรือเศษส่วน 5/2 &nbsp;|&nbsp; ⚠ ถ้าผลรวมผิด ข้อนี้ไม่ได้คะแนน</p>'}
      <div class="ox-box">${rows}<div class="ox-row sum"><span class="ox-f">ผลรวมเลขออกซิเดชันของ ${esc(it.el)}</span><span class="ox-lab">=</span>${rxInput("", "sum", a.sum, ro, st(a.sum, it.sum), it.sum)}</div></div>`;
  }
};

/* ---------- (ข) ครึ่งปฏิกิริยา oxidation / reduction (เห็น e⁻ จ่าย/รับ) + ระบุคำศัพท์รีดอกซ์ 2 คำที่สุ่มถาม ---------- */
const RD_LAB = { o: "สารที่ถูกออกซิไดซ์", r: "สารที่ถูกรีดิวซ์", ra: "ตัวรีดิวซ์", oa: "ตัวออกซิไดซ์" };
const rdParts = (it) => 2 + it.ask.length;
const rdHalfOk = (it, a) => !!a && a.xb === it.ox.answer && a.rb === it.red.answer;
TYPES.redoxid = {
  change: rxChange,
  answered: (it, a) => !!a && !!a.xb && !!a.rb && it.ask.every((k) => a[k]),
  grade(it, a) {
    if (!a) return 0;
    let ok = 0;
    if (a.xb === it.ox.answer) ok++;
    if (a.rb === it.red.answer) ok++;
    it.ask.forEach((k) => { if (a[k] === it.ans[k]) ok++; });
    return ok / rdParts(it);
  },
  render(it, ctx) {
    const a = answers[it.id] || {}, st = a._chk || 0, ro = ctx.readOnly;
    const hLock = ro || st >= 1, hRev = (ro && ctx.reveal) || st >= 1;
    const tShow = st >= 1 || ro, tLock = ro || st >= 2, tRev = (ro && ctx.reveal) || st >= 2;
    const eh = (s) => esc(chemU(s)).replace(/(\d*)e⁻/g, '<b class="rd-e">$1e⁻</b>');
    const half = (h, key, tag, cls) => {
      const p = h.eq.split("[?]"), wrong = hRev && a[key] !== h.answer;
      return `<div class="rd-half ${cls}"><span class="rd-tag">${tag}</span><div class="rd-eq">${eh(p[0])}${rxSelect(key, a[key], h.options, h.answer, hLock, hRev, "blank")}${eh(p[1])}</div>
        ${wrong ? `<div class="rd-fix">✔ สมการที่ถูก: ${eh(p[0] + h.answer + p[1])}</div>` : ""}</div>`;
    };
    const grid = it.ask.map((k) => `<label class="rd-cell"><span>${RD_LAB[k]}</span>${rxSelect(k, a[k], it.opts, it.ans[k], tLock, tRev)}</label>`).join("");
    const half2 = (a.xb === it.ox.answer ? 1 : 0) + (a.rb === it.red.answer ? 1 : 0);
    let total = "";
    if (st >= 1 || (ro && rdHalfOk(it, a))) {
      total = `<p class="rd-note rd-stage">ขั้นแรก (ครึ่งปฏิกิริยา): ได้ ${half2 * 0.25}/0.5 คะแนน</p>
        <div class="rd-redox"><span class="rd-tag">⚡ ปฏิกิริยารีดอกซ์รวม</span><div class="rd-eq">${cu(it.redox)}</div>${it.note ? `<p class="rd-note">${esc(it.note)}</p>` : ""}</div>`;
    } else if (ro) {
      total = '<p class="rd-redox-lock">🔒 ตอบครึ่งปฏิกิริยา oxidation และ reduction ให้ถูกทั้งคู่ จึงจะเห็นปฏิกิริยารีดอกซ์รวม</p>';
    }
    const lead = st === 0 && !ro
      ? '<p class="q-text">เลือกสารที่หายไปในครึ่งปฏิกิริยา (สังเกต e⁻ ที่ <b>จ่าย</b> / <b>รับ</b>) แล้วกด <b>ส่งภารกิจขั้นแรก</b> — จะเห็นเฉลยและปฏิกิริยารีดอกซ์รวม แล้วจึงตอบคำถามศัพท์รีดอกซ์</p>'
      : '<p class="q-text">ครึ่งปฏิกิริยา oxidation / reduction</p>';
    const q2 = tShow ? `<p class="q-text rd-q2">ตอบศัพท์รีดอกซ์ 2 คำ จากปฏิกิริยารวมด้านบน</p>
      ${tLock ? "" : '<p class="mission-hint">ระวัง: “ถูกออกซิไดซ์ / ถูกรีดิวซ์” ตอบเป็นอะตอมหรือไอออนที่เลขออกซิเดชันเปลี่ยน · “ตัวรีดิวซ์ / ตัวออกซิไดซ์” ตอบเป็นสารที่ทำให้อีกตัวเปลี่ยน (สารทั้งสูตร) — คนละคำกัน!</p>'}
      <div class="rd-grid">${grid}</div>` : "";
    return `${lead}${half(it.ox, "xb", "🔶 ออกซิเดชัน · จ่าย e⁻", "ox")}${half(it.red, "rb", "🔷 รีดักชัน · รับ e⁻", "red")}${total}${q2}`;
  }
};

/* ---------- (ค) ดุลสมการรีดอกซ์ทีละขั้น (5 ขั้น แต่ละขั้นคนละสี) ---------- */
const lcm2 = (x, y) => { const g = (p, q) => (q ? g(q, p % q) : p); return (x / g(x, y)) * y; };
const RX_KIND = { normal: "แบบธรรมดา", left: "แบบตามฝั่งซ้าย", adjust: "แบบปรับเปลี่ยน", leftadjust: "แบบตามฝั่งซ้าย + ปรับเปลี่ยน", auto: "แบบออโต้รีดอกซ์" };
const RX_COL = ["#2f80ff", "#0aa5b5", "#ff8a1f"];
const rxCache = {};
function rxModel(it) {
  if (rxCache[it.id]) return rxCache[it.id];
  const sides = it.eq.split("->").map((s) => s.split(" + ").map((x) => x.trim()));
  const sp = sides[0].concat(sides[1]), nL = sides[0].length;
  const tr = {};
  it.track.forEach((t) => { tr[t.i] = t; });
  const links = it.links.map(([a, b]) => {
    const dir = tr[b].ox > tr[a].ox ? "give" : "take";
    const scale = it.kind === "auto" ? b : a, other = scale === a ? b : a;
    return { a, b, dir, scale, other, ns: tr[scale].n, no: tr[other].n, e: Math.abs(tr[b].ox - tr[a].ox) * tr[scale].n, el: tr[a].el };
  });
  const L = links.map((l) => l.e).reduce(lcm2);
  const cnt = {};
  links.forEach((l) => { cnt[l.a] = (cnt[l.a] || 0) + 1; cnt[l.b] = (cnt[l.b] || 0) + 1; });
  const temp = {};
  links.forEach((l) => {
    l.m = L / l.e;
    temp[l.scale] = l.m;
    if (cnt[l.other] === 1) temp[l.other] = (l.m * l.ns) / l.no;
  });
  const s5 = sp.map((_, i) => i).filter((i) => temp[i] === undefined || temp[i] !== it.coef[i]);
  return (rxCache[it.id] = { sp, nL, tr, links, L, temp, s5 });
}

TYPES.balance = {
  change: rxChange,
  answered(it, a) {
    if (!a) return false;
    const M = rxModel(it), g = (p) => getPath(a, p);
    return it.track.every((t) => parseNum(g("ox." + t.i))) &&
      M.links.every((l, k) => g(`e.${k}.d`) && parseNum(g(`e.${k}.n`)) && parseNum(g("m." + k))) &&
      !!parseNum(g("lcm")) &&
      Object.keys(M.temp).every((i) => parseNum(g("c4." + i))) &&
      M.s5.every((i) => parseNum(g("c5." + i)));
  },
  grade(it, a) {
    if (!a) return 0;
    const M = rxModel(it), g = (p) => getPath(a, p);
    let ok = 0;
    if (it.track.every((t) => numEq(g("ox." + t.i), t.ox))) ok++;
    if (M.links.every((l, k) => g(`e.${k}.d`) === l.dir && numEq(g(`e.${k}.n`), l.e))) ok++;
    if (numEq(g("lcm"), M.L)) ok++;
    if (M.links.every((l, k) => numEq(g("m." + k), l.m)) && Object.keys(M.temp).every((i) => numEq(g("c4." + i), M.temp[i]))) ok++;
    if (M.s5.every((i) => numEq(g("c5." + i), it.coef[i]))) ok++;
    return ok / 5;
  },
  render(it, ctx) {
    const M = rxModel(it), a = answers[it.id] || {}, chk = (a._chk || 0) >= 1, ro = ctx.readOnly || chk, rev = (ctx.readOnly && ctx.reveal) || chk;
    const mk = (cls, path, key) => { const v = getPath(a, path); const bad = rev && !numEq(v, key); const h = rxInput(cls, path, v, ro, rev ? (bad ? "bad" : "ok") : ""); return bad ? `<span class="rx-fixw">${h}<span class="rx-fix2"><i>✘</i> ✔ ${esc(cls === "s1" ? fmtOx(key) : String(key))}</span></span>` : h; };
    let eq = "";
    M.sp.forEach((f, i) => {
      if (i === M.nL) eq += '<span class="rx-op">→</span>';
      else if (i > 0) eq += '<span class="rx-op">+</span>';
      const t = M.tr[i];
      const ox = t ? `<span class="rx-ox"><em>${esc(t.el)}</em>${mk("s1", "ox." + i, t.ox)}</span>` : "";
      let co = "";
      if (M.temp[i] !== undefined) co += mk("s4", "c4." + i, M.temp[i]);
      if (M.s5.includes(i)) co += (M.temp[i] !== undefined ? '<span class="rx-then">→</span>' : "") + mk("s5", "c5." + i, it.coef[i]);
      eq += `<span class="rx-sp" data-sp="${i}">${ox}<span class="rx-chip">${co}<span class="rx-f">${cu(f)}</span></span></span>`;
    });
    const lbls = M.links.map((l, k) => `<div class="rx-lbl" data-link="${k}" style="--lc:${RX_COL[k % RX_COL.length]}">
      <span class="rx-fixw">${rxSelect(`e.${k}.d`, getPath(a, `e.${k}.d`), [["give", "จ่าย"], ["take", "รับ"]], l.dir, ro, rev, "s2")}${rev && getPath(a, `e.${k}.d`) !== l.dir ? `<span class="rx-fix2"><i>✘</i> ✔ ${l.dir === "give" ? "จ่าย" : "รับ"}</span>` : ""}</span>
      ${mk("s2", `e.${k}.n`, l.e)}<span>e⁻</span><span class="rx-x">×</span>${mk("s4", "m." + k, l.m)}</div>`).join("");
    const pairs = JSON.stringify(M.links.map((l) => [l.a, l.b]));
    const unit = it.kind === "auto" ? "ต่อ 1 สูตรของผลิตภัณฑ์ที่โยงเส้น" : (it.kind === "left" || it.kind === "leftadjust") ? "ต่อ 1 สูตรของสารตั้งต้น (ถ้ามีเลขห้อย ให้คูณเลขห้อย)" : "ต่อ 1 สูตรของสารตั้งต้น";
    const adj = M.s5.some((i) => M.temp[i] !== undefined) ? " · สารที่ต้องแก้เลขภายหลังจะมีช่องชมพูต่อท้ายลูกศร →" : "";
    const first = ITEMS.find((x) => x.type === "balance") === it;
    const steps = ro ? "" : `<details class="rx-steps" ${first ? "open" : ""}><summary>📋 ขั้นตอนทั้ง 5 ขั้น (แตะเพื่อ${first ? "ซ่อน" : "ดู"})</summary><ol class="rx-ol">
      <li><b class="s1">①</b> ใส่ <b>เลขออกซิเดชัน</b> ของธาตุที่แลกเปลี่ยน e⁻ (ช่องส้มเหนือสาร) — ใส่เครื่องหมายได้ เช่น +5 · −2 · 0</li>
      <li><b class="s2">②</b> <b>โยงเส้นคู่กัน</b> — เลือก จ่าย / รับ และจำนวน e⁻ ${unit} (ช่องฟ้าบนเส้น)</li>
      <li><b class="s3">③</b> หา <b>จำนวน e⁻ ที่ถ่ายโอนในปฏิกิริยานี้ (ค.ร.น.)</b> ของจำนวน e⁻ ทั้งสองเส้น</li>
      <li><b class="s4">④</b> หาตัวเลขที่ <b>คูณ</b> e⁻ ให้เท่า ค.ร.น. (ช่องเขียวบนเส้น) แล้วนำไปใส่เป็นเลขดุลของสารที่โยงเส้น (ช่องเขียวหน้าสาร)</li>
      <li><b class="s5">⑤</b> ดุล <b>สารที่เหลือ</b> ให้อะตอมเท่ากัน (ช่องชมพู)${adj}</li></ol></details>`;
    return `<p class="q-text"><span class="rx-kind">ดุลสมการ · ${RX_KIND[it.kind]}</span> ดุลสมการรีดอกซ์ต่อไปนี้ทีละขั้น (เลข 1 ก็ต้องใส่)</p>${steps}
      <div class="rx-scroll"><div class="rx-eq ${rev ? "chk" : ""}" style="--nl:${M.links.length}" data-pairs='${pairs}'>${eq}<svg class="rx-svg"></svg>${lbls}</div></div>
      <div class="rx-lcm"><b class="s3">③</b> จำนวน e⁻ ที่ถ่ายโอนในปฏิกิริยานี้ (ค.ร.น.) = ${mk("s3", "lcm", M.L)}</div>`;
  }
};

// วาดเส้นโยง + วางป้าย จ่าย/รับ ตามตำแหน่งจริงของสาร (ต้องเรียกเมื่อหน้านั้นแสดงอยู่)
function layoutRx() {
  document.querySelectorAll(".ws-page.active .rx-eq").forEach((eq) => {
    const R = eq.getBoundingClientRect();
    if (!R.width) return;
    const pos = {};
    eq.querySelectorAll(".rx-sp").forEach((s) => {
      const c = s.querySelector(".rx-chip").getBoundingClientRect();
      pos[s.dataset.sp] = { x: c.left - R.left + c.width / 2, y: c.bottom - R.top };
    });
    const pairs = JSON.parse(eq.dataset.pairs), base = Math.max(...Object.values(pos).map((p) => p.y));
    const svg = eq.querySelector(".rx-svg");
    svg.setAttribute("viewBox", `0 0 ${R.width} ${R.height}`);
    let body = "";
    pairs.forEach(([a, b], k) => {
      const pa = pos[a], pb = pos[b], y = base + 24 + k * 64, col = RX_COL[k % RX_COL.length];
      body += `<path d="M${pa.x},${pa.y + 3} V${y} H${pb.x} V${pb.y + 8}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
      body += `<path d="M${pb.x - 6},${pb.y + 9} L${pb.x},${pb.y + 2} L${pb.x + 6},${pb.y + 9}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
      const lb = eq.querySelector(`.rx-lbl[data-link="${k}"]`), w = lb.offsetWidth;
      const span = Math.abs(pb.x - pa.x);
      if (span >= w + 24) { // เส้นยาวพอ → วางป้ายกลางเส้น
        lb.style.top = y + "px";
        lb.style.left = Math.max(0, Math.min(R.width - w, (pa.x + pb.x) / 2 - w / 2)) + "px";
      } else { // เส้นสั้น → วางป้ายใต้เส้น ไม่ให้บังหัวลูกศร
        lb.style.top = y + 22 + "px";
        lb.style.left = Math.max(0, Math.min(R.width - w, Math.min(pa.x, pb.x) + 10)) + "px";
      }
    });
    svg.innerHTML = body;
  });
}

/* ---------- กราฟให้ความร้อน (แตะเลือกช่วงได้) ---------- */
function figHeat(f, sel, ro, correct) {
  const P = [[70, 235], [160, 185], [250, 185], [340, 120], [430, 120], [510, 60]];
  let s = `<line class="solid" x1="70" y1="30" x2="70" y2="250"/><line class="solid" x1="70" y1="250" x2="530" y2="250"/>`;
  s += `<text x="14" y="140" font-size="13" transform="rotate(-90 14 140)" text-anchor="middle">อุณหภูมิ (°C)</text><text x="300" y="292" text-anchor="middle" font-size="13">เวลา</text>`;
  f.zones.forEach((z) => {
    const cls = `zone ${sel === z.id ? "sel" : ""} ${correct === z.id ? "right" : ""}`;
    s += `<g class="${cls}" data-act="zone" data-zone="${z.id}" style="${ro ? "pointer-events:none" : ""}"><rect class="zr" x="${z.x1}" y="30" width="${z.x2 - z.x1}" height="220"/></g>`;
    s += `<text x="${(z.x1 + z.x2) / 2}" y="270" text-anchor="middle" font-size="15" font-weight="600" style="pointer-events:none">${esc(z.tag)}</text>`;
  });
  s += `<polyline points="${P.map((p) => p.join(",")).join(" ")}" fill="none" stroke="#ff5f9e" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" style="pointer-events:none"/>`;
  P.forEach((p) => { s += `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#ff5f9e" style="pointer-events:none"/>`; });
  s += `<text x="300" y="22" text-anchor="middle" font-size="14" style="fill:#6f68b0;pointer-events:none">${esc(f.title || "")}</text>`;
  return `<svg class="fig" viewBox="0 0 560 300" role="img">${s}</svg>`;
}

/* ============================== เครื่องจำลองภารกิจ (เคมี/ฟิสิกส์) ============================== */
function stepCtl(act, key, label, val, ro, unit) {
  return `<div class="ctrl"><h4>${label}</h4><div class="stepper-box">
    <button type="button" class="chip" data-act="${act}" data-k="${key}" data-d="-1" ${ro ? "disabled" : ""}>−</button>
    <span class="step-val">${val}${unit || ""}</span>
    <button type="button" class="chip" data-act="${act}" data-k="${key}" data-d="1" ${ro ? "disabled" : ""}>+</button></div></div>`;
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------- สร้างอะตอม (1.1) ---------- */
function atomSvg(st) {
  const cx = 280, cy = 160, N = st.p + st.n;
  let s = "";
  const caps = [2, 8, 8, 18], radii = [64, 90, 116, 144];
  let left = st.e, shells = 1;
  const counts = caps.map((c) => { const n = Math.min(c, left); left -= n; return n; });
  counts.forEach((n, i) => { if (n > 0) shells = i + 1; });
  for (let i = 0; i < shells; i++) s += `<circle cx="${cx}" cy="${cy}" r="${radii[i]}" fill="none" stroke="#b9b2e6" stroke-width="1.4" stroke-dasharray="4 5"/>`;
  counts.forEach((n, i) => {
    for (let k = 0; k < n; k++) {
      const ang = (k * 2 * Math.PI) / n - Math.PI / 2 + i * 0.5;
      s += `<circle cx="${cx + radii[i] * Math.cos(ang)}" cy="${cy + radii[i] * Math.sin(ang)}" r="5.5" fill="#4da3ff" stroke="#fff" stroke-width="1"/>`;
    }
  });
  s += `<circle cx="${cx}" cy="${cy}" r="${6 * Math.sqrt(Math.max(N, 1)) + 10}" fill="#fff4d6" stroke="#ffd38a"/>`;
  for (let i = 0; i < N; i++) {
    const ang = i * 2.39996323, rad = 6 * Math.sqrt(i);
    const isP = Math.floor(((i + 1) * st.p) / N) > Math.floor((i * st.p) / N);
    s += `<circle cx="${cx + rad * Math.cos(ang)}" cy="${cy + rad * Math.sin(ang)}" r="6.4" fill="${isP ? "#ff5d73" : "#9aa3c7"}" stroke="#fff" stroke-width="1"/>`;
  }
  s += `<circle cx="30" cy="26" r="6" fill="#ff5d73"/><text x="42" y="31" font-size="13">โปรตอน ${st.p}</text>`;
  s += `<circle cx="30" cy="50" r="6" fill="#9aa3c7"/><text x="42" y="55" font-size="13">นิวตรอน ${st.n}</text>`;
  s += `<circle cx="30" cy="74" r="6" fill="#4da3ff"/><text x="42" y="79" font-size="13">อิเล็กตรอน ${st.e}</text>`;
  return `<svg class="fig" viewBox="0 0 560 320" role="img">${s}</svg>`;
}
SIMS.atom = {
  defaults: () => ({ p: 1, n: 0, e: 1, done: false, ok: null }),
  ok: (it, st) => st.p === it.target.p && st.n === it.target.n && st.e === it.target.e,
  failText: "จำนวนอนุภาคที่เลือกยังไม่ตรงกับเป้าหมาย",
  submitNote: "ส่งแล้วแก้ไม่ได้ · ระบบจะไม่บอกว่าถูกก่อนส่ง",
  act(st, btn) {
    if (btn.dataset.act !== "step") return;
    const k = btn.dataset.k, lim = { p: [1, 30], n: [0, 40], e: [0, 30] }[k];
    st[k] = clamp(st[k] + Number(btn.dataset.d), lim[0], lim[1]);
  },
  panel(it, st, ro) {
    return `<div class="mission-goal"><span class="goal-chip atom">⚛️ สร้างอะตอม</span><span class="goal-text">${esc(it.goalText)}</span></div>
      <p class="mission-hint">${esc(it.hint)}</p>
      <div class="sim-box">${atomSvg(st)}</div>
      <div class="ctrl-grid">${stepCtl("step", "p", "โปรตอน (p⁺)", st.p, ro)}${stepCtl("step", "n", "นิวตรอน (n⁰)", st.n, ro)}${stepCtl("step", "e", "อิเล็กตรอน (e⁻)", st.e, ro)}</div>`;
  }
};

/* ---------- ดุลสมการ (1.5) ---------- */
SIMS.balance = {
  defaults: (it) => ({ coef: it.species.map(() => 1), done: false, ok: null }),
  ok: (it, st) => st.coef.every((c, i) => c === it.answer[i]),
  failText: "สัมประสิทธิ์ยังไม่ถูกต้อง (ต้องทำให้สมดุลและใช้จำนวนเต็มที่น้อยที่สุด)",
  act(st, btn) {
    if (btn.dataset.act !== "coef") return;
    const i = Number(btn.dataset.i);
    st.coef = st.coef.slice();
    st.coef[i] = clamp(st.coef[i] + Number(btn.dataset.d), 1, 12);
  },
  panel(it, st, ro) {
    const term = (sp, i) => `<span class="eq-term"><span class="eq-ctl"><button type="button" class="chip" data-act="coef" data-i="${i}" data-d="-1" ${ro ? "disabled" : ""}>−</button><b class="eq-c">${st.coef[i]}</b><button type="button" class="chip" data-act="coef" data-i="${i}" data-d="1" ${ro ? "disabled" : ""}>+</button></span><span class="eq-f">${sp.f}</span></span>`;
    const side = (sd) => it.species.map((sp, i) => ({ sp, i })).filter((x) => x.sp.side === sd).map((x) => term(x.sp, x.i)).join('<span class="eq-op">+</span>');
    const els = [...new Set(it.species.flatMap((sp) => Object.keys(sp.atoms)))];
    const tally = (sd, el) => it.species.reduce((t, sp, i) => t + (sp.side === sd ? st.coef[i] * (sp.atoms[el] || 0) : 0), 0);
    const rows = els.map((el) => {
      const l = tally("L", el), r = tally("R", el);
      return `<tr class="${l === r ? "eq-ok" : ""}"><td>${el}</td><td>${l}</td><td>${r}</td><td>${l === r ? "✓" : "✗"}</td></tr>`;
    }).join("");
    return `<div class="mission-goal"><span class="goal-chip atom">⚖️ ดุลสมการ</span><span class="goal-text">${esc(it.goalText)}</span></div>
      <p class="mission-hint">${esc(it.hint)}</p>
      <div class="eq-box">${side("L")}<span class="eq-arrow">→</span>${side("R")}</div>
      <table class="atom-table"><thead><tr><th>ธาตุ</th><th>อะตอมซ้าย</th><th>อะตอมขวา</th><th></th></tr></thead><tbody>${rows}</tbody></table>`;
  }
};

/* ---------- ค่า Rf โครมาโทกราฟี (1.3) ---------- */
function rfSvg(it, st) {
  const dc = it.mode === "spot" ? st.v : it.dc, ds = it.mode === "spot" ? it.ds : st.v;
  const y0 = 314, sc = 19, yc = y0 - dc * sc, yf = y0 - ds * sc;
  let s = `<rect x="200" y="${yf}" width="160" height="${334 - yf}" fill="#cfe6ff" fill-opacity=".7"/><rect x="200" y="20" width="160" height="314" fill="none" stroke="#5b52a8" stroke-width="2"/>`;
  s += `<line x1="200" y1="${y0}" x2="360" y2="${y0}" stroke="#5b52a8" stroke-width="2"/><text x="368" y="${y0 + 5}" font-size="13">เส้นเริ่มต้น</text>`;
  s += `<line x1="200" y1="${yf}" x2="360" y2="${yf}" stroke="#2f80ff" stroke-width="2.5" stroke-dasharray="6 4"/><text x="368" y="${yf + 5}" font-size="13" style="fill:#1b5bd1">แนวหน้าตัวทำละลาย</text>`;
  s += `<ellipse cx="280" cy="${yc}" rx="15" ry="9" fill="#ffcf33" stroke="#e08600" stroke-width="2"/>`;
  s += `<line class="dim" x1="162" y1="${y0}" x2="162" y2="${y0 - 15 * sc}"/>`;
  for (let c = 0; c <= 15; c++) {
    const y = y0 - c * sc;
    s += `<line class="dim" x1="${c % 5 === 0 ? 150 : 156}" y1="${y}" x2="162" y2="${y}"/>`;
    if (c % 2 === 0) s += `<text x="144" y="${y + 4}" text-anchor="end" font-size="11">${c}</text>`;
  }
  s += `<text x="150" y="14" text-anchor="end" font-size="12" style="fill:#6f68b0">cm</text>`;
  s += `<line class="dim" x1="470" y1="${y0}" x2="470" y2="${yc}"/><text x="478" y="${(y0 + yc) / 2 + 5}" font-size="14" font-weight="600" style="fill:#e08600">d<tspan font-size="10" dy="3">c</tspan></text>`;
  s += `<line class="dim" x1="520" y1="${y0}" x2="520" y2="${yf}"/><text x="528" y="${(y0 + yf) / 2 + 5}" font-size="14" font-weight="600" style="fill:#1b5bd1">d<tspan font-size="10" dy="3">s</tspan></text>`;
  return `<svg class="fig" viewBox="0 0 560 340" role="img">${s}</svg>`;
}
SIMS.rf = {
  defaults: (it) => ({ v: it.mode === "spot" ? 2 : 12, done: false, ok: null }),
  ok(it, st) {
    const dc = it.mode === "spot" ? st.v : it.dc, ds = it.mode === "spot" ? it.ds : st.v;
    return Math.round(dc * 2) * it.rf.den === it.rf.num * Math.round(ds * 2);
  },
  failText: "ค่า Rf ที่ได้ยังไม่ตรงกับเป้าหมาย",
  act(st, btn, it) {
    if (btn.dataset.act !== "rfstep") return;
    const lo = it.mode === "spot" ? 0 : it.dc, hi = it.mode === "spot" ? it.ds : 15;
    st.v = clamp(Math.round((st.v + Number(btn.dataset.d)) * 2) / 2, lo, hi);
  },
  panel(it, st, ro) {
    const dc = it.mode === "spot" ? st.v : it.dc, ds = it.mode === "spot" ? it.ds : st.v;
    const b = (d, lab) => `<button type="button" class="chip" data-act="rfstep" data-d="${d}" ${ro ? "disabled" : ""}>${lab}</button>`;
    return `<div class="mission-goal"><span class="goal-chip atom">🧪 โครมาโทกราฟี</span><span class="goal-text">${esc(it.goalText)}</span></div>
      <p class="mission-hint">${esc(it.hint)}</p>
      <div class="sim-box">${rfSvg(it, st)}</div>
      <div class="ctrl-grid" style="grid-template-columns:1fr 2fr 1fr">
        <div class="ctrl"><h4><span>d<sub>c</sub> (cm)</span></h4><div class="step-val">${dc.toFixed(1)}</div></div>
        <div class="ctrl"><h4><span>${it.mode === "spot" ? "เลื่อนจุดสาร (d<sub>c</sub>)" : "เลื่อนแนวหน้าตัวทำละลาย (d<sub>s</sub>)"}</span></h4><div class="stepper-box">${b(-1, "−1")}${b(-0.5, "−0.5")}${b(0.5, "+0.5")}${b(1, "+1")}</div></div>
        <div class="ctrl"><h4><span>d<sub>s</sub> (cm)</span></h4><div class="step-val">${ds.toFixed(1)}</div></div>
      </div>`;
  }
};

/* ---------- ผสมน้ำ สมดุลความร้อน (2.3) ---------- */
function beakerSvg(x, w, level, fill, t1, t2) {
  return `<rect x="${x + 3}" y="${170 - level}" width="${w - 6}" height="${level}" fill="${fill}"/>
    <path d="M${x} 60 L${x + 4} 170 L${x + w - 4} 170 L${x + w} 60" fill="none" stroke="#5b52a8" stroke-width="2.4" stroke-linejoin="round"/>
    <text x="${x + w / 2}" y="46" text-anchor="middle" font-size="14" font-weight="600">${t1}</text>
    <text x="${x + w / 2}" y="194" text-anchor="middle" font-size="13">${t2}</text>`;
}
function mixSvg(it, st) {
  const lv = (m) => Math.max(8, Math.round((m / 500) * 100));
  let s = beakerSvg(30, 120, lv(st.m1), "#ffb3b3", `น้ำร้อน ${it.hot} °C`, `m₁ = ${st.m1} g`);
  s += beakerSvg(190, 120, lv(st.m2), "#b9dcff", `น้ำเย็น ${it.cold} °C`, `m₂ = ${st.m2} g`);
  s += `<text x="340" y="120" font-size="30" style="fill:#6f68b0">→</text>`;
  s += beakerSvg(390, 140, Math.min(112, Math.round(((st.m1 + st.m2) / 1000) * 112) + 8), "#e0cdff", "ผสมกัน", `รวม ${st.m1 + st.m2} g`);
  s += `<text x="460" y="128" text-anchor="middle" font-size="18" font-weight="700" style="fill:#4f3fd0">T = ? °C</text>`;
  return `<svg class="fig" viewBox="0 0 560 215" role="img">${s}</svg>`;
}
SIMS.mix = {
  defaults: (it) => ({ m1: (it.lock && it.lock.m1) || 100, m2: (it.lock && it.lock.m2) || 100, done: false, ok: null }),
  ok: (it, st) => st.m1 * (it.hot - it.tf) === st.m2 * (it.tf - it.cold) && (!it.total || st.m1 + st.m2 === it.total),
  failText: "มวลที่เลือกยังไม่ทำให้ได้อุณหภูมิสมดุลตามเป้าหมาย",
  act(st, btn) { if (btn.dataset.act === "mass") st["m" + btn.dataset.which] = Number(btn.dataset.val); },
  panel(it, st, ro) {
    const lk = it.lock || {}, opts = it.options || [100, 150, 200, 250, 300, 350, 400, 450, 500];
    const g = (v) => `${v} g`;
    return `<div class="mission-goal"><span class="goal-chip atom">🌡️ สมดุลความร้อน</span><span class="goal-text">${esc(it.goalText)}</span></div>
      <p class="mission-hint">${esc(it.hint)}</p>
      <div class="sim-box">${mixSvg(it, st)}</div>
      <div class="ctrl-grid" style="grid-template-columns:1fr 1fr">
        <div class="ctrl"><h4>มวลน้ำร้อน (m₁) ${lk.m1 ? '<span class="lock">🔒 ล็อก</span>' : ""}</h4>${chipRow("mass", "1", opts, st.m1, ro || !!lk.m1, g)}</div>
        <div class="ctrl"><h4>มวลน้ำเย็น (m₂) ${lk.m2 ? '<span class="lock">🔒 ล็อก</span>' : ""}</h4>${chipRow("mass", "2", opts, st.m2, ro || !!lk.m2, g)}</div>
      </div>`;
  }
};

/* ---------- สร้างกราฟ F–s ให้ได้งานตามเป้า (2.8) ---------- */
function fsSvg(st) {
  const x0 = 80, y0 = 240, sx = 36, sy = 5.2, X = (s) => x0 + s * sx, Y = (f) => y0 - f * sy;
  let s = `<line class="solid" x1="${x0}" y1="${y0}" x2="${x0 + 12 * sx + 10}" y2="${y0}"/><line class="solid" x1="${x0}" y1="${y0}" x2="${x0}" y2="${Y(40) - 10}"/>`;
  for (let m = 0; m <= 12; m += 2) s += `<line class="dim" x1="${X(m)}" y1="${y0}" x2="${X(m)}" y2="${y0 + 5}"/><text x="${X(m)}" y="${y0 + 20}" text-anchor="middle" font-size="12">${m}</text>`;
  for (let f = 10; f <= 40; f += 10) s += `<line class="dim" x1="${x0 - 5}" y1="${Y(f)}" x2="${x0}" y2="${Y(f)}"/><text x="${x0 - 9}" y="${Y(f) + 4}" text-anchor="end" font-size="12">${f}</text>`;
  s += `<text x="${x0 + 6 * sx}" y="${y0 + 40}" text-anchor="middle" font-size="13">ระยะ s (m)</text><text x="18" y="130" transform="rotate(-90 18 130)" text-anchor="middle" font-size="13">แรง F (N)</text>`;
  if (st.s2 > st.s1) {
    s += `<polygon points="${X(0)},${Y(0)} ${X(0)},${Y(st.F)} ${X(st.s1)},${Y(st.F)} ${X(st.s2)},${Y(0)}" fill="rgba(108,92,231,.22)" stroke="#6c5ce7" stroke-width="3" stroke-linejoin="round"/>`;
  } else {
    s += `<polyline points="${X(0)},${Y(st.F)} ${X(st.s1)},${Y(st.F)}" fill="none" stroke="#ff8a1f" stroke-width="3"/><text x="${x0 + 120}" y="${Y(st.F) - 10}" font-size="13" style="fill:#e0425e">s₂ ต้องมากกว่า s₁</text>`;
  }
  return `<svg class="fig" viewBox="0 0 560 280" role="img">${s}</svg>`;
}
SIMS.fs = {
  defaults: () => ({ F: 20, s1: 2, s2: 6, done: false, ok: null }),
  ok: (it, st) => st.s2 > st.s1 && st.F * (st.s1 + st.s2) === 2 * it.targetW,
  failText: "กราฟที่สร้างยังให้งานไม่ตรงกับเป้าหมาย",
  act(st, btn) { if (btn.dataset.act === "fs") st[btn.dataset.which] = Number(btn.dataset.val); },
  panel(it, st, ro) {
    return `<div class="mission-goal"><span class="goal-chip atom">📈 กราฟ F–s</span><span class="goal-text">${esc(it.goalText)}</span></div>
      <p class="mission-hint">${esc(it.hint)}</p>
      <div class="sim-box">${fsSvg(st)}</div>
      <div class="ctrl-grid">
        <div class="ctrl"><h4>แรงคงที่ F</h4>${chipRow("fs", "F", [10, 20, 30, 40], st.F, ro, (v) => `${v} N`)}</div>
        <div class="ctrl"><h4>แรงคงที่ถึงระยะ s₁</h4>${chipRow("fs", "s1", [2, 3, 4, 5, 6], st.s1, ro, (v) => `${v} m`)}</div>
        <div class="ctrl"><h4>แรงลดเป็น 0 ที่ s₂</h4>${chipRow("fs", "s2", [6, 8, 10, 12], st.s2, ro, (v) => `${v} m`)}</div>
      </div>`;
  }
};

/* ---------- รูปประกอบเพิ่มเติม ---------- */
function figElectro(f) {
  let s = `<rect x="150" y="150" width="220" height="125" rx="12" fill="#dff1ff" stroke="#5b52a8" stroke-width="2.4"/>`;
  [[200, f.v1, "หลอด 1", "ต่อขั้วลบ (−)"], [290, f.v2, "หลอด 2", "ต่อขั้วบวก (+)"]].forEach(([x, v, name, term]) => {
    const gas = v * 4;
    s += `<rect x="${x}" y="62" width="44" height="170" fill="#dff1ff" stroke="#5b52a8" stroke-width="2.2"/>`;
    s += `<rect x="${x + 1.5}" y="63" width="41" height="${gas}" fill="#ffffff"/>`;
    s += `<line x1="${x + 6}" y1="${62 + gas}" x2="${x + 38}" y2="${62 + gas}" stroke="#2f80ff" stroke-width="2"/>`;
    s += `<text x="${x + 22}" y="48" text-anchor="middle" font-size="14" font-weight="600">${name}</text>`;
    s += `<text x="${x + 22}" y="${62 + gas / 2 + 5}" text-anchor="middle" font-size="13" font-weight="600">${v} mL</text>`;
    s += `<line x1="${x + 22}" y1="232" x2="${x + 22}" y2="262" stroke="#5b52a8" stroke-width="3"/>`;
    s += `<text x="${x + 22}" y="296" text-anchor="middle" font-size="13">${term}</text>`;
  });
  s += `<path d="M222 262 V282 H312 V262" fill="none" stroke="#5b52a8" stroke-width="2.4"/><rect x="258" y="274" width="14" height="16" fill="#ffd166" stroke="#5b52a8"/>`;
  return `<svg class="fig" viewBox="0 0 520 310" role="img">${s}</svg>`;
}
function figBalance(f) {
  const panel = (x, label, val, open) => {
    let s = `<rect x="${x}" y="30" width="170" height="44" rx="8" fill="#26214d"/><text x="${x + 85}" y="60" text-anchor="middle" font-size="22" font-weight="700" style="fill:#7dffb2">${val} g</text>`;
    s += `<rect x="${x - 6}" y="176" width="182" height="14" rx="5" fill="#8d86c9"/>`;
    s += `<path d="M${x + 30} 96 L${x + 36} 176 L${x + 134} 176 L${x + 140} 96" fill="none" stroke="#5b52a8" stroke-width="2.4"/>`;
    s += `<rect x="${x + 33}" y="130" width="104" height="46" fill="#ffe9a8"/><circle cx="${x + 62}" cy="164" r="8" fill="#e8e2d0" stroke="#a79f86"/><circle cx="${x + 90}" cy="168" r="7" fill="#e8e2d0" stroke="#a79f86"/>`;
    if (open) s += `<circle cx="${x + 60}" cy="118" r="4" fill="none" stroke="#6f68b0"/><circle cx="${x + 84}" cy="108" r="5" fill="none" stroke="#6f68b0"/><circle cx="${x + 108}" cy="116" r="4" fill="none" stroke="#6f68b0"/><text x="${x + 85}" y="92" text-anchor="middle" font-size="12" style="fill:#e0425e">CO₂ ลอยออก ↑</text>`;
    s += `<text x="${x + 85}" y="212" text-anchor="middle" font-size="14" font-weight="600">${label}</text>`;
    return s;
  };
  return `<svg class="fig" viewBox="0 0 560 226" role="img">${panel(40, "ก่อนทำปฏิกิริยา", f.before, false)}${panel(350, "หลังฟองแก๊สหมด (ระบบเปิด)", f.after, true)}<text x="290" y="130" text-anchor="middle" font-size="26" style="fill:#6f68b0">→</text></svg>`;
}
function figWater() {
  const X = (t) => 80 + t * 48, Y = (t) => 210 - (60 + 3 * (t - 4) * (t - 4));
  const pts = [];
  for (let t = 0; t <= 8.001; t += 0.25) pts.push(`${X(t)},${Y(t)}`);
  let s = `<line class="solid" x1="80" y1="30" x2="80" y2="215"/><line class="solid" x1="80" y1="215" x2="490" y2="215"/>`;
  [0, 2, 4, 6, 8].forEach((t) => { s += `<line class="dim" x1="${X(t)}" y1="215" x2="${X(t)}" y2="221"/><text x="${X(t)}" y="238" text-anchor="middle" font-size="13">${t}</text>`; });
  s += `<text x="285" y="258" text-anchor="middle" font-size="13">อุณหภูมิของน้ำ (°C)</text><text x="28" y="125" transform="rotate(-90 28 125)" text-anchor="middle" font-size="13">ปริมาตรน้ำ (มวลคงที่)</text>`;
  s += `<line class="thin" x1="${X(4)}" y1="${Y(4)}" x2="${X(4)}" y2="215"/><circle cx="${X(4)}" cy="${Y(4)}" r="5" fill="#ff5f9e"/><text x="${X(4)}" y="${Y(4) - 12}" text-anchor="middle" font-size="13" style="fill:#e0425e">ปริมาตรน้อยที่สุดที่ 4 °C</text>`;
  s += `<polyline points="${pts.join(" ")}" fill="none" stroke="#6c5ce7" stroke-width="3.5" stroke-linecap="round"/>`;
  return `<svg class="fig" viewBox="0 0 520 264" role="img">${s}</svg>`;
}
function figFsGraph(f) {
  const X = (s) => 80 + s * 40, Y = (v) => 220 - v * 12;
  let s = `<line class="solid" x1="80" y1="220" x2="500" y2="220"/><line class="solid" x1="80" y1="220" x2="80" y2="30"/>`;
  s += `<polygon points="${X(0)},${Y(0)} ${X(0)},${Y(f.F)} ${X(f.s1)},${Y(f.F)} ${X(f.s2)},${Y(0)}" fill="rgba(108,92,231,.2)" stroke="#6c5ce7" stroke-width="3.2" stroke-linejoin="round"/>`;
  s += `<line class="thin" x1="80" y1="${Y(f.F)}" x2="${X(f.s1)}" y2="${Y(f.F)}"/><line class="thin" x1="${X(f.s1)}" y1="${Y(f.F)}" x2="${X(f.s1)}" y2="220"/>`;
  s += `<text x="72" y="${Y(f.F) + 4}" text-anchor="end" font-size="13">${f.F}</text><text x="${X(f.s1)}" y="240" text-anchor="middle" font-size="13">${f.s1}</text><text x="${X(f.s2)}" y="240" text-anchor="middle" font-size="13">${f.s2}</text><text x="72" y="224" text-anchor="end" font-size="13">0</text>`;
  s += `<text x="${X(5)}" y="262" text-anchor="middle" font-size="13">ระยะ s (m)</text><text x="22" y="125" transform="rotate(-90 22 125)" text-anchor="middle" font-size="13">แรง F (N)</text>`;
  return `<svg class="fig" viewBox="0 0 520 270" role="img">${s}</svg>`;
}
function figTrack(f) {
  let s = `<rect x="40" y="224" width="440" height="12" fill="#8d86c9"/>`;
  s += `<path d="M90 60 Q130 200 270 224" fill="none" stroke="#5b52a8" stroke-width="4"/><line x1="270" y1="224" x2="470" y2="224" stroke="#5b52a8" stroke-width="4"/>`;
  s += `<circle cx="90" cy="48" r="12" fill="#ff5f9e" stroke="#fff" stroke-width="2"/><text x="108" y="44" font-size="13">ปล่อยจากหยุดนิ่ง</text>`;
  s += `<line class="dim" x1="72" y1="48" x2="72" y2="224"/><line class="dim" x1="66" y1="48" x2="78" y2="48"/><line class="dim" x1="66" y1="224" x2="78" y2="224"/><text x="62" y="140" text-anchor="end" font-size="14" style="fill:#e08600">h = ${esc(f.h)}</text>`;
  s += `<text x="300" y="120" font-size="14" style="fill:#6f68b0">รางเกลี้ยง ไม่มีแรงเสียดทาน</text>${arrowLine(330, 204, 440, 204)}<text x="440" y="190" text-anchor="end" font-size="14" font-weight="600">v = ? ที่พื้นราบ</text>`;
  return `<svg class="fig" viewBox="0 0 520 250" role="img">${s}</svg>`;
}
function figPerp() {
  let s = `<line x1="40" y1="170" x2="440" y2="170" stroke="#8d86c9" stroke-width="3"/>`;
  s += `<circle cx="130" cy="52" r="17" fill="#ffd9b0" stroke="#5b52a8" stroke-width="2"/><line x1="130" y1="70" x2="130" y2="122" stroke="#5b52a8" stroke-width="4"/><line x1="130" y1="122" x2="112" y2="170" stroke="#5b52a8" stroke-width="4"/><line x1="130" y1="122" x2="150" y2="170" stroke="#5b52a8" stroke-width="4"/><line x1="130" y1="86" x2="188" y2="112" stroke="#5b52a8" stroke-width="4"/>`;
  s += `<rect x="172" y="112" width="40" height="32" rx="5" fill="#ff8a1f" stroke="#a55f00" stroke-width="2"/>${arrowLine(192, 108, 192, 58)}<text x="204" y="72" font-size="13" style="fill:#e08600">แรงของมือ (แนวดิ่ง)</text>`;
  s += `${arrowLine(230, 196, 380, 196)}<text x="305" y="216" text-anchor="middle" font-size="13">เดินไปข้างหน้า ความเร็วคงที่</text>`;
  return `<svg class="fig" viewBox="0 0 480 230" role="img">${s}</svg>`;
}

/* ============================== เรนเดอร์ข้อสอบ ============================== */
const isAnswered = (item) => {
  const a = answers[item.id];
  if (TYPES[item.type]) return TYPES[item.type].answered(item, a);
  if (item.type === "tf") return typeof a === "boolean";
  if (item.type === "fill") return Array.isArray(a) && a.length === item.blanks.length && a.every(Boolean);
  if (item.type === "mission") return !!(a && a.done);
  return !!a;
};

function qHead(item, no) {
  return `<div class="q-num">${item.type === "mission" ? esc(item.title) : `ข้อ ${no}`}<span class="pt">${ptsOf(item)} คะแนน</span></div>`;
}
function explainBox(item, ctx) {
  if (!(ctx.reveal && ctx.detail && !isFull(ctx.detail[item.id]))) return "";
  return `<div class="explanation-box"><strong>วิธีคิด / เฉลย</strong><div class="explanation-text">${esc(item.explanation)}</div></div>`;
}
function reviewBadge(item, ctx) {
  if (!ctx.readOnly || !ctx.detail) return "";
  const r = ratioOf(ctx.detail[item.id]);
  if (r === 1) return `<div class="review-badge correct">✅ ถูกต้อง</div>`;
  if (r > 0) return `<div class="review-badge partial">◐ ได้บางส่วน ${Math.round(r * ptsOf(item) * 100) / 100}/${ptsOf(item)} คะแนน</div>`;
  return `<div class="review-badge incorrect">❌ ยังไม่ถูกต้อง</div>`;
}

/* ---- ตรวจรายข้อ (เคมี): oxsum/balance 1 ขั้น · redoxid 2 ขั้น ---- */
const CHEM = { oxsum: 1, balance: 1, redoxid: 2 };
const stageOf = (item) => (answers[item.id] && answers[item.id]._chk) || 0;
function balancedEq(it) {
  const sides = it.eq.split("->").map((x) => x.split(" + ").map((f) => f.trim()));
  let i = 0;
  const side = (arr) => arr.map((f) => { const c = it.coef[i++]; return (c === 1 ? "" : c) + f; }).join(" + ");
  const L = side(sides[0]), R = side(sides[1]);
  return chemU(L + " -> " + R);
}
function chemFooter(item, ctx) {
  const fin = CHEM[item.type];
  if (!fin) return "";
  const st = stageOf(item);
  if (st >= fin) {
    const r = TYPES[item.type].grade(item, answers[item.id]), pt = ptsOf(item);
    const badge = r === 1 ? '<div class="review-badge correct">✅ ถูกต้อง</div>'
      : r > 0 ? `<div class="review-badge partial">◐ ได้บางส่วน ${Math.round(r * pt * 100) / 100}/${pt} คะแนน</div>`
      : '<div class="review-badge incorrect">❌ ยังไม่ถูกต้อง</div>';
    const eq = item.type === "balance" && r < 1 ? `<p class="rx-ans">สมการที่ดุลแล้ว: <b>${esc(balancedEq(item))}</b></p>` : "";
    const ex = r < 1 ? `<div class="explanation-box"><strong>วิธีคิด / เฉลย</strong>${eq}<div class="explanation-text">${esc(item.explanation)}</div></div>` : "";
    return badge + ex;
  }
  if (ctx.readOnly) return "";
  const label = item.type === "redoxid" ? (st === 0 ? "✅ ส่งภารกิจขั้นแรก (ครึ่งปฏิกิริยา)" : "✅ ส่งภารกิจขั้นที่สอง (ศัพท์รีดอกซ์)") : "✅ ส่งภารกิจข้อนี้ (ตรวจ + ดูเฉลย)";
  return `<div class="rx-chk-row"><button type="button" class="btn go rx-chk" data-act="chk">${label}</button><span class="rx-chk-hint">ส่งแล้วแก้ไม่ได้</span></div>`;
}
const chemBody = (item, no, ctx) => qHead(item, no) + TYPES[item.type].render(item, ctx) + chemFooter(item, ctx);

function buildItem(item, no, ctx) {
  const a = answers[item.id];
  let body = "";
  if (item.type === "tf") {
    const ro = ctx.readOnly ? "disabled" : "";
    const showT = ctx.reveal && ctx.readOnly && item.answer === true ? "style=\"box-shadow:0 0 0 2px #3ddc97\"" : "";
    const showF = ctx.reveal && ctx.readOnly && item.answer === false ? "style=\"box-shadow:0 0 0 2px #3ddc97\"" : "";
    body = `${figure(item.figure)}<p class="q-text">${esc(item.prompt)}</p>
      <div class="tf-row">
        <button type="button" class="tf-btn t ${a === true ? "sel" : ""}" data-act="tf" data-v="t" ${ro} ${showT}>✔ ถูก</button>
        <button type="button" class="tf-btn f ${a === false ? "sel" : ""}" data-act="tf" data-v="f" ${ro} ${showF}>✘ ผิด</button>
      </div>`;
  } else if (item.type === "fill") {
    const vals = Array.isArray(a) ? a : [];
    const html = esc(item.text).replace(/\{(\d+)\}/g, (m, n) => {
      const i = Number(n) - 1, b = item.blanks[i];
      let cls = "";
      if (ctx.readOnly && ctx.reveal) cls = vals[i] === b.answer ? "ok" : "bad";
      const opts = [`<option value="">— เลือก —</option>`].concat(b.options.map((o) => `<option value="${esc(o)}" ${vals[i] === o ? "selected" : ""}>${esc(o)}</option>`)).join("");
      return `<select class="fill-sel ${cls}" data-i="${i}" ${ctx.readOnly ? "disabled" : ""}>${opts}</select>`;
    });
    const key = ctx.readOnly && ctx.reveal && ctx.detail && !isFull(ctx.detail[item.id])
      ? `<p class="small-note" style="margin:8px 0 0">คำตอบที่ถูก: ${item.blanks.map((b) => esc(b.answer)).join(" · ")}</p>` : "";
    body = `<p class="q-text fill-text">${html}</p>${key}`;
  } else if (item.type === "choice") {
    const opts = item.choices.map((c) => {
      const mine = a === c.key, right = c.key === item.answer;
      let cls = "option-label" + (mine ? " sel" : ""), tag = "";
      if (ctx.readOnly && ctx.reveal && right) { cls += " reveal-correct"; tag = ` <span class="reveal-tag">✔ เฉลย</span>`; }
      if (ctx.readOnly && ctx.reveal && mine && !right) { cls += " reveal-wrong"; tag = ` <span class="reveal-tag wrong">✗ คำตอบของคุณ</span>`; }
      return `<label class="${cls}"><input type="radio" name="${item.id}" value="${c.key}" ${mine ? "checked" : ""} ${ctx.readOnly ? "disabled" : ""}/><span><strong>${c.key}.</strong> ${esc(c.text)}${tag}</span></label>`;
    }).join("");
    body = `${figure(item.figure)}<p class="q-text">${esc(item.prompt)}</p><div class="options-grid">${opts}</div>`;
  } else if (item.type === "mission") {
    return `<div class="q-card" data-id="${item.id}"><div data-mission="${item.id}">${qHead(item, no)}${missionBody(item, ctx)}</div>${ctx.readOnly ? explainBox(item, ctx) : ""}</div>`;
  } else if (TYPES[item.type]) {
    const done = CHEM[item.type] && stageOf(item) >= CHEM[item.type];
    return `<div class="q-card" data-id="${item.id}"><div data-body>${chemBody(item, no, ctx)}</div>${done ? "" : reviewBadge(item, ctx) + explainBox(item, ctx)}</div>`;
  }
  return `<div class="q-card" data-id="${item.id}">${qHead(item, no)}${body}${reviewBadge(item, ctx)}${explainBox(item, ctx)}</div>`;
}

// ตัวอย่างที่เฉลยครบทุกขั้น แสดงบนหัวหน้า (ไม่นับคะแนน ไม่เก็บคำตอบ)
function exampleHtml(p) {
  const ex = p.example;
  if (!ex) return "";
  const M = rxModel(ex);
  const a = { ox: {}, e: {}, m: {}, c4: {}, c5: {}, lcm: String(M.L) };
  ex.track.forEach((t) => { a.ox[t.i] = fmtOx(t.ox); });
  M.links.forEach((l, k) => { a.e[k] = { d: l.dir, n: String(l.e) }; a.m[k] = String(l.m); });
  Object.keys(M.temp).forEach((i) => { a.c4[i] = String(M.temp[i]); });
  M.s5.forEach((i) => { a.c5[i] = String(ex.coef[i]); });
  const saved = answers[ex.id];
  answers[ex.id] = a;
  const h = TYPES.balance.render(ex, { readOnly: true, reveal: false });
  if (saved === undefined) delete answers[ex.id]; else answers[ex.id] = saved;
  return `<div class="rx-example"><div class="rx-ex-tag">👀 ตัวอย่างให้ดูก่อนทำ · ไม่นับคะแนน</div>${h}<p class="rx-ex-note">${esc(ex.explanation)}</p></div>`;
}

function renderAll(ctx) {
  let no = 0;
  $("pages").innerHTML = WS.pages.map((p, pi) => `
    <section class="ws-page ${pi === currentPage ? "active" : ""}" data-page="${pi}">
      <div class="page-head"><h2>${p.icon} ${esc(p.title)}</h2><p>${esc(p.intro)}</p></div>
      ${exampleHtml(p)}
      <div class="q-list">${p.items.map((it) => buildItem(it, ++no, ctx)).join("")}</div>
    </section>`).join("");
  renderStepper();
  updateProgress();
  updateNav();
  layoutRx();
}

function renderStepper() {
  $("stepper").innerHTML = WS.pages.map((p, i) => {
    const done = p.items.filter(isAnswered).length;
    return `<button type="button" class="step-btn ${i === currentPage ? "active" : ""} ${done === p.items.length ? "done" : ""}" data-go="${i}">
      <span class="ico">${p.icon}</span><span class="lbl">หน้า ${i + 1}</span><span class="cnt">${done}/${p.items.length}</span></button>`;
  }).join("");
}
function updateProgress() {
  const done = ITEMS.filter(isAnswered).length;
  $("progressFill").style.width = `${(done / ITEMS.length) * 100}%`;
  $("progressText").textContent = `ตอบแล้ว ${done}/${ITEMS.length} ข้อ`;
  renderStepper();
}
function updateNav() {
  const last = currentPage === WS.pages.length - 1;
  $("prevBtn").classList.toggle("hidden", currentPage === 0);
  $("nextBtn").classList.toggle("hidden", last);
  $("submitBtn").classList.toggle("hidden", !last);
  $("navBar").classList.toggle("hidden", reviewMode);
}
function goPage(i) {
  currentPage = Math.max(0, Math.min(WS.pages.length - 1, i));
  document.querySelectorAll(".ws-page").forEach((el) => el.classList.toggle("active", Number(el.dataset.page) === currentPage));
  renderStepper();
  updateNav();
  layoutRx();
  saveDraft();
  window.scrollTo({ top: $("stepper").offsetTop - 12, behavior: "smooth" });
}

/* ============================== ตอบ / ตรวจ ============================== */
function onAnswerChange() { saveDraft(); updateProgress(); }

function refreshMission(id) {
  const item = ITEMS.find((x) => x.id === id);
  const host = document.querySelector(`[data-mission="${id}"]`);
  const no = ITEMS.indexOf(item) + 1;
  host.innerHTML = qHead(item, no) + missionBody(item, { readOnly: false });
}

function handlePagesClick(e) {
  if (reviewMode) return;
  const btn = e.target.closest("[data-act]");
  if (!btn || btn.disabled) return;
  const card = btn.closest(".q-card");
  if (!card) return;
  const item = ITEMS.find((x) => x.id === card.dataset.id);
  const act = btn.dataset.act;

  if (act === "tf") {
    answers[item.id] = btn.dataset.v === "t";
    card.querySelectorAll(".tf-btn").forEach((b) => b.classList.toggle("sel", b === btn));
    card.classList.remove("missing");
    onAnswerChange();
  } else if (item.type === "mission") {
    const st = missionState(item);
    if (act === "msubmit") { st.done = true; st.ok = missionOk(item, st); }
    else simOf(item).act(st, btn, item);
    answers[item.id] = st;
    refreshMission(item.id);
    card.classList.remove("missing");
    onAnswerChange();
  } else if (act === "chk" && CHEM[item.type]) {
    const a = answers[item.id] || {}, st = stageOf(item);
    const ready = item.type === "redoxid" ? (st === 0 ? !!(a.xb && a.rb) : item.ask.every((k) => a[k])) : TYPES[item.type].answered(item, a);
    if (!ready) { card.classList.add("missing"); alert("ยังตอบไม่ครบ กรอก/เลือกให้ครบทุกช่องก่อนส่งภารกิจนะ"); return; }
    setPath(item.id, "_chk", st + 1);
    card.classList.remove("missing");
    refreshCard(item);
    onAnswerChange();
  } else if (TYPES[item.type]) {
    if (TYPES[item.type].click(item, btn)) {
      refreshCard(item);
      card.classList.remove("missing");
      onAnswerChange();
    }
  }
}
function refreshCard(item) {
  const host = document.querySelector(`.q-card[data-id="${item.id}"] [data-body]`);
  host.innerHTML = chemBody(item, ITEMS.indexOf(item) + 1, { readOnly: false });
  layoutRx();
}
function handlePagesChange(e) {
  if (reviewMode) return;
  const card = e.target.closest(".q-card");
  if (!card) return;
  const item = ITEMS.find((x) => x.id === card.dataset.id);
  if (e.target.matches("select.fill-sel")) {
    const vals = Array.isArray(answers[item.id]) ? answers[item.id].slice() : item.blanks.map(() => "");
    vals[Number(e.target.dataset.i)] = e.target.value;
    answers[item.id] = vals;
  } else if (e.target.matches('input[type="radio"]')) {
    answers[item.id] = e.target.value;
    card.querySelectorAll(".option-label").forEach((l) => l.classList.toggle("sel", l.contains(e.target)));
  } else if (TYPES[item.type] && TYPES[item.type].change) {
    if (!TYPES[item.type].change(item, e.target)) return;
  } else return;
  card.classList.remove("missing");
  onAnswerChange();
}

function gradeAll() {
  let score = 0;
  const detail = {};
  ITEMS.forEach((it) => {
    const a = answers[it.id];
    let r = 0; // สัดส่วนที่ได้ 0..1 (จับคู่ให้บางส่วนได้)
    if (it.type === "tf") r = a === it.answer ? 1 : 0;
    else if (it.type === "fill") r = Array.isArray(a) && it.blanks.every((b, i) => a[i] === b.answer) ? 1 : 0;
    else if (it.type === "choice") r = a === it.answer ? 1 : 0;
    else if (it.type === "mission") r = a && a.done && missionOk(it, missionState(it)) ? 1 : 0;
    else if (TYPES[it.type]) r = TYPES[it.type].grade(it, a);
    detail[it.id] = r === 1 ? true : r === 0 ? false : r;
    score += r * ptsOf(it);
  });
  return { score: Math.round(score * 100) / 100, detail };
}

/* ============================== ส่งใบงาน ============================== */
async function handleSubmit() {
  if (reviewMode) return;
  const name = $("displayNameInput").value.trim();
  const missing = ITEMS.filter((it) => !isAnswered(it));

  if (missing.length) {
    document.querySelectorAll(".q-card").forEach((c) => c.classList.toggle("missing", missing.some((m) => m.id === c.dataset.id)));
    const firstPage = WS.pages.findIndex((p) => p.items.some((it) => missing.includes(it)));
    goPage(firstPage);
    alert(`ยังทำไม่ครบ เหลืออีก ${missing.length} ข้อ (ข้อที่ยังไม่ได้ตอบมีกรอบสีแดง)`);
    return;
  }
  if (!name) {
    alert("กรุณากรอกชื่อที่จะแสดงในตารางผลของคอร์ส");
    $("displayNameInput").focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const btn = $("submitBtn");
  btn.disabled = true; btn.textContent = "กำลังส่ง...";
  clearInterval(timerInterval);
  const timeSec = Math.floor((Date.now() - startTime) / 1000);
  const { score, detail } = gradeAll();
  const reward = rewardByScore(score, WS.meta.maxScore);

  try {
    const result = await api({
      action: "submitQuiz", userId: currentUser.uid, displayName: name, courseId, quizKey,
      score, diamondsEarned: reward.diamonds, timeSec, answers, detail
    });
    if (!result.ok) throw new Error(result.message || "Submit failed");
    markSubmitTime();
    clearDraft();
    reviewMode = true;
    renderAll({ readOnly: true, detail, reveal: false });
    await showResult({ score, timeSec, displayName: name, diamonds: reward.diamonds, fresh: true });
    launchFirework(reward.firework);
    window.scrollTo({ top: $("resultInline").offsetTop - 20, behavior: "smooth" });
  } catch (err) {
    console.error(err);
    btn.disabled = false; btn.textContent = "🚀 ส่งใบงาน";
    startStopwatch();
    alert(err.message || "เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่");
  }
}

/* ============================== ผลลัพธ์ + ตารางสถานะ ============================== */
async function showResult({ score, timeSec, displayName, diamonds, fresh }) {
  const max = WS.meta.maxScore;
  const { reveal, remainMs } = getRevealState();
  $("navBar").classList.add("hidden");
  document.querySelector(".display-name-box").classList.add("hidden");
  const note = reveal
    ? "เฉลยและวิธีคิดของข้อที่ตอบผิดแสดงอยู่ในใบงานด้านบนแล้ว"
    : `เพื่อป้องกันการลอกกันระหว่างทำ ระบบจะแสดงเฉลยและวิธีคิดของข้อที่ผิดในอีกประมาณ ${Math.ceil(remainMs / 60000)} นาที`;
  const el = $("resultInline");
  el.classList.remove("hidden");
  el.innerHTML = `
    <div class="result-card">
      <h2>${fresh ? "ส่งใบงานเรียบร้อย 🎉" : "คุณส่งใบงานนี้แล้ว"}</h2>
      <p class="who">ชื่อที่แสดง: <strong>${esc(displayName || "-")}</strong></p>
      <div class="stat-row">
        <div class="stat score"><div class="v">${score}/${max}</div><div class="l">คะแนน</div></div>
        <div class="stat gem"><div class="v">💎 ${diamonds}</div><div class="l">Diamonds ที่ได้</div></div>
        <div class="stat time"><div class="v">${fmtTime(timeSec)}</div><div class="l">เวลาที่ใช้</div></div>
      </div>
      <p class="small-note" id="revealNote">${note}</p>
    </div>
    <div class="board" id="board"><h3>📋 สถานะการส่งใบงานของทุกคนในคอร์ส</h3><p class="sub">กำลังโหลดข้อมูล...</p></div>`;
  if (!reveal && remainMs > 0) {
    setTimeout(() => {
      if (!getRevealState().reveal) return;
      const st = lastStatus || { detail: gradeAll().detail };
      renderAll({ readOnly: true, detail: st.detail, reveal: true });
      const n = $("revealNote"); if (n) n.textContent = "เฉลยและวิธีคิดของข้อที่ตอบผิดแสดงแล้วด้านบน";
    }, remainMs + 500);
  }
  await renderBoard(displayName, score);
}

async function renderBoard() {
  const host = $("board");
  try {
    const [lb, roster] = await Promise.all([
      api({ action: "getLeaderboard", courseId, quizKey }),
      fetchRoster()
    ]);
    if (!lb.ok) throw new Error(lb.message || "โหลดข้อมูลไม่สำเร็จ");
    const map = new Map();
    roster.forEach((r) => {
      map.set(String(r.userId), { userId: String(r.userId), name: r.nickname || r.firstName || "นักเรียน", submitted: false, score: null });
    });
    (lb.rows || []).forEach((r) => {
      const id = String(r.userId), prev = map.get(id) || {};
      map.set(id, { userId: id, name: r.displayName || prev.name || "นักเรียน", submitted: true, score: Number(r.score) });
    });
    const rows = [...map.values()].sort((a, b) => {
      if (a.submitted !== b.submitted) return a.submitted ? -1 : 1;
      if (a.submitted && b.score !== a.score) return b.score - a.score;
      return a.name.localeCompare(b.name, "th");
    });
    const sent = rows.filter((r) => r.submitted).length;
    const max = WS.meta.maxScore;
    host.innerHTML = `
      <h3>📋 สถานะการส่งใบงานของทุกคนในคอร์ส</h3>
      <p class="sub">ส่งแล้ว ${sent} จาก ${rows.length} คน · Diamonds คิดจากคะแนนตามเกณฑ์เดิม</p>
      <div class="board-scroll"><table>
        <thead><tr><th class="num">#</th><th>ชื่อ</th><th class="num">สถานะ</th><th class="num">คะแนน</th><th class="num">Diamonds</th></tr></thead>
        <tbody>${rows.map((r, i) => {
          const me = currentUser && r.userId === String(currentUser.uid);
          const d = r.submitted ? rewardByScore(r.score, max).diamonds : null;
          return `<tr class="${me ? "me" : ""}">
            <td class="num">${i + 1}</td>
            <td>${esc(r.name)}${me ? " <small style='color:var(--cyan)'>(คุณ)</small>" : ""}</td>
            <td class="num">${r.submitted ? '<span class="badge done">ส่งแล้ว</span>' : '<span class="badge none">ยังไม่มีคะแนน</span>'}</td>
            <td class="num">${r.submitted ? `<strong>${r.score}</strong>/${max}` : '<span class="dash">—</span>'}</td>
            <td class="num">${r.submitted ? `<span class="gem-cell">💎 ${d}</span>` : '<span class="dash">—</span>'}</td>
          </tr>`;
        }).join("")}</tbody></table></div>`;
  } catch (err) {
    console.error(err);
    host.innerHTML = `<h3>📋 สถานะการส่งใบงานของทุกคนในคอร์ส</h3><p class="sub">โหลดตารางสถานะไม่สำเร็จ ลองรีเฟรชหน้านี้อีกครั้ง</p>`;
  }
}

/* ============================== เริ่มระบบ ============================== */
let lastStatus = null;

function startStopwatch() {
  clearInterval(timerInterval);
  $("timerBox").classList.remove("hidden");
  const tick = () => { $("timerText").textContent = fmtTime(Math.floor((Date.now() - startTime) / 1000)); };
  tick();
  timerInterval = setInterval(() => { tick(); saveDraft(); }, 1000);
}

async function initWorksheet(user, data) {
  WS = data;
  ITEMS = WS.pages.reduce((all, p) => all.concat(p.items), []);
  WS.meta.maxScore = Math.round(ITEMS.reduce((s, it) => s + ptsOf(it), 0) * 100) / 100; // คะแนนเต็ม = ผลรวมคะแนนทุกข้อ
  $("courseTitle").textContent = `Course : ${courseId.toUpperCase()}`;
  $("quizTitle").textContent = WS.meta.title;
  $("quizSubtitle").textContent = `${WS.meta.subtitle || ""} · คะแนนเต็ม ${WS.meta.maxScore} · ส่งได้ 1 ครั้งต่อ 1 บัญชี`;
  document.title = WS.meta.title;
  showMessage(`ผู้ใช้: ${user.email || user.uid}`, "กำลังโหลดสถานะใบงาน...");

  try {
    const status = await api({ action: "getQuizStatus", userId: user.uid, courseId, quizKey });
    if (!status.ok) throw new Error(status.message || "Cannot load status");
    $("wsRoot").classList.remove("hidden");

    if (status.submitted) {
      reviewMode = true;
      lastStatus = status;
      answers = status.answers || {};
      const { reveal } = getRevealState();
      renderAll({ readOnly: true, detail: status.detail || {}, reveal });
      showMessage(`ผู้ใช้: ${user.email || user.uid}`, `คะแนน ${status.score ?? 0}/${WS.meta.maxScore}`);
      const reward = rewardByScore(Number(status.score || 0), WS.meta.maxScore);
      await showResult({ score: Number(status.score || 0), timeSec: status.timeSec || 0, displayName: status.displayName, diamonds: reward.diamonds, fresh: false });
      return;
    }

    const draft = loadDraft();
    if (draft) {
      answers = draft.answers || {};
      startTime = draft.start || Date.now();
      currentPage = Math.min(draft.page || 0, WS.pages.length - 1);
      if (draft.name) $("displayNameInput").value = draft.name;
    }
    if (status.displayName && !$("displayNameInput").value) $("displayNameInput").value = status.displayName;
    renderAll({ readOnly: false });
    showMessage(`ผู้ใช้: ${user.email || user.uid}`, `ทำได้ 1 ครั้ง · คะแนนเต็ม ${WS.meta.maxScore} · ความคืบหน้าถูกเก็บไว้ในเครื่องนี้อัตโนมัติ`);
    startStopwatch();
  } catch (err) {
    console.error(err);
    showMessage("โหลดใบงานไม่สำเร็จ", "กรุณาลองใหม่อีกครั้ง");
  }
}

function loadDataScript(user) {
  const s = document.createElement("script");
  s.src = `./courses/${courseId}/data.js?v=${Date.now()}`;
  s.onload = () => {
    const d = window.COURSE_DATA ? window.COURSE_DATA[quizKey] : null;
    if (!d || !d.pages) { showMessage("ไม่พบใบงานนี้", `${courseId} / ${quizKey}`); $("quizTitle").textContent = "ไม่พบใบงาน"; return; }
    initWorksheet(user, d);
  };
  s.onerror = () => { showMessage("ไม่พบไฟล์ข้อมูลของคอร์สนี้", courseId); };
  document.head.appendChild(s);
}

/* ---------- events ---------- */
$("pages").addEventListener("click", handlePagesClick);
$("pages").addEventListener("change", handlePagesChange);
$("pages").addEventListener("input", (e) => { if (e.target.matches("input.rx-in")) handlePagesChange(e); });
window.addEventListener("resize", layoutRx);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutRx);
$("stepper").addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) goPage(Number(b.dataset.go)); });
$("prevBtn").addEventListener("click", () => goPage(currentPage - 1));
$("nextBtn").addEventListener("click", () => goPage(currentPage + 1));
$("submitBtn").addEventListener("click", handleSubmit);
$("displayNameInput").addEventListener("input", saveDraft);

$("resetPreview").addEventListener("click", (e) => {
  e.preventDefault();
  Object.keys(localStorage).filter((k) => k.startsWith("wdw_preview_ws_") || k.startsWith("wdw_ws_draft_") || k.startsWith("wdw_submitAt_")).forEach((k) => localStorage.removeItem(k));
  location.reload();
});

/* ---------- auth ---------- */
if (PREVIEW) {
  currentUser = { uid: "preview-user", email: "preview@localhost" };
  $("previewBanner").classList.remove("hidden");
  loadDataScript(currentUser);
} else {
  let authResolved = false;
  window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
    if (!authResolved) {
      authResolved = true;
      if (!user) {
        showMessage("ยังไม่ได้ล็อกอิน", "กำลังพากลับไปหน้าเข้าสู่ระบบ...");
        $("quizTitle").textContent = "กรุณาเข้าสู่ระบบ";
        setTimeout(() => { window.location.href = "../login.html"; }, 1500);
        return;
      }
      currentUser = user;
      loadDataScript(user);
      return;
    }
    if (!user) {
      clearInterval(timerInterval);
      alert("เซสชันหมดอายุ กรุณาล็อกอินใหม่");
      window.location.href = "../login.html";
    }
  });
}
