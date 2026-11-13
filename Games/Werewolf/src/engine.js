'use strict';

const { ROLES, NIGHT_ORDER, WOLF_ROLES, roleInfo } = require('./roles');

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;
const DISCONNECT_GRACE_MS = 2 * 60 * 1000; // 2 นาที ก่อนเจ้าของห้องจะเห็นปุ่ม "ข้ามผู้เล่น"

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nowMs() {
  return Date.now();
}

class Room {
  constructor(code) {
    this.code = code;
    this.players = []; // { socketId, playerId, nickname, seat, connected, isHost, joinedAt }
    this.phase = 'lobby'; // lobby | setup | night | day | vote | reveal
    this.settings = {
      nightSeconds: 20, // 10 | 20 | 30 | 60
      daySeconds: 300, // 120 | 300 | 600 | 0(unlimited)
      roleSet: defaultRoleSet(5),
      useMason: false,
      useDoppelganger: false,
      useDreamWolf: false,
    };
    this.roleSetCustom = false; // true เมื่อเจ้าของห้องแก้ชุดบทบาทเอง (เลิกจัดให้อัตโนมัติตามจำนวนผู้เล่น)

    this.hands = {}; // seat -> roleId (ไพ่ปัจจุบัน เปลี่ยนได้ตอนกลางคืน)
    this.originalHands = {}; // seat -> roleId (ไพ่ตอนแจกตั้งต้น ใช้ทำสรุปผล)
    this.center = []; // [roleId, roleId, roleId]
    this.history = []; // log การสลับ/ดู สำหรับหน้าสรุปผล (เก็บแบบ "ใครทำอะไร" ไม่สปอยล์ตอนเล่น)

    this.setupReady = new Set();

    this.nightStartHands = {}; // seat -> roleId ตอนเริ่มคืน (ใช้ตัดสินว่าใครต้องตื่นในสเตปไหน ไม่เปลี่ยนตามการสลับ)
    this.doppelRole = null; // บทบาทที่ภูติจำแลงกลายเป็น (ผูกกับใบไพ่ภูติจำแลง ย้ายตามไพ่ที่ถูกสลับ)
    this.nightActed = new Set(); // ทำแอคชันแล้วแต่ยังไม่กด "รับทราบ" (กำลังดูผลลัพธ์)
    this.nightQueue = []; // รายชื่อ role id ตามลำดับที่ต้องตื่นจริงในเกมนี้
    this.nightStepIndex = -1;
    this.nightSeatsForStep = []; // ที่นั่งที่ต้องทำในสเตปนี้
    this.nightDoneSeats = new Set();
    this.nightDeadlineAt = 0;
    this.nightPeekResult = {}; // seat -> ข้อมูลที่ seat นั้นเพิ่งเห็น (ใช้ส่งครั้งเดียวแล้วเคลียร์ได้)

    this.dayDeadlineAt = 0;
    this.dayReady = new Set();
    this.chat = [];

    this.votes = {}; // seat -> 'none' | seatIndex(number)
    this.voteDeadlineAt = 0;

    this.result = null; // { deadSeats:[], winners:[], history, center, originalHands, finalHands }
  }

  // ---------- ผู้เล่น ----------

  get connectedPlayers() {
    return this.players.filter((p) => p.connected);
  }

  findBySocket(socketId) {
    return this.players.find((p) => p.socketId === socketId);
  }

  findBySeat(seat) {
    return this.players.find((p) => p.seat === seat);
  }

  findByPlayerId(playerId) {
    return this.players.find((p) => p.playerId === playerId);
  }

  addPlayer(socketId, playerId, nickname) {
    // reconnect: เจอ playerId เดิมในห้องนี้
    const existing = this.findByPlayerId(playerId);
    if (existing) {
      existing.socketId = socketId;
      existing.connected = true;
      existing.disconnectedAt = null;
      if (nickname) existing.nickname = nickname;
      return { seat: existing.seat, reconnected: true };
    }

    if (this.phase !== 'lobby') {
      // เกมเริ่มไปแล้ว ไม่รับผู้เล่นใหม่ (เป็นผู้ชมได้แต่ไม่มีที่นั่ง)
      return { seat: null, spectator: true };
    }

    if (this.players.length >= MAX_PLAYERS) {
      return { seat: null, full: true };
    }

    const seat = this.players.length;
    const isHost = this.players.length === 0;
    this.players.push({
      socketId, playerId, nickname: nickname || `ผู้เล่น${seat + 1}`,
      seat, connected: true, isHost, joinedAt: nowMs(), disconnectedAt: null,
    });
    this._autoRoleSet();
    return { seat, reconnected: false };
  }

