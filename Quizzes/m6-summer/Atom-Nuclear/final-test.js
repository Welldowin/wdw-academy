let currentQuestionIndex = 0;
let userAnswers = {};
let startTime, timerInterval;
let isSubmitted = false;
let isReviewMode = false;

const ANIMAL_PERSONAS = [
    { id: "eagle", name: "🦅 อินทรี (Eagle)", desc: "เฉียบคม แม่นยำ มองภาพรวมได้ทะลุปรุโปร่ง", strength: "ทำคะแนนได้สูงในทุกมิติ", weakness: "ระวังความประมาทในจุดเล็กน้อย" },
    { id: "dragon", name: "🐉 มังกร (Dragon)", desc: "ทรงพลังในการแก้โจทย์ประยุกต์ที่ซับซ้อน", strength: "โดดเด่นด้าน Skill Apply และ Calc", weakness: "อาจลืมเก็บรายละเอียดทฤษฎีพื้นฐาน" },
    { id: "owl", name: "🦉 นกฮูก (Owl)", desc: "นักปราชญ์ผู้รอบรู้ แม่นยำในนิยามและกฎต่างๆ", strength: "ทฤษฎีแน่นมาก แทบไม่พลาดข้อลวง", weakness: "การคำนวณภายใต้ความกดดันของเวลา" },
    { id: "shark", name: "🦈 ฉลาม (Shark)", desc: "รวดเร็ว ดุดัน จัดการโจทย์คำนวณได้อย่างว่องไว", strength: "ความเร็วในการทำข้อสอบสูงมาก", weakness: "ความรอบคอบในการอ่านโจทย์แนววิเคราะห์" },
    { id: "cheetah", name: "🐆 เสือชีตาห์ (Cheetah)", desc: "เน้นความไว เข้าทำเป้าหมายได้เร็วที่สุด", strength: "บริหารเวลาได้ดีเยี่ยม", weakness: "ความแม่นยำในบทเรียนที่ต้องใช้สมาธิสูง" },
    { id: "dolphin", name: "🐬 โลมา (Dolphin)", desc: "ฉลาด พลิกแพลงเก่ง เข้าใจความสัมพันธ์ของตัวแปร", strength: "การประยุกต์ใช้สูตรข้ามบทเรียน", weakness: "ความอดทนต่อโจทย์ที่ยาวและซับซ้อน" },
    { id: "elephant", name: "🐘 ช้าง (Elephant)", desc: "มั่นคง ถาวร เก็บแต้มจากบทที่ถนัดได้แน่นอน", strength: "คะแนนในบทหลักมีความเสถียร", weakness: "การตอบสนองต่อโจทย์แนวใหม่ที่ไม่เคยเห็น" },
    { id: "fox", name: "🦊 สุนัขจิ้งจอก (Fox)", desc: "เจ้าเล่ห์ เอ้ย! เจ้าปัญญา พลิกแพลงเก่ง", strength: "การตัดช้อยส์และเดาอย่างมีหลักการ", weakness: "พื้นฐานทฤษฎีที่อาจไม่ลึกซึ้งพอ" }
];

document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    startTimer();
    
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('submit-btn').addEventListener('click', () => {
        if(confirm("ยืนยันการส่งข้อสอบ?")) finishQuiz();
    });
    document.getElementById('review-answers-btn').addEventListener('click', () => {
        isReviewMode = true;
        document.getElementById('result-view').classList.add('hidden');
        document.getElementById('question-view').classList.remove('hidden');
        renderQuestion();
    });

    // ป้องกันการ Refresh
    window.onbeforeunload = function() {
        if(!isSubmitted) return "ข้อมูลการทำข้อสอบจะหายไป คุณแน่ใจหรือไม่?";
    };
});

function initQuiz() {
    document.getElementById('quiz-title').innerText = window.QUIZ_META.title;
    renderQuestion();
}

function startTimer() {
    let timeLeft = window.QUIZ_META.timeLimitSec;
    const display = document.getElementById('timer-display');
    
    timerInterval = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
        timeLeft--;
    }, 1000);
}

