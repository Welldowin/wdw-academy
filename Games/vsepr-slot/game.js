/* =====================================================================
   VSEPR Slot : ทายรูปร่างโมเลกุล & แรงยึดเหนี่ยว
   - โหมด 1 : สุ่มสัญลักษณ์ AXE  -> ตอบ รูปร่าง + มุมพันธะ
   - โหมด 2 : สุ่มสูตรสารประกอบ  -> ตอบ รูปร่าง + มุมพันธะ
   - โหมด 3 : สุ่มสาร (IMF)      -> ตอบ แรงยึดเหนี่ยวระหว่างโมเลกุล
   - ระบบสุ่มแบบ Shuffle Bag (ถังสุ่ม) ไม่ซ้ำจนกว่าจะหมดกอง
   ===================================================================== */

/* ---------- ฐานข้อมูล VSEPR (13 รูปแบบ) ---------- */
const VSEPR = [
  { axe: "AX2",   compounds: ["CO2", "CS2", "BeCl2", "BeF2", "BeH2", "HCN", "N2O"],
    shape: "เส้นตรง",                  shapeEn: "Linear",               angles: ["180"] },
  { axe: "AX3",   compounds: ["BF3", "BCl3", "BBr3", "SO3", "NO3⁻", "CO3²⁻", "AlCl3"],
    shape: "สามเหลี่ยมแบนราบ",         shapeEn: "Trigonal planar",      angles: ["120"] },
  { axe: "AX2E",  compounds: ["SO2", "O3", "NO2", "SnCl2", "PbCl2"],
    shape: "มุมงอ",                    shapeEn: "Bent / V-Shape",       angles: ["< 120"] },
  { axe: "AX4",   compounds: ["CH4", "CCl4", "CF4", "SiH4", "SiF4", "SO4²⁻", "PO4³⁻", "NH4⁺", "ClO4⁻"],
    shape: "ทรงสี่หน้า",               shapeEn: "Tetrahedral",          angles: ["109.5"] },
  { axe: "AX3E",  compounds: ["NH3", "NF3", "PH3", "PCl3", "PF3", "PBr3", "AsH3", "H3O⁺", "ClO3⁻"],
    shape: "พีระมิดฐานสามเหลี่ยม",     shapeEn: "Trigonal pyramidal",   angles: ["< 109.5"] },
  { axe: "AX2E2", compounds: ["H2O", "H2S", "H2Se", "OF2", "OCl2", "SCl2"],
    shape: "มุมงอ",                    shapeEn: "Bent / V-Shape",       angles: ["<< 109.5"] },
  { axe: "AX5",   compounds: ["PCl5", "PF5", "AsF5", "SbCl5"],
    shape: "พีระมิดคู่ฐานสามเหลี่ยม",  shapeEn: "Trigonal bipyramidal", angles: ["90", "120"] },
  { axe: "AX4E",  compounds: ["SF4", "SeF4", "TeCl4"],
    shape: "ทรงกระดานหก",              shapeEn: "Seesaw",               angles: ["< 90", "< 120"] },
  { axe: "AX3E2", compounds: ["ClF3", "BrF3", "IF3", "ICl3"],
    shape: "รูปตัวที",                 shapeEn: "T-shaped",             angles: ["90"] },
  { axe: "AX2E3", compounds: ["XeF2", "I3⁻", "ICl2⁻", "IF2⁻"],
    shape: "เส้นตรง",                  shapeEn: "Linear",               angles: ["180"] },
  { axe: "AX6",   compounds: ["SF6", "SeF6", "TeF6", "PF6⁻", "SiF6²⁻"],
    shape: "ทรงแปดหน้า",               shapeEn: "Octahedral",           angles: ["90"] },
  { axe: "AX5E",  compounds: ["BrF5", "IF5", "ClF5"],
    shape: "พีระมิดฐานสี่เหลี่ยม",     shapeEn: "Square pyramidal",     angles: ["90"] },
  { axe: "AX4E2", compounds: ["XeF4", "ICl4⁻", "BrF4⁻"],
    shape: "สี่เหลี่ยมแบนราบ",         shapeEn: "Square planar",        angles: ["90"] },
];