  removeSocket(socketId) {
    const p = this.findBySocket(socketId);
    if (!p) return;
    p.connected = false;
    p.disconnectedAt = nowMs();
    if (p.isHost) {
      // โอนสิทธิ์เจ้าของห้องให้คนที่เข้าห้องถัดไปตามลำดับที่ยังออนไลน์อยู่
      p.isHost = false;
      const next = this.connectedPlayers.sort((a, b) => a.joinedAt - b.joinedAt)[0];
      if (next) next.isHost = true;
    }
  }

  isEmpty() {
    return this.players.every((p) => !p.connected);
  }

  // ---------- ตั้งค่า & เริ่มเกม ----------

  updateSettings(patch) {
    const NIGHT_OPTS = [10, 20, 30, 60];
    const DAY_OPTS = [120, 300, 600, 0];
    if (NIGHT_OPTS.includes(patch.nightSeconds)) this.settings.nightSeconds = patch.nightSeconds;
    if (DAY_OPTS.includes(patch.daySeconds)) this.settings.daySeconds = patch.daySeconds;
    ['useMason', 'useDoppelganger', 'useDreamWolf'].forEach((k) => {
      if (typeof patch[k] === 'boolean') this.settings[k] = patch[k];
    });
    if (Array.isArray(patch.roleSet)) {
      this.settings.roleSet = patch.roleSet.filter((id) => ROLES[id]);
      this.roleSetCustom = true;
    }
    if (patch.autoRoleSet) this.roleSetCustom = false;
    // ปิดตัวแปรเสริม => เอาไพ่ของตัวแปรนั้นออกจากกอง
    this.settings.roleSet = this.settings.roleSet.filter((id) => this.isRoleEnabled(id));
    if (!this.roleSetCustom) this._autoRoleSet();
  }

  isRoleEnabled(id) {
    const r = ROLES[id];
    if (!r) return false;
    if (!r.expansion) return true;
    return {
      mason: this.settings.useMason,
      doppelganger: this.settings.useDoppelganger,
      dreamwolf: this.settings.useDreamWolf,
    }[r.expansion];
  }

  _autoRoleSet() {
    if (this.roleSetCustom) return;
    this.settings.roleSet = defaultRoleSet(this.players.length, this.settings);
  }

  validateRoleSet() {
    const set = this.settings.roleSet;
    if (set.length !== this.players.length + 3) {
      return `จำนวนการ์ด (${set.length}) ต้องเท่ากับผู้เล่น+3 (${this.players.length + 3})`;
    }
    if (!set.some((id) => WOLF_ROLES.includes(id))) return 'ต้องมีไพ่มนุษย์หมาป่าอย่างน้อย 1 ใบในกอง';
    if (set.some((id) => !this.isRoleEnabled(id))) return 'มีไพ่ของตัวแปรเสริมที่ยังไม่ได้เปิดใช้งานอยู่ในกอง';
    const count = (id) => set.filter((x) => x === id).length;
    if (count('doppelganger') > 1) return 'ภูติจำแลงใส่ได้สูงสุด 1 ใบ';
    if (count('dreamwolf') > 1) return 'หมาป่าหลับใหลใส่ได้สูงสุด 1 ใบ';
    if (count('mason') > 2) return 'เมสันใส่ได้สูงสุด 2 ใบ';
    return null;
  }

