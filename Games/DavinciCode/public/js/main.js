/* main.js — เชื่อม Socket.io กับ UI และรับ event จากผู้ใช้ */
(() => {
  const socket = io();
  let prevResultTs = 0;

  const landing = document.getElementById('landing');
  const gameEl = document.getElementById('game');
  const nickInput = document.getElementById('nickname');
  try { nickInput.value = localStorage.getItem('dv_nick') || ''; } catch (_) {}

  // ---- เข้าห้อง ----
  document.getElementById('join-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nick = nickInput.value.trim();
    if (!nick) return;
    try { localStorage.setItem('dv_nick', nick); } catch (_) {}
    window.AudioManager.startBgm(); // ปลดล็อกเสียงด้วย gesture แรกของผู้ใช้
    socket.emit('lobby:join', { nickname: nick });
  });

  // ---- สถานะการเชื่อมต่อ ----
  function setConn(ok) {
    document.getElementById('conn-dot').classList.toggle('ok', ok);
    document.getElementById('conn-text').textContent = ok ? 'เชื่อมต่อแล้ว' : 'ขาดการเชื่อมต่อ';
  }
  socket.on('connect', () => setConn(true));
  socket.on('disconnect', () => setConn(false));

  // ---- รับ state หลักของห้อง ----
  socket.on('room:state', (s) => {
    if (s.inLobby) {
      landing.classList.remove('hidden');
      gameEl.classList.add('hidden');
      return;
    }
    landing.classList.add('hidden');
    gameEl.classList.remove('hidden');

    if (s.lastResult && s.lastResult.ts !== prevResultTs) {
      prevResultTs = s.lastResult.ts;
      const r = s.lastResult;
      const g = r.guess === 'joker' ? 'โจ๊กเกอร์' : r.guess;
      if (r.correct) window.GameUI.showToast(`${r.byNick} ทายไพ่ของ ${r.targetNick} ว่า "${g}" — ถูกต้อง!`, 'good');
      else window.GameUI.showToast(`${r.byNick} ทายว่า "${g}" — ผิด!`, 'bad');
    }
    window.GameUI.render(s);
  });

  socket.on('sfx', ({ name }) => window.AudioManager.play(name));
  socket.on('error:msg', ({ text }) => window.GameUI.showToast(text, 'bad'));

  socket.on('chat:msg', ({ from, text }) => {
    const log = document.getElementById('chat-log');
    const div = document.createElement('div');
    div.innerHTML = `<b>${esc(from)}:</b> ${esc(text)}`;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  });

  // ---- แชท ----
  document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = document.getElementById('chat-input');
    const t = inp.value.trim();
    if (!t) return;
    socket.emit('chat:msg', { text: t });
    inp.value = '';
  });

  // ---- ปุ่มเปิด/ปิดเสียง ----
  document.getElementById('mute-btn').addEventListener('click', (e) => {
    e.currentTarget.textContent = window.AudioManager.toggleMute() ? '🔇' : '🔊';
  });

  // ---- คลิกทั้งหมดในหน้าเกม (event delegation) ----
  gameEl.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.dataset.action;

    if (a === 'take-seat') return socket.emit('seat:take', { seat: el.dataset.seat });
    if (a === 'leave-seat') return socket.emit('seat:leave');
    if (a === 'add-bot') return socket.emit('bot:add', { seat: el.dataset.seat });
    if (a === 'remove-bot') return socket.emit('bot:remove', { seat: el.dataset.seat });
    if (a === 'start-game') return socket.emit('game:start');
    if (a === 'ready') return socket.emit('setup:ready');
    if (a === 'joker-slot')
      return socket.emit('joker:position', { tileId: el.dataset.tile, index: Number(el.dataset.index) });
    if (a === 'draw') return socket.emit('turn:draw', { color: el.dataset.color });

    if (a === 'guess-target') {
      window.GameUI.pending = { targetSeat: el.dataset.seat, tileId: el.dataset.tile };
      return document.getElementById('guess-modal').classList.remove('hidden');
    }
    if (a === 'guess-pick') {
      const p = window.GameUI.pending;
      if (p) {
        const v = el.dataset.value === 'joker' ? 'joker' : Number(el.dataset.value);
        socket.emit('turn:guess', { targetSeat: p.targetSeat, tileId: p.tileId, value: v });
      }
      window.GameUI.pending = null;
      return document.getElementById('guess-modal').classList.add('hidden');
    }
    if (a === 'guess-cancel') {
      window.GameUI.pending = null;
      return document.getElementById('guess-modal').classList.add('hidden');
    }

    if (a === 'after-continue') return socket.emit('turn:afterCorrect', { action: 'continue' });
    if (a === 'after-stop') return socket.emit('turn:afterCorrect', { action: 'stop' });
    if (a === 'choose-reveal') return socket.emit('turn:chooseReveal', { tileId: el.dataset.tile });
    if (a === 'restart') return socket.emit('game:restart');
  });

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }
})();
