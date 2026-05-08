const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2yvvJ17viUPF-UHBqPhudJVH4HDfYlyDHTOSaIELFEFRhucdrILUzNI5RhOZeh0vh/exec";

// ==========================================
// ข้อมูลสัตว์ 16 ชนิด (Persona)
// ==========================================
const ANIMAL_PERSONAS = [
    { id: "eagle", name: "🦅 อินทรี (Eagle)", img: "images/eagle.png", desc: "ความเป็นเลิศที่รอบด้าน มองทะลุทุกปัญหา", strength: "คะแนนสูงทุกมิติ แม่นยำทั้งทฤษฎีและคำนวณ", weakness: "ไม่มีจุดอ่อนเด่นชัด รักษาระดับนี้ไว้ให้ได้!" },
    { id: "dragon", name: "🐉 มังกร (Dragon)", img: "images/dragon.png", desc: "ทรงพลังในบทที่ยากที่สุดและซับซ้อน", strength: "ทำข้อสอบคำนวณและโจทย์ประยุกต์ลึกๆ ได้ดีเยี่ยม", weakness: "ระวังความมั่นใจเกินไปจนพลาดทฤษฎีพื้นฐาน" },
    { id: "owl", name: "🦉 นกฮูก (Owl)", img: "images/owl.png", desc: "นักปราชญ์ผู้แม่นยำในนิยามและทฤษฎี", strength: "จำกฎและนิยามได้แม่นยำ โดนหลอกยาก", weakness: "ความเร็วในการคิดเลขและการแก้สมการหลายชั้น" },
    { id: "bear", name: "🐻 หมี (Bear)", img: "images/bear.png", desc: "พื้นฐานมั่นคง หนักแน่น ค่อยๆ คิดอย่างรอบคอบ", strength: "พื้นฐานทฤษฎีแน่นปึ้ก เข้าใจลึกซึ้ง", weakness: "ปฏิกิริยาต่อโจทย์แนวใหม่ยังช้า ต้องฝึกโจทย์พลิกแพลง" },
    { id: "parrot", name: "🦜 นกแก้ว (Parrot)", img: "images/parrot.png", desc: "ความจำดีเลิศ จำสูตรได้เป๊ะทุกตัว", strength: "ท่องจำเนื้อหาและสูตรเก่งมาก ไม่ลืมเนื้อหา", weakness: "การนำสูตรที่ท่องไปประยุกต์ใช้ในสถานการณ์จริง" },
    { id: "cheetah", name: "🐆 เสือชีตาห์ (Cheetah)", img: "images/cheetah.png", desc: "นักทำข้อสอบสายสปีด รวดเร็วปานสายฟ้า", strength: "ทำข้อสอบไว บริหารเวลาดีเยี่ยม ไม่เคยทำไม่ทัน", weakness: "มักตกม้าตายเพราะความรีบเร่ง ไม่อ่านโจทย์ให้ละเอียด" },
    { id: "monkey", name: "🐒 ลิง (Monkey)", img: "images/monkey.png", desc: "คล่องแคล่วว่องไว พลิกแพลงสมการเก่ง", strength: "ย้ายข้างสมการและจัดการตัวเลขได้ไวมาก", weakness: "ลืมใส่หน่วย หรือพลาดในขั้นตอนการคิดเลขขั้นสุดท้าย" },
    { id: "shark", name: "🦈 ฉลาม (Shark)", img: "images/shark.png", desc: "ดุดัน ไม่กลัวข้อสอบคำนวณที่โหดหิน", strength: "พุ่งชนโจทย์คำนวณยากๆ ได้ดีเยี่ยม", weakness: "โจทย์เชิงบรรยายและการวิเคราะห์กราฟ/รูปภาพ" },
    { id: "dolphin", name: "🐬 โลมา (Dolphin)", img: "images/dolphin.png", desc: "มีไหวพริบยอดเยี่ยม ประยุกต์เก่ง", strength: "เชื่อมโยงเนื้อหาและประยุกต์สูตรเก่งมาก", weakness: "ความแม่นยำในการคิดเลขซ้ำซ้อน" },
    { id: "fox", name: "🦊 สุนัขจิ้งจอก (Fox)", img: "images/fox.png", desc: "จอมวางแผน รู้ว่าข้อไหนควรข้าม ข้อไหนควรเก็บ", strength: "บริหารความเสี่ยงเก่ง ทำข้อที่ได้ชัวร์ๆ ก่อน", weakness: "ชอบทิ้งดิ่งบางบทที่ตัวเองไม่ถนัด ทำให้เสียคะแนนรวม" },
    { id: "spider", name: "🕷️ แมงมุม (Spider)", img: "images/spider.png", desc: "มองภาพรวมเป็นโครงข่าย เชื่อมโยงได้ทุกบท", strength: "คะแนนสมดุลทุกบทเรียน ไม่มีบทไหนตกเป็นพิเศษ", weakness: "ยังขาดความลึกในแต่ละบท ต้องเจาะลึกทฤษฎีเฉพาะทาง" },
    { id: "elephant", name: "🐘 ช้าง (Elephant)", img: "images/elephant.png", desc: "รอบคอบสูงสุด ทำข้อไหนรับประกันว่าถูก", strength: "ความแม่นยำสูงมาก แทบไม่พลาดข้อที่ทำ", weakness: "ใช้เวลาตรวจสอบนานเกินไปจนอาจทำข้อสอบไม่ทัน" },
    { id: "tortoise", name: "🐢 เต่า (Tortoise)", img: "images/tortoise.png", desc: "ช้าแต่มั่นคง ค่อยๆ เป็นค่อยๆ ไป", strength: "มีความอดทนในการทำความเข้าใจโจทย์", weakness: "สปีดการทำข้อสอบ ต้องเร่งความเร็วในการวิเคราะห์" },
    { id: "cat", name: "🐈 แมว (Cat)", img: "images/cat.png", desc: "อินดี้ มีสไตล์ เก่งเฉพาะเรื่องที่ชอบ", strength: "เทพมากในบทใดบทหนึ่งเป็นพิเศษ", weakness: "ทิ้งบทที่ไม่ชอบอย่างเห็นได้ชัด ต้องปรับสมดุล" },
    { id: "bee", name: "🐝 ผึ้ง (Bee)", img: "images/bee.png", desc: "ขยันขันแข็ง เก็บรายละเอียดได้ดี", strength: "มีความพยายามสูง ไม่ปล่อยว่างข้อสอบ", weakness: "มักจะลนลานเมื่อเจอโจทย์ผสมที่ยากเกินไป" },
    { id: "ant", name: "🐜 มด (Ant)", img: "images/ant.png", desc: "พลังมดตัวน้อยที่กำลังสะสมความรู้", strength: "พยายามทำจนครบทุกข้อและมีพื้นฐานเบื้องต้น", weakness: "ต้องกลับไปทบทวนพื้นฐานอย่างเร่งด่วน!" }
];

