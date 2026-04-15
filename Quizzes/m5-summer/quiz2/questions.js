const QUIZ_META = {
  courseId: "m5-summer",
  quizKey: "quiz2",
  title: "Quiz 2 : SHM",
  enableTimer: false,
  timeLimitSec: 600
};

const QUIZ_DATA = [
  {
    id: "q1",
    prompt: `จากรูปกราฟ A, B และ C ของการเคลื่อนที่แบบ SHM จงพิจารณาว่ากราฟใดเป็น ความเร่ง ความเร็ว และการกระจัด ตามลำดับ`,
    image: "../assets/shm-graph-abc.png",
    choices: [
      { key: "A", text: "A, B, C" },
      { key: "B", text: "B, C, A" },
      { key: "C", text: "C, A, B" },
      { key: "D", text: "A, C, B" }
    ],
    answer: "C"
  },
  {
    id: "q2",
    prompt: `ลูกตุ้มอย่างง่ายอันหนึ่งมีความยาวเชือก 1 m และมีคาบ 2 s ถ้าเปลี่ยนความยาวเชือกเป็น 4 m คาบใหม่จะเป็นเท่าใด`,
    choices: [
      { key: "A", text: "1 s" },
      { key: "B", text: "2 s" },
      { key: "C", text: "4 s" },
      { key: "D", text: "8 s" }
    ],
    answer: "C"
  },
  {
    id: "q3",
    prompt: `มวลติดสปริงสั่นด้วยความถี่ 4 Hz เมื่อใช้มวล 1 kg ถ้าเปลี่ยนมวลเป็น 4 kg โดยใช้สปริงเดิม ความถี่ใหม่จะเป็นเท่าใด`,
    choices: [
      { key: "A", text: "1 Hz" },
      { key: "B", text: "2 Hz" },
      { key: "C", text: "4 Hz" },
      { key: "D", text: "8 Hz" }
    ],
    answer: "B"
  },
  {
    id: "q4",
    prompt: `วัตถุเคลื่อนที่แบบ SHM มีแอมพลิจูด 5 cm และความถี่เชิงมุม ω = 4π rad/s เมื่อวัตถุอยู่ที่ตำแหน่ง x = 3 cm จงหาอัตราเร็วและความเร่ง`,
    choices: [
      { key: "A", text: "v = 16π cm/s, a = -48π² cm/s²" },
      { key: "B", text: "v = 12π cm/s, a = -48π² cm/s²" },
      { key: "C", text: "v = 16π cm/s, a = -36π² cm/s²" },
      { key: "D", text: "v = 20π cm/s, a = -48π² cm/s²" }
    ],
    answer: "A"
  },
  {
    id: "q5",
    prompt: `ข้อใดอธิบายการเคลื่อนที่แบบ SHM ได้ถูกต้องที่สุด`,
    choices: [
      { key: "A", text: "ความเร่งมีขนาดแปรผันตรงกับการกระจัดและมีทิศเดียวกันกับการกระจัด ส่วนความเร็วคงที่" },
      { key: "B", text: "ความเร่งมีขนาดแปรผันตรงกับการกระจัดและมีทิศตรงข้ามกับการกระจัด ส่วนความเร็วมีค่าเปลี่ยนไปตามตำแหน่งและทิศของมันเปลี่ยนตามการเคลื่อนที่ของวัตถุ" },
      { key: "C", text: "ความเร่งคงที่ตลอดเวลา แต่ความเร็วแปรผันตรงกับการกระจัด" },
      { key: "D", text: "ความเร็วและความเร่งต่างคงที่ตลอดการเคลื่อนที่" }
    ],
    answer: "B"
  },
  {
    id: "q6",
    prompt: `วัตถุเคลื่อนที่แบบ SHM ตามสมการ x = 0.10cos(5πt) เมื่อ x มีหน่วยเป็นเมตร และ t มีหน่วยเป็นวินาที จงหาอัตราเร็วสูงสุดและความเร่งสูงสุด`,
    choices: [
      { key: "A", text: "vmax = 0.5π m/s, amax = 2.5π² m/s²" },
      { key: "B", text: "vmax = π m/s, amax = 5π² m/s²" },
      { key: "C", text: "vmax = 0.5π m/s, amax = 5π² m/s²" },
      { key: "D", text: "vmax = 0.1π m/s, amax = 2.5π² m/s²" }
    ],
    answer: "A"
  },
  {
    id: "q7",
    prompt: `วัตถุเคลื่อนที่แบบ SHM มีคาบ 2 s และแอมพลิจูด 4 cm จงหาอัตราเร็วสูงสุดและความเร่งสูงสุด`,
    choices: [
      { key: "A", text: "vmax = 2π cm/s, amax = 2π² cm/s²" },
      { key: "B", text: "vmax = 4π cm/s, amax = 4π² cm/s²" },
      { key: "C", text: "vmax = 8π cm/s, amax = 4π² cm/s²" },
      { key: "D", text: "vmax = 4π cm/s, amax = 8π² cm/s²" }
    ],
    answer: "B"
  },
  {
    id: "q8",
    prompt: `มวล 1 kg ติดกับสปริงค่าคงที่ k = 4π² N/m และมีแอมพลิจูด 5 cm จงหาอัตราเร็วสูงสุดและความเร่งสูงสุด`,
    choices: [
      { key: "A", text: "vmax = 0.05π m/s, amax = 0.1π² m/s²" },
      { key: "B", text: "vmax = 0.1π m/s, amax = 0.2π² m/s²" },
      { key: "C", text: "vmax = 0.2π m/s, amax = 0.4π² m/s²" },
      { key: "D", text: "vmax = 0.1π m/s, amax = 0.4π² m/s²" }
    ],
    answer: "B"
  },
  {
    id: "q9",
    prompt: `วัตถุเคลื่อนที่แบบ SHM ตามสมการ x = 4cos(πt) เมื่อ x มีหน่วยเป็นเซนติเมตร และ t มีหน่วยเป็นวินาที จงหา Δx = x(0.5) - x(0)`,
    choices: [
      { key: "A", text: "-4 cm" },
      { key: "B", text: "0 cm" },
      { key: "C", text: "4 cm" },
      { key: "D", text: "-2 cm" }
    ],
    answer: "A"
  },
  {
    id: "q10",
    prompt: `วัตถุเคลื่อนที่แบบ SHM ตามสมการ x = 6sin(πt) เมื่อ x มีหน่วยเป็นเซนติเมตร และ t มีหน่วยเป็นวินาที จงหาความเร่งเมื่อ t = 0.5 s`,
    choices: [
      { key: "A", text: "-6π² cm/s²" },
      { key: "B", text: "-3π² cm/s²" },
      { key: "C", text: "0 cm/s²" },
      { key: "D", text: "6π² cm/s²" }
    ],
    answer: "A"
  }
];
