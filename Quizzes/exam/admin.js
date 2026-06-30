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
  $("list-body").innerHTML = `<tr><td class="state" colspan="6">⏳ กำลังโหลด...</td></tr>`;

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
    $("list-body").innerHTML = `<tr><td class="state" colspan="6">❌ ${escapeHtml(e.message)}</td></tr>`;
  }
}

function renderList() {
  const kw = $("search-box").value.trim().toLowerCase();
  const rows = listRows.filter(r =>
    !kw || `${r.displayName} ${r.userId}`.toLowerCase().includes(kw));

  if (!rows.length) {
    $("list-body").innerHTML = `<tr><td class="state" colspan="6">ไม่พบผู้สอบ</td></tr>`;
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
  await loadScript(CFG.getQuestionFile(t.courseId, t.testKey));
  questionCache[full] = window.TEST_DATA || [];
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
      <div class="sum-label">Rank</div>
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

// expose สำหรับ onclick ใน HTML
window.openDetail = openDetail;