// ==========================================
// ตัวแปรควบคุมการทำงาน
// ==========================================
let currentQuestionIndex = 0;
let userAnswers = {};
let timeSpent = {};
let questionStartTime = 0;
let mainTimeRemaining = window.QUIZ_META.timeLimitSec;
let mainTimerInterval = null;
let isSubmitted = false;

const userId = localStorage.getItem('userId') || 'guest';
const userDisplayName = localStorage.getItem('userDisplayName') || "นักเรียน";
const STORAGE_KEY = `WDW_FINAL_${userId}_${window.QUIZ_META.quizKey}`; 

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('student-name').textContent = `ผู้สอบ: ${userDisplayName}`;
    document.getElementById('quiz-title').textContent = window.QUIZ_META.title;

    buildNavigator();

    document.getElementById('choices-list').addEventListener('change', function(e) {
        if (e.target.name === 'choice' && !isSubmitted) {
            let qId = QUIZ_DATA[currentQuestionIndex].id;
            userAnswers[qId] = e.target.value;
            saveStateToLocal();
            updateNavigator();
        }
    });

    let savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        let state = JSON.parse(savedState);
        userAnswers = state.answers || {};
        timeSpent = state.timeSpent || {};
        
        if (state.isSubmitted) {
            isSubmitted = true;
            mainTimeRemaining = 0;
            document.getElementById('time-display').textContent = "ส่งแล้ว";
            showResultScreen(state.radarData, state.totalScore);
            return;
        } else {
            mainTimeRemaining = state.timeLeft || mainTimeRemaining;
        }
    }

    renderQuestion(currentQuestionIndex);
    startMainTimer();
});

