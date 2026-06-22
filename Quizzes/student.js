// 📄 student.js
// ─────────────────────────────────────────────────────────────
//  หน้าสถิติรายคน: คะแนนแต่ละ quiz + ชื่อ quiz (จาก quizmaster.js)
// ─────────────────────────────────────────────────────────────

const API_URL = window.PROGRESS_API_URL;
const COURSES = window.PROGRESS_COURSES || [];

const params = new URLSearchParams(window.location.search);
const courseId = params.get("course") || "";
const userId   = params.get("user") || "";

const els = {
  stuName:    document.getElementById("stuName"),
  stuMeta:    document.getElementById("stuMeta"),
  stuSummary: document.getElementById("stuSummary"),
  quizList:   document.getElementById("quizList"),
  backBtn:    document.getElementById("backBtn"),
};

// ปุ่มกลับ คงคอร์สเดิมไว้
els.backBtn.href = courseId
  ? `./progress.html?course=${encodeURIComponent(courseId)}`
  : "./progress.html";

function formatTime(sec) {
  sec = Number(sec || 0);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- โหลด quizmaster ของคอร์ส ---------- */
function loadQuizMaster(cid) {
  return new Promise((resolve, reject) => {
    window.QUIZ_MASTER = null;
    const script = document.createElement("script");
    script.src = `./courses/${cid}/quizmaster.js?v=${Date.now()}`;
    script.onload = () => resolve(window.QUIZ_MASTER || []);
    script.onerror = () => reject(new Error("ไม่พบไฟล์ quizmaster ของคอร์สนี้"));
    document.head.appendChild(script);
  });
}

/* ---------- เรียก API ---------- */
async function fetchStudentDetail() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action: "getStudentDetail", courseId, userId }),
  });
  return res.json();
}

/* ---------- render ---------- */
function render(quizMaster, profile, quizzes) {
  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || profile.nickname || profile.userId;
  const nick = profile.nickname ? ` (${profile.nickname})` : "";
  const courseLabel = COURSES.find(c => c.courseId === courseId)?.label || courseId;

  els.stuName.textContent = `👤 ${fullName}${nick}`;
  els.stuMeta.textContent = courseLabel;

  // สรุป
  let doneCount = 0, totalScore = 0;
  quizMaster.forEach(q => {
    const info = quizzes[q.quizKey];
    if (info && info.submitted) { doneCount++; totalScore += Number(info.score || 0); }
  });
  const total = quizMaster.length;

  els.stuSummary.innerHTML = `
    <div class="pill ok"><span class="num">${doneCount}/${total}</span><span class="lbl">ทำไปแล้ว</span></div>
    <div class="pill"><span class="num">${totalScore}</span><span class="lbl">คะแนนรวม</span></div>
    <div class="pill warn"><span class="num">${total - doneCount}</span><span class="lbl">ยังไม่ทำ</span></div>
  `;

  // รายการ quiz
  if (total === 0) {
    els.quizList.innerHTML = `<p class="state">คอร์สนี้ยังไม่มี quiz</p>`;
    return;
  }

  els.quizList.innerHTML = quizMaster.map((q, i) => {
    const info = quizzes[q.quizKey] || { submitted: false, score: 0, timeSec: 0 };
    if (info.submitted) {
      return `
        <div class="quiz-row done-q">
          <div>
            <div class="q-title">Quiz ${i + 1} : ${escapeHtml(q.title)}</div>
            <div class="q-key">${escapeHtml(q.quizKey)}</div>
          </div>
          <div class="q-meta">
            <div class="q-score">${Number(info.score)} คะแนน</div>
            <div class="q-time">⏱ ${formatTime(info.timeSec)}</div>
          </div>
        </div>
      `;
    }
    return `
      <div class="quiz-row miss-q">
        <div>
          <div class="q-title">Quiz ${i + 1} : ${escapeHtml(q.title)}</div>
          <div class="q-key">${escapeHtml(q.quizKey)}</div>
        </div>
        <div class="q-meta">
          <div class="q-missing">ยังไม่ทำ</div>
        </div>
      </div>
    `;
  }).join("");
}

/* ---------- init ---------- */
async function init() {
  if (!courseId || !userId) {
    els.quizList.innerHTML = `<p class="state">❌ ลิงก์ไม่ถูกต้อง (ไม่มีคอร์ส/นักเรียน)</p>`;
    els.stuMeta.textContent = "";
    return;
  }
  try {
    const [quizMaster, result] = await Promise.all([
      loadQuizMaster(courseId),
      fetchStudentDetail(),
    ]);
    if (!result.ok) throw new Error(result.message || "โหลดข้อมูลไม่สำเร็จ");
    render(quizMaster, result.profile, result.quizzes || {});
  } catch (err) {
    console.error(err);
    els.quizList.innerHTML = `<p class="state">❌ ${escapeHtml(err.message)}</p>`;
    els.stuMeta.textContent = "";
  }
}

// ต้อง login ก่อน
window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    els.quizList.innerHTML = `<p class="state">🔒 กรุณาเข้าสู่ระบบก่อนใช้งานหน้านี้</p>`;
    els.stuMeta.textContent = "";
    return;
  }
  init();
});
