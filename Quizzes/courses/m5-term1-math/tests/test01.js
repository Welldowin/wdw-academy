// 📄 courses/m5-term1-math/tests/test01.js
// ชุดสอบ: คณิตศาสตร์ ม.5 เทอม 1 — ตรีโกณมิติและเลขยกกำลัง (30 ข้อ)

window.TEST_META = {
  courseId: "m5-term1-math",
  testKey: "test01",
  title: "Final Test : คณิตศาสตร์ ม.5 (ตรีโกณมิติและเลขยกกำลัง)",
  timeLimitSec: 5400,

  chapters: {
    "ตรีโกณมิติ": { label: "ตรีโกณมิติ" },
    "เลขยกกำลัง": { label: "เลขยกกำลัง" },
  },

  radarAxes: ["theory", "calc", "apply", "ตรีโกณมิติ", "เลขยกกำลัง"],
};

var C = [
  { key: "1", text: "ก ถูกเพียงข้อเดียว" },
  { key: "2", text: "ก และ ข" },
  { key: "3", text: "ข และ ค" },
  { key: "4", text: "ก และ ค" },
  { key: "5", text: "ก, ข และ ค" },
];

window.TEST_DATA = [
  { id: "q1", chapter: "ตรีโกณมิติ", subtopic: "วงกลมหนึ่งหน่วยพื้นฐาน", skill: "theory", image: "",
    prompt: "ลักษณะของวงกลมหนึ่งหน่วย\nพิจารณาข้อความต่อไปนี้:\nก. วงกลมหนึ่งหน่วยมีรัศมีเท่ากับ $1$ หน่วยและมีจุดศูนย์กลางที่ $(0,0)$\nข. พิกัด $(x,y)$ บนวงกลมหนึ่งหน่วยสอดคล้องกับสมการ $x^2 + y^2 = 1$\nค. ค่าสูงสุดของ $x$ บนวงกลมหนึ่งหน่วยคือ $2$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q2", chapter: "ตรีโกณมิติ", subtopic: "ค่าฟังก์ชันพื้นฐาน", skill: "calc", image: "",
    prompt: "การหาค่าฟังก์ชันตรีโกณมิติ\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$\nข. $\\cos(\\frac{\\pi}{4}) = \\frac{1}{2}$\nค. $\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q3", chapter: "ตรีโกณมิติ", subtopic: "เครื่องหมายในจตุภาค", skill: "theory", image: "",
    prompt: "เครื่องหมายของฟังก์ชันในจตุภาค (Quadrants)\nพิจารณาข้อความต่อไปนี้:\nก. ในจตุภาคที่ 2 ค่า $\\sin$ มีเครื่องหมายเป็นบวก\nข. ในจตุภาคที่ 3 ค่า $\\tan$ มีเครื่องหมายเป็นบวก\nค. ในจตุภาคที่ 4 ค่า $\\cos$ มีเครื่องหมายเป็นบวก\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q4", chapter: "ตรีโกณมิติ", subtopic: "ฟังก์ชัน sec, cosec, cot", skill: "theory", image: "",
    prompt: "นิยามของส่วนกลับฟังก์ชัน\nพิจารณาข้อความต่อไปนี้:\nก. $\\sec(\\theta)$ เป็นส่วนกลับของ $\\cos(\\theta)$ เมื่อ $\\cos(\\theta) \\neq 0$\nข. $\\csc(\\theta)$ สามารถมีค่าเท่ากับ $0$ ได้\nค. $\\cot(\\theta)$ หาค่าไม่ได้เมื่อ $\\theta = \\frac{\\pi}{2}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q5", chapter: "ตรีโกณมิติ", subtopic: "เอกลักษณ์ตรีโกณมิติ", skill: "apply", image: "",
    prompt: "เอกลักษณ์พีทาโกรัส\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin^2(\\theta) - \\cos^2(\\theta) = 1$\nข. $\\sec^2(\\theta) - \\tan^2(\\theta) = 1$\nค. $\\csc^2(\\theta) - \\cot^2(\\theta) = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q6", chapter: "ตรีโกณมิติ", subtopic: "มุมติดลบ", skill: "theory", image: "",
    prompt: "สมบัติของฟังก์ชันเมื่อมุมติดลบ\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(-\\theta) = -\\sin(\\theta)$\nข. $\\cos(-\\theta) = \\cos(\\theta)$\nค. $\\tan(-\\theta) = \\tan(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q7", chapter: "ตรีโกณมิติ", subtopic: "โคฟังก์ชัน", skill: "theory", image: "",
    prompt: "สมบัติของโคฟังก์ชัน (Cofunction)\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos(\\theta)$\nข. $\\sec(\\frac{\\pi}{2} - \\theta) = \\cot(\\theta)$\nค. $\\tan(\\frac{\\pi}{2} - \\theta) = \\cot(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q8", chapter: "ตรีโกณมิติ", subtopic: "สมการตรีโกณมิติ", skill: "calc", image: "",
    prompt: "การแก้สมการเบื้องต้น\nพิจารณาข้อความต่อไปนี้:\nก. ถ้า $\\sin(\\theta) = 1$ แล้ว $\\theta$ สามารถเป็น $\\frac{\\pi}{2}$\nข. ถ้า $\\cos(\\theta) = -1$ แล้ว $\\theta$ สามารถเป็น $\\pi$\nค. ถ้า $\\tan(\\theta) = 1$ แล้ว $\\theta$ สามารถเป็น $\\frac{5\\pi}{4}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q9", chapter: "ตรีโกณมิติ", subtopic: "กราฟและคาบ", skill: "theory", image: "",
    prompt: "คาบและแอมพลิจูดของฟังก์ชัน\nพิจารณาข้อความต่อไปนี้:\nก. ฟังก์ชัน $y = \\sin(x)$ มีคาบเท่ากับ $2\\pi$\nข. ฟังก์ชัน $y = \\tan(x)$ มีคาบเท่ากับ $2\\pi$\nค. แอมพลิจูดของ $y = \\cos(x)$ คือ $2$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q10", chapter: "ตรีโกณมิติ", subtopic: "วงกลมหนึ่งหน่วยประยุกต์", skill: "apply", image: "",
    prompt: "พิกัดจุดบนวงกลมหนึ่งหน่วย\nพิจารณาข้อความต่อไปนี้:\nก. จุด $( \\frac{\\sqrt{3}}{2}, \\frac{1}{2} )$ แทนมุม $\\frac{\\pi}{3}$ เรเดียน\nข. จุด $( -\\frac{1}{2}, \\frac{\\sqrt{3}}{2} )$ แทนมุม $\\frac{2\\pi}{3}$ เรเดียน\nค. จุด $( -\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2} )$ แทนมุม $\\frac{5\\pi}{4}$ เรเดียน\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q11", chapter: "ตรีโกณมิติ", subtopic: "ค่าฟังก์ชันมุมใหญ่", skill: "calc", image: "",
    prompt: "การหาค่าฟังก์ชันใน Q2\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$\nข. $\\cos(150^\\circ) = -\\frac{\\sqrt{3}}{2}$\nค. $\\tan(135^\\circ) = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q12", chapter: "ตรีโกณมิติ", subtopic: "เครื่องหมายในจตุภาค", skill: "apply", image: "",
    prompt: "การวิเคราะห์เครื่องหมาย\nกำหนดมุม $\\theta$ อยู่ในจตุภาคที่ 2 (Q2) พิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\theta) > 0$\nข. $\\cos(\\theta) < 0$\nค. $\\tan(\\theta) < 0$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q13", chapter: "ตรีโกณมิติ", subtopic: "เอกลักษณ์ตรีโกณมิติ", skill: "apply", image: "",
    prompt: "การประยุกต์ใช้เอกลักษณ์พื้นฐาน\nพิจารณาข้อความต่อไปนี้:\nก. $\\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\tan(\\theta)$\nข. $\\cos^2(\\theta) = 1 + \\sin^2(\\theta)$\nค. $\\sin^2(\\theta) = 1 - \\cos^2(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q14", chapter: "ตรีโกณมิติ", subtopic: "การแปลงหน่วยมุม", skill: "calc", image: "",
    prompt: "การแปลงหน่วยองศาเป็นเรเดียน\nพิจารณาข้อความต่อไปนี้:\nก. $180^\\circ$ เท่ากับ $\\pi$ เรเดียน\nข. $90^\\circ$ เท่ากับ $\\frac{\\pi}{4}$ เรเดียน\nค. $60^\\circ$ เท่ากับ $\\frac{\\pi}{2}$ เรเดียน\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q15", chapter: "ตรีโกณมิติ", subtopic: "ค่าฟังก์ชันมุมใหญ่", skill: "calc", image: "",
    prompt: "การหาค่ามุมที่มากกว่า 360 องศา\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(390^\\circ) = \\sin(30^\\circ)$\nข. $\\cos(405^\\circ) = \\cos(45^\\circ)$\nค. $\\tan(420^\\circ) = \\tan(30^\\circ)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q16", chapter: "ตรีโกณมิติ", subtopic: "โดเมนและเรนจ์", skill: "theory", image: "",
    prompt: "โดเมนและเรนจ์ของฟังก์ชันตรีโกณมิติ\nพิจารณาข้อความต่อไปนี้:\nก. เรนจ์ของฟังก์ชัน $\\sin$ คือ $(-\\infty, \\infty)$\nข. โดเมนของฟังก์ชัน $\\cos$ คือเซตของจำนวนจริงทั้งหมด\nค. โดเมนของฟังก์ชัน $\\tan$ ไม่รวมค่า $x = \\frac{\\pi}{2} + n\\pi$ (เมื่อ $n$ เป็นจำนวนเต็ม)\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q17", chapter: "ตรีโกณมิติ", subtopic: "สามเหลี่ยมมุมฉาก", skill: "apply", image: "",
    prompt: "อัตราส่วนในสามเหลี่ยมมุมฉาก\nให้สามเหลี่ยมมุมฉาก $ABC$ มีมุม $C=90^\\circ$ (ด้านตรงข้ามมุม $A, B, C$ คือ $a, b, c$ ตามลำดับ)\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(A) = \\frac{a}{c}$\nข. $\\cos(A) = \\frac{b}{c}$\nค. $\\sin^2(A) + \\cos^2(A) = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q18", chapter: "ตรีโกณมิติ", subtopic: "การยุบมุม", skill: "calc", image: "",
    prompt: "การจัดรูปฟังก์ชันด้วยมุม $\\pi - \\theta$\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\pi - \\theta) = \\sin(\\theta)$\nข. $\\cos(\\pi - \\theta) = \\cos(\\theta)$\nค. $\\tan(\\pi - \\theta) = -\\tan(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q19", chapter: "ตรีโกณมิติ", subtopic: "ค่าฟังก์ชันบนแกน", skill: "theory", image: "",
    prompt: "ค่าฟังก์ชันที่มุมบนแนวแกน x และ y\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\pi) = 0$\nข. $\\cos(2\\pi) = 1$\nค. $\\tan(\\frac{3\\pi}{2}) = 0$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q20", chapter: "ตรีโกณมิติ", subtopic: "ฟังก์ชัน sec, cosec, cot", skill: "calc", image: "",
    prompt: "การหาค่าส่วนกลับ\nพิจารณาข้อความต่อไปนี้:\nก. $\\sec(\\frac{\\pi}{3}) = 2$\nข. $\\csc(\\frac{\\pi}{6}) = \\frac{1}{2}$\nค. $\\cot(\\frac{\\pi}{4}) = \\sqrt{2}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q21", chapter: "ตรีโกณมิติ", subtopic: "การยุบมุม", skill: "apply", image: "",
    prompt: "การจัดรูปฟังก์ชันด้วยมุม $\\pi + \\theta$\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\pi + \\theta) = -\\sin(\\theta)$\nข. $\\cos(\\pi + \\theta) = -\\cos(\\theta)$\nค. $\\tan(\\pi + \\theta) = \\tan(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q22", chapter: "ตรีโกณมิติ", subtopic: "โคฟังก์ชัน", skill: "theory", image: "",
    prompt: "สมบัติเพิ่มเติมของโคฟังก์ชัน\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin(\\theta) = \\cos(-\\theta)$\nข. $\\csc(\\frac{\\pi}{2} - \\theta) = \\sec(\\theta)$\nค. $\\cot(\\frac{\\pi}{2} - \\theta) = \\tan(\\theta)$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q23", chapter: "ตรีโกณมิติ", subtopic: "เอกลักษณ์ตรีโกณมิติ", skill: "apply", image: "",
    prompt: "การประยุกต์ใช้เอกลักษณ์กับค่าคงที่\nพิจารณาข้อความต่อไปนี้:\nก. $\\sin^2(15^\\circ) + \\cos^2(15^\\circ) = 1$\nข. $\\sec^2(20^\\circ) - \\tan^2(20^\\circ) = 1$\nค. $\\csc^2(30^\\circ) + \\cot^2(30^\\circ) = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q24", chapter: "ตรีโกณมิติ", subtopic: "กราฟและคาบ", skill: "theory", image: "",
    prompt: "การหาคาบจากสมการฟังก์ชัน\nพิจารณาข้อความต่อไปนี้:\nก. คาบของ $y = \\sin(2x)$ คือ $\\pi$\nข. คาบของ $y = \\cos(\\frac{x}{2})$ คือ $\\pi$\nค. คาบของ $y = \\tan(x)$ คือ $\\pi$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q25", chapter: "เลขยกกำลัง", subtopic: "กฎของเลขยกกำลัง", skill: "theory", image: "",
    prompt: "ทฤษฎีบทเลขยกกำลังพื้นฐาน\nพิจารณาข้อความต่อไปนี้:\nก. $a^m \\times a^n = a^{m+n}$\nข. $(a^m)^n = a^{mn}$\nค. $(ab)^n = a^n b^n$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },

  { id: "q26", chapter: "เลขยกกำลัง", subtopic: "เลขชี้กำลังเป็นศูนย์และลบ", skill: "theory", image: "",
    prompt: "นิยามของเลขชี้กำลังแบบพิเศษ\nพิจารณาข้อความต่อไปนี้:\nก. $a^0 = 1$ เมื่อ $a \\neq 0$\nข. $a^{-n} = -a^n$\nค. $0^0 = 1$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "1" },

  { id: "q27", chapter: "เลขยกกำลัง", subtopic: "การคำนวณเบื้องต้น", skill: "calc", image: "",
    prompt: "การหาค่าของเลขยกกำลัง\nพิจารณาข้อความต่อไปนี้:\nก. $2^3 \\times 2^2 = 32$\nข. $(3^2)^3 = 729$\nค. $4^{-1} = -4$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "2" },

  { id: "q28", chapter: "เลขยกกำลัง", subtopic: "เลขชี้กำลังเป็นเศษส่วน", skill: "apply", image: "",
    prompt: "ความสัมพันธ์ระหว่างเลขยกกำลังกับกรณฑ์\nพิจารณาข้อความต่อไปนี้:\nก. $a^{\\frac{1}{2}} = a^2$\nข. $a^{\\frac{1}{3}} = \\sqrt[3]{a}$\nค. $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "3" },

  { id: "q29", chapter: "เลขยกกำลัง", subtopic: "สมการเลขยกกำลัง", skill: "calc", image: "",
    prompt: "การแก้สมการเลขยกกำลังอย่างง่าย\nพิจารณาข้อความต่อไปนี้:\nก. ถ้า $2^x = 16$ แล้ว $x = 4$\nข. ถ้า $3^x = 1$ แล้ว $x = 1$\nค. ถ้า $5^{x+1} = 125$ แล้ว $x = 2$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "4" },

  { id: "q30", chapter: "เลขยกกำลัง", subtopic: "โจทย์ประยุกต์เลขยกกำลัง", skill: "apply", image: "",
    prompt: "การหาค่าเลขยกกำลังที่เป็นเศษส่วน\nพิจารณาข้อความต่อไปนี้:\nก. $8^{\\frac{2}{3}} = 4$\nข. $16^{\\frac{3}{4}} = 8$\nค. $27^{\\frac{1}{3}} = 3$\n\nข้อใดกล่าวถูกต้อง",
    choices: C, answer: "5" },
];
