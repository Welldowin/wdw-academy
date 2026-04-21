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

function getRewardByScore(score) {
  if (score >= 9) return { diamonds: 2, firework: "gold" };
  if (score >= 7) return { diamonds: 1, firework: "silver" };
  if (score >= 5) return { diamonds: 0.5, firework: "bronze" };
  return { diamonds: 0, firework: "none" };
}

function showMessage(text, modeText = "") {
  document.getElementById("studentInfo").textContent = text;
  document.getElementById("modeInfo").textContent = modeText;
}

// ----------------------------------------------------
// ฟังก์ชันบังคับให้ MathJax แปลงสมการ (เพิ่มระบบรอโหลด)
// ----------------------------------------------------
function renderMath() {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
  } else {
    // ถ้าระบบสมการยังโหลดไม่เสร็จ ให้รอ 0.5 วินาทีแล้วสั่งใหม่
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
      <p class="question-text">${escapeHtml(item.prompt)}</p>
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

  // เรียกใช้ตัวแปลงสมการหลังจากวาดหน้าจอเสร็จ
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

function startTimer() {
  if (!QUIZ_META.enableTimer) return;

  document.getElementById("timerBox").classList.remove("hidden");
  startTime = Date.now();

  timerInterval = setInterval(() => {
    elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timerText").textContent = formatTime(
      Math.max(QUIZ_META.timeLimitSec - elapsedTimeSec, 0)
    );

    if (elapsedTimeSec >= QUIZ_META.timeLimitSec) {
      clearInterval(timerInterval);
      autoSubmitByTimeout();
    }
  }, 1000);
}

function startStopwatch() {
  startTime = Date.now();

  if (QUIZ_META.enableTimer) {
    startTimer();
    return;
  }

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
  window.location.href = `../leaderboard-quiz2.html?${params.toString()}`;
}

async function handleSubmit(e) {
  e.preventDefault();
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
    alert(`คุณยังไม่ได้ตอบคำถามอีก ${unanswered} ข้อ กรุณาตอบให้ครบก่อนส่งครับ`);
    return;
  }

  if (!confirm("ยืนยันการส่งคำตอบ? คุณสามารถส่งได้เพียงครั้งเดียวเท่านั้น")) return;

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
  const fakeEvent = { preventDefault() {} };
  await handleSubmit(fakeEvent);
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
        `คุณเคยทำควิซนี้แล้ว | คะแนน ${status.score ?? 0}/10 | ใช้เวลา ${formatTime(status.timeSec ?? 0)}`
      );

      document.getElementById("resultInline").classList.remove("hidden");
      document.getElementById("resultInline").innerHTML = `
        <h2>คุณส่งคำตอบไปแล้ว</h2>
        <p>ชื่อบนลีดเดอร์บอร์ด: <strong>${escapeHtml(status.displayName || "-")}</strong></p>
        <p>คะแนนของคุณ: <strong>${status.score ?? 0}/10</strong></p>
        <p>เวลาที่ใช้: <strong>${formatTime(status.timeSec ?? 0)}</strong></p>
        <div class="actions">
          <a class="btn primary" href="../leaderboard-quiz3.html?courseId=${encodeURIComponent(QUIZ_META.courseId)}&quizKey=${encodeURIComponent(QUIZ_META.quizKey)}">
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

window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    showMessage("ยังไม่ได้ล็อกอิน", "กรุณาเข้าสู่ระบบก่อน");
    document.getElementById("actionsBar").classList.add("hidden");
    return;
  }
  initQuiz(user);
});