function saveStateToLocal() {
    let state = {
        answers: userAnswers,
        timeSpent: timeSpent,
        timeLeft: mainTimeRemaining,
        isSubmitted: isSubmitted
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function startMainTimer() {
    if(isSubmitted) return;
    mainTimerInterval = setInterval(() => {
        if (isSubmitted) return;
        mainTimeRemaining--;
        let m = Math.floor(mainTimeRemaining / 60);
        let s = mainTimeRemaining % 60;
        document.getElementById('time-display').textContent = `${m}:${s < 10 ? '0'+s : s}`;
        
        if (mainTimeRemaining % 10 === 0) saveStateToLocal();
        
        if (mainTimeRemaining <= 0) {
            clearInterval(mainTimerInterval);
            alert("หมดเวลา! ระบบจะส่งคำตอบโดยอัตโนมัติ");
            submitQuiz();
        }
    }, 1000);
}

function recordTimeSpent() {
    if(isSubmitted) return;
    let qId = QUIZ_DATA[currentQuestionIndex].id;
    let now = Date.now();
    let spentThisTime = Math.floor((now - questionStartTime) / 1000);
    if (!timeSpent[qId]) timeSpent[qId] = 0;
    timeSpent[qId] += spentThisTime;
}

function renderQuestion(index) {
    let q = QUIZ_DATA[index];
    questionStartTime = Date.now();
    
    document.getElementById('question-number').textContent = `ข้อที่ ${index + 1} / ${QUIZ_DATA.length}`;
    let skillName = q.skill === "theory" ? "ทฤษฎี" : (q.skill === "calc" ? "คำนวณ" : "ประยุกต์ใช้");
    document.getElementById('question-category').textContent = `${q.subtopic} | ${skillName}`;
    
    // แปลง \n และ \\n ให้เป็นการขึ้นบรรทัดใหม่
    let formattedPrompt = q.prompt.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    document.getElementById('question-text').innerHTML = formattedPrompt;
    
    let imgContainer = document.getElementById('question-image-container');
    imgContainer.innerHTML = q.image ? `<img src="${q.image}" alt="รูปประกอบ" style="max-width:100%; border-radius:8px; margin-top:15px; border:1px solid #ccc;">` : '';
    
    let choicesHtml = '';
    q.choices.forEach(choice => {
        let isChecked = userAnswers[q.id] === choice.key ? 'checked' : '';
        let disabledAttr = isSubmitted ? 'disabled' : '';
        let disabledClass = isSubmitted ? 'disabled' : '';
        
        choicesHtml += `
            <label class="choice-item ${disabledClass}">
                <input type="radio" name="choice" value="${choice.key}" ${isChecked} ${disabledAttr}>
                ${choice.text}
            </label>
        `;
    });
    document.getElementById('choices-list').innerHTML = choicesHtml;
    
    let fbBox = document.getElementById('feedback-box');
    if (isSubmitted) {
        document.getElementById('review-banner').classList.remove('hidden');
        fbBox.classList.remove('hidden');
        if (userAnswers[q.id] === q.answer) {
            fbBox.className = "feedback-box correct";
            fbBox.innerHTML = "✅ คุณตอบถูก";
        } else {
            fbBox.className = "feedback-box incorrect";
            fbBox.innerHTML = "❌ คุณตอบผิด (ไม่อนุญาตให้ดูเฉลยที่ถูกต้อง)";
        }
    } else {
        fbBox.classList.add('hidden');
    }
    
    document.getElementById('prev-btn').disabled = (index === 0);
    
    if (index === QUIZ_DATA.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        if(!isSubmitted) document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }

    if (isSubmitted) {
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('back-to-result-btn').classList.remove('hidden');
    }
    
    updateNavigator();
    
    // รีเฟรช MathJax (เช็คก่อนว่าฟังก์ชันพร้อมใช้งานแล้วจริงๆ)
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') { 
        MathJax.typesetPromise().catch((err) => console.log('MathJax Error:', err));
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    recordTimeSpent();
    if (currentQuestionIndex > 0) renderQuestion(--currentQuestionIndex);
});
document.getElementById('next-btn').addEventListener('click', () => {
    recordTimeSpent();
    if (currentQuestionIndex < QUIZ_DATA.length - 1) renderQuestion(++currentQuestionIndex);
});
document.getElementById('back-to-result-btn').addEventListener('click', () => {
    document.getElementById('quiz-app').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
});
document.getElementById('review-answers-btn').addEventListener('click', () => {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-app').style.display = 'block';
    renderQuestion(0);
});

document.getElementById('submit-btn').addEventListener('click', () => {
    let answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < QUIZ_DATA.length) {
        if (!confirm(`คุณทำไปเพียง ${answeredCount} จาก ${QUIZ_DATA.length} ข้อ ยืนยันที่จะส่งหรือไม่?`)) return;
    } else {
        if (!confirm("คุณตรวจสอบคำตอบเรียบร้อยและต้องการส่งข้อสอบใช่หรือไม่?")) return;
    }
    submitQuiz();
});

