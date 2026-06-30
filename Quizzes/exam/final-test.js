// 📄 final-test.js — เครื่องยนต์ข้อสอบกลาง (Exam Engine)
// ─────────────────────────────────────────────────────────────
//  รับพารามิเตอร์ ?course=<courseId>&test=<testKey>
//  → อ่านทะเบียนจาก quiz-config.js
//  → โหลดไฟล์คำถามของคอร์สนั้น (TEST_META + TEST_DATA)
//  → เช็ค prerequisites ผ่าน Apps Script กลาง
//  → ทำข้อสอบ / ประเมินผลตามหัวข้อหลัก-ย่อย-ทักษะ ที่ไฟล์คำถามประกาศไว้
// ─────────────────────────────────────────────────────────────

const CFG = window.QUIZ_CONFIG;

// ===========================================================
// อ่านพารามิเตอร์ + ผู้ใช้
// ===========================================================
const params   = new URLSearchParams(location.search);
const courseId = params.get("course");
const testKey  = params.get("test");

// ตั้งค่าหลังล็อกอิน Firebase สำเร็จ (uid = userId เดียวกับระบบ quiz/progress)
let userId          = "guest";
let userDisplayName = "นักเรียน";

// ===========================================================
// ตัวแปรควบคุม (เซ็ตหลังโหลดไฟล์คำถามแล้ว)
// ===========================================================
let META = null;            // ข้อมูลชุดสอบ (รวม config + TEST_META)
let QUIZ_DATA = [];         // โจทย์ทั้งหมด
let STORAGE_KEY = "";

let currentQuestionIndex = 0;
let userAnswers = {};
let timeSpent = {};
let questionStartTime = 0;
let mainTimeRemaining = 3600;
let mainTimerInterval = null;
let isSubmitted = false;

// ===========================================================
// Utility
// ===========================================================
function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `${src}?v=${Date.now()}`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("โหลดไฟล์คำถามไม่สำเร็จ: " + src));
    document.head.appendChild(s);
  });
}

// ===========================================================
// หน้า Gate (โหลด / กั้น / error)
// ===========================================================
function gateLoading(title, msg) {
  document.getElementById("gate-spinner").classList.remove("hidden");
  document.getElementById("gate-title").textContent = title;
  document.getElementById("gate-msg").textContent = msg || "";
  document.getElementById("gate-missing").classList.add("hidden");
  document.getElementById("gate-actions").classList.add("hidden");
}

function gateError(title, msg, actionsHtml) {
  const card = document.querySelector(".gate-card");
  card.classList.add("blocked");
  document.getElementById("gate-spinner").classList.add("hidden");
  document.getElementById("gate-title").textContent = title;
  document.getElementById("gate-msg").innerHTML = msg || "";
  const act = document.getElementById("gate-actions");
  if (actionsHtml) { act.innerHTML = actionsHtml; act.classList.remove("hidden"); }
}

function gateMissing(missingList) {
  const card = document.querySelector(".gate-card");
  card.classList.add("blocked");
  document.getElementById("gate-spinner").classList.add("hidden");
  document.getElementById("gate-title").textContent = "🚫 ยังเข้าสอบไม่ได้";
  document.getElementById("gate-msg").textContent =
    "คุณต้องทำแบบทดสอบต่อไปนี้ให้ครบก่อนเข้าสอบ Final";

  const box = document.getElementById("gate-missing");
  box.classList.remove("hidden");
  box.innerHTML =
    `<div class="miss-head">รายการที่ยังไม่ได้ทำ (${missingList.length})</div>` +
    missingList.map(m =>
      `<div class="miss-item"><span class="miss-ico">❗</span>${escapeHtml(m.title || m.quizKey)}</div>`
    ).join("");
}

function showQuizApp() {
  document.getElementById("gate-screen").classList.add("hidden");
  document.getElementById("quiz-app").classList.remove("hidden");
}

