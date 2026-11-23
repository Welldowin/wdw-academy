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

  // ---------- ออกจากห้อง / คัดลอกรหัส ----------
  function goLanding() {
    localStorage.removeItem('ww_room_code');
    roomCode = null; state = null; lastPhase = null; pendingRoleSet = null;
    showScreen('landing');
  }
  $('#btn-leave-room').addEventListener('click', () => {
    if (!confirm('ออกจากห้องนี้ใช่ไหม?')) return;
    socket.emit('room:leave');
    goLanding();
  });
  socket.on('room:left', goLanding);
  $('#btn-copy-code').addEventListener('click', () => {
    const code = (state && state.code) || '';
    const done = () => toast('คัดลอกรหัสห้องแล้ว: ' + code);
    if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, () => toast('รหัสห้อง: ' + code));
    else toast('รหัสห้อง: ' + code);
  });

  // ---------- เสียง ----------
  const audioPanel = $('#audio-panel');
  function syncAudioUi() {
    const muted = AudioManager.isMuted();
    $('#btn-mute').textContent = muted ? '🔇' : '🔊';
    $('#btn-mute-toggle').textContent = muted ? 'เปิดเสียง' : 'ปิดเสียง';
    $('#vol-bgm').value = Math.round(AudioManager.getBgmVolume() * 100);
    $('#vol-sfx').value = Math.round(AudioManager.getSfxVolume() * 100);
    $('#vol-bgm-val').textContent = `${$('#vol-bgm').value}%`;
    $('#vol-sfx-val').textContent = `${$('#vol-sfx').value}%`;
  }
  $('#btn-mute').addEventListener('click', (e) => { e.stopPropagation(); audioPanel.classList.toggle('hidden'); });
  audioPanel.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => audioPanel.classList.add('hidden'));
  $('#btn-mute-toggle').addEventListener('click', () => { AudioManager.toggleMute(); syncAudioUi(); });
  $('#vol-bgm').addEventListener('input', (e) => { AudioManager.setBgmVolume(Number(e.target.value) / 100); syncAudioUi(); });
  $('#vol-sfx').addEventListener('input', (e) => {
    AudioManager.setSfxVolume(Number(e.target.value) / 100); syncAudioUi();
  });
  $('#vol-sfx').addEventListener('change', () => AudioManager.playSfx('morning')); // เสียงตัวอย่างตอนปล่อยแถบเลื่อน
  syncAudioUi();

  // เสียงทั้งหมดสั่งจากการเปลี่ยนเฟสใน room:state (ด้านล่าง) ไม่ใช้ event sfx จากเซิร์ฟเวอร์แล้ว

  // ======================================================================
  // room:state คือหัวใจของแอป — render ใหม่ทุกครั้งตาม phase
  // ======================================================================
  let lastPhase = null;
  socket.on('room:state', (s) => {
    state = s;
    if (s.phase !== lastPhase) {
      pendingRoleSet = null;
      nightPick = { key: '', sel: [] };
      Stickers.closePicker();
      const fresh = lastPhase === null; // เพิ่งเชื่อมต่อ/รีเฟรช: ข้าม sfx เล่นแต่เพลงพื้นหลัง
      if (s.phase === 'lobby' || s.phase === 'setup') AudioManager.stopBgm();
      if (s.phase === 'night') { if (fresh) AudioManager.playBgm('night'); else AudioManager.sfxThenBgm('night', 'night'); }
      if (s.phase === 'day') { if (fresh) AudioManager.playBgm('select'); else AudioManager.sfxThenBgm('morning', 'select'); }
      if (s.phase === 'vote') AudioManager.playBgm('select'); // เพลงเดียวกับตอนปรึกษา เล่นต่อเนื่องจนโหวตเสร็จ
      if (s.phase === 'reveal') {
        if (fresh) AudioManager.stopBgm();
        else AudioManager.playResult(s.reveal && s.reveal.winners.includes('werewolf') ? 'lose' : 'win');
      }
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

  function expansionOn(s, key) {
    return { mason: s.settings.useMason, doppelganger: s.settings.useDoppelganger, dreamwolf: s.settings.useDreamWolf }[key];
  }

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
      chip.className = 'player-chip' + (p.isHost ? ' host' : '') + (p.isBot ? ' bot' : '') + (p.connected ? '' : ' offline');
      chip.innerHTML = `<span class="dot"></span> ${p.isHost ? '<span class="crown">👑</span>' : ''}${p.isBot ? '🤖' : ''} ${escapeHtml(p.nickname)}${p.seat === s.youSeat ? ' (คุณ)' : ''}`;
      if (p.isBot && s.youAreHost) {
        const x = document.createElement('button');
        x.className = 'chip-x';
        x.title = 'เอาบอทออก';
        x.textContent = '✕';
        x.onclick = () => socket.emit('host:removeBot', { seat: p.seat });
        chip.appendChild(x);
      }
      list.appendChild(chip);
    });

    const need0 = s.players.length + 3;
    $('#lobby-count').textContent = `ผู้เล่น ${s.players.length}/10 คน (ต้องมีอย่างน้อย 3 คน)`;

    const hostPanel = $('#host-settings');
    hostPanel.classList.toggle('hidden', !s.youAreHost);
    const guest = $('#guest-wait');
    guest.classList.toggle('hidden', s.youAreHost);
    if (!s.youAreHost) {
      const host = s.players.find((p) => p.isHost);
      $('#guest-wait-text').textContent = `รอ ${host ? host.nickname : 'เจ้าของห้อง'} เริ่มเกม...`;
      $('#guest-wait-code').textContent = s.code;
      $('#gw-night').textContent = `${s.settings.nightSeconds} วินาที`;
      $('#gw-day').textContent = s.settings.daySeconds ? `${s.settings.daySeconds / 60} นาที` : 'ไม่จำกัดเวลา';
      const exp = [];
      if (s.settings.useMason) exp.push('เมสัน');
      if (s.settings.useDoppelganger) exp.push('ภูติจำแลง');
      if (s.settings.useDreamWolf) exp.push('หมาป่าหลับใหล');
      $('#gw-exp').textContent = exp.length ? exp.join(', ') : 'ไม่ใช้';
      $('#gw-role-count').textContent = `${s.settings.roleSet.length}/${need0}`;
      $('#gw-roles').innerHTML = s.settings.roleSet.map((id) => {
        const m = roleById(s.roleCatalog, id);
        return `<span class="gw-role${m && m.expansion ? ' expansion' : ''}" title="${escapeHtml(m ? m.desc : '')}">${m ? m.icon + ' ' + escapeHtml(m.nameTh) : escapeHtml(id)}</span>`;
      }).join('');
      return;
    }

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
    s.roleCatalog.filter((r) => r && (!r.expansion || expansionOn(s, r.expansion))).forEach((r) => {
      const btn = document.createElement('button');
      btn.className = 'pick-btn' + (r.expansion ? ' expansion' : '');
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

    $('#set-mason').checked = !!s.settings.useMason;
    $('#set-doppel').checked = !!s.settings.useDoppelganger;
    $('#set-dreamwolf').checked = !!s.settings.useDreamWolf;
    $('#set-mason').onchange = (e) => { pendingRoleSet = null; socket.emit('host:settings', { useMason: e.target.checked }); };
    $('#set-doppel').onchange = (e) => { pendingRoleSet = null; socket.emit('host:settings', { useDoppelganger: e.target.checked }); };
    $('#set-dreamwolf').onchange = (e) => { pendingRoleSet = null; socket.emit('host:settings', { useDreamWolf: e.target.checked }); };
    $('#btn-auto-roles').onclick = () => { pendingRoleSet = null; socket.emit('host:settings', { autoRoleSet: true }); };

    $('#set-night-seconds').onchange = (e) => socket.emit('host:settings', { nightSeconds: Number(e.target.value) });
    $('#set-day-seconds').onchange = (e) => socket.emit('host:settings', { daySeconds: Number(e.target.value) });

    const hasWerewolf = roleSet.includes('werewolf') || roleSet.includes('dreamwolf');
    const canStart = roleSet.length === need && hasWerewolf && s.players.length >= 3;
    $('#btn-start-game').disabled = !canStart;
    $('#btn-start-game').onclick = () => socket.emit('game:start');
    $('#btn-add-bot').disabled = s.players.length >= 10;
    $('#btn-add-bot').onclick = () => socket.emit('host:addBot');
  }

  // ======================================================================
  // แจกไพ่ / ดูบทบาท
  // ======================================================================
  function resetRoleCardFlip() {
    $('#role-card').classList.remove('flipped');
  }

  function renderSetup(s) {
    const meta = s.setup.myRole;
    const img = $('#role-card-img');
    const iconEl = $('#role-card-icon');
    img.style.display = '';
    iconEl.classList.add('hidden');
    // ยังไม่มีภาพการ์ด (เช่น บทบาทเสริม) => โชว์ไอคอนแทน
    img.onerror = () => { img.style.display = 'none'; iconEl.textContent = meta ? meta.icon : ''; iconEl.classList.remove('hidden'); };
    img.src = meta ? `assets/cards/${meta.id}.webp` : '';
    $('#role-card-name').textContent = meta ? meta.nameTh : '';
    $('#role-card-desc').textContent = meta ? meta.desc : '';
    $('#role-caption-name').textContent = meta ? `${meta.icon} ${meta.nameTh}` : '';
    $('#role-caption-desc').textContent = meta ? meta.desc : '';

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

    $('#night-role-banner').textContent = n.asDoppel
      ? `คุณคือภูติจำแลง ที่กลายเป็น ${n.roleName} — ตาคุณ`
      : `คุณคือ ${n.roleName} — ${n.roleId === 'werewolf' ? 'ลืมตา' : 'ตาคุณ'}`;
    const area = $('#night-action-area');
    area.innerHTML = '';

    const roleId = n.roleId;
    const myInfo = n.myInfo;
    const names = (seats) => (seats || []).map((x) => seatName(s, x)).join(', ');
    const cardName = (id) => `<b>${roleNameLocal(s, id)}</b>`;

    if (roleId === 'doppelganger') {
      if (myInfo) {
        area.innerHTML = `<p>ไพ่ของ ${escapeHtml(seatName(s, myInfo.targetSeat))} คือ ${cardName(myInfo.role)} — คุณกลายเป็น ${cardName(myInfo.role)} แล้ว${nightFollowUp(myInfo.role)}</p>`;
        area.appendChild(resultCards([myInfo.role]));
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกดูไพ่ผู้เล่นอื่น 1 คน แล้วคุณจะกลายเป็นบทบาทนั้น</p>';
        pickerUI(area, { key: 'doppel', kind: 'player', options: otherSeats(s), max: 1, confirmLabel: 'ยืนยัน ดูไพ่คนนี้',
          onConfirm: (sel) => socket.emit('night:action', { targetSeat: sel[0] }) }, s);
        addAckButton(area, 'ไม่ดู ข้ามไปเลย');
      }
    } else if (roleId === 'mason') {
      const others = (myInfo && myInfo.otherSeats) || [];
      area.innerHTML = others.length
        ? '<p>เพื่อนเมสันของคุณคือ:</p>'
        : '<p>ไม่มีเมสันคนอื่นในหมู่ผู้เล่น (อีกใบอยู่ไพ่กลาง หรือไม่ได้ใช้)</p>';
      if (others.length) area.appendChild(friendChips(s, others, 'friend-chip'));
      addAckButton(area);
    } else if (roleId === 'werewolf') {
      const dream = (myInfo && myInfo.dreamSeats) || [];
      if (n.otherSeatsThisStep.length > 0) {
        area.innerHTML = `<p>🐺 คุณคือหมาป่า — เพื่อนหมาป่าของคุณคือ:</p>`;
        area.appendChild(friendChips(s, n.otherSeatsThisStep, 'friend-chip'));
        if (dream.length) {
          area.insertAdjacentHTML('beforeend', '<p class="pick-hint">หมาป่าหลับใหล (ไม่ได้ตื่น แต่เป็นพวกเดียวกัน):</p>');
          area.appendChild(friendChips(s, dream, 'friend-chip dream'));
        }
        addAckButton(area);
      } else if (myInfo && myInfo.kind === 'werewolf-alone-peek') {
        area.innerHTML = `<p>ไพ่กลางใบที่ ${myInfo.index + 1} คือ: ${cardName(myInfo.role)}</p>`;
        area.appendChild(resultCards([myInfo.role]));
        addAckButton(area);
      } else {
        area.innerHTML = '<p>🐺 คุณเป็นหมาป่าตัวเดียว เลือกดูไพ่กลางได้ 1 ใบ (หรือข้าม)</p>';
        if (dream.length) {
          area.insertAdjacentHTML('beforeend', '<p class="pick-hint">หมาป่าหลับใหล (พวกเดียวกัน):</p>');
          area.appendChild(friendChips(s, dream, 'friend-chip dream'));
        }
        pickerUI(area, { key: 'wolf-center', kind: 'card', options: [0, 1, 2], max: 1, confirmLabel: 'ยืนยัน เปิดไพ่ใบนี้',
          onConfirm: (sel) => socket.emit('night:action', { centerIndex: sel[0] }) }, s);
        addAckButton(area, 'ไม่ดู ข้ามไปเลย');
      }
    } else if (roleId === 'minion') {
      const wolves = (myInfo && myInfo.wolfSeats) || [];
      area.innerHTML = wolves.length
        ? '<p>มนุษย์หมาป่าคือ:</p>'
        : '<p>ไม่มีมนุษย์หมาป่าอยู่ในมือผู้เล่นเลย (อยู่ไพ่กลางทั้งหมด)</p>';
      if (wolves.length) area.appendChild(friendChips(s, wolves, 'friend-chip'));
      addAckButton(area);
    } else if (roleId === 'insomniac') {
      area.innerHTML = `<p>ไพ่ของคุณตอนนี้คือ: ${cardName(myInfo.myRole)}</p>`;
      area.appendChild(resultCards([myInfo.myRole]));
      addAckButton(area);
    } else if (roleId === 'seer') {
      if (myInfo) {
        if (myInfo.kind === 'seer-player') {
          area.innerHTML = `<p>ไพ่ของ ${escapeHtml(seatName(s, myInfo.targetSeat))} คือ: ${cardName(myInfo.role)}</p>`;
          area.appendChild(resultCards([myInfo.role]));
        } else {
          area.innerHTML = `<p>ไพ่กลางที่เปิดดู: ${myInfo.roles.map(cardName).join(', ')}</p>`;
          area.appendChild(resultCards(myInfo.roles, myInfo.indices.map((i) => `กลาง #${i + 1}`)));
        }
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือก <b>ดูไพ่ผู้เล่น 1 คน</b> หรือ <b>ดูไพ่กลาง 2 ใบ</b></p>';
        area.insertAdjacentHTML('beforeend', '<p class="pick-hint">แบบที่ 1: ดูไพ่ผู้เล่น</p>');
        pickerUI(area, { key: 'seer-player', kind: 'player', options: otherSeats(s), max: 1, confirmLabel: 'ยืนยัน ดูไพ่ผู้เล่นคนนี้',
          onConfirm: (sel) => socket.emit('night:action', { mode: 'player', targetSeat: sel[0] }) }, s);
        area.insertAdjacentHTML('beforeend', '<p class="pick-hint">แบบที่ 2: ดูไพ่กลาง 2 ใบ</p>');
        pickerUI(area, { key: 'seer-center', kind: 'card', options: [0, 1, 2], max: 2, confirmLabel: 'ยืนยัน เปิดไพ่กลาง 2 ใบ',
          onConfirm: (sel) => socket.emit('night:action', { mode: 'center', indices: sel }) }, s);
      }
    } else if (roleId === 'robber') {
      if (myInfo) {
        area.innerHTML = `<p>คุณได้ไพ่ใหม่: ${cardName(myInfo.newRole)}</p>`;
        area.appendChild(resultCards([myInfo.newRole]));
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกผู้เล่นที่จะ <b>ขโมยไพ่</b> (สลับไพ่แล้วดูไพ่ใหม่ของคุณ)</p>';
        pickerUI(area, { key: 'robber', kind: 'player', options: otherSeats(s), max: 1, confirmLabel: 'ยืนยัน ขโมยไพ่คนนี้',
          onConfirm: (sel) => socket.emit('night:action', { targetSeat: sel[0] }) }, s);
        addAckButton(area, 'ไม่สลับ ข้ามไปเลย');
      }
    } else if (roleId === 'troublemaker') {
      if (n.iActed) {
        area.innerHTML = '<p>สลับไพ่เรียบร้อยแล้ว</p>';
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกผู้เล่น <b>2 คน</b> ที่จะสลับไพ่กัน (โดยไม่ดู)</p>';
        pickerUI(area, { key: 'trouble', kind: 'player', options: otherSeats(s), max: 2, confirmLabel: 'ยืนยัน สลับไพ่ 2 คนนี้',
          onConfirm: (sel) => socket.emit('night:action', { seatA: sel[0], seatB: sel[1] }) }, s);
        addAckButton(area, 'ไม่สลับ ข้ามไปเลย');
      }
    } else if (roleId === 'drunk') {
      if (n.iActed) {
        area.innerHTML = '<p>สลับไพ่กับไพ่กลางเรียบร้อยแล้ว (คุณไม่รู้ว่าได้ไพ่อะไร)</p>';
        addAckButton(area);
      } else {
        area.innerHTML = '<p>เลือกไพ่กลาง <b>1 ใบ</b> มาสลับกับไพ่ของคุณ (โดยไม่ดู)</p>';
        pickerUI(area, { key: 'drunk', kind: 'card', options: [0, 1, 2], max: 1, confirmLabel: 'ยืนยัน สลับกับใบนี้',
          onConfirm: (sel) => socket.emit('night:action', { centerIndex: sel[0] }) }, s);
      }
    }
  }

  // ---------- ตัวช่วยหน้ากลางคืน ----------

  // เก็บค่าที่เลือกไว้ข้ามการ render ใหม่ (เซิร์ฟเวอร์ส่ง state มาบ่อย) — รีเซ็ตเมื่อเปลี่ยนเฟส/ยืนยันแล้ว
  let nightPick = { key: '', sel: [] };

  function pickerUI(area, cfg, s) {
    if (nightPick.key !== cfg.key) nightPick = { key: cfg.key, sel: [] };
    const wrap = document.createElement('div');
    wrap.className = 'pick-grid' + (cfg.kind === 'card' ? ' cards' : '');
    const confirm = document.createElement('button');
    confirm.className = 'btn btn-primary';
    const refresh = () => {
      const left = cfg.max - nightPick.sel.length;
      confirm.disabled = left > 0;
      confirm.textContent = left > 0 ? `${cfg.confirmLabel} (เลือกอีก ${left})` : cfg.confirmLabel;
      wrap.querySelectorAll('[data-opt]').forEach((el) => {
        el.classList.toggle('selected', nightPick.sel.includes(Number(el.dataset.opt)));
      });
    };
    cfg.options.forEach((opt) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.opt = String(opt);
      if (cfg.kind === 'card') {
        b.className = 'pick-card';
        b.innerHTML = `<img src="assets/cards/card-back.webp" alt="" draggable="false" /><span>ไพ่กลาง #${opt + 1}</span>`;
      } else {
        b.className = 'pick-btn';
        b.textContent = seatName(s, opt);
      }
      b.addEventListener('click', () => {
        const i = nightPick.sel.indexOf(opt);
        if (i >= 0) nightPick.sel.splice(i, 1);
        else if (cfg.max === 1) nightPick.sel = [opt];
        else if (nightPick.sel.length < cfg.max) nightPick.sel.push(opt);
        refresh();
      });
      wrap.appendChild(b);
    });
    confirm.addEventListener('click', () => {
      if (nightPick.sel.length < cfg.max) return;
      const sel = nightPick.sel.slice();
      nightPick = { key: '', sel: [] };
      cfg.onConfirm(sel);
    });
    area.appendChild(wrap);
    area.appendChild(confirm);
    refresh();
  }

  function friendChips(s, seats, cls) {
    const row = document.createElement('div');
    row.className = 'friend-chips';
    seats.forEach((seat) => {
      const c = document.createElement('div');
      c.className = cls;
      c.textContent = `${cls.includes('dream') ? '🌙' : '🐺'} ${seatName(s, seat)}`;
      row.appendChild(c);
    });
    return row;
  }

  function resultCards(roleIds, labels) {
    const row = document.createElement('div');
    row.className = 'result-cards';
    roleIds.forEach((id, i) => {
      const box = document.createElement('div');
      box.className = 'rc';
      box.appendChild(Render.roleCardImg(id, ''));
      const lab = document.createElement('span');
      lab.textContent = labels ? labels[i] : '';
      box.appendChild(lab);
      row.appendChild(box);
    });
    return row;
  }

  // ข้อความบอกว่าภูติจำแลงจะต้องทำอะไรต่อ ตามบทบาทที่กลายเป็น
  function nightFollowUp(roleId) {
    const later = ['werewolf', 'minion', 'mason', 'seer', 'robber', 'troublemaker', 'drunk', 'insomniac'];
    return later.includes(roleId) ? ' — คุณจะตื่นอีกครั้งตอนถึงตาของบทบาทนี้' : '';
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

    renderSeatRing($('#day-seats'), $('#center-pile'), s);

    const chatLog = $('#chat-log');
    chatLog.innerHTML = d.chat.map((c) => `<div class="chat-line"><b>${escapeHtml(c.nickname)}:</b> ${escapeHtml(c.text)}</div>`).join('');
    chatLog.scrollTop = chatLog.scrollHeight;

    const btn = $('#btn-day-ready');
    btn.disabled = d.iAmReady;
    btn.textContent = d.iAmReady ? `พร้อมแล้ว (${d.readyCount}/${d.total})` : 'เริ่มโหวต';
    btn.onclick = () => socket.emit('day:ready');

    const now = $('#btn-vote-now');
    now.classList.toggle('hidden', !s.youAreHost);
    now.onclick = () => { if (confirm('เริ่มโหวตทันทีเลยไหม? (ทุกคนจะเข้าสู่หน้าโหวตเดี๋ยวนี้)')) socket.emit('host:voteNow'); };
  }

  $('#chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#chat-input');
    const text = input.value.trim();
    if (!text) return;
    socket.emit('chat:msg', { text });
    input.value = '';
  });

  // วาดอวาตาร์รอบโต๊ะ + ไพ่กลาง พร้อมโทเคนสันนิษฐาน (โทเคนอยู่ที่เซิร์ฟเวอร์ ทุกคนเห็นเหมือนกัน)
  function tokenStack(s, target) {
    const wrap = document.createElement('div');
    wrap.className = 'token-stack';
    (s.tokens || []).filter((t) => t.target === target).forEach((t) => {
      const meta = roleById(s.roleCatalog, t.roleId);
      if (!meta) return;
      const latest = t.id === s.lastTokenId;
      const el = document.createElement('span');
      el.className = 'token-badge' + (latest ? ' latest' : '');
      el.textContent = meta.icon;
      el.title = `${meta.nameTh} — วางโดย ${seatName(s, t.by)}${latest ? ' (ย้ายล่าสุด)' : ''}`;
      el.addEventListener('click', (e) => { e.stopPropagation(); toast(`${meta.icon} ${meta.nameTh} — วางโดย ${seatName(s, t.by)}${latest ? ' (ล่าสุด)' : ''}`); });
      wrap.appendChild(el);
    });
    return wrap;
  }

  function openTokenPicker(anchor, s, target, label) {
    const counts = {};
    s.settings.roleSet.forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
    const roles = Object.keys(counts).map((id) => {
      const meta = roleById(s.roleCatalog, id);
      return meta && { id, nameTh: meta.nameTh, icon: meta.icon, count: counts[id],
        placed: (s.tokens || []).some((t) => t.roleId === id && t.target === target) };
    }).filter(Boolean);
    Stickers.openPicker(anchor, roles, (roleId) => {
      if (roleId) socket.emit('token:place', { roleId, target });
      else socket.emit('token:clear', { target });
    }, `วางโทเคนที่: ${label}`);
  }

  function renderSeatRing(seatsEl, centerEl, s) {
    seatsEl.innerHTML = '';
    centerEl.innerHTML = '';
    const total = s.players.length;
    s.players.forEach((p) => {
      const pos = Render.seatPosition(s.youSeat, p.seat, total);
      const el = document.createElement('div');
      el.className = 'seat-avatar' + (p.seat === s.youSeat ? ' me' : '');
      el.style.left = `${pos.x}%`;
      el.style.top = `${pos.y}%`;
      el.innerHTML = `
        <div class="avatar-circle">${p.isBot ? '🤖' : p.connected ? '🙂' : '💤'}</div>
        <div class="seat-name">${escapeHtml(p.nickname)}${p.seat === s.youSeat ? ' (คุณ)' : ''}</div>`;
      const circle = el.querySelector('.avatar-circle');
      circle.appendChild(tokenStack(s, `seat-${p.seat}`));
      circle.addEventListener('click', (e) => openTokenPicker(e.currentTarget, s, `seat-${p.seat}`, p.seat === s.youSeat ? `${p.nickname} (คุณ)` : p.nickname));
      seatsEl.appendChild(el);
    });

    for (let i = 0; i < 3; i++) {
      const cardEl = document.createElement('div');
      cardEl.className = 'center-card';
      cardEl.appendChild(tokenStack(s, `center-${i}`));
      cardEl.addEventListener('click', (e) => openTokenPicker(e.currentTarget, s, `center-${i}`, `ไพ่กลาง #${i + 1}`));
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

    const waiting = (s.vote.waitingFor || []).map((seat) => seatName(s, seat));
    $('#vote-waiting').textContent = s.vote.iVoted && waiting.length ? `รอ: ${waiting.join(', ')}` : '';

    $('#vote-none').disabled = s.vote.iVoted;
    $('#vote-none').onclick = () => socket.emit('vote:cast', { target: 'none' });

    const skipPanel = $('#vote-skip-panel');
    if (s.youAreHost && s.vote.canSkip.length > 0) {
      skipPanel.classList.remove('hidden');
      skipPanel.innerHTML = '<p class="muted">มีผู้เล่นหลุดการเชื่อมต่อเกิน 2 นาที กดเพื่อข้าม (งดออกเสียง):</p>';
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
  const WINNER_LABEL = { village: 'ชาวบ้านชนะ 🏡', werewolf: 'ทีมมนุษย์หมาป่า (รวมสมุนรับใช้) ชนะ 🐺', tanner: 'ยาจกชนะ 💰' };

  function renderReveal(s) {
    const r = s.reveal;
    // สมุนรับใช้ชนะพร้อมทีมหมาป่าเสมอ — โชว์เป็นทีมเดียวกัน
    $('#reveal-banner').textContent = r.winners.filter((w) => w !== 'minion').map((w) => WINNER_LABEL[w] || w).join(' + ');

    const grid = $('#reveal-grid');
    grid.innerHTML = '';
    s.players.forEach((p) => {
      const isDead = r.deadSeats.includes(p.seat);
      const start = r.originalHands[p.seat];
      const end = r.finalHands[p.seat];
      const card = document.createElement('div');
      card.className = 'reveal-card' + (isDead ? ' dead' : '');
      card.innerHTML = `
        <div class="rv-name">${escapeHtml(p.nickname)}</div>
        <img src="assets/cards/${end.id}.webp" alt="" onerror="this.outerHTML='<div class=&quot;reveal-icon&quot;>${end.icon}</div>'" />
        <div class="rv-role">${end.nameTh}</div>
        ${start.id !== end.id ? `<div class="arrow">เริ่มจาก: ${start.nameTh}</div>` : ''}
        ${isDead ? '<div class="arrow">☠️ ตาย</div>' : ''}`;
      grid.appendChild(card);
    });

    const centerEl = $('#reveal-center');
    centerEl.innerHTML = r.center.map((m, i) => `
      <div class="reveal-card">
        <div class="rv-name">ไพ่กลาง #${i + 1}</div>
        <img src="assets/cards/${m.id}.webp" alt="" onerror="this.outerHTML='<div class=&quot;reveal-icon&quot;>${m.icon}</div>'" />
        <div class="rv-role">${m.nameTh}</div>
      </div>`).join('');

    const timeline = $('#reveal-timeline');
    const labelMap = {
      'seer-player': (h) => `ผู้หยั่งรู้ (${seatName(s, h.seat)}) ดูไพ่ของ ${seatName(s, h.targetSeat)}`,
      'seer-center': (h) => `ผู้หยั่งรู้ (${seatName(s, h.seat)}) ดูไพ่กลาง ${h.indices.map((i) => `#${i + 1}`).join(', ')}`,
      robber: (h) => `โจร (${seatName(s, h.seat)}) สลับไพ่กับ ${seatName(s, h.targetSeat)}`,
      troublemaker: (h) => `ผู้ก่อกวน (${seatName(s, h.seat)}) สลับไพ่ของ ${seatName(s, h.seatA)} กับ ${seatName(s, h.seatB)}`,
      doppelganger: (h) => `ภูติจำแลง (${seatName(s, h.seat)}) ดูไพ่ของ ${seatName(s, h.targetSeat)} แล้วกลายเป็น ${roleNameLocal(s, h.role)}`,
      drunk: (h) => `ขี้เมา (${seatName(s, h.seat)}) สลับไพ่กับไพ่กลาง #${h.centerIndex + 1}`,
    };
    timeline.innerHTML = '<b>ไทม์ไลน์ตอนกลางคืน:</b><ul>' +
      (r.history.length ? r.history.map((h) => `<li>${(labelMap[h.type] || (() => h.type))(h)}</li>`).join('') : '<li>ไม่มีการสลับไพ่ในรอบนี้</li>') +
      '</ul>';

    const restartBtn = $('#btn-restart');
    restartBtn.classList.toggle('hidden', !s.youAreHost);
    $('#reveal-wait').classList.toggle('hidden', s.youAreHost);
    restartBtn.onclick = () => {
      socket.emit('game:restart');
    };
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
})();
