const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2yvvJ17viUPF-UHBqPhudJVH4HDfYlyDHTOSaIELFEFRhucdrILUzNI5RhOZeh0vh/exec";

// ==========================================
// ข้อมูลสัตว์ 16 ชนิด
// ==========================================
const ANIMAL_PERSONAS = [
    { id: "eagle", name: "🦅 อินทรี (Eagle)", img: "images/eagle.png", desc: "ความเป็นเลิศที่รอบด้าน มองทะลุทุกปัญหา", strength: "คะแนนสูงทุกมิติ แม่นยำทั้งทฤษฎีและคำนวณ", weakness: "ไม่มีจุดอ่อนเด่นชัด รักษาระดับนี้ไว้ให้ได้!" },
    { id: "dragon", name: "🐉 มังกร (Dragon)", img: "images/dragon.png", desc: "ทรงพลังในบทที่ยากที่สุดและซับซ้อน", strength: "ทำข้อสอบคำนวณและโจทย์ประยุกต์ลึกๆ ได้ดีเยี่ยม", weakness: "ระวังความมั่นใจเกินไปจนพลาดทฤษฎีพื้นฐาน" },
    { id: "owl", name: "🦉 นกฮูก (Owl)", img: "images/owl.png", desc: "นักปราชญ์ผู้แม่นยำในนิยามและทฤษฎี", strength: "จำกฎและนิยามทางฟิสิกส์ได้แม่นยำ โดนหลอกยาก", weakness: "ความเร็วในการคิดเลขและการแก้สมการหลายชั้น" },
    { id: "bear", name: "🐻 หมี (Bear)", img: "images/bear.png", desc: "พื้นฐานมั่นคง หนักแน่น ค่อยๆ คิดอย่างรอบคอบ", strength: "พื้นฐานทฤษฎีแน่นปึ้ก เข้าใจลึกซึ้ง", weakness: "ปฏิกิริยาต่อโจทย์แนวใหม่ยังช้า ต้องฝึกโจทย์พลิกแพลง" },
    { id: "parrot", name: "🦜 นกแก้ว (Parrot)", img: "images/parrot.png", desc: "ความจำดีเลิศ จำสูตรได้เป๊ะทุกตัว", strength: "ท่องจำเนื้อหาและสูตรเก่งมาก ไม่ลืมเนื้อหา", weakness: "การนำสูตรที่ท่องไปประยุกต์ใช้ในสถานการณ์จริง" },
    { id: "cheetah", name: "🐆 เสือชีตาห์ (Cheetah)", img: "images/cheetah.png", desc: "นักทำข้อสอบสายสปีด รวดเร็วปานสายฟ้า", strength: "ทำข้อสอบไว บริหารเวลาดีเยี่ยม ไม่เคยทำไม่ทัน", weakness: "มักตกม้าตายเพราะความรีบเร่ง ไม่อ่านโจทย์ให้ละเอียด" },
    { id: "monkey", name: "🐒 ลิง (Monkey)", img: "images/monkey.png", desc: "คล่องแคล่วว่องไว พลิกแพลงสมการเก่ง", strength: "ย้ายข้างสมการและจัดการตัวเลขได้ไวมาก", weakness: "ลืมใส่หน่วย หรือพลาดในขั้นตอนการคิดเลขขั้นสุดท้าย" },
    { id: "shark", name: "🦈 ฉลาม (Shark)", img: "images/shark.png", desc: "ดุดัน ไม่กลัวข้อสอบคำนวณที่โหดหิน", strength: "พุ่งชนโจทย์คำนวณยากๆ ได้ดีเยี่ยม", weakness: "โจทย์เชิงบรรยายและการวิเคราะห์กราฟ/รูปภาพ" },
    { id: "dolphin", name: "🐬 โลมา (Dolphin)", img: "images/dolphin.png", desc: "มีไหวพริบยอดเยี่ยม ประยุกต์เก่ง", strength: "เชื่อมโยงเนื้อหาและประยุกต์สูตรเก่งมาก", weakness: "ความแม่นยำในการคิดเลขซ้ำซ้อน" },
    { id: "fox", name: "🦊 สุนัขจิ้งจอก (Fox)", img: "images/fox.png", desc: "จอมวางแผน รู้ว่าข้อไหนควรข้าม ข้อไหนควรเก็บ", strength: "บริหารความเสี่ยงเก่ง ทำข้อที่ได้ชัวร์ๆ ก่อน", weakness: "ชอบทิ้งดิ่งบางบทที่ตัวเองไม่ถนัด ทำให้เสียคะแนนรวม" },
    { id: "spider", name: "🕷️ แมงมุม (Spider)", img: "images/spider.png", desc: "มองฟิสิกส์เป็นโครงข่าย เชื่อมโยงได้ทุกบท", strength: "คะแนนสมดุลทุกบทเรียน ไม่มีบทไหนตกเป็นพิเศษ", weakness: "ยังขาดความลึกในแต่ละบท ต้องเจาะลึกทฤษฎีเฉพาะทาง" },
    { id: "elephant", name: "🐘 ช้าง (Elephant)", img: "images/elephant.png", desc: "รอบคอบสูงสุด ทำข้อไหนรับประกันว่าถูก", strength: "ความแม่นยำสูงมาก แทบไม่พลาดข้อที่ทำ", weakness: "ใช้เวลาตรวจสอบนานเกินไปจนอาจทำข้อสอบไม่ทัน" },
    { id: "tortoise", name: "🐢 เต่า (Tortoise)", img: "images/tortoise.png", desc: "ช้าแต่มั่นคง ค่อยๆ เป็นค่อยๆ ไป", strength: "มีความอดทนในการทำความเข้าใจโจทย์", weakness: "สปีดการทำข้อสอบ ต้องเร่งความเร็วในการวิเคราะห์" },
    { id: "cat", name: "🐈 แมว (Cat)", img: "images/cat.png", desc: "อินดี้ มีสไตล์ เก่งเฉพาะเรื่องที่ชอบ", strength: "เทพมากในบทใดบทหนึ่งเป็นพิเศษ", weakness: "ทิ้งบทที่ไม่ชอบอย่างเห็นได้ชัด ต้องปรับสมดุล" },
    { id: "bee", name: "🐝 ผึ้ง (Bee)", img: "images/bee.png", desc: "ขยันขันแข็ง เก็บรายละเอียดได้ดี", strength: "มีความพยายามสูง ไม่ปล่อยว่างข้อสอบ", weakness: "มักจะลนลานเมื่อเจอโจทย์ผสมที่ยากเกินไป" },
    { id: "ant", name: "🐜 มด (Ant)", img: "images/ant.png", desc: "พลังมดตัวน้อยที่กำลังสะสมความรู้", strength: "พยายามทำจนครบทุกข้อและมีพื้นฐานเบื้องต้น", weakness: "ต้องกลับไปทบทวนพื้นฐานทุกบทอย่างเร่งด่วน!" }
];

