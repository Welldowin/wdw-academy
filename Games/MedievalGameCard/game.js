const SOUNDS = {
    bgm: new Audio('audio/bgm.mp3'), knight: new Audio('audio/knight.mp3'),
    thief: new Audio('audio/thief.mp3'), bishop: new Audio('audio/bishop.mp3'),
    king: new Audio('audio/king.mp3'), victory: new Audio('audio/victory.mp3'), 
    correct: new Audio('audio/correct.mp3'), wrong: new Audio('audio/wrong.mp3')
};
SOUNDS.bgm.loop = true; SOUNDS.bgm.volume = 0.3;
function playSound(key) { if(SOUNDS[key]) { SOUNDS[key].currentTime = 0; SOUNDS[key].play().catch(()=>{}); } }

let gameState = { 
    players: [], currentPlayer: 0, piles: [[], [], []], 
    drawnThisTurn: false, bonusDrawsLeft: 0, isGameOver: false 
};
const CARD_ICONS = { villager: '🧑‍🌾', knight: '⚔️', thief: '🗡️', bishop: '📖', king: '👑' };
const PLAYER_EMOJIS = ['🔵', '🔴', '🟢', '🟡'];
const PLAYER_NAMES = ['ท่านอัลดริก', 'ท่านเอลลาร่า', 'ท่านเซดริก', 'ท่านฟินน์'];

let cardIdCounter = 0;
function createCard(type, value = null) { return { id: 'card_' + (cardIdCounter++), type: type, value: value, multiplier: 1, shield: 0 }; }

function addLog(msg) {
    const logContainer = document.getElementById('chatLogContainer');
    logContainer.classList.remove('hidden');
    const entry = document.createElement('div');
    entry.className = 'chat-entry'; entry.innerHTML = msg;
    logContainer.prepend(entry);
    if(logContainer.children.length > 20) logContainer.removeChild(logContainer.lastChild);
}

function initGame(numPlayers) {
    playSound('bgm');
    gameState.isGameOver = false;
    let rawDeck = [];
    for(let i=0; i<20; i++) rawDeck.push(createCard('villager', i<10?1:(i<17?2:3)));
    for(let i=0; i<6; i++) rawDeck.push(createCard('knight'));
    for(let i=0; i<6; i++) rawDeck.push(createCard('thief'));
    for(let i=0; i<10; i++) rawDeck.push(createCard('bishop'));
    for(let i=0; i<3; i++) rawDeck.push(createCard('king'));

    rawDeck.sort(() => Math.random() - 0.5);
    const size = Math.floor(rawDeck.length / 3);
    gameState.piles = [rawDeck.slice(0, size), rawDeck.slice(size, size*2), rawDeck.slice(size*2)];

    let hasBot = (numPlayers === 1);
    let actualPlayers = hasBot ? 2 : numPlayers;
    
    gameState.players = [];
    for(let i=0; i<actualPlayers; i++) {
        let isBot = hasBot && (i === 1); 
        gameState.players.push({
            name: isBot ? "บอทปีศาจ" : PLAYER_NAMES[i], 
            emoji: isBot ? "🤖" : PLAYER_EMOJIS[i],
            isBot: isBot,
            cards: [createCard('villager', 1)], score: 1
        });
    }

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('gameScreen').classList.add('flex');
    addLog(`🚩 เริ่มเกมใหม่! ขอให้โชคดีนะเหล่าขุนนาง`);
    render();
}

