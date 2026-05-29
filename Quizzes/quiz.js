const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6di6lq-HYIUPFuXRuy0rzg5n3Xw4IsqkvcTbTp3AAzakhXfijGx7XwcTT4IWr-h_3oQ/exec";

// ดึง Parameter จาก URL
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("course") || "m5-summer"; // ค่าเริ่มต้น
const quizKey = urlParams.get("quiz") || "quiz1";       // ค่าเริ่มต้น

let currentUser = null;
let reviewMode = false;
let timerInterval = null;
let startTime = null;

let QUIZ_META = null;
let QUIZ_DATA = null;
let MAX_SCORE = 0;

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// คำนวณเพชรแบบอิงตามเปอร์เซ็นต์ (รองรับจำนวนข้อที่เปลี่ยนไป)
function getRewardByScore(score, max) {
  const percent = score / max;
  if (percent >= 0.9) return { diamonds: 2, firework: "gold" };
  if (percent >= 0.7) return { diamonds: 1, firework: "silver" };
  if (percent >= 0.5) return { diamonds: 0.5, firework: "bronze" };
  return { diamonds: 0, firework: "none" };
}

function showMessage(text, modeText = "") {
  document.getElementById("studentInfo").textContent = text;
  document.getElementById("modeInfo").textContent = modeText;
}

