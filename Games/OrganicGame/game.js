// game.js — Game logic for Organic Chem Guesser

const STAGES = [
    { time: 80, label: "Stage 1 — เริ่มต้น" },
    { time: 60, label: "Stage 2 — เร็วขึ้น" },
    { time: 40, label: "Stage 3 — ด่านสุดท้าย" }
];

const SCORE_TO_PASS = 5;

let currentStage = 0;
let score = 0;
let timeLeft = 0;
let timerInterval = null;
let currentAnswer = "";
let usedQuestions = [];
let nextActionType = "nextStage";
let gameStarted = false;
let answering = false;       // debounce flag
let timedMode = true;        // โหมดจับเวลา (true) หรือ ฝึกซ้อมไม่จับเวลา (false)
let choiceButtonsBuilt = false; // สร้างปุ่มคำตอบครั้งเดียว ไม่สลับตำแหน่ง

// ─── Audio ────────────────────────────────────────────────
const audio = {
    bgm:     document.getElementById("bgm"),
    correct: document.getElementById("sfxCorrect"),
    wrong:   document.getElementById("sfxWrong"),
    win:     document.getElementById("sfxWin"),
    lose:    document.getElementById("sfxLose")
};

let musicMuted = false;

function playBGM() {
    audio.bgm.volume = parseFloat(document.getElementById("volumeSlider").value);
    audio.bgm.play().catch(() => {});
}

function pauseBGM() { audio.bgm.pause(); }

function playFX(key) {
    const el = audio[key];
    if (!el) return;
    el.currentTime = 0;
    el.play().catch(() => {});
}

function setupMusicPanel() {
    const btn    = document.getElementById("btnMusicToggle");
    const slider = document.getElementById("volumeSlider");

    btn.addEventListener("click", () => {
        musicMuted = !musicMuted;
        if (musicMuted) {
            pauseBGM();
            btn.textContent = "🔇";
        } else {
            playBGM();
            btn.textContent = "🎵";
        }
    });

    slider.addEventListener("input", () => {
        audio.bgm.volume = parseFloat(slider.value);
        if (parseFloat(slider.value) === 0) {
            musicMuted = true;
            btn.textContent = "🔇";
            pauseBGM();
        } else if (musicMuted) {
            musicMuted = false;
            btn.textContent = "🎵";
            if (gameStarted) playBGM();
        }
    });
}

// ─── Screen Switcher ──────────────────────────────────────
function switchScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ─── Helpers ──────────────────────────────────────────────
function getRandomItems(arr, n) {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function updateStats() {
    document.getElementById("stageDisplay").textContent = currentStage + 1;
    document.getElementById("scoreDisplay").textContent = score;

    const timeEl = document.getElementById("statTime");

    if (timedMode) {
        document.getElementById("timeDisplay").textContent = timeLeft;
        // Warning pulse when ≤ 10 seconds left
        if (timeLeft <= 10) timeEl.classList.add("timer-warning");
        else                timeEl.classList.remove("timer-warning");
    } else {
        // โหมดไม่จับเวลา — แสดงสัญลักษณ์ ∞
        document.getElementById("timeDisplay").textContent = "∞";
        timeEl.classList.remove("timer-warning");
    }

    const pct = (score / SCORE_TO_PASS) * 100;
    document.getElementById("progressFill").style.width = pct + "%";
}

// ─── Timer ────────────────────────────────────────────────
function startTimer() {
    clearInterval(timerInterval);
    if (!timedMode) return; // โหมดไม่จับเวลา — ไม่เริ่มนับ
    timerInterval = setInterval(() => {
        timeLeft--;
        updateStats();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver(false);
        }
    }, 1000);
}

// ─── Mode Selection ───────────────────────────────────────
function selectMode(mode) {
    timedMode = (mode === "timed");
    startGame();
}

// ─── Game Flow ────────────────────────────────────────────
function startGame() {
    gameStarted = true;
    currentStage = 0;
    if (!musicMuted) playBGM();
    loadStage();
}

function loadStage() {
    score = 0;
    usedQuestions = [];
    timeLeft = STAGES[currentStage].time;
    updateStats();
    switchScreen("screen-game");
    buildChoiceButtons();   // สร้างปุ่มคำตอบ (ครั้งเดียว ตำแหน่งคงที่)
    generateQuestion();
    startTimer();
}

// ─── สร้างปุ่มคำตอบแบบคงที่ (ไม่สลับตำแหน่ง) ─────────────────
function buildChoiceButtons() {
    if (choiceButtonsBuilt) return; // สร้างไว้แล้ว ไม่ต้องสร้างซ้ำ

    const container = document.getElementById("choicesContainer");
    container.innerHTML = "";
    // เรียงตามลำดับใน choicesList แบบคงที่ ไม่ shuffle
    choicesList.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "btn btn-choice";
        const data = orgData[choice];
        btn.innerHTML = `<strong>${choice}</strong><br><span style="font-size:0.75rem;opacity:0.6">${data.thaiName}</span>`;
        btn.dataset.choice = choice;
        btn.addEventListener("click", () => checkAnswer(choice, btn));
        container.appendChild(btn);
    });
    choiceButtonsBuilt = true;
}

// ─── รีเซ็ตสถานะปุ่มคำตอบ (เรียกทุกครั้งที่เปลี่ยนคำถาม) ──────
function resetChoiceButtons() {
    document.querySelectorAll(".btn-choice").forEach(b => {
        b.classList.remove("correct", "wrong");
        b.disabled = false;
    });
}

