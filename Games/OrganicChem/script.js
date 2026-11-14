// สถานะของบอส
let boss = {
    hp: 100,
    shields: ['Cl2', 'Br2+Base'],
    currentShieldIndex: 0
};

// สถานะระบบเวลา
let timer = 5;
let timerInterval;

// Elements
const hpText = document.getElementById('hp-text');
const hpBar = document.getElementById('boss-hp');
const shieldDisplay = document.getElementById('current-shield');
const timerText = document.getElementById('timer-text');
const timerBar = document.getElementById('timer-bar');
const combatLog = document.getElementById('combat-log');
const bulletSelect = document.getElementById('bullet-select');
const factorSelect = document.getElementById('factor-select');

// เริ่มต้นเกม
function initGame() {
    startTimer();
    updateUI();
}

// ระบบจับเวลา 5 วินาทีของบอส
function startTimer() {
    clearInterval(timerInterval);
    timer = 5;
    updateTimerUI();
    
    timerInterval = setInterval(() => {
        timer--;
        updateTimerUI();
        
        if (timer <= 0) {
            bossAttacks();
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.innerText = timer;
    timerBar.style.width = (timer / 5) * 100 + '%';
}

// เมื่อผู้เล่นโจมตี (กดปุ่ม Fire)
function fireWeapon() {
    const bullet = bulletSelect.value;
    const factor = factorSelect.value;

    if (bullet === 'none') {
        logMessage("⚠️ กรุณาเลือกกระสุนก่อนยิง!", "yellow");
        return;
    }

    const currentShield = boss.shields[boss.currentShieldIndex];
    let isReactionSuccessful = false;

    // ระบบเช็คเงื่อนไขเกราะ
    if (currentShield === 'Cl2') {
        // เกราะ Cl2 ต้องการปฏิกิริยาการเติม (Alkene หรือ Alkyne)
        if (bullet === 'alkene' || bullet === 'alkyne') {
            isReactionSuccessful = true;
            logMessage(`💥 ปฏิกิริยา Addition สำเร็จ! เกราะ ${currentShield} แตกแล้ว`, "lime");
            breakShield();
        } else {
            logMessage(`❌ กระสุน ${bullet} ทำปฏิกิริยากับ Cl2 ไม่ได้!`, "red");
        }
    } 
    else if (currentShield === 'Br2+Base') {
        // เกราะ Br2+Base ต้องการ Alkane + ระเบิดไฟ (UV) เกิดกรดไปสะเทินเบส
        if (bullet === 'alkane' && factor === 'uv') {
            isReactionSuccessful = true;
            logMessage("🔥 ปฏิกิริยา Substitution สมบูรณ์แบบ! กรด HBr สะเทินเบสทำดาเมจรุนแรง!", "lime");
            breakShield();
            dealDamage(100); // ชนะบอส
        } else {
            logMessage("❌ ปฏิกิริยาผิดพลาด! ต้องการ Alkane และ UV เพื่อเจาะเกราะนี้", "red");
        }
    }

    // เมื่อผู้เล่นยิง ไม่ว่าจะถูกหรือผิด ให้รีเซ็ตเวลาใหม่เพื่อความแฟร์ (เหมือนเป็น Turn)
    startTimer(); 
}

function breakShield() {
    boss.currentShieldIndex++;
    updateUI();
}

function dealDamage(amount) {
    boss.hp -= amount;
    if (boss.hp <= 0) {
        boss.hp = 0;
        clearInterval(timerInterval);
        logMessage("🏆 ยินดีด้วย! คุณปราบ Organic Boss สำเร็จ!", "cyan");
        document.getElementById('fire-btn').disabled = true;
    }
    updateUI();
}

// บอสโจมตีเมื่อหมดเวลา
function bossAttacks() {
    logMessage("⚡ บอสโจมตี! ชาร์จพลังงานสำเร็จ (คุณเสียจังหวะ)", "red");
    // อนาคตสามารถเพิ่มระบบลด HP ผู้เล่น หรือติดสถานะ Steric Hindrance ตรงนี้ได้
    
    // รีเซ็ตเวลาใหม่
    startTimer();
}

function updateUI() {
    // อัปเดต HP
    hpText.innerText = boss.hp;
    hpBar.style.width = boss.hp + '%';
    
    // อัปเดตเกราะ
    if (boss.currentShieldIndex < boss.shields.length) {
        const shieldName = boss.shields[boss.currentShieldIndex];
        shieldDisplay.innerText = `เกราะ ${shieldName}`;
        
        // เปลี่ยนสีเกราะตามชนิด
        if (shieldName === 'Br2+Base') {
            shieldDisplay.style.backgroundColor = "#e1b12c"; // สีน้ำตาลอมส้ม
            shieldDisplay.style.borderColor = "#fbc531";
        }
    } else {
        shieldDisplay.innerText = "เกราะถูกทำลายหมดแล้ว!";
        shieldDisplay.style.backgroundColor = "#ff4757";
    }
}

function logMessage(msg, color) {
    combatLog.innerText = msg;
    combatLog.style.color = color;
}

// รันเกมเมื่อโหลดหน้าเว็บเสร็จ
window.onload = initGame;