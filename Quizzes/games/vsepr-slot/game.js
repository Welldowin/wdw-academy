/* =====================================================================
   VSEPR Slot : ทายรูปร่างโมเลกุล
   - 2 โหมด : สุ่มสัญลักษณ์ AXE / สุ่มสูตรสารประกอบ
   - ระบบสุ่มแบบ Shuffle Bag (ถังสุ่ม) ไม่ซ้ำจนกว่าจะหมดกอง
   ===================================================================== */

/* ---------- ฐานข้อมูล VSEPR (13 รูปแบบ) ---------- */
const VSEPR = [
  { axe: "AX2",   compounds: ["CO2", "BeCl2", "HCN"],   shape: "เส้นตรง",                  shapeEn: "Linear",              angles: ["180"] },
  { axe: "AX3",   compounds: ["BF3", "BCl3", "SO3"],    shape: "สามเหลี่ยมแบนราบ",         shapeEn: "Trigonal planar",     angles: ["120"] },
  { axe: "AX2E",  compounds: ["SO2", "O3", "SnCl2"],    shape: "มุมงอ",                    shapeEn: "Bent / V-Shape",      angles: ["< 120"] },
  { axe: "AX4",   compounds: ["CH4", "CCl4", "SiH4"],   shape: "ทรงสี่หน้า",               shapeEn: "Tetrahedral",         angles: ["109.5"] },
  { axe: "AX3E",  compounds: ["NH3", "PCl3", "NF3"],    shape: "พีระมิดฐานสามเหลี่ยม",     shapeEn: "Trigonal pyramidal",  angles: ["< 109.5"] },
  { axe: "AX2E2", compounds: ["H2O", "H2S", "OF2"],     shape: "มุมงอ",                    shapeEn: "Bent / V-Shape",      angles: ["<< 109.5"] },
  { axe: "AX5",   compounds: ["PCl5", "PF5", "AsF5"],   shape: "พีระมิดคู่ฐานสามเหลี่ยม",  shapeEn: "Trigonal bipyramidal", angles: ["90", "120"] },
  { axe: "AX4E",  compounds: ["SF4", "SeF4"],           shape: "ทรงกระดานหก",              shapeEn: "Seesaw",              angles: ["< 90", "< 120"] },
  { axe: "AX3E2", compounds: ["ClF3", "BrF3"],          shape: "รูปตัวที",                 shapeEn: "T-shaped",            angles: ["< 90"] },
  { axe: "AX2E3", compounds: ["XeF2", "I3-"],           shape: "เส้นตรง",                  shapeEn: "Linear",              angles: ["180"] },
  { axe: "AX6",   compounds: ["SF6", "SeF6"],           shape: "ทรงแปดหน้า",               shapeEn: "Octahedral",          angles: ["90"] },
  { axe: "AX5E",  compounds: ["BrF5", "IF5"],           shape: "พีระมิดฐานสี่เหลี่ยม",     shapeEn: "Square pyramidal",    angles: ["< 90"] },
  { axe: "AX4E2", compounds: ["XeF4", "ICl4-"],         shape: "สี่เหลี่ยมแบนราบ",         shapeEn: "Square planar",       angles: ["90"] },
];

const SHAPE_OPTIONS = [
  "เส้นตรง", "สามเหลี่ยมแบนราบ", "มุมงอ", "ทรงสี่หน้า",
  "พีระมิดฐานสามเหลี่ยม", "พีระมิดคู่ฐานสามเหลี่ยม", "ทรงกระดานหก",
  "รูปตัวที", "ทรงแปดหน้า", "พีระมิดฐานสี่เหลี่ยม", "สี่เหลี่ยมแบนราบ",
];

const ANGLE_OPTIONS = ["180", "120", "< 120", "109.5", "< 109.5", "<< 109.5", "90", "< 90"];

/* ---------- สถานะเกม ---------- */
const state = {
  mode: null,          // "axe" | "compound"
  bag: [],             // ดัชนีของ VSEPR ที่ยังไม่ถูกสุ่มในรอบนี้
  current: null,       // entry ปัจจุบัน
  currentCompound: "", // สูตรที่โชว์ (โหมด 2)
  pickShape: null,
  pickAngle: null,
  score: 0,
  streak: 0,
  spinning: false,
  answered: false,
};

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const screenMenu = $("screenMenu");
const screenGame = $("screenGame");
const reel = $("reel");
const slotWindow = document.querySelector(".slot-window");
const lever = $("lever");
const spinBtn = $("spinBtn");
const answerPanel = $("answerPanel");
const shapeGrid = $("shapeGrid");
const angleGrid = $("angleGrid");
const submitBtn = $("submitBtn");
const feedback = $("feedback");
const nextBtn = $("nextBtn");
const soundToggle = $("soundToggle");