function generateQuestion() {
    answering = false;
    let targetGroup, physProps, chemProps, key;
    let attempts = 0;

    do {
        targetGroup = choicesList[Math.floor(Math.random() * choicesList.length)];
        const data  = orgData[targetGroup];
        physProps   = getRandomItems(data.phys, Math.min(2, data.phys.length));
        chemProps   = getRandomItems(data.chem, Math.min(2, data.chem.length));
        key = `${targetGroup}|${[...physProps].sort()}|${[...chemProps].sort()}`;
        attempts++;
        // After many tries (all combos exhausted), allow repeats
        if (attempts > 80) usedQuestions = [];
    } while (usedQuestions.includes(key));

    usedQuestions.push(key);
    currentAnswer = targetGroup;

    // Build 2-column prop layout
    const box = document.getElementById("propColumns");
    const physHTML = physProps.map(p => `<li>${p}</li>`).join("");
    const chemHTML = chemProps.map(c => `<li>${c}</li>`).join("");
    box.innerHTML = `
        <div class="prop-col phys">
            <div class="prop-col-header phys">
                <span class="col-icon">🔬</span> คุณสมบัติกายภาพ
            </div>
            <ul class="prop-list">${physHTML}</ul>
        </div>
        <div class="prop-col chem">
            <div class="prop-col-header chem">
                <span class="col-icon">⚗️</span> คุณสมบัติเคมี
            </div>
            <ul class="prop-list">${chemHTML}</ul>
        </div>
    `;

    // รีเซ็ตสถานะปุ่ม (ตำแหน่งปุ่มเดิม ไม่สลับ)
    resetChoiceButtons();
}

function checkAnswer(selected, clickedBtn) {
    if (answering) return; // prevent double-click
    answering = true;

    const allBtns = document.querySelectorAll(".btn-choice");

    if (selected === currentAnswer) {
        score++;
        clickedBtn.classList.add("correct");
        showFeedback(true);
        playFX("correct");
    } else {
        clickedBtn.classList.add("wrong");
        // Highlight correct answer
        allBtns.forEach(b => {
            if (b.dataset.choice === currentAnswer) b.classList.add("correct");
        });
        showFeedback(false);
        playFX("wrong");
    }

    // Disable all buttons
    allBtns.forEach(b => b.disabled = true);

    updateStats();

    if (score >= SCORE_TO_PASS) {
        clearInterval(timerInterval);
        setTimeout(() => stageClear(), 900);
    } else {
        setTimeout(generateQuestion, 950);
    }
}

function stageClear() {
    if (currentStage >= STAGES.length - 1) {
        gameOver(true);
    } else {
        currentStage++;
        document.getElementById("endIcon").textContent    = "🎉";
        document.getElementById("endTitle").textContent   = "ยอดเยี่ยม!";
        document.getElementById("endTitle").style.color   = "#4ade80";

        if (timedMode) {
            document.getElementById("endDetail").textContent =
                `ผ่าน Stage ${currentStage} แล้ว!\nเตรียมพร้อม: ${STAGES[currentStage].label} — เวลา ${STAGES[currentStage].time} วินาที`;
        } else {
            document.getElementById("endDetail").textContent =
                `ผ่าน Stage ${currentStage} แล้ว!\nเตรียมพร้อม: ${STAGES[currentStage].label} (โหมดฝึกซ้อม ไม่จับเวลา)`;
        }

        document.getElementById("endBtn").textContent = `▶ ไป Stage ${currentStage + 1}`;
        nextActionType = "nextStage";
        playFX("correct");
        switchScreen("screen-end");
    }
}

function gameOver(isWin) {
    pauseBGM();
    if (isWin) {
        document.getElementById("endIcon").textContent   = "🏆";
        document.getElementById("endTitle").textContent  = "YOU WIN!";
        document.getElementById("endTitle").style.color  = "#fbbf24";
        document.getElementById("endDetail").textContent = "ยินดีด้วย! คุณพิชิตครบทั้ง 3 Stage\nคุณพร้อมสำหรับ NETSAT เคมีอินทรีย์แล้ว!";
        playFX("win");
    } else {
        document.getElementById("endIcon").textContent   = "💀";
        document.getElementById("endTitle").textContent  = "GAME OVER";
        document.getElementById("endTitle").style.color  = "#f87171";
        document.getElementById("endDetail").textContent = `หมดเวลาใน Stage ${currentStage + 1}!\nตอบถูกได้ ${score}/${SCORE_TO_PASS} ข้อ ลองใหม่อีกครั้ง!`;
        playFX("lose");
    }
    document.getElementById("endBtn").textContent = "🔄 เล่นอีกครั้ง";
    nextActionType = "restart";
    switchScreen("screen-end");
}

function nextAction() {
    if (nextActionType === "nextStage") {
        loadStage();
    } else {
        audio.bgm.currentTime = 0;
        // กลับไปหน้าเลือกโหมด เพื่อให้เลือกจับเวลา/ไม่จับเวลาใหม่ได้
        switchScreen("screen-start");
        gameStarted = false;
        pauseBGM();
    }
}

// ─── Feedback Toast ───────────────────────────────────────
let feedbackTimer = null;
function showFeedback(isCorrect) {
    const fb = document.getElementById("feedback");
    if (feedbackTimer) clearTimeout(feedbackTimer);
    fb.style.display = "block";
    fb.className = "";
    if (isCorrect) {
        fb.textContent = "✅ ถูกต้อง!";
        fb.classList.add("feedback-correct");
    } else {
        fb.textContent = "❌ คำตอบคือ " + currentAnswer;
        fb.classList.add("feedback-wrong");
    }
    feedbackTimer = setTimeout(() => { fb.style.display = "none"; }, 1400);
}

// ─── Init ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    setupMusicPanel();
});