// ==========================================
// ตัวแปรควบคุม
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
            AntiCheat.onAnswer(qId);
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
            if (state.held) {
                showHeldScreen();
                checkHoldStatus(true);
                return;
            }
            showResultScreen(state.radarData, state.totalScore);
            return;
        } else {
            // อัปเดตให้เช็คว่ามีค่าชัดเจนหรือไม่ เพื่อป้องกันกรณีค่าเวลาเป็น 0 หรือ false ถูกประเมินผิด
            mainTimeRemaining = (state.timeLeft !== undefined && state.timeLeft !== null) ? state.timeLeft : mainTimeRemaining;
        }
    }

    AntiCheat.start({ key: STORAGE_KEY });
    AntiCheat.guard(document.getElementById('question-card'));
    renderQuestion(currentQuestionIndex);
    startMainTimer(); // ตอนนี้โค้ดจะทำงานมาถึงตรงนี้ได้อย่างปลอดภัยแล้ว
});

// ==========================================
// บันทึกสถานะ / ระบบเวลา
// ==========================================
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
            AntiCheat.suspend(true);
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

// ==========================================
// Render ข้อสอบ
// ==========================================
function renderQuestion(index) {
    let q = QUIZ_DATA[index];
    questionStartTime = Date.now();
    
    document.getElementById('question-number').textContent = `ข้อที่ ${index + 1} / ${QUIZ_DATA.length}`;
    let skillName = q.skill === "theory" ? "ทฤษฎี" : (q.skill === "calc" ? "คำนวณ" : "ประยุกต์ใช้");
    document.getElementById('question-category').textContent = `${q.subtopic} | ${skillName}`;
    
    // ดักจับ \n และ \\n เพื่อขึ้นบรรทัดใหม่
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
    
    // แก้ไขจุดนี้: เพิ่มการตรวจสอบ typeof เพื่อป้องกัน TypeError ตอนโหลด MathJax ยังไม่เสร็จ
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') { 
        MathJax.typesetPromise().catch((err) => console.log('MathJax Error:', err));
    }
}

