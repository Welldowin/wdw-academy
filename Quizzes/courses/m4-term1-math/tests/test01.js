// 📄 courses/m4-term1-math/tests/test01.js
// ชุดสอบ: คณิตศาสตร์ ม.4 เทอม 1 — เซตและพหุนาม (30 ข้อ)

window.TEST_META = {
  courseId: "m4-term1-math",
  testKey: "test01",
  title: "Final Test : คณิตศาสตร์ ม.4 (เซตและพหุนาม)",
  timeLimitSec: 5400,

  chapters: {
    "เซต":    { label: "เซต" },
    "พหุนาม": { label: "พหุนามและการแยกตัวประกอบ" },
  },

  radarAxes: ["theory", "calc", "apply", "เซต", "พหุนาม"],
};

var C = [
  { key: "1", text: "ก ถูกเพียงข้อเดียว" },
  { key: "2", text: "ก และ ข" },
  { key: "3", text: "ข และ ค" },
  { key: "4", text: "ก และ ค" },
  { key: "5", text: "ก, ข และ ค" },
];

window.TEST_DATA = [
  { id: "q1", chapter: "เซต", subtopic: "ความหมายและสัญลักษณ์", skill: "theory", image: "",
    prompt: "ทฤษฎีบทของสับเซตและพาวเวอร์เซต\nพิจารณาข้อความต่อไปนี้:\nก. เซตว่างเป็นสับเซตของทุกเซต ($\\emptyset \\subset A$)\nข. เซตทุกเซตเป็นสับเซตของตัวเอง ($A \\subset A$)\nค. จำนวนสมาชิกของ $P(A)$ คือ $2^n$ เมื่อ $n$ คือจำนวนสมาชิกของ $A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q2", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "calc", image: "",
    prompt: "การวิเคราะห์สมาชิกและสับเซต\nกำหนดให้ $A = \\{1, 2\\}$ พิจารณาข้อความต่อไปนี้:\nก. $\\{1\\} \\subset A$\nข. $1 \\in A$\nค. $\\{1\\} \\in A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q3", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติของเซตว่างและการยูเนียน อินเตอร์เซกชัน\nพิจารณาข้อความต่อไปนี้:\nก. $A \\cup A = A$\nข. $A \\cap \\emptyset = A$\nค. $A \\cup \\emptyset = A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q4", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "กฎของเดอมอร์แกน (De Morgan's Laws)\nพิจารณาข้อความต่อไปนี้:\nก. $(A \\cup B)' = A' \\cap B'$\nข. $(A \\cap B)' = A' \\cap B'$\nค. $A - B = A \\cup B'$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q5", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "apply", image: "",
    prompt: "สมการจำนวนสมาชิกของเซต\nพิจารณาข้อความต่อไปนี้:\nก. $n(A \\cup B) = n(A) + n(B)$ เสมอ\nข. $n(A - B) = n(A) - n(A \\cap B)$\nค. $A - B = A \\cap B'$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q6", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "theory", image: "",
    prompt: "สมบัติของพาวเวอร์เซต\nกำหนดให้ $A$ เป็นเซตใดๆ พิจารณาข้อความต่อไปนี้:\nก. $\\emptyset \\in P(A)$\nข. $A \\in P(A)$\nค. $P(A)$ สามารถเป็นเซตว่างได้ หาก $A = \\emptyset$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q7", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติพื้นฐานของการดำเนินการ\nพิจารณาข้อความต่อไปนี้:\nก. $A \\cap A = A$\nข. $A - \\emptyset = A$\nค. $A \\cap A' = \\emptyset$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q8", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "calc", image: "",
    prompt: "การหาผลลัพธ์จากการดำเนินการของเซต\nกำหนดให้ $A = \\{1, 2, 3\\}$ และ $B = \\{3, 4\\}$ พิจารณาข้อความต่อไปนี้:\nก. $A \\cup B = \\{1, 2, 3, 4\\}$\nข. $A \\cap B = \\emptyset$\nค. $A - B = \\{1, 2\\}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q9", chapter: "เซต", subtopic: "แผนภาพเวนน์-ออยเลอร์", skill: "apply", image: "",
    prompt: "การแรเงาแผนภาพเวนน์-ออยเลอร์\nจากแผนภาพเวนน์ที่มีวงกลม A และ B ตัดกัน พิจารณาข้อความต่อไปนี้:\nก. บริเวณที่วงกลมซ้อนทับกันแสดงถึง $A \\cap B$\nข. พื้นที่ของวงกลม A ทั้งหมดเรียกว่า $A \\cup B$\nค. พื้นที่ด้านนอกวงกลมทั้งสองคือ $A' \\cap B$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q10", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "calc", image: "",
    prompt: "คอมพลีเมนต์ของเซต\nกำหนดให้เอกภพสัมพัทธ์ $U = \\{1, 2, 3, 4, 5\\}$ และ $A = \\{1, 2\\}$ พิจารณาข้อความต่อไปนี้:\nก. $A' = \\{1, 2\\}$\nข. $A' = \\{3, 4, 5\\}$\nค. $A \\cup A' = U$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q11", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "theory", image: "",
    prompt: "ความสัมพันธ์ของการเป็นสับเซต\nพิจารณาข้อความต่อไปนี้:\nก. $A \\subset (A \\cup B)$\nข. $(A \\cap B) \\subset A$\nค. $(A - B) \\subset A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q12", chapter: "เซต", subtopic: "ความหมายและสัญลักษณ์", skill: "apply", image: "",
    prompt: "การเขียนเซตแบบบอกเงื่อนไข\nกำหนดให้ $A = \\{x \\mid x \\in \\mathbb{I}^+ \\text{ และ } x < 5\\}$ พิจารณาข้อความต่อไปนี้:\nก. เขียนแบบแจกแจงสมาชิกได้เป็น $A = \\{1, 2, 3, 4\\}$\nข. $n(A) = 4$\nค. $0 \\in A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q13", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "calc", image: "",
    prompt: "พาวเวอร์เซตของเซตว่าง\nพิจารณาข้อความต่อไปนี้:\nก. $P(\\emptyset) = \\{\\emptyset\\}$\nข. $n(P(\\emptyset)) = 0$\nค. $\\emptyset \\subset P(\\emptyset)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q14", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติการแจกแจงของเซต (Distributive Laws)\nพิจารณาข้อความต่อไปนี้:\nก. $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$\nข. $A \\cup (B \\cap C) = (A \\cap B) \\cup C$\nค. $A - (B \\cup C) = (A - B) \\cup (A - C)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q15", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติที่น่าสนใจของเซต\nพิจารณาข้อความต่อไปนี้:\nก. $A - B = B - A$ เสมอ\nข. $(A')' = A$\nค. $A \\cap U = A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q16", chapter: "เซต", subtopic: "แผนภาพเวนน์-ออยเลอร์", skill: "apply", image: "",
    prompt: "โจทย์ปัญหาแผนภาพเวนน์ 2 เซต\nนักเรียน 50 คน มีผู้ชอบเรียนคณิต 30 คน ชอบเรียนวิทย์ 20 คน และชอบทั้งสองวิชา 10 คน พิจารณาข้อความต่อไปนี้:\nก. จำนวนนักเรียนที่ชอบเรียนคณิตอย่างเดียวคือ 20 คน\nข. จำนวนนักเรียนที่ชอบเรียนวิทย์อย่างเดียวคือ 10 คน\nค. จำนวนนักเรียนที่ไม่ชอบเรียนทั้งสองวิชานี้เลยคือ 10 คน\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q17", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "theory", image: "",
    prompt: "นิยามการเท่ากันและการเป็นสับเซต\nพิจารณาข้อความต่อไปนี้:\nก. ถ้า $A \\subset B$ และ $B \\subset A$ แล้ว $A = B$\nข. ถ้า $A \\subset B$ แล้ว $A \\cap B = A$\nค. ถ้า $A \\subset B$ แล้ว $A \\cup B = A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q18", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "การเปลี่ยนรูปผลต่างของเซต (Difference)\nพิจารณาข้อความต่อไปนี้:\nก. $A \\cap B' = A - B$\nข. $A \\cup B' = A - B$\nค. $(A - B) \\cap (B - A) = \\emptyset$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q19", chapter: "เซต", subtopic: "สับเซตและพาวเวอร์เซต", skill: "calc", image: "",
    prompt: "การวิเคราะห์เซตที่มีเซตว่างเป็นสมาชิก\nกำหนดให้ $A = \\{\\emptyset\\}$ พิจารณาข้อความต่อไปนี้:\nก. $n(A) = 1$\nข. $A = \\emptyset$\nค. $n(P(A)) = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q20", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติการสลับที่ (Commutative Laws)\nพิจารณาข้อความต่อไปนี้:\nก. การดำเนินการ $A \\cup B$ มีสมบัติการสลับที่\nข. การดำเนินการ $A \\cap B$ มีสมบัติการสลับที่\nค. การดำเนินการ $A - B$ ไม่มีสมบัติการสลับที่\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q21", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติเมื่อดำเนินการกับตัวเอง (Idempotent Laws)\nพิจารณาข้อความต่อไปนี้:\nก. $A - A = \\emptyset$\nข. $A \\cup A = A$\nค. $A \\cap A = \\emptyset$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q22", chapter: "เซต", subtopic: "แผนภาพเวนน์-ออยเลอร์", skill: "calc", image: "",
    prompt: "การคำนวณสมาชิกจากสูตร\nกำหนด $n(U)=100, n(A)=50, n(B)=40$ และ $n((A \\cup B)') = 20$ พิจารณาข้อความต่อไปนี้:\nก. $n(A \\cup B) = 70$\nข. $n(A \\cap B) = 10$\nค. $n(A - B) = 40$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q23", chapter: "เซต", subtopic: "การดำเนินการของเซต", skill: "theory", image: "",
    prompt: "สมบัติของคอมพลีเมนต์กับเอกภพสัมพัทธ์\nพิจารณาข้อความต่อไปนี้:\nก. $\\emptyset' = U$\nข. $U' = U$\nค. $U' = \\emptyset$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q24", chapter: "เซต", subtopic: "ความหมายและสัญลักษณ์", skill: "theory", image: "",
    prompt: "นิยามเชิงตรรกศาสตร์ของการดำเนินการเซต\nพิจารณาข้อความต่อไปนี้:\nก. $x \\in A \\cup B$ หมายความว่า $x \\in A$ หรือ $x \\in B$\nข. $x \\in A \\cap B$ หมายความว่า $x \\in A$ และ $x \\in B$\nค. $x \\in A - B$ หมายความว่า $x \\in B$ แต่ $x \\notin A$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q25", chapter: "พหุนาม", subtopic: "กำลังสองสมบูรณ์และผลต่าง", skill: "theory", image: "",
    prompt: "สูตรกำลังสองสมบูรณ์\nพิจารณาข้อความต่อไปนี้:\nก. $(x+y)^2 = x^2 + 2xy + y^2$\nข. $(x-y)^2 = x^2 - xy + y^2$\nค. $(x+y)^2 = x^2 + y^2$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q26", chapter: "พหุนาม", subtopic: "กำลังสองสมบูรณ์และผลต่าง", skill: "apply", image: "",
    prompt: "สูตรผลต่างกำลังสอง\nพิจารณาข้อความต่อไปนี้:\nก. $x^2 - y^2 = (x-y)^2$\nข. $x^2 - y^2 = (x-y)(x+y)$\nค. $9x^2 - 16 = (3x-4)(3x+4)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q27", chapter: "พหุนาม", subtopic: "กำลังสามสมบูรณ์และผลต่าง", skill: "theory", image: "",
    prompt: "สูตรกำลังสามสมบูรณ์และผลบวกกำลังสาม\nพิจารณาข้อความต่อไปนี้:\nก. $(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$\nข. $(x-y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$\nค. $x^3 + y^3 = (x+y)(x^2 - xy + y^2)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q28", chapter: "พหุนาม", subtopic: "กำลังสามสมบูรณ์และผลต่าง", skill: "calc", image: "",
    prompt: "สูตรผลต่างกำลังสาม\nพิจารณาข้อความต่อไปนี้:\nก. $x^3 - y^3 = (x-y)(x^2 + xy + y^2)$\nข. $8x^3 - 27 = (2x-3)(4x^2 + 6x + 9)$\nค. $x^3 - y^3 = (x-y)^3$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q29", chapter: "พหุนาม", subtopic: "กำลังสองสมบูรณ์และผลต่าง", skill: "calc", image: "",
    prompt: "การประยุกต์ใช้เอกลักษณ์กำลังสอง\nพิจารณาข้อความต่อไปนี้:\nก. $(x+2)^2 = x^2 + 4x + 4$\nข. $(x-3)^2 = x^2 - 9$\nค. $(2x-1)^2 = 4x^2 - 4x + 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q30", chapter: "พหุนาม", subtopic: "กำลังสามสมบูรณ์และผลต่าง", skill: "apply", image: "",
    prompt: "การประยุกต์ใช้เอกลักษณ์กำลังสามและผลต่างกำลังสอง\nพิจารณาข้อความต่อไปนี้:\nก. $(x+1)^3 = x^3 + 3x^2 + 3x + 1$\nข. $x^3 + 8 = (x+2)(x^2 + 2x + 4)$\nค. $x^2 + 25 = (x+5)(x-5)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },
];
