const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6di6lq-HYIUPFuXRuy0rzg5n3Xw4IsqkvcTbTp3AAzakhXfijGx7XwcTT4IWr-h_3oQ/exec";

let currentUser = null;
let reviewMode = false;
let startTime = null;
let elapsedTimeSec = 0;
let timerInterval = null;

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

// คำนวณรางวัล (เพชรและพลุ) ตามสัดส่วนคะแนนเต็ม 30 ข้อ
function getRewardByScore(score) {
  if (score >= 24) return { diamonds: 2, firework: "gold" };     // 80%+
  if (score >= 18) return { diamonds: 1, firework: "silver" };   // 60%+
  if (score >= 12) return { diamonds: 0.5, firework: "bronze" }; // 40%+
  return { diamonds: 0, firework: "none" };
}

function showMessage(text, modeText = "") {
  document.getElementById("studentInfo").textContent = text;
  document.getElementById("modeInfo").textContent = modeText;
}

// ฟังก์ชันบังคับให้ MathJax แปลงสมการ (รองรับ LaTeX)
function renderMath() {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
  } else {
    setTimeout(renderMath, 500);
  }
}

function renderQuiz(savedAnswers = {}, disableInputs = false, resultDetail = {}) {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  if (typeof QUIZ_DATA === 'undefined') {
    console.error("หา QUIZ_DATA ไม่เจอ กรุณาตรวจสอบว่าโหลด questions.js หรือยัง");
    return;
  }

  QUIZ_DATA.forEach((item, index) => {
    const userAnswer = savedAnswers[item.id] || "";
    const isCorrect = resultDetail[item.id];

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
      <p class="question-text">${item.prompt}</p> 
      ${item.image ? `<img src="${item.image}" alt="question image" class="question-image" />` : ""}
      <div class="options-grid">${choicesHtml}</div>
      ${
        disableInputs
          ? `<div class="review-badge ${isCorrect ? "correct" : "incorrect"}">
               ${isCorrect ? "✅ คำตอบของคุณถูกต้อง" : `❌ คำตอบของคุณไม่ถูกต้อง (เฉลย: ${item.answer})`}
             </div>`
          : ""
      }
    `;

    form.appendChild(card);
  });

  renderMath();
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

// ลอจิกเวลาแบบใหม่ ป้องกัน Error เวลาพับจอหรือสลับแท็บ
function startTimer() {
  if (!QUIZ_META.enableTimer) return;

  const timerBox = document.getElementById("timerBox");
  const timerText = document.getElementById("timerText");
  timerBox.classList.remove("hidden");
  
  startTime = Date.now();
  const endTime = startTime + (QUIZ_META.timeLimitSec * 1000);

  timerInterval = setInterval(() => {
    const remain = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    timerText.textContent = formatTime(remain);

    if (remain <= 0) {
      clearInterval(timerInterval);
      alert("หมดเวลาทำข้อสอบ ระบบกำลังส่งคำตอบอัตโนมัติ");
      autoSubmitByTimeout();
    }
  }, 1000);
}

function startStopwatch() {
  if (QUIZ_META.enableTimer) {
    startTimer();
    return;
  }
  
  startTime = Date.now();
  document.getElementById("timerBox").classList.remove("hidden");
  timerInterval = setInterval(() => {
    elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timerText").textContent = formatTime(elapsedTimeSec);
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

async function getQuizStatus(userId) {
  return postJSON({
    action: "getQuizStatus",
    userId,
    courseId: QUIZ_META.courseId,
    quizKey: QUIZ_META.quizKey
  });
}

async function submitQuizToBackend(payload) {
  return postJSON({
    action: "submitQuiz",
    ...payload
  });
}

function redirectToLeaderboard(score, diamonds, timeSec, firework) {
  const params = new URLSearchParams({
    courseId: QUIZ_META.courseId,
    quizKey: QUIZ_META.quizKey,
    score: String(score),
    diamonds: String(diamonds),
    timeSec: String(timeSec),
    firework
  });
  window.location.href = `../leaderboard-${QUIZ_META.quizKey}.html?${params.toString()}`;
}

async function handleSubmit(e) {
  if (e) e.preventDefault();
  if (reviewMode) return;

  const submitBtn = document.getElementById("submitBtn");
  const displayName = (document.getElementById("displayNameInput")?.value || "").trim();

  if (!displayName) {
    alert("กรุณากรอกชื่อที่แสดงบน Leaderboard");
    return;
  }

  const answers = collectAnswers();
  const unanswered = Object.values(answers).filter(v => !v).length;
  if (unanswered > 0) {
    const confirmSubmit = confirm(`คุณยังไม่ได้ตอบคำถามอีก ${unanswered} ข้อ ต้องการส่งคำตอบเลยหรือไม่?`);
    if (!confirmSubmit) return;
  } else {
    if (!confirm("ยืนยันการส่งคำตอบ? คุณสามารถส่งได้เพียงครั้งเดียวเท่านั้น")) return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "กำลังส่งคำตอบ...";

  clearInterval(timerInterval);
  elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);

  const { score, detail } = gradeQuiz(answers);
  const reward = getRewardByScore(score);

  try {
    const result = await submitQuizToBackend({
      userId: currentUser.uid,
      displayName,
      courseId: QUIZ_META.courseId,
      quizKey: QUIZ_META.quizKey,
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
    alert("เกิดข้อผิดพลาด: " + error.message);
    submitBtn.disabled = false;
    submitBtn.textContent = "ส่งคำตอบ";
  }
}

async function autoSubmitByTimeout() {
  if (reviewMode) return;
  const nameInput = document.getElementById("displayNameInput");
  if (!nameInput.value) {
    nameInput.value = "Anonymous_" + Math.floor(Math.random() * 1000);
  }
  await handleSubmit();
}

async function initQuiz(user) {
  currentUser = user;
  document.getElementById("quizTitle").textContent = QUIZ_META.title;
  showMessage(`ผู้ใช้: ${user.email || user.uid}`, "กำลังโหลดสถานะควิซ...");

  try {
    const status = await getQuizStatus(user.uid);
    if (!status.ok) throw new Error(status.message);

    if (status.submitted) {
      reviewMode = true;
      renderQuiz(status.answers || {}, true, status.detail || {});
      
      const nameInput = document.getElementById("displayNameInput");
      if (nameInput) {
        nameInput.value = status.displayName || "";
        nameInput.disabled = true;
      }

      document.getElementById("actionsBar").classList.add("hidden");
      showMessage(
        `ผู้ใช้: ${user.email || user.uid}`,
        `คุณเคยทำควิซนี้แล้ว | คะแนน ${status.score ?? 0}/${QUIZ_DATA.length} | ใช้เวลา ${formatTime(status.timeSec ?? 0)}`
      );

      document.getElementById("resultInline").classList.remove("hidden");
      document.getElementById("resultInline").innerHTML = `
        <h2>คุณส่งคำตอบไปแล้ว</h2>
        <p>ชื่อบนลีดเดอร์บอร์ด: <strong>${escapeHtml(status.displayName || "-")}</strong></p>
        <p>คะแนนของคุณ: <strong>${status.score ?? 0}/${QUIZ_DATA.length}</strong></p>
        <p>เวลาที่ใช้: <strong>${formatTime(status.timeSec ?? 0)}</strong></p>
        <div class="actions">
          <a class="btn primary" href="../leaderboard-${QUIZ_META.quizKey}.html?courseId=${encodeURIComponent(QUIZ_META.courseId)}&quizKey=${encodeURIComponent(QUIZ_META.quizKey)}">
            ไปหน้า Leaderboard
          </a>
        </div>
      `;
      return;
    }

    renderQuiz();
    showMessage(`ผู้ใช้: ${user.email || user.uid}`, "คุณสามารถทำควิซนี้ได้ 1 ครั้ง");
    startStopwatch();
  } catch (error) {
    console.error(error);
    showMessage("โหลดควิซไม่สำเร็จ", "กรุณาลองใหม่อีกครั้ง");
  }
}

document.getElementById("quizForm").addEventListener("submit", handleSubmit);

// ตรวจสอบสถานะการล็อกอินจาก Firebase
window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    showMessage("ยังไม่ได้ล็อกอิน", "กรุณาเข้าสู่ระบบก่อน");
    document.getElementById("actionsBar").classList.add("hidden");
    return;
  }
  initQuiz(user);
});