function buildNavigator() {
    let navHtml = '';
    QUIZ_DATA.forEach((q, i) => {
        navHtml += `<button class="nav-btn" id="nav-btn-${i}" onclick="jumpTo(${i})">${i + 1}</button>`;
    });
    document.getElementById('question-nav-grid').innerHTML = navHtml;
}

function jumpTo(index) {
    recordTimeSpent();
    currentQuestionIndex = index;
    renderQuestion(currentQuestionIndex);
}

function updateNavigator() {
    QUIZ_DATA.forEach((q, i) => {
        let btn = document.getElementById(`nav-btn-${i}`);
        btn.className = "nav-btn";
        
        if (i === currentQuestionIndex) btn.classList.add('active');
        else if (userAnswers[q.id]) btn.classList.add('answered');

        if (isSubmitted && userAnswers[q.id]) {
            if (userAnswers[q.id] === q.answer) btn.classList.add('correct-ans');
            else btn.classList.add('wrong-ans');
        }
    });
}

function calculateRank(percent) {
    if(percent >= 85) return { rank: 'S', color: '#8b5cf6' };
    if(percent >= 70) return { rank: 'A', color: '#22c55e' };
    if(percent >= 50) return { rank: 'B', color: '#f59e0b' };
    return { rank: 'C', color: '#ef4444' };
}

function determinePersona(radar, totalPercent, timeAvg) {
    if (totalPercent >= 85) return ANIMAL_PERSONAS.find(a => a.id === 'eagle');
    if (radar.OrgRxn >= 80 && radar.calc >= 80 && totalPercent >= 75) return ANIMAL_PERSONAS.find(a => a.id === 'dragon');
    if (radar.theory >= 80 && radar.calc < 60) return ANIMAL_PERSONAS.find(a => a.id === 'owl');
    if (timeAvg > 0 && timeAvg < 40 && totalPercent >= 60) return ANIMAL_PERSONAS.find(a => a.id === 'cheetah');
    if (radar.calc >= 80 && radar.theory < 60) return ANIMAL_PERSONAS.find(a => a.id === 'monkey');
    if (radar.apply >= 80) return ANIMAL_PERSONAS.find(a => a.id === 'dolphin');
    if (timeAvg > 100 && totalPercent >= 70) return ANIMAL_PERSONAS.find(a => a.id === 'elephant');
    if (totalPercent < 40) return ANIMAL_PERSONAS.find(a => a.id === 'ant');
    return ANIMAL_PERSONAS.find(a => a.id === 'bear');
}

