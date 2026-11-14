// ===== Isomer Builder v2 =====
// โจทย์ = สูตรโมเลกุล (เช่น C3H6) ผู้เล่นต้องต่อโครงสร้างที่เป็นไปได้ "ทุกแบบ" (ไอโซเมอร์)
// รองรับการแตกกิ่ง (branching) จริง: บล็อกแต่ละอะตอมจะเปลี่ยนรูป/สีอัตโนมัติตามจำนวน H (CH3/CH2/CH/C)
// ใช้ canonical graph signature ในการตรวจสอบว่าโครงสร้างซ้ำ/ตรงกับคำตอบจริงหรือไม่ (ไม่ใช่แค่ชื่อ)
// ชื่อที่แสดงเป็นชื่อแบบย่อ (simplified, ไม่ใช่ IUPAC เต็มรูปแบบ 100% สำหรับกรณีแตกกิ่งซับซ้อน)

class CapExceeded extends Error {}

const BADGES = {
  OH:    { subs: [{ atom:'O', order:1, extraH:1 }], degree: null, label: '-OH' },
  NH2:   { subs: [{ atom:'N', order:1, extraH:2 }], degree: null, label: '-NH₂' },
  CHO:   { subs: [{ atom:'O', order:2, extraH:0 }], degree: 1, label: '-CHO' },
  CO:    { subs: [{ atom:'O', order:2, extraH:0 }], degree: 2, label: 'C=O' },
  COOH:  { subs: [{ atom:'O', order:2, extraH:0 }, { atom:'O', order:1, extraH:1 }], degree: 1, label: '-COOH' },
  CONH2: { subs: [{ atom:'O', order:2, extraH:0 }, { atom:'N', order:1, extraH:2 }], degree: 1, label: '-CONH₂' },
};
const BADGE_COLOR = { OH:'#ff5c8a', NH2:'#5c8aff', CHO:'#ff9d5c', CO:'#b45cff', COOH:'#ff5c5c', CONH2:'#5cc9c2' };
const TARGET_GROUP_LABELS = {
  OH: 'แอลกอฮอล์ (-OH)', NH2: 'เอมีน (-NH₂)', CHO: 'แอลดีไฮด์ (-CHO)',
  CO: 'คีโตน (C=O ในโซ่)', COOH: 'กรดคาร์บอกซิลิก (-COOH)', CONH2: 'เอไมด์ (-CONH₂)',
  ETHER: 'อีเทอร์ (-O- ในโซ่)', ESTER: 'เอสเทอร์ (-COO- ในโซ่)',
};
const ROOTS = ['', 'meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];
const SPACING_X = 64, SPACING_Y = 76, PAD = 30;
const SPACING_X_MINI = 30, SPACING_Y_MINI = 34, PAD_MINI = 14;

// ---------- state ----------
const state = {
  level: 1, score: 0, target: null,
  nodes: [], edges: [], selectedId: null,
  armedBadge: null, armedRingBond: false, ringBondFirst: null,
  locked: false, submissions: [],
};

// ---------- dom refs ----------
const el = (id) => document.getElementById(id);
const buildArea = el('buildArea');
const targetInfo = el('targetInfo');
const levelNum = el('levelNum');
const scoreNum = el('scoreNum');
const addCBtn = el('addCBtn');
const ringBondBtn = el('ringBondBtn');
const undoBtn = el('undoBtn');
const resetBtn = el('resetBtn');
const doneStructBtn = el('doneStructBtn');
const submitBtn = el('submitBtn');
const submissionsTray = el('submissionsTray');
const resultPanel = el('resultPanel');
const resultHeadline = el('resultHeadline');
const resultList = el('resultList');
const missingList = el('missingList');
const nextBtn = el('nextBtn');
const winOverlay = el('winOverlay');
const finalScore = el('finalScore');
const playAgainBtn = el('playAgainBtn');
const toastEl = el('toast');

// ---------- sound (synth, no external files) ----------
let actx = null;
function ensureAudio() {
  if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  if (actx.state === 'suspended') actx.resume();
  return actx;
}
function beep(freq, dur, type = 'sine', vol = 0.2, delay = 0) {
  try {
    const ctx = ensureAudio();
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  } catch (e) { /* audio unavailable, ignore */ }
}
const playConnect = () => beep(520, 0.08, 'triangle', 0.18);
const playDisconnect = () => beep(260, 0.1, 'triangle', 0.15);
const playCorrect = () => [660, 880, 1100].forEach((f, i) => beep(f, 0.16, 'sine', 0.22, i * 0.09));
const playWrong = () => { beep(160, 0.25, 'sawtooth', 0.18); beep(120, 0.3, 'sawtooth', 0.15, 0.06); };

// ---------- toast ----------
let toastTimer = null;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2400);
}

function deepClone(x) { return JSON.parse(JSON.stringify(x)); }

// ================= graph / valence helpers =================
function nodeUsedValence(mol, id) {
  let used = 0;
  mol.edges.forEach((e) => {
    if (e.a === id || e.b === id) {
      used += e.order;
      if (e.linker === 'ESTER' && e.a === id) used += 2;
    }
  });
  const node = mol.nodes[id];
  if (node.badge) node.badge.subs.forEach((s) => { used += s.order; });
  return used;
}
function validateMolecule(mol) {
  for (let i = 0; i < mol.nodes.length; i++) if (nodeUsedValence(mol, i) > 4) return false;
  return true;
}
function degreeOfLive(id) { return state.edges.filter((e) => e.a === id || e.b === id).length; }
function adjList(mol) {
  const adj = mol.nodes.map(() => []);
  mol.edges.forEach((e, idx) => {
    adj[e.a].push({ to: e.b, edge: e, idx });
    adj[e.b].push({ to: e.a, edge: e, idx });
  });
  return adj;
}

// ================= canonical signature (isomorphism-safe) =================
function nodeToken(mol, id) { const n = mol.nodes[id]; return n.badge ? n.badge.type : 'C'; }
function edgeToken(e, fromId) {
  // ESTER is directional (carbonyl always lives on e.a) - encode which side we're viewed FROM
  // so two esters that differ only by which carbon bears the C=O never collide in the signature.
  if (e.linker === 'ESTER') return (fromId === e.a ? 'ESTERC' : 'ESTERO') + e.order;
  return (e.linker || '') + e.order;
}

