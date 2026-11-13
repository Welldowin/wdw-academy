'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const { Room, ROLES, roleInfo, defaultRoleSet, DISCONNECT_GRACE_MS } = require('./src/engine');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server);

/** @type {Map<string, Room>} */
const rooms = new Map();

function makeRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code;
  do {
    code = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  } while (rooms.has(code));
  return code;
}

function roleMeta(id) {
  const r = roleInfo(id);
  return r ? { id: r.id, nameTh: r.nameTh, team: r.team, desc: r.desc, expansion: r.expansion || null, icon: r.icon || '🃏' } : null;
}

function publicRosterFor(room) {
  return room.players.map((p) => ({
    seat: p.seat,
    nickname: p.nickname,
    connected: p.connected,
    isHost: p.isHost,
    ready: room.phase === 'setup' ? room.setupReady.has(p.seat)
      : room.phase === 'day' ? room.dayReady.has(p.seat)
      : room.phase === 'vote' ? Object.prototype.hasOwnProperty.call(room.votes, p.seat)
      : false,
  }));
}

function serializeRoom(room, seat) {
  const me = room.findBySeat(seat);
  const base = {
    code: room.code,
    phase: room.phase,
    youSeat: seat,
    youAreHost: !!(me && me.isHost),
    players: publicRosterFor(room),
    settings: room.settings,
    roleCatalog: Object.values(ROLES).map((r) => roleMeta(r.id)),
    roleSetCustom: room.roleSetCustom,
  };

  if (room.phase === 'setup') {
    base.setup = {
      myRole: roleMeta(room.hands[seat]),
      readyCount: room.setupReady.size,
      total: room.players.length,
      iAmReady: room.setupReady.has(seat),
    };
  }

  if (room.phase === 'night') {
    const roleId = room.currentNightRole();
    const isMyTurn = room.nightSeatsForStep.includes(seat) && !room.nightDoneSeats.has(seat);
    base.night = {
      roleId,
      roleName: roleId ? roleMeta(roleId).nameTh : null,
      isMyTurn,
      asDoppel: isMyTurn && room.nightStartHands[seat] === 'doppelganger' && roleId !== 'doppelganger',
      needsDecision: isMyTurn && room.isNightStepDecisionRole() && !room.nightActed.has(seat),
      deadlineAt: room.nightDeadlineAt,
      myInfo: isMyTurn || room.nightPeekResult[seat] ? (room.nightPeekResult[seat] || null) : null,
      otherSeatsThisStep: isMyTurn ? room.nightSeatsForStep.filter((s) => s !== seat) : [],
    };
  }

  if (room.phase === 'day') {
    base.day = {
      deadlineAt: room.dayDeadlineAt,
      readyCount: room.dayReady.size,
      total: room.connectedPlayers.length,
      iAmReady: room.dayReady.has(seat),
      chat: room.chat,
    };
  }

  if (room.phase === 'vote') {
    base.vote = {
      castCount: Object.keys(room.votes).length,
      waitingFor: room.players.filter((p) => !Object.prototype.hasOwnProperty.call(room.votes, p.seat)).map((p) => p.seat),
      total: room.players.length,
      iVoted: Object.prototype.hasOwnProperty.call(room.votes, seat),
      canSkip: room.skippableSeats(),
    };
  }

  if (room.phase === 'reveal' && room.result) {
    base.reveal = {
      deadSeats: room.result.deadSeats,
      winners: room.result.winners,
      votes: room.result.votes,
      history: room.result.history,
      center: room.result.center.map((id) => roleMeta(id)),
      doppelRole: room.result.doppelRole ? roleMeta(room.result.doppelRole) : null,
      originalHands: Object.fromEntries(
        Object.entries(room.result.originalHands).map(([s, id]) => [s, roleMeta(id)]),
      ),
      finalHands: Object.fromEntries(
        Object.entries(room.result.finalHands).map(([s, id]) => [s, roleMeta(id)]),
      ),
    };
  }

  return base;
}

function broadcast(room) {
  room.players.forEach((p) => {
    if (!p.connected) return;
    io.to(p.socketId).emit('room:state', serializeRoom(room, p.seat));
  });
}

function sfx(room, name) {
  room.players.forEach((p) => {
    if (p.connected) io.to(p.socketId).emit('sfx', { name });
  });
}

function announceResult(room) {
  const w = room.result.winners;
  sfx(room, w.includes('village') ? 'win-village' : w.includes('tanner') ? 'win-tanner' : 'win-werewolf');
}

function errorTo(socket, text) {
  socket.emit('error:msg', { text });
}