function renderQuiz(savedAnswers = {}, disableInputs = false, resultDetail = {}) {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  QUIZ_DATA.forEach((item, index) => {
    const userAnswer = savedAnswers[item.id] || "";
    const detail = resultDetail[item.id];

    // แก้ไข Path รูปภาพอัตโนมัติ แปลง .../images/ หรือ ../images/ ให้ชี้ไปที่โฟลเดอร์วิชาปัจจุบัน
    let fixedPrompt = item.prompt;
    if (fixedPrompt) {
      fixedPrompt = fixedPrompt.replace(/(\.\.\.\/|\.\.\/|\.\/)?images\//g, `./courses/${courseId}/images/`);
    }

    const choicesHtml = item.choices.map(choice => `
      <label class="option-label">
        <input
          type="radio"
          name="${item.id}"
          value="${choice.key}"
          ${userAnswer === choice.key ? "checked" : ""}
          ${disableInputs ? "disabled" : ""}
          ${!disableInputs ? "required" : ""}
        />
        <span><strong>${choice.key}.</strong> ${escapeHtml(choice.text)}</span>
      </label>
    `).join("");

    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <h3>ข้อ ${index + 1}</h3>
      <p class="question-text">${fixedPrompt}</p> 
      <div class="options-grid">${choicesHtml}</div>
      ${
        disableInputs
          ? `<div class="review-badge ${detail ? "correct" : "incorrect"}">
               ${detail ? "✅ คำตอบของคุณถูกต้อง" : "❌ คำตอบของคุณไม่ถูกต้อง"}
             </div>`
          : ""
      }
    `;
    form.appendChild(card);
  });

  // รัน MathJax เมื่อข้อสอบ Render เสร็จ
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function collectAnswers() {
  const answers = {};
  QUIZ_DATA.forEach((item) => {
    const selected = document.querySelector(`input[name="${item.id}"]:checked`);
    answers[item.id] = selected ? selected.value : "";
  });
  return answers;
}

function gradeQuiz(answers) {
  let score = 0;
  const detail = {};

  QUIZ_DATA.forEach((item) => {
    const correct = answers[item.id] === item.answer;
    detail[item.id] = correct;
    if (correct) score += 1;
  });

  return { score, detail };
}

// ระบบจับเวลาใหม่ที่เสถียร ใช้ Date.now() 
function startTimer() {
  if (!QUIZ_META.enableTimer) return;
  document.getElementById("timerBox").classList.remove("hidden");
  
  startTime = Date.now();
  const endTime = startTime + (QUIZ_META.timeLimitSec * 1000);

  timerInterval = setInterval(() => {
    const remainSec = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    document.getElementById("timerText").textContent = formatTime(remainSec);

    if (remainSec <= 0) {
      clearInterval(timerInterval);
      autoSubmitByTimeout();
    }
  }, 1000);
}

function startStopwatch() {
  if (QUIZ_META.enableTimer) {
    startTimer();
    return;
  }

  document.getElementById("timerBox").classList.remove("hidden");
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timerText").textContent = formatTime(elapsed);
  }, 1000);
}

async function postJSON(payload) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

function redirectToLeaderboard(score, diamonds, timeSec, firework) {
  const params = new URLSearchParams({
    course: courseId,
    quiz: quizKey,
    score: String(score),
    diamonds: String(diamonds),
    timeSec: String(timeSec),
    firework
  });
  window.location.href = `./leaderboard.html?${params.toString()}`;
}

async function handleSubmit(e) {
  e.preventDefault();
  if (reviewMode) return;

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "กำลังส่งคำตอบ...";

  const displayName = (document.getElementById("displayNameInput")?.value || "").trim();

  if (!displayName) {
    alert("กรุณากรอกชื่อที่แสดงบน Leaderboard");
    submitBtn.disabled = false;
    submitBtn.textContent = "ส่งคำตอบ";
    return;
  }

  clearInterval(timerInterval);
  const elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);

  const answers = collectAnswers();
  const unanswered = Object.values(answers).filter(v => !v).length;
  if (unanswered > 0) {
    alert("กรุณาตอบคำถามให้ครบทุกข้อก่อนส่ง");
    submitBtn.disabled = false;
    submitBtn.textContent = "ส่งคำตอบ";
    startStopwatch(); // กลับมานับเวลาต่อ
    return;
  }

  const { score, detail } = gradeQuiz(answers);
  const reward = getRewardByScore(score, MAX_SCORE);

  try {
    const result = await postJSON({
      action: "submitQuiz",
      userId: currentUser.uid,
      displayName,
      courseId: courseId, 
      quizKey: quizKey,   
      score,
      diamondsEarned: reward.diamonds,
      timeSec: elapsedTimeSec,
      answers,
      detail
    });

    if (!result.ok) throw new Error(result.message || "Submit failed");
    redirectToLeaderboard(score, reward.diamonds, elapsedTimeSec, reward.firework);
  } catch (error) {
    console.error(error);
    submitBtn.disabled = false;
    submitBtn.textContent = "ส่งคำตอบ";
    alert(error.message || "เกิดข้อผิดพลาดในการส่งคำตอบ");
  }
}

async function autoSubmitByTimeout() {
  if (reviewMode) return;
  const fakeEvent = { preventDefault() {} };
  await handleSubmit(fakeEvent);
}

// ----------------------------------------------------
// ระบบโหลดข้อมูล (Data Loader)
// ----------------------------------------------------

async function initQuizSystem(user, quizData) {
  QUIZ_META = quizData.meta;
  QUIZ_DATA = quizData.data;
  MAX_SCORE = QUIZ_DATA.length;

  document.getElementById("courseTitle").textContent = `Course : ${courseId.toUpperCase()}`;
  document.getElementById("quizTitle").textContent = QUIZ_META.title;
  
  // อัพเดทปุ่ม Leaderboard ให้ส่ง Params ไปด้วย
  document.getElementById("leaderboardBtn").href = `./leaderboard.html?course=${courseId}&quiz=${quizKey}`;

  // เปลี่ยนพื้นหลังถ้าระบุไว้
  if (QUIZ_META.bgImage) {
    document.body.style.backgroundImage = `linear-gradient(rgba(8,10,18,0.82), rgba(8,10,18,0.82)), url("${QUIZ_META.bgImage}")`;
  }

  showMessage(`ผู้ใช้: ${user.email || user.uid}`, "กำลังโหลดสถานะควิซ...");

  try {
    const status = await postJSON({
      action: "getQuizStatus",
      userId: user.uid,
      courseId: courseId,
      quizKey: quizKey
    });

    if (!status.ok) throw new Error(status.message || "Cannot load quiz status");

    if (status.submitted) {
      reviewMode = true;
      renderQuiz(status.answers || {}, true, status.detail || {});

      if (status.displayName) {
        const nameInput = document.getElementById("displayNameInput");
        if (nameInput) {
          nameInput.value = status.displayName;
          nameInput.disabled = true;
        }
      }

      document.getElementById("actionsBar").classList.add("hidden");
      showMessage(`ผู้ใช้: ${user.email || user.uid}`, `คะแนน ${status.score ?? 0}/${MAX_SCORE} | ใช้เวลา ${formatTime(status.timeSec ?? 0)}`);

      document.getElementById("resultInline").classList.remove("hidden");
      document.getElementById("resultInline").innerHTML = `
        <h2>คุณส่งคำตอบไปแล้ว</h2>
        <p>ชื่อที่แสดงบน Leaderboard: <strong>${escapeHtml(status.displayName || "-")}</strong></p>
        <p>คะแนนของคุณ: <strong>${status.score ?? 0}/${MAX_SCORE}</strong></p>
        <p>เวลาที่ใช้: <strong>${formatTime(status.timeSec ?? 0)}</strong></p>
        <p class="small-note">ระบบแสดงเฉพาะตัวเลือกที่คุณเคยตอบ พร้อมสถานะถูก/ผิด โดยไม่แสดงเฉลยจริง</p>
        <div class="actions">
          <a class="btn primary" href="./leaderboard.html?course=${encodeURIComponent(courseId)}&quiz=${encodeURIComponent(quizKey)}">ไปหน้า Leaderboard</a>
        </div>
      `;
      return;
    }

    renderQuiz();
    showMessage(`ผู้ใช้: ${user.email || user.uid}`, `คุณสามารถทำควิซนี้ได้ 1 ครั้ง (คะแนนเต็ม ${MAX_SCORE})`);
    startStopwatch();
  } catch (error) {
    console.error(error);
    showMessage("โหลดควิซไม่สำเร็จ", "กรุณาลองใหม่อีกครั้ง");
  }
}

function loadDataScript(user) {
  const script = document.createElement("script");
  script.src = `./courses/${courseId}/data.js`;
  
  script.onload = () => {
    const currentQuizData = window.COURSE_DATA ? window.COURSE_DATA[quizKey] : null;
    if (!currentQuizData) {
      alert(`ไม่พบข้อสอบ: ${quizKey} ในวิชา ${courseId}`);
      window.location.href = `./leaderboard.html?course=${courseId}&quiz=${quizKey}`;
      return;
    }
    initQuizSystem(user, currentQuizData);
  };
  
  script.onerror = () => {
    alert(`ไม่พบไฟล์ข้อมูลของวิชา: ${courseId}`);
  };
  
  document.head.appendChild(script);
}

document.getElementById("quizForm").addEventListener("submit", handleSubmit);

// จุดเริ่มต้นของระบบ
window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    // ซ่อนปุ่มต่างๆ
    document.getElementById("actionsBar").classList.add("hidden");
    
    // เปลี่ยนข้อความบอกนักเรียน
    showMessage("ยังไม่ได้ล็อกอิน", "กำลังพากลับไปหน้าเข้าสู่ระบบ...");
    document.getElementById("quizTitle").textContent = "กรุณาเข้าสู่ระบบ";
    document.getElementById("courseTitle").textContent = "Well-Do-Win Academy";

    // หน่วงเวลา 1.5 วินาที แล้ว Redirect ไปหน้า Login
    setTimeout(() => {
      window.location.href = "./login.html"; // แก้ไขพาธให้ตรงกับหน้า Login จริง
    }, 1500);
    
    return;
  }
  
  currentUser = user; // บันทึก currentUser ไว้ใช้
  loadDataScript(user);
});