  startGame() {
    if (this.players.length < MIN_PLAYERS) return { ok: false, error: `ต้องมีผู้เล่นอย่างน้อย ${MIN_PLAYERS} คน` };
    const err = this.validateRoleSet();
    if (err) return { ok: false, error: err };

    const deck = shuffle(this.settings.roleSet);
    this.hands = {};
    this.originalHands = {};
    this.players.forEach((p, i) => {
      this.hands[p.seat] = deck[i];
      this.originalHands[p.seat] = deck[i];
    });
    this.center = deck.slice(this.players.length);
    this.history = [];
    this.doppelRole = null;
    this.chat = [];
    this.setupReady = new Set();
    this.result = null;
    this.phase = 'setup';
    return { ok: true };
  }

  markSetupReady(seat) {
    this.setupReady.add(seat);
    return this.setupReady.size >= this.players.length;
  }

  // ---------- กลางคืน ----------

  beginNight() {
    // ตัดสินจาก "กองไพ่ทั้งหมด" (รวมไพ่กลาง) ไม่ใช่แค่ไพ่ในมือผู้เล่น
    // เพื่อไม่ให้ผู้เล่นเดาได้ว่าบทบาทไหนอยู่ในไพ่กลาง
    const inDeck = new Set([...Object.values(this.hands), ...this.center]);
    this.nightQueue = NIGHT_ORDER.filter((r) => inDeck.has(r));
    this.nightStartHands = { ...this.hands };
    this.nightStepIndex = -1;
    this.phase = 'night';
    this._advanceNightStep();
  }

  // ที่นั่งที่ต้องตื่นในสเตปของ roleId (อ้างอิงไพ่ตอนเริ่มคืน + ภูติจำแลงที่กลายเป็นบทบาทนี้)
  _seatsForStep(roleId) {
    const seats = Object.entries(this.nightStartHands)
      .filter(([, r]) => r === roleId)
      .map(([seat]) => Number(seat));
    if (roleId !== 'doppelganger' && this.doppelRole === roleId) {
      const d = Object.entries(this.nightStartHands).find(([, r]) => r === 'doppelganger');
      if (d) seats.push(Number(d[0]));
    }
    return seats.sort((a, b) => a - b);
  }

  // บทบาทจริงของที่นั่ง ณ ตอนตัดสิน (ภูติจำแลงนับเป็นบทบาทที่กลายเป็น)
  effectiveRole(seat) {
    const r = this.hands[seat];
    if (r === 'doppelganger' && this.doppelRole) return this.doppelRole;
    return r;
  }

  _advanceNightStep() {
    this.nightStepIndex += 1;
    this.nightDoneSeats = new Set();
    this.nightActed = new Set();
    this.nightPeekResult = {};

    if (this.nightStepIndex >= this.nightQueue.length) {
      this._beginDay();
      return;
    }

    const roleId = this.nightQueue[this.nightStepIndex];
    this.nightSeatsForStep = this._seatsForStep(roleId);
    let secs = this.settings.nightSeconds;
    // บทบาทที่ไม่มีผู้เล่นถืออยู่ (อยู่ในไพ่กลาง) ยังเรียกให้เหมือนปกติ แต่เวลาสุ่มสั้นลงเล็กน้อย
    if (this.nightSeatsForStep.length === 0) secs = Math.max(4, Math.round(secs * (0.4 + Math.random() * 0.4)));
    this.nightDeadlineAt = nowMs() + secs * 1000;

    const seats = this.nightSeatsForStep;
    if (roleId === 'werewolf') {
      seats.forEach((seat) => {
        this.nightPeekResult[seat] = seats.length > 1
          ? { kind: 'werewolf-pack', othersSeats: seats.filter((s) => s !== seat) }
          : { kind: 'werewolf-alone' }; // เลือกดูไพ่กลางได้ 1 ใบ ผ่าน night:action
      });
    } else if (roleId === 'minion') {
      const wolves = [...this._seatsForStep('werewolf'), ...this._seatsForStep('dreamwolf')];
      seats.forEach((seat) => {
        this.nightPeekResult[seat] = { kind: 'minion-info', wolfSeats: wolves.filter((w) => w !== seat) };
      });
    } else if (roleId === 'mason') {
      seats.forEach((seat) => {
        this.nightPeekResult[seat] = { kind: 'mason-info', otherSeats: seats.filter((s) => s !== seat) };
      });
    } else if (roleId === 'insomniac') {
      seats.forEach((seat) => {
        this.nightPeekResult[seat] = { kind: 'insomniac-info', myRole: this.hands[seat] };
      });
    }
    // doppelganger / seer / robber / troublemaker / drunk ต้องรอ night:action จาก client (มีตัวเลือก)
  }

