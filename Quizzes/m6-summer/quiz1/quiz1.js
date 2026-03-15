const APPS_SCRIPT_URL = "ใส่_WEB_APP_URL_ของ_Apps_Script_ตรงนี้";

const QUIZ_META = {
  courseId: "m6-summer",
  quizKey: "quiz1",
  title: "Quiz1 การเรียกชื่อสาร",
  enableTimer: false,
  timeLimitSec: 600
};

let currentUser = null;
let reviewMode = false;
let startTime = null;
let elapsedTimeSec = 0;
let timerInterval = null;

function normalizeAnswer(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*/g, "-")
    .replace(/\s*,\s*/g, ",");
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTime(sec) {
  sec = Number(sec || 0);
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
  const studentInfo = document.getElementById("studentInfo");
  const modeInfo = document.getElementById("modeInfo");
  if (studentInfo) studentInfo.textContent = text;
  if (modeInfo) modeInfo.textContent = modeText;
}

function ensureDisplayNameInput() {
  const statusCard = document.querySelector(".status-card");
  if (!statusCard) return;

  if (document.getElementById("displayNameBox")) return;

  const box = document.createElement("div");
  box.className = "display-name-box";
  box.id = "displayNameBox";
  box.innerHTML = `
    <label for="displayNameInput">ชื่อที่แสดงบน Leaderboard</label>
    <input
      type="text"
      id="displayNameInput"
      class="answer-input"
      placeholder="เช่น แมค / น้องเมฆ / Beam"
      maxlength="30"
    />
  `;

  statusCard.appendChild(box);
}

function setDisplayNameValue(name, disabled = false) {
  ensureDisplayNameInput();
  const input = document.getElementById("displayNameInput");
  if (!input) return;
  input.value = name || "";
  input.disabled = disabled;
}

function renderQuiz(savedAnswers = {}, disableInputs = false, resultDetail = {}) {
  const form = document.getElementById("quizForm");
  if (!form) return;

  form.innerHTML = "";

  QUIZ_DATA.forEach((item, index) => {
    const userAnswer = savedAnswers[item.id] || "";
    const detail = resultDetail[item.id];

    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <h3>ข้อ ${index + 1}</h3>
      <p>${item.prompt}</p>
      <img src="${item.image}" alt="${item.id}" class="question-image" />
      <input
        class="answer-input"
        type="text"
        name="${item.id}"
        value="${escapeHtml(userAnswer)}"
        placeholder="พิมพ์ชื่อสารที่นี่"
        ${disableInputs ? "disabled" : "required"}
      />
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
}

function collectAnswers() {
  const answers = {};
  QUIZ_DATA.forEach((item) => {
    const input = document.querySelector(`[name="${item.id}"]`);
    answers[item.id] = input ? input.value.trim() : "";
  });
  return answers;
}

function gradeQuiz(answers) {
  let score = 0;
  const detail = {};

  QUIZ_DATA.forEach((item) => {
    const userAnswer = normalizeAnswer(answers[item.id]);
    const accepted = item.answers.map(normalizeAnswer);
    const correct = accepted.includes(userAnswer);
    detail[item.id] = correct;
    if (correct) score += 1;
  });

  return { score, detail };
}

function startTimer() {
  if (!QUIZ_META.enableTimer) return;

  const timerBox = document.getElementById("timerBox");
  if (timerBox) timerBox.classList.remove("hidden");

  startTime = Date.now();

  timerInterval = setInterval(() => {
    elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);

    const remain = Math.max(QUIZ_META.timeLimitSec - elapsedTimeSec, 0);
    const timerText = document.getElementById("timerText");
    if (timerText) timerText.textContent = formatTime(remain);

    if (elapsedTimeSec >= QUIZ_META.timeLimitSec) {
      clearInterval(timerInterval);
      autoSubmitByTimeout();
    }
  }, 1000);
}

function startStopwatch() {
  startTime = Date.now();

  const timerBox = document.getElementById("timerBox");
  if (timerBox) timerBox.classList.remove("hidden");

  if (QUIZ_META.enableTimer) {
    startTimer();
    return;
  }

  timerInterval = setInterval(() => {
    elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);
    const timerText = document.getElementById("timerText");
    if (timerText) timerText.textContent = formatTime(elapsedTimeSec);
  }, 1000);
}