// ควบคุมปุ่ม
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
    AntiCheat.suspend(true);   // dialog ของเบราว์เซอร์ทำให้หน้าเสีย focus ไม่นับเป็นการสลับหน้า
    if (answeredCount < QUIZ_DATA.length) {
        if (!confirm(`คุณทำไปเพียง ${answeredCount} จาก ${QUIZ_DATA.length} ข้อ ยืนยันที่จะส่งหรือไม่?`)) { AntiCheat.suspend(false); return; }
    } else {
        if (!confirm("คุณตรวจสอบคำตอบเรียบร้อยและต้องการส่งข้อสอบใช่หรือไม่?")) { AntiCheat.suspend(false); return; }
    }
    submitQuiz();
});

// ==========================================
// Navigator
// ==========================================
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

// ==========================================
// ประมวลผลคะแนน และ Subtopics (ม.2 บทที่ 3 แรง มวล และกฎการเคลื่อนที่)
// ==========================================
function calculateRank(percent) {
    if(percent >= 85) return { rank: 'S', color: '#8b5cf6' };
    if(percent >= 70) return { rank: 'A', color: '#22c55e' };
    if(percent >= 50) return { rank: 'B', color: '#f59e0b' };
    return { rank: 'C', color: '#ef4444' };
}

function determinePersona(radar, totalPercent, timeAvg) {
    const P = id => ANIMAL_PERSONAS.find(a => a.id === id);
    const theory = radar.theory || 0, calc = radar.calc || 0, apply = radar.apply || 0;
    const chapters = [radar.Vector || 0, radar.Mass || 0, radar.Friction || 0, radar.Incline || 0];
    const best = Math.max(...chapters), worst = Math.min(...chapters), gap = best - worst;
    const answered = Object.keys(userAnswers).length;

    if (totalPercent >= 85) return P('eagle');
    if (radar.Incline >= 80 && calc >= 80 && totalPercent >= 75) return P('dragon');
    if (theory >= 80 && calc < 60) return P('owl');
    if (timeAvg > 0 && timeAvg < 40 && totalPercent >= 60) return P('cheetah');
    if (calc >= 80 && theory < 60) return P('monkey');
    if (calc >= 70 && calc >= theory + 20) return P('shark');
    if (apply >= 80) return P('dolphin');
    if (theory >= 70 && apply < 50) return P('parrot');
    if (timeAvg > 100 && totalPercent >= 70) return P('elephant');
    if (timeAvg > 100 && totalPercent >= 40) return P('tortoise');
    if (gap >= 50 && best >= 75 && totalPercent < 60) return P('cat');
    if (gap >= 40 && totalPercent >= 60) return P('fox');
    if (gap <= 20 && totalPercent >= 50) return P('spider');
    if (answered >= QUIZ_DATA.length && totalPercent >= 40 && totalPercent < 60) return P('bee');
    if (totalPercent < 40) return P('ant');
    return P('bear');
}