function render() {
    const top = document.getElementById('topPlayers');
    const bottom = document.getElementById('bottomPlayers');
    top.innerHTML = ''; bottom.innerHTML = '';

    for(let i=0; i<4; i++) {
        const targetRow = i < 2 ? top : bottom;
        if(i < gameState.players.length) {
            const p = gameState.players[i];
            p.score = p.cards.reduce((sum, c) => sum + (c.value * (c.multiplier || 1)), 0);
            
            const pDiv = document.createElement('div');
            pDiv.className = `player-card ${gameState.currentPlayer === i ? 'active' : ''}`;
            pDiv.innerHTML = `
                <div class="player-header">
                    <div class="player-name">${p.emoji} ${p.name}</div>
                    <div class="score-badge">${p.score} แต้ม</div>
                </div>
                <div class="flex flex-wrap gap-1 mt-1">
                    ${p.cards.map(c => {
                        let classes = `mini-card ${c.shield > 0 ? 'shield-active' : ''} ${c.isFadingIn ? 'fade-in-slow' : ''} ${c.isKnightBuffed ? 'knight-buff-anim' : ''}`;
                        return `<span id="${c.id}" class="${classes}">${CARD_ICONS[c.type]} ${c.value * (c.multiplier || 1)}</span>`;
                    }).join('')}
                </div>
            `;
            targetRow.appendChild(pDiv);
        } else {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'player-card empty';
            emptyDiv.innerHTML = `<span class="opacity-40 font-sans text-xl">ที่นั่งว่าง</span>`;
            targetRow.appendChild(emptyDiv);
        }
    }

    // 🌟 1. ปรับปรุงเงื่อนไขการจบเกม (เช็คว่าเหลือแต่บิชอปหรือไม่) 🌟
    let allEmpty = true;
    let onlyBishopsLeft = true; // ตั้งค่าเริ่มต้นสมมติว่าเหลือแต่บิชอป

    gameState.piles.forEach((p, i) => {
        document.getElementById(`pileCount${i}`).innerText = `${p.length} cards`;
        const pileEl = document.getElementById(`pile${i}`);
        if(p.length === 0) { 
            pileEl.style.opacity = "0.2"; pileEl.style.pointerEvents = "none"; 
        } else { 
            allEmpty = false; 
            // ถ้ากองไหนมีไพ่ที่ไม่ใช่บิชอปปนอยู่ แปลว่ายังไม่เข้าเงื่อนไขจบเกม
            if(p.some(c => c.type !== 'bishop')) {
                onlyBishopsLeft = false;
            }
        }
    });

    // ป้องกันกรณีที่ไพ่หมดกองแล้ว (allEmpty) จะทำให้ onlyBishopsLeft เป็น true ด้วย
    if (allEmpty) onlyBishopsLeft = false;

    // 🌟 2. สั่งจบเกมทันทีถ้าไพ่หมดกอง หรือไพ่ที่เหลือเป็นบิชอปล้วนๆ 🌟
    if((allEmpty || onlyBishopsLeft) && !gameState.isGameOver) { 
        gameState.isGameOver = true;
        if(onlyBishopsLeft) {
            addLog(`🏁 ไพ่ในกองเหลือเพียงบิชอป! ระบบทำการตัดจบเกมและนับคะแนนทันที`);
        }
        setTimeout(showVictory, 1000); 
        return; 
    }

    if (gameState.isGameOver) return; // กันไม่ให้โค้ดส่วน UI ด้านล่างทำงานถ้าจบเกมไปแล้ว

    const currP = gameState.players[gameState.currentPlayer];
    let turnText = `🚩 เทิร์นของ ${currP.emoji} <span class="text-white">${currP.name}</span>`;
    
    if(gameState.bonusDrawsLeft > 0) {
        turnText += ` <span class="text-green-400 animate-pulse text-lg">(เลือกจั่วฟรีอีก ${gameState.bonusDrawsLeft} ใบ)</span>`;
    }
    document.getElementById('turnIndicator').innerHTML = turnText;
}

function playBotTurn() {
    if (gameState.isGameOver) return;
    
    let availablePiles = [0, 1, 2].filter(i => gameState.piles[i].length > 0);
    
    if (gameState.bonusDrawsLeft > 0) {
        let validPilesForBonus = availablePiles.filter(i => gameState.piles[i].some(c => c.type !== 'bishop'));
        if (validPilesForBonus.length > 0) {
            availablePiles = validPilesForBonus;
        } else {
            gameState.bonusDrawsLeft = 0;
            finishDraw();
            return;
        }
    }

    if (availablePiles.length === 0) return;
    
    let pileIdx = availablePiles[Math.floor(Math.random() * availablePiles.length)];
    handleDraw(pileIdx);
}