  isNightStepDecisionRole() {
    const roleId = this.nightQueue[this.nightStepIndex];
    return ['doppelganger', 'seer', 'robber', 'troublemaker', 'drunk'].includes(roleId);
  }

  currentNightRole() {
    return this.nightQueue[this.nightStepIndex] || null;
  }

  _validSeat(n, except) {
    return Number.isInteger(n) && this.players.some((p) => p.seat === n) && n !== except;
  }

  _validCenter(i) {
    return Number.isInteger(i) && i >= 0 && i < this.center.length;
  }

  // payload ขึ้นกับบทบาท
  // doppelganger: { targetSeat }
  // seer: { mode:'player', targetSeat } | { mode:'center', indices:[i,j] }
  // robber: { targetSeat }
  // troublemaker: { seatA, seatB }
  // drunk: { centerIndex }
  // werewolf(alone): { centerIndex } (ไม่บังคับ)
  // อื่น ๆ / ผู้เล่นที่กำลังดูผลลัพธ์อยู่: payload ว่าง = "รับทราบ"
  nightAction(seat, payload) {
    const roleId = this.currentNightRole();
    if (!roleId) return { ok: false };
    if (!this.nightSeatsForStep.includes(seat)) return { ok: false, error: 'ไม่ใช่ตาคุณ' };
    if (this.nightDoneSeats.has(seat)) return { ok: false, error: 'ทำไปแล้ว' };
    payload = payload || {};

    // ถ้ายังไม่เคยทำแอคชัน ลองทำก่อน; ถ้ามีผลลัพธ์ให้ดู ต้องรอกดรับทราบอีกครั้ง
    if (!this.nightActed.has(seat)) {
      const produced = this._performNightAction(roleId, seat, payload);
      if (produced) {
        this.nightActed.add(seat);
        return { ok: true, advanced: false };
      }
    }

    this.nightDoneSeats.add(seat);
    const allDone = this.nightSeatsForStep.every((s) => this.nightDoneSeats.has(s));
    if (allDone) this._advanceNightStep();
    return { ok: true, advanced: allDone };
  }

  // คืนค่า true ถ้าแอคชันนี้มีผลลัพธ์ให้ผู้เล่นดูต่อ (ต้องกดรับทราบอีกครั้ง)
  _performNightAction(roleId, seat, payload) {
    if (roleId === 'werewolf') {
      if (this.nightSeatsForStep.length === 1 && this._validCenter(payload.centerIndex)) {
        this.nightPeekResult[seat] = { kind: 'werewolf-alone-peek', index: payload.centerIndex, role: this.center[payload.centerIndex] };
        return true;
      }
    } else if (roleId === 'doppelganger') {
      if (this._validSeat(payload.targetSeat, seat)) {
        const role = this.hands[payload.targetSeat];
        this.doppelRole = role;
        this.nightPeekResult[seat] = { kind: 'doppel-result', targetSeat: payload.targetSeat, role };
        this.history.push({ type: 'doppelganger', seat, targetSeat: payload.targetSeat, role });
        return true;
      }
    } else if (roleId === 'seer') {
      if (payload.mode === 'player' && this._validSeat(payload.targetSeat, seat)) {
        this.nightPeekResult[seat] = { kind: 'seer-player', targetSeat: payload.targetSeat, role: this.hands[payload.targetSeat] };
        this.history.push({ type: 'seer-player', seat, targetSeat: payload.targetSeat });
        return true;
      }
      if (payload.mode === 'center' && Array.isArray(payload.indices)) {
        const idx = [...new Set(payload.indices)].filter((i) => this._validCenter(i)).slice(0, 2);
        if (idx.length === 2) {
          this.nightPeekResult[seat] = { kind: 'seer-center', indices: idx, roles: idx.map((i) => this.center[i]) };
          this.history.push({ type: 'seer-center', seat, indices: idx });
          return true;
        }
      }
    } else if (roleId === 'robber') {
      if (this._validSeat(payload.targetSeat, seat)) {
        const myOld = this.hands[seat];
        const theirRole = this.hands[payload.targetSeat];
        this.hands[seat] = theirRole;
        this.hands[payload.targetSeat] = myOld;
        this.nightPeekResult[seat] = { kind: 'robber-result', targetSeat: payload.targetSeat, newRole: theirRole };
        this.history.push({ type: 'robber', seat, targetSeat: payload.targetSeat });
        return true;
      }
    } else if (roleId === 'troublemaker') {
      if (this._validSeat(payload.seatA, seat) && this._validSeat(payload.seatB, seat) && payload.seatA !== payload.seatB) {
        const a = this.hands[payload.seatA];
        this.hands[payload.seatA] = this.hands[payload.seatB];
        this.hands[payload.seatB] = a;
        this.history.push({ type: 'troublemaker', seat, seatA: payload.seatA, seatB: payload.seatB });
      }
    } else if (roleId === 'drunk') {
      if (this._validCenter(payload.centerIndex)) {
        const myOld = this.hands[seat];
        this.hands[seat] = this.center[payload.centerIndex];
        this.center[payload.centerIndex] = myOld;
        this.history.push({ type: 'drunk', seat, centerIndex: payload.centerIndex });
      }
    }
    return false;
  }

