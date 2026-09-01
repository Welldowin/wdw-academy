'use strict';

const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Room } = require('./src/engine');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server);

// เวอร์ชันนี้ใช้ห้องเดียว ('main') — โครงสร้าง Room ออกแบบให้แยกหลายห้องได้ในอนาคต
const room = new Room('main');

const BOT_CORRECT_RATE = 1 / 3; // โอกาสที่บอทจะเดาถูก = 33.3%
let botTimer = null;

function broadcast() {
  for (const [sid, sock] of io.sockets.sockets) {
    sock.emit('room:state', room.view(sid));
  }
}
function sfx(name) {
  io.emit('sfx', { name });
}
/** ส่ง state ให้ทุกคน แล้วปล่อยให้บอทเดินตาถ้าถึงคิว */
function sync() {
  broadcast();
  scheduleBots();
}
function safe(socket, fn) {
  try {
    fn();
  } catch (e) {
    socket.emit('error:msg', { text: e.message || 'เกิดข้อผิดพลาด' });
  }
}

// ---------------------------------------------------------------- AUTOBOT ----

function currentActiveId() {
  return room.game ? room.seats[room.game.activeSeat] : null;
}

function scheduleBots() {
  if (botTimer) return;

  // ช่วงจัดไพ่: บอทกด "พร้อม" ทันที
  if (room.phase === 'setup' && room.game) {
    let changed = false;
    for (const s of room.seatedSeats()) {
      const id = room.seats[s];
      if (Room.isBotId(id) && !room.game.ready[s]) {
        room.ready(id);
        changed = true;
      }
    }
    if (changed) {
      broadcast();
      return scheduleBots();
    }
    return;
  }

  const actionable = ['draw', 'guess', 'afterCorrect', 'chooseReveal'];
  if (!room.game || !actionable.includes(room.phase)) return;
  if (!Room.isBotId(currentActiveId())) return;

  botTimer = setTimeout(() => {
    botTimer = null;
    const botId = currentActiveId();
    if (!Room.isBotId(botId)) return scheduleBots();
    try {
      const s = botStep(botId);
      if (s) sfx(s);
      if (room.phase === 'over') sfx('win');
    } catch (e) {
      console.error('bot error:', e.message);
    }
    broadcast();
    scheduleBots(); // เดินสเต็ปถัดไป (จั่ว -> ทาย, หรือทายต่อ)
  }, 800 + Math.random() * 700);
}

/** ให้บอททำ 1 การกระทำตาม phase ปัจจุบัน แล้วคืนชื่อ sfx ที่ควรเล่น */
function botStep(botId) {
  const g = room.game;
  const seat = g.activeSeat;
  const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (room.phase === 'draw') {
    const colors = ['black', 'white'].filter((c) => g.deck.some((t) => t.color === c));
    room.draw(botId, colors.length ? rnd(colors) : 'black');
    return 'slide';
  }

  if (room.phase === 'guess') {
    const targets = g.ring.filter(
      (x) => x !== seat && !g.eliminatedSeats.has(x) && g.hands[x].some((t) => !t.revealed)
    );
    const target = rnd(targets);
    const tile = rnd(g.hands[target].filter((t) => !t.revealed));

    let value;
    if (Math.random() < BOT_CORRECT_RATE) {
      value = tile.value; // เดาถูก (33.3%)
    } else {
      const pool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'joker'].filter(
        (v) => String(v) !== String(tile.value)
      );
      value = rnd(pool); // เดาผิด
    }
    const r = room.guess(botId, target, tile.id, value);
    return r.correct ? 'correct' : 'wrong';
  }

  if (room.phase === 'afterCorrect') {
    // เอนเอียงไป "จบเทิร์น" เพื่อไม่ให้บอทไล่ยิงยาวเกินไป
    room.afterCorrect(botId, Math.random() < 0.6 ? 'stop' : 'continue');
    return null;
  }

  if (room.phase === 'chooseReveal') {
    const tile = rnd(g.hands[seat].filter((t) => !t.revealed));
    room.chooseReveal(botId, tile.id);
    return 'slide';
  }
  return null;
}

// ---------------------------------------------------------------- SOCKETS ----

io.on('connection', (socket) => {
  socket.emit('room:state', room.view(socket.id));

  socket.on('lobby:join', ({ nickname } = {}) =>
    safe(socket, () => {
      room.addPlayer(socket.id, nickname);
      sync();
    })
  );

  socket.on('seat:take', ({ seat } = {}) =>
    safe(socket, () => {
      room.takeSeat(socket.id, seat);
      sfx('slide');
      sync();
    })
  );

  socket.on('seat:leave', () =>
    safe(socket, () => {
      room.leaveSeat(socket.id);
      sync();
    })
  );

  socket.on('bot:add', ({ seat } = {}) =>
    safe(socket, () => {
      room.addBot(socket.id, seat);
      sfx('slide');
      sync();
    })
  );

  socket.on('bot:remove', ({ seat } = {}) =>
    safe(socket, () => {
      room.removeBot(socket.id, seat);
      sync();
    })
  );

  socket.on('game:start', () =>
    safe(socket, () => {
      room.startGame(socket.id);
      sfx('slide');
      sync();
    })
  );

  socket.on('joker:position', ({ tileId, index } = {}) =>
    safe(socket, () => {
      room.setJoker(socket.id, tileId, Number(index));
      sync();
    })
  );

  socket.on('setup:ready', () =>
    safe(socket, () => {
      room.ready(socket.id);
      sync();
    })
  );

  socket.on('turn:draw', ({ color } = {}) =>
    safe(socket, () => {
      room.draw(socket.id, color);
      sfx('slide');
      sync();
    })
  );

  socket.on('turn:guess', ({ targetSeat, tileId, value } = {}) =>
    safe(socket, () => {
      const r = room.guess(socket.id, targetSeat, tileId, value);
      sfx(r.correct ? 'correct' : 'wrong');
      sync();
      if (room.phase === 'over') sfx('win');
    })
  );

  socket.on('turn:afterCorrect', ({ action } = {}) =>
    safe(socket, () => {
      room.afterCorrect(socket.id, action);
      sync();
      if (room.phase === 'over') sfx('win');
    })
  );

  socket.on('turn:chooseReveal', ({ tileId } = {}) =>
    safe(socket, () => {
      room.chooseReveal(socket.id, tileId);
      sfx('slide');
      sync();
      if (room.phase === 'over') sfx('win');
    })
  );

  socket.on('game:restart', () =>
    safe(socket, () => {
      room.restart(socket.id);
      sfx('slide');
      sync();
    })
  );

  socket.on('chat:msg', ({ text } = {}) => {
    const p = room.players.get(socket.id);
    if (!p) return;
    const msg = String(text || '').slice(0, 200).trim();
    if (!msg) return;
    io.emit('chat:msg', { from: p.nickname, text: msg, ts: Date.now() });
  });

  socket.on('disconnect', () => {
    room.removePlayer(socket.id);
    sync();
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n  เกมไขรหัสลับตัวเลขปริศนา`);
  console.log(`  เปิดเล่นที่ →  http://localhost:${PORT}\n`);
});