function canonRooted(mol, root, parent, adj, blocked) {
  const kids = [];
  for (const nb of adj[root]) {
    if (blocked && blocked.has(nb.idx)) continue;
    if (nb.to === parent) continue;
    kids.push(edgeToken(nb.edge, root) + '{' + canonRooted(mol, nb.to, root, adj, blocked) + '}');
  }
  kids.sort();
  return nodeToken(mol, root) + '[' + kids.join(',') + ']';
}
function canonicalTreeSig(mol) {
  const adj = adjList(mol);
  let best = null;
  for (let r = 0; r < mol.nodes.length; r++) {
    const s = canonRooted(mol, r, null, adj, null);
    if (best === null || s < best) best = s;
  }
  return best;
}
function findCycle(mol) {
  const adj = adjList(mol);
  const degree = mol.nodes.map((_, i) => adj[i].length);
  const removed = new Array(mol.nodes.length).fill(false);
  const queue = [];
  degree.forEach((d, i) => { if (d === 1) queue.push(i); });
  while (queue.length) {
    const u = queue.pop();
    if (removed[u] || degree[u] > 1) continue;
    removed[u] = true;
    for (const nb of adj[u]) {
      if (removed[nb.to]) continue;
      degree[nb.to]--;
      if (degree[nb.to] === 1) queue.push(nb.to);
    }
  }
  const cycleNodes = mol.nodes.map((_, i) => i).filter((i) => !removed[i]);
  const cycleNodeSet = new Set(cycleNodes);
  const cycleEdgeIdx = [];
  mol.edges.forEach((e, idx) => { if (cycleNodeSet.has(e.a) && cycleNodeSet.has(e.b)) cycleEdgeIdx.push(idx); });
  const cAdj = {}; cycleNodes.forEach((n) => { cAdj[n] = []; });
  cycleEdgeIdx.forEach((idx) => { const e = mol.edges[idx]; cAdj[e.a].push({ to: e.b, idx }); cAdj[e.b].push({ to: e.a, idx }); });
  const order = [cycleNodes[0]]; const usedEdge = new Set(); let cur = cycleNodes[0];
  while (order.length < cycleNodes.length) {
    const opt = cAdj[cur].find((o) => !usedEdge.has(o.idx));
    usedEdge.add(opt.idx); order.push(opt.to); cur = opt.to;
  }
  return { cycleNodes, cycleEdgeIdxSet: new Set(cycleEdgeIdx), order };
}
function canonicalRingSig(mol) {
  const { cycleEdgeIdxSet, order } = findCycle(mol);
  const adj = adjList(mol);
  const k = order.length;
  const pendantCache = {};
  const pendant = (id) => { if (pendantCache[id] === undefined) pendantCache[id] = canonRooted(mol, id, null, adj, cycleEdgeIdxSet); return pendantCache[id]; };
  const edgeBetween = (u, v) => {
    for (const idx of cycleEdgeIdxSet) { const e = mol.edges[idx]; if ((e.a === u && e.b === v) || (e.a === v && e.b === u)) return e; }
    return null;
  };
  const buildStrings = (seq) => {
    const strs = [];
    for (let start = 0; start < k; start++) {
      let s = '';
      for (let i = 0; i < k; i++) {
        const cur = seq[(start + i) % k], nxt = seq[(start + i + 1) % k];
        s += pendant(cur) + '-' + edgeToken(edgeBetween(cur, nxt), cur) + '|';
      }
      strs.push(s);
    }
    return strs;
  };
  const all = buildStrings(order).concat(buildStrings(order.slice().reverse()));
  let best = null;
  all.forEach((s) => { if (best === null || s < best) best = s; });
  return 'k' + k + ':' + best;
}
function bondEligibleForGeometryOnMol(mol, edgeIdx) {
  const e = mol.edges[edgeIdx];
  if (e.order !== 2 || e.linker) return false;
  const adj = adjList(mol);
  const otherBranches = (nodeId) => adj[nodeId].filter((nb) => nb.idx !== edgeIdx)
    .map((nb) => edgeToken(nb.edge, nodeId) + '{' + canonRooted(mol, nb.to, nodeId, adj, new Set([edgeIdx])) + '}');
  const sideEligible = (branches) => {
    if (branches.length === 0) return false;
    if (branches.length === 1) return true;
    return branches[0] !== branches[1];
  };
  return sideEligible(otherBranches(e.a)) && sideEligible(otherBranches(e.b));
}
function canonicalSignature(mol) {
  if (mol.nodes.length === 0) return 'EMPTY';
  if (mol.edges.length === mol.nodes.length - 1) {
    let sig = 'T:' + canonicalTreeSig(mol);
    const dblIdx = mol.edges.findIndex((e) => e.order === 2 && !e.linker);
    if (dblIdx >= 0 && mol.edges[dblIdx].geometry && bondEligibleForGeometryOnMol(mol, dblIdx)) sig += ':' + mol.edges[dblIdx].geometry;
    return sig;
  }
  if (mol.edges.length === mol.nodes.length) return 'R:' + canonicalRingSig(mol);
  return 'X:' + mol.nodes.length + ':' + mol.edges.length;
}

// ================= formula =================
function computeFormula(mol) {
  let C = mol.nodes.length, H = 0, O = 0, N = 0;
  mol.nodes.forEach((node, i) => {
    H += Math.max(0, 4 - nodeUsedValence(mol, i));
    if (node.badge) node.badge.subs.forEach((s) => { if (s.atom === 'O') O++; if (s.atom === 'N') N++; H += s.extraH; });
  });
  mol.edges.forEach((e) => { if (e.linker === 'ETHER') O += 1; else if (e.linker === 'ESTER') O += 2; });
  return { C, H, O, N };
}
function fmtPart(sym, count) { return count > 0 ? sym + (count === 1 ? '' : count) : ''; }
function formulaStr(f) { return fmtPart('C', f.C) + fmtPart('H', f.H) + fmtPart('N', f.N) + fmtPart('O', f.O); }

