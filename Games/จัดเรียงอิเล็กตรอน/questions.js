// ===================================================
//  ELECTRON CONFIGURATION GAME — questions.js  v3
//  Neil Bohr Model  |  bug-fixed edition
// ===================================================

// ── Helpers ─────────────────────────────────────────

function configToDisplay(arr) { return arr.join(' '); }

// "Na(+1)" → "Na<sup>+</sup>"   "Fe(+3)" → "Fe<sup>3+</sup>"
// "O(-2)"  → "O<sup>2−</sup>"   "H(+1)"  → "H<sup>+</sup>"
function ionLabelToHTML(label) {
  return label.replace(/\(([+-])(\d+)\)/, (_, sign, n) => {
    const num = n === '1' ? '' : n;
    const sym = sign === '+' ? '+' : '−';
    return `<sup>${num}${sym}</sup>`;
  });
}

// "Na(+1)" → "Na+"   "O(-2)" → "O2-"
function ionLabelToText(label) {
  return label.replace(/\(([+-])(\d+)\)/, (_, sign, n) => {
    const num = n === '1' ? '' : n;
    const sym = sign === '+' ? '+' : '-';
    return `${num}${sym}`;
  });
}

// ── Data ─────────────────────────────────────────────

const EASY_DATA = [
  { symbol:'H',   name:'ไฮโดรเจน',   z:1,  config:[1] },
  { symbol:'He',  name:'ฮีเลียม',     z:2,  config:[2] },
  { symbol:'Li',  name:'ลิเทียม',     z:3,  config:[2,1] },
  { symbol:'Be',  name:'เบริลเลียม',  z:4,  config:[2,2] },
  { symbol:'B',   name:'โบรอน',       z:5,  config:[2,3] },
  { symbol:'C',   name:'คาร์บอน',     z:6,  config:[2,4] },
  { symbol:'N',   name:'ไนโตรเจน',    z:7,  config:[2,5] },
  { symbol:'O',   name:'ออกซิเจน',    z:8,  config:[2,6] },
  { symbol:'F',   name:'ฟลูออรีน',    z:9,  config:[2,7] },
  { symbol:'Ne',  name:'นีออน',       z:10, config:[2,8] },
  { symbol:'Na',  name:'โซเดียม',     z:11, config:[2,8,1] },
  { symbol:'Mg',  name:'แมกนีเซียม',  z:12, config:[2,8,2] },
  { symbol:'Al',  name:'อะลูมิเนียม', z:13, config:[2,8,3] },
  { symbol:'Si',  name:'ซิลิคอน',     z:14, config:[2,8,4] },
  { symbol:'P',   name:'ฟอสฟอรัส',    z:15, config:[2,8,5] },
  { symbol:'S',   name:'กำมะถัน',     z:16, config:[2,8,6] },
  { symbol:'Cl',  name:'คลอรีน',      z:17, config:[2,8,7] },
  { symbol:'Ar',  name:'อาร์กอน',     z:18, config:[2,8,8] },
  { symbol:'K',   name:'โพแทสเซียม',  z:19, config:[2,8,8,1] },
  { symbol:'Ca',  name:'แคลเซียม',    z:20, config:[2,8,8,2] },
  { symbol:'Ga',  name:'แกลเลียม',    z:31, config:[2,8,18,3] },
  { symbol:'Ge',  name:'เจอร์เมเนียม',z:32, config:[2,8,18,4] },
  { symbol:'As',  name:'อาร์เซนิก',   z:33, config:[2,8,18,5] },
  { symbol:'Se',  name:'ซีลีเนียม',   z:34, config:[2,8,18,6] },
  { symbol:'Br',  name:'โบรมีน',      z:35, config:[2,8,18,7] },
  { symbol:'Kr',  name:'คริปทอน',     z:36, config:[2,8,18,8] },
];

