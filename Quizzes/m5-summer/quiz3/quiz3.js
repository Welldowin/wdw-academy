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

function normalizeAnswer(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("π", "pi")
    .replaceAll("^2", "²");
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getRewardByScore(score) {
  if (score >= 18) return { diamonds: 2, firework: "gold" };
  if (score >= 14) return { diamonds: 1, firework: "silver" };
  if (score >= 10) return { diamonds: 0.5, firework: "bronze" };
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

    let answerHtml = "";

    if (item.type === "fill") {
      answerHtml = `
        <input
          type="text"
          name="${item.id}"
          class="answer-input"
          value="${escapeHtml(userAnswer)}"
          placeholder="${escapeHtml(item.unitHint || "พิมพ์คำตอบ")}"
          ${disableInputs ? "disabled" : "required"}
        />
      `;
    } else {
      answerHtml = `
        <div class="options-grid">
          ${item.choices.map(choice => `
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
          `).join("")}
        </div>
      `;
    }

    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <h3>ข้อ ${index + 1}</h3>
      <p class="question-text">${escapeHtml(item.prompt)}</p>
      ${item.image ? `<img src="${item.image}" class="question-image" />` : ""}
      ${answerHtml}
      ${
        disableInputs
          ? `<div class="review-badge ${detail ? "correct" : "incorrect"}">
               ${detail ? "✅ ถูก" : "❌ ผิด"}
             </div>`
          : ""
      }
    `;

    form.appendChild(card);
  });
}

function collectAnswers() {
  const answers = {};

  QUIZ_DATA.forEach((item) => {
    if (item.type === "fill") {
      const input = document.querySelector(`input[name="${item.id}"]`);
      answers[item.id] = input ? input.value.trim() : "";
    } else {
      const selected = document.querySelector(`input[name="${item.id}"]:checked`);
      answers[item.id] = selected ? selected.value : "";
    }
  });

  return answers;
}

function gradeQuiz(answers) {
  let score = 0;
  const detail = {};

  QUIZ_DATA.forEach((item) => {
    let correct = false;

    if (item.type === "fill") {
      const user = normalizeAnswer(answers[item.id]);
      const validAnswers = [item.answer, ...(item.answerAlt || [])].map(normalizeAnswer);
      correct = validAnswers.includes(user);
    } else {
      correct = answers[item.id] === item.answer;
    }

    detail[item.id] = correct;

    // ⭐ เติมคำ 2 คะแนน / เลือกตอบ 1 คะแนน
    if (correct) {
      score += item.type === "fill" ? 2 : 1;
    }
  });

  return { score, detail };
}

function startTimer() {
  if (!QUIZ_META.enableTimer) return;

  document.getElementById("timerBox").classList.remove("hidden");
  startTime = Date.now();

  timerInterval = setInterval(() => {
    elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timerText").textContent =
      formatTime(Math.max(QUIZ_META.timeLimitSec - elapsedTimeSec, 0));
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
    score,
    diamonds,
    timeSec,
    firework
  });

  window.location.href = `../leaderboard-quiz3.html?${params.toString()}`;
}

async function handleSubmit(e) {
  e.preventDefault();

  if (reviewMode) return;

  const displayName = document.getElementById("displayNameInput").value.trim();
  if (!displayName) return alert("กรุณากรอกชื่อ");

  clearInterval(timerInterval);
  elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);

  const answers = collectAnswers();

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

    if (!result.ok) throw new Error(result.message);

    redirectToLeaderboard(score, reward.diamonds, elapsedTimeSec, reward.firework);
  } catch (err) {
    alert("ส่งไม่สำเร็จ");
    console.error(err);
  }
}

document.getElementById("quizForm").addEventListener("submit", handleSubmit);

window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) return showMessage("ยังไม่ได้ล็อกอิน");

  currentUser = user;
  renderQuiz();
  startStopwatch();
});