// ================= naming (simplified, not full IUPAC) =================
function subtreeSize(mol, from, avoidSet) {
  const adj = adjList(mol); const seen = new Set([from, ...avoidSet]); let count = 1; const stack = [from];
  while (stack.length) {
    const u = stack.pop();
    for (const nb of adj[u]) if (!seen.has(nb.to)) { seen.add(nb.to); count++; stack.push(nb.to); }
  }
  return count;
}
function branchLabel(size) {
  const names = ['', 'methyl', 'ethyl', 'propyl', 'butyl', 'pentyl', 'hexyl', 'heptyl', 'octyl'];
  return names[size] || (size + '-carbon branch');
}
function farthestFrom(mol, start) {
  const adj = adjList(mol);
  const dist = {}; const prev = {}; dist[start] = 0; const queue = [start]; let qi = 0;
  while (qi < queue.length) {
    const u = queue[qi++];
    for (const nb of adj[u]) if (dist[nb.to] === undefined) { dist[nb.to] = dist[u] + 1; prev[nb.to] = u; queue.push(nb.to); }
  }
  let far = start;
  Object.keys(dist).forEach((k) => { if (dist[k] > dist[far]) far = Number(k); });
  const path = [far]; let cur = far;
  while (cur !== start) { cur = prev[cur]; path.push(cur); }
  path.reverse();
  return path;
}
function mainChainOfTree(mol) {
  const a = farthestFrom(mol, 0);
  return farthestFrom(mol, a[a.length - 1]);
}
function nameMolecule(mol) {
  if (mol.nodes.length === 0) return '(ยังไม่มีโครงสร้าง)';
  const isRing = mol.edges.length === mol.nodes.length;
  const adj = adjList(mol);
  const mainPath = isRing ? findCycle(mol).order : mainChainOfTree(mol);
  const mainLen = mainPath.length;
  const mainSet = new Set(mainPath);
  const root = ROOTS[mainLen] || ('C' + mainLen);

  const mainEdgeSet = new Set();
  for (let i = 0; i < mainPath.length; i++) {
    if (!isRing && i === mainPath.length - 1) break;
    const a = mainPath[i], b = mainPath[(i + 1) % mainPath.length];
    const eIdx = mol.edges.findIndex((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a));
    if (eIdx >= 0) mainEdgeSet.add(eIdx);
  }
  const branchesAt = mainPath.map(() => []);
  const groupAt = {};
  let etherOnMain = null, esterOnMain = null, multiOnMain = null;

  mainPath.forEach((nid, i) => {
    if (mol.nodes[nid].badge) groupAt[i] = mol.nodes[nid].badge.type;
    adj[nid].forEach((nb) => {
      if (mainEdgeSet.has(nb.idx)) {
        const otherMainIdx = mainPath.indexOf(nb.to);
        const locI = Math.min(i, otherMainIdx);
        if (nb.edge.linker === 'ETHER' && etherOnMain === null) etherOnMain = locI;
        if (nb.edge.linker === 'ESTER' && nb.edge.a === nid && esterOnMain === null) esterOnMain = i;
        if (nb.edge.order > 1 && !nb.edge.linker && multiOnMain === null) {
          const otherIdx = mainPath.indexOf(nb.to);
          multiOnMain = { ia: i, ib: otherIdx, order: nb.edge.order, geometry: nb.edge.geometry };
        }
        return;
      }
      if (!mainSet.has(nb.to)) branchesAt[i].push({ size: subtreeSize(mol, nb.to, mainSet) });
    });
  });

  let offMainGroupNote = '';
  mol.nodes.forEach((node, idx) => {
    if (node.badge && !mainSet.has(idx)) offMainGroupNote = ' (มีหมู่ ' + BADGES[node.badge.type].label + ' อยู่บนกิ่ง)';
  });
  let offMainMultiNote = '';
  if (!multiOnMain) {
    const dbl = mol.edges.find((e) => e.order > 1 && !e.linker);
    if (dbl) offMainMultiNote = dbl.order === 2 ? ' (มีพันธะคู่อยู่บนกิ่ง)' : ' (มีพันธะสามอยู่บนกิ่ง)';
  }
  let offMainLinkerNote = '';
  if (etherOnMain === null && esterOnMain === null) {
    const linkEdge = mol.edges.find((e) => e.linker);
    if (linkEdge) offMainLinkerNote = linkEdge.linker === 'ETHER' ? ' (มีพันธะอีเทอร์อยู่บนกิ่ง)' : ' (มีพันธะเอสเทอร์อยู่บนกิ่ง)';
  }

  function locScore(numFn) {
    let score = 0, has = false;
    Object.keys(groupAt).forEach((i) => { score += numFn(Number(i)) * 1; has = true; });
    if (multiOnMain) score += Math.min(numFn(multiOnMain.ia), numFn(multiOnMain.ib)) * 0.01;
    return has || multiOnMain ? score : 0;
  }
  let numbering;
  if (isRing) numbering = (i) => i + 1;
  else {
    const fwd = (i) => i + 1, rev = (i) => mainLen - i;
    numbering = locScore(fwd) <= locScore(rev) ? fwd : rev;
  }

  const priority = ['COOH', 'CONH2', 'CHO', 'CO', 'OH', 'NH2'];
  let principalType = null, principalIdx = null;
  for (const p of priority) {
    const idx = Object.keys(groupAt).find((k) => groupAt[k] === p);
    if (idx !== undefined) { principalType = p; principalIdx = Number(idx); break; }
  }

  let infix = 'an';
  if (multiOnMain) infix = multiOnMain.order === 2 ? 'en' : 'yn';
  const base = (isRing ? 'cyclo' : '') + root;
  const infixStr = multiOnMain ? `-${Math.min(numbering(multiOnMain.ia), numbering(multiOnMain.ib))}-${infix}` : 'an';
  let name = base + infixStr;
  switch (principalType) {
    case 'COOH': name += 'oic acid'; break;
    case 'CONH2': name += 'amide'; break;
    case 'CHO': name += 'al'; break;
    case 'CO': name += `-${numbering(principalIdx)}-one`; break;
    case 'OH': name += `-${numbering(principalIdx)}-ol`; break;
    case 'NH2': name += `-${numbering(principalIdx)}-amine`; break;
    default: name += 'e';
  }
  if (esterOnMain !== null) name += ` (มีพันธะเอสเทอร์ คาร์บอนิลอยู่ที่ตำแหน่ง ${numbering(esterOnMain)})`;
  if (etherOnMain !== null) name += ` (มีพันธะอีเทอร์ที่ตำแหน่ง ${numbering(etherOnMain)})`;
  if (multiOnMain && multiOnMain.geometry) name = `${multiOnMain.geometry}-` + name;

  const branchNames = [];
  mainPath.forEach((nid, i) => { branchesAt[i].forEach((br) => branchNames.push({ loc: numbering(i), label: branchLabel(br.size) })); });
  if (branchNames.length) {
    const byLabel = {};
    branchNames.forEach((b) => { (byLabel[b.label] = byLabel[b.label] || []).push(b.loc); });
    const multiplier = { 1: '', 2: 'di', 3: 'tri', 4: 'tetra', 5: 'penta', 6: 'hexa' };
    const parts = Object.keys(byLabel).sort().map((label) => {
      const locs = byLabel[label].sort((a, b) => a - b);
      const mult = multiplier[locs.length] !== undefined ? multiplier[locs.length] : (locs.length + '-');
      return `${locs.join(',')}-${mult}${label}`;
    });
    name = parts.join('-') + '-' + name;
  }
  return name + offMainGroupNote + offMainMultiNote + offMainLinkerNote;
}

