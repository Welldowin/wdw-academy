const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6di6lq-HYIUPFuXRuy0rzg5n3Xw4IsqkvcTbTp3AAzakhXfijGx7XwcTT4IWr-h_3oQ/exec";

// 👉 ดึงจาก questions.js (สำคัญมาก)
const QUIZ_META = window.QUIZ_META;
const QUIZ_DATA = window.QUIZ_DATA;

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
    .replaceAll("π", "pi");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function getRewardByScore(score) {
  if (score >= 18) return { diamonds: 2, firework: "gold" };
  if (score >= 14) return { diamonds: 1, firework: "silver" };
  if (score >= 10) return { diamonds: 0.5, firework: "bronze" };
  return { diamonds: 0, firework: "none" };
}

function showMessage(text, mode = "") {
  document.getElementById("studentInfo").textContent = text;
  document.getElementById("modeInfo").textContent = mode;
}

function renderQuiz(savedAnswers = {}, disable = false, detail = {}) {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  QUIZ_DATA.forEach((item, i) => {
    let answerHtml = "";

    if (item.type === "fill") {
      answerHtml = `
        <input type="text"
          name="${item.id}"
          class="answer-input"
          value="${savedAnswers[item.id] || ""}"
          ${disable ? "disabled" : "required"}
        />
      `;
    } else {
      answerHtml = `
        <div class="options-grid">
          ${item.choices.map(c => `
            <label class="option-label">
              <input type="radio"
                name="${item.id}"
                value="${c.key}"
                ${(savedAnswers[item.id] === c.key) ? "checked" : ""}
                ${disable ? "disabled" : "required"}
              />
              <span><b>${c.key}.</b> ${escapeHtml(c.text)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    const el = document.createElement("div");
    el.className = "question-card";

    el.innerHTML = `
      <h3>ข้อ ${i + 1}</h3>
      <p class="question-text">${escapeHtml(item.prompt)}</p>
      ${item.image ? `<img src="${item.image}" class="question-image">` : ""}
      ${answerHtml}
      ${disable ? `<div class="review-badge ${detail[item.id] ? "correct" : "incorrect"}">
        ${detail[item.id] ? "✅ ถูก" : "❌ ผิด"}
      </div>` : ""}
    `;

    form.appendChild(el);
  });
}

function collectAnswers() {
  const ans = {};
  QUIZ_DATA.forEach(item => {
    if (item.type === "fill") {
      const input = document.querySelector(`[name="${item.id}"]`);
      ans[item.id] = input ? input.value.trim() : "";
    } else {
      const checked = document.querySelector(`[name="${item.id}"]:checked`);
      ans[item.id] = checked ? checked.value : "";
    }
  });
  return ans;
}

function gradeQuiz(ans) {
  let score = 0;
  const detail = {};

  QUIZ_DATA.forEach(item => {
    let correct = false;

    if (item.type === "fill") {
      const user = normalizeAnswer(ans[item.id]);
      const valid = [item.answer].map(normalizeAnswer);
      correct = valid.includes(user);
    } else {
      correct = ans[item.id] === item.answer;
    }

    detail[item.id] = correct;

    if (correct) score += item.type === "fill" ? 2 : 1;
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

    if (elapsedTimeSec >= QUIZ_META.timeLimitSec) {
      clearInterval(timerInterval);
      document.getElementById("quizForm").requestSubmit();
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

async function submitQuiz(payload) {
  return postJSON({ action: "submitQuiz", ...payload });
}

function goLeaderboard(score, diamonds, timeSec, fire) {
  const q = new URLSearchParams({
    courseId: QUIZ_META.courseId,
    quizKey: QUIZ_META.quizKey,
    score,
    diamonds,
    timeSec,
    firework: fire
  });
  window.location.href = `../leaderboard-quiz4.html?${q}`;
}

async function handleSubmit(e) {
  e.preventDefault();

  if (!currentUser) {
    alert("ยังไม่พบผู้ใช้ที่ล็อกอิน");
    return;
  }

  const name = document.getElementById("displayNameInput").value.trim();
  if (!name) {
    alert("กรุณากรอกชื่อ");
    return;
  }

  clearInterval(timerInterval);
  elapsedTimeSec = Math.floor((Date.now() - startTime) / 1000);

  const ans = collectAnswers();

  if (Object.values(ans).includes("")) {
    alert("ตอบให้ครบก่อน");
    return;
  }

  const { score, detail } = gradeQuiz(ans);
  const reward = getRewardByScore(score);

  try {
    const result = await submitQuiz({
      userId: currentUser.uid,
      displayName: name,
      courseId: QUIZ_META.courseId,
      quizKey: QUIZ_META.quizKey,
      score,
      diamondsEarned: reward.diamonds,
      timeSec: elapsedTimeSec,
      answers: ans,
      detail
    });

    if (!result.ok) {
      alert(result.message || "ส่งไม่สำเร็จ");
      return;
    }

    goLeaderboard(score, reward.diamonds, elapsedTimeSec, reward.firework);
  } catch (err) {
    console.error(err);
    alert("ส่งคำตอบไม่สำเร็จ");
  }
}

document.getElementById("quizForm").addEventListener("submit", handleSubmit);

window.firebaseOnAuthStateChanged(window.firebaseAuth, async (user) => {
  if (!user) {
    showMessage("ยังไม่ได้ล็อกอิน");
    return;
  }

  currentUser = user;
  showMessage("กำลังโหลดสถานะแบบทดสอบ...");

  try {
    const status = await getQuizStatus(user.uid);

    if (!status || !status.ok) {
      showMessage("ไม่พบสถานะผู้ใช้", status?.message || "");
      renderQuiz();
      startStopwatch();
      return;
    }

    const displayNameInput = document.getElementById("displayNameInput");
    if (displayNameInput && status.displayName) {
      displayNameInput.value = status.displayName;
    }

    if (status.submitted) {
      reviewMode = true;
      renderQuiz(status.answers || {}, true, status.detail || {});
      document.getElementById("submitBtn").classList.add("hidden");
      document.getElementById("displayNameBox").classList.add("hidden");
      document.getElementById("timerBox").classList.remove("hidden");
      document.getElementById("timerText").textContent = formatTime(status.timeSec || 0);
      showMessage(`เคยทำแบบทดสอบแล้ว ได้ ${status.score} คะแนน`, "โหมดตรวจคำตอบย้อนหลัง");
      return;
    }

    renderQuiz();
    startStopwatch();
    showMessage(`พร้อมทำแบบทดสอบ • ${user.email || user.uid}`, "ยังไม่เคยส่งคำตอบ");
  } catch (err) {
    console.error("getQuizStatus error:", err);
    renderQuiz();
    startStopwatch();
    showMessage("โหลดสถานะผู้ใช้ไม่สำเร็จ", err.message || "unknown error");
  }
});