// BUG FIX #3: H(+1) config [] → [0] so slot count = 1  (0 electrons = bare proton)
// แสดงเป็น "0" ในช่องคำตอบ — ถูกต้องตามโมเดลนีลบอร์
const EASY_IONS = [
  { ionLabel:'H(+1)',  base:'H',  charge:+1, config:[0] },
  { ionLabel:'Li(+1)', base:'Li', charge:+1, config:[2] },
  { ionLabel:'Be(+2)', base:'Be', charge:+2, config:[2] },
  { ionLabel:'N(-3)',  base:'N',  charge:-3, config:[2,8] },
  { ionLabel:'O(-2)',  base:'O',  charge:-2, config:[2,8] },
  { ionLabel:'F(-1)',  base:'F',  charge:-1, config:[2,8] },
  { ionLabel:'Na(+1)', base:'Na', charge:+1, config:[2,8] },
  { ionLabel:'Mg(+2)', base:'Mg', charge:+2, config:[2,8] },
  { ionLabel:'Al(+3)', base:'Al', charge:+3, config:[2,8] },
  { ionLabel:'P(-3)',  base:'P',  charge:-3, config:[2,8,8] },
  { ionLabel:'S(-2)',  base:'S',  charge:-2, config:[2,8,8] },
  { ionLabel:'Cl(-1)', base:'Cl', charge:-1, config:[2,8,8] },
  { ionLabel:'K(+1)',  base:'K',  charge:+1, config:[2,8,8] },
  { ionLabel:'Ca(+2)', base:'Ca', charge:+2, config:[2,8,8] },
];

const TRANSITION_DATA = [
  { symbol:'Sc', name:'สแกนเดียม', z:21, config:[2,8,9,2] },
  { symbol:'Ti', name:'ไทเทเนียม', z:22, config:[2,8,10,2] },
  { symbol:'V',  name:'วาเนเดียม', z:23, config:[2,8,11,2] },
  { symbol:'Cr', name:'โครเมียม',  z:24, config:[2,8,13,1] },
  { symbol:'Mn', name:'แมงกานีส',  z:25, config:[2,8,13,2] },
  { symbol:'Fe', name:'เหล็ก',     z:26, config:[2,8,14,2] },
  { symbol:'Co', name:'โคบอลต์',   z:27, config:[2,8,15,2] },
  { symbol:'Ni', name:'นิกเกิล',   z:28, config:[2,8,16,2] },
  { symbol:'Cu', name:'ทองแดง',    z:29, config:[2,8,18,1] },
  { symbol:'Zn', name:'สังกะสี',   z:30, config:[2,8,18,2] },
];

const TRANSITION_IONS = [
  { ionLabel:'Sc(+3)', base:'Sc', charge:+3, config:[2,8,8] },
  { ionLabel:'Ti(+2)', base:'Ti', charge:+2, config:[2,8,10] },
  { ionLabel:'Ti(+3)', base:'Ti', charge:+3, config:[2,8,9] },
  { ionLabel:'Ti(+4)', base:'Ti', charge:+4, config:[2,8,8] },
  { ionLabel:'V(+2)',  base:'V',  charge:+2, config:[2,8,11] },
  { ionLabel:'V(+3)',  base:'V',  charge:+3, config:[2,8,10] },
  { ionLabel:'Cr(+2)', base:'Cr', charge:+2, config:[2,8,12] },
  { ionLabel:'Cr(+3)', base:'Cr', charge:+3, config:[2,8,11] },
  { ionLabel:'Mn(+2)', base:'Mn', charge:+2, config:[2,8,13] },
  { ionLabel:'Mn(+3)', base:'Mn', charge:+3, config:[2,8,12] },
  { ionLabel:'Mn(+4)', base:'Mn', charge:+4, config:[2,8,11] },
  { ionLabel:'Fe(+2)', base:'Fe', charge:+2, config:[2,8,14] },
  { ionLabel:'Fe(+3)', base:'Fe', charge:+3, config:[2,8,13] },
  { ionLabel:'Co(+2)', base:'Co', charge:+2, config:[2,8,15] },
  { ionLabel:'Co(+3)', base:'Co', charge:+3, config:[2,8,14] },
  { ionLabel:'Ni(+2)', base:'Ni', charge:+2, config:[2,8,16] },
  { ionLabel:'Cu(+1)', base:'Cu', charge:+1, config:[2,8,18] },
  { ionLabel:'Cu(+2)', base:'Cu', charge:+2, config:[2,8,17] },
  { ionLabel:'Zn(+2)', base:'Zn', charge:+2, config:[2,8,18] },
];

// ── Shuffle (Fisher-Yates) ───────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Question Queue (no-repeat) ───────────────────────

let _queue = [];

function resetQueue(difficulty) {
  _queue = buildQueue(difficulty);
}