function handleDraw(pileIdx) {
    if(gameState.isGameOver) return;
    if(gameState.piles[pileIdx].length === 0) return;
    if(gameState.drawnThisTurn && gameState.bonusDrawsLeft <= 0) return;

    let pile = gameState.piles[pileIdx];
    let card = null;

    if (gameState.bonusDrawsLeft > 0) {
        let nonBishopIdx = -1;
        for(let i = pile.length - 1; i >= 0; i--) {
            if(pile[i].type !== 'bishop') { nonBishopIdx = i; break; }
        }

        if (nonBishopIdx !== -1) {
            card = pile.splice(nonBishopIdx, 1)[0]; 
            gameState.bonusDrawsLeft--;
        } else {
            addLog(`⚠️ กองที่ ${pileIdx + 1} เหลือแต่บิชอป! กรุณาจั่วโบนัสจากกองอื่น`);
            if(gameState.players[gameState.currentPlayer].isBot) {
                setTimeout(playBotTurn, 500); 
            }
            return; 
        }
    } else {
        card = pile.pop();
        gameState.drawnThisTurn = true;
    }

    const display = document.getElementById('drawnCardDisplay');
    display.className = "pop-in";
    display.innerHTML = `
        <div style="background:linear-gradient(145deg, #2a2035, #150f1d); padding:20px 40px; border-radius:20px; border:3px solid #c9952e; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.8);">
            <div style="font-size:3.5rem; filter:drop-shadow(0 0 10px rgba(201,149,46,0.5));">${CARD_ICONS[card.type]}</div>
            <div class="font-sans text-xl font-bold text-white">${card.type.toUpperCase()}</div>
            ${card.value ? `<div class="text-3xl font-bold text-gold">+${card.value}</div>` : ''}
        </div>
    `;

    resolveEffect(card);
}

