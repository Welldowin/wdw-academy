# เกมไขรหัสลับตัวเลขปริศนา

เกมกระดานออนไลน์เรียลไทม์ (แรงบันดาลใจจาก **Da Vinci Code / Coda**) เวอร์ชันภาษาไทย
เล่นได้สูงสุด 4 คน + ผู้ชมไม่จำกัด ผ่านเบราว์เซอร์ ไม่ต้องสมัครสมาชิก แค่ใส่ชื่อเล่น

---

## 1. การติดตั้งและรัน

```bash
cd D:\DavinciCode
npm install
npm start
```

เปิด `http://localhost:3000` (เปิดหลายแท็บ/หลายเครื่องเพื่อทดสอบหลายผู้เล่น)
ตั้งพอร์ตเองได้ด้วย `set PORT=4000 && npm start`

> วางไฟล์เสียงจริงไว้ที่ `public/sounds/` ตาม `public/sounds/README.md` (ไม่มีก็เล่นได้ เงียบเฉย ๆ)

---

## 2. โครงสร้างโปรเจกต์

```
DavinciCode/
├── package.json
├── server.js                # Express + Socket.io: รับ event, กระจาย state
├── src/
│   └── engine.js            # แกนกติกาเกมทั้งหมด (ไม่พึ่ง socket — ทดสอบแยกได้)
│                            #   makeDeck / shuffle / sortHand / relativePos
│                            #   class Room: lobby, setup, turn loop, guess, win
└── public/                  # ฝั่ง client (vanilla JS ไม่ต้อง build)
    ├── index.html
    ├── styles.css           # ธีมพาสเทล สดใส ฟอนต์ Kanit
    └── js/
        ├── audio.js         # AudioManager: BGM (loop) + SFX
        ├── render.js        # วาดโต๊ะ/แผงควบคุมจาก state + Dynamic Perspective + คอนเฟตตี
        └── main.js          # ต่อ Socket.io, event delegation ของปุ่มทั้งหมด
```

> **หมายเหตุเรื่องเฟรมเวิร์ก:** โจทย์ระบุ React/Vue ได้ แต่โปรเจกต์นี้เลือก **vanilla JS**
> เพราะรันได้ทันทีด้วย `npm start` ไม่ต้องมี bundler และตรงกับสไตล์เว็บที่ทีมใช้อยู่
> ตรรกะการวาดผัง (perspective) เขียนแยกใน `render.js` — ถ้าจะย้ายไป React ดูหัวข้อ 5

---

## 3. สถาปัตยกรรม Socket.io

เซิร์ฟเวอร์ถือ state จริงทั้งหมด (authoritative) ทุก action ผ่านการตรวจใน `engine.js`
แล้ว **broadcast `room:state` ที่ผ่านการเซ็นเซอร์รายคน** (แต่ละ socket เห็นเลขเฉพาะไพ่ตัวเอง + ไพ่ที่ถูกเปิด)

### Client → Server (emit)

| Event | payload | ใช้ตอน |
|-------|---------|--------|
| `lobby:join` | `{ nickname }` | เข้าห้องจากหน้าแรก |
| `seat:take` | `{ seat: 'N'\|'E'\|'S'\|'W' }` | นั่งที่นั่งว่าง (เฉพาะ lobby) |
| `seat:leave` | — | ลุกจากที่นั่ง (เฉพาะ lobby) |
| `game:start` | — | เจ้าของห้องเริ่มเกม (ต้อง ≥ 2 คน) |
| `joker:position` | `{ tileId, index }` | จัดตำแหน่งไพ่โจ๊กเกอร์ในมือ (เฉพาะ setup) |
| `setup:ready` | — | กดพร้อม; ครบทุกคน → เข้าตาแรก |
| `turn:draw` | `{ color: 'black'\|'white' }` | จั่วไพ่ 1 ใบ |
| `turn:guess` | `{ targetSeat, tileId, value }` | ทายไพ่คว่ำของคู่แข่ง (`value` เป็น 0–11 หรือ `'joker'`) |
| `turn:afterCorrect` | `{ action: 'continue'\|'stop' }` | หลังทายถูก: ทายต่อ หรือ จบเทิร์น (เก็บไพ่ที่จั่วเป็นชีวิตสำรอง) |
| `turn:chooseReveal` | `{ tileId }` | ทายผิดตอนสำรับหมด: เลือกไพ่ตัวเองเปิด |
| `game:restart` | — | เจ้าของห้องแจกไพ่ใหม่ (คงที่นั่งเดิม) |
| `chat:msg` | `{ text }` | แชทในห้อง |