function submitQuiz() {
    if (isSubmitted) return;
    isSubmitted = true;
    recordTimeSpent();
    clearInterval(mainTimerInterval);
    
    let totalScore = 0;
    
    // โครงสร้างหัวข้อ: เวกเตอร์ / ระบบมวลราบและดิ่ง / แรงเสียดทาน / พื้นเอียง
    let statSkills = { theory: {c:0, t:0, name:"ทฤษฎี"}, calc: {c:0, t:0, name:"คำนวณ"}, apply: {c:0, t:0, name:"ประยุกต์"} };
    let statChapters = { 
        Vector: {c:0, t:0, name:"เวกเตอร์", subtopics: {}}, 
        Mass: {c:0, t:0, name:"ระบบมวลราบและดิ่ง", subtopics: {}}, 
        Friction: {c:0, t:0, name:"แรงเสียดทาน", subtopics: {}}, 
        Incline: {c:0, t:0, name:"พื้นเอียง", subtopics: {}} 
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
        Vector: calcPercent(statChapters.Vector),
        Mass: calcPercent(statChapters.Mass),
        Friction: calcPercent(statChapters.Friction),
        Incline: calcPercent(statChapters.Incline),
        details: { ...statSkills, ...statChapters }
    };
    
    // ตรวจพฤติกรรมระหว่างสอบ → คะแนนความเสี่ยง (เซิร์ฟเวอร์คำนวณซ้ำจาก signals อีกครั้ง)
    let ac = AntiCheat.finish({
        quizData: QUIZ_DATA, userAnswers: userAnswers, timeSpent: timeSpent,
        timeLimitSec: window.QUIZ_META.timeLimitSec, totalScore: totalScore
    });

    let rankObj = calculateRank((totalScore/QUIZ_DATA.length)*100);

    let payload = {
        userId: userId,
        displayName: userDisplayName,
        courseId: window.QUIZ_META.courseId,
        quizKey: window.QUIZ_META.quizKey,
        title: window.QUIZ_META.title,
        totalScore: totalScore,
        totalQuestions: QUIZ_DATA.length,
        rank: rankObj.rank,
        skills: radarData,
        timeSpent: timeSpent,
        answers: userAnswers,
        ac: ac
    };

    // เก็บสถานะ "ส่งแล้ว" (ยังไม่เก็บคะแนน เพราะอาจถูกถือผลไว้)
    let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.isSubmitted = true;
    state.answers = userAnswers;
    state.timeSpent = timeSpent;
    state.pendingPayload = payload;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    document.getElementById('quiz-app').style.display = 'none';
    let loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `<h2 style="text-align:center; padding:50px;">กำลังส่งคำตอบและประมวลผล...</h2>`;
    document.body.appendChild(loadingDiv);

    sendFinalPayload(payload, loadingDiv);
}

// ส่งผลสอบ → เซิร์ฟเวอร์ตอบ status: "success" (ปล่อยผล) หรือ "held" (ถือผลรอแอดมิน)
function sendFinalPayload(payload, loadingDiv) {
    callGateway(payload).then(res => {
        if (loadingDiv) loadingDiv.remove();
        let st = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        if ((res && res.status === "held") || (payload.ac && payload.ac.level === "hold")) {
            // ถือผลไว้ (ถ้าเซิร์ฟเวอร์ยังเป็นเวอร์ชันเก่าที่ไม่รู้จัก hold ก็ถือฝั่งหน้าเว็บไว้ด้วย)
            st.held = true;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
            showHeldScreen();
        } else {
            releaseResult(st, payload.skills, payload.totalScore);
        }
    }).catch(() => {
        if (loadingDiv) loadingDiv.remove();
        let st = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        if (payload.ac && payload.ac.level === "hold") {
            st.held = true;      // ส่งไม่สำเร็จ + เสี่ยงสูง → ยังไม่โชว์ผล เก็บไว้ส่งซ้ำ
            localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
            showHeldScreen('ส่งข้อมูลไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ตแล้วกด "ตรวจสอบสถานะ" เพื่อส่งใหม่');
        } else {
            releaseResult(st, payload.skills, payload.totalScore);   // เสี่ยงต่ำ: โชว์ผลได้ตามเดิม
        }
    });
}