async function postJSON(payload) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
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

  window.location.href = `../leaderboard.html?${params.toString()}`;
}

async function handleSubmit(e) {
  e.preventDefault();
  if (reviewMode) return;

  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "กำลังส่งคำตอบ...";
  }

  const displayName = (document.getElementById("displayNameInput")?.value || "").trim();

  if (!displayName) {
    alert("กรุณากรอกชื่อที่แสดงบน Leaderboard");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "ส่งคำตอบ";
    }
    return;
  }

  if (displayName.length > 30) {
    alert("ชื่อยาวเกินไป กรุณาใช้ไม่เกิน 30 ตัวอักษร");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "ส่งคำตอบ";
    }
    return;
  }

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

    if (!result.ok) {
      throw new Error(result.message || "Submit failed");
    }

    redirectToLeaderboard(score, reward.diamonds, elapsedTimeSec, reward.firework);
  } catch (error) {
    console.error(error);
    alert(error.message || "เกิดข้อผิดพลาดในการส่งคำตอบ");

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "ส่งคำตอบ";
    }
  }
}

async function autoSubmitByTimeout() {
  if (reviewMode) return;
  const fakeEvent = { preventDefault() {} };
  await handleSubmit(fakeEvent);
}

async function initQuiz(user) {
  currentUser = user;

  const title = document.getElementById("quizTitle");
  if (title) title.textContent = QUIZ_META.title;

  showMessage(`ผู้ใช้: ${user.email || user.uid}`, "กำลังโหลดสถานะควิซ...");

  try {
    const status = await getQuizStatus(user.uid);

    if (!status.ok) {
      throw new Error(status.message || "Cannot load quiz status");
    }

    if (status.submitted) {
      reviewMode = true;
      renderQuiz(status.answers || {}, true, status.detail || {});
      setDisplayNameValue(status.displayName || "", true);

      const actionsBar = document.getElementById("actionsBar");
      if (actionsBar) actionsBar.classList.add("hidden");

      showMessage(
        `ผู้ใช้: ${user.email || user.uid}`,
        `คุณเคยทำควิซนี้แล้ว | คะแนน ${status.score ?? 0}/10 | ใช้เวลา ${formatTime(status.timeSec ?? 0)}`
      );

      const resultInline = document.getElementById("resultInline");
      if (resultInline) {
        resultInline.classList.remove("hidden");
        resultInline.innerHTML = `
          <h2>คุณส่งคำตอบไปแล้ว</h2>
          <p>ชื่อที่แสดงบน Leaderboard: <strong>${escapeHtml(status.displayName || "-")}</strong></p>
          <p>คะแนนของคุณ: <strong>${status.score ?? 0}/10</strong></p>
          <p>เวลาที่ใช้: <strong>${formatTime(status.timeSec ?? 0)}</strong></p>
          <p class="small-note">ระบบแสดงเฉพาะคำตอบที่คุณเคยตอบ พร้อมสถานะถูก/ผิด โดยไม่แสดงเฉลยจริง</p>
          <div class="actions">
            <a class="btn primary" href="../leaderboard.html?courseId=${encodeURIComponent(QUIZ_META.courseId)}&quizKey=${encodeURIComponent(QUIZ_META.quizKey)}">
              ไปหน้า Leaderboard
            </a>
          </div>
        `;
      }
      return;
    }

    ensureDisplayNameInput();
    renderQuiz();
    showMessage(
      `ผู้ใช้: ${user.email || user.uid}`,
      "คุณสามารถทำควิซนี้ได้ 1 ครั้ง"
    );
    startStopwatch();
  } catch (error) {
    console.error(error);
    showMessage("โหลดควิซไม่สำเร็จ", "กรุณาลองใหม่อีกครั้ง");
  }
}

document.getElementById("quizForm")?.addEventListener("submit", handleSubmit);

window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  if (!user) {
    showMessage("ยังไม่ได้ล็อกอิน", "กรุณาเข้าสู่ระบบก่อน");
    const actionsBar = document.getElementById("actionsBar");
    if (actionsBar) actionsBar.classList.add("hidden");
    return;
  }

  initQuiz(user);
});
