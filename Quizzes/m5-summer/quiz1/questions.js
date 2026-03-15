const QUIZ_META = {
  courseId: "m5-summer",
  quizKey: "quiz1",
  title: "Quiz 1 : กฎของแก๊ส",
  enableTimer: false,
  timeLimitSec: 600
};

const QUIZ_DATA = [
  {
    id: "q1",
    prompt: `กฎของแก๊ส (Boyle's Law)\n\nแก๊สชนิดหนึ่งมีปริมาตร 2.0 L ที่ความดัน 1.5 atm\nถ้าเพิ่มความดันเป็น 3.0 atm ที่อุณหภูมิคงที่\nปริมาตรใหม่เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "0.5 L" },
      { key: "B", text: "1.0 L" },
      { key: "C", text: "1.5 L" },
      { key: "D", text: "2.0 L" }
    ],
    answer: "B"
  },
  {
    id: "q2",
    prompt: `กฎของแก๊ส (Charles Law)\n\nแก๊สมีปริมาตร 3.0 L ที่ 27°C\nถ้าเพิ่มอุณหภูมิเป็น 127°C ที่ความดันคงที่\nปริมาตรใหม่เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "3.0 L" },
      { key: "B", text: "4.0 L" },
      { key: "C", text: "5.0 L" },
      { key: "D", text: "6.0 L" }
    ],
    answer: "B"
  },
  {
    id: "q3",
    prompt: `กฎของแก๊ส (Gay-Lussac Law)\n\nแก๊สในภาชนะปิดมีความดัน 600 mmHg ที่ 300 K\nถ้าเพิ่มอุณหภูมิเป็น 400 K\nความดันใหม่เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "700 mmHg" },
      { key: "B", text: "750 mmHg" },
      { key: "C", text: "800 mmHg" },
      { key: "D", text: "900 mmHg" }
    ],
    answer: "C"
  },
  {
    id: "q4",
    prompt: `กฎของแก๊ส (Combined Gas Law)\n\nแก๊สมีปริมาตร 4.0 L ที่ความดัน 1 atm และอุณหภูมิ 300 K\nถ้าเปลี่ยนเป็นความดัน 2 atm และอุณหภูมิ 600 K\nปริมาตรใหม่เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "2 L" },
      { key: "B", text: "4 L" },
      { key: "C", text: "6 L" },
      { key: "D", text: "8 L" }
    ],
    answer: "B"
  },
  {
    id: "q5",
    prompt: `กฎของแก๊ส (Avogadro Law)\n\nแก๊สชนิดหนึ่งมีปริมาตร 5 L และมีจำนวน 0.5 mol\nถ้าเพิ่มเป็น 1.5 mol ที่อุณหภูมิและความดันเท่าเดิม\nปริมาตรใหม่เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "10 L" },
      { key: "B", text: "12 L" },
      { key: "C", text: "15 L" },
      { key: "D", text: "20 L" }
    ],
    answer: "C"
  },
  {
    id: "q6",
    prompt: `แก๊สอุดมคติ\n\nแก๊สจำนวน 1 mol มีปริมาตร 24.6 L ที่อุณหภูมิ 300 K\nความดันเท่ากับเท่าใด\n(กำหนด R = 0.082)`,
    choices: [
      { key: "A", text: "0.5 atm" },
      { key: "B", text: "1 atm" },
      { key: "C", text: "2 atm" },
      { key: "D", text: "3 atm" }
    ],
    answer: "B"
  },
  {
    id: "q7",
    prompt: `แก๊สอุดมคติ\n\nแก๊ส N₂ ปริมาตร 22.4 L ที่ STP\nมีจำนวนโมลเท่าใด`,
    choices: [
      { key: "A", text: "0.5 mol" },
      { key: "B", text: "1 mol" },
      { key: "C", text: "2 mol" },
      { key: "D", text: "4 mol" }
    ],
    answer: "B"
  },
  {
    id: "q8",
    prompt: `ความดันรวมและความดันย่อย\n\nภาชนะ 10 L มีแก๊ส\nO₂ = 1 mol\nN₂ = 2 mol\nที่ 300 K\nความดันรวมเท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "3.69 atm" },
      { key: "B", text: "5.00 atm" },
      { key: "C", text: "7.38 atm" },
      { key: "D", text: "9.84 atm" }
    ],
    answer: "C"
  },
  {
    id: "q9",
    prompt: `ความดันรวมและความดันย่อย\n\nจากข้อ 8 ความดันย่อยของ N₂ เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "2.46 atm" },
      { key: "B", text: "3.69 atm" },
      { key: "C", text: "4.92 atm" },
      { key: "D", text: "6.15 atm" }
    ],
    answer: "C"
  },
  {
    id: "q10",
    prompt: `ความดันรวมและความดันย่อย\n\nเก็บแก๊ส H₂ เหนือน้ำ\nปริมาตร 200 mL\nความดันรวม 760 mmHg\nที่ 25°C\nกำหนดให้ความดันไอน้ำ = 24 mmHg\nความดันจริงของ H₂ เท่ากับเท่าใด`,
    choices: [
      { key: "A", text: "720 mmHg" },
      { key: "B", text: "736 mmHg" },
      { key: "C", text: "748 mmHg" },
      { key: "D", text: "760 mmHg" }
    ],
    answer: "B"
  }
];