function gateRequireLogin() {
  gateError("กรุณาเข้าสู่ระบบก่อน",
    "ต้องเข้าสู่ระบบด้วยบัญชีของคุณก่อนจึงจะเข้าทำข้อสอบได้",
    `<a class="btn primary" href="${CFG.loginUrl || '/'}">เข้าสู่ระบบ</a>` +
    `<button class="btn secondary" onclick="location.reload()">↻ เข้าสู่ระบบแล้ว</button>`);
}

// ===========================================================
// เรียก Apps Script กลาง (POST แบบ text/plain เพื่อเลี่ยง CORS preflight)
// ===========================================================
async function callApi(payload) {
  const res = await fetch(CFG.examApiUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// ===========================================================
// เริ่มต้น — รอ Firebase auth ก่อน แล้วค่อยเข้าระบบข้อสอบ
// ===========================================================
function whenAuthReady(cb) {
  if (window.firebaseOnAuthStateChanged && window.firebaseAuth) return cb();
  setTimeout(() => whenAuthReady(cb), 50);
}

let authHandled = false;

window.addEventListener("DOMContentLoaded", () => {
  gateLoading("กำลังตรวจสอบการเข้าสู่ระบบ...", "");
  whenAuthReady(() => {
    window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
      if (authHandled) return;        // กันทำงานซ้ำเมื่อ token refresh
      if (!user) { gateRequireLogin(); return; }
      authHandled = true;
      userId = user.uid;
      userDisplayName = user.displayName || user.email || "นักเรียน";
      init();
    });
  });
});

async function init() {
  // 1) ตรวจพารามิเตอร์
  if (!courseId || !testKey) {
    gateError("ลิงก์ไม่ถูกต้อง",
      "URL ต้องระบุคอร์สและชุดสอบ เช่น<br><code>final-test.html?course=m5-summer&test=test01</code>");
    return;
  }

  // 2) ตรวจทะเบียนข้อสอบใน config
  const reg = CFG.getTest(courseId, testKey);
  if (!reg) {
    gateError("ไม่พบข้อสอบนี้",
      `ยังไม่ได้ลงทะเบียน <code>${escapeHtml(courseId)}__${escapeHtml(testKey)}</code> ใน quiz-config.js`);
    return;
  }

  // 3) โหลดไฟล์คำถาม
  gateLoading("กำลังโหลดข้อสอบ...", "กำลังดึงชุดคำถาม");
  try {
    await loadScript(CFG.getQuestionFile(courseId, testKey));
  } catch (e) {
    gateError("โหลดข้อสอบไม่สำเร็จ",
      `ไม่พบไฟล์ <code>${escapeHtml(CFG.getQuestionFile(courseId, testKey))}</code>`);
    return;
  }

  if (!window.TEST_DATA || !window.TEST_DATA.length) {
    gateError("ข้อสอบว่างเปล่า", "ไฟล์คำถามยังไม่มีข้อมูล (TEST_DATA)");
    return;
  }

  // 4) รวม meta จาก config + ไฟล์คำถาม
  META = Object.assign({ chapters: {}, radarAxes: [] }, reg, window.TEST_META || {});
  META.courseId = courseId;
  META.testKey = testKey;
  QUIZ_DATA = window.TEST_DATA;
  mainTimeRemaining = META.timeLimitSec || 3600;
  STORAGE_KEY = `WDW_EXAM_${userId}_${courseId}_${testKey}`;

  // 5) ถ้าเคยส่งแล้ว → เข้าโหมดทบทวนทันที (ไม่ต้องเช็ค prerequisites ซ้ำ)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const st = JSON.parse(saved);
      if (st.isSubmitted) {
        userAnswers = st.answers || {};
        timeSpent = st.timeSpent || {};
        startQuiz(true, st);
        return;
      }
    } catch (_) {}
  }

  // 6) เช็ค prerequisites
  const prereq = reg.prerequisiteQuizzes || [];
  if (prereq.length === 0) {
    startQuiz(false);
    return;
  }

  gateLoading("ตรวจสอบสิทธิ์การเข้าสอบ...", "กำลังตรวจว่าทำ quiz ที่กำหนดครบหรือยัง");
  try {
    const r = await callApi({
      action: "checkPrerequisites",
      userId, courseId, quizKeys: prereq,
    });
    console.log("checkPrerequisites response:", r);
    if (r && r.ok && Array.isArray(r.missing) && r.missing.length > 0) {
      gateMissing(r.missing);
    } else if (r && r.ok) {
      startQuiz(false);
    } else {
      throw new Error((r && r.message) || "รูปแบบข้อมูลไม่ถูกต้อง");
    }
  } catch (e) {
    console.error("checkPrerequisites error:", e);
    gateError("ตรวจสอบสิทธิ์ไม่สำเร็จ",
      `รายละเอียด: <code>${escapeHtml(e.message)}</code><br>uid: <code>${escapeHtml(userId)}</code>`,
      `<button class="btn primary" onclick="location.reload()">↻ ลองใหม่</button>`);
  }
}