### Server → Client (emit)

| Event | payload | ความหมาย |
|-------|---------|----------|
| `room:state` | *(ดูด้านล่าง)* | สถานะห้องทั้งก้อน เซ็นเซอร์รายผู้รับ ส่งทุกครั้งที่มีการเปลี่ยนแปลง |
| `sfx` | `{ name }` | ให้ client เล่นเสียง: `correct` / `wrong` / `slide` / `win` |
| `error:msg` | `{ text }` | ข้อความ error (แสดงเป็น toast) |
| `chat:msg` | `{ from, text, ts }` | ข้อความแชท |

`room:state` (ย่อ): `phase`, `mySeat`, `isSpectator`, `youAreHost`,
`seats{N,E,S,W}` แต่ละที่นั่งมี `nickname / active / ready / eliminated / rank / tiles[]`
โดย `tiles[i] = { id, color, revealed, justDrawn, value }` — `value` เป็น `null` ถ้าเป็นไพ่คว่ำของคนอื่น,
`deckCount`, `removedCount`, `activeSeat`, `eliminated[]` (เรียงตามอันดับ), `winner`, `lastResult`

`phase`: `lobby → setup → (draw → guess → [afterCorrect | chooseReveal]) ↻ → over`

---

## 4. อัลกอริทึมแกนเกม (`src/engine.js`)

### 4.1 สร้างสำรับ + เซ็ตอัป
- สร้าง 26 ใบ: ดำ 0–11 + โจ๊กเกอร์, ขาว 0–11 + โจ๊กเกอร์
- สับไพ่ (Fisher–Yates) แล้ว **นำออกจากเกมถาวร ดำ 1 + ขาว 1** (ไม่มีใครเห็น)
- แจกผู้เล่นแต่ละคน **ดำ 2 + ขาว 2**

### 4.2 การเรียงไพ่ในมือ (`sortHand`)
```js
nums.sort((a, b) =>
  a.value !== b.value
    ? a.value - b.value                       // น้อย -> มาก
    : (a.color === 'black' ? 0 : 1) - (b.color === 'black' ? 0 : 1)  // เลขเท่ากัน: ดำก่อนขาว
);
// จากนั้นแทรกโจ๊กเกอร์ตาม jokerIndex ที่เจ้าของเลือก (ค่าเริ่มต้น = ขวาสุด)
```

### 4.3 ตรวจการทาย (`guess`)
```js
const guessVal = value === 'joker' ? 'joker' : value | 0;
const correct  = String(tile.value) === String(guessVal);
```
- **ถูก** → เปิดไพ่ใบนั้นถาวร, เช็กว่าคู่แข่งตกรอบไหม, `sfx('correct')`, เข้า `afterCorrect`
- **ผิด** → `sfx('wrong')` แล้วผู้ทายต้องเปิดไพ่ตัวเอง 1 ใบ:
  - ถ้าเทิร์นนี้จั่วมา → เปิด "ไพ่ที่เพิ่งจั่ว" อัตโนมัติ, จบเทิร์น
  - ถ้าสำรับหมด/ไม่ได้จั่ว → `phase = chooseReveal` ให้เลือกเอง แล้วจบเทิร์น

### 4.4 ตกรอบ / ชนะ (`_checkElim`)
- ไพ่ในมือถูกเปิดครบทุกใบ → ตกรอบ, ได้ `rank = จำนวนคนที่ยังไม่ตก ณ ตอนนั้น` (ตกก่อน = อันดับท้าย)
- เหลือคนเดียวที่ยังมีไพ่คว่ำ → คนนั้นชนะ (`rank = 1`), `phase = 'over'`

### 4.5 ลำดับตา (`_advance`)
`ring` = ที่นั่งที่มีคนเรียงตามเข็มนาฬิกาจริง เดินหน้าไปเรื่อย ๆ ข้ามคนที่ตกรอบ

---

## 5. Dynamic Perspective — ผู้เล่นอยู่ "ทิศใต้" เสมอ

หัวใจของ UI: ไม่ว่าจะนั่งที่นั่งจริงไหน ผู้เล่นเห็นตัวเองอยู่ล่างสุด (South) คู่แข่งกระจายไป บน/ซ้าย/ขวา
ตามลำดับตามเข็มนาฬิกา (`src/engine.js` และ `public/js/render.js` ใช้สูตรเดียวกัน):

