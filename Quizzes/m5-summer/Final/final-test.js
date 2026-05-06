// กำหนด URL ของ Apps Script ที่คุณครู Deploy ไว้
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2yvvJ17viUPF-UHBqPhudJVH4HDfYlyDHTOSaIELFEFRhucdrILUzNI5RhOZeh0vh/exec";

// ==========================================
// ตัวแปรควบคุมสถานะของข้อสอบ
// ==========================================
let currentQuestionIndex = 0;
let userAnswers = {};      // เก็บคำตอบที่เด็กเลือก { "q1": "2", "q2": "1" }
let timeSpent = {};        // เก็บเวลาที่ใช้ในแต่ละข้อ (วินาที) { "q1": 15, "q2": 45 }
let questionStartTime = 0; // จับเวลาว่าเริ่มทำข้อปัจจุบันตอนไหน
let mainTimeRemaining = window.QUIZ_META.timeLimitSec;
let mainTimerInterval = null;
let isSubmitted = false;

// ดึงข้อมูลผู้ใช้จาก localStorage (มาจากหน้า login/member)
const userId = localStorage.getItem('userId');
const userDisplayName = localStorage.getItem('userDisplayName') || "นักเรียน (ไม่ทราบชื่อ)";

// ==========================================
// เริ่มต้นระบบเมื่อโหลดหน้าเว็บเสร็จ
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. ตรวจสอบสิทธิ์
    if (!userId) {
        alert("กรุณาเข้าสู่ระบบก่อนทำข้อสอบ");
        window.location.href = "login.html"; // เด้งกลับไปหน้าล็อกอิน
        return;
    }
    document.getElementById('student-name').textContent = `ผู้สอบ: ${userDisplayName}`;
    document.getElementById('quiz-title').textContent = window.QUIZ_META.title;

    // 2. สร้างปุ่ม Navigator ด้านขวา
    buildNavigator();

    // 3. เริ่มแสดงข้อแรก และเริ่มจับเวลา
    renderQuestion(currentQuestionIndex);
    startMainTimer();
});

// ==========================================
// ระบบจับเวลา (หลัก และ ย่อย)
// ==========================================
function startMainTimer() {
    mainTimerInterval = setInterval(() => {
        if (isSubmitted) return;
        
        mainTimeRemaining--;
        let m = Math.floor(mainTimeRemaining / 60);
        let s = mainTimeRemaining % 60;
        document.getElementById('time-display').textContent = `${m}:${s < 10 ? '0'+s : s}`;
        
        if (mainTimeRemaining <= 0) {
            clearInterval(mainTimerInterval);
            alert("หมดเวลา! ระบบจะส่งคำตอบโดยอัตโนมัติ");
            submitQuiz();
        }
    }, 1000);
}

function recordTimeSpent() {
    // บันทึกเวลาที่ใช้ไปสำหรับข้อที่เพิ่งทำเสร็จ
    let qId = QUIZ_DATA[currentQuestionIndex].id;
    let now = Date.now();
    let spentThisTime = Math.floor((now - questionStartTime) / 1000); // แปลงเป็นวินาที
    
    if (!timeSpent[qId]) timeSpent[qId] = 0;
    timeSpent[qId] += spentThisTime; // บวกสะสมเผื่อเด็กกดย้อนกลับมาทำข้อเดิม
}

