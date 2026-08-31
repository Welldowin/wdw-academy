// 📄 courses/m3-term1-math/tests/testleeah.js
// ชุดสอบซ่อมคณิตศาสตร์ ชุดที่ 2 — 40 ข้อ ข้อละ 4 ตัวเลือก เวลา 60 นาที
// อ้างอิงโครงประเมินจาก tests/test01.js (แยกหัวข้อหลัก/หัวข้อย่อย/ทักษะ + Radar + Persona)
// โจทย์และเฉลยอ้างอิงจาก "ข้อสอบซ่อมคณิตศาสตร์ ชุดที่ 2" และเฉลยสำหรับผู้สอน

window.TEST_META = {
  courseId: "m3-term1-math",
  testKey: "testleeah",
  title: "ข้อสอบซ่อมคณิตศาสตร์ ชุดที่ 2 (40 ข้อ · 60 นาที)",
  timeLimitSec: 3600,

  // หัวข้อหลัก (chapter) — key ต้องตรงกับ field "chapter" ในแต่ละข้อ
  chapters: {
    "แยกตัวประกอบพหุนาม": { label: "การแยกตัวประกอบพหุนาม" },
    "ทศนิยม":            { label: "ทศนิยม (บวก ลบ คูณ หาร)" },
    "จำนวนเต็มลบ":       { label: "จำนวนเต็มลบ (บวก ลบ คูณ หาร)" },
    "เศษส่วน":           { label: "เศษส่วน (มีค่าติดลบปน)" },
    "เลขยกกำลัง":        { label: "เลขยกกำลัง" },
    "รากที่สอง":         { label: "รากที่สอง" },
  },

  // แกน Radar = ทักษะ 3 ด้าน + หัวข้อหลัก 6 บท
  radarAxes: [
    "theory", "calc", "apply",
    "แยกตัวประกอบพหุนาม", "ทศนิยม", "จำนวนเต็มลบ",
    "เศษส่วน", "เลขยกกำลัง", "รากที่สอง",
  ],
};