function submitQuiz() {
    if (isSubmitted) return;
    isSubmitted = true;
    recordTimeSpent();
    clearInterval(mainTimerInterval);
    
    let totalScore = 0;
    
    // โครงสร้างหมวดหมู่ใหม่สำหรับ ม.6 เคมี (พื้นฐานอินทรีย์, ปฏิกิริยาอินทรีย์, พอลิเมอร์)
    let statSkills = { theory: {c:0, t:0, name:"ทฤษฎี"}, calc: {c:0, t:0, name:"คำนวณ"}, apply: {c:0, t:0, name:"ประยุกต์"} };
    let statChapters = { 
        OrgBasic: {c:0, t:0, name:"พื้นฐานอินทรีย์", subtopics: {}}, 
        OrgRxn: {c:0, t:0, name:"ปฏิกิริยาอินทรีย์", subtopics: {}}, 
        Polymer: {c:0, t:0, name:"พอลิเมอร์", subtopics: {}} 
    };
    
    QUIZ_DATA.forEach(q => {
        let isCorrect = (userAnswers[q.id] === q.answer);
        if (isCorrect) totalScore++;
        
        if (statSkills[q.skill]) {
            statSkills[q.skill].t++;
            if (isCorrect) statSkills[q.skill].c++;
        }
        
        if (statChapters[q.chapter]) {
            statChapters[q.chapter].t++;
            if (isCorrect) statChapters[q.chapter].c++;
            
            if (!statChapters[q.chapter].subtopics[q.subtopic]) {
                statChapters[q.chapter].subtopics[q.subtopic] = {c:0, t:0};
            }
            statChapters[q.chapter].subtopics[q.subtopic].t++;
            if (isCorrect) statChapters[q.chapter].subtopics[q.subtopic].c++;
        }
    });
    
    let calcPercent = (stat) => stat.t > 0 ? Math.round((stat.c / stat.t) * 100) : 0;
    
    let radarData = {
        theory: calcPercent(statSkills.theory),
        calc: calcPercent(statSkills.calc),
        apply: calcPercent(statSkills.apply),
        OrgBasic: calcPercent(statChapters.OrgBasic),
        OrgRxn: calcPercent(statChapters.OrgRxn),
        Polymer: calcPercent(statChapters.Polymer),
        details: { ...statSkills, ...statChapters }
    };
    
    let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.isSubmitted = true;
    state.radarData = radarData;
    state.totalScore = totalScore;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    let rankObj = calculateRank((totalScore/QUIZ_DATA.length)*100);
    
    let payload = {
        userId: userId,
        displayName: userDisplayName,
        courseId: window.QUIZ_META.courseId,
        quizKey: window.QUIZ_META.quizKey,
        totalScore: totalScore,
        rank: rankObj.rank,
        skills: radarData,
        timeSpent: timeSpent,
        answers: userAnswers
    };
    
    document.getElementById('quiz-app').style.display = 'none';
    let loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `<h2 style="text-align:center; padding:50px;">กำลังส่งคำตอบและประมวลผล...</h2>`;
    document.body.appendChild(loadingDiv);
    
    fetch(APPS_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(() => {
        loadingDiv.remove();
        showResultScreen(radarData, totalScore);
    }).catch(e => {
        loadingDiv.remove();
        showResultScreen(radarData, totalScore);
    });
}

function showResultScreen(radarData, totalScore) {
    document.getElementById('quiz-app').style.display = 'none';
    let resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');
    resultScreen.style.display = 'block';
    
    if(!radarData || typeof radarData.theory === 'undefined') {
        radarData = { theory: 0, calc: 0, apply: 0, OrgBasic: 0, OrgRxn: 0, Polymer: 0, details: {} };
    }
    
    let totalPercent = (totalScore / QUIZ_DATA.length) * 100;
    let rankObj = calculateRank(totalPercent);
    
    let finalScoreText = document.getElementById('final-score-text');
    if(finalScoreText) finalScoreText.textContent = `${totalScore} / ${QUIZ_DATA.length}`;
    
    let finalRank = document.getElementById('final-rank');
    if(finalRank) {
        finalRank.textContent = rankObj.rank;
        finalRank.style.color = rankObj.color;
    }

    let totalSec = Object.values(timeSpent).reduce((a, b) => a + b, 0);
    let avgTime = totalSec > 0 ? (totalSec / QUIZ_DATA.length) : 0;

    let persona = determinePersona(radarData, totalPercent, avgTime);
    if(persona) {
        document.getElementById('persona-img').src = persona.img;
        document.getElementById('persona-name').textContent = persona.name;
        document.getElementById('persona-desc').textContent = persona.desc;
        document.getElementById('persona-strength').textContent = persona.strength;
        document.getElementById('persona-weakness').textContent = persona.weakness;
    }

    let statsHtml = '';
    // แกนหมวดหมู่ 6 แกน สำหรับ ม.6 เคมี
    const categories = ['theory', 'calc', 'apply', 'OrgBasic', 'OrgRxn', 'Polymer'];
    
    categories.forEach(cat => {
        let pct = radarData[cat] || 0;
        let rObj = calculateRank(pct);
        let title = (radarData.details && radarData.details[cat]) ? radarData.details[cat].name : cat;
        
        let subtopicsHtml = '';
        if (radarData.details[cat] && radarData.details[cat].subtopics) {
            let subs = radarData.details[cat].subtopics;
            subtopicsHtml = `<div style="margin-top: 10px; border-top: 1px dashed #e2e8f0; padding-top: 8px;">`;
            for (let sub in subs) {
                let sCorrect = subs[sub].c;
                let sTotal = subs[sub].t;
                let color = sCorrect === sTotal ? '#16a34a' : (sCorrect > 0 ? '#ca8a04' : '#dc2626');
                subtopicsHtml += `
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#64748b; margin-bottom:4px; text-align: left;">
                        <span>- ${sub}</span>
                        <strong style="color: ${color};">${sCorrect}/${sTotal}</strong>
                    </div>`;
            }
            subtopicsHtml += `</div>`;
        }

        statsHtml += `
            <div class="stat-item" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div class="stat-title">${title}</div>
                    <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${pct}%; background-color: ${rObj.color}"></div></div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="stat-score">${pct}%</span>
                        <span class="stat-rank" style="background-color: ${rObj.color}20; color: ${rObj.color};">${rObj.rank}</span>
                    </div>
                </div>
                ${subtopicsHtml}
            </div>
        `;
    });
    
    let statsBox = document.getElementById('stats-breakdown');
    if(statsBox) statsBox.innerHTML = statsHtml;

    // วาด Radar Chart
    const canvas = document.getElementById('radarChart');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['ทฤษฎี', 'คำนวณ', 'ประยุกต์', 'พื้นฐานอินทรีย์', 'ปฏิกิริยาอินทรีย์', 'พอลิเมอร์'],
                datasets: [{
                    label: 'ความสามารถของคุณ (%)',
                    data: [ radarData.theory, radarData.calc, radarData.apply, radarData.OrgBasic, radarData.OrgRxn, radarData.Polymer ],
                    backgroundColor: 'rgba(30, 61, 143, 0.2)',
                    borderColor: 'rgba(30, 61, 143, 1)',
                    pointBackgroundColor: 'rgba(217, 76, 76, 1)',
                    borderWidth: 2
                }]
            },
            options: { scales: { r: { suggestedMin: 0, suggestedMax: 100 } } }
        });
    }
}
