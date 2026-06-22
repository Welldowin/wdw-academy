// 📄 progress.js
// ─────────────────────────────────────────────────────────────
//  หน้าตารางรวม: ใครทำ quiz ไหนแล้ว + สัญลักษณ์เตือน 🚀 / 👍 / 💀
// ─────────────────────────────────────────────────────────────

const API_URL = window.PROGRESS_API_URL;
const COURSES = window.PROGRESS_COURSES || [];

const els = {
  courseSelect: document.getElementById("courseSelect"),
  searchBox:    document.getElementById("searchBox"),
  summary:      document.getElementById("summary"),
  tableHead:    document.getElementById("tableHead"),
  tableBody:    document.getElementById("tableBody"),
  tableTitle:   document.getElementById("tableTitle"),
};

// เก็บ state ปัจจุบันไว้สำหรับ filter / re-render
let state = {
  courseId: "",
  quizMaster: [],   // [{quizKey, title}, ...] เรียงตามลำดับสัปดาห์
  rows: [],         // ข้อมูลจาก API (พร้อม flag คำนวณแล้ว)
};

/* ---------- เติม dropdown จาก config ---------- */
function buildDropdown() {
  els.courseSelect.innerHTML =
    `<option value="">— เลือกคอร์ส —</option>` +
    COURSES.map(c => `<option value="${c.courseId}">${c.label}</option>`).join("");
}

/* ---------- โหลด quizmaster.js ของคอร์สที่เลือก (แบบ dynamic) ---------- */
function loadQuizMaster(courseId) {
  return new Promise((resolve, reject) => {
    // ล้างค่าเดิมเพื่อกันค้าง
    window.QUIZ_MASTER = null;
    const script = document.createElement("script");
    script.src = `./courses/${courseId}/quizmaster.js?v=${Date.now()}`;
    script.onload = () => resolve(window.QUIZ_MASTER || []);
    script.onerror = () => reject(new Error("ไม่พบไฟล์ quizmaster ของคอร์สนี้"));
    document.head.appendChild(script);
  });
}

/* ---------- เรียก API ดึงข้อมูลความคืบหน้า ---------- */
async function fetchCourseProgress(courseId) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action: "getCourseProgress", courseId }),
  });
  return res.json();
}

/* ---------- คำนวณสัญลักษณ์เตือนของนักเรียน 1 คน ----------
   กติกา (เรียงตามลำดับ quizMaster = ลำดับสัปดาห์):
   - 🚀 = ทำครบทุก quiz ที่ออกแล้ว
   - 💀 = ข้าม 2 quiz "ล่าสุด" ติดกัน (2 ตัวท้ายสุดไม่ทำทั้งคู่)
   - 👍 = มีข้ามบ้าง แต่ไม่เข้าเงื่อนไข 💀
------------------------------------------------------------ */
function calcFlag(statusMap, quizMaster) {
  const seq = quizMaster.map(q => statusMap[q.quizKey] === true);
  const total = seq.length;
  const doneCount = seq.filter(Boolean).length;

  if (total === 0) return { flag: "👍", level: "warn", doneCount, total };

  // ทำครบทุกตัว → 🚀
  if (doneCount === total) return { flag: "🚀", level: "ok", doneCount, total };

  // เช็ค 2 ตัวล่าสุดติดกัน (ถ้ามี quiz ≥ 2 ตัว)
  if (total >= 2) {
    const lastTwoMissed = !seq[total - 1] && !seq[total - 2];
    if (lastTwoMissed) return { flag: "💀", level: "danger", doneCount, total };
  } else {
    // มี quiz แค่ 1 ตัว แล้วยังไม่ทำ → เตือนแรง
    if (!seq[0]) return { flag: "💀", level: "danger", doneCount, total };
  }

  return { flag: "👍", level: "warn", doneCount, total };
}

/* ---------- render สรุปด้านบน ---------- */
function renderSummary() {
  const total = state.rows.length;
  let ok = 0, warn = 0, danger = 0;
  state.rows.forEach(r => {
    if (r._flag.level === "ok") ok++;
    else if (r._flag.level === "danger") danger++;
    else warn++;
  });

  els.summary.innerHTML = `
    <div class="pill"><span class="num">${total}</span><span class="lbl">นักเรียนทั้งหมด</span></div>
    <div class="pill"><span class="num">🚀 ${ok}</span><span class="lbl">ทำครบ</span></div>
    <div class="pill"><span class="num">👍 ${warn}</span><span class="lbl">ข้ามบ้าง</span></div>
    <div class="pill"><span class="num">💀 ${danger}</span><span class="lbl">ต้องจับตา</span></div>
  `;
}