function releaseResult(state, radarData, totalScore) {
    state.held = false;
    state.radarData = radarData;
    state.totalScore = totalScore;
    delete state.pendingPayload;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    let h = document.getElementById('held-screen');
    if (h) h.style.display = 'none';
    showResultScreen(radarData, totalScore);
}

async function callGateway(payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

// ==========================================
// หน้า "ผลอยู่ระหว่างตรวจสอบ" (ถูกถือผลไว้รอแอดมิน)
// ==========================================
function showHeldScreen(msg) {
    document.getElementById('quiz-app').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    let h = document.getElementById('held-screen');
    h.classList.remove('hidden');
    h.style.display = 'block';
    document.getElementById('held-msg').textContent = msg || "ข้อสอบของคุณถูกส่งเรียบร้อยแล้ว ผลสอบอยู่ระหว่างการตรวจสอบโดยครูผู้สอน จะประกาศให้ทราบเมื่อตรวจสอบเสร็จ";
}

async function checkHoldStatus(silent) {
    const msgEl = document.getElementById('held-msg');
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    try {
        let res = await callGateway({
            action: "getHoldStatus", userId: userId,
            courseId: window.QUIZ_META.courseId, quizKey: window.QUIZ_META.quizKey
        });
        // ถ้าไม่เคยส่งถึงเซิร์ฟเวอร์ (ไม่มีแถวถือผล) และยังเก็บ payload ไว้ → ส่งใหม่
        if (res.status === "none" && state.pendingPayload) {
            res = await callGateway(state.pendingPayload);
            if (res.status === "held") { msgEl.textContent = "ส่งข้อมูลเรียบร้อย ผลสอบอยู่ระหว่างการตรวจสอบโดยครูผู้สอน"; return; }
        }
        if (res.status === "released") {
            releaseResult(state, res.skills || (state.pendingPayload && state.pendingPayload.skills), res.totalScore);
        } else if (res.status === "rejected") {
            msgEl.textContent = "ครูผู้สอนยังไม่ประกาศผลข้อสอบนี้ กรุณาติดต่อครูผู้สอน";
        } else if (!silent) {
            msgEl.textContent = "ผลสอบยังอยู่ระหว่างการตรวจสอบโดยครูผู้สอน กรุณารอสักครู่แล้วลองใหม่";
        }
    } catch (e) {
        if (!silent) msgEl.textContent = "เชื่อมต่อไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่";
    }
}

// ==========================================
// หน้าแสดงผล (Result)
// ==========================================
function showResultScreen(radarData, totalScore) {
    document.getElementById('quiz-app').style.display = 'none';
    let resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');
    resultScreen.style.display = 'block';
    
    if(!radarData || typeof radarData.theory === 'undefined') {
        radarData = { theory: 0, calc: 0, apply: 0, Vector: 0, Mass: 0, Friction: 0, Incline: 0, details: {} };
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
    // แกนหมวดหมู่ ม.2 บทที่ 3
    const categories = ['theory', 'calc', 'apply', 'Vector', 'Mass', 'Friction', 'Incline'];
    
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

    // วาด Radar ม.2 บทที่ 3
    const canvas = document.getElementById('radarChart');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['ทฤษฎี', 'คำนวณ', 'ประยุกต์', 'เวกเตอร์', 'ระบบมวลราบและดิ่ง', 'แรงเสียดทาน', 'พื้นเอียง'],
                datasets: [{
                    label: 'ความสามารถของคุณ (%)',
                    data: [ radarData.theory, radarData.calc, radarData.apply, radarData.Vector, radarData.Mass, radarData.Friction, radarData.Incline ],
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