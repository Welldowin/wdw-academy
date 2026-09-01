'use strict';

/*
 * engine.js — แกนกติกาเกม "ไขรหัสลับตัวเลขปริศนา"
 * ไม่มี dependency กับ socket.io เลย (ทดสอบแยกได้)
 *
 *  - ป้ายทั้งหมด 26 ใบ: ดำ 0-11 + โจ๊กเกอร์ (13), ขาว 0-11 + โจ๊กเกอร์ (13)
 *  - เรียงจากน้อย -> มาก (ซ้าย -> ขวา) ; เลขเท่ากัน ดำอยู่ซ้ายของขาวเสมอ
 *  - โจ๊กเกอร์วางไว้ตำแหน่งไหนก็ได้ (เจ้าของกำหนดเอง)
 */

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// ลำดับที่นั่งตามเข็มนาฬิกา "จริง" รอบโต๊ะ
const PHYS_CW = ['N', 'E', 'S', 'W'];
// ช่องบนจอเรียงตามเข็มนาฬิกา โดยเริ่มจากล่าง (ตัวผู้เล่นเองอยู่ 'S' เสมอ)
const SCREEN_CW = ['S', 'E', 'N', 'W'];

// ---------------------------------------------------------------- helpers ----

function makeDeck() {
  const deck = [];
  for (const color of ['black', 'white']) {
    for (const n of NUMBERS) {
      deck.push(newTile(`${color[0]}-${n}`, color, n));
    }
    deck.push(newTile(`${color[0]}-joker`, color, 'joker'));
  }
  return deck; // 26 ใบ
}