const SHAPE_OPTIONS = [
  "เส้นตรง", "สามเหลี่ยมแบนราบ", "มุมงอ", "ทรงสี่หน้า",
  "พีระมิดฐานสามเหลี่ยม", "พีระมิดคู่ฐานสามเหลี่ยม", "ทรงกระดานหก",
  "รูปตัวที", "ทรงแปดหน้า", "พีระมิดฐานสี่เหลี่ยม", "สี่เหลี่ยมแบนราบ",
];

const ANGLE_OPTIONS = ["180", "120", "< 120", "109.5", "< 109.5", "<< 109.5", "90", "< 90"];

/* ---------- ฐานข้อมูลแรงยึดเหนี่ยวระหว่างโมเลกุล (Mode 3) ----------
   จัดสมดุลสารอินทรีย์ / อนินทรีย์ สำหรับติวสอบในห้องเรียน
   - แรงลอนดอน     : โมเลกุลไม่มีขั้ว
   - แรงระหว่างขั้ว : โมเลกุลมีขั้ว ที่ไม่มี H ต่อกับ F/O/N โดยตรง
   - พันธะไฮโดรเจน  : มีพันธะ H–F, H–O หรือ H–N
   -------------------------------------------------------------------- */
const IMF = [
  /* ===== แรงลอนดอน — อินทรีย์ ===== */
  { formula: "CH4",       name: "มีเทน",             type: "ไฮโดรคาร์บอน (แอลเคน)",        imf: "แรงลอนดอน" },
  { formula: "C2H6",      name: "อีเทน",             type: "ไฮโดรคาร์บอน (แอลเคน)",        imf: "แรงลอนดอน" },
  { formula: "C3H8",      name: "โพรเพน",            type: "ไฮโดรคาร์บอน (แอลเคน)",        imf: "แรงลอนดอน" },
  { formula: "C4H10",     name: "บิวเทน",            type: "ไฮโดรคาร์บอน (แอลเคน)",        imf: "แรงลอนดอน" },
  { formula: "C8H18",     name: "ออกเทน",            type: "ไฮโดรคาร์บอน (แอลเคน)",        imf: "แรงลอนดอน" },
  { formula: "C2H4",      name: "อีทีน (เอทิลีน)",   type: "ไฮโดรคาร์บอน (แอลคีน)",        imf: "แรงลอนดอน" },
  { formula: "C2H2",      name: "อีไทน์ (อะเซทิลีน)", type: "ไฮโดรคาร์บอน (แอลไคน์)",      imf: "แรงลอนดอน" },
  { formula: "C6H6",      name: "เบนซีน",            type: "ไฮโดรคาร์บอน (อะโรมาติก)",     imf: "แรงลอนดอน" },
  { formula: "CCl4",      name: "เตตระคลอโรมีเทน",   type: "เฮโลแอลเคน (สมมาตร ไม่มีขั้ว)", imf: "แรงลอนดอน" },
  /* ===== แรงลอนดอน — อนินทรีย์ / ธาตุ ===== */
  { formula: "CO2",       name: "คาร์บอนไดออกไซด์",  type: "อนินทรีย์ (เส้นตรง ไม่มีขั้ว)", imf: "แรงลอนดอน" },
  { formula: "CS2",       name: "คาร์บอนไดซัลไฟด์",  type: "อนินทรีย์ (เส้นตรง ไม่มีขั้ว)", imf: "แรงลอนดอน" },
  { formula: "N2",        name: "ไนโตรเจน",          type: "ธาตุโมเลกุล (ไม่มีขั้ว)",       imf: "แรงลอนดอน" },
  { formula: "O2",        name: "ออกซิเจน",          type: "ธาตุโมเลกุล (ไม่มีขั้ว)",       imf: "แรงลอนดอน" },
  { formula: "Cl2",       name: "คลอรีน",            type: "ธาตุโมเลกุล (ไม่มีขั้ว)",       imf: "แรงลอนดอน" },
  { formula: "Br2",       name: "โบรมีน",            type: "ธาตุโมเลกุล (ไม่มีขั้ว)",       imf: "แรงลอนดอน" },
  { formula: "I2",        name: "ไอโอดีน",           type: "ธาตุโมเลกุล (ไม่มีขั้ว)",       imf: "แรงลอนดอน" },
  { formula: "BF3",       name: "โบรอนไตรฟลูออไรด์", type: "อนินทรีย์ (สมมาตร ไม่มีขั้ว)",  imf: "แรงลอนดอน" },
  { formula: "SF6",       name: "ซัลเฟอร์เฮกซะฟลูออไรด์", type: "อนินทรีย์ (สมมาตร ไม่มีขั้ว)", imf: "แรงลอนดอน" },

  /* ===== แรงระหว่างขั้ว — อินทรีย์ ===== */
  { formula: "HCHO",      name: "เมทานาล",           type: "แอลดีไฮด์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "CH3CHO",    name: "เอทานาล",           type: "แอลดีไฮด์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "C2H5CHO",   name: "โพรพานาล",          type: "แอลดีไฮด์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "CH3COCH3",  name: "โพรพาโนน (แอซีโตน)", type: "คีโตน (มีขั้ว)",              imf: "แรงระหว่างขั้ว" },
  { formula: "CH3OCH3",   name: "เมทอกซีมีเทน",      type: "อีเทอร์ (มีขั้ว ไม่มี O–H)",   imf: "แรงระหว่างขั้ว" },
  { formula: "CH3Cl",     name: "คลอโรมีเทน",        type: "เฮโลแอลเคน (มีขั้ว)",          imf: "แรงระหว่างขั้ว" },
  { formula: "CH2Cl2",    name: "ไดคลอโรมีเทน",      type: "เฮโลแอลเคน (มีขั้ว)",          imf: "แรงระหว่างขั้ว" },
  { formula: "CHCl3",     name: "ไตรคลอโรมีเทน",     type: "เฮโลแอลเคน (มีขั้ว)",          imf: "แรงระหว่างขั้ว" },
  { formula: "CH3Br",     name: "โบรโมมีเทน",        type: "เฮโลแอลเคน (มีขั้ว)",          imf: "แรงระหว่างขั้ว" },
  { formula: "CH3CN",     name: "เอทานไนไตรล์",      type: "ไนไตรล์ (มีขั้ว)",             imf: "แรงระหว่างขั้ว" },
  /* ===== แรงระหว่างขั้ว — อนินทรีย์ ===== */
  { formula: "HCl",       name: "ไฮโดรเจนคลอไรด์",   type: "อนินทรีย์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "HBr",       name: "ไฮโดรเจนโบรไมด์",   type: "อนินทรีย์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "HI",        name: "ไฮโดรเจนไอโอไดด์",  type: "อนินทรีย์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "H2S",       name: "ไฮโดรเจนซัลไฟด์",   type: "อนินทรีย์ (มีขั้ว, S–H ไม่ใช่พันธะ H)", imf: "แรงระหว่างขั้ว" },
  { formula: "H2Se",      name: "ไฮโดรเจนเซเลไนด์",  type: "อนินทรีย์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },
  { formula: "SO2",       name: "ซัลเฟอร์ไดออกไซด์", type: "อนินทรีย์ (มุมงอ มีขั้ว)",     imf: "แรงระหว่างขั้ว" },
  { formula: "PH3",       name: "ฟอสฟีน",            type: "อนินทรีย์ (มีขั้ว, P–H ไม่ใช่พันธะ H)", imf: "แรงระหว่างขั้ว" },
  { formula: "PCl3",      name: "ฟอสฟอรัสไตรคลอไรด์", type: "อนินทรีย์ (มีขั้ว)",          imf: "แรงระหว่างขั้ว" },
  { formula: "NO",        name: "ไนตริกออกไซด์",     type: "อนินทรีย์ (มีขั้ว)",           imf: "แรงระหว่างขั้ว" },

  /* ===== พันธะไฮโดรเจน — อินทรีย์ ===== */
  { formula: "CH3OH",     name: "เมทานอล",           type: "แอลกอฮอล์ (มี H–O)",           imf: "พันธะไฮโดรเจน" },
  { formula: "C2H5OH",    name: "เอทานอล",           type: "แอลกอฮอล์ (มี H–O)",           imf: "พันธะไฮโดรเจน" },
  { formula: "C3H7OH",    name: "โพรพาน-1-ออล",      type: "แอลกอฮอล์ (มี H–O)",           imf: "พันธะไฮโดรเจน" },
  { formula: "C4H9OH",    name: "บิวทานอล",          type: "แอลกอฮอล์ (มี H–O)",           imf: "พันธะไฮโดรเจน" },
  { formula: "HOCH2CH2OH", name: "เอเทน-1,2-ไดออล",  type: "แอลกอฮอล์ไดออล (มี H–O)",      imf: "พันธะไฮโดรเจน" },
  { formula: "HCOOH",     name: "กรดเมทาโนอิก",      type: "กรดคาร์บอกซิลิก (มี H–O)",     imf: "พันธะไฮโดรเจน" },
  { formula: "CH3COOH",   name: "กรดเอทาโนอิก",      type: "กรดคาร์บอกซิลิก (มี H–O)",     imf: "พันธะไฮโดรเจน" },
  { formula: "C2H5COOH",  name: "กรดโพรพาโนอิก",     type: "กรดคาร์บอกซิลิก (มี H–O)",     imf: "พันธะไฮโดรเจน" },
  { formula: "C6H5OH",    name: "ฟีนอล",             type: "ฟีนอล (มี H–O)",               imf: "พันธะไฮโดรเจน" },
  { formula: "CH3NH2",    name: "เมทานามีน",         type: "เอมีน (มี H–N)",               imf: "พันธะไฮโดรเจน" },
  { formula: "C2H5NH2",   name: "เอทานามีน",         type: "เอมีน (มี H–N)",               imf: "พันธะไฮโดรเจน" },
  { formula: "CH3CONH2",  name: "เอทานาไมด์",        type: "เอไมด์ (มี H–N)",              imf: "พันธะไฮโดรเจน" },
  /* ===== พันธะไฮโดรเจน — อนินทรีย์ ===== */
  { formula: "H2O",       name: "น้ำ",               type: "อนินทรีย์ (มี H–O)",           imf: "พันธะไฮโดรเจน" },
  { formula: "NH3",       name: "แอมโมเนีย",         type: "อนินทรีย์ (มี H–N)",           imf: "พันธะไฮโดรเจน" },
  { formula: "HF",        name: "ไฮโดรเจนฟลูออไรด์", type: "อนินทรีย์ (มี H–F)",           imf: "พันธะไฮโดรเจน" },
  { formula: "N2H4",      name: "ไฮดราซีน",          type: "อนินทรีย์ (มี H–N)",           imf: "พันธะไฮโดรเจน" },
  { formula: "H2O2",      name: "ไฮโดรเจนเปอร์ออกไซด์", type: "อนินทรีย์ (มี H–O)",        imf: "พันธะไฮโดรเจน" },
];

const IMF_OPTIONS = ["แรงลอนดอน", "แรงระหว่างขั้ว", "พันธะไฮโดรเจน"];

/* ---------- สถานะเกม ---------- */
const state = {
  mode: null,          // "axe" | "compound" | "imf"
  dataset: VSEPR,      // ฐานข้อมูลของโหมดปัจจุบัน (VSEPR หรือ IMF)
  bag: [],             // ดัชนีที่ยังไม่ถูกสุ่มในรอบนี้
  current: null,       // entry ปัจจุบัน
  currentCompound: "", // สูตรที่โชว์ (โหมด 2)
  pickShape: null,
  pickAngle: null,
  pickImf: null,
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
const imfGrid = $("imfGrid");
const shapeBlock = $("shapeBlock");
const angleBlock = $("angleBlock");
const imfBlock = $("imfBlock");
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
  state.bag = shuffle(state.dataset.map((_, i) => i));
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
const MODE_LABEL = {
  axe: "MODE 1 · สุ่มสัญลักษณ์ VSEPR",
  compound: "MODE 2 · สุ่มสูตรสารประกอบ",
  imf: "MODE 3 · สุ่มแรงยึดเหนี่ยวระหว่างโมเลกุล",
};

function startMode(mode) {
  state.mode = mode;
  state.dataset = mode === "imf" ? IMF : VSEPR;
  state.score = 0;
  state.streak = 0;
  refillBag();
  $("score").textContent = "0";
  $("streak").textContent = "0";
  updateBagPill();
  $("modeLabel").textContent = MODE_LABEL[mode];

  // สลับชุดคำถามให้ตรงกับโหมด
  const isImf = mode === "imf";
  shapeBlock.classList.toggle("is-hidden", isImf);
  angleBlock.classList.toggle("is-hidden", isImf);
  imfBlock.classList.toggle("is-hidden", !isImf);

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
  state.current = state.dataset[idx];

  // ค่าที่จะโชว์บนวงล้อ + แหล่งข้อความ "หลอกตา" ระหว่างหมุน
  let target, pool;
  if (state.mode === "axe") {
    target = state.current.axe;
    pool = VSEPR.map((v) => v.axe);
  } else if (state.mode === "compound") {
    const list = state.current.compounds;
    state.currentCompound = list[Math.floor(Math.random() * list.length)];
    target = state.currentCompound;
    pool = VSEPR.flatMap((v) => v.compounds);
  } else {
    target = state.current.formula;
    pool = IMF.map((v) => v.formula);
  }

  reel.classList.add("is-spinning");
  const totalMs = 1500;
  const start = performance.now();

  function frame(now) {
    const t = (now - start) / totalMs;
    if (t >= 1) {
      // หยุด
      reel.classList.remove("is-spinning");
      renderReel(target);
      sndStop();
      state.spinning = false;
      openAnswerPanel();
      return;
    }
    // ยิ่งใกล้จบยิ่งช้า (ease-out) → เว้นช่วงเปลี่ยนข้อความนานขึ้น
    const gap = 40 + t * t * 260;
    if (!frame.last || now - frame.last > gap) {
      frame.last = now;
      renderReel(pool[Math.floor(Math.random() * pool.length)]);
      sndTick();
    }
    requestAnimationFrame(frame);
  }
  frame.last = 0;
  requestAnimationFrame(frame);
}

// แสดงข้อความบนวงล้อ + ย่อฟอนต์อัตโนมัติเมื่อสูตรยาว
function renderReel(raw) {
  const n = String(raw).length;
  const size = n >= 12 ? "20px" : n >= 9 ? "26px" : n >= 6 ? "32px" : "";
  reel.innerHTML =
    `<span${size ? ` style="font-size:${size}"` : ""}>${formatFormula(raw)}</span>`;
}

// เปลี่ยนตัวเลขในสูตร/สัญลักษณ์ให้เป็นตัวห้อย (ประจุแบบ ⁻ ²⁻ ผ่านได้เลย)
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
  state.pickImf = null;
  submitBtn.disabled = true;
  submitBtn.textContent = "ยืนยันคำตอบ";
  feedback.classList.add("is-hidden");
  nextBtn.classList.add("is-hidden");

  if (state.mode === "imf") {
    buildGrid(imfGrid, IMF_OPTIONS, "imf");
  } else {
    buildGrid(shapeGrid, SHAPE_OPTIONS, "shape");
    buildGrid(angleGrid, ANGLE_OPTIONS, "angle");
  }

  answerPanel.classList.remove("is-hidden");
  answerPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function canSubmit() {
  return state.mode === "imf"
    ? !!state.pickImf
    : !!(state.pickShape && state.pickAngle);
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
      else if (kind === "angle") state.pickAngle = opt;
      else state.pickImf = opt;
      submitBtn.disabled = !canSubmit();
    });
    container.appendChild(b);
  });
}