// ==========================================
// ระบบแสดงผลข้อสอบ (Render)
// ==========================================
function renderQuestion(index) {
    let q = QUIZ_DATA[index];
    questionStartTime = Date.now(); // เริ่มจับเวลาข้อใหม่
    
    // อัปเดตส่วนหัวของข้อ
    document.getElementById('question-number').textContent = `ข้อที่ ${index + 1} / ${QUIZ_DATA.length}`;
    
    // แปลง Skill ภาษาอังกฤษ เป็นภาษาไทยเพื่อแสดงผล
    let skillName = q.skill === "theory" ? "ทฤษฎี" : (q.skill === "calc" ? "คำนวณ" : "ประยุกต์ใช้");
    document.getElementById('question-category').textContent = `${q.chapter} | ${skillName}`;
    
    // แสดงโจทย์ (รองรับการเว้นบรรทัด \n)
    document.getElementById('question-text').innerHTML = q.prompt.replace(/\n/g, '<br>');
    
    // แสดงรูปภาพ (ถ้ามี)
    let imgContainer = document.getElementById('question-image-container');
    if (q.image) {
        imgContainer.innerHTML = `<img src="${q.image}" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:8px; margin-top:15px;">`;
    } else {
        imgContainer.innerHTML = '';
    }
    
    // แสดงตัวเลือก
    let choicesHtml = '';
    q.choices.forEach(choice => {
        let isChecked = userAnswers[q.id] === choice.key ? 'checked' : '';
        choicesHtml += `
            <label class="choice-item">
                <input type="radio" name="choice" value="${choice.key}" ${isChecked} onchange="selectAnswer('${q.id}', '${choice.key}')">
                ${choice.text}
            </label>
        `;
    });
    document.getElementById('choices-list').innerHTML = choicesHtml;
    
    // จัดการปุ่ม ก่อนหน้า/ถัดไป/ส่งข้อสอบ
    document.getElementById('prev-btn').disabled = (index === 0);
    
    if (index === QUIZ_DATA.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
    
    updateNavigator(); // อัปเดตสีปุ่มด้านขวา
    
    // เรนเดอร์ MathJax ใหม่ (ถ้ามีสมการ)
    if (window.MathJax) { MathJax.typesetPromise(); }
}

// ==========================================
// ระบบควบคุมการเปลี่ยนหน้าและเลือกตอบ
// ==========================================
function selectAnswer(qId, val) {
    userAnswers[qId] = val;
    updateNavigator();
}

document.getElementById('prev-btn').addEventListener('click', () => {
    recordTimeSpent();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    recordTimeSpent();
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    }
});

document.getElementById('submit-btn').addEventListener('click', () => {
    // เช็กว่าทำครบไหม
    let answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < QUIZ_DATA.length) {
        if (!confirm(`คุณทำข้อสอบไปเพียง ${answeredCount} จาก ${QUIZ_DATA.length} ข้อ ยืนยันที่จะส่งหรือไม่?`)) return;
    } else {
        if (!confirm("คุณตรวจสอบคำตอบเรียบร้อยและต้องการส่งข้อสอบใช่หรือไม่?")) return;
    }
    submitQuiz();
});

// ==========================================
// ระบบ Navigator (แผงตัวเลขขวามือ)
// ==========================================
function buildNavigator() {
    let navHtml = '';
    QUIZ_DATA.forEach((q, i) => {
        navHtml += `<button class="nav-btn" id="nav-btn-${i}" onclick="jumpTo(${i})">${i + 1}</button>`;
    });
    document.getElementById('question-nav-grid').innerHTML = navHtml;
}

function jumpTo(index) {
    recordTimeSpent(); // บันทึกเวลาข้อปัจจุบันก่อนกระโดดไปข้ออื่น
    currentQuestionIndex = index;
    renderQuestion(currentQuestionIndex);
}

function updateNavigator() {
    QUIZ_DATA.forEach((q, i) => {
        let btn = document.getElementById(`nav-btn-${i}`);
        btn.classList.remove('active', 'answered');
        
        if (i === currentQuestionIndex) {
            btn.classList.add('active'); // กำลังทำอยู่ (สีน้ำเงิน)
        } else if (userAnswers[q.id]) {
            btn.classList.add('answered'); // ทำแล้ว (สีเขียว)
        }
    });
}