// ===========================================================
// เริ่มทำข้อสอบ
// ===========================================================
function startQuiz(reviewMode, savedState) {
  showQuizApp();

  document.getElementById("student-name").textContent = `ผู้สอบ: ${userDisplayName}`;
  document.getElementById("quiz-title").textContent = META.title || "Final Test";

  buildNavigator();

  document.getElementById("choices-list").addEventListener("change", function (e) {
    if (e.target.name === "choice" && !isSubmitted) {
      const qId = QUIZ_DATA[currentQuestionIndex].id;
      userAnswers[qId] = e.target.value;
      saveStateToLocal();
      updateNavigator();
    }
  });

  bindControls();

  if (reviewMode && savedState) {
    isSubmitted = true;
    mainTimeRemaining = 0;
    document.getElementById("time-display").textContent = "ส่งแล้ว";
    showResultScreen(savedState.radarData, savedState.totalScore);
    return;
  }

  if (savedState && savedState.timeLeft != null) mainTimeRemaining = savedState.timeLeft;

  renderQuestion(currentQuestionIndex);
  startMainTimer();
}

// ===========================================================
// บันทึกสถานะ / ระบบเวลา
// ===========================================================
function saveStateToLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    answers: userAnswers,
    timeSpent: timeSpent,
    timeLeft: mainTimeRemaining,
    isSubmitted: isSubmitted,
  }));
}

function startMainTimer() {
  if (isSubmitted) return;
  mainTimerInterval = setInterval(() => {
    if (isSubmitted) return;
    mainTimeRemaining--;
    const m = Math.floor(mainTimeRemaining / 60);
    const s = mainTimeRemaining % 60;
    document.getElementById("time-display").textContent = `${m}:${s < 10 ? "0" + s : s}`;

    if (mainTimeRemaining % 10 === 0) saveStateToLocal();

    if (mainTimeRemaining <= 0) {
      clearInterval(mainTimerInterval);
      alert("หมดเวลา! ระบบจะส่งคำตอบโดยอัตโนมัติ");
      submitQuiz();
    }
  }, 1000);
}

function recordTimeSpent() {
  if (isSubmitted) return;
  const qId = QUIZ_DATA[currentQuestionIndex].id;
  const spent = Math.floor((Date.now() - questionStartTime) / 1000);
  timeSpent[qId] = (timeSpent[qId] || 0) + spent;
}

// ===========================================================
// Render ข้อสอบ
// ===========================================================
function skillLabel(skill) {
  return (CFG.skills[skill] && CFG.skills[skill].label) || skill || "";
}