/* =====================================================================
   เสียงเอฟเฟกต์ (WebAudio – ไม่ต้องโหลดไฟล์)
   ===================================================================== */
let audioCtx = null;
function ac() {
  if (!soundToggle.checked) return null;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function beep(freq, dur = 0.08, type = "square", vol = 0.15) {
  const ctx = ac();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = vol;
  osc.connect(gain).connect(ctx.destination);
  const t = ctx.currentTime;
  osc.start(t);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.stop(t + dur);
}
function sndTick() { beep(180 + Math.random() * 80, 0.05, "square", 0.08); }
function sndStop() { beep(880, 0.14, "triangle", 0.18); }
function sndClick() { beep(420, 0.05, "sine", 0.12); }
function sndWin() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.16, "triangle", 0.16), i * 90)); }
function sndLose() { beep(200, 0.18, "sawtooth", 0.16); setTimeout(() => beep(150, 0.28, "sawtooth", 0.16), 130); }

/* =====================================================================
   Shuffle Bag – ถังสุ่มไม่ซ้ำ
   ===================================================================== */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function refillBag() {
  state.bag = shuffle(VSEPR.map((_, i) => i));
}
function drawFromBag() {
  if (state.bag.length === 0) refillBag();
  return state.bag.pop();
}
function updateBagPill() {
  $("bagLeft").textContent = state.bag.length;
}

/* =====================================================================
   นำทางหน้าจอ
   ===================================================================== */
function startMode(mode) {
  state.mode = mode;
  state.score = 0;
  state.streak = 0;
  refillBag();
  $("score").textContent = "0";
  $("streak").textContent = "0";
  updateBagPill();
  $("modeLabel").textContent =
    mode === "axe" ? "MODE 1 · สุ่มสัญลักษณ์ VSEPR" : "MODE 2 · สุ่มสูตรสารประกอบ";
  reel.innerHTML = "<span>?</span>";
  answerPanel.classList.add("is-hidden");
  spinBtn.disabled = false;
  screenMenu.classList.remove("is-active");
  screenGame.classList.add("is-active");
}
function goMenu() {
  screenGame.classList.remove("is-active");
  screenMenu.classList.add("is-active");
}

/* =====================================================================
   หมุนสล็อต
   ===================================================================== */
function spin() {
  if (state.spinning) return;
  state.spinning = true;
  state.answered = false;
  spinBtn.disabled = true;
  answerPanel.classList.add("is-hidden");
  feedback.classList.add("is-hidden");
  nextBtn.classList.add("is-hidden");
  slotWindow.classList.remove("win", "lose");

  lever.classList.add("pull");
  setTimeout(() => lever.classList.remove("pull"), 260);

  const idx = drawFromBag();
  updateBagPill();
  state.current = VSEPR[idx];

  // ค่าที่จะโชว์บนวงล้อ
  let target;
  if (state.mode === "axe") {
    target = state.current.axe;
  } else {
    const list = state.current.compounds;
    state.currentCompound = list[Math.floor(Math.random() * list.length)];
    target = state.currentCompound;
  }

  // แหล่งข้อความสำหรับ "หลอกตา" ระหว่างหมุน
  const pool =
    state.mode === "axe"
      ? VSEPR.map((v) => v.axe)
      : VSEPR.flatMap((v) => v.compounds);

  reel.classList.add("is-spinning");
  const totalMs = 1500;
  const start = performance.now();

  function frame(now) {
    const t = (now - start) / totalMs;
    if (t >= 1) {
      // หยุด
      reel.classList.remove("is-spinning");
      reel.innerHTML = `<span>${formatFormula(target)}</span>`;
      sndStop();
      state.spinning = false;
      openAnswerPanel();
      return;
    }
    // ยิ่งใกล้จบยิ่งช้า (ease-out) → เว้นช่วงเปลี่ยนข้อความนานขึ้น
    const gap = 40 + t * t * 260;
    if (!frame.last || now - frame.last > gap) {
      frame.last = now;
      const txt = pool[Math.floor(Math.random() * pool.length)];
      reel.innerHTML = `<span>${formatFormula(txt)}</span>`;
      sndTick();
    }
    requestAnimationFrame(frame);
  }
  frame.last = 0;
  requestAnimationFrame(frame);
}

// เปลี่ยนตัวเลขในสูตร/สัญลักษณ์ให้เป็นตัวห้อย
function formatFormula(s) {
  return String(s).replace(/([A-Za-z\)\]])(\d+)/g, "$1<sub>$2</sub>")
                  .replace(/(\d)-$/, "$1<sup>−</sup>");
}