// ==========================================
// การคำนวณคะแนน และส่งข้อมูลไป Google Sheets
// ==========================================
function submitQuiz() {
    if (isSubmitted) return;
    isSubmitted = true;
    
    recordTimeSpent(); // บันทึกเวลาข้อสุดท้าย
    clearInterval(mainTimerInterval);
    
    // โครงสร้างสำหรับเก็บคะแนนแยกหมวดหมู่
    let totalScore = 0;
    let statSkills = { theory: {correct: 0, total: 0}, calc: {correct: 0, total: 0}, apply: {correct: 0, total: 0} };
    let statChapters = { SHM: {correct: 0, total: 0}, Wave: {correct: 0, total: 0}, Light: {correct: 0, total: 0} };
    
    // ตรวจคำตอบทีละข้อ
    QUIZ_DATA.forEach(q => {
        let isCorrect = (userAnswers[q.id] === q.answer);
        if (isCorrect) totalScore++;
        
        // นับจำนวนข้อทั้งหมดในแต่ละสกิลและบทเรียน
        if (statSkills[q.skill]) {
            statSkills[q.skill].total++;
            if (isCorrect) statSkills[q.skill].correct++;
        }
        if (statChapters[q.chapter]) {
            statChapters[q.chapter].total++;
            if (isCorrect) statChapters[q.chapter].correct++;
        }
    });
    
    // คำนวณเปอร์เซ็นต์รวมเพื่อจัด Rank
    let percent = (totalScore / QUIZ_DATA.length) * 100;
    let rank = "C";
    if (percent >= 85) rank = "S";
    else if (percent >= 70) rank = "A";
    else if (percent >= 50) rank = "B";
    
    // คำนวณเปอร์เซ็นต์ย่อย (เต็ม 100%) เพื่อเตรียมส่งไปวาดกราฟเรดาร์
    let calcPercent = (stat) => stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
    
    let radarData = {
        theory: calcPercent(statSkills.theory),
        calc: calcPercent(statSkills.calc),
        apply: calcPercent(statSkills.apply),
        SHM: calcPercent(statChapters.SHM),
        Wave: calcPercent(statChapters.Wave),
        Light: calcPercent(statChapters.Light)
    };
    
    // แพ็กข้อมูลสำหรับส่ง Backend
    let payload = {
        userId: userId,
        displayName: userDisplayName,
        courseId: window.QUIZ_META.courseId,
        quizKey: window.QUIZ_META.quizKey,
        totalScore: totalScore,
        rank: rank,
        skills: radarData, // ใช้ radarData เพราะเป็น % แล้ว
        chapters: statChapters, // ส่งข้อมูลดิบของบทเรียนไปด้วยเผื่อวิเคราะห์
        timeSpent: timeSpent,
        answers: userAnswers
    };
    
    // ปิด UI ข้อสอบ
    document.getElementById('quiz-app').style.display = 'none';
    
    // แจ้งเตือนกำลังโหลด
    let loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `<h2 style="text-align:center; padding:50px;">กำลังส่งคำตอบและประมวลผล...</h2>`;
    document.body.appendChild(loadingDiv);
    
    // ส่งข้อมูลไป Google Apps Script
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // ใช้ no-cors เพื่อป้องกันปัญหา Cross-Origin
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        loadingDiv.remove();
        showResultScreen(totalScore, rank, radarData);
    })
    .catch(error => {
        console.error(error);
        loadingDiv.remove();
        alert("เกิดปัญหาในการส่งข้อมูลไปที่เซิร์ฟเวอร์ แต่เราจะแสดงผลคะแนนของคุณให้ดู");
        showResultScreen(totalScore, rank, radarData);
    });
}

// ==========================================
// แสดงผลลัพธ์และวาด Radar Chart
// ==========================================
function showResultScreen(totalScore, rank, radarData) {
    let resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');
    resultScreen.style.display = 'block'; // บังคับโชว์
    
    document.getElementById('final-rank').textContent = rank;
    
    // วาดกราฟ Radar ด้วย Chart.js
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['ทฤษฎี', 'คำนวณ', 'ประยุกต์', 'SHM', 'คลื่นกล', 'แสงเชิงคลื่น'],
            datasets: [{
                label: 'ความสามารถของคุณ (%)',
                data: [
                    radarData.theory, radarData.calc, radarData.apply, 
                    radarData.SHM, radarData.Wave, radarData.Light
                ],
                backgroundColor: 'rgba(30, 61, 143, 0.2)', // สีน้ำเงินของ WDW
                borderColor: 'rgba(30, 61, 143, 1)',
                pointBackgroundColor: 'rgba(255, 241, 115, 1)', // สีเหลือง
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(30, 61, 143, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { stepSize: 20 }
                }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}