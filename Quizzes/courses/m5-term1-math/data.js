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
        { key: "A", text: `$\\sin$ และ $\\csc$` },
        { key: "B", text: `$\\cos$ และ $\\sec$` },
        { key: "C", text: `$\\tan$ และ $\\cot$` },
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
  
  // ข้อมูลของ quiz2 ในวิชาเดียวกัน
  "quiz2": {
    meta: {
      courseId: "m5-summer",
      quizKey: "quiz2",
      title: "Quiz 2 : อัตราการเกิดปฏิกิริยา",
      enableTimer: true,
      timeLimitSec: 2400
    },
    data: [
      {
        id: "q1",
        prompt: `ปัจจัยใดไม่มีผลต่ออัตราการเกิดปฏิกิริยา?`,
        choices: [
          { key: "A", text: "อุณหภูมิ" },
          { key: "B", text: "ความดัน (กรณีของแข็ง)" },
          { key: "C", text: "พื้นที่ผิว" },
          { key: "D", text: "ตัวเร่งปฏิกิริยา" }
        ],
        answer: "B"
      }
    ]
  }
};