function newTile(id, color, value) {
  return { id, color, value, revealed: false, justDrawn: false, jokerIndex: null };
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * เรียงมือผู้เล่น: เลขน้อย -> มาก, เลขเท่ากัน ดำก่อนขาว,
 * โจ๊กเกอร์แทรกตามตำแหน่ง jokerIndex ที่เจ้าของเลือก (ค่าเริ่มต้น = ขวาสุด)
 */
function sortHand(hand) {
  const jokers = hand.filter((t) => t.value === 'joker');
  const nums = hand
    .filter((t) => t.value !== 'joker')
    .sort((a, b) => {
      if (a.value !== b.value) return a.value - b.value;
      return (a.color === 'black' ? 0 : 1) - (b.color === 'black' ? 0 : 1); // ดำก่อนขาว
    });

  let res = nums;
  jokers.sort((a, b) => (a.jokerIndex ?? res.length) - (b.jokerIndex ?? res.length));
  for (const j of jokers) {
    let idx = j.jokerIndex;
    if (idx == null || idx < 0) idx = res.length;
    if (idx > res.length) idx = res.length;
    res = res.slice(0, idx).concat([j], res.slice(idx));
  }
  return res;
}

/**
 * แปลงที่นั่งจริงของเป้าหมาย -> ช่องบนจอ ของผู้เล่นคนหนึ่ง
 * ผู้เล่นคนนั้นจะเห็นตัวเองอยู่ 'S' เสมอ (Dynamic Perspective)
 */
function relativePos(localSeat, targetSeat) {
  const li = PHYS_CW.indexOf(localSeat);
  const ti = PHYS_CW.indexOf(targetSeat);
  if (li < 0) return relativePos('S', targetSeat); // ผู้ชม: ใช้มุมมองมาตรฐาน
  const off = (((ti - li) % 4) + 4) % 4;
  return SCREEN_CW[off];
}

// ------------------------------------------------------------------- Room ----

class Room {
  constructor(id = 'main') {
    this.id = id;
    this.hostId = null;
    /** @type {Map<string,{id:string,nickname:string,seat:(string|null)}>} */
    this.players = new Map();
    this.seats = { N: null, E: null, S: null, W: null };
    this.phase = 'lobby'; // lobby | setup | draw | guess | afterCorrect | chooseReveal | over
    this.game = null;
    this.lastResult = null;
    this._botSeq = 0; // ตัวนับตั้งชื่อบอท
  }

  // ---- bots --------------------------------------------------------------

  static isBotId(id) {
    return typeof id === 'string' && id.startsWith('bot:');
  }

  _hasHumans() {
    return [...this.players.keys()].some((id) => !Room.isBotId(id));
  }

  /** เจ้าของห้องเรียกบอทมานั่งที่นั่งว่าง (เฉพาะตอนอยู่ในล็อบบี้) */
  addBot(socketId, seat) {
    if (socketId !== this.hostId) throw new Error('เฉพาะเจ้าของห้องเรียกบอทได้');
    if (this.phase !== 'lobby') throw new Error('เรียกบอทได้เฉพาะตอนอยู่ในล็อบบี้');
    if (!Object.prototype.hasOwnProperty.call(this.seats, seat)) throw new Error('ที่นั่งไม่ถูกต้อง');
    if (this.seats[seat]) throw new Error('ที่นั่งนี้มีผู้เล่นแล้ว');
    const id = `bot:${seat}`;
    this._botSeq += 1;
    this.players.set(id, { id, nickname: `🤖 บอท ${this._botSeq}`, seat, isBot: true });
    this.seats[seat] = id;
  }

  /** เจ้าของห้องเอาบอทออกจากที่นั่ง (เฉพาะตอนอยู่ในล็อบบี้) */
  removeBot(socketId, seat) {
    if (socketId !== this.hostId) throw new Error('เฉพาะเจ้าของห้องเอาบอทออกได้');
    if (this.phase !== 'lobby') throw new Error('เอาบอทออกได้เฉพาะตอนอยู่ในล็อบบี้');
    const id = this.seats[seat];
    if (!Room.isBotId(id)) throw new Error('ที่นั่งนี้ไม่ใช่บอท');
    this.players.delete(id);
    this.seats[seat] = null;
  }

  // ---- lobby ----------------------------------------------------------------

  addPlayer(socketId, nickname) {
    if (this.players.has(socketId)) return;
    if (!this.hostId) this.hostId = socketId;
    const clean = String(nickname || '').trim().slice(0, 16) || 'ผู้เล่น';
    this.players.set(socketId, { id: socketId, nickname: clean, seat: null, isBot: false });
  }

  removePlayer(socketId) {
    const p = this.players.get(socketId);
    if (!p) return;
    const seat = p.seat;
    if (seat) this.seats[seat] = null;
    this.players.delete(socketId);
    if (this.hostId === socketId) {
      // ส่งต่อสิทธิ์เจ้าของห้องให้ "คนจริง" คนถัดไป (ไม่ใช่บอท)
      this.hostId = [...this.players.keys()].find((id) => !Room.isBotId(id)) || null;
    }
    if (this.game && seat && !this.game.eliminatedSeats.has(seat)) {
      this.forceEliminate(seat); // ผู้เล่นหลุด = ถือว่าตกรอบ
    }
    if (!this._hasHumans()) this._resetToLobby(); // ไม่เหลือคนจริง -> ล้างห้อง (รวมบอท)
  }

  takeSeat(socketId, seat) {
    if (this.phase !== 'lobby') throw new Error('เกมเริ่มแล้ว ไม่สามารถเลือกที่นั่งได้');
    if (!Object.prototype.hasOwnProperty.call(this.seats, seat)) throw new Error('ที่นั่งไม่ถูกต้อง');
    if (this.seats[seat]) throw new Error('ที่นั่งนี้มีผู้เล่นแล้ว');
    const p = this.players.get(socketId);
    if (!p) throw new Error('ยังไม่ได้เข้าห้อง');
    if (p.seat) this.seats[p.seat] = null;
    this.seats[seat] = socketId;
    p.seat = seat;
  }

  leaveSeat(socketId) {
    if (this.phase !== 'lobby') throw new Error('เกมเริ่มแล้ว ไม่สามารถลุกจากที่นั่งได้');
    const p = this.players.get(socketId);
    if (p && p.seat) {
      this.seats[p.seat] = null;
      p.seat = null;
    }
  }

  seatedSeats() {
    return PHYS_CW.filter((s) => this.seats[s]);
  }

  // ---- setup --------------------------------------------------------------

  startGame(socketId) {
    if (socketId !== this.hostId) throw new Error('เฉพาะเจ้าของห้องเท่านั้นที่เริ่มเกมได้');
    const seats = this.seatedSeats();
    if (seats.length < 2) throw new Error('ต้องมีผู้เล่นอย่างน้อย 2 คน');

    const deck = shuffle(makeDeck());

    // นำออกจากเกมถาวร: ดำ 1 + ขาว 1 (ไม่มีใครเห็น)
    const removed = [];
    removed.push(deck.splice(deck.findIndex((t) => t.color === 'black'), 1)[0]);
    removed.push(deck.splice(deck.findIndex((t) => t.color === 'white'), 1)[0]);

    // แจกคนละ ดำ 2 + ขาว 2
    const hands = {};
    for (const s of seats) {
      const hand = [];
      for (let k = 0; k < 2; k++) hand.push(this._drawColor(deck, 'black'));
      for (let k = 0; k < 2; k++) hand.push(this._drawColor(deck, 'white'));
      hands[s] = sortHand(hand.filter(Boolean));
    }

    const ring = seats.slice(); // ตามเข็มนาฬิกาจริง
    const activeSeat = ring[Math.floor(Math.random() * ring.length)]; // สุ่มคนเริ่ม

    this.game = {
      deck,
      removed,
      hands,
      ring,
      activeSeat,
      eliminatedSeats: new Set(),
      eliminated: [], // { seat, rank, nickname }
      winner: null,
      ready: Object.fromEntries(seats.map((s) => [s, false])),
      lastDrawn: Object.fromEntries(seats.map((s) => [s, null])),
      drewThisTurn: false,
    };
    this.phase = 'setup';
    this.lastResult = null;
  }

  _drawColor(deck, color) {
    if (deck.length === 0) return null;
    let idx = deck.findIndex((t) => t.color === color);
    if (idx < 0) idx = 0; // สีนั้นหมด -> หยิบสีอื่นแทน
    return deck.splice(idx, 1)[0];
  }

  setJoker(socketId, tileId, index) {
    if (this.phase !== 'setup') throw new Error('ปรับตำแหน่งโจ๊กเกอร์ได้เฉพาะช่วงเริ่มเกม');
    const p = this.players.get(socketId);
    if (!p || !p.seat) throw new Error('คุณไม่ได้เป็นผู้เล่น');
    const hand = this.game.hands[p.seat];
    const t = hand.find((x) => x.id === tileId && x.value === 'joker');
    if (!t) throw new Error('ไม่พบไพ่โจ๊กเกอร์ในมือคุณ');
    t.jokerIndex = Math.max(0, Math.min(hand.length - 1, index | 0));
    this.game.hands[p.seat] = sortHand(hand);
  }

  ready(socketId) {
    if (this.phase !== 'setup') return;
    const p = this.players.get(socketId);
    if (!p || !p.seat) return;
    this.game.ready[p.seat] = true;
    if (this.seatedSeats().every((s) => this.game.ready[s])) this._beginTurn();
  }

  // ---- turn loop --------------------------------------------------------

  _beginTurn() {
    this.game.drewThisTurn = false;
    this.phase = this.game.deck.length > 0 ? 'draw' : 'guess';
  }

  draw(socketId, color) {
    this._assertActive(socketId, 'draw');
    const g = this.game;
    if (g.deck.length === 0) {
      this.phase = 'guess';
      return null;
    }
    const t = this._drawColor(g.deck, color === 'white' ? 'white' : 'black');
    t.justDrawn = true;
    g.lastDrawn[g.activeSeat] = t.id;
    g.drewThisTurn = true;
    g.hands[g.activeSeat] = sortHand(g.hands[g.activeSeat].concat([t]));
    this.phase = 'guess';
    return t;
  }

  guess(socketId, targetSeat, tileId, value) {
    this._assertActive(socketId, 'guess');
    const g = this.game;
    if (targetSeat === g.activeSeat) throw new Error('ทายไพ่ของตัวเองไม่ได้');
    if (g.eliminatedSeats.has(targetSeat)) throw new Error('ผู้เล่นคนนี้ตกรอบแล้ว');
    const hand = g.hands[targetSeat];
    if (!hand) throw new Error('ไม่พบผู้เล่นเป้าหมาย');
    const tile = hand.find((t) => t.id === tileId);
    if (!tile) throw new Error('ไม่พบไพ่ใบนี้');
    if (tile.revealed) throw new Error('ไพ่ใบนี้ถูกเปิดไปแล้ว');

    const guessVal = value === 'joker' ? 'joker' : value | 0;
    const correct = String(tile.value) === String(guessVal);

    this.lastResult = {
      correct,
      by: g.activeSeat,
      byNick: this._nick(g.activeSeat),
      targetSeat,
      targetNick: this._nick(targetSeat),
      tileId,
      guess: guessVal,
      actual: correct ? tile.value : null,
      ts: Date.now(),
    };

    if (correct) {
      tile.revealed = true;
      this._checkElim(targetSeat);
      if (g.winner) {
        this.phase = 'over';
        return this.lastResult;
      }
      this.phase = 'afterCorrect';
      return this.lastResult;
    }

    // ทายผิด -> ต้องเปิดไพ่ของตัวเอง 1 ใบ
    if (g.drewThisTurn) {
      const drawn = g.hands[g.activeSeat].find((t) => t.id === g.lastDrawn[g.activeSeat]);
      if (drawn && !drawn.revealed) {
        drawn.revealed = true;
        this._afterPenalty();
        return this.lastResult;
      }
    }
    const hidden = g.hands[g.activeSeat].filter((t) => !t.revealed);
    if (hidden.length <= 1) {
      if (hidden.length === 1) hidden[0].revealed = true;
      this._afterPenalty();
      return this.lastResult;
    }
    this.phase = 'chooseReveal'; // สำรับหมด/ไม่มีไพ่จั่ว -> เลือกเปิดเอง
    return this.lastResult;
  }

  afterCorrect(socketId, action) {
    this._assertActive(socketId, 'afterCorrect');
    const g = this.game;
    if (action === 'continue') {
      this.phase = 'guess';
      return;
    }
    // จบเทิร์น: เก็บไพ่ที่จั่วไว้เป็น "ชีวิตสำรอง" (ยังไม่เปิด)
    const drawnId = g.lastDrawn[g.activeSeat];
    const drawn = drawnId && g.hands[g.activeSeat].find((t) => t.id === drawnId);
    if (drawn) drawn.justDrawn = false;
    this._advance();
  }

  chooseReveal(socketId, tileId) {
    this._assertActive(socketId, 'chooseReveal');
    const g = this.game;
    const t = g.hands[g.activeSeat].find((x) => x.id === tileId);
    if (!t || t.revealed) throw new Error('เลือกไพ่ที่ยังไม่เปิด');
    t.revealed = true;
    this._afterPenalty();
  }

  _afterPenalty() {
    this._checkElim(this.game.activeSeat);
    this._advance();
  }

  _advance() {
    const g = this.game;
    if (g.winner) {
      this.phase = 'over';
      return;
    }
    for (const t of g.hands[g.activeSeat]) t.justDrawn = false;
    const ring = g.ring;
    const i = ring.indexOf(g.activeSeat);
    for (let k = 1; k <= ring.length; k++) {
      const s = ring[(i + k) % ring.length];
      if (!g.eliminatedSeats.has(s)) {
        g.activeSeat = s;
        break;
      }
    }
    this._beginTurn();
  }

  _checkElim(seat) {
    const g = this.game;
    if (g.eliminatedSeats.has(seat)) return;
    if (!g.hands[seat].every((t) => t.revealed)) return;

    const aliveBefore = g.ring.filter((s) => !g.eliminatedSeats.has(s));
    const rank = aliveBefore.length; // รวมตัวเองที่กำลังตกรอบ -> ตกก่อน = อันดับท้าย
    g.eliminatedSeats.add(seat);
    g.eliminated.push({ seat, rank, nickname: this._nick(seat) });

    const rest = g.ring.filter((s) => !g.eliminatedSeats.has(s));
    if (rest.length === 1) {
      g.winner = rest[0];
      g.eliminatedSeats.add(rest[0]);
      g.eliminated.push({ seat: rest[0], rank: 1, nickname: this._nick(rest[0]) });
    }
  }

  forceEliminate(seat) {
    const g = this.game;
    if (!g || g.eliminatedSeats.has(seat)) return;
    for (const t of g.hands[seat]) t.revealed = true;
    const wasActive = g.activeSeat === seat;
    this._checkElim(seat);
    if (this.phase !== 'over' && wasActive) this._advance();
  }

  restart(socketId) {
    if (socketId !== this.hostId) throw new Error('เฉพาะเจ้าของห้องเท่านั้น');
    this.startGame(socketId); // แจกใหม่ คงที่นั่งเดิม
  }

  _resetToLobby() {
    this.players.clear();
    this.hostId = null;
    this.phase = 'lobby';
    this.game = null;
    this.lastResult = null;
    this._botSeq = 0;
    this.seats = { N: null, E: null, S: null, W: null };
  }

  // ---- guards / util --------------------------------------------------

  _assertActive(socketId, phase) {
    if (this.phase !== phase) throw new Error('ยังไม่ถึงขั้นตอนนี้');
    const p = this.players.get(socketId);
    if (!p || p.seat !== this.game.activeSeat) throw new Error('ยังไม่ถึงตาของคุณ');
  }

  _nick(seat) {
    const sid = this.seats[seat];
    const p = sid && this.players.get(sid);
    return p ? p.nickname : '(ว่าง)';
  }

  // ---- state ที่ปลอดภัยสำหรับส่งให้ผู้เล่นแต่ละคน ----------------------

  view(socketId) {
    const me = this.players.get(socketId);
    const mySeat = me ? me.seat : null;
    const g = this.game;

    const seats = {};
    for (const s of PHYS_CW) {
      const sid = this.seats[s];
      const p = sid ? this.players.get(sid) : null;
      seats[s] = {
        seat: s,
        occupied: !!p,
        nickname: p ? p.nickname : null,
        isBot: Room.isBotId(sid),
        isHost: sid === this.hostId,
        isYou: sid === socketId,
        eliminated: g ? g.eliminatedSeats.has(s) : false,
        rank: g ? (g.eliminated.find((e) => e.seat === s) || {}).rank || null : null,
        ready: g ? !!g.ready[s] : false,
        active: g ? g.activeSeat === s : false,
        tiles: g && g.hands[s]
          ? g.hands[s].map((t) => {
              const own = s === mySeat;
              const show = own || t.revealed; // เห็นเลขเฉพาะไพ่ตัวเอง หรือไพ่ที่ถูกเปิด
              return {
                id: t.id,
                color: t.color,
                revealed: t.revealed,
                justDrawn: !!t.justDrawn, // ตำแหน่งไพ่ที่เพิ่งจั่วเป็นข้อมูลสาธารณะ
                value: show ? t.value : null,
              };
            })
          : [],
      };
    }

    return {
      roomId: this.id,
      phase: this.phase,
      youAreHost: this.hostId === socketId,
      inLobby: !me,
      mySeat,
      isSpectator: !!me && !mySeat,
      seats,
      players: [...this.players.values()].map((p) => ({ nickname: p.nickname, seat: p.seat })),
      playerCount: this.players.size,
      seatedCount: this.seatedSeats().length,
      deckCount: g ? g.deck.length : 0,
      removedCount: g ? g.removed.length : 0,
      activeSeat: g ? g.activeSeat : null,
      activeNick: g ? this._nick(g.activeSeat) : null,
      eliminated: g ? g.eliminated.slice().sort((a, b) => a.rank - b.rank) : [],
      winner: g ? g.winner : null,
      winnerNick: g && g.winner ? this._nick(g.winner) : null,
      lastResult: this.lastResult,
      canStart: this.phase === 'lobby' && this.seatedSeats().length >= 2 && this.hostId === socketId,
      canManageBots: this.phase === 'lobby' && this.hostId === socketId,
    };
  }
}

module.exports = { Room, relativePos, sortHand, makeDeck, shuffle, PHYS_CW, SCREEN_CW };
