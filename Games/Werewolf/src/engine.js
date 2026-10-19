'use strict';

const { ROLES, NIGHT_ORDER, roleInfo } = require('./roles');

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
      useDoppelganger: false, // ยังไม่เปิดใช้งานในเวอร์ชันนี้
      useDreamWolf: false, // ยังไม่เปิดใช้งานในเวอร์ชันนี้
    };

    this.hands = {}; // seat -> roleId (ไพ่ปัจจุบัน เปลี่ยนได้ตอนกลางคืน)
    this.originalHands = {}; // seat -> roleId (ไพ่ตอนแจกตั้งต้น ใช้ทำสรุปผล)
    this.center = []; // [roleId, roleId, roleId]
    this.history = []; // log การสลับ/ดู สำหรับหน้าสรุปผล (เก็บแบบ "ใครทำอะไร" ไม่สปอยล์ตอนเล่น)

    this.setupReady = new Set();

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
      seat, connected: true, isHost, joinedAt: nowMs(),
    });
    return { seat, reconnected: false };
  }

  removeSocket(socketId) {
    const p = this.findBySocket(socketId);
    if (!p) return;
    p.connected = false;
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
    if (typeof patch.nightSeconds === 'number') this.settings.nightSeconds = patch.nightSeconds;
    if (typeof patch.daySeconds === 'number') this.settings.daySeconds = patch.daySeconds;
    if (Array.isArray(patch.roleSet)) this.settings.roleSet = patch.roleSet;
  }

  validRoleSetForPlayerCount() {
    return this.settings.roleSet.length === this.players.length + 3;
  }

  startGame() {
    if (this.players.length < MIN_PLAYERS) return { ok: false, error: `ต้องมีผู้เล่นอย่างน้อย ${MIN_PLAYERS} คน` };
    if (!this.validRoleSetForPlayerCount()) {
      return { ok: false, error: `จำนวนการ์ด (${this.settings.roleSet.length}) ต้องเท่ากับผู้เล่น+3 (${this.players.length + 3})` };
    }
    const atLeastOneWerewolfCard = this.settings.roleSet.includes('werewolf');
    if (!atLeastOneWerewolfCard) {
      return { ok: false, error: 'ต้องมีไพ่มนุษย์หมาป่าอย่างน้อย 1 ใบในกอง' };
    }

    const deck = shuffle(this.settings.roleSet);
    this.hands = {};
    this.originalHands = {};
    this.players.forEach((p, i) => {
      this.hands[p.seat] = deck[i];
      this.originalHands[p.seat] = deck[i];
    });
    this.center = deck.slice(this.players.length);
    this.history = [];
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
    const presentRoles = new Set(Object.values(this.hands));
    this.nightQueue = NIGHT_ORDER.filter((r) => presentRoles.has(r));
    this.nightStepIndex = -1;
    this.phase = 'night';
    this._advanceNightStep();
  }

  _seatsWithRole(roleId) {
    return Object.entries(this.hands)
      .filter(([, r]) => r === roleId)
      .map(([seat]) => Number(seat));
  }

  _advanceNightStep() {
    this.nightStepIndex += 1;
    this.nightDoneSeats = new Set();
    this.nightPeekResult = {};

    if (this.nightStepIndex >= this.nightQueue.length) {
      this._beginDay();
      return;
    }

    const roleId = this.nightQueue[this.nightStepIndex];
    this.nightSeatsForStep = this._seatsWithRole(roleId);
    this.nightDeadlineAt = nowMs() + this.settings.nightSeconds * 1000;

    // บทบาทที่ "ตื่นแต่ไม่มีตัวเลือก" ให้ข้อมูลอัตโนมัติทันที (รอกด "รับทราบ" จาก client)
    if (roleId === 'werewolf') {
      const wolves = this.nightSeatsForStep;
      wolves.forEach((seat) => {
        this.nightPeekResult[seat] = wolves.length > 1
          ? { kind: 'werewolf-pack', othersSeats: wolves.filter((s) => s !== seat) }
          : { kind: 'werewolf-alone' }; // client จะให้เลือกดูไพ่กลางได้ 1 ใบ ผ่าน night:action
      });
    } else if (roleId === 'minion') {
      const wolves = this._seatsWithRole('werewolf');
      this.nightSeatsForStep.forEach((seat) => {
        this.nightPeekResult[seat] = { kind: 'minion-info', wolfSeats: wolves };
      });
    } else if (roleId === 'insomniac') {
      this.nightSeatsForStep.forEach((seat) => {
        this.nightPeekResult[seat] = { kind: 'insomniac-info', myRole: this.hands[seat] };
      });
    }
    // seer / robber / troublemaker / drunk ต้องรอ night:action จาก client (มีตัวเลือก)
  }

  isNightStepDecisionRole() {
    const roleId = this.nightQueue[this.nightStepIndex];
    return ['seer', 'robber', 'troublemaker', 'drunk'].includes(roleId);
  }

  currentNightRole() {
    return this.nightQueue[this.nightStepIndex] || null;
  }

  // payload ขึ้นกับบทบาท
  // seer: { mode:'player', targetSeat } | { mode:'center', indices:[i,j] }
  // robber: { targetSeat }
  // troublemaker: { seatA, seatB }
  // drunk: { centerIndex }
  // werewolf(alone): { centerIndex } (ไม่บังคับ)
  // อื่น ๆ (ack เฉย ๆ): payload ว่าง
  nightAction(seat, payload) {
    const roleId = this.currentNightRole();
    if (!roleId) return { ok: false };
    if (!this.nightSeatsForStep.includes(seat)) return { ok: false, error: 'ไม่ใช่ตาคุณ' };
    if (this.nightDoneSeats.has(seat)) return { ok: false, error: 'ทำไปแล้ว' };

    if (roleId === 'werewolf') {
      if (this.nightSeatsForStep.length === 1 && payload && typeof payload.centerIndex === 'number') {
        const peeked = this.center[payload.centerIndex];
        this.nightPeekResult[seat] = { kind: 'werewolf-alone-peek', index: payload.centerIndex, role: peeked };
      }
    } else if (roleId === 'seer') {
      if (payload && payload.mode === 'player' && typeof payload.targetSeat === 'number') {
        const role = this.hands[payload.targetSeat];
        this.nightPeekResult[seat] = { kind: 'seer-player', targetSeat: payload.targetSeat, role };
        this.history.push({ type: 'seer-player', seat, targetSeat: payload.targetSeat });
      } else if (payload && payload.mode === 'center' && Array.isArray(payload.indices)) {
        const idx = payload.indices.slice(0, 2);
        const roles = idx.map((i) => this.center[i]);
        this.nightPeekResult[seat] = { kind: 'seer-center', indices: idx, roles };
        this.history.push({ type: 'seer-center', seat, indices: idx });
      }
    } else if (roleId === 'robber') {
      if (payload && typeof payload.targetSeat === 'number' && payload.targetSeat !== seat) {
        const myOld = this.hands[seat];
        const theirRole = this.hands[payload.targetSeat];
        this.hands[seat] = theirRole;
        this.hands[payload.targetSeat] = myOld;
        this.nightPeekResult[seat] = { kind: 'robber-result', targetSeat: payload.targetSeat, newRole: theirRole };
        this.history.push({ type: 'robber', seat, targetSeat: payload.targetSeat });
      }
    } else if (roleId === 'troublemaker') {
      if (payload && typeof payload.seatA === 'number' && typeof payload.seatB === 'number' && payload.seatA !== payload.seatB) {
        const a = this.hands[payload.seatA];
        const b = this.hands[payload.seatB];
        this.hands[payload.seatA] = b;
        this.hands[payload.seatB] = a;
        this.history.push({ type: 'troublemaker', seat, seatA: payload.seatA, seatB: payload.seatB });
      }
    } else if (roleId === 'drunk') {
      if (payload && typeof payload.centerIndex === 'number') {
        const myOld = this.hands[seat];
        const centerRole = this.center[payload.centerIndex];
        this.hands[seat] = centerRole;
        this.center[payload.centerIndex] = myOld;
        this.history.push({ type: 'drunk', seat, centerIndex: payload.centerIndex });
      }
    }

    this.nightDoneSeats.add(seat);
    const allDone = this.nightSeatsForStep.length === 0
      || this.nightSeatsForStep.every((s) => this.nightDoneSeats.has(s));
    if (allDone) this._advanceNightStep();
    return { ok: true, advanced: allDone };
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
    this.votes[seat] = target; // target: 'none' หรือ seat number
    return { ok: true };
  }

  skipPlayerVote(seat) {
    // เจ้าของห้องกด "ข้ามผู้เล่นนี้" = งดออกเสียง (ไม่นับคะแนนของคนนี้เลย)
    delete this.votes[seat];
    this.votes[seat] = '__abstain__';
  }

  allVotesCast() {
    const connectedSeats = this.connectedPlayers.map((p) => p.seat);
    return connectedSeats.every((s) => Object.prototype.hasOwnProperty.call(this.votes, s));
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

    if (maxCount > 1) {
      const maxKeys = Object.keys(tally).filter((k) => tally[k] === maxCount);
      if (!maxKeys.includes('none')) {
        deadSeats = maxKeys.map((k) => Number(k));
      }
    }
    // maxCount <= 1 (ทุกคะแนนไม่ซ้ำกัน หรือไม่มีใครโหวตเลย) => ไม่มีใครตาย
    // 'none' อยู่ในกลุ่มคะแนนสูงสุด => ไม่มีใครตาย (จัดการด้านบนแล้ว)

    // นายพราน: ถ้านายพรานตาย คนที่นายพรานโหวตไว้ตายตามไปด้วย
    const deadSet = new Set(deadSeats);
    deadSeats.forEach((seat) => {
      if (this.hands[seat] === 'hunter') {
        const target = this.votes[seat];
        if (typeof target === 'number' && !deadSet.has(target)) {
          deadSet.add(target);
        }
      }
    });
    deadSeats = Array.from(deadSet);

    const deadRoles = deadSeats.map((s) => this.hands[s]);
    const tannerDied = deadRoles.includes('tanner');
    const werewolfDied = deadRoles.includes('werewolf');
    const anyWerewolfAmongPlayers = Object.values(this.hands).includes('werewolf');

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
    this.dayReady = new Set();
    this.chat = [];
    this.votes = {};
    this.result = null;
  }
}

function defaultRoleSet(playerCount) {
  // ชุดพื้นฐานที่สมดุลสำหรับ 3-10 คน (ผู้เล่น+3 ใบ) ใช้บทบาทพื้นฐาน 10 แบบที่มีภาพแล้ว
  const base = ['werewolf', 'werewolf', 'seer', 'robber', 'troublemaker', 'drunk', 'insomniac', 'hunter', 'tanner', 'minion'];
  const need = playerCount + 3;
  const set = base.slice(0, Math.min(base.length, need));
  while (set.length < need) set.push('villager');
  return set;
}

module.exports = { Room, ROLES, roleInfo, MIN_PLAYERS, MAX_PLAYERS, DISCONNECT_GRACE_MS, defaultRoleSet, shuffle };