function renderQuestion() {
    const q = window.QUIZ_DATA[currentQuestionIndex];
    document.getElementById('q-number').innerText = `ข้อที่ ${currentQuestionIndex + 1} / ${window.QUIZ_DATA.length}`;
    document.getElementById('q-chapter').innerText = q.subtopic;
    
    // แปลง \n เป็น <br>
    document.getElementById('q-text').innerHTML = q.prompt.replace(/\n/g, '<br>');
    
    const choicesList = document.getElementById('choices-list');
    choicesList.innerHTML = '';
    
    q.choices.forEach(choice => {
        const btn = document.createElement('div');
        btn.className = `choice-item ${userAnswers[q.id] === choice.key ? 'selected' : ''}`;
        
        // Review Mode Logic
        if(isReviewMode) {
            btn.classList.add('disabled');
            if(userAnswers[q.id] === choice.key) {
                btn.classList.add(choice.key === q.answer ? 'correct' : 'wrong');
            }
        }

        btn.innerHTML = `<span class="choice-key">${choice.key}</span> <span class="choice-text">${choice.text}</span>`;
        if(!isReviewMode) {
            btn.onclick = () => selectChoice(q.id, choice.key);
        }
        choicesList.appendChild(btn);
    });

    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / window.QUIZ_DATA.length) * 100}%`;
    
    // Nav Visibility
    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
    if(currentQuestionIndex === window.QUIZ_DATA.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        if(!isReviewMode) document.getElementById('submit-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    }

    if(window.MathJax) MathJax.typesetPromise();
}

function selectChoice(qId, key) {
    userAnswers[qId] = key;
    renderQuestion();
}

function nextQuestion() {
    if(currentQuestionIndex < window.QUIZ_DATA.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if(currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function finishQuiz() {
    isSubmitted = true;
    if(timerInterval) clearInterval(timerInterval); // Stop Clock safely

    document.getElementById('question-view').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    
    calculateResults();
}

function calculateResults() {
    let score = 0;
    let skills = { theory: {c:0, t:0}, calc: {c:0, t:0}, apply: {c:0, t:0} };
    let chapters = {}; // For Breakdown & Radar

    window.QUIZ_DATA.forEach(q => {
        // Init chapter object
        if(!chapters[q.chapter]) chapters[q.chapter] = { name: q.chapter, correct: 0, total: 0, subtopics: {} };
        if(!chapters[q.chapter].subtopics[q.subtopic]) chapters[q.chapter].subtopics[q.subtopic] = { correct: 0, total: 0 };
        
        chapters[q.chapter].total++;
        chapters[q.chapter].subtopics[q.subtopic].total++;
        skills[q.skill].t++;

        if(userAnswers[q.id] === q.answer) {
            score++;
            chapters[q.chapter].correct++;
            chapters[q.chapter].subtopics[q.subtopic].correct++;
            skills[q.skill].c++;
        }
    });

    const totalQ = window.QUIZ_DATA.length;
    const finalPct = (score / totalQ) * 100;

    // Display Stats
    document.getElementById('final-score-text').innerText = `${score} / ${totalQ}`;
    document.getElementById('final-rank').innerText = finalPct >= 80 ? 'S' : finalPct >= 70 ? 'A' : finalPct >= 60 ? 'B' : finalPct >= 50 ? 'C' : 'D';

    // Subtopic Breakdown Loop
    let breakdownHtml = '';
    for(let chap in chapters) {
        let c = chapters[chap];
        let cPct = (c.correct / c.total) * 100;
        breakdownHtml += `
            <div class="stat-group">
                <div class="stat-header">
                    <span class="stat-title">${chap}</span>
                    <span class="stat-score">${c.correct}/${c.total}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${cPct}%"></div></div>
                <div class="subtopic-list">
                    ${Object.keys(c.subtopics).map(sub => `
                        <div class="sub-item">• ${sub} (${c.subtopics[sub].correct}/${c.subtopics[sub].total})</div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    document.getElementById('stats-breakdown').innerHTML = breakdownHtml;

    // Radar Chart Logic (6 Axes)
    const radarLabels = ['ทฤษฎี', 'คำนวณ', 'ประยุกต์', 'Atomic Physics', 'Nuclear Physics', 'กัมมันตภาพรังสี'];
    const radarValues = [
        (skills.theory.c / skills.theory.t) * 100 || 0,
        (skills.calc.c / skills.calc.t) * 100 || 0,
        (skills.apply.c / skills.apply.t) * 100 || 0,
        (chapters['Atomic']?.correct / chapters['Atomic']?.total) * 100 || 0,
        (chapters['Nuclear']?.correct / chapters['Nuclear']?.total) * 100 || 0,
        (chapters['Nuclear']?.subtopics['กัมมันตภาพรังสี']?.correct / chapters['Nuclear']?.subtopics['กัมมันตภาพรังสี']?.total) * 100 || 50 // แกนที่ 6 เสริมเพื่อให้สมดุล
    ];

    new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
            labels: radarLabels,
            datasets: [{
                label: 'Performance (%)',
                data: radarValues,
                backgroundColor: 'rgba(30, 61, 143, 0.2)',
                borderColor: '#1E3D8F',
                pointBackgroundColor: '#1E3D8F'
            }]
        },
        options: { scales: { r: { beginAtZero: true, max: 100 } } }
    });

    // Persona Logic
    let persona = ANIMAL_PERSONAS[7]; // Default Fox
    if(finalPct >= 85) persona = ANIMAL_PERSONAS[0]; // Eagle
    else if(skills.calc.c / skills.calc.t > 0.8) persona = ANIMAL_PERSONAS[3]; // Shark
    else if(skills.theory.c / skills.theory.t > 0.8) persona = ANIMAL_PERSONAS[2]; // Owl
    else if(skills.apply.c / skills.apply.t > 0.7) persona = ANIMAL_PERSONAS[1]; // Dragon
    
    document.getElementById('persona-name').innerText = persona.name;
    document.getElementById('persona-desc').innerText = persona.desc;
    document.getElementById('persona-strength').innerText = persona.strength;
    document.getElementById('persona-weakness').innerText = persona.weakness;
    document.getElementById('persona-img').src = `https://api.dicebear.com/7.x/bottts/svg?seed=${persona.id}`; // ใช้ตัวแทนรูปภาพชั่วคราว
}