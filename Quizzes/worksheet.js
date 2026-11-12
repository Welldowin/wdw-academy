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
  const map = { line: figLine, right: figRight, square: figSquare, float: figFloat, hang: figHang, electroscope: figElectroscope, pith: figPith };
  return `<div class="fig-wrap">${map[f.kind](f)}</div>`;
}

/* ============================== ภารกิจปรับค่า ============================== */
const Q_CHIPS = [1, 2, 3, 4, 5, 6];
const R_CHIPS = [{ n: 1, d: 2, label: "×½" }, { n: 1, d: 1, label: "×1" }, { n: 2, d: 1, label: "×2" }, { n: 3, d: 1, label: "×3" }];
const rLabel = (n, d) => (d === 2 ? "½" : String(n));

function missionState(item) {
  const lk = item.lock || {};
  const st = answers[item.id] || {};
  const base = {
    s1: "+", q1: lk.q1 || 1, s2: "+", q2: lk.q2 || 1,
    rn: lk.r ? lk.r.num : 1, rd: lk.r ? lk.r.den : 1, done: false, ok: null
  };
  return Object.assign(base, st);
}
function missionOk(item, st) {
  const sameSign = st.s1 === st.s2;
  if (item.goal.kind === "repel" && !sameSign) return false;
  if (item.goal.kind === "attract" && sameSign) return false;
  // F = q1·q2·rd² / rn²  เทียบกับ num/den แบบเศษส่วน (ไม่ใช้ทศนิยม)
  return st.q1 * st.q2 * st.rd * st.rd * item.goal.den === item.goal.num * st.rn * st.rn;
}
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
  const st = missionState(item), lk = item.lock || {}, ro = ctx.readOnly || st.done;
  const kindCls = item.goal.kind === "repel" ? "repel" : "attract";
  const kindTxt = item.goal.kind === "repel" ? "แรงผลัก" : "แรงดูด";
  let result = "";
  if (st.done) {
    const ok = ctx.readOnly && ctx.detail ? !!ctx.detail[item.id] : missionOk(item, st);
    const extra = ctx.readOnly && ctx.reveal && !ok ? `<small>เฉลย: ${esc(item.solution)}</small>` : "";
    result = ok
      ? `<div class="mission-result ok">✅ ภารกิจสำเร็จ!<small>ปรับค่าถูกต้อง ได้ 1 คะแนน</small></div>`
      : `<div class="mission-result fail">❌ ภารกิจล้มเหลว<small>ค่าที่เลือกยังไม่ให้แรงตามเป้าหมาย${ctx.readOnly ? "" : " (ภารกิจนี้ถูกส่งแล้ว แก้ไม่ได้)"}</small>${extra}</div>`;
  }
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
    </div>
    ${ro ? "" : `<div class="mission-actions"><button type="button" class="btn mission" data-act="msubmit">📡 ส่งภารกิจนี้</button><span class="small-note" style="margin:0">ส่งแล้วแก้ไม่ได้ · ระบบจะไม่บอกจำนวนเท่าก่อนส่ง</span></div>`}
    ${result}`;
}

/* ============================== เรนเดอร์ข้อสอบ ============================== */
const isAnswered = (item) => {
  const a = answers[item.id];
  if (item.type === "tf") return typeof a === "boolean";
  if (item.type === "fill") return Array.isArray(a) && a.length === item.blanks.length && a.every(Boolean);
  if (item.type === "mission") return !!(a && a.done);
  return !!a;
};

function qHead(item, no) {
  return `<div class="q-num">${item.type === "mission" ? esc(item.title) : `ข้อ ${no}`}<span class="pt">1 คะแนน</span></div>`;
}
function explainBox(item, ctx) {
  if (!(ctx.reveal && ctx.detail && !ctx.detail[item.id])) return "";
  return `<div class="explanation-box"><strong>วิธีคิด / เฉลย</strong><div class="explanation-text">${esc(item.explanation)}</div></div>`;
}
function reviewBadge(item, ctx) {
  if (!ctx.readOnly || !ctx.detail) return "";
  const ok = !!ctx.detail[item.id];
  return `<div class="review-badge ${ok ? "correct" : "incorrect"}">${ok ? "✅ ถูกต้อง" : "❌ ยังไม่ถูกต้อง"}</div>`;
}

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
    const key = ctx.readOnly && ctx.reveal && ctx.detail && !ctx.detail[item.id]
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
  }
  return `<div class="q-card" data-id="${item.id}">${qHead(item, no)}${body}${reviewBadge(item, ctx)}${explainBox(item, ctx)}</div>`;
}

function renderAll(ctx) {
  let no = 0;
  $("pages").innerHTML = WS.pages.map((p, pi) => `
    <section class="ws-page ${pi === currentPage ? "active" : ""}" data-page="${pi}">
      <div class="page-head"><h2>${p.icon} ${esc(p.title)}</h2><p>${esc(p.intro)}</p></div>
      <div class="q-list">${p.items.map((it) => buildItem(it, ++no, ctx)).join("")}</div>
    </section>`).join("");
  renderStepper();
  updateProgress();
  updateNav();
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
    if (act === "sign") st["s" + btn.dataset.which] = btn.dataset.val;
    if (act === "q") st["q" + btn.dataset.which] = Number(btn.dataset.val);
    if (act === "r") { const [n, d] = btn.dataset.val.split("/").map(Number); st.rn = n; st.rd = d; }
    if (act === "msubmit") { st.done = true; st.ok = missionOk(item, st); }
    answers[item.id] = st;
    refreshMission(item.id);
    card.classList.remove("missing");
    onAnswerChange();
  }
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
  } else return;
  card.classList.remove("missing");
  onAnswerChange();
}

function gradeAll() {
  let score = 0;
  const detail = {};
  ITEMS.forEach((it) => {
    const a = answers[it.id];
    let ok = false;
    if (it.type === "tf") ok = a === it.answer;
    else if (it.type === "fill") ok = Array.isArray(a) && it.blanks.every((b, i) => a[i] === b.answer);
    else if (it.type === "choice") ok = a === it.answer;
    else if (it.type === "mission") ok = !!(a && a.done && missionOk(it, missionState(it)));
    detail[it.id] = ok;
    if (ok) score += 1;
  });
  return { score, detail };
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