/* =====================================================================
   ตรวจคำตอบ
   ===================================================================== */
function submitAnswer() {
  if (state.answered || !canSubmit()) return;
  state.answered = true;
  submitBtn.disabled = true;

  const cur = state.current;
  let allOK, answerLine, wrongParts = [];

  if (state.mode === "imf") {
    allOK = state.pickImf === cur.imf;
    lockAndMark(imfGrid, cur.imf, state.pickImf);
    if (!allOK) wrongParts.push("แรงยึดเหนี่ยว");
    answerLine =
      `เฉลย : <code>${formatFormula(cur.formula)}</code> (${cur.name}) — ${cur.type} ` +
      `→ แรงยึดเหนี่ยวหลัก <b>${cur.imf}</b>`;
  } else {
    const shapeOK = state.pickShape === cur.shape;
    const angleOK = cur.angles.includes(state.pickAngle);
    allOK = shapeOK && angleOK;
    lockAndMark(shapeGrid, cur.shape, state.pickShape);
    lockAndMark(angleGrid, cur.angles, state.pickAngle);
    if (!shapeOK) wrongParts.push("ชื่อรูปร่าง");
    if (!angleOK) wrongParts.push("มุมพันธะ");
    const prompt =
      state.mode === "axe"
        ? `สัญลักษณ์ <code>${formatFormula(cur.axe)}</code>`
        : `สาร <code>${formatFormula(state.currentCompound)}</code> (${formatFormula(cur.axe)})`;
    answerLine =
      `เฉลย : ${prompt} → รูปร่าง <b>${cur.shape}</b> ` +
      `(${cur.shapeEn}) · มุมพันธะ <b>${cur.angles.join(" , ")}</b>°`;
  }

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
