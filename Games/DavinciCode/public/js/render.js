/* render.js — วาดโต๊ะ/แผงควบคุมจาก state ที่ได้จากเซิร์ฟเวอร์
 * หัวใจสำคัญ: Dynamic Perspective — ผู้เล่นคนปัจจุบันเห็นตัวเองอยู่ "ทิศใต้ (ล่าง)" เสมอ
 */
window.GameUI = (() => {
  const PHYS_CW = ['N', 'E', 'S', 'W'];      // เข็มนาฬิกาจริงรอบโต๊ะ
  const SCREEN_CW = ['S', 'E', 'N', 'W'];    // ช่องบนจอ เริ่มจากล่างแล้ววนตามเข็ม
  const SLOT = { S: 'south', E: 'east', N: 'north', W: 'west' };
  const DIR_TH = { N: 'ทิศเหนือ', E: 'ทิศตะวันออก', S: 'ทิศใต้', W: 'ทิศตะวันตก' };
  const MEDAL = { 1: '🥇', 2: '🥈', 3: '🥉', 4: '4️⃣' };

  let pending = null; // { targetSeat, tileId } ระหว่างเปิด modal ทาย

  /** ที่นั่งจริงของเป้าหมาย -> ช่อง css บนจอของผู้เล่นคนนี้ */
  function relativeSlot(localSeat, targetSeat) {
    const li = PHYS_CW.indexOf(localSeat || 'S');
    const ti = PHYS_CW.indexOf(targetSeat);
    const off = (((ti - li) % 4) + 4) % 4;
    return SLOT[SCREEN_CW[off]];
  }

  function tileHTML(t, seatLetter, state) {
    const cls = ['tile', t.color];
    let content = '';
    if (t.value === null) cls.push('hidden-face');
    else if (t.value === 'joker') content = '–';
    else content = t.value;
    if (t.revealed) cls.push('revealed');
    if (t.justDrawn) cls.push('just-drawn');

    const myTurn = state.activeSeat && state.activeSeat === state.mySeat;
    let attr = '';
    if (
      state.phase === 'guess' &&
      myTurn &&
      seatLetter !== state.mySeat &&
      !t.revealed &&
      !state.seats[seatLetter].eliminated
    ) {
      cls.push('targetable');
      attr = `data-action="guess-target" data-seat="${seatLetter}" data-tile="${t.id}"`;
    } else if (
      state.phase === 'chooseReveal' &&
      myTurn &&
      seatLetter === state.mySeat &&
      !t.revealed
    ) {
      cls.push('targetable');
      attr = `data-action="choose-reveal" data-tile="${t.id}"`;
    }
    return `<div class="${cls.join(' ')}" ${attr}>${content}</div>`;
  }

  function seatHTML(letter, state) {
    const s = state.seats[letter];
    const slot = relativeSlot(state.mySeat, letter);

    if (!s.occupied) {
      let btn = '';
      if (state.phase === 'lobby') {
        btn = `<button data-action="take-seat" data-seat="${letter}">นั่งตรงนี้</button>`;
        if (state.canManageBots) {
          btn += `<button class="ghost-btn" data-action="add-bot" data-seat="${letter}">+ เรียกบอท</button>`;
        }
      }
      return `<div class="seat empty slot-${slot}">
        <div class="seat-name">ที่นั่งว่าง · ${DIR_TH[letter]}</div>${btn}</div>`;
    }

    const classes = ['seat', `slot-${slot}`];
    if (s.active) classes.push('active');
    if (s.isYou) classes.push('you');

    const badges = [];
    if (s.isHost) badges.push('<span class="badge">เจ้าของห้อง</span>');
    if (state.phase === 'setup' && s.ready) badges.push('<span class="badge ready">พร้อม</span>');
    if (s.eliminated) badges.push(`<span class="badge">${MEDAL[s.rank] || ''} อันดับ ${s.rank}</span>`);

    if (s.isBot) badges.push('<span class="badge bot">บอท</span>');

    const tiles = s.tiles.map((t) => tileHTML(t, letter, state)).join('');
    let leave = '';
    if (state.phase === 'lobby' && s.isYou) {
      leave = `<button data-action="leave-seat">ลุกจากที่นั่ง</button>`;
    } else if (state.phase === 'lobby' && s.isBot && state.canManageBots) {
      leave = `<button class="ghost-btn" data-action="remove-bot" data-seat="${letter}">เอาบอทออก</button>`;
    }

    return `<div class="${classes.join(' ')}">
      <div class="seat-name">${escapeHTML(s.nickname)} ${badges.join(' ')}</div>
      <div class="tiles">${tiles || '<span class="muted">ยังไม่แจกไพ่</span>'}</div>
      ${leave}
    </div>`;
  }

  function centerHTML(state) {
    if (state.phase === 'lobby') {
      return `<div class="center-pile">
        <div class="deck">?</div>
        <div>ผู้เล่น ${state.seatedCount}/4 · ผู้ชม ${state.playerCount - state.seatedCount}</div>
        <div class="muted">เลือกที่นั่งเพื่อเข้าร่วม</div>
      </div>`;
    }
    return `<div class="center-pile">
      <div class="deck">${state.deckCount}</div>
      <div>ไพ่ในสำรับ</div>
      <div class="muted">ไพ่ถูกนำออกจากเกม ${state.removedCount} ใบ (ไม่เปิดเผย)</div>
    </div>`;
  }

  function controlHTML(state) {
    const myTurn = state.activeSeat === state.mySeat;
    const meSeated = !!state.mySeat;

    if (state.phase === 'lobby') {
      const start = state.canStart
        ? `<button data-action="start-game">เริ่มเกม</button>`
        : `<p class="muted">ต้องมีผู้เล่นนั่งอย่างน้อย 2 คน แล้วเจ้าของห้องกดเริ่มเกม</p>`;
      const botHint = state.canManageBots
        ? `<p class="muted">ผู้เล่นไม่ครบ? กด "+ เรียกบอท" ที่ที่นั่งว่างได้ (บอทเดาถูก 33%)</p>`
        : '';
      return `<h4>ห้องรอผู้เล่น</h4>${meSeated ? '' : '<p class="muted">คุณเป็นผู้ชม เลือกที่นั่งว่างเพื่อเล่น</p>'}${botHint}${start}`;
    }

    if (state.phase === 'setup') {
      if (!meSeated) return `<h4>กำลังเริ่มเกม</h4><p class="muted">ผู้เล่นกำลังจัดตำแหน่งไพ่โจ๊กเกอร์...</p>`;
      const myTiles = state.seats[state.mySeat].tiles;
      const jokerUI = myTiles
        .map((t, i) => {
          if (t.value !== 'joker') return '';
          const slots = myTiles
            .map(
              (_, j) =>
                `<button class="${j === i ? 'on' : ''}" data-action="joker-slot" data-tile="${t.id}" data-index="${j}">${j + 1}</button>`
            )
            .join('');
          return `<p class="muted">เลือกตำแหน่งไพ่โจ๊กเกอร์ (${t.color === 'black' ? 'ดำ' : 'ขาว'}) ในมือคุณ</p>
            <div class="joker-slots">${slots}</div>`;
        })
        .join('');
      const ready = state.seats[state.mySeat].ready;
      return `<h4>จัดไพ่ก่อนเริ่ม</h4>
        ${jokerUI || '<p class="muted">คุณไม่มีไพ่โจ๊กเกอร์ในมือ</p>'}
        <button data-action="ready" ${ready ? 'disabled' : ''}>${ready ? 'พร้อมแล้ว · รอผู้เล่นอื่น' : 'พร้อม!'}</button>`;
    }

    if (state.phase === 'draw') {
      if (!myTurn) return `<h4>ตาของ ${escapeHTML(state.activeNick)}</h4><p class="muted">กำลังจั่วไพ่...</p>`;
      return `<h4>ตาของคุณ · จั่วไพ่</h4>
        <p class="muted">เลือกจั่วไพ่ 1 ใบ แล้วนำไปทายไพ่คู่แข่ง</p>
        <div class="row">
          <button data-action="draw" data-color="black">จั่วไพ่ดำ</button>
          <button data-action="draw" data-color="white">จั่วไพ่ขาว</button>
        </div>`;
    }

    if (state.phase === 'guess') {
      if (!myTurn) return `<h4>ตาของ ${escapeHTML(state.activeNick)}</h4><p class="muted">กำลังเลือกไพ่เพื่อทาย...</p>`;
      const note = state.deckCount === 0 ? '<p class="muted">สำรับหมดแล้ว — ทายผิดต้องเปิดไพ่ในมือตัวเอง</p>' : '';
      return `<h4>ตาของคุณ · ทายไพ่</h4>
        <p class="muted">คลิกที่ไพ่คว่ำของคู่แข่งที่ต้องการทาย</p>${note}`;
    }

    if (state.phase === 'afterCorrect') {
      if (!myTurn) return `<h4>${escapeHTML(state.activeNick)} ทายถูก!</h4><p class="muted">กำลังตัดสินใจว่าจะทายต่อหรือไม่...</p>`;
      return `<h4>ทายถูก! 🎉</h4>
        <div class="row">
          <button data-action="after-continue">ทายต่อ</button>
          <button data-action="after-stop">จบเทิร์น (เก็บไพ่ที่จั่วไว้)</button>
        </div>`;
    }

    if (state.phase === 'chooseReveal') {
      if (!myTurn) return `<h4>${escapeHTML(state.activeNick)} ทายผิด</h4><p class="muted">กำลังเลือกไพ่ในมือเพื่อเปิด...</p>`;
      return `<h4>ทายผิด 😖</h4><p class="muted">เลือกไพ่คว่ำในมือคุณ 1 ใบเพื่อเปิดให้ทุกคนเห็น</p>`;
    }

    return '';
  }

  function statusText(state) {
    switch (state.phase) {
      case 'lobby':
        return 'กำลังรอผู้เล่น...';
      case 'setup':
        return 'กำลังจัดไพ่ก่อนเริ่มเกม';
      case 'over':
        return `จบเกม! ผู้ชนะคือ ${state.winnerNick}`;
      default:
        return `ตาของ ${state.activeNick}` + (state.activeSeat === state.mySeat ? ' (คุณ)' : '');
    }
  }

  function render(state) {
    const table = document.getElementById('table');
    table.innerHTML =
      ['north', 'south', 'east', 'west']
        .map((slot) => {
          const letter = PHYS_CW.find((l) => relativeSlot(state.mySeat, l) === slot);
          return seatHTML(letter, state);
        })
        .join('') + `<div class="slot-center">${centerHTML(state)}</div>`;

    document.getElementById('control-panel').innerHTML = controlHTML(state);
    document.getElementById('status-line').textContent = statusText(state);

    // end overlay
    const overlay = document.getElementById('end-overlay');
    if (state.phase === 'over') {
      document.getElementById('winner-name').textContent = state.winnerNick || '';
      document.getElementById('leaderboard').innerHTML = state.eliminated
        .map((e) => `<li>${MEDAL[e.rank] || ''} อันดับ ${e.rank} — ${escapeHTML(e.nickname)}</li>`)
        .join('');
      document.getElementById('restart-btn').classList.toggle('hidden', !state.youAreHost);
      document.getElementById('wait-host').classList.toggle('hidden', state.youAreHost);
      if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        confetti();
        window.AudioManager.play('win');
      }
    } else {
      overlay.classList.add('hidden');
    }
  }

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  // -------- toast --------
  let toastTimer = null;
  function showToast(text, kind) {
    const el = document.getElementById('toast');
    el.textContent = text;
    el.className = 'toast' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.add('hidden'), 2600);
  }

  // -------- confetti / พลุ --------
  function confetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const colors = ['#ffe08a', '#8fd3ef', '#b7ead2', '#ff9db0', '#c9a7f0'];
    const parts = Array.from({ length: 160 }, () => ({
      x: Math.random() * W,
      y: -20 - Math.random() * H,
      r: 4 + Math.random() * 6,
      c: colors[(Math.random() * colors.length) | 0],
      vy: 2 + Math.random() * 4,
      vx: -1.5 + Math.random() * 3,
      rot: Math.random() * Math.PI,
      vr: -0.2 + Math.random() * 0.4,
    }));
    const start = performance.now();
    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > H + 20) p.y = -20;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      }
      if (now - start < 6000 && !document.getElementById('end-overlay').classList.contains('hidden')) {
        requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    }
    requestAnimationFrame(frame);
  }

  return {
    render,
    showToast,
    relativeSlot,
    get pending() { return pending; },
    set pending(v) { pending = v; },
  };
})();