io.on('connection', (socket) => {
  let currentRoomCode = null;

  socket.on('room:create', ({ nickname, playerId } = {}) => {
    const code = makeRoomCode();
    const room = new Room(code);
    rooms.set(code, room);
    const res = room.addPlayer(socket.id, playerId, nickname);
    currentRoomCode = code;
    socket.join(code);
    socket.emit('room:joined', { code, seat: res.seat });
    broadcast(room);
  });

  socket.on('room:join', ({ code, nickname, playerId } = {}) => {
    const room = rooms.get((code || '').toUpperCase());
    if (!room) return errorTo(socket, 'ไม่พบห้องนี้ ตรวจสอบรหัสห้องอีกครั้ง');
    const res = room.addPlayer(socket.id, playerId, nickname);
    if (res.full) return errorTo(socket, 'ห้องเต็มแล้ว (สูงสุด 10 คน)');
    if (res.spectator) return errorTo(socket, 'เกมเริ่มไปแล้ว กรุณารอรอบถัดไป');
    currentRoomCode = room.code;
    socket.join(room.code);
    socket.emit('room:joined', { code: room.code, seat: res.seat });
    broadcast(room);
  });

  function withRoom(cb) {
    if (!currentRoomCode) return;
    const room = rooms.get(currentRoomCode);
    if (!room) return;
    const player = room.findBySocket(socket.id);
    if (!player) return;
    cb(room, player);
  }

  socket.on('host:settings', (settings) => {
    withRoom((room, player) => {
      if (!player.isHost || room.phase !== 'lobby') return;
      room.updateSettings(settings || {});
      broadcast(room);
    });
  });

  socket.on('game:start', () => {
    withRoom((room, player) => {
      if (!player.isHost || room.phase !== 'lobby') return;
      const res = room.startGame();
      if (!res.ok) return errorTo(socket, res.error);
      broadcast(room);
    });
  });

  socket.on('setup:ready', () => {
    withRoom((room, player) => {
      if (room.phase !== 'setup') return;
      const allReady = room.markSetupReady(player.seat);
      if (allReady) {
        room.beginNight();
        sfx(room, 'night-start');
      }
      broadcast(room);
    });
  });

  socket.on('night:action', (payload) => {
    withRoom((room, player) => {
      if (room.phase !== 'night') return;
      const beforeStep = room.nightStepIndex;
      const res = room.nightAction(player.seat, payload || {});
      if (!res.ok) return;
      if (room.phase === 'day' && beforeStep !== room.nightStepIndex) sfx(room, 'day-start');
      broadcast(room);
    });
  });

  socket.on('day:ready', () => {
    withRoom((room, player) => {
      if (room.phase !== 'day') return;
      const all = room.markDayReady(player.seat);
      if (all) {
        room.beginVote();
        sfx(room, 'vote-start');
      }
      broadcast(room);
    });
  });

  socket.on('chat:msg', ({ text } = {}) => {
    withRoom((room, player) => {
      if (!text || !['day'].includes(room.phase)) return;
      room.addChat(player.seat, text);
      broadcast(room);
    });
  });

  socket.on('vote:cast', ({ target } = {}) => {
    withRoom((room, player) => {
      if (room.phase !== 'vote') return;
      const res = room.castVote(player.seat, target);
      if (!res.ok) return;
      if (room.allVotesCast()) {
        room.resolveVotes();
        announceResult(room);
      }
      broadcast(room);
    });
  });

  socket.on('host:skipVote', ({ seat } = {}) => {
    withRoom((room, player) => {
      if (!player.isHost || room.phase !== 'vote') return;
      if (!room.skipPlayerVote(seat)) return errorTo(socket, 'ข้ามได้เฉพาะผู้เล่นที่หลุดเกิน 2 นาที');
      if (room.allVotesCast()) {
        room.resolveVotes();
        announceResult(room);
      }
      broadcast(room);
    });
  });

  socket.on('game:restart', () => {
    withRoom((room, player) => {
      if (!player.isHost || room.phase !== 'reveal') return;
      room.restartToLobby();
      broadcast(room);
    });
  });

  socket.on('disconnect', () => {
    withRoom((room) => {
      room.removeSocket(socket.id);
      // ทุกคนที่ยังออนไลน์กดพร้อมโหวตแล้ว แต่มีคนหลุดไปตอนนี้ => ไปโหวตต่อ
      if (room.phase === 'day' && room.connectedPlayers.length > 0
        && room.connectedPlayers.every((p) => room.dayReady.has(p.seat))) {
        room.beginVote();
        sfx(room, 'vote-start');
      }
      broadcast(room);
      if (room.isEmpty()) {
        setTimeout(() => {
          if (room.isEmpty()) rooms.delete(room.code);
        }, 10 * 60 * 1000); // เก็บห้องไว้ 10 นาทีเผื่อทุกคนกลับมา
      }
    });
  });
});

// ตัวจับเวลาฝั่งเซิร์ฟเวอร์: หมดเวลากลางคืน/กลางวันแล้วเดินเกมต่อให้อัตโนมัติ
setInterval(() => {
  rooms.forEach((room) => {
    let changed = false;
    if (room.phase === 'night' && room.forceAdvanceNightStepIfExpired()) {
      changed = true;
    }
    if (room.phase === 'day' && room.dayTimeExpired()) {
      room.beginVote();
      sfx(room, 'vote-start');
      changed = true;
    }
    if (room.phase === 'vote') {
      // ปุ่ม "ข้ามผู้เล่น" โผล่เมื่อผู้เล่นหลุดครบ 2 นาที — ส่ง state ใหม่เมื่อรายชื่อที่ข้ามได้เปลี่ยน
      const key = room.skippableSeats().join(',');
      if (key !== room._skipKey) { room._skipKey = key; changed = true; }
    }
    if (changed) broadcast(room);
  });
}, 1000);

server.listen(PORT, () => {
  console.log(`มนุษย์หมาป่า (Werewolf) server running on http://localhost:${PORT}`);
});