// ================= isomer enumeration =================
const _alkaneCache = {};
function enumerateAlkaneTrees(n, cap) {
  const seen = new Set(); const results = [];
  function backtrack(nodes, edges) {
    if (nodes.length === n) {
      const mol = { nodes: nodes.map((x) => ({ id: x.id, badge: null })), edges: edges.map((e) => ({ a: e.a, b: e.b, order: 1, linker: null, geometry: null })) };
      const sig = canonicalSignature(mol);
      if (!seen.has(sig)) { seen.add(sig); results.push(mol); if (results.length > cap) throw new CapExceeded(); }
      return;
    }
    for (let attach = 0; attach < nodes.length; attach++) {
      const used = edges.filter((e) => e.a === attach || e.b === attach).length;
      if (used >= 4) continue;
      const newId = nodes.length;
      nodes.push({ id: newId }); edges.push({ a: attach, b: newId });
      backtrack(nodes, edges);
      edges.pop(); nodes.pop();
    }
  }
  try { backtrack([{ id: 0 }], []); } catch (e) { if (e instanceof CapExceeded) return null; throw e; }
  return results;
}
function enumerateAlkaneTreesCached(n) {
  if (_alkaneCache[n] === undefined) _alkaneCache[n] = enumerateAlkaneTrees(n, 200);
  return _alkaneCache[n];
}
function enumerateRingSkeletons(n, cap) {
  const results = [];
  for (let k = 3; k <= n; k++) {
    const seen = new Set();
    function backtrack(nodes, edges) {
      if (nodes.length === n) {
        const mol = { nodes: nodes.map((x) => ({ id: x.id, badge: null })), edges: edges.map((e) => ({ a: e.a, b: e.b, order: 1, linker: null, geometry: null })) };
        const sig = canonicalSignature(mol);
        if (!seen.has(sig)) { seen.add(sig); results.push(mol); if (results.length > cap) throw new CapExceeded(); }
        return;
      }
      for (let attach = 0; attach < nodes.length; attach++) {
        const used = edges.filter((e) => e.a === attach || e.b === attach).length;
        if (used >= 4) continue;
        const newId = nodes.length;
        nodes.push({ id: newId }); edges.push({ a: attach, b: newId });
        backtrack(nodes, edges);
        edges.pop(); nodes.pop();
      }
    }
    const baseNodes = []; const baseEdges = [];
    for (let i = 0; i < k; i++) baseNodes.push({ id: i });
    for (let i = 0; i < k; i++) baseEdges.push({ a: i, b: (i + 1) % k });
    try { backtrack(baseNodes, baseEdges); } catch (e) { if (e instanceof CapExceeded) return null; throw e; }
    if (results.length > cap) return null;
  }
  return results;
}
function enumerateMultibondTrees(n, order, cap) {
  const skeletons = enumerateAlkaneTreesCached(n);
  if (!skeletons) return null;
  const seen = new Set(); const results = [];
  try {
    for (const skel of skeletons) {
      for (let eIdx = 0; eIdx < skel.edges.length; eIdx++) {
        const e = skel.edges[eIdx];
        const usedA = skel.edges.filter((x) => x.a === e.a || x.b === e.a).length;
        const usedB = skel.edges.filter((x) => x.a === e.b || x.b === e.b).length;
        if (usedA - 1 + order > 4 || usedB - 1 + order > 4) continue;
        const candidate = deepClone(skel);
        candidate.edges[eIdx].order = order;
        if (order === 2 && bondEligibleForGeometryOnMol(candidate, eIdx)) {
          for (const g of ['cis', 'trans']) {
            const c2 = deepClone(candidate); c2.edges[eIdx].geometry = g;
            const sig = canonicalSignature(c2);
            if (!seen.has(sig)) { seen.add(sig); results.push(c2); if (results.length > cap) throw new CapExceeded(); }
          }
        } else {
          const sig = canonicalSignature(candidate);
          if (!seen.has(sig)) { seen.add(sig); results.push(candidate); if (results.length > cap) throw new CapExceeded(); }
        }
      }
    }
  } catch (e) { if (e instanceof CapExceeded) return null; throw e; }
  return results;
}
function enumerateGroupTrees(n, groupType, cap) {
  const skeletons = enumerateAlkaneTreesCached(n);
  if (!skeletons) return null;
  const def = BADGES[groupType];
  const seen = new Set(); const results = [];
  try {
    if (groupType === 'ETHER') {
      for (const skel of skeletons) {
        for (let eIdx = 0; eIdx < skel.edges.length; eIdx++) {
          if (skel.edges[eIdx].order !== 1) continue;
          const candidate = deepClone(skel);
          candidate.edges[eIdx].linker = groupType;
          if (!validateMolecule(candidate)) continue;
          const sig = canonicalSignature(candidate);
          if (!seen.has(sig)) { seen.add(sig); results.push(candidate); if (results.length > cap) throw new CapExceeded(); }
        }
      }
    } else if (groupType === 'ESTER') {
      // ester is directional (carbonyl sits on edge.a) - try both orientations of every edge
      for (const skel of skeletons) {
        for (let eIdx = 0; eIdx < skel.edges.length; eIdx++) {
          if (skel.edges[eIdx].order !== 1) continue;
          for (const flip of [false, true]) {
            const candidate = deepClone(skel);
            const e = candidate.edges[eIdx];
            if (flip) { const tmp = e.a; e.a = e.b; e.b = tmp; }
            e.linker = 'ESTER';
            if (!validateMolecule(candidate)) continue;
            const sig = canonicalSignature(candidate);
            if (!seen.has(sig)) { seen.add(sig); results.push(candidate); if (results.length > cap) throw new CapExceeded(); }
          }
        }
      }
    } else {
      for (const skel of skeletons) {
        for (let nid = 0; nid < skel.nodes.length; nid++) {
          const deg = skel.edges.filter((e) => e.a === nid || e.b === nid).length;
          if (def.degree != null && def.degree !== deg) continue;
          const candidate = deepClone(skel);
          candidate.nodes[nid].badge = { type: groupType, subs: def.subs };
          if (!validateMolecule(candidate)) continue;
          const sig = canonicalSignature(candidate);
          if (!seen.has(sig)) { seen.add(sig); results.push(candidate); if (results.length > cap) throw new CapExceeded(); }
        }
      }
    }
  } catch (e) { if (e instanceof CapExceeded) return null; throw e; }
  return results;
}

