'use strict';

(() => {
  const socket = io();

  // ---------- playerId ถาวร (ใช้ reconnect กลับที่นั่งเดิม) ----------
  let playerId = localStorage.getItem('ww_player_id');
  if (!playerId) {
    playerId = 'p_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('ww_player_id', playerId);
  }

  let state = null; // ล่าสุดจาก room:state
  let roomCode = localStorage.getItem('ww_room_code') || null;
  let pendingRoleSet = null; // local draft ของเจ้าของห้องก่อน sync

  const $ = (sel) => document.querySelector(sel);
  const screens = ['landing', 'lobby', 'setup', 'night', 'day', 'vote', 'reveal'];

  function showScreen(name) {
    screens.forEach((s) => $(`#screen-${s}`).classList.toggle('active', s === name));
  }

  function toast(text) {
    const el = $('#toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 3000);
  }

  // ---------- หน้าแรก ----------
  const savedNick = localStorage.getItem('ww_nickname') || '';
  $('#input-nickname').value = savedNick;

  $('#btn-create-room').addEventListener('click', () => {
    const nickname = $('#input-nickname').value.trim();
    if (!nickname) return toast('กรอกชื่อเล่นก่อนครับ');
    localStorage.setItem('ww_nickname', nickname);
    socket.emit('room:create', { nickname, playerId });
  });

  $('#btn-join-room').addEventListener('click', () => {
    const nickname = $('#input-nickname').value.trim();
    const code = $('#input-roomcode').value.trim().toUpperCase();
    if (!nickname) return toast('กรอกชื่อเล่นก่อนครับ');
    if (!code) return toast('กรอกรหัสห้องก่อนครับ');
    localStorage.setItem('ww_nickname', nickname);
    socket.emit('room:join', { code, nickname, playerId });
  });

  // พยายาม reconnect อัตโนมัติถ้ามีห้องเดิมอยู่ใน localStorage
  if (roomCode && savedNick) {
    socket.emit('room:join', { code: roomCode, nickname: savedNick, playerId });
  }

  socket.on('room:joined', ({ code }) => {
    roomCode = code;
    localStorage.setItem('ww_room_code', code);
  });

  socket.on('error:msg', ({ text }) => {
    toast(text);
    if (roomCode) { localStorage.removeItem('ww_room_code'); roomCode = null; }
  });

  // ---------- เสียง ----------
  $('#btn-mute').addEventListener('click', () => {
    const muted = AudioManager.toggleMute();
    $('#btn-mute').textContent = muted ? '🔈' : '🔊';
  });
  $('#btn-mute').textContent = AudioManager.isMuted() ? '🔈' : '🔊';

  socket.on('sfx', ({ name }) => AudioManager.playSfx(name));

  // ======================================================================
  // room:state คือหัวใจของแอป — render ใหม่ทุกครั้งตาม phase
  // ======================================================================
  let lastPhase = null;
  socket.on('room:state', (s) => {
    state = s;
    if (s.phase !== lastPhase) {
      pendingRoleSet = null;
      if (s.phase === 'lobby') AudioManager.playBgm('lobby');
      if (s.phase === 'night') AudioManager.playBgm('night');
      if (s.phase === 'day') AudioManager.playBgm('day');
      if (s.phase === 'vote') AudioManager.playBgm('vote');
      if (s.phase === 'setup') resetRoleCardFlip();
      lastPhase = s.phase;
    }

    const screenMap = {
      lobby: 'lobby', setup: 'setup', night: 'night', day: 'day', vote: 'vote', reveal: 'reveal',
    };
    showScreen(screenMap[s.phase] || 'lobby');

    if (s.phase === 'lobby') renderLobby(s);
    if (s.phase === 'setup') renderSetup(s);
    if (s.phase === 'night') renderNight(s);
    if (s.phase === 'day') renderDay(s);
    if (s.phase === 'vote') renderVote(s);
    if (s.phase === 'reveal') renderReveal(s);
  });

  function roleById(catalog, id) {
    return catalog.find((r) => r && r.id === id) || null;
  }

  // ======================================================================
  // ล็อบบี้
  // ======================================================================
  function renderLobby(s) {
    $('#lobby-code').textContent = s.code;

    const list = $('#lobby-players');
    list.innerHTML = '';
    s.players.forEach((p) => {
      const chip = document.createElement('div');
      chip.className = 'player-chip' + (p.isHost ? ' host' : '') + (p.connected ? '' : ' offline');
      chip.innerHTML = `<span class="dot"></span> ${p.isHost ? '<span class="crown">👑</span>' : ''} ${escapeHtml(p.nickname)}${p.seat === s.youSeat ? ' (คุณ)' : ''}`;
      list.appendChild(chip);
    });

    const hostPanel = $('#host-settings');
    hostPanel.classList.toggle('hidden', !s.youAreHost);
    if (!s.youAreHost) return;

    $('#set-night-seconds').value = String(s.settings.nightSeconds);
    $('#set-day-seconds').value = String(s.settings.daySeconds);

    const roleSet = pendingRoleSet || s.settings.roleSet.slice();
    const need = s.players.length + 3;
    $('#role-need').textContent = need;
    $('#role-count').textContent = roleSet.length;

    const picker = $('#role-picker');
    picker.innerHTML = '';

    // แถวตัวเลือกบทบาททั้งหมด (กดเพื่อเพิ่ม)
    const addRow = document.createElement('div');
    addRow.style.display = 'flex';
    addRow.style.flexWrap = 'wrap';
    addRow.style.gap = '6px';
    addRow.style.marginBottom = '8px';
    s.roleCatalog.filter(Boolean).forEach((r) => {
      const btn = document.createElement('button');
      btn.className = 'pick-btn';
      btn.textContent = `+ ${r.nameTh}`;
      btn.title = r.desc;
      btn.onclick = () => {
        const next = roleSet.slice();
        next.push(r.id);
        pendingRoleSet = next;
        socket.emit('host:settings', { roleSet: next });
      };
      addRow.appendChild(btn);
    });
    picker.appendChild(addRow);

    // รายการที่เลือกไว้แล้ว (กดเพื่อลบ)
    const chipRow = document.createElement('div');
    chipRow.style.display = 'flex';
    chipRow.style.flexWrap = 'wrap';
    chipRow.style.gap = '6px';
    roleSet.forEach((roleId, idx) => {
      const meta = roleById(s.roleCatalog, roleId);
      const chip = document.createElement('div');
      chip.className = 'role-chip';
      chip.innerHTML = `<span>${meta ? meta.nameTh : roleId}</span>`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '×';
      removeBtn.onclick = () => {
        const next = roleSet.slice();
        next.splice(idx, 1);
        pendingRoleSet = next;
        socket.emit('host:settings', { roleSet: next });
      };
      chip.appendChild(removeBtn);
      chipRow.appendChild(chip);
    });
    picker.appendChild(chipRow);

    $('#set-night-seconds').onchange = (e) => socket.emit('host:settings', { nightSeconds: Number(e.target.value) });
    $('#set-day-seconds').onchange = (e) => socket.emit('host:settings', { daySeconds: Number(e.target.value) });

    const hasWerewolf = roleSet.includes('werewolf');
    const canStart = roleSet.length === need && hasWerewolf && s.players.length >= 3;
    $('#btn-start-game').disabled = !canStart;
    $('#btn-start-game').onclick = () => socket.emit('game:start');
  }

  // ======================================================================
  // แจกไพ่ / ดูบทบาท
  // ======================================================================
  function resetRoleCardFlip() {
    $('#role-card').classList.remove('flipped');
  }

  function renderSetup(s) {
    const meta = s.setup.myRole;
    $('#role-card-img').src = meta ? `assets/cards/${meta.id}.webp` : '';
    $('#role-card-img').onerror = () => { $('#role-card-img').style.visibility = 'hidden'; };
    $('#role-card-name').textContent = meta ? meta.nameTh : '';
    $('#role-card-desc').textContent = meta ? meta.desc : '';

    if (!$('#role-card').dataset.flipBound) {
      $('#role-card').dataset.flipBound = '1';
      $('#role-card').addEventListener('click', () => {
        if (!$('#role-card').classList.contains('flipped')) {
          AudioManager.playSfx('flip');
          $('#role-card').classList.add('flipped');
        }
      });
    }

    $('#setup-ready-count').textContent = `พร้อมแล้ว ${s.setup.readyCount}/${s.setup.total} คน`;
    const btn = $('#btn-setup-ready');
    btn.disabled = s.setup.iAmReady;
    btn.textContent = s.setup.iAmReady ? 'รอผู้เล่นคนอื่น...' : 'รับทราบ พร้อมเริ่ม';
    btn.onclick = () => socket.emit('setup:ready');
  }

  // ======================================================================
  // กลางคืน
  // ======================================================================
  let nightTimerInterval = null;

  function renderNight(s) {
    const n = s.night;
    $('#night-fog-sub').textContent = n.roleName ? `(${n.roleName} กำลังทำหน้าที่อยู่)` : '';

    $('#night-active').classList.toggle('hidden', !n.isMyTurn);
    $('#night-fog').classList.toggle('hidden', n.isMyTurn);

    clearInterval(nightTimerInterval);
    const bar = $('#night-timer-bar');
    function tick() {
      const left = n.deadlineAt - Date.now();
      const total = (s.settings.nightSeconds || 20) * 1000;
      bar.style.width = `${Math.max(0, Math.min(100, (left / total) * 100))}%`;
    }
    tick();
    nightTimerInterval = setInterval(tick, 250);

    if (!n.isMyTurn) return;

    $('#night-role-banner').textContent = `คุณคือ ${n.roleName} — ${n.roleId === 'werewolf' ? 'ลืมตา' : 'ตาคุณ'}`;
    const area = $('#night-action-area');
    area.innerHTML = '';

    const roleId = n.roleId;
    const myInfo = n.myInfo;

    if (roleId === 'werewolf') {
      if (n.otherSeatsThisStep.length > 0) {
        area.innerHTML = `<p>เพื่อนหมาป่าของคุณคือ: ${n.otherSeatsThisStep.map((seat) => seatName(s, seat)).join(', ')}</p>`;
        addAckButton(area);
      } else if (myInfo && myInfo.kind === 'werewolf-alone-peek') {
        area.innerHTML = `<p>ไพ่กลางใบที่ ${myInfo.index + 1} คือ: <b>${roleNameLocal(s, myInfo.role)}</b></p>`;
        addAckButton(area);
      } else {
        area.innerHTML = '<p>คุณเป็นหมาป่าตัวเดียว เลือกดูไพ่กลางได้ 1 ใบ (หรือข้าม)</p>';
        const row = document.createElement('div');
        row.className = 'pick-grid';
        [0, 1, 2].forEach((i) => {
          const b = document.createElement('button');
          b.className = 'pick-btn';
          b.textContent = `ไพ่กลาง #${i + 1}`;
          b.onclick = () => socket.emit('night:action', { centerIndex: i });
          row.appendChild(b);
        });
        area.appendChild(row);
        addAckButton(area, 'ไม่ดู ข้ามไปเลย');
      }
    } else if (roleId === 'minion') {
      const wolves = myInfo && myInfo.wolfSeats || [];
      area.innerHTML = wolves.length
        ? `<p>มนุษย์หมาป่าคือ: ${wolves.map((seat) => seatName(s, seat)).join(', ')}</p>`
        : '<p>ไม่มีมนุษย์หมาป่าอยู่ในมือผู้เล่นเลย (อยู่ไพ่กลางทั้งหมด)</p>';
      addAckButton(area);
    } else if (roleId === 'insomniac') {
      area.innerHTML = `<p>ไพ่ของคุณตอนนี้คือ: <b>${roleNameLocal(s, myInfo.myRole)}</b></p>`;
      addAckButton(area);
    } else if (roleId === 'seer') {
      if (myInfo) {
        area.innerHTML = myInfo.kind === 'seer-player'
          ? `<p>ไพ่ของ ${seatName(s, myInfo.targetSeat)} คือ: <b>${roleNameLocal(s, myInfo.role)}</b></p>`
          : `<p>ไพ่กลาง: ${myInfo.roles.map((r) => `<b>${roleNameLocal(s, r)}</b>`).join(', ')}</p>`;
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกดูไพ่ผู้เล่น 1 คน หรือไพ่กลาง 2 ใบ</p>';
        const row = document.createElement('div');
        row.className = 'pick-grid';
        otherSeats(s).forEach((seat) => {
          const b = document.createElement('button');
          b.className = 'pick-btn';
          b.textContent = seatName(s, seat);
          b.onclick = () => socket.emit('night:action', { mode: 'player', targetSeat: seat });
          row.appendChild(b);
        });
        const centerBtn = document.createElement('button');
        centerBtn.className = 'pick-btn';
        centerBtn.textContent = 'ไพ่กลาง 2 ใบ (#1, #2)';
        centerBtn.onclick = () => socket.emit('night:action', { mode: 'center', indices: [0, 1] });
        row.appendChild(centerBtn);
        area.appendChild(row);
      }
    } else if (roleId === 'robber') {
      if (myInfo) {
        area.innerHTML = `<p>คุณได้ไพ่ใหม่: <b>${roleNameLocal(s, myInfo.newRole)}</b></p>`;
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกผู้เล่นที่จะสลับไพ่ด้วย</p>';
        const row = document.createElement('div');
        row.className = 'pick-grid';
        otherSeats(s).forEach((seat) => {
          const b = document.createElement('button');
          b.className = 'pick-btn';
          b.textContent = seatName(s, seat);
          b.onclick = () => socket.emit('night:action', { targetSeat: seat });
          row.appendChild(b);
        });
        area.appendChild(row);
        addAckButton(area, 'ไม่สลับ ข้ามไปเลย');
      }
    } else if (roleId === 'troublemaker') {
      area.innerHTML = '<p>เลือกผู้เล่น 2 คนที่จะสลับไพ่กัน (โดยไม่ดู)</p>';
      let picked = [];
      const row = document.createElement('div');
      row.className = 'pick-grid';
      otherSeats(s).forEach((seat) => {
        const b = document.createElement('button');
        b.className = 'pick-btn';
        b.textContent = seatName(s, seat);
        b.onclick = () => {
          if (picked.includes(seat)) { picked = picked.filter((x) => x !== seat); b.classList.remove('selected'); }
          else if (picked.length < 2) { picked.push(seat); b.classList.add('selected'); }
          if (picked.length === 2) socket.emit('night:action', { seatA: picked[0], seatB: picked[1] });
        };
        row.appendChild(b);
      });
      area.appendChild(row);
      addAckButton(area, 'ไม่สลับ ข้ามไปเลย');
    } else if (roleId === 'drunk') {
      area.innerHTML = '<p>เลือกไพ่กลาง 1 ใบ มาสลับกับไพ่ของคุณ (โดยไม่ดู)</p>';
      const row = document.createElement('div');
      row.className = 'pick-grid';
      [0, 1, 2].forEach((i) => {
        const b = document.createElement('button');
        b.className = 'pick-btn';
        b.textContent = `ไพ่กลาง #${i + 1}`;
        b.onclick = () => socket.emit('night:action', { centerIndex: i });
        row.appendChild(b);
      });
      area.appendChild(row);
    }
  }

  function addAckButton(area, label) {
    const b = document.createElement('button');
    b.className = 'btn btn-primary';
    b.textContent = label || 'รับทราบ';
    b.onclick = () => socket.emit('night:action', {});
    area.appendChild(b);
  }

  function otherSeats(s) {
    return s.players.filter((p) => p.seat !== s.youSeat).map((p) => p.seat);
  }

  function seatName(s, seat) {
    const p = s.players.find((pl) => pl.seat === seat);
    return p ? p.nickname : `ที่นั่ง ${seat}`;
  }

  function roleNameLocal(s, roleId) {
    const r = roleById(s.roleCatalog, roleId);
    return r ? r.nameTh : roleId;
  }

  // ======================================================================
  // กลางวัน
  // ======================================================================
  let dayTimerInterval = null;

  function renderDay(s) {
    const d = s.day;
    clearInterval(dayTimerInterval);
    function tick() {
      if (d.deadlineAt === 0) { $('#day-timer').textContent = '⏳ ไม่จำกัดเวลา'; return; }
      $('#day-timer').textContent = `⏳ ${Render.fmtClock(d.deadlineAt - Date.now())}`;
    }
    tick();
    dayTimerInterval = setInterval(tick, 500);

    $('#day-ready-count').textContent = d.readyCount;
    $('#day-ready-total').textContent = d.total;

    renderSeatRing($('#day-seats'), $('#center-pile'), s, false);

    const chatLog = $('#chat-log');
    chatLog.innerHTML = d.chat.map((c) => `<div class="chat-line"><b>${escapeHtml(c.nickname)}:</b> ${escapeHtml(c.text)}</div>`).join('');
    chatLog.scrollTop = chatLog.scrollHeight;

    const btn = $('#btn-day-ready');
    btn.disabled = d.iAmReady;
    btn.textContent = d.iAmReady ? `พร้อมแล้ว (${d.readyCount}/${d.total})` : 'เริ่มโหวต';
    btn.onclick = () => socket.emit('day:ready');
  }

  $('#chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#chat-input');
    const text = input.value.trim();
    if (!text) return;
    socket.emit('chat:msg', { text });
    input.value = '';
  });

  // วาดอวาตาร์รอบโต๊ะ + ไพ่กลาง พร้อมระบบสติ๊กเกอร์ (ใช้ร่วมหน้ากลางวัน)
  function renderSeatRing(seatsEl, centerEl, s, interactiveStickersOnCenterOnly) {
    seatsEl.innerHTML = '';
    centerEl.innerHTML = '';
    const total = s.players.length;
    s.players.forEach((p) => {
      const pos = Render.seatPosition(s.youSeat, p.seat, total);
      const el = document.createElement('div');
      el.className = 'seat-avatar' + (p.seat === s.youSeat ? ' me' : '');
      el.style.left = `${pos.x}%`;
      el.style.top = `${pos.y}%`;
      const stickerId = p.seat !== s.youSeat ? Stickers.get(s.code, `seat-${p.seat}`) : null;
      const stickerMeta = stickerId ? roleById(s.roleCatalog, stickerId) : null;
      el.innerHTML = `
        <div class="avatar-circle">${p.connected ? '🙂' : '💤'}${stickerMeta ? `<span class="sticker-badge">${stickerMeta.nameTh.slice(0, 2)}</span>` : ''}</div>
        <div class="seat-name">${escapeHtml(p.nickname)}${p.seat === s.youSeat ? ' (คุณ)' : ''}</div>`;
      if (p.seat !== s.youSeat) {
        el.querySelector('.avatar-circle').addEventListener('click', (e) => {
          Stickers.openPicker(e.currentTarget, s.roleCatalog.filter(Boolean), (roleId) => {
            Stickers.set(s.code, `seat-${p.seat}`, roleId);
            renderSeatRing(seatsEl, centerEl, s, interactiveStickersOnCenterOnly);
          });
        });
      }
      seatsEl.appendChild(el);
    });

    for (let i = 0; i < 3; i++) {
      const cardEl = document.createElement('div');
      cardEl.className = 'center-card';
      const stickerId = Stickers.get(s.code, `center-${i}`);
      const stickerMeta = stickerId ? roleById(s.roleCatalog, stickerId) : null;
      if (stickerMeta) cardEl.innerHTML = `<span class="sticker-badge">${stickerMeta.nameTh.slice(0, 2)}</span>`;
      cardEl.addEventListener('click', (e) => {
        Stickers.openPicker(e.currentTarget, s.roleCatalog.filter(Boolean), (roleId) => {
          Stickers.set(s.code, `center-${i}`, roleId);
          renderSeatRing(seatsEl, centerEl, s, interactiveStickersOnCenterOnly);
        });
      });
      centerEl.appendChild(cardEl);
    }
  }

  // ======================================================================
  // โหวต
  // ======================================================================
  function renderVote(s) {
    $('#vote-count').textContent = s.vote.castCount;
    $('#vote-total').textContent = s.vote.total;

    const grid = $('#vote-grid');
    grid.innerHTML = '';
    s.players.filter((p) => p.seat !== s.youSeat).forEach((p) => {
      const b = document.createElement('button');
      b.className = 'vote-option';
      b.textContent = p.nickname;
      b.disabled = s.vote.iVoted;
      b.onclick = () => socket.emit('vote:cast', { target: p.seat });
      grid.appendChild(b);
    });

    $('#vote-none').disabled = s.vote.iVoted;
    $('#vote-none').onclick = () => socket.emit('vote:cast', { target: 'none' });

    const skipPanel = $('#vote-skip-panel');
    if (s.youAreHost && s.vote.canSkip.length > 0) {
      skipPanel.classList.remove('hidden');
      skipPanel.innerHTML = '<p class="muted">มีผู้เล่นหลุดการเชื่อมต่อ กดเพื่อข้าม (งดออกเสียง) ถ้ารอนานเกินไป:</p>';
      s.vote.canSkip.forEach((seat) => {
        const b = document.createElement('button');
        b.textContent = `ข้ามผู้เล่น: ${seatName(s, seat)}`;
        b.onclick = () => socket.emit('host:skipVote', { seat });
        skipPanel.appendChild(b);
      });
    } else {
      skipPanel.classList.add('hidden');
    }
  }

  // ======================================================================
  // สรุปผล
  // ======================================================================
  const WINNER_LABEL = { village: 'ชาวบ้านชนะ 🏡', werewolf: 'มนุษย์หมาป่าชนะ 🐺', tanner: 'ยาจกชนะ 💰' };

  function renderReveal(s) {
    const r = s.reveal;
    $('#reveal-banner').textContent = r.winners.map((w) => WINNER_LABEL[w] || w).join(' + ');

    const grid = $('#reveal-grid');
    grid.innerHTML = '';
    s.players.forEach((p) => {
      const isDead = r.deadSeats.includes(p.seat);
      const start = r.originalHands[p.seat];
      const end = r.finalHands[p.seat];
      const card = document.createElement('div');
      card.className = 'reveal-card' + (isDead ? ' dead' : '');
      card.innerHTML = `
        <div>${escapeHtml(p.nickname)}</div>
        <img src="assets/cards/${end.id}.webp" onerror="this.style.display='none'" />
        <div>${end.nameTh}</div>
        ${start.id !== end.id ? `<div class="arrow">เริ่มจาก: ${start.nameTh}</div>` : ''}
        ${isDead ? '<div class="arrow">☠️ ตาย</div>' : ''}`;
      grid.appendChild(card);
    });

    const timeline = $('#reveal-timeline');
    const labelMap = {
      'seer-player': (h) => `ผู้หยั่งรู้ (${seatName(s, h.seat)}) ดูไพ่ของ ${seatName(s, h.targetSeat)}`,
      'seer-center': (h) => `ผู้หยั่งรู้ (${seatName(s, h.seat)}) ดูไพ่กลาง ${h.indices.map((i) => `#${i + 1}`).join(', ')}`,
      robber: (h) => `โจร (${seatName(s, h.seat)}) สลับไพ่กับ ${seatName(s, h.targetSeat)}`,
      troublemaker: (h) => `ผู้ก่อกวน (${seatName(s, h.seat)}) สลับไพ่ของ ${seatName(s, h.seatA)} กับ ${seatName(s, h.seatB)}`,
      drunk: (h) => `ขี้เมา (${seatName(s, h.seat)}) สลับไพ่กับไพ่กลาง #${h.centerIndex + 1}`,
    };
    timeline.innerHTML = '<b>ไทม์ไลน์ตอนกลางคืน:</b><ul>' +
      (r.history.length ? r.history.map((h) => `<li>${(labelMap[h.type] || (() => h.type))(h)}</li>`).join('') : '<li>ไม่มีการสลับไพ่ในรอบนี้</li>') +
      '</ul>';

    const restartBtn = $('#btn-restart');
    restartBtn.classList.toggle('hidden', !s.youAreHost);
    restartBtn.onclick = () => {
      Stickers.clear(s.code);
      socket.emit('game:restart');
    };
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
})();