function resolveEffect(card) {
    const cpIdx = gameState.currentPlayer;
    const player = gameState.players[cpIdx];
    
    if(card.type === 'villager') {
        card.isFadingIn = true; player.cards.push(card);
        render(); setTimeout(() => { card.isFadingIn = false; finishDraw(); }, 800);
    } 
    else if(card.type === 'knight') {
        playSound('knight');
        let villagers = player.cards.filter(c => c.type === 'villager');
        if(villagers.length > 0) {
            let unbuffed = villagers.filter(c => c.shield === 0);
            let target;
            if (unbuffed.length > 0) {
                target = unbuffed.sort((a,b) => b.value - a.value)[0];
                target.multiplier = 2; target.shield = 1;
                addLog(`🛡️ <b>${player.name}</b> ใช้อัศวินคุ้มครองชาวบ้านแต้ม ${target.value}!`);
            } else {
                target = villagers.sort((a,b) => b.value - a.value)[0];
                target.shield += 1;
                addLog(`🛡️ <b>${player.name}</b> ใช้อัศวินเสริมเกราะซ้อนให้ชาวบ้านแต้ม ${target.value}!`);
            }
            target.isKnightBuffed = true; 
            render(); setTimeout(() => { target.isKnightBuffed = false; finishDraw(); }, 1500);
        } else { addLog(`🛡️ อัศวินปรากฏตัว แต่ <b>${player.name}</b> ไม่มีชาวบ้านให้คุ้มครอง!`); finishDraw(); }
    } 
    else if(card.type === 'thief') {
        playSound('thief');
        let targetIdx = -1; let maxScore = -1;
        gameState.players.forEach((p, idx) => {
            if(idx !== cpIdx && p.score > maxScore && p.cards.some(c=>c.type==='villager')) { maxScore = p.score; targetIdx = idx; }
        });

        if(targetIdx !== -1) {
            let target = gameState.players[targetIdx];
            let villagers = target.cards.filter(c => c.type === 'villager').sort((a,b) => (b.value*b.multiplier)-(a.value*a.multiplier));
            let stolen = null;
            for(let v of villagers) {
                if(v.shield > 0) { v.shield--; addLog(`❌ โจรทำงานล้มเหลว! โล่ของ <b>${target.name}</b> แตก`); render(); continue; }
                stolen = v; break;
            }
            if(stolen) {
                let el = document.getElementById(stolen.id);
                if(el) el.classList.add('fade-out-slow');
                setTimeout(() => {
                    target.cards = target.cards.filter(c => c.id !== stolen.id);
                    stolen.isFadingIn = true; player.cards.push(stolen);
                    addLog(`🗡️ <b>${player.name}</b> ขโมยชาวบ้านแต้ม ${stolen.value} จาก <b>${target.name}</b>!`);
                    render(); setTimeout(() => { stolen.isFadingIn = false; finishDraw(); }, 800);
                }, 800);
            } else { finishDraw(); }
        } else { addLog("🗡️ โจรทำงานพลาด! ไม่มีเป้าหมายให้ขโมย"); finishDraw(); }
    } 
    else if(card.type === 'king') {
        playSound('king'); 
        addLog(`👑 <b>พระราชาเสด็จ!</b> สุ่มริบชาวบ้านจากทุกคนมาให้ <b>${player.name}</b>`);
        let stolenCards = [];
        gameState.players.forEach((p, idx) => {
            if(idx !== cpIdx) {
                let unprotectedVillagers = p.cards.filter(c => c.type === 'villager' && c.shield === 0);
                if(unprotectedVillagers.length > 0) {
                    let randomIdx = Math.floor(Math.random() * unprotectedVillagers.length);
                    let targetCard = unprotectedVillagers[randomIdx];
                    stolenCards.push({ from: p, card: targetCard });
                    let el = document.getElementById(targetCard.id);
                    if(el) el.classList.add('fade-out-slow');
                } else if(p.cards.some(c => c.type === 'villager' && c.shield > 0)) {
                    addLog(`🛡️ <b>${p.name}</b> รอดพ้นภาษีพระราชา เพราะมีอัศวินคุ้มครอง!`);
                }
            }
        });
        setTimeout(() => {
            stolenCards.forEach(item => {
                item.from.cards = item.from.cards.filter(c => c.id !== item.card.id);
                item.card.isFadingIn = true; player.cards.push(item.card);
            });
            render(); setTimeout(() => { stolenCards.forEach(item => item.card.isFadingIn = false); finishDraw(); }, 800);
        }, 800);
    } 
    else if(card.type === 'bishop') {
        playSound('bishop');
        if(player.isBot) {
            setTimeout(() => {
                let isCorrect = Math.random() > 0.4; 
                if(isCorrect) {
                    playSound('correct'); 
                    addLog(`✅ บอท <b>${player.name}</b> ตอบถูก! ได้รับพรจั่วโบนัส 2 ใบ`);
                    gameState.bonusDrawsLeft = 2;
                } else {
                    playSound('wrong'); 
                    addLog(`❌ บอท <b>${player.name}</b> ตอบผิดพลาด!`);
                }
                finishDraw();
            }, 2000);
        } else {
            setTimeout(showQuiz, 1000); 
        }
    }
}

function finishDraw() {
    if (gameState.isGameOver) return; // ถ้าจบเกมแล้วไม่ต้องโชว์ปุ่มใดๆ

    let p = gameState.players[gameState.currentPlayer];
    if (gameState.bonusDrawsLeft <= 0) {
        if(p.isBot) {
            setTimeout(nextTurn, 2000); 
        } else {
            document.getElementById('endTurnContainer').classList.remove('hidden');
        }
    } else {
        if(p.isBot) {
            setTimeout(playBotTurn, 1500); 
        }
    }
    render();
}