// ================= level generation =================
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
// NOTE ON DESIGN: the true number of structural isomers for a formula grows fast
// (heptane=9, octane=18, nonane=35 skeletons alone). To keep every level's answer key
// COMPLETE and CORRECT (never silently missing a valid isomer, never truncated) while
// still keeping a level completable in a reasonable number of builds, we decouple
// "how many isomers truly exist" (shown honestly, always the full count) from
// "how many you must find to clear the level" (passTarget, capped small). Finding
// extra beyond passTarget still scores bonus points.
function finalizeTarget(level, n, type, group, answerKey) {
  const f = computeFormula(answerKey[0]);
  const passTarget = Math.min(answerKey.length, Math.min(3 + level, 8));
  return { level, carbons: n, type, group, answerKey, formula: formulaStr(f), passTarget };
}
function generateLevel(level) {
  const n = Math.min(2 + level, 9);
  const genCap = 120; // performance safety valve only, not a gameplay size limit

  if (level === 1) {
    const list = enumerateRingSkeletons(3, genCap).concat(enumerateMultibondTrees(3, 2, genCap) || []);
    const seen = new Set(); const uniq = [];
    list.forEach((m) => { const s = canonicalSignature(m); if (!seen.has(s)) { seen.add(s); uniq.push(m); } });
    return finalizeTarget(1, 3, 'B', null, uniq);
  }

  const candidates = [];
  candidates.push({ type: 'A', run: () => enumerateAlkaneTrees(n, genCap) });
  candidates.push({
    type: 'B',
    run: () => {
      const rings = enumerateRingSkeletons(n, genCap);
      const enes = enumerateMultibondTrees(n, 2, genCap);
      if (rings === null || enes === null) return null;
      return rings.concat(enes);
    },
  });
  if (n >= 4) candidates.push({ type: 'C', run: () => enumerateMultibondTrees(n, 3, genCap) });
  ['OH', 'NH2', 'CO', 'COOH', 'CONH2', 'CHO', 'ETHER', 'ESTER'].forEach((g) => {
    candidates.push({ type: 'D', group: g, run: () => enumerateGroupTrees(n, g, genCap) });
  });
  shuffle(candidates);

  for (const cand of candidates) {
    let list;
    try { list = cand.run(); } catch (e) { list = null; }
    if (!list || list.length === 0) continue;
    const seen = new Set(); const uniq = [];
    list.forEach((m) => { const s = canonicalSignature(m); if (!seen.has(s)) { seen.add(s); uniq.push(m); } });
    if (uniq.length >= 1) return finalizeTarget(level, n, cand.type, cand.group || null, uniq);
  }
  // extremely unlikely fallback (all candidates capped out) - guaranteed-safe small case
  const fb = enumerateAlkaneTrees(3, 10) || [{ nodes: [{ id: 0, badge: null }, { id: 1, badge: null }, { id: 2, badge: null }], edges: [{ a: 0, b: 1, order: 1, linker: null, geometry: null }, { a: 1, b: 2, order: 1, linker: null, geometry: null }] }];
  return finalizeTarget(level, 3, 'A', null, fb);
}

function renderTargetCard(target) {
  targetInfo.innerHTML = '';
  const f = document.createElement('div'); f.className = 'target-formula'; f.textContent = 'สูตรโมเลกุล: ' + target.formula;
  targetInfo.appendChild(f);
  const chips = [];
  if (target.type === 'C') chips.push('🔺 ต้องมีพันธะสาม (แอลไคน์)');
  if (target.type === 'D') chips.push('🧬 ต้องมีหมู่ ' + TARGET_GROUP_LABELS[target.group]);
  chips.push(`🔎 มีโครงสร้างที่เป็นไปได้ทั้งหมด ${target.answerKey.length} แบบ (ต่อให้ถูกอย่างน้อย ${target.passTarget} แบบเพื่อผ่านด่าน)`);
  chips.forEach((c) => { const d = document.createElement('div'); d.className = 'target-chip'; d.textContent = c; targetInfo.appendChild(d); });
}