  // เรียกจาก timer ฝั่งเซิร์ฟเวอร์เมื่อหมดเวลาของสเตปนี้ (auto-skip คนที่ไม่ทำ)
  forceAdvanceNightStepIfExpired() {
    if (this.phase !== 'night') return false;
    if (nowMs() < this.nightDeadlineAt) return false;
    this._advanceNightStep();
    return true;
  }

  // ---------- กลางวัน ----------

  _beginDay() {
    this.phase = 'day';
    this.dayReady = new Set();
    this.dayDeadlineAt = this.settings.daySeconds > 0 ? nowMs() + this.settings.daySeconds * 1000 : 0;
  }

  markDayReady(seat) {
    this.dayReady.add(seat);
    const everyoneReady = this.connectedPlayers.length > 0
      && this.connectedPlayers.every((p) => this.dayReady.has(p.seat));
    return everyoneReady;
  }

  dayTimeExpired() {
    if (this.phase !== 'day') return false;
    if (this.dayDeadlineAt === 0) return false; // ไม่จำกัดเวลา
    return nowMs() >= this.dayDeadlineAt;
  }

  addChat(seat, text) {
    const player = this.findBySeat(seat);
    const entry = { seat, nickname: player ? player.nickname : '?', text: String(text).slice(0, 300), ts: nowMs() };
    this.chat.push(entry);
    if (this.chat.length > 200) this.chat.shift();
    return entry;
  }

  // ---------- โหวต ----------

  beginVote() {
    this.phase = 'vote';
    this.votes = {};
    this.voteDeadlineAt = 0;
  }

  castVote(seat, target) {
    if (this.phase !== 'vote') return { ok: false };
    if (Object.prototype.hasOwnProperty.call(this.votes, seat)) return { ok: false }; // โหวตแล้วเปลี่ยนไม่ได้
    if (target !== 'none' && !this._validSeat(target, seat)) return { ok: false };
    this.votes[seat] = target; // target: 'none' หรือ seat number
    return { ok: true };
  }

  // ผู้เล่นที่หลุดเกิน DISCONNECT_GRACE_MS ระหว่างโหวต และยังไม่ได้โหวต => เจ้าของห้องข้ามได้
  skippableSeats() {
    if (this.phase !== 'vote') return [];
    return this.players
      .filter((p) => !p.connected && p.disconnectedAt && nowMs() - p.disconnectedAt >= DISCONNECT_GRACE_MS
        && !Object.prototype.hasOwnProperty.call(this.votes, p.seat))
      .map((p) => p.seat);
  }

  skipPlayerVote(seat) {
    // เจ้าของห้องกด "ข้ามผู้เล่นนี้" = งดออกเสียง (ไม่นับคะแนนของคนนี้เลย)
    if (!this.skippableSeats().includes(seat)) return false;
    this.votes[seat] = '__abstain__';
    return true;
  }