```js
const PHYS_CW   = ['N', 'E', 'S', 'W']; // เข็มนาฬิกาจริงรอบโต๊ะ
const SCREEN_CW = ['S', 'E', 'N', 'W']; // ช่องบนจอ: เริ่มจากล่าง วนตามเข็ม

function relativePos(localSeat, targetSeat) {
  const li = PHYS_CW.indexOf(localSeat);
  const ti = PHYS_CW.indexOf(targetSeat);
  const off = (((ti - li) % 4) + 4) % 4;
  return SCREEN_CW[off];             // 'S' | 'E' | 'N' | 'W'
}
```

### โครงสร้าง React (ถ้าจะพอร์ตไป React)

```jsx
const SLOT_AREA = { S: 'south', E: 'east', N: 'north', W: 'west' };

function GameTable({ state }) {           // state = room:state จาก socket
  const me = state.mySeat ?? 'S';         // ผู้ชมใช้มุมมองมาตรฐาน
  return (
    <div className="table-grid">          {/* grid-template-areas: north / west center east / south */}
      {['N', 'E', 'S', 'W'].map((seat) => (
        <SeatPanel
          key={seat}
          style={{ gridArea: SLOT_AREA[relativePos(me, seat)] }}
          seat={state.seats[seat]}
          isSelf={seat === state.mySeat}
          myTurn={state.activeSeat === state.mySeat}
          phase={state.phase}
          onGuessTile={(tileId) => socket.emit('turn:guess', /* ... */)}
        />
      ))}
      <DeckPile count={state.deckCount} area="center" />
    </div>
  );
}

function SeatPanel({ seat, isSelf, myTurn, phase, style, onGuessTile }) {
  if (!seat.occupied) return <EmptySeat style={style} />;
  return (
    <div className={`seat ${seat.active ? 'active' : ''}`} style={style}>
      <div className="seat-name">{seat.nickname}{isSelf && ' (คุณ)'}</div>
      <div className="tiles">
        {seat.tiles.map((t) => (
          <Tile
            key={t.id}
            tile={t}                         // t.value === null ⇒ ไพ่คว่ำ แสดงหลังไพ่สีดำ/ขาว
            targetable={phase === 'guess' && myTurn && !isSelf && !t.revealed}
            onClick={() => onGuessTile(t.id)}
          />
        ))}
      </div>
      {seat.eliminated && <EliminatedOverlay rank={seat.rank} />}
    </div>
  );
}
```

Component tree:
```
<App>
 ├─ <Landing />                     // ใส่ชื่อเล่น
 └─ <Room>
     ├─ <TopBar status muteBtn />
     ├─ <GameTable>                 // grid 3x3, seat วางตาม relativePos(me, seat)
     │   ├─ <SeatPanel × 4>
     │   │   └─ <Tile × n>          // ไพ่ตัวเอง = เห็นเลข, คนอื่น = หลังไพ่สี
     │   └─ <DeckPile />
     ├─ <ControlPanel phase />      // ปุ่มเปลี่ยนตาม phase (draw/guess/afterCorrect/chooseReveal/setup)
     ├─ <GuessModal />              // numpad 0–11 + โจ๊กเกอร์
     ├─ <Chat />
     └─ <EndOverlay winner leaderboard confetti />
```

---

## 6. ธีม UI

- สีพื้น: เขียวมิ้นต์อ่อน → ฟ้าอ่อน (gradient), แอ็กเซนต์ฟ้า, ไฮไลต์เหลืองอุ่น
- ฟอนต์: **Kanit** (Google Fonts) โค้งมน อ่านง่าย
- ไพ่เลื่อนแบบ smooth (`transition` บน `.tile`), ผู้เล่นที่ถึงตาเรืองแสงเหลือง
- จบเกม: แบนเนอร์ผู้ชนะ + คอนเฟตตี (canvas) + ตารางอันดับ 1–4

---

## 7. ข้อจำกัด / ต่อยอดได้

- ใช้ห้องเดียว (`'main'`) — `class Room` ออกแบบให้แยกหลายห้องได้ (เพิ่ม `Map<roomId, Room>`)
- ไม่มี reconnect กลับที่นั่งเดิม (หลุดกลางเกม = ตกรอบ)
- state อยู่ใน memory (รีสตาร์ตเซิร์ฟเวอร์ = เกมหาย)
- ตัวเลือก "เปิดไพ่ใบอื่นแทนไพ่ที่จั่ว" ตอนทายผิด ทำเฉพาะกรณีสำรับหมด (ตาม Empty Deck Rule)
