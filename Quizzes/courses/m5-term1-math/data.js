window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
  meta: {
    courseId: "m5-term1-math",
    quizKey: "quiz1",
    title: "Quiz 1 : ฟังก์ชันตรีโกณมิติเบื้องต้นและวงกลมหนึ่งหน่วย (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- การแปลงมุมเป็นเฟส และเฟสเป็นมุม (ข้อ 1-5) ---
    {
      id: "q1",
      prompt: `มุม $30^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\frac{\\pi}{6}$` },
        { key: "B", text: `$\\frac{\\pi}{4}$` },
        { key: "C", text: `$\\frac{\\pi}{3}$` },
        { key: "D", text: `$\\frac{\\pi}{2}$` }
      ],
      answer: "A"
    },
    {
      id: "q2",
      prompt: `มุม $\\frac{3\\pi}{4}$ เรเดียน มีขนาดเท่ากับกี่องศา?`,
      choices: [
        { key: "A", text: `$120^\\circ$` },
        { key: "B", text: `$135^\\circ$` },
        { key: "C", text: `$150^\\circ$` },
        { key: "D", text: `$210^\\circ$` }
      ],
      answer: "B"
    },
    {
      id: "q3",
      prompt: `มุม $120^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\frac{2\\pi}{3}$` },
        { key: "B", text: `$\\frac{3\\pi}{4}$` },
        { key: "C", text: `$\\frac{5\\pi}{6}$` },
        { key: "D", text: `$\\frac{4\\pi}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q4",
      prompt: `มุม $\\frac{5\\pi}{6}$ เรเดียน มีขนาดเท่ากับกี่องศา?`,
      choices: [
        { key: "A", text: `$120^\\circ$` },
        { key: "B", text: `$135^\\circ$` },
        { key: "C", text: `$150^\\circ$` },
        { key: "D", text: `$210^\\circ$` }
      ],
      answer: "C"
    },
    {
      id: "q5",
      prompt: `มุม $270^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\pi$` },
        { key: "B", text: `$\\frac{3\\pi}{2}$` },
        { key: "C", text: `$\\frac{5\\pi}{4}$` },
        { key: "D", text: `$2\\pi$` }
      ],
      answer: "B"
    },

    // --- ค่าฟังก์ชันตรีโกณมิติพื้นฐาน 0, 30, 45, 60, 90 (ข้อ 6-10) ---
    {
      id: "q6",
      prompt: `ค่าของ $\\sin(30^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{2}$` },
        { key: "B", text: `$\\frac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\frac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q7",
      prompt: `ค่าของ $\\cos(60^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{2}$` },
        { key: "B", text: `$\\frac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\frac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q8",
      prompt: `ค่าของ $\\tan(45^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{\\sqrt{3}}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\sqrt{3}$` },
        { key: "D", text: `หาค่าไม่ได้` }
      ],
      answer: "B"
    },
    {
      id: "q9",
      prompt: `ค่าของ $\\sin(90^\\circ) + \\cos(0^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$2$` },
        { key: "D", text: `$-1$` }
      ],
      answer: "C"
    },
    {
      id: "q10",
      prompt: `ค่าของ $\\tan(60^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{\\sqrt{3}}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\sqrt{3}$` },
        { key: "D", text: `หาค่าไม่ได้` }
      ],
      answer: "C"
    },

    // --- ค่ามุม 37 และ 53 (ข้อ 11-13) ---
    {
      id: "q11",
      prompt: `ค่าประมาณของ $\\sin(37^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{3}{5}$` },
        { key: "B", text: `$\\frac{4}{5}$` },
        { key: "C", text: `$\\frac{3}{4}$` },
        { key: "D", text: `$\\frac{4}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q12",
      prompt: `ค่าประมาณของ $\\cos(53^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{3}{5}$` },
        { key: "B", text: `$\\frac{4}{5}$` },
        { key: "C", text: `$\\frac{3}{4}$` },
        { key: "D", text: `$\\frac{4}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q13",
      prompt: `ค่าประมาณของ $\\tan(37^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\frac{3}{5}$` },
        { key: "B", text: `$\\frac{4}{5}$` },
        { key: "C", text: `$\\frac{3}{4}$` },
        { key: "D", text: `$\\frac{4}{3}$` }
      ],
      answer: "C"
    },

    // --- เครื่องหมายและจตุภาค (Quadrant) (ข้อ 14-18) ---
    {
      id: "q14",
      prompt: `มุม $150^\\circ$ ตกอยู่ในจตุภาค (Quadrant) ใดของวงกลมหนึ่งหน่วย?`,
      choices: [
        { key: "A", text: `จตุภาคที่ 1` },
        { key: "B", text: `จตุภาคที่ 2` },
        { key: "C", text: `จตุภาคที่ 3` },
        { key: "D", text: `จตุภาคที่ 4` }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `ในจตุภาคที่ 3 (Quadrant 3) ฟังก์ชันตรีโกณมิติใดมีค่าเป็นบวก?`,
      choices: [
        { key: "A", text: `$\\sin$` },
        { key: "B", text: `$\\cos$` },
        { key: "C", text: `$\\tan$` },
        { key: "D", text: `เป็นบวกทุกฟังก์ชัน` }
      ],
      answer: "C"
    },
    {
      id: "q16",
      prompt: `ถ้า $\\sin(\\theta) < 0$ และ $\\cos(\\theta) > 0$ แล้ว มุม $\\theta$ จะอยู่ในจตุภาคใด?`,
      choices: [
        { key: "A", text: `จตุภาคที่ 1` },
        { key: "B", text: `จตุภาคที่ 2` },
        { key: "C", text: `จตุภาคที่ 3` },
        { key: "D", text: `จตุภาคที่ 4` }
      ],
      answer: "D"
    },
    {
      id: "q17",
      prompt: `มุม $\\frac{7\\pi}{4}$ เรเดียน ตกอยู่ในจตุภาคใด?`,
      choices: [
        { key: "A", text: `จตุภาคที่ 1` },
        { key: "B", text: `จตุภาคที่ 2` },
        { key: "C", text: `จตุภาคที่ 3` },
        { key: "D", text: `จตุภาคที่ 4` }
      ],
      answer: "D"
    },
    {
      id: "q18",
      prompt: `สำหรับมุม $\\frac{4\\pi}{3}$ เรเดียน เครื่องหมายของฟังก์ชัน $(\\cos, \\sin)$ คือข้อใดตามลำดับ?`,
      choices: [
        { key: "A", text: `$(+, +)$` },
        { key: "B", text: `$(-, +)$` },
        { key: "C", text: `$(-, -)$` },
        { key: "D", text: `$(+, -)$` }
      ],
      answer: "C"
    },

    // --- คู่อันดับ (x, y) บนวงกลมหนึ่งหน่วย (ข้อ 19-23) ---
    {
      id: "q19",
      prompt: `คู่อันดับ $(x, y)$ บนวงกลมหนึ่งหน่วยที่สอดคล้องกับมุม $0$ เรเดียน คือข้อใด?`,
      choices: [
        { key: "A", text: `$(0, 1)$` },
        { key: "B", text: `$(1, 0)$` },
        { key: "C", text: `$(0, -1)$` },
        { key: "D", text: `$(-1, 0)$` }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `จุดปลายส่วนโค้งที่ยาว $\\frac{\\pi}{2}$ หน่วยบนวงกลมหนึ่งหน่วย คือคู่อันดับใด?`,
      choices: [
        { key: "A", text: `$(0, 1)$` },
        { key: "B", text: `$(1, 0)$` },
        { key: "C", text: `$(0, -1)$` },
        { key: "D", text: `$(-1, 0)$` }
      ],
      answer: "A"
    },
    {
      id: "q21",
      prompt: `คู่อันดับ $(x, y)$ ที่สอดคล้องกับมุม $180^\\circ$ คือข้อใด?`,
      choices: [
        { key: "A", text: `$(0, 1)$` },
        { key: "B", text: `$(1, 0)$` },
        { key: "C", text: `$(0, -1)$` },
        { key: "D", text: `$(-1, 0)$` }
      ],
      answer: "D"
    },
    {
      id: "q22",
      prompt: `คู่อันดับ $(x, y)$ ที่สอดคล้องกับมุม $\\frac{\\pi}{4}$ เรเดียน คือข้อใด?`,
      choices: [
        { key: "A", text: `$(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$` },
        { key: "B", text: `$(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$` },
        { key: "C", text: `$(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$` },
        { key: "D", text: `$(1, 1)$` }
      ],
      answer: "C"
    },
    {
      id: "q23",
      prompt: `คู่อันดับ $(x, y)$ บนวงกลมหนึ่งหน่วยที่สอดคล้องกับมุม $330^\\circ$ คือข้อใด?`,
      choices: [
        { key: "A", text: `$(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$` },
        { key: "B", text: `$(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2})$` },
        { key: "C", text: `$(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$` },
        { key: "D", text: `$(-\\frac{\\sqrt{3}}{2}, -\\frac{1}{2})$` }
      ],
      answer: "B"
    },

    // --- สมการและการคำนวณพื้นฐาน (ข้อ 24-30) ---
    {
      id: "q24",
      prompt: `ผลลัพธ์ของ $\\sin^2(45^\\circ) + \\cos^2(45^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$\\frac{1}{2}$` },
        { key: "C", text: `$1$` },
        { key: "D", text: `$2$` }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `ผลลัพธ์ของ $2\\sin(30^\\circ)\\cos(30^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{2}$` },
        { key: "B", text: `$\\frac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\frac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `ผลลัพธ์ของ $\\cos^2(60^\\circ) - \\sin^2(60^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$-\\frac{1}{2}$` },
        { key: "B", text: `$0$` },
        { key: "C", text: `$\\frac{1}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q27",
      prompt: `ผลลัพธ์ของ $\\tan^2(60^\\circ) - 1$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$2$` },
        { key: "D", text: `$3$` }
      ],
      answer: "C"
    },
    {
      id: "q28",
      prompt: `ผลลัพธ์ของ $\\sin(30^\\circ) + \\cos(60^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$\\frac{1}{2}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\frac{3}{2}$` },
        { key: "D", text: `$2$` }
      ],
      answer: "B"
    },
    {
      id: "q29",
      prompt: `ผลลัพธ์ของ $4\\cos(60^\\circ) + 2\\sin(30^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$1$` },
        { key: "B", text: `$2$` },
        { key: "C", text: `$3$` },
        { key: "D", text: `$4$` }
      ],
      answer: "C"
    },
    {
      id: "q30",
      prompt: `ผลลัพธ์ของ $\\cos(37^\\circ)\\sin(53^\\circ) + \\sin(37^\\circ)\\cos(53^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$\\frac{12}{25}$` },
        { key: "C", text: `$1$` },
        { key: "D", text: `$\\frac{24}{25}$` }
      ],
      answer: "C"
    }
  ]
},
  
  "quiz2": {
  meta: {
    courseId: "m5-term1-math",
    quizKey: "quiz2",
    title: "Quiz 2 : ฟังก์ชันตรีโกณมิติ (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- พหุคูณของมุมและมุมติดลบ (ข้อ 1-10) ---
    {
      id: "q1",
      prompt: `ค่าของ $\\sin(450^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "$\\frac{1}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q2",
      prompt: `ค่าของ $\\cos(720^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "หาค่าไม่ได้" }
      ],
      answer: "B"
    },
    {
      id: "q3",
      prompt: `ค่าของ $\\tan(-45^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$\\frac{\\sqrt{2}}{2}$" },
        { key: "D", text: "$-\\frac{\\sqrt{2}}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q4",
      prompt: `$\\sin(-300^\circ)$ มีค่าตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "B", text: "$-\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\frac{1}{2}$" },
        { key: "D", text: "$-\\frac{1}{2}$" }
      ],
      answer: "A"
    },
    {
      id: "q5",
      prompt: `ค่าของ $\\cos(-120^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$-\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "D", text: "$-\\frac{\\sqrt{3}}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q6",
      prompt: `$\\tan(1125^\circ)$ มีค่าเท่ากับเท่าใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$\frac{1}{\sqrt{3}}$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$\sqrt{3}$" }
      ],
      answer: "C"
    },
    {
      id: "q7",
      prompt: `ถ้า $\\theta = -90^\circ$ แล้วค่าของ $\\sin\\theta + \\cos\\theta$ คือข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "$-2$" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `$\\cos(390^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$-\\frac{1}{2}$" },
        { key: "D", text: "$-\\frac{\\sqrt{3}}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q9",
      prompt: `$\\sin(-150^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$-\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$-\\frac{\\sqrt{3}}{2}$" },
        { key: "D", text: "$\\frac{\\sqrt{3}}{2}$" }
      ],
      answer: "A"
    },
    {
      id: "q10",
      prompt: `ค่าของ $\\tan(-240^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\sqrt{3}$" },
        { key: "B", text: "$-\\sqrt{3}$" },
        { key: "C", text: "$\\frac{1}{\\sqrt{3}}$" },
        { key: "D", text: "$-\\frac{1}{\\sqrt{3}}$" }
      ],
      answer: "B"
    },

    // --- ฟังก์ชันส่วนกลับ cosec, sec, cot (ข้อ 11-15) ---
    {
      id: "q11",
      prompt: `ค่าของ $\\sec(60^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{2}{\\sqrt{3}}$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$\\sqrt{2}$" }
      ],
      answer: "C"
    },
    {
      id: "q12",
      prompt: `$\\csc(30^\circ) + \\cot(45^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$1 + \\sqrt{2}$" },
        { key: "D", text: "$\\frac{2}{\\sqrt{3}} + 1$" }
      ],
      answer: "B"
    },
    {
      id: "q13",
      prompt: `ค่าของ $\\cot(-30^\circ)$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sqrt{3}$" },
        { key: "B", text: "$-\\sqrt{3}$" },
        { key: "C", text: "$\\frac{1}{\\sqrt{3}}$" },
        { key: "D", text: "$-\\frac{1}{\\sqrt{3}}$" }
      ],
      answer: "B"
    },
    {
      id: "q14",
      prompt: `$\\sec(135^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\sqrt{2}$" },
        { key: "B", text: "$-\\sqrt{2}$" },
        { key: "C", text: "$\\frac{2}{\\sqrt{3}}$" },
        { key: "D", text: "$-\\frac{2}{\\sqrt{3}}$" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `ข้อใดต่อไปนี้คือค่าของ $\\csc(270^\circ)$`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "หาค่าไม่ได้" }
      ],
      answer: "C"
    },

    // --- แก้สมการ (ข้อ 16-20) ---
    {
      id: "q16",
      prompt: `ถ้า $2\\sin\\theta - 1 = 0$ เมื่อ $0^\circ \\le \\theta \\le 90^\circ$ แล้ว $\\theta$ มีค่ากี่องศา`,
      choices: [
        { key: "A", text: "$30^\circ$" },
        { key: "B", text: "$45^\circ$" },
        { key: "C", text: "$60^\circ$" },
        { key: "D", text: "$90^\circ$" }
      ],
      answer: "A"
    },
    {
      id: "q17",
      prompt: `กำหนดให้ $\\sqrt{3}\\tan\\theta = 1$ และ $180^\circ < \\theta < 270^\circ$ จงหาค่า $\\theta$`,
      choices: [
        { key: "A", text: "$210^\circ$" },
        { key: "B", text: "$225^\circ$" },
        { key: "C", text: "$240^\circ$" },
        { key: "D", text: "$300^\circ$" }
      ],
      answer: "A"
    },
    {
      id: "q18",
      prompt: `ถ้า $\\sec\\theta = -2$ และ $90^\circ < \\theta < 180^\circ$ แล้ว $\\theta$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$120^\circ$" },
        { key: "B", text: "$135^\circ$" },
        { key: "C", text: "$150^\circ$" },
        { key: "D", text: "$180^\circ$" }
      ],
      answer: "A"
    },
    {
      id: "q19",
      prompt: `จากสมการ $\\cos^2\\theta = 1$ เมื่อ $0^\circ \\le \\theta < 360^\circ$ เซตคำตอบของ $\\theta$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{0^\circ\\}$" },
        { key: "B", text: "$\\{0^\circ, 180^\circ\\}$" },
        { key: "C", text: "$\\{90^\circ, 270^\circ\\}$" },
        { key: "D", text: "$\\{0^\circ, 90^\circ, 180^\circ\\}$" }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `จงหาค่า $\\theta$ ที่ทำให้ $\\cot\\theta = -1$ เมื่อ $270^\circ < \\theta < 360^\circ$`,
      choices: [
        { key: "A", text: "$300^\circ$" },
        { key: "B", text: "$315^\circ$" },
        { key: "C", text: "$330^\circ$" },
        { key: "D", text: "$345^\circ$" }
      ],
      answer: "B"
    },

    // --- สูตร cos(A+B) และ sin(A-B) (ข้อ 21-25) ---
    {
      id: "q21",
      prompt: `ค่าของ $\\cos(60^\circ + 30^\circ)$ โดยใช้สูตร $\\cos(A+B)$ จะมีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$\\cos 60^\circ \\cos 30^\circ - \\sin 60^\circ \\sin 30^\circ$" },
        { key: "B", text: "$\\cos 60^\circ \\cos 30^\circ + \\sin 60^\circ \\sin 30^\circ$" },
        { key: "C", text: "$\\sin 60^\circ \\cos 30^\circ - \\cos 60^\circ \\sin 30^\circ$" },
        { key: "D", text: "$\\cos 60^\circ + \\cos 30^\circ$" }
      ],
      answer: "A"
    },
    {
      id: "q22",
      prompt: `จงหาค่าของ $\\sin(15^\circ)$ โดยใช้สูตร $\\sin(45^\circ - 30^\circ)$`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$" },
        { key: "B", text: "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$" },
        { key: "C", text: "$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$" },
        { key: "D", text: "$\\frac{\\sqrt{3}-1}{2}$" }
      ],
      answer: "A"
    },
    {
      id: "q23",
      prompt: `$\\cos 75^\circ$ มีค่าเท่ากับข้อใด (คำใบ้: $75 = 45+30$)`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$" },
        { key: "B", text: "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$" },
        { key: "C", text: "$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$" },
        { key: "D", text: "$\\frac{1}{4}$" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `ค่าของ $\\sin 70^\circ \\cos 40^\circ - \\cos 70^\circ \\sin 40^\circ$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin 110^\circ$" },
        { key: "B", text: "$\\cos 30^\circ$" },
        { key: "C", text: "$\\sin 30^\circ$" },
        { key: "D", text: "$\\sin 40^\circ$" }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `ค่าของ $\\cos 20^\circ \\cos 10^\circ - \\sin 20^\circ \\sin 10^\circ$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\cos 30^\circ$" },
        { key: "B", text: "$\\sin 30^\circ$" },
        { key: "C", text: "$\\cos 10^\circ$" },
        { key: "D", text: "$\\sin 10^\circ$" }
      ],
      answer: "A"
    },

    // --- ผสมผสาน/ทบทวน (ข้อ 26-30) ---
    {
      id: "q26",
      prompt: `ถ้า $\\sin\\theta = \\frac{3}{5}$ และ $90^\circ < \\theta < 180^\circ$ แล้ว $\\cos\\theta$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$\\frac{4}{5}$" },
        { key: "B", text: "$-\\frac{4}{5}$" },
        { key: "C", text: "$\\frac{3}{4}$" },
        { key: "D", text: "$-\\frac{3}{4}$" }
      ],
      answer: "B"
    },
    {
      id: "q27",
      prompt: `$\\tan(-315^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$\\sqrt{3}$" },
        { key: "D", text: "$-\\sqrt{3}$" }
      ],
      answer: "A"
    },
    {
      id: "q28",
      prompt: `$\\sec(-60^\circ)$ มีค่าเท่ากับข้อใด`,
      choices: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$-2$" },
        { key: "C", text: "$\\frac{2}{\\sqrt{3}}$" },
        { key: "D", text: "$-\\frac{2}{\\sqrt{3}}$" }
      ],
      answer: "A"
    },
    {
      id: "q29",
      prompt: `ค่าของ $\\cos(180^\circ - \\theta)$ มีค่าเท่ากับข้อใดเสมอ`,
      choices: [
        { key: "A", text: "$\\cos\\theta$" },
        { key: "B", text: "$-\\cos\\theta$" },
        { key: "C", text: "$\\sin\\theta$" },
        { key: "D", text: "$-\\sin\\theta$" }
      ],
      answer: "B"
    },
    {
      id: "q30",
      prompt: `จงหาค่าของ $\\csc(-30^\circ) \\cdot \\sin(390^\circ)$`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$-2$" }
      ],
      answer: "B"
    }
  ]
},
  "quiz3": {
  meta: {
    courseId: "m5-term1-math",
    quizKey: "quiz3",
    title: "Quiz 3 : วงกลมหนึ่งหน่วย มุมพิเศษ และเอกลักษณ์ตรีโกณมิติ (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- ตอนที่ 1: วงกลมหนึ่งหน่วยและควอดรันต์ (ข้อ 1-5) ---
    {
      id: "q1",
      prompt: `บนวงกลมหนึ่งหน่วย (Unit Circle) จุดปลายส่วนโค้งที่ยาว $\\theta$ หน่วย จะมีพิกัด $(x, y)$ ตรงกับฟังก์ชันตรีโกณมิติในข้อใด?`,
      choices: [
        { key: "A", text: "$(\\sin\\theta, \\cos\\theta)$" },
        { key: "B", text: "$(\\cos\\theta, \\sin\\theta)$" },
        { key: "C", text: "$(\\tan\\theta, \\cot\\theta)$" },
        { key: "D", text: "$(\\sec\\theta, \\text{cosec}\\theta)$" }
      ],
      answer: "B"
    },
    {
      id: "q2",
      prompt: `มุม $\\theta$ ในจตุภาค (Quadrant) ใดที่ทำให้ฟังก์ชัน $\\sin\\theta$ มีค่าเป็นบวก และ $\\cos\\theta$ มีค่าเป็นลบ?`,
      choices: [
        { key: "A", text: "จตุภาคที่ 1" },
        { key: "B", text: "จตุภาคที่ 2" },
        { key: "C", text: "จตุภาคที่ 3" },
        { key: "D", text: "จตุภาคที่ 4" }
      ],
      answer: "B"
    },
    {
      id: "q3",
      prompt: `ถ้ามุม $\\theta$ อยู่ในจตุภาคที่ 3 (Quadrant 3) ฟังก์ชันในข้อใดต่อไปนี้มีค่าเป็น **บวก**?`,
      choices: [
        { key: "A", text: "$\\sin\\theta$ และ $\\text{cosec}\\theta$" },
        { key: "B", text: "$\\cos\\theta$ และ $\\sec\\theta$" },
        { key: "C", text: "$\\tan\\theta$ และ $\\cot\\theta$" },
        { key: "D", text: "ไม่มีฟังก์ชันใดมีค่าเป็นบวกเลย" }
      ],
      answer: "C"
    },
    {
      id: "q4",
      prompt: `พิกัด $(x,y)$ บนวงกลมหนึ่งหน่วยของมุม $270^\\circ$ หรือ $\\frac{3\\pi}{2}$ เรเดียน คือข้อใด?`,
      choices: [
        { key: "A", text: "$(1, 0)$" },
        { key: "B", text: "$(0, 1)$" },
        { key: "C", text: "$(-1, 0)$" },
        { key: "D", text: "$(0, -1)$" }
      ],
      answer: "D"
    },
    {
      id: "q5",
      prompt: `กำหนดให้ $\\sin\\theta = \\frac{3}{5}$ และ $\\theta$ อยู่ในจตุภาคที่ 2 ค่าของ $\\cos\\theta$ คือเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{4}{5}$" },
        { key: "B", text: "$-\\frac{4}{5}$" },
        { key: "C", text: "$\\frac{3}{4}$" },
        { key: "D", text: "$-\\frac{3}{4}$" }
      ],
      answer: "B"
    },

    // --- ตอนที่ 2: มุมพิเศษ (Q1) (ข้อ 6-10) ---
    {
      id: "q6",
      prompt: `ค่าของ $\\sin(30^\\circ) + \\cos(60^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\sqrt{3}$" },
        { key: "D", text: "$2$" }
      ],
      answer: "A"
    },
    {
      id: "q7",
      prompt: `ค่าของ $\\tan(45^\\circ) \\times \\cot(45^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$\\sqrt{2}$" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `ค่าของ $\\sec(60^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\sqrt{2}$" },
        { key: "D", text: "$2$" }
      ],
      answer: "D"
    },
    {
      id: "q9",
      prompt: `ค่าของ $\\text{cosec}\\left(\\frac{\\pi}{4}\\right)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{2}}{2}$" },
        { key: "B", text: "$\\sqrt{2}$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$1$" }
      ],
      answer: "B"
    },
    {
      id: "q10",
      prompt: `ค่าของ $\\sin\\left(\\frac{\\pi}{3}\\right) \\times \\tan\\left(\\frac{\\pi}{6}\\right)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\frac{1}{4}$" },
        { key: "D", text: "$1$" }
      ],
      answer: "A"
    },

    // --- ตอนที่ 3: มุมพิเศษ (Q2, Q3, Q4) (ข้อ 11-15) ---
    {
      id: "q11",
      prompt: `ค่าของ $\\sin(120^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$-\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "D", text: "$-\\frac{\\sqrt{3}}{2}$" }
      ],
      answer: "C"
    },
    {
      id: "q12",
      prompt: `ค่าของ $\\cos(135^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{2}}{2}$" },
        { key: "B", text: "$-\\frac{\\sqrt{2}}{2}$" },
        { key: "C", text: "$\\frac{1}{2}$" },
        { key: "D", text: "$-\\frac{1}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q13",
      prompt: `ค่าของ $\\tan(225^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$\\sqrt{3}$" },
        { key: "D", text: "$-\\sqrt{3}$" }
      ],
      answer: "A"
    },
    {
      id: "q14",
      prompt: `ค่าของ $\\cos(300^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "B", text: "$-\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$\\frac{1}{2}$" },
        { key: "D", text: "$-\\frac{1}{2}$" }
      ],
      answer: "C"
    },
    {
      id: "q15",
      prompt: `ค่าของ $\\sin\\left(\\frac{7\\pi}{6}\\right)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$-\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "D", text: "$-\\frac{\\sqrt{3}}{2}$" }
      ],
      answer: "B"
    },

    // --- ตอนที่ 4: มุมรูปสามเหลี่ยม 3-4-5 (มุม 37° และ 53°) (ข้อ 16-20) ---
    {
      id: "q16",
      prompt: `โดยประมาณแล้ว ค่าของ $\\sin(37^\\circ)$ มีค่าตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$\\frac{3}{5}$" },
        { key: "B", text: "$\\frac{4}{5}$" },
        { key: "C", text: "$\\frac{3}{4}$" },
        { key: "D", text: "$\\frac{4}{3}$" }
      ],
      answer: "A"
    },
    {
      id: "q17",
      prompt: `ค่าของ $\\cos(53^\\circ) + \\sin(37^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$\\frac{6}{5}$" },
        { key: "C", text: "$\\frac{7}{5}$" },
        { key: "D", text: "$\\frac{8}{5}$" }
      ],
      answer: "B"
    },
    {
      id: "q18",
      prompt: `ค่าของ $\\tan(37^\\circ) \\times \\tan(53^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{9}{16}$" },
        { key: "B", text: "$\\frac{16}{9}$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$0$" }
      ],
      answer: "C"
    },
    {
      id: "q19",
      prompt: `ค่าของ $\\sec(37^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{5}{3}$" },
        { key: "B", text: "$\\frac{5}{4}$" },
        { key: "C", text: "$\\frac{4}{3}$" },
        { key: "D", text: "$\\frac{3}{4}$" }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `ค่าของ $\\text{cosec}(53^\\circ) - \\cot(53^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{4}$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{3}{4}$" },
        { key: "D", text: "$1$" }
      ],
      answer: "B"
    },

    // --- ตอนที่ 5: สมการและการประเมินค่าฟังก์ชัน (ข้อ 21-25) ---
    {
      id: "q21",
      prompt: `ค่าของ $\\sin^2(45^\\circ) + \\cos^2(45^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$\\frac{\\sqrt{2}}{2}$" },
        { key: "D", text: "$2$" }
      ],
      answer: "B"
    },
    {
      id: "q22",
      prompt: `ค่าของ $\\sin^2(30^\\circ) + \\tan(135^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$-\\frac{3}{4}$" },
        { key: "B", text: "$-\\frac{1}{4}$" },
        { key: "C", text: "$\\frac{1}{4}$" },
        { key: "D", text: "$\\frac{5}{4}$" }
      ],
      answer: "A"
    },
    {
      id: "q23",
      prompt: `ค่าของ $\\sin^2(37^\\circ) + \\frac{\\tan(135^\\circ)}{\\sec(240^\\circ)}$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{18}{25}$" },
        { key: "B", text: "$\\frac{19}{50}$" },
        { key: "C", text: "$\\frac{43}{50}$" },
        { key: "D", text: "$-\\frac{7}{50}$" }
      ],
      answer: "C"
    },
    {
      id: "q24",
      prompt: `ค่าของ $\\cos^2(60^\\circ) + \\text{cosec}(210^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$-\\frac{7}{4}$" },
        { key: "B", text: "$-\\frac{3}{4}$" },
        { key: "C", text: "$\\frac{5}{4}$" },
        { key: "D", text: "$\\frac{9}{4}$" }
      ],
      answer: "A"
    },
    {
      id: "q25",
      prompt: `ค่าของ $2\\sin(30^\\circ)\\cos(30^\\circ) - \\sin(60^\\circ)$ เท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$\\frac{1}{2}$" },
        { key: "C", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "D", text: "$1$" }
      ],
      answer: "A"
    },

    // --- ตอนที่ 6: เอกลักษณ์ตรีโกณมิติง่ายๆ (ข้อ 26-30) ---
    {
      id: "q26",
      prompt: `จากเอกลักษณ์ตรีโกณมิติพื้นฐาน ข้อใดเป็นจริงเสมอสำหรับทุกมุม $\\theta$?`,
      choices: [
        { key: "A", text: "$\\sin\\theta + \\cos\\theta = 1$" },
        { key: "B", text: "$\\sin^2\\theta - \\cos^2\\theta = 1$" },
        { key: "C", text: "$\\sin^2\\theta + \\cos^2\\theta = 1$" },
        { key: "D", text: "$\\sec^2\\theta + \\tan^2\\theta = 1$" }
      ],
      answer: "C"
    },
    {
      id: "q27",
      prompt: `เอกลักษณ์ $1 + \\tan^2\\theta$ มีค่าเท่ากับฟังก์ชันในข้อใด?`,
      choices: [
        { key: "A", text: "$\\sec^2\\theta$" },
        { key: "B", text: "$\\text{cosec}^2\\theta$" },
        { key: "C", text: "$\\cot^2\\theta$" },
        { key: "D", text: "$\\cos^2\\theta$" }
      ],
      answer: "A"
    },
    {
      id: "q28",
      prompt: `เอกลักษณ์ $\\text{cosec}^2\\theta - \\cot^2\\theta$ มีค่าเท่ากับเท่าใด?`,
      choices: [
        { key: "A", text: "$-1$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$\\tan^2\\theta$" }
      ],
      answer: "C"
    },
    {
      id: "q29",
      prompt: `นิพจน์ $\\tan\\theta \\times \\text{cosec}\\theta$ สามารถจัดรูปให้ง่ายที่สุดตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$\\sin\\theta$" },
        { key: "B", text: "$\\cos\\theta$" },
        { key: "C", text: "$\\sec\\theta$" },
        { key: "D", text: "$\\cot\\theta$" }
      ],
      answer: "C"
    },
    {
      id: "q30",
      prompt: `นิพจน์ $\\cos\\theta (\\sec\\theta - \\cos\\theta)$ เมื่อกระจายและจัดรูปแล้ว จะมีค่าเท่ากับข้อใด?`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$\\sin^2\\theta$" },
        { key: "C", text: "$\\cos^2\\theta$" },
        { key: "D", text: "$\\tan^2\\theta$" }
      ],
      answer: "B"
    }
  ]
}    
};