function renderQuestion(index) {
  const q = QUIZ_DATA[index];
  questionStartTime = Date.now();

  document.getElementById("question-number").textContent = `ข้อที่ ${index + 1} / ${QUIZ_DATA.length}`;
  document.getElementById("question-category").textContent =
    `${q.subtopic || ""} | ${skillLabel(q.skill)}`;

  const formattedPrompt = String(q.prompt).replace(/\\n/g, "<br>").replace(/\n/g, "<br>");
  document.getElementById("question-text").innerHTML = formattedPrompt;

  const imgContainer = document.getElementById("question-image-container");
  imgContainer.innerHTML = q.image
    ? `<img src="${escapeHtml(q.image)}" alt="รูปประกอบ" style="max-width:100%; border-radius:8px; margin-top:15px; border:1px solid #ccc;" onerror="this.style.display='none'">`
    : "";

  let choicesHtml = "";
  q.choices.forEach(choice => {
    const isChecked = userAnswers[q.id] === choice.key ? "checked" : "";
    const disabledAttr = isSubmitted ? "disabled" : "";
    const disabledClass = isSubmitted ? "disabled" : "";
    choicesHtml += `
      <label class="choice-item ${disabledClass}">
        <input type="radio" name="choice" value="${choice.key}" ${isChecked} ${disabledAttr}>
        ${choice.text}
      </label>`;
  });
  document.getElementById("choices-list").innerHTML = choicesHtml;

  const fbBox = document.getElementById("feedback-box");
  if (isSubmitted) {
    document.getElementById("review-banner").classList.remove("hidden");
    fbBox.classList.remove("hidden");
    if (userAnswers[q.id] === q.answer) {
      fbBox.className = "feedback-box correct";
      fbBox.innerHTML = "✅ คุณตอบถูก";
    } else {
      fbBox.className = "feedback-box incorrect";
      fbBox.innerHTML = "❌ คุณตอบผิด (ไม่อนุญาตให้ดูเฉลยที่ถูกต้อง)";
    }
  } else {
    fbBox.classList.add("hidden");
  }

  document.getElementById("prev-btn").disabled = (index === 0);

  if (index === QUIZ_DATA.length - 1) {
    document.getElementById("next-btn").classList.add("hidden");
    if (!isSubmitted) document.getElementById("submit-btn").classList.remove("hidden");
  } else {
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
  }

  if (isSubmitted) {
    document.getElementById("submit-btn").classList.add("hidden");
    document.getElementById("back-to-result-btn").classList.remove("hidden");
  }

  updateNavigator();

  if (window.MathJax && typeof MathJax.typesetPromise === "function") {
    MathJax.typesetPromise().catch(err => console.log("MathJax Error:", err));
  }
}

// ===========================================================
// ปุ่มควบคุม
// ===========================================================
function bindControls() {
  document.getElementById("prev-btn").addEventListener("click", () => {
    recordTimeSpent();
    if (currentQuestionIndex > 0) renderQuestion(--currentQuestionIndex);
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    recordTimeSpent();
    if (currentQuestionIndex < QUIZ_DATA.length - 1) renderQuestion(++currentQuestionIndex);
  });
  document.getElementById("back-to-result-btn").addEventListener("click", () => {
    document.getElementById("quiz-app").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
  });
  document.getElementById("review-answers-btn").addEventListener("click", () => {
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("quiz-app").style.display = "block";
    renderQuestion(0);
  });
  document.getElementById("submit-btn").addEventListener("click", () => {
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < QUIZ_DATA.length) {
      if (!confirm(`คุณทำไปเพียง ${answeredCount} จาก ${QUIZ_DATA.length} ข้อ ยืนยันที่จะส่งหรือไม่?`)) return;
    } else {
      if (!confirm("คุณตรวจสอบคำตอบเรียบร้อยและต้องการส่งข้อสอบใช่หรือไม่?")) return;
    }
    submitQuiz();
  });
}

// ===========================================================
// Navigator
// ===========================================================
function buildNavigator() {
  let navHtml = "";
  QUIZ_DATA.forEach((q, i) => {
    navHtml += `<button class="nav-btn" id="nav-btn-${i}" onclick="jumpTo(${i})">${i + 1}</button>`;
  });
  document.getElementById("question-nav-grid").innerHTML = navHtml;
}

function jumpTo(index) {
  recordTimeSpent();
  currentQuestionIndex = index;
  renderQuestion(currentQuestionIndex);
}

function updateNavigator() {
  QUIZ_DATA.forEach((q, i) => {
    const btn = document.getElementById(`nav-btn-${i}`);
    if (!btn) return;
    btn.className = "nav-btn";
    if (i === currentQuestionIndex) btn.classList.add("active");
    else if (userAnswers[q.id]) btn.classList.add("answered");

    if (isSubmitted && userAnswers[q.id]) {
      if (userAnswers[q.id] === q.answer) btn.classList.add("correct-ans");
      else btn.classList.add("wrong-ans");
    }
  });
}