  // ต้องรอผู้เล่น "ทุกคน" (รวมคนที่หลุด) เว้นแต่ถูกเจ้าของห้องข้าม
  allVotesCast() {
    return this.players.every((p) => Object.prototype.hasOwnProperty.call(this.votes, p.seat));
  }

  resolveVotes() {
    const tally = {};
    Object.entries(this.votes).forEach(([seat, target]) => {
      if (target === '__abstain__') return;
      tally[target] = (tally[target] || 0) + 1;
    });

    const counts = Object.values(tally);
    const maxCount = counts.length ? Math.max(...counts) : 0;
    let deadSeats = [];

    // คะแนนสูงสุด <= 1 => ไม่มีใครตาย; 'none' อยู่ในกลุ่มคะแนนสูงสุด => ไม่มีใครตาย
    if (maxCount > 1) {
      const maxKeys = Object.keys(tally).filter((k) => tally[k] === maxCount);
      if (!maxKeys.includes('none')) deadSeats = maxKeys.map((k) => Number(k));
    }

    // นักล่า: ถ้านักล่าตาย คนที่นักล่าโหวตไว้ตายตามไปด้วย (ต่อเนื่องได้ถ้าเป้าหมายก็เป็นนักล่า)
    const deadSet = new Set(deadSeats);
    const queue = [...deadSeats];
    while (queue.length) {
      const seat = queue.shift();
      if (this.effectiveRole(seat) === 'hunter') {
        const target = this.votes[seat];
        if (typeof target === 'number' && !deadSet.has(target)) {
          deadSet.add(target);
          queue.push(target);
        }
      }
    }
    deadSeats = Array.from(deadSet);

    const deadRoles = deadSeats.map((s) => this.effectiveRole(s));
    const tannerDied = deadRoles.includes('tanner');
    const werewolfDied = deadRoles.some((r) => WOLF_ROLES.includes(r));
    const anyWerewolfAmongPlayers = this.players.some((p) => WOLF_ROLES.includes(this.effectiveRole(p.seat)));

    const winners = [];
    if (tannerDied) {
      winners.push('tanner');
      if (werewolfDied) winners.push('village');
    } else if (werewolfDied) {
      winners.push('village');
    } else if (anyWerewolfAmongPlayers) {
      winners.push('werewolf');
      winners.push('minion');
    } else {
      winners.push('village');
    }

    this.result = {
      deadSeats,
      winners,
      votes: this.votes,
      history: this.history,
      center: this.center,
      originalHands: this.originalHands,
      finalHands: this.hands,
      doppelRole: this.doppelRole,
    };
    this.phase = 'reveal';
    return this.result;
  }

  // ---------- รอบใหม่ ----------

  restartToLobby() {
    this.phase = 'lobby';
    this.hands = {};
    this.originalHands = {};
    this.center = [];
    this.history = [];
    this.setupReady = new Set();
    this.nightQueue = [];
    this.nightStepIndex = -1;
    this.nightStartHands = {};
    this.doppelRole = null;
    this.dayReady = new Set();
    this.chat = [];
    this.votes = {};
    this.result = null;
    this._autoRoleSet();
  }
}

function defaultRoleSet(playerCount, opts = {}) {
  // ชุดแนะนำสำหรับ 3-10 คน (ผู้เล่น+3 ใบ) ตัวแปรเสริมที่เปิดไว้จะถูกใส่เข้ามาก่อนชาวบ้านธรรมดา
  const base = ['werewolf', 'werewolf', 'seer', 'robber', 'troublemaker', 'drunk', 'insomniac', 'hunter', 'tanner', 'minion'];
  if (opts.useMason) base.splice(2, 0, 'mason', 'mason');
  if (opts.useDoppelganger) base.splice(2, 0, 'doppelganger');
  if (opts.useDreamWolf) base.splice(2, 0, 'dreamwolf');
  const need = playerCount + 3;
  const set = base.slice(0, Math.min(base.length, need));
  while (set.length < need) set.push('villager');
  return set;
}

module.exports = { Room, ROLES, roleInfo, MIN_PLAYERS, MAX_PLAYERS, DISCONNECT_GRACE_MS, defaultRoleSet, shuffle };