// ================= layout & rendering =================
// Derives a spanning tree directly from edges (works for both interactively-built
// molecules and generator-produced ones, which carry no parentId) and lays it out;
// any edge left over (the ring-closing one, for unicyclic molecules) is reported
// separately so the renderer can draw it as an overlay instead of a tree branch.
function computeLayout(nodes, edges) {
  const adj = nodes.map(() => []);
  edges.forEach((e, idx) => { adj[e.a].push({ to: e.b, idx }); adj[e.b].push({ to: e.a, idx }); });
  const visited = new Set();
  const children = {}; nodes.forEach((n) => { children[n.id] = []; });
  const treeEdgeIdxSet = new Set();
  function dfs(id) {
    visited.add(id);
    adj[id].forEach((nb) => {
      if (!visited.has(nb.to)) { children[id].push(nb.to); treeEdgeIdxSet.add(nb.idx); dfs(nb.to); }
    });
  }
  if (nodes.length) dfs(nodes[0].id);
  const pos = {}; let leafX = 0;
  function layout(id, depth) {
    const kids = children[id];
    if (kids.length === 0) { pos[id] = { x: leafX, y: depth }; leafX++; }
    else {
      kids.forEach((k) => layout(k, depth + 1));
      const xs = kids.map((k) => pos[k].x);
      pos[id] = { x: (Math.min(...xs) + Math.max(...xs)) / 2, y: depth };
    }
  }
  if (nodes.length) layout(nodes[0].id, 0);
  return { pos, treeEdgeIdxSet };
}
function mkLine(svgNS, x1, y1, x2, y2, ring) {
  const l = document.createElementNS(svgNS, 'line');
  l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2);
  l.setAttribute('class', 'edge-line' + (ring ? ' ring-line' : ''));
  return l;
}
function drawMolecule(nodes, edges, container, interactive) {
  container.innerHTML = '';
  if (nodes.length === 0) return;
  const sx = interactive ? SPACING_X : SPACING_X_MINI, sy = interactive ? SPACING_Y : SPACING_Y_MINI, pad = interactive ? PAD : PAD_MINI;
  const { pos: layout, treeEdgeIdxSet } = computeLayout(nodes, edges);
  let maxX = 0, maxY = 0;
  Object.values(layout).forEach((p) => { maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y); });
  const w = maxX * sx + pad * 2, h = maxY * sy + pad * 2;
  container.style.width = w + 'px'; container.style.height = h + 'px';
  const px = (id) => layout[id].x * sx + pad;
  const py = (id) => layout[id].y * sy + pad;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', w); svg.setAttribute('height', h);
  svg.classList.add('mol-svg');

  edges.forEach((e, eIdx) => {
    const x1 = px(e.a), y1 = py(e.a), x2 = px(e.b), y2 = py(e.b);
    const ringClosure = !treeEdgeIdxSet.has(eIdx);
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    const group = document.createElementNS(svgNS, 'g');

    if (e.linker) {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const l1x = x1 + dx * 0.32, l1y = y1 + dy * 0.32, l2x = x1 + dx * 0.68, l2y = y1 + dy * 0.68;
      group.appendChild(mkLine(svgNS, x1, y1, l1x, l1y));
      group.appendChild(mkLine(svgNS, l2x, l2y, x2, y2));
      const circ = document.createElementNS(svgNS, 'circle');
      circ.setAttribute('cx', mx); circ.setAttribute('cy', my); circ.setAttribute('r', interactive ? 13 : 7);
      circ.setAttribute('class', 'edge-oatom-bg' + (e.linker === 'ESTER' ? ' ester' : ''));
      if (interactive && !state.locked) circ.addEventListener('click', (ev) => { ev.stopPropagation(); removeLinker(eIdx); });
      group.appendChild(circ);
      if (interactive) {
        const txt = document.createElementNS(svgNS, 'text');
        txt.setAttribute('x', mx); txt.setAttribute('y', my + 4); txt.setAttribute('class', 'edge-oatom-txt'); txt.textContent = 'O';
        group.appendChild(txt);
        if (e.linker === 'ESTER' && !state.locked) {
          const fx = mx + nx * 22, fy = my + ny * 22;
          const fbg = document.createElementNS(svgNS, 'rect');
          fbg.setAttribute('x', fx - 11); fbg.setAttribute('y', fy - 9); fbg.setAttribute('width', 22); fbg.setAttribute('height', 18); fbg.setAttribute('rx', 6);
          fbg.setAttribute('class', 'geo-tag-bg');
          const ftxt = document.createElementNS(svgNS, 'text');
          ftxt.setAttribute('x', fx); ftxt.setAttribute('y', fy + 4); ftxt.setAttribute('class', 'geo-tag-txt'); ftxt.textContent = '⇄';
          fbg.addEventListener('click', (ev) => { ev.stopPropagation(); flipEsterSide(eIdx); });
          group.appendChild(fbg); group.appendChild(ftxt);
        }
      }
    } else {
      const offs = e.order === 1 ? [0] : e.order === 2 ? [-3, 3] : [-5, 0, 5];
      offs.forEach((o) => group.appendChild(mkLine(svgNS, x1 + nx * o, y1 + ny * o, x2 + nx * o, y2 + ny * o, ringClosure)));
      if (interactive) {
        const hit = document.createElementNS(svgNS, 'line');
        hit.setAttribute('x1', x1); hit.setAttribute('y1', y1); hit.setAttribute('x2', x2); hit.setAttribute('y2', y2);
        hit.setAttribute('class', 'edge-hit');
        if (!state.locked) hit.addEventListener('click', (ev) => { ev.stopPropagation(); onEdgeClick(eIdx); });
        group.appendChild(hit);
        if (e.order === 2 && bondEligibleForGeometryOnMol({ nodes, edges }, eIdx)) {
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - 16;
          const bg = document.createElementNS(svgNS, 'rect');
          bg.setAttribute('x', mx - 22); bg.setAttribute('y', my - 8); bg.setAttribute('width', 44); bg.setAttribute('height', 16); bg.setAttribute('rx', 8);
          bg.setAttribute('class', 'geo-tag-bg');
          const t = document.createElementNS(svgNS, 'text'); t.setAttribute('x', mx); t.setAttribute('y', my + 4); t.setAttribute('class', 'geo-tag-txt');
          t.textContent = e.geometry ? e.geometry.toUpperCase() : 'cis/trans';
          if (!state.locked) bg.addEventListener('click', (ev) => { ev.stopPropagation(); toggleGeometry(eIdx); });
          group.appendChild(bg); group.appendChild(t);
        }
        if (ringClosure && !state.locked) {
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + 16;
          const c = document.createElementNS(svgNS, 'circle'); c.setAttribute('cx', mx); c.setAttribute('cy', my); c.setAttribute('r', 8); c.setAttribute('class', 'ring-remove');
          const t = document.createElementNS(svgNS, 'text'); t.setAttribute('x', mx); t.setAttribute('y', my + 3); t.setAttribute('class', 'ring-remove-txt'); t.textContent = '✕';
          c.addEventListener('click', (ev) => { ev.stopPropagation(); removeRingEdge(eIdx); });
          group.appendChild(c); group.appendChild(t);
        }
      }
    }
    svg.appendChild(group);
  });
  container.appendChild(svg);

  nodes.forEach((node, id) => {
    const used = nodeUsedValence({ nodes, edges }, id);
    const h = 4 - used;
    const kindCls = h <= 0 ? 'k-c' : h === 1 ? 'k-ch' : h === 2 ? 'k-ch2' : 'k-ch3';
    const kindTxt = h <= 0 ? 'C' : h === 1 ? 'CH' : h === 2 ? 'CH₂' : 'CH₃';
    const div = document.createElement('div');
    div.className = 'atom-node ' + kindCls;
    const span = document.createElement('span'); span.className = 'atxt'; span.textContent = kindTxt;
    div.appendChild(span);
    div.style.left = px(id) + 'px'; div.style.top = py(id) + 'px';

    if (interactive) {
      if (state.selectedId === id && !state.locked) div.classList.add('selected');
      if (state.ringBondFirst === id) div.classList.add('hint-first-pick');
      if (state.armedBadge && state.armedBadge !== 'ETHER' && state.armedBadge !== 'ESTER' && !state.locked) {
        const def = BADGES[state.armedBadge];
        if (!node.badge && (def.degree == null || def.degree === degreeOfLive(id))) div.classList.add('selectable-target');
      }
      if (!state.locked) div.addEventListener('click', (ev) => { ev.stopPropagation(); onAtomClick(id); });
      if (!state.locked && nodes.length > 1 && id === nodes.length - 1) {
        const x = document.createElement('div'); x.className = 'remove-x'; x.textContent = '✕';
        x.addEventListener('click', (ev) => { ev.stopPropagation(); undoAtom(id); });
        div.appendChild(x);
      }
    }
    if (node.badge) {
      const p = document.createElement('div'); p.className = 'pendant';
      p.style.setProperty('--pc', BADGE_COLOR[node.badge.type] || '#999');
      p.textContent = BADGES[node.badge.type].label;
      if (interactive && !state.locked) p.addEventListener('click', (ev) => { ev.stopPropagation(); removeBadge(id); });
      div.appendChild(p);
    }
    container.appendChild(div);
  });
}

// ================= interaction dispatch =================
function onAtomClick(id) {
  if (state.armedRingBond) {
    if (state.ringBondFirst === null) { state.ringBondFirst = id; render(); return; }
    if (state.ringBondFirst === id) { state.ringBondFirst = null; state.armedRingBond = false; render(); return; }
    tryCreateRingBond(state.ringBondFirst, id);
    return;
  }
  if (state.armedBadge && state.armedBadge !== 'ETHER' && state.armedBadge !== 'ESTER') { attachBadge(id, state.armedBadge); return; }
  state.selectedId = state.selectedId === id ? null : id;
  render();
}
function onEdgeClick(eIdx) {
  if (state.armedBadge === 'ETHER' || state.armedBadge === 'ESTER') { attachLinker(eIdx, state.armedBadge); return; }
  if (!state.armedBadge) cycleEdgeOrder(eIdx);
}