window.TEST_DATA = [
  // ============ ตอนที่ 1 การแยกตัวประกอบพหุนาม ============
  { id: "q1", chapter: "แยกตัวประกอบพหุนาม", subtopic: "ผลต่างกำลังสอง", skill: "theory", image: "",
    prompt: "จงแยกตัวประกอบของ $x^2 - 25$",
    choices: [
      { key: "1", text: "$(x - 25)(x + 1)$" },
      { key: "2", text: "$(x + 5)(x + 5)$" },
      { key: "3", text: "$(x - 5)(x - 5)$" },
      { key: "4", text: "$(x - 5)(x + 5)$" },
    ], answer: "4",
    explanation: "อยู่ในรูปผลต่างกำลังสอง $a^2 - b^2 = (a - b)(a + b)$ โดย $a = x,\\ b = 5$ ได้ $(x - 5)(x + 5)$" },

  { id: "q2", chapter: "แยกตัวประกอบพหุนาม", subtopic: "แยกตัวประกอบตรีนาม", skill: "calc", image: "",
    prompt: "จงแยกตัวประกอบของ $x^2 + 9x + 18$",
    choices: [
      { key: "1", text: "$(x + 2)(x + 9)$" },
      { key: "2", text: "$(x + 3)(x + 6)$" },
      { key: "3", text: "$(x - 3)(x - 6)$" },
      { key: "4", text: "$(x + 3)(x - 6)$" },
    ], answer: "2",
    explanation: "หาสองจำนวนที่บวกกันได้ $9$ และคูณกันได้ $18$ คือ $3$ กับ $6$ จึงได้ $(x + 3)(x + 6)$" },

  { id: "q3", chapter: "แยกตัวประกอบพหุนาม", subtopic: "แยกตัวประกอบตรีนาม", skill: "calc", image: "",
    prompt: "จงแยกตัวประกอบของ $x^2 - 11x + 30$",
    choices: [
      { key: "1", text: "$(x + 5)(x + 6)$" },
      { key: "2", text: "$(x - 3)(x - 10)$" },
      { key: "3", text: "$(x - 2)(x - 15)$" },
      { key: "4", text: "$(x - 5)(x - 6)$" },
    ], answer: "4",
    explanation: "หาสองจำนวนที่บวกกันได้ $-11$ และคูณกันได้ $30$ คือ $-5$ กับ $-6$ จึงได้ $(x - 5)(x - 6)$" },

  { id: "q4", chapter: "แยกตัวประกอบพหุนาม", subtopic: "ผลต่างกำลังสอง", skill: "apply", image: "",
    prompt: "จงแยกตัวประกอบของ $16x^2 - 1$",
    choices: [
      { key: "1", text: "$(16x - 1)(x + 1)$" },
      { key: "2", text: "$(4x - 1)(4x - 1)$" },
      { key: "3", text: "$(4x - 1)(4x + 1)$" },
      { key: "4", text: "$(16x + 1)(x - 1)$" },
    ], answer: "3",
    explanation: "$16x^2 - 1 = (4x)^2 - 1^2 = (4x - 1)(4x + 1)$" },

  { id: "q5", chapter: "แยกตัวประกอบพหุนาม", subtopic: "กำลังสองสมบูรณ์", skill: "theory", image: "",
    prompt: "จงแยกตัวประกอบของ $x^2 - 12x + 36$",
    choices: [
      { key: "1", text: "$(x - 6)^2$" },
      { key: "2", text: "$(x + 6)^2$" },
      { key: "3", text: "$(x - 6)(x + 6)$" },
      { key: "4", text: "$(x - 4)(x - 9)$" },
    ], answer: "1",
    explanation: "อยู่ในรูปกำลังสองสมบูรณ์ $x^2 - 2(6)x + 6^2 = (x - 6)^2$" },

  { id: "q6", chapter: "แยกตัวประกอบพหุนาม", subtopic: "ตรีนามสัมประสิทธิ์นำ", skill: "calc", image: "",
    prompt: "จงแยกตัวประกอบของ $5x^2 + 7x - 6$",
    choices: [
      { key: "1", text: "$(5x - 3)(x + 2)$" },
      { key: "2", text: "$(5x + 3)(x - 2)$" },
      { key: "3", text: "$(x - 3)(5x + 2)$" },
      { key: "4", text: "$(x + 3)(5x - 2)$" },
    ], answer: "1",
    explanation: "กระจายตรวจสอบ $(5x - 3)(x + 2) = 5x^2 + 10x - 3x - 6 = 5x^2 + 7x - 6$" },

  { id: "q7", chapter: "แยกตัวประกอบพหุนาม", subtopic: "กำลังสองสมบูรณ์", skill: "apply", image: "",
    prompt: "จงแยกตัวประกอบของ $x^2 - 14x + 49$",
    choices: [
      { key: "1", text: "$(x + 7)^2$" },
      { key: "2", text: "$(x - 7)^2$" },
      { key: "3", text: "$(x - 7)(x + 7)$" },
      { key: "4", text: "$(x - 1)(x - 49)$" },
    ], answer: "2",
    explanation: "$x^2 - 2(7)x + 7^2 = (x - 7)^2$" },

  // ============ ตอนที่ 2 การบวก ลบ คูณ หาร จำนวนทศนิยม ============
  { id: "q8", chapter: "ทศนิยม", subtopic: "การบวกทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $5.6 + 2.35$",
    choices: [
      { key: "1", text: "$6.95$" },
      { key: "2", text: "$7.95$" },
      { key: "3", text: "$7.85$" },
      { key: "4", text: "$8.95$" },
    ], answer: "2",
    explanation: "ตั้งหลักให้ตรงกัน $5.60 + 2.35 = 7.95$" },

  { id: "q9", chapter: "ทศนิยม", subtopic: "การลบทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $10.4 - 3.85$",
    choices: [
      { key: "1", text: "$6.55$" },
      { key: "2", text: "$6.65$" },
      { key: "3", text: "$7.55$" },
      { key: "4", text: "$6.45$" },
    ], answer: "1",
    explanation: "$10.40 - 3.85 = 6.55$" },

  { id: "q10", chapter: "ทศนิยม", subtopic: "การคูณทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $3.5 \\times 1.4$",
    choices: [
      { key: "1", text: "$4.9$" },
      { key: "2", text: "$4.5$" },
      { key: "3", text: "$5.9$" },
      { key: "4", text: "$3.9$" },
    ], answer: "1",
    explanation: "$35 \\times 14 = 490$ มีทศนิยมรวม 2 ตำแหน่ง จึงได้ $4.90$" },

  { id: "q11", chapter: "ทศนิยม", subtopic: "การหารทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $9.6 \\div 1.2$",
    choices: [
      { key: "1", text: "$7$" },
      { key: "2", text: "$8.8$" },
      { key: "3", text: "$0.8$" },
      { key: "4", text: "$8$" },
    ], answer: "4",
    explanation: "คูณทั้งเศษและตัวหารด้วย 10 ได้ $96 \\div 12 = 8$" },

  { id: "q12", chapter: "ทศนิยม", subtopic: "การบวกทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $0.45 + 0.6$",
    choices: [
      { key: "1", text: "$0.95$" },
      { key: "2", text: "$1.15$" },
      { key: "3", text: "$1.05$" },
      { key: "4", text: "$0.65$" },
    ], answer: "3",
    explanation: "$0.45 + 0.60 = 1.05$" },

  { id: "q13", chapter: "ทศนิยม", subtopic: "การลบทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $20.4 - 11.75$",
    choices: [
      { key: "1", text: "$8.75$" },
      { key: "2", text: "$9.65$" },
      { key: "3", text: "$8.55$" },
      { key: "4", text: "$8.65$" },
    ], answer: "4",
    explanation: "$20.40 - 11.75 = 8.65$" },

  { id: "q14", chapter: "ทศนิยม", subtopic: "การคูณทศนิยม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $4.5 \\times 0.4$",
    choices: [
      { key: "1", text: "$1.6$" },
      { key: "2", text: "$18$" },
      { key: "3", text: "$1.8$" },
      { key: "4", text: "$0.18$" },
    ], answer: "3",
    explanation: "$45 \\times 4 = 180$ มีทศนิยมรวม 2 ตำแหน่ง จึงได้ $1.80$" },

  // ============ ตอนที่ 3 การบวก ลบ คูณ หาร จำนวนติดลบ ============
  { id: "q15", chapter: "จำนวนเต็มลบ", subtopic: "การบวกลบจำนวนเต็ม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $-8 + 5 - 12$",
    choices: [
      { key: "1", text: "$-15$" },
      { key: "2", text: "$-5$" },
      { key: "3", text: "$15$" },
      { key: "4", text: "$5$" },
    ], answer: "1",
    explanation: "$-8 + 5 = -3$ แล้ว $-3 - 12 = -15$" },

  { id: "q16", chapter: "จำนวนเต็มลบ", subtopic: "การลบจำนวนลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $-6 - (-9) + (-4)$",
    choices: [
      { key: "1", text: "$1$" },
      { key: "2", text: "$-1$" },
      { key: "3", text: "$19$" },
      { key: "4", text: "$-19$" },
    ], answer: "2",
    explanation: "$-6 + 9 - 4 = 3 - 4 = -1$" },

  { id: "q17", chapter: "จำนวนเต็มลบ", subtopic: "การคูณจำนวนลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(-3) \\times 4 \\times (-2)$",
    choices: [
      { key: "1", text: "$24$" },
      { key: "2", text: "$-24$" },
      { key: "3", text: "$-10$" },
      { key: "4", text: "$10$" },
    ], answer: "1",
    explanation: "$(-3) \\times 4 = -12$ แล้ว $-12 \\times (-2) = 24$ (ลบสองตัวได้บวก)" },

  { id: "q18", chapter: "จำนวนเต็มลบ", subtopic: "การหารจำนวนลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(-60) \\div (-5) \\div (-3)$",
    choices: [
      { key: "1", text: "$4$" },
      { key: "2", text: "$-36$" },
      { key: "3", text: "$36$" },
      { key: "4", text: "$-4$" },
    ], answer: "4",
    explanation: "$(-60) \\div (-5) = 12$ แล้ว $12 \\div (-3) = -4$" },

  { id: "q19", chapter: "จำนวนเต็มลบ", subtopic: "การบวกลบจำนวนเต็ม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $7 - 13 + (-5) - (-9)$",
    choices: [
      { key: "1", text: "$2$" },
      { key: "2", text: "$-34$" },
      { key: "3", text: "$-2$" },
      { key: "4", text: "$34$" },
    ], answer: "3",
    explanation: "$7 - 13 - 5 + 9 = -6 - 5 + 9 = -2$" },

  { id: "q20", chapter: "จำนวนเต็มลบ", subtopic: "การคูณจำนวนลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(-2) \\times (-3) \\times (-4)$",
    choices: [
      { key: "1", text: "$24$" },
      { key: "2", text: "$-9$" },
      { key: "3", text: "$-24$" },
      { key: "4", text: "$9$" },
    ], answer: "3",
    explanation: "$(-2) \\times (-3) = 6$ แล้ว $6 \\times (-4) = -24$ (ตัวลบจำนวนคี่ตัว ผลลัพธ์เป็นลบ)" },

  // ============ ตอนที่ 4 การบวก คูณ หาร เศษส่วน (มีค่าติดลบปน) ============
  { id: "q21", chapter: "เศษส่วน", subtopic: "การบวกลบเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\dfrac{1}{2} + \\left(-\\dfrac{1}{4}\\right) + \\dfrac{1}{8}$",
    choices: [
      { key: "1", text: "$-\\dfrac{3}{8}$" },
      { key: "2", text: "$\\dfrac{3}{8}$" },
      { key: "3", text: "$\\dfrac{5}{8}$" },
      { key: "4", text: "$\\dfrac{7}{8}$" },
    ], answer: "2",
    explanation: "ทำส่วนร่วม 8: $\\dfrac{4}{8} - \\dfrac{2}{8} + \\dfrac{1}{8} = \\dfrac{3}{8}$" },

  { id: "q22", chapter: "เศษส่วน", subtopic: "การบวกลบเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $-\\dfrac{1}{3} + \\dfrac{1}{6} + \\left(-\\dfrac{1}{2}\\right)$",
    choices: [
      { key: "1", text: "$\\dfrac{2}{3}$" },
      { key: "2", text: "$-\\dfrac{1}{6}$" },
      { key: "3", text: "$-\\dfrac{2}{3}$" },
      { key: "4", text: "$\\dfrac{1}{6}$" },
    ], answer: "3",
    explanation: "ทำส่วนร่วม 6: $-\\dfrac{2}{6} + \\dfrac{1}{6} - \\dfrac{3}{6} = -\\dfrac{4}{6} = -\\dfrac{2}{3}$" },

  { id: "q23", chapter: "เศษส่วน", subtopic: "การคูณเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\left(-\\dfrac{1}{2}\\right) \\times \\dfrac{2}{3} \\times \\left(-\\dfrac{3}{4}\\right)$",
    choices: [
      { key: "1", text: "$-\\dfrac{1}{4}$" },
      { key: "2", text: "$\\dfrac{1}{2}$" },
      { key: "3", text: "$\\dfrac{1}{4}$" },
      { key: "4", text: "$-\\dfrac{1}{2}$" },
    ], answer: "3",
    explanation: "ตัวลบสองตัวได้บวก $\\dfrac{1}{2} \\times \\dfrac{2}{3} \\times \\dfrac{3}{4} = \\dfrac{6}{24} = \\dfrac{1}{4}$" },

  { id: "q24", chapter: "เศษส่วน", subtopic: "การหารเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\dfrac{3}{4} \\div \\left(-\\dfrac{1}{2}\\right) \\times \\dfrac{2}{3}$",
    choices: [
      { key: "1", text: "$1$" },
      { key: "2", text: "$-\\dfrac{3}{2}$" },
      { key: "3", text: "$\\dfrac{3}{2}$" },
      { key: "4", text: "$-1$" },
    ], answer: "4",
    explanation: "$\\dfrac{3}{4} \\times (-2) = -\\dfrac{3}{2}$ แล้ว $-\\dfrac{3}{2} \\times \\dfrac{2}{3} = -1$" },

  { id: "q25", chapter: "เศษส่วน", subtopic: "การคูณหารเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\left(-\\dfrac{2}{3}\\right) \\times \\left(-\\dfrac{3}{5}\\right) \\div \\dfrac{1}{5}$",
    choices: [
      { key: "1", text: "$-2$" },
      { key: "2", text: "$\\dfrac{2}{25}$" },
      { key: "3", text: "$2$" },
      { key: "4", text: "$-\\dfrac{2}{25}$" },
    ], answer: "3",
    explanation: "$\\left(-\\dfrac{2}{3}\\right)\\left(-\\dfrac{3}{5}\\right) = \\dfrac{6}{15} = \\dfrac{2}{5}$ แล้ว $\\dfrac{2}{5} \\div \\dfrac{1}{5} = \\dfrac{2}{5} \\times 5 = 2$" },

  { id: "q26", chapter: "เศษส่วน", subtopic: "การคูณหารเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\left(-\\dfrac{4}{5}\\right) \\div \\dfrac{2}{5} \\times \\left(-\\dfrac{1}{2}\\right)$",
    choices: [
      { key: "1", text: "$-1$" },
      { key: "2", text: "$1$" },
      { key: "3", text: "$\\dfrac{2}{5}$" },
      { key: "4", text: "$-\\dfrac{2}{5}$" },
    ], answer: "2",
    explanation: "$\\left(-\\dfrac{4}{5}\\right) \\times \\dfrac{5}{2} = -2$ แล้ว $-2 \\times \\left(-\\dfrac{1}{2}\\right) = 1$" },

  { id: "q27", chapter: "เศษส่วน", subtopic: "การบวกลบเศษส่วน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\dfrac{1}{6} + \\left(-\\dfrac{1}{3}\\right) + \\dfrac{1}{2}$",
    choices: [
      { key: "1", text: "$-\\dfrac{1}{3}$" },
      { key: "2", text: "$\\dfrac{5}{6}$" },
      { key: "3", text: "$\\dfrac{1}{3}$" },
      { key: "4", text: "$-\\dfrac{5}{6}$" },
    ], answer: "3",
    explanation: "ทำส่วนร่วม 6: $\\dfrac{1}{6} - \\dfrac{2}{6} + \\dfrac{3}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}$" },

  // ============ ตอนที่ 5 เลขยกกำลัง ============
  { id: "q28", chapter: "เลขยกกำลัง", subtopic: "การคูณเลขยกกำลังฐานเดียวกัน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $2^3 \\times 2^2$",
    choices: [
      { key: "1", text: "$16$" },
      { key: "2", text: "$32$" },
      { key: "3", text: "$64$" },
      { key: "4", text: "$20$" },
    ], answer: "2",
    explanation: "ฐานเดียวกันบวกเลขชี้กำลัง $2^{3+2} = 2^5 = 32$" },

  { id: "q29", chapter: "เลขยกกำลัง", subtopic: "เลขยกกำลังฐานลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(-3)^2 \\times (-3)^3$",
    choices: [
      { key: "1", text: "$243$" },
      { key: "2", text: "$729$" },
      { key: "3", text: "$-81$" },
      { key: "4", text: "$-243$" },
    ], answer: "4",
    explanation: "$(-3)^{2+3} = (-3)^5 = -243$ (เลขชี้กำลังคี่ ผลเป็นลบ)" },

  { id: "q30", chapter: "เลขยกกำลัง", subtopic: "การหารเลขยกกำลังฐานเดียวกัน", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $4^5 \\div 4^3$",
    choices: [
      { key: "1", text: "$4$" },
      { key: "2", text: "$16$" },
      { key: "3", text: "$64$" },
      { key: "4", text: "$8$" },
    ], answer: "2",
    explanation: "ฐานเดียวกันลบเลขชี้กำลัง $4^{5-3} = 4^2 = 16$" },

  { id: "q31", chapter: "เลขยกกำลัง", subtopic: "เลขยกกำลังของเลขยกกำลัง", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(2^4)^2$",
    choices: [
      { key: "1", text: "$64$" },
      { key: "2", text: "$128$" },
      { key: "3", text: "$512$" },
      { key: "4", text: "$256$" },
    ], answer: "4",
    explanation: "คูณเลขชี้กำลัง $2^{4 \\times 2} = 2^8 = 256$" },

  { id: "q32", chapter: "เลขยกกำลัง", subtopic: "เลขชี้กำลังลบ", skill: "theory", image: "",
    prompt: "จงหาผลลัพธ์ของ $5^{-2}$",
    choices: [
      { key: "1", text: "$\\dfrac{1}{25}$" },
      { key: "2", text: "$-\\dfrac{1}{25}$" },
      { key: "3", text: "$25$" },
      { key: "4", text: "$-25$" },
    ], answer: "1",
    explanation: "เลขชี้กำลังลบหมายถึงส่วนกลับ $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$" },

  { id: "q33", chapter: "เลขยกกำลัง", subtopic: "การหารเลขยกกำลังฐานลบ", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $(-2)^6 \\div (-2)^4$",
    choices: [
      { key: "1", text: "$-4$" },
      { key: "2", text: "$4$" },
      { key: "3", text: "$16$" },
      { key: "4", text: "$-16$" },
    ], answer: "2",
    explanation: "$(-2)^{6-4} = (-2)^2 = 4$" },

  { id: "q34", chapter: "เลขยกกำลัง", subtopic: "เลขชี้กำลังลบ", skill: "apply", image: "",
    prompt: "จงหาผลลัพธ์ของ $3^{-1} \\times 3^4$",
    choices: [
      { key: "1", text: "$27$" },
      { key: "2", text: "$-27$" },
      { key: "3", text: "$81$" },
      { key: "4", text: "$9$" },
    ], answer: "1",
    explanation: "$3^{-1+4} = 3^3 = 27$" },

  // ============ ตอนที่ 6 รากที่สอง ============
  { id: "q35", chapter: "รากที่สอง", subtopic: "รากที่สองของจำนวนเต็ม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\sqrt{225}$",
    choices: [
      { key: "1", text: "$12$" },
      { key: "2", text: "$25$" },
      { key: "3", text: "$16$" },
      { key: "4", text: "$15$" },
    ], answer: "4",
    explanation: "$15 \\times 15 = 225$ ดังนั้น $\\sqrt{225} = 15$" },

  { id: "q36", chapter: "รากที่สอง", subtopic: "รากที่สองของจำนวนเต็ม", skill: "calc", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\sqrt{196}$",
    choices: [
      { key: "1", text: "$13$" },
      { key: "2", text: "$49$" },
      { key: "3", text: "$14$" },
      { key: "4", text: "$28$" },
    ], answer: "3",
    explanation: "$14 \\times 14 = 196$ ดังนั้น $\\sqrt{196} = 14$" },

  { id: "q37", chapter: "รากที่สอง", subtopic: "การคูณราก", skill: "apply", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\sqrt{8} \\times \\sqrt{18}$",
    choices: [
      { key: "1", text: "$24$" },
      { key: "2", text: "$144$" },
      { key: "3", text: "$6\\sqrt{2}$" },
      { key: "4", text: "$12$" },
    ], answer: "4",
    explanation: "$\\sqrt{8} \\times \\sqrt{18} = \\sqrt{144} = 12$" },

  { id: "q38", chapter: "รากที่สอง", subtopic: "การหารราก", skill: "apply", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\sqrt{300} \\div \\sqrt{3}$",
    choices: [
      { key: "1", text: "$10$" },
      { key: "2", text: "$100$" },
      { key: "3", text: "$\\sqrt{297}$" },
      { key: "4", text: "$30$" },
    ], answer: "1",
    explanation: "$\\sqrt{300 \\div 3} = \\sqrt{100} = 10$" },

  { id: "q39", chapter: "รากที่สอง", subtopic: "การเขียนรากอย่างง่าย", skill: "apply", image: "",
    prompt: "จงหาผลลัพธ์ของ $\\sqrt{48}$ ในรูปอย่างง่าย",
    choices: [
      { key: "1", text: "$4\\sqrt{3}$" },
      { key: "2", text: "$6\\sqrt{2}$" },
      { key: "3", text: "$3\\sqrt{4}$" },
      { key: "4", text: "$8\\sqrt{3}$" },
    ], answer: "1",
    explanation: "$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$" },

  { id: "q40", chapter: "รากที่สอง", subtopic: "การคูณราก", skill: "apply", image: "",
    prompt: "จงหาผลลัพธ์ของ $3\\sqrt{2} \\times 2\\sqrt{8}$",
    choices: [
      { key: "1", text: "$48$" },
      { key: "2", text: "$24$" },
      { key: "3", text: "$12\\sqrt{2}$" },
      { key: "4", text: "$16$" },
    ], answer: "2",
    explanation: "$3 \\times 2 \\times \\sqrt{2 \\times 8} = 6\\sqrt{16} = 6 \\times 4 = 24$" },
];
