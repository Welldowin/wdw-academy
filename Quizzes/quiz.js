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

// ระบบตั้งเวลาเฉลย (ฝั่ง client)
// เฉลย + วิธีคิดของข้อที่ผิด จะแสดงหลังนักเรียนส่งคำตอบครบ 15 นาที
// จุดประสงค์: กันการลอกกันระหว่างที่นั่งทำพร้อมกัน ไม่ใช่การกันแบบเข้มงวดระดับ server
const REVEAL_DELAY_MS = 15 * 60 * 1000;

function submitTimeKey() {
  const uid = currentUser ? currentUser.uid : "anon";
  return `wdw_submitAt_${courseId}_${quizKey}_${uid}`;
}

// บันทึกเวลาที่นักเรียนส่งลงเครื่องนี้ (เรียกตอนส่งสำเร็จ)
function markSubmitTime() {
  try {
    localStorage.setItem(submitTimeKey(), String(Date.now()));
  } catch (e) {
    /* localStorage อาจถูกปิด — ปล่อยผ่าน */
  }
}

// ตัดสินฝั่ง client ว่าถึงเวลาเฉลยหรือยัง
// - ไม่มี timestamp ในเครื่องนี้ = ส่งมาจากรอบ/เครื่องอื่น (ผ่านมานานแล้ว) → เฉลยได้
// - มี timestamp = เฉลยเมื่อครบ REVEAL_DELAY_MS หลังส่ง
function getRevealState() {
  let t = null;
  try {
    const v = localStorage.getItem(submitTimeKey());
    t = v ? Number(v) : null;
  } catch (e) {
    t = null;
  }
  if (!t || Number.isNaN(t)) return { reveal: true, remainMs: 0 };
  const remainMs = REVEAL_DELAY_MS - (Date.now() - t);
  return { reveal: remainMs <= 0, remainMs: Math.max(0, remainMs) };
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

function renderQuiz(savedAnswers = {}, disableInputs = false, resultDetail = {}, revealAnswers = false) {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  QUIZ_DATA.forEach((item, index) => {
    const userAnswer = savedAnswers[item.id] || "";
    const detail = resultDetail[item.id];
    const isCorrect = !!detail;

    // แก้ไข Path รูปภาพอัตโนมัติ แปลง .../images/ หรือ ../images/ ให้ชี้ไปที่โฟลเดอร์วิชาปัจจุบัน
    let fixedPrompt = item.prompt;
    if (fixedPrompt) {
      fixedPrompt = fixedPrompt.replace(/(\.\.\.\/|\.\.\/|\.\/)?images\//g, `./courses/${courseId}/images/`);
    }

    const choicesHtml = item.choices.map(choice => {
      const isUserChoice = userAnswer === choice.key;
      const isCorrectChoice = choice.key === item.answer;

      let cls = "option-label";
      let tag = "";
      if (revealAnswers && isCorrectChoice) {
        cls += " reveal-correct";
        tag = ` <span class="reveal-tag">✔ เฉลย</span>`;
      }
      if (revealAnswers && isUserChoice && !isCorrectChoice) {
        cls += " reveal-wrong";
        tag = ` <span class="reveal-tag wrong">✗ คำตอบของคุณ</span>`;
      }

      return `
      <label class="${cls}">
        <input
          type="radio"
          name="${item.id}"
          value="${choice.key}"
          ${isUserChoice ? "checked" : ""}
          ${disableInputs ? "disabled" : ""}
          ${!disableInputs ? "required" : ""}
        />
        <span><strong>${choice.key}.</strong> ${escapeHtml(choice.text)}${tag}</span>
      </label>
    `;
    }).join("");

    // แสดงคำอธิบาย/วิธีคิด เฉพาะเมื่อถึงเวลาเฉลย และเฉพาะข้อที่ตอบผิด
    let explanationHtml = "";
    if (revealAnswers && !isCorrect) {
      const body = item.explanation
        ? `<div class="explanation-text">${item.explanation}</div>`
        : `<div class="explanation-text">เฉลยข้อนี้คือตัวเลือก <strong>${escapeHtml(item.answer)}</strong> (ยังไม่มีคำอธิบายเพิ่มเติม)</div>`;
      explanationHtml = `<div class="explanation-box"><strong>วิธีคิด / เฉลย</strong>${body}</div>`;
    }

    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <h3>ข้อ ${index + 1}</h3>
      <p class="question-text">${fixedPrompt}</p>
      <div class="options-grid">${choicesHtml}</div>
      ${
        disableInputs
          ? `<div class="review-badge ${isCorrect ? "correct" : "incorrect"}">
               ${isCorrect ? "✅ คำตอบของคุณถูกต้อง" : "❌ คำตอบของคุณไม่ถูกต้อง"}
             </div>`
          : ""
      }
      ${explanationHtml}
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
    markSubmitTime(); // เก็บเวลาส่งไว้ เพื่อคำนวณเวลาเฉลย 15 นาที
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
    document.body.style.backgroundImage = `linear-gradient(rgba(8,10,18,0.88), rgba(8,10,18,0.88)), url("${QUIZ_META.bgImage}")`;
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
      const { reveal, remainMs } = getRevealState();
      renderQuiz(status.answers || {}, true, status.detail || {}, reveal);

      // ถ้ายังไม่ถึงเวลาเฉลยและหน้ายังเปิดค้างไว้ → เฉลยอัตโนมัติเมื่อครบเวลา
      if (!reveal && remainMs > 0) {
        setTimeout(() => {
          if (!getRevealState().reveal) return;
          renderQuiz(status.answers || {}, true, status.detail || {}, true);
          const note = document.getElementById("revealNote");
          if (note) note.textContent = "เฉลยและวิธีคิดของข้อที่ตอบผิดแสดงแล้วด้านบน";
        }, remainMs + 500);
      }

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
        <p class="small-note" id="revealNote">${
          reveal
            ? "เฉลยและวิธีคิดของข้อที่ตอบผิดแสดงแล้วด้านบน"
            : `เพื่อป้องกันการลอกกันระหว่างทำ ระบบจะแสดงเฉลยและวิธีคิดของข้อที่ผิดในอีกประมาณ ${Math.ceil(remainMs / 60000)} นาที`
        }</p>
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

// ----------------------------------------------------
// จุดเริ่มต้นของระบบ — แก้ไข Race Condition
// ----------------------------------------------------

// ใช้ authResolved เพื่อรอให้ Firebase ยืนยันสถานะการ Login ก่อน
// ปัญหาเดิม: onAuthStateChanged fire ด้วย null ทันทีขณะที่ Firebase
// ยังโหลด session ไม่เสร็จ ทำให้ redirect ออกทั้งๆ ที่ login อยู่แล้ว
let authResolved = false;

window.firebaseOnAuthStateChanged(window.firebaseAuth, (user) => {
  // --- ครั้งแรกที่ Firebase ยืนยันสถานะเสร็จ ---
  if (!authResolved) {
    authResolved = true;

    if (!user) {
      // ตอนนี้มั่นใจแล้วว่าไม่ได้ login จริงๆ
      document.getElementById("actionsBar").classList.add("hidden");
      showMessage("ยังไม่ได้ล็อกอิน", "กำลังพากลับไปหน้าเข้าสู่ระบบ...");
      document.getElementById("quizTitle").textContent = "กรุณาเข้าสู่ระบบ";
      document.getElementById("courseTitle").textContent = "Well-Do-Win Academy";
      setTimeout(() => {
        window.location.href = "../login.html";
      }, 1500);
      return;
    }

    // Login อยู่ → โหลดข้อมูลควิซ
    currentUser = user;
    loadDataScript(user);
    return;
  }

  // --- Session เปลี่ยนหลังจากโหลดหน้าแล้ว (เช่น logout ระหว่างทำข้อสอบ) ---
  if (!user) {
    clearInterval(timerInterval);
    alert("เซสชันหมดอายุ กรุณาล็อกอินใหม่");
    window.location.href = "../login.html";
  }
});