function nextTurn() {
    if (gameState.isGameOver) return;
    
    gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    gameState.drawnThisTurn = false;
    gameState.bonusDrawsLeft = 0;
    document.getElementById('drawnCardDisplay').innerHTML = '';
    document.getElementById('endTurnContainer').classList.add('hidden');
    render();

    if (gameState.players[gameState.currentPlayer].isBot) {
        setTimeout(playBotTurn, 1500);
    }
}

let quizTimerInt;
function showQuiz() {
    if(typeof BISHOP_QUESTIONS === 'undefined') {
        addLog("⚠️ ไม่พบคำถาม (ไฟล์ question.js ขัดข้อง)");
        finishDraw(); return;
    }

    const quiz = BISHOP_QUESTIONS[Math.floor(Math.random() * BISHOP_QUESTIONS.length)];
    const overlay = document.getElementById('quizOverlay');
    overlay.classList.remove('hidden');
    document.getElementById('questionText').innerText = quiz.q;
    
    const imgTag = document.getElementById('questionImg');
    const placeholder = document.getElementById('imgPlaceholder');
    if (quiz.img) { imgTag.src = quiz.img; imgTag.classList.remove('hidden'); placeholder.classList.add('hidden'); } 
    else { imgTag.classList.add('hidden'); placeholder.classList.remove('hidden'); }

    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';
    
    let timeLeft = 90;
    document.getElementById('quizTimer').innerText = timeLeft;
    clearInterval(quizTimerInt);
    
    const resolveQuiz = (isCorrect) => {
        clearInterval(quizTimerInt);
        if(isCorrect) {
            playSound('correct'); 
            addLog('✅ <b>ตอบถูก!</b> บิชอปมอบสิทธิ์ให้คุณ <b>เลือกจั่วไพ่โบนัส 2 ใบ</b>'); 
            gameState.bonusDrawsLeft = 2;
        } else { 
            playSound('wrong'); 
            addLog('❌ <b>ตอบผิด!</b> คุณพลาดโอกาสรับพรจากบิชอป'); 
        }
        overlay.classList.add('hidden');
        finishDraw();
    };

    quizTimerInt = setInterval(() => {
        timeLeft--; document.getElementById('quizTimer').innerText = timeLeft;
        if(timeLeft <= 0) resolveQuiz(false);
    }, 1000);

    quiz.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn font-sans font-semibold'; btn.innerText = opt;
        btn.onclick = () => resolveQuiz(i === quiz.a);
        grid.appendChild(btn);
    });
}

function showVictory() {
    playSound('victory');
    document.getElementById('fireworksCanvas').classList.remove('hidden');
    document.getElementById('victoryOverlay').classList.remove('hidden');
    
    let sorted = [...gameState.players].sort((a,b) => b.score - a.score);
    document.getElementById('winnerName').innerText = `${sorted[0].emoji} ${sorted[0].name} ชนะ!`;
    
    let lbHtml = '';
    const medals = ['🥇', '🥈', '🥉', '🏅'];
    sorted.forEach((p, i) => {
        lbHtml += `<div class="flex justify-between items-center bg-black/30 p-3 rounded-lg border border-white/10">
            <span>${medals[i]} ${p.name}</span>
            <span class="text-gold font-bold">${p.score} แต้ม</span>
        </div>`;
    });
    document.getElementById('leaderboard').innerHTML = lbHtml;
    
    startFireworks();
}

function startFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = [];
    
    function createFirework(x, y) {
        const colors = ['#c9952e', '#ff3366', '#33ccff', '#66ff66', '#ffffff'];
        for(let i=0; i<60; i++) {
            particles.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 15, vy: (Math.random() - 0.5) * 15,
                life: 1, color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 4 + 1
            });
        }
    }

    function animate() {
        if(document.getElementById('victoryOverlay').classList.contains('hidden')) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if(Math.random() < 0.05) createFirework(Math.random()*canvas.width, Math.random()*canvas.height*0.5);

        for(let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.vx; p.y += p.vy; p.vy += 0.2; 
            p.life -= 0.015;
            
            ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, p.life);
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
            if(p.life <= 0) particles.splice(i, 1);
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}