/* =====================================================================
   แผงตอบคำถาม
   ===================================================================== */
function openAnswerPanel() {
  state.pickShape = null;
  state.pickAngle = null;
  submitBtn.disabled = true;
  submitBtn.textContent = "ยืนยันคำตอบ";
  feedback.classList.add("is-hidden");
  nextBtn.classList.add("is-hidden");

  buildGrid(shapeGrid, SHAPE_OPTIONS, "shape");
  buildGrid(angleGrid, ANGLE_OPTIONS, "angle");

  answerPanel.classList.remove("is-hidden");
  answerPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function buildGrid(container, options, kind) {
  container.innerHTML = "";
  options.forEach((opt) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.type = "button";
    b.textContent = opt;
    b.dataset.value = opt;
    b.addEventListener("click", () => {
      if (state.answered) return;
      sndClick();
      [...container.children].forEach((c) => c.classList.remove("selected"));
      b.classList.add("selected");
      if (kind === "shape") state.pickShape = opt;
      else state.pickAngle = opt;
      submitBtn.disabled = !(state.pickShape && state.pickAngle);
    });
    container.appendChild(b);
  });
}

/* =====================================================================
   ตรวจคำตอบ
   ===================================================================== */
function submitAnswer() {
  if (state.answered || !state.pickShape || !state.pickAngle) return;
  state.answered = true;
  submitBtn.disabled = true;

  const cur = state.current;
  const shapeOK = state.pickShape === cur.shape;
  const angleOK = cur.angles.includes(state.pickAngle);
  const allOK = shapeOK && angleOK;

  lockAndMark(shapeGrid, cur.shape, state.pickShape);
  lockAndMark(angleGrid, cur.angles, state.pickAngle);

  const prompt =
    state.mode === "axe"
      ? `สัญลักษณ์ <code>${formatFormula(cur.axe)}</code>`
      : `สาร <code>${formatFormula(state.currentCompound)}</code> (${formatFormula(cur.axe)})`;

  const answerLine =
    `เฉลย : ${prompt} → รูปร่าง <b>${cur.shape}</b> ` +
    `(${cur.shapeEn}) · มุมพันธะ <b>${cur.angles.join(" , ")}</b>°`;

  if (allOK) {
    const gain = 10 + state.streak * 2;
    state.score += gain;
    state.streak += 1;
    feedback.className = "feedback ok";
    feedback.innerHTML =
      `<div class="fb-head">✅ ถูกต้อง! +${gain} คะแนน</div>${answerLine}`;
    slotWindow.classList.add("win");
    sndWin();
    confettiBurst();
  } else {
    state.streak = 0;
    feedback.className = "feedback no";
    const wrongParts = [];
    if (!shapeOK) wrongParts.push("ชื่อรูปร่าง");
    if (!angleOK) wrongParts.push("มุมพันธะ");
    feedback.innerHTML =
      `<div class="fb-head">❌ ยังไม่ถูก (ผิดที่ ${wrongParts.join(" และ ")})</div>${answerLine}`;
    slotWindow.classList.add("lose");
    sndLose();
  }

  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
  feedback.classList.remove("is-hidden");
  nextBtn.classList.remove("is-hidden");
  nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function lockAndMark(container, correctValues, picked) {
  const correct = Array.isArray(correctValues) ? correctValues : [correctValues];
  [...container.children].forEach((b) => {
    b.classList.add("locked");
    b.classList.remove("selected");
    const v = b.dataset.value;
    if (correct.includes(v)) b.classList.add("correct");
    if (v === picked && !correct.includes(v)) b.classList.add("wrong");
  });
}

/* =====================================================================
   เอฟเฟกต์พลุ
   ===================================================================== */
function confettiBurst() {
  const colors = ["#38e8c6", "#6ea8ff", "#ffcf5c", "#3ad07a", "#ff5d6c"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.4 + Math.random() * 1.4 + "s";
    c.style.animationDelay = Math.random() * 0.25 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3200);
  }
}

/* =====================================================================
   เชื่อม Event
   ===================================================================== */
document.querySelectorAll(".mode-card").forEach((card) => {
  card.addEventListener("click", () => {
    sndClick();
    startMode(card.dataset.mode);
  });
});
$("backBtn").addEventListener("click", () => { sndClick(); goMenu(); });
spinBtn.addEventListener("click", spin);
lever.addEventListener("click", () => { if (!spinBtn.disabled) spin(); });
submitBtn.addEventListener("click", submitAnswer);
nextBtn.addEventListener("click", () => { sndClick(); spin(); });