// ===========================================================
// ประมวลผลคะแนน + หัวข้อหลัก/ย่อย/ทักษะ (อิงตามที่ไฟล์คำถามประกาศ)
// ===========================================================
function calculateRank(percent) { return CFG.calcRank(percent); }

// เลือก persona จาก "ทักษะ" + คะแนนรวม + เวลาเฉลี่ย (ใช้ได้ทุกวิชา)
function determinePersona(radar, totalPercent, timeAvg) {
  const P = id => CFG.personas.find(a => a.id === id);
  const theory = radar.theory || 0, calc = radar.calc || 0, apply = radar.apply || 0;

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

function computeStats() {
  let totalScore = 0;

  // ทักษะ — จาก config
  const statSkills = {};
  Object.keys(CFG.skills).forEach(k => {
    statSkills[k] = { c: 0, t: 0, name: CFG.skills[k].label };
  });

  // หัวข้อหลัก — จากไฟล์คำถาม (META.chapters); subtopics รวมอัตโนมัติ
  const statChapters = {};
  Object.keys(META.chapters || {}).forEach(k => {
    statChapters[k] = { c: 0, t: 0, name: (META.chapters[k].label || k), subtopics: {} };
  });

  QUIZ_DATA.forEach(q => {
    const isCorrect = (userAnswers[q.id] === q.answer);
    if (isCorrect) totalScore++;

    if (statSkills[q.skill]) {
      statSkills[q.skill].t++;
      if (isCorrect) statSkills[q.skill].c++;
    }
    if (statChapters[q.chapter]) {
      const ch = statChapters[q.chapter];
      ch.t++;
      if (isCorrect) ch.c++;
      const sub = q.subtopic || "อื่นๆ";
      if (!ch.subtopics[sub]) ch.subtopics[sub] = { c: 0, t: 0 };
      ch.subtopics[sub].t++;
      if (isCorrect) ch.subtopics[sub].c++;
    }
  });

  const pct = s => (s.t > 0 ? Math.round((s.c / s.t) * 100) : 0);
  const details = Object.assign({}, statSkills, statChapters);

  const radarData = { details };
  Object.keys(statSkills).forEach(k => { radarData[k] = pct(statSkills[k]); });
  Object.keys(statChapters).forEach(k => { radarData[k] = pct(statChapters[k]); });

  return { totalScore, radarData };
}

function submitQuiz() {
  if (isSubmitted) return;
  isSubmitted = true;
  recordTimeSpent();
  clearInterval(mainTimerInterval);

  const { totalScore, radarData } = computeStats();

  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  state.isSubmitted = true;
  state.radarData = radarData;
  state.totalScore = totalScore;
  state.answers = userAnswers;
  state.timeSpent = timeSpent;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  const rankObj = calculateRank((totalScore / QUIZ_DATA.length) * 100);

  const payload = {
    action: "submitExam",
    userId, displayName: userDisplayName,
    courseId: META.courseId, testKey: META.testKey,
    title: META.title,
    totalScore, totalQuestions: QUIZ_DATA.length,
    rank: rankObj.rank,
    skills: radarData,
    timeSpent: timeSpent,
    answers: userAnswers,
  };

  document.getElementById("quiz-app").style.display = "none";
  const loadingDiv = document.createElement("div");
  loadingDiv.innerHTML = `<h2 style="text-align:center; padding:50px;">กำลังส่งคำตอบและประมวลผล...</h2>`;
  document.body.appendChild(loadingDiv);

  callApi(payload)
    .catch(() => {})   // ส่งไม่สำเร็จก็ยังโชว์ผลให้นักเรียนได้ (มี local backup)
    .finally(() => {
      loadingDiv.remove();
      showResultScreen(radarData, totalScore);
    });
}

// ===========================================================
// หน้าแสดงผล (Result)
// ===========================================================
function showResultScreen(radarData, totalScore) {
  document.getElementById("quiz-app").style.display = "none";
  const resultScreen = document.getElementById("result-screen");
  resultScreen.classList.remove("hidden");
  resultScreen.style.display = "block";

  if (!radarData || !radarData.details) {
    radarData = { details: {} };
  }

  const totalPercent = (totalScore / QUIZ_DATA.length) * 100;
  const rankObj = calculateRank(totalPercent);

  const finalScoreText = document.getElementById("final-score-text");
  if (finalScoreText) finalScoreText.textContent = `${totalScore} / ${QUIZ_DATA.length}`;

  const finalRank = document.getElementById("final-rank");
  if (finalRank) { finalRank.textContent = rankObj.rank; finalRank.style.color = rankObj.color; }

  const totalSec = Object.values(timeSpent).reduce((a, b) => a + b, 0);
  const avgTime = totalSec > 0 ? (totalSec / QUIZ_DATA.length) : 0;

  const persona = determinePersona(radarData, totalPercent, avgTime);
  if (persona) {
    document.getElementById("persona-img").src = persona.img;
    document.getElementById("persona-img").style.visibility = "visible";
    document.getElementById("persona-name").textContent = persona.name;
    document.getElementById("persona-desc").textContent = persona.desc;
    document.getElementById("persona-strength").textContent = persona.strength;
    document.getElementById("persona-weakness").textContent = persona.weakness;
  }

  // ตารางรายด้าน = ทักษะทั้งหมด + หัวข้อหลักทั้งหมด (เห็นครบเสมอ)
  const statCats = [...Object.keys(CFG.skills), ...Object.keys(META.chapters || {})];
  // แกน Radar = radarAxes (ถ้าไม่กำหนด ใช้เท่ากับ statCats)
  const radarCats = (META.radarAxes && META.radarAxes.length) ? META.radarAxes : statCats;

  // กล่องวิเคราะห์รายด้าน
  let statsHtml = "";
  statCats.forEach(cat => {
    const p = radarData[cat] || 0;
    const rObj = calculateRank(p);
    const d = radarData.details[cat];
    const title = (d && d.name) ? d.name : (skillLabel(cat) || cat);

    let subtopicsHtml = "";
    if (d && d.subtopics && Object.keys(d.subtopics).length) {
      subtopicsHtml = `<div style="margin-top:10px; border-top:1px dashed #e2e8f0; padding-top:8px;">`;
      for (const sub in d.subtopics) {
        const sc = d.subtopics[sub].c, st = d.subtopics[sub].t;
        const color = sc === st ? "#16a34a" : (sc > 0 ? "#ca8a04" : "#dc2626");
        subtopicsHtml += `
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#64748b; margin-bottom:4px; text-align:left;">
            <span>- ${escapeHtml(sub)}</span>
            <strong style="color:${color};">${sc}/${st}</strong>
          </div>`;
      }
      subtopicsHtml += `</div>`;
    }

    statsHtml += `
      <div class="stat-item" style="display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div class="stat-title">${escapeHtml(title)}</div>
          <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${p}%; background-color:${rObj.color}"></div></div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="stat-score">${p}%</span>
            <span class="stat-rank" style="background-color:${rObj.color}20; color:${rObj.color};">${rObj.rank}</span>
          </div>
        </div>
        ${subtopicsHtml}
      </div>`;
  });
  const statsBox = document.getElementById("stats-breakdown");
  if (statsBox) statsBox.innerHTML = statsHtml;

  // Radar Chart
  const canvas = document.getElementById("radarChart");
  if (canvas && window.Chart) {
    const labels = radarCats.map(cat => {
      const d = radarData.details[cat];
      return (d && d.name) ? d.name : (skillLabel(cat) || cat);
    });
    const data = radarCats.map(cat => radarData[cat] || 0);
    new Chart(canvas.getContext("2d"), {
      type: "radar",
      data: {
        labels,
        datasets: [{
          label: "ความสามารถของคุณ (%)",
          data,
          backgroundColor: "rgba(30, 61, 143, 0.2)",
          borderColor: "rgba(30, 61, 143, 1)",
          pointBackgroundColor: "rgba(217, 76, 76, 1)",
          borderWidth: 2,
        }],
      },
      options: { scales: { r: { suggestedMin: 0, suggestedMax: 100 } } },
    });
  }
}