// ================= mutation actions =================
function currentMolClone() { return { nodes: deepClone(state.nodes), edges: deepClone(state.edges) }; }
function addCarbonAction() {
  if (state.locked) return;
  if (state.nodes.length === 0) { state.nodes.push({ id: 0, parentId: null, badge: null }); state.selectedId = 0; playConnect(); render(); return; }
  const target = state.selectedId;
  if (target == null) { toast('เลือกอะตอมที่จะต่อกิ่งก่อน (คลิกที่อะตอม)'); return; }
  if (state.nodes.length >= 12) { toast('โครงสร้างใหญ่เกินไปแล้ว'); return; }
  const mol = currentMolClone();
  const newId = mol.nodes.length;
  mol.nodes.push({ id: newId, parentId: target, badge: null });
  mol.edges.push({ a: target, b: newId, order: 1, linker: null, geometry: null });
  if (!validateMolecule(mol)) { toast('อะตอมนี้มีพันธะครบ 4 แล้ว ต่อเพิ่มไม่ได้'); playWrong(); return; }
  state.nodes.push({ id: newId, parentId: target, badge: null });
  state.edges.push({ a: target, b: newId, order: 1, linker: null, geometry: null });
  state.selectedId = newId;
  playConnect(); render();
}
function undoAtom(id) {
  if (state.locked) return;
  if (id !== state.nodes.length - 1) { toast('ลบได้เฉพาะอะตอมปลายกิ่งล่าสุดเท่านั้น'); return; }
  state.edges = state.edges.filter((e) => e.a !== id && e.b !== id);
  state.nodes.pop();
  if (state.selectedId === id) state.selectedId = state.nodes.length ? state.nodes[state.nodes.length - 1].id : null;
  if (state.ringBondFirst === id) state.ringBondFirst = null;
  playDisconnect(); render();
}
function undo() { if (!state.locked && state.nodes.length > 0) undoAtom(state.nodes.length - 1); }
function resetStructure() {
  if (state.locked) return;
  state.nodes = []; state.edges = []; state.selectedId = null; state.armedRingBond = false; state.ringBondFirst = null;
  render();
}
function toggleRingBondMode() {
  if (state.locked) return;
  state.armedRingBond = !state.armedRingBond;
  state.ringBondFirst = null;
  unarmBadge();
  render();
}
function tryCreateRingBond(a, b) {
  const mol = currentMolClone();
  const exists = mol.edges.some((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a));
  if (exists) { toast('อะตอมนี้เชื่อมกันอยู่แล้ว'); playWrong(); state.ringBondFirst = null; state.armedRingBond = false; render(); return; }
  if (mol.edges.length >= mol.nodes.length) { toast('สร้างวงได้แค่ 1 วงเท่านั้น'); playWrong(); state.ringBondFirst = null; state.armedRingBond = false; render(); return; }
  mol.edges.push({ a, b, order: 1, linker: null, geometry: null });
  if (!validateMolecule(mol)) { toast('เวเลนซ์ไม่พอสำหรับเชื่อมวงตรงนี้'); playWrong(); state.ringBondFirst = null; state.armedRingBond = false; render(); return; }
  state.edges.push({ a, b, order: 1, linker: null, geometry: null });
  state.ringBondFirst = null; state.armedRingBond = false;
  playConnect(); render();
}
function removeRingEdge(eIdx) { if (state.locked) return; state.edges.splice(eIdx, 1); playDisconnect(); render(); }
function armBadge(type) {
  if (state.locked) return;
  state.armedBadge = state.armedBadge === type ? null : type;
  state.armedRingBond = false; state.ringBondFirst = null;
  document.querySelectorAll('.badge-btn').forEach((b) => b.classList.toggle('armed', b.dataset.badge === state.armedBadge));
  render();
}
function unarmBadge() { state.armedBadge = null; document.querySelectorAll('.badge-btn').forEach((b) => b.classList.remove('armed')); }
function attachBadge(id, type) {
  if (state.nodes[id].badge) { toast('อะตอมนี้มีหมู่ฟังก์ชันติดอยู่แล้ว'); playWrong(); return; }
  const def = BADGES[type];
  const deg = degreeOfLive(id);
  if (def.degree != null && def.degree !== deg) { toast(def.degree === 1 ? 'หมู่นี้ติดได้เฉพาะปลายกิ่ง (ปลายโซ่)' : 'หมู่นี้ติดได้เฉพาะอะตอมที่มี 2 พันธะ'); playWrong(); return; }
  const mol = currentMolClone();
  mol.nodes[id].badge = { type, subs: def.subs };
  if (!validateMolecule(mol)) { toast('เวเลนซ์ของอะตอมนี้ไม่พอ'); playWrong(); return; }
  state.nodes[id].badge = { type, subs: def.subs };
  playConnect(); unarmBadge(); render();
}
function attachLinker(eIdx, type) {
  const e = state.edges[eIdx];
  if (e.order !== 1) { toast('ใส่ตัวเชื่อมได้เฉพาะพันธะเดี่ยว'); playWrong(); return; }
  if (e.linker) { toast('พันธะนี้มีตัวเชื่อมอยู่แล้ว'); playWrong(); return; }
  const mol = currentMolClone();
  mol.edges[eIdx].linker = type;
  if (!validateMolecule(mol)) { toast('เวเลนซ์ไม่พอสำหรับตำแหน่งนี้'); playWrong(); return; }
  state.edges[eIdx].linker = type;
  playConnect(); unarmBadge(); render();
}
function cycleEdgeOrder(eIdx) {
  const e = state.edges[eIdx];
  if (e.linker) { toast('พันธะนี้มีตัวเชื่อมอยู่ เปลี่ยนลำดับพันธะไม่ได้'); playWrong(); return; }
  const next = e.order === 1 ? 2 : e.order === 2 ? 3 : 1;
  const mol = currentMolClone();
  mol.edges[eIdx].order = next;
  if (!validateMolecule(mol)) { toast('เวเลนซ์ของอะตอมข้างเคียงไม่พอ'); playWrong(); return; }
  state.edges[eIdx].order = next;
  if (next !== 2) state.edges[eIdx].geometry = null;
  playConnect(); render();
}
function removeBadge(id) { state.nodes[id].badge = null; playDisconnect(); render(); }
function removeLinker(eIdx) { state.edges[eIdx].linker = null; playDisconnect(); render(); }
function flipEsterSide(eIdx) { const e = state.edges[eIdx]; const tmp = e.a; e.a = e.b; e.b = tmp; playConnect(); render(); }
function toggleGeometry(eIdx) { state.edges[eIdx].geometry = state.edges[eIdx].geometry === 'cis' ? 'trans' : 'cis'; playConnect(); render(); }

function render() {
  drawMolecule(state.nodes, state.edges, buildArea, true);
  addCBtn.disabled = state.locked || (state.nodes.length > 0 && state.selectedId == null);
  ringBondBtn.classList.toggle('armed', state.armedRingBond);
  ringBondBtn.disabled = state.locked || state.nodes.length < 2;
  undoBtn.disabled = state.locked || state.nodes.length === 0;
  resetBtn.disabled = state.locked;
  doneStructBtn.disabled = state.locked;
  submitBtn.disabled = state.locked;
}

// ================= submissions =================
function doneStructure() {
  if (state.locked) return;
  if (state.nodes.length === 0) { toast('ยังไม่ได้ต่อโครงสร้างเลย'); return; }
  const mol = currentMolClone();
  const ambiguous = mol.edges.some((e, idx) => e.order === 2 && !e.linker && !e.geometry && bondEligibleForGeometryOnMol(mol, idx));
  if (ambiguous) { toast('พันธะคู่นี้ต้องระบุ cis หรือ trans ก่อน (คลิกป้าย cis/trans)'); playWrong(); return; }
  state.submissions.push({ mol });
  resetStructure();
  playCorrect();
  renderSubmissions();
}
function removeSubmission(idx) { state.submissions.splice(idx, 1); renderSubmissions(); }
function renderSubmissions() {
  submissionsTray.innerHTML = '';
  state.submissions.forEach((s, i) => {
    const card = document.createElement('div'); card.className = 'sub-card';
    const label = document.createElement('div'); label.className = 'sub-label'; label.textContent = 'โครงสร้างที่ ' + (i + 1);
    const wrap = document.createElement('div'); wrap.className = 'mini-wrap';
    card.appendChild(label); card.appendChild(wrap);
    if (!state.locked) {
      const rm = document.createElement('button'); rm.className = 'sub-remove'; rm.textContent = 'ลบ';
      rm.addEventListener('click', () => removeSubmission(i));
      card.appendChild(rm);
    }
    submissionsTray.appendChild(card);
    drawMolecule(s.mol.nodes, s.mol.edges, wrap, false);
  });
}

// ================= grading & reveal =================
function gradeAndReveal() {
  if (state.locked) return;
  if (state.submissions.length === 0) { toast('ยังไม่ได้เก็บโครงสร้างใดเลย กด "โครงสร้างนี้เสร็จแล้ว" ก่อน'); return; }
  const target = state.target;
  const keySigs = target.answerKey.map((m) => canonicalSignature(m));
  const claimed = new Array(keySigs.length).fill(-1);
  const rows = [];
  let correctCount = 0;
  state.submissions.forEach((s, i) => {
    const sig = canonicalSignature(s.mol);
    const name = nameMolecule(s.mol);
    const keyIdx = keySigs.indexOf(sig);
    if (keyIdx >= 0 && claimed[keyIdx] === -1) { claimed[keyIdx] = i; rows.push({ status: 'ok', name, mol: s.mol }); correctCount++; }
    else if (keyIdx >= 0) rows.push({ status: 'bad', name, mol: s.mol, reason: `ซ้ำกับโครงสร้างที่ ${claimed[keyIdx] + 1} ของคุณ` });
    else rows.push({ status: 'bad', name, mol: s.mol, reason: 'ไม่ตรงกับโจทย์ที่กำหนด' });
  });

  const passed = correctCount >= target.passTarget;
  resultPanel.hidden = false;
  resultHeadline.textContent = passed
    ? `✅ ผ่านด่าน! พบ ${correctCount} / ${keySigs.length} แบบ (ต้องการอย่างน้อย ${target.passTarget})`
    : `พบแล้ว ${correctCount} / ${keySigs.length} แบบ (ต้องการอย่างน้อย ${target.passTarget} แบบ) ลองต่ออีก แล้วกดส่งคำตอบใหม่`;
  resultList.innerHTML = '';
  rows.forEach((r) => {
    const row = document.createElement('div'); row.className = 'result-row ' + r.status;
    const icon = document.createElement('div'); icon.className = 'result-icon'; icon.textContent = r.status === 'ok' ? '✅' : '❌';
    const mini = document.createElement('div'); mini.className = 'result-mini';
    const text = document.createElement('div'); text.className = 'result-text';
    text.innerHTML = `<b>${r.name}</b>` + (r.reason ? '<br>' + r.reason : '');
    row.appendChild(icon); row.appendChild(mini); row.appendChild(text);
    resultList.appendChild(row);
    drawMolecule(r.mol.nodes, r.mol.edges, mini, false);
  });

  missingList.innerHTML = '';
  const missingKeys = target.answerKey.filter((m, i) => claimed[i] === -1);
  if (missingKeys.length > 0) {
    const h = document.createElement('h4'); h.textContent = 'โครงสร้างที่ยังไม่ได้ต่อ:'; missingList.appendChild(h);
    missingKeys.forEach((m) => {
      const row = document.createElement('div'); row.className = 'result-row missing';
      const icon = document.createElement('div'); icon.className = 'result-icon'; icon.textContent = '⚠️';
      const mini = document.createElement('div'); mini.className = 'result-mini';
      const text = document.createElement('div'); text.className = 'result-text';
      text.innerHTML = `<b>${nameMolecule(m)}</b>`;
      row.appendChild(icon); row.appendChild(mini); row.appendChild(text);
      missingList.appendChild(row);
      drawMolecule(m.nodes, m.edges, mini, false);
    });
  }

  if (passed) {
    state.locked = true;
    state.score += 10 * correctCount + state.level * 5;
    scoreNum.textContent = state.score;
    if (state.level >= 7) {
      nextBtn.hidden = true;
      setTimeout(() => { finalScore.textContent = 'คะแนนรวม: ' + state.score; winOverlay.hidden = false; }, 900);
    } else {
      nextBtn.hidden = false;
      nextBtn.onclick = () => newLevel(state.level + 1);
    }
  } else {
    nextBtn.hidden = true;
  }
  renderSubmissions();
  render();
}

// ================= level flow =================
function newLevel(lvl) {
  state.level = lvl;
  state.target = generateLevel(lvl);
  state.nodes = []; state.edges = []; state.selectedId = null;
  state.armedRingBond = false; state.ringBondFirst = null; state.locked = false; state.submissions = [];
  unarmBadge();
  resultPanel.hidden = true; nextBtn.hidden = true;
  levelNum.textContent = lvl; scoreNum.textContent = state.score;
  renderTargetCard(state.target);
  renderSubmissions();
  render();
}

// ================= event wiring =================
addCBtn.addEventListener('click', addCarbonAction);
ringBondBtn.addEventListener('click', toggleRingBondMode);
undoBtn.addEventListener('click', undo);
resetBtn.addEventListener('click', resetStructure);
doneStructBtn.addEventListener('click', doneStructure);
submitBtn.addEventListener('click', gradeAndReveal);
document.querySelectorAll('[data-badge]').forEach((btn) => btn.addEventListener('click', () => armBadge(btn.dataset.badge)));
playAgainBtn.addEventListener('click', () => { winOverlay.hidden = true; state.score = 0; newLevel(1); });

// ---------- init ----------
newLevel(1);