/* ---------- render ตาราง ---------- */
function renderTable() {
  const keyword = els.searchBox.value.trim().toLowerCase();

  // หัวตาราง
  els.tableHead.innerHTML = `
    <tr>
      <th class="name-col">นักเรียน</th>
      <th>สถานะ</th>
      ${state.quizMaster.map((q, i) =>
        `<th title="${escapeHtml(q.title)}">Q${i + 1}</th>`).join("")}
      <th>ทำแล้ว</th>
    </tr>
  `;

  // กรองตามคำค้น
  const visible = state.rows.filter(r => {
    if (!keyword) return true;
    const hay = `${r.firstName} ${r.lastName} ${r.nickname}`.toLowerCase();
    return hay.includes(keyword);
  });

  if (visible.length === 0) {
    els.tableBody.innerHTML =
      `<tr><td class="state" colspan="${state.quizMaster.length + 3}">ไม่พบนักเรียนที่ตรงกับการค้นหา</td></tr>`;
    return;
  }

  els.tableBody.innerHTML = visible.map(r => {
    const fullName = `${r.firstName} ${r.lastName}`.trim() || r.nickname || r.userId;
    const nick = r.nickname ? `(${r.nickname})` : "";
    const detailUrl =
      `./student.html?course=${encodeURIComponent(state.courseId)}&user=${encodeURIComponent(r.userId)}`;

    const cells = state.quizMaster.map(q => {
      const done = r.status[q.quizKey] === true;
      return done
        ? `<td><span class="done">✔</span></td>`
        : `<td><span class="miss">–</span></td>`;
    }).join("");

    return `
      <tr class="row-${r._flag.level}">
        <td class="name-col">
          <a class="name-link" href="${detailUrl}">${escapeHtml(fullName)}</a>
          <span class="name-sub">${escapeHtml(nick)}</span>
        </td>
        <td class="flag">${r._flag.flag}</td>
        ${cells}
        <td>${r._flag.doneCount}/${r._flag.total}</td>
      </tr>
    `;
  }).join("");
}

/* ---------- เมื่อเลือกคอร์ส ---------- */
async function onCourseChange(courseId) {
  state.courseId = courseId;
  state.rows = [];
  state.quizMaster = [];

  if (!courseId) {
    els.summary.innerHTML = "";
    els.tableHead.innerHTML = "";
    els.tableBody.innerHTML = `<tr><td class="state">เลือกคอร์สเพื่อเริ่มดูข้อมูล</td></tr>`;
    return;
  }

  els.tableBody.innerHTML = `<tr><td class="state">⏳ กำลังโหลดข้อมูล...</td></tr>`;
  els.summary.innerHTML = "";

  try {
    // โหลด quizmaster + ข้อมูลความคืบหน้าพร้อมกัน
    const [quizMaster, result] = await Promise.all([
      loadQuizMaster(courseId),
      fetchCourseProgress(courseId),
    ]);

    if (!result.ok) throw new Error(result.message || "โหลดข้อมูลไม่สำเร็จ");

    state.quizMaster = quizMaster;

    // คำนวณ flag ของแต่ละคน + เรียง: 💀 ก่อน → 👍 → 🚀, ในกลุ่มเดียวกันเรียงตามทำน้อยสุด
    const order = { danger: 0, warn: 1, ok: 2 };
    state.rows = (result.rows || []).map(r => {
      r._flag = calcFlag(r.status || {}, quizMaster);
      return r;
    }).sort((a, b) => {
      if (order[a._flag.level] !== order[b._flag.level])
        return order[a._flag.level] - order[b._flag.level];
      return a._flag.doneCount - b._flag.doneCount;
    });

    const label = COURSES.find(c => c.courseId === courseId)?.label || courseId;
    els.tableTitle.textContent = `ตารางความคืบหน้า — ${label}`;

    renderSummary();
    renderTable();
  } catch (err) {
    console.error(err);
    els.tableBody.innerHTML =
      `<tr><td class="state">❌ ${escapeHtml(err.message)}</td></tr>`;
  }
}

/* ---------- utility ---------- */
function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- init ---------- */
buildDropdown();
els.courseSelect.addEventListener("change", e => onCourseChange(e.target.value));
els.searchBox.addEventListener("input", () => {
  if (state.courseId) renderTable();
});

// ต้อง login ก่อนถึงใช้งานได้
window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    els.tableBody.innerHTML =
      `<tr><td class="state">🔒 กรุณาเข้าสู่ระบบก่อนใช้งานหน้านี้</td></tr>`;
    els.courseSelect.disabled = true;
    return;
  }
  els.courseSelect.disabled = false;
});