function buildQueue(difficulty) {
  const pool = buildPool(difficulty);
  const pairs = [];
  for (const item of pool) {
    pairs.push({ item, qType: 'A' });
    pairs.push({ item, qType: 'B' });
  }
  return shuffle(pairs);
}

function buildPool(difficulty) {
  const allAtoms = difficulty === 'easy'
    ? EASY_DATA
    : [...EASY_DATA, ...TRANSITION_DATA];

  const allIons = difficulty === 'easy'
    ? EASY_IONS
    : [...EASY_IONS, ...TRANSITION_IONS];

  const allData = [...EASY_DATA, ...TRANSITION_DATA];
  const items = [];

  for (const a of allAtoms) {
    items.push({
      key:       a.symbol,
      label:     a.symbol,
      labelHTML: `<span class="q-element">${a.symbol}</span>`,
      config:    a.config,
      z:         a.z,
      charge:    0,
      isIon:     false,
      fullName:  a.name,
    });
  }

  for (const ion of allIons) {
    const zVal = allData.find(a => a.symbol === ion.base)?.z || 0;
    items.push({
      key:       ion.ionLabel,
      label:     ion.ionLabel,
      labelHTML: ionLabelToHTML(ion.ionLabel),
      config:    ion.config,
      z:         zVal,
      charge:    ion.charge,
      isIon:     true,
      fullName:  ionLabelToText(ion.ionLabel),
    });
  }

  return items;
}

// ── Generate one question ────────────────────────────

function generateQuestion(difficulty) {
  if (_queue.length === 0) _queue = buildQueue(difficulty);
  const { item, qType } = _queue.shift();

  if (qType === 'A') {
    // TYPE A: given element/ion → type electron config numbers
    return {
      type:      'A',
      prompt:    item.label,
      promptHTML: item.labelHTML,
      answer:    item.config.join(' '),
      answerArr: item.config,          // array of numbers per shell
      hint:      `Z = ${item.z}${item.charge !== 0 ? ' | ประจุ ' + (item.charge > 0 ? '+' + item.charge : item.charge) : ''}`,
      isIon:     item.isIon,
      fullName:  item.fullName,
    };
  } else {
    // TYPE B: given config + charge-hint-on-X → type element symbol only
    // BUG FIX #4: xLabelHTML always carries the charge so the question is unambiguous
    // neutral  → X  (no superscript)
    // positive → X<sup>n+</sup>
    // negative → X<sup>n−</sup>
    let xLabelHTML;
    if (item.charge === 0) {
      xLabelHTML = 'X';
    } else if (item.charge > 0) {
      const n = item.charge === 1 ? '' : item.charge;
      xLabelHTML = `X<sup class="ion-sup">${n}+</sup>`;
    } else {
      const n = Math.abs(item.charge) === 1 ? '' : Math.abs(item.charge);
      xLabelHTML = `X<sup class="ion-sup">${n}−</sup>`;
    }

    return {
      type:       'B',
      prompt:     item.config.join(' '),   // numbers shown in question
      xLabelHTML: xLabelHTML,             // "X" or "X<sup>+</sup>" etc.
      answer:     item.label,             // e.g. "Na(+1)" or "Ne"
      answerBase: item.label.replace(/\(.*\)/, '').trim(), // e.g. "Na" or "Ne"
      answerArr:  null,
      hint:       `อิเล็กตรอนรวม ${item.config.reduce((a, b) => a + b, 0)} ตัว | Z = ${item.z}`,
      isIon:      item.isIon,
      fullName:   item.fullName,
    };
  }
}

// ── Validate ─────────────────────────────────────────

function validateAnswer(userInput, question) {
  const raw = userInput.trim();

  if (question.type === 'A') {
    // Accept space-separated or comma-separated numbers
    const normalised = raw.replace(/[,،\s]+/g, ' ').trim();
    return normalised === question.answerArr.join(' ');
  } else {
    // TYPE B: student types element symbol only (e.g. "Na"), case-insensitive
    // Compare against answerBase which strips the charge part
    const userClean = raw.replace(/\s+/g, '').toLowerCase();
    const expected  = question.answerBase.toLowerCase();
    return userClean === expected;
  }
}

// ── Export ───────────────────────────────────────────

window.GAME_QUESTIONS = {
  generateQuestion,
  validateAnswer,
  resetQueue,
  configToDisplay,
  ionLabelToHTML,
};