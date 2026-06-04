window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
  meta: {
    courseId: "m5-term1-physics",
    quizKey: "quiz1",
    title: "Quiz 1 : การเคลื่อนที่แบบ SHM (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- ทฤษฎีเบื้องต้น (ข้อ 1-3) ---
    {
      id: "q1",
      prompt: `ปริมาณใดในการเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) ที่บอกถึง "การกระจัดสูงสุด" จากตำแหน่งสมดุล?`,
      choices: [
        { key: "A", text: "แอมพลิจูด (Amplitude)" },
        { key: "B", text: "ความถี่ (Frequency)" },
        { key: "C", text: "คาบ (Period)" },
        { key: "D", text: "เฟสเริ่มต้น (Initial phase)" }
      ],
      answer: "A"
    },
    {
      id: "q2",
      prompt: `วัตถุเคลื่อนที่แบบ SHM ครบ 1 รอบ ใช้เวลา $0.5$ วินาที ความถี่ (f) ของการเคลื่อนที่นี้มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0.5 \\text{ Hz}$" },
        { key: "B", text: "$1.0 \\text{ Hz}$" },
        { key: "C", text: "$2.0 \\text{ Hz}$" },
        { key: "D", text: "$4.0 \\text{ Hz}$" }
      ],
      answer: "C"
    },
    {
      id: "q3",
      prompt: `ปริมาณ $\\omega$ ในสมการการกระจัด $x = A \\sin(\\omega t + \\phi)$ มีความหมายตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "ความเร็วเชิงเส้น" },
        { key: "B", text: "ความถี่เชิงมุม" },
        { key: "C", text: "ความเร่งเชิงมุม" },
        { key: "D", text: "มุมเฟสเริ่มต้น" }
      ],
      answer: "B"
    },

    // --- อ่านกราฟ 001.jpg (ข้อ 4-8) ---
    {
      id: "q4",
      prompt: `จากกราฟการกระจัด-เวลา ต่อไปนี้ แอมพลิจูด (A) ของการเคลื่อนที่มีค่ากี่เซนติเมตร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$1.0 \\text{ cm}$" },
        { key: "B", text: "$1.5 \\text{ cm}$" },
        { key: "C", text: "$2.0 \\text{ cm}$" },
        { key: "D", text: "$3.0 \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q5",
      prompt: `จากกราฟ (001.jpg) คาบ (T) ของการเคลื่อนที่นี้มีค่ากี่วินาที?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$1.0 \\text{ s}$" },
        { key: "B", text: "$1.5 \\text{ s}$" },
        { key: "C", text: "$2.0 \\text{ s}$" },
        { key: "D", text: "$4.0 \\text{ s}$" }
      ],
      answer: "C"
    },
    {
      id: "q6",
      prompt: `จากกราฟ (001.jpg) ความถี่ (f) ของการเคลื่อนที่มีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.25 \\text{ Hz}$" },
        { key: "B", text: "$0.50 \\text{ Hz}$" },
        { key: "C", text: "$1.00 \\text{ Hz}$" },
        { key: "D", text: "$2.00 \\text{ Hz}$" }
      ],
      answer: "B"
    },
    {
      id: "q7",
      prompt: `จากกราฟ (001.jpg) เฟสเริ่มต้น ($\\phi$) ของการเคลื่อนที่นี้มีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0^\\circ$ (หรือ $0$ เรเดียน)" },
        { key: "B", text: "$90^\\circ$ (หรือ $\\frac{\\pi}{2}$ เรเดียน)" },
        { key: "C", text: "$180^\\circ$ (หรือ $\\pi$ เรเดียน)" },
        { key: "D", text: "$270^\\circ$ (หรือ $\\frac{3\\pi}{2}$ เรเดียน)" }
      ],
      answer: "A"
    },
    {
      id: "q8",
      prompt: `จากกราฟ (001.jpg) อัตราเร็วสูงสุด ($V_{max}$) ของวัตถุมีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.5\\pi \\text{ cm/s}$" },
        { key: "B", text: "$1.0\\pi \\text{ cm/s}$" },
        { key: "C", text: "$1.5\\pi \\text{ cm/s}$" },
        { key: "D", text: "$3.0\\pi \\text{ cm/s}$" }
      ],
      answer: "C"
    },

    // --- อ่านกราฟ 002.jpg (ข้อ 9-13) ---
    {
      id: "q9",
      prompt: `จากกราฟการกระจัด-เวลา แอมพลิจูด (A) มีค่ากี่เซนติเมตร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$1.0 \\text{ cm}$" },
        { key: "B", text: "$1.5 \\text{ cm}$" },
        { key: "C", text: "$2.0 \\text{ cm}$" },
        { key: "D", text: "$2.5 \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q10",
      prompt: `จากกราฟ (002.jpg) ที่เวลา $t = 0$ วัตถุมีตำแหน่งการกระจัดสอดคล้องกับข้อใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "ตำแหน่งสมดุล และกำลังเคลื่อนที่ไปทางบวก" },
        { key: "B", text: "ตำแหน่งสมดุล และกำลังเคลื่อนที่ไปทางลบ" },
        { key: "C", text: "ตำแหน่งการกระจัดสูงสุดทางบวก" },
        { key: "D", text: "ตำแหน่งการกระจัดสูงสุดทางลบ" }
      ],
      answer: "C"
    },
    {
      id: "q11",
      prompt: `จากกราฟ (002.jpg) เฟสเริ่มต้น ($\\phi$) ในหน่วยเรเดียนมีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$\\frac{\\pi}{2}$" },
        { key: "C", text: "$\\pi$" },
        { key: "D", text: "$\\frac{3\\pi}{2}$" }
      ],
      answer: "B"
    },
    {
      id: "q12",
      prompt: `จากกราฟ (002.jpg) พิจารณาข้อความต่อไปนี้<br>ก. คาบ (T) = $2.0 \\text{ s}$<br>ข. ความถี่ (f) = $0.5 \\text{ Hz}$<br>ค. เฟสเริ่มต้น = $90^\\circ$<br>ข้อใดกล่าวถูกต้อง<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "ข้อ ก และ ข ถูก" },
        { key: "B", text: "ข้อ ข และ ค ถูก" },
        { key: "C", text: "ข้อ ก และ ค ถูก" },
        { key: "D", text: "ถูกทุกข้อ" }
      ],
      answer: "D"
    },
    {
      id: "q13",
      prompt: `จากกราฟ (002.jpg) ขนาดของความเร่งสูงสุด ($a_{max}$) มีค่าเท่าใดในหน่วย $\\text{cm/s}^2$?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.75\\pi^2$" },
        { key: "B", text: "$1.5\\pi^2$" },
        { key: "C", text: "$3.0\\pi^2$" },
        { key: "D", text: "$6.0\\pi^2$" }
      ],
      answer: "B"
    },

    // --- อ่านกราฟ 003.jpg (ข้อ 14-18) ---
    {
      id: "q14",
      prompt: `จากกราฟ แอมพลิจูด (A) ของการเคลื่อนที่มีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.25 \\text{ cm}$" },
        { key: "B", text: "$0.50 \\text{ cm}$" },
        { key: "C", text: "$1.00 \\text{ cm}$" },
        { key: "D", text: "$1.50 \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `จากกราฟ (003.jpg) เฟสเริ่มต้น ($\\phi$) ของการเคลื่อนที่มีค่ากี่องศา?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0^\\circ$" },
        { key: "B", text: "$90^\\circ$" },
        { key: "C", text: "$180^\\circ$" },
        { key: "D", text: "$270^\\circ$" }
      ],
      answer: "C"
    },
    {
      id: "q16",
      prompt: `จากกราฟ (003.jpg) ความถี่เชิงมุม ($\\omega$) ของการเคลื่อนที่มีค่ากี่เรเดียน/วินาที?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.5\\pi$" },
        { key: "B", text: "$\\pi$" },
        { key: "C", text: "$2\\pi$" },
        { key: "D", text: "$4\\pi$" }
      ],
      answer: "B"
    },
    {
      id: "q17",
      prompt: `สมการการกระจัด $y(t)$ ข้อใดสอดคล้องกับกราฟนี้มากที่สุด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$y = 0.5 \\sin(\\pi t)$" },
        { key: "B", text: "$y = 0.5 \\cos(\\pi t)$" },
        { key: "C", text: "$y = 0.5 \\sin(\\pi t + \\pi)$" },
        { key: "D", text: "$y = 0.5 \\cos(\\pi t + \\pi)$" }
      ],
      answer: "C"
    },
    {
      id: "q18",
      prompt: `จากกราฟ (003.jpg) อัตราเร็วสูงสุด ($V_{max}$) มีค่ากี่ $\\text{cm/s}$?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "$0.25\\pi$" },
        { key: "B", text: "$0.5\\pi$" },
        { key: "C", text: "$\\pi$" },
        { key: "D", text: "$2\\pi$" }
      ],
      answer: "B"
    },

    // --- การวิเคราะห์สมการ (ข้อ 19-30) ---
    {
      id: "q19",
      prompt: `จากสมการการกระจัด $x = 8 \\sin(4\\pi t)$ ในหน่วยเซนติเมตร แอมพลิจูด (A) ของการสั่นมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$2 \\text{ cm}$" },
        { key: "B", text: "$4 \\text{ cm}$" },
        { key: "C", text: "$8 \\text{ cm}$" },
        { key: "D", text: "$16 \\text{ cm}$" }
      ],
      answer: "C"
    },
    {
      id: "q20",
      prompt: `จากสมการการกระจัด $x = 5 \\sin(10\\pi t)$ ความถี่ (f) ของการสั่นมีค่ากี่เฮิรตซ์ (Hz)?`,
      choices: [
        { key: "A", text: "$5 \\text{ Hz}$" },
        { key: "B", text: "$10 \\text{ Hz}$" },
        { key: "C", text: "$10\\pi \\text{ Hz}$" },
        { key: "D", text: "$20 \\text{ Hz}$" }
      ],
      answer: "A"
    },
    {
      id: "q21",
      prompt: `สมการการสั่นของวัตถุคือ $y = 12 \\cos(8\\pi t)$ คาบ (T) ของการเคลื่อนที่มีค่ากี่วินาที?`,
      choices: [
        { key: "A", text: "$0.125 \\text{ s}$" },
        { key: "B", text: "$0.25 \\text{ s}$" },
        { key: "C", text: "$0.5 \\text{ s}$" },
        { key: "D", text: "$4.0 \\text{ s}$" }
      ],
      answer: "B"
    },
    {
      id: "q22",
      prompt: `จากสมการ $x = 3 \\sin(2t + \\frac{\\pi}{3})$ เฟสเริ่มต้น ($\\phi$) มีค่ากี่เรเดียน?`,
      choices: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$\\frac{\\pi}{3}$" },
        { key: "D", text: "$2t$" }
      ],
      answer: "C"
    },
    {
      id: "q23",
      prompt: `มุมเฟส $\\frac{\\pi}{6}$ เรเดียน เทียบเท่ากับมุมกี่องศา?`,
      choices: [
        { key: "A", text: "$15^\\circ$" },
        { key: "B", text: "$30^\\circ$" },
        { key: "C", text: "$45^\\circ$" },
        { key: "D", text: "$60^\\circ$" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `สมการ $y = 5 \\sin(4\\pi t + \\frac{3\\pi}{2})$ เฟสเริ่มต้นของการเคลื่อนที่มีค่ากี่องศา?`,
      choices: [
        { key: "A", text: "$90^\\circ$" },
        { key: "B", text: "$180^\\circ$" },
        { key: "C", text: "$270^\\circ$" },
        { key: "D", text: "$360^\\circ$" }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `อนุภาคหนึ่งสั่นด้วยสมการ $x = 0.2 \\sin(5\\pi t)$ ในหน่วยเมตร อัตราเร็วสูงสุด ($V_{max}$) มีค่ากี่ $\\text{m/s}$?`,
      choices: [
        { key: "A", text: "$0.2\\pi$" },
        { key: "B", text: "$0.5\\pi$" },
        { key: "C", text: "$\\pi$" },
        { key: "D", text: "$2.5\\pi$" }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `จากสมการการเคลื่อนที่ $x = 2 \\sin(3\\pi t)$ ในหน่วยเซนติเมตร ขนาดของความเร่งสูงสุด ($a_{max}$) มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$6\\pi^2 \\text{ cm/s}^2$" },
        { key: "B", text: "$9\\pi^2 \\text{ cm/s}^2$" },
        { key: "C", text: "$12\\pi^2 \\text{ cm/s}^2$" },
        { key: "D", text: "$18\\pi^2 \\text{ cm/s}^2$" }
      ],
      answer: "D"
    },
    {
      id: "q27",
      prompt: `วัตถุหนึ่งเคลื่อนที่แบบ SHM มีคาบการสั่น $4 \\text{ วินาที}$ และแอมพลิจูด $10 \\text{ เซนติเมตร}$ อัตราเร็วสูงสุด ($V_{max}$) มีค่ากี่ $\\text{cm/s}$?`,
      choices: [
        { key: "A", text: "$2.5\\pi$" },
        { key: "B", text: "$5\\pi$" },
        { key: "C", text: "$10\\pi$" },
        { key: "D", text: "$20\\pi$" }
      ],
      answer: "B"
    },
    {
      id: "q28",
      prompt: `วัตถุมีความถี่การสั่น $2 \\text{ Hz}$ และแอมพลิจูด $5 \\text{ เซนติเมตร}$ ขนาดความเร่งสูงสุด ($a_{max}$) มีค่ากี่ $\\text{cm/s}^2$?`,
      choices: [
        { key: "A", text: "$20\\pi^2$" },
        { key: "B", text: "$40\\pi^2$" },
        { key: "C", text: "$80\\pi^2$" },
        { key: "D", text: "$160\\pi^2$" }
      ],
      answer: "C"
    },
    {
      id: "q29",
      prompt: `ข้อใดคือสมการการกระจัดของ SHM ที่มีแอมพลิจูด $2 \\text{ cm}$, ความถี่ $5 \\text{ Hz}$ และเฟสเริ่มต้น $0^\\circ$?`,
      choices: [
        { key: "A", text: "$x = 2 \\sin(5\\pi t)$" },
        { key: "B", text: "$x = 2 \\sin(10\\pi t)$" },
        { key: "C", text: "$x = 5 \\sin(2\\pi t)$" },
        { key: "D", text: "$x = 5 \\sin(10\\pi t)$" }
      ],
      answer: "B"
    },
    {
      id: "q30",
      prompt: `จากสมการ $x = -4 \\sin(\\pi t)$ สามารถเขียนในรูปของฟังก์ชันไซน์ที่มีแอมพลิจูดเป็นบวกและเฟสเริ่มต้นเป็นบวกได้อย่างไร?`,
      choices: [
        { key: "A", text: "$x = 4 \\sin(\\pi t + \\frac{\\pi}{2})$" },
        { key: "B", text: "$x = 4 \\sin(\\pi t + \\pi)$" },
        { key: "C", text: "$x = 4 \\sin(\\pi t + \\frac{3\\pi}{2})$" },
        { key: "D", text: "$x = 4 \\sin(\\pi t + 2\\pi)$" }
      ],
      answer: "B"
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
  },
    "quiz2": {
  meta: {
    courseId: "m5-term1-physics",
    quizKey: "quiz2",
    title: "Quiz 2 : การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `ลักษณะสำคัญของการเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) คือข้อใด?`,
      choices: [
        { key: "A", text: "ความเร็วคงที่ตลอดการเคลื่อนที่" },
        { key: "B", text: "ความเร่งแปรผันตรงกับการกระจัด และมีทิศตรงข้ามกันเสมอ" },
        { key: "C", text: "ความเร่งแปรผกผันกับการกระจัด" },
        { key: "D", text: "แรงลัพธ์ที่กระทำต่อวัตถุมีค่าเป็นศูนย์ตลอดเวลา" }
      ],
      answer: "B"
    },
    {
      id: "q2",
      prompt: `เมื่อวัตถุที่เคลื่อนที่แบบ SHM ผ่าน **จุดสมดุล** การกระจัดของวัตถุจะมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "ศูนย์" },
        { key: "B", text: "มีค่าเท่ากับแอมพลิจูด" },
        { key: "C", text: "มีค่าสูงสุด" },
        { key: "D", text: "มีค่าเท่ากับครึ่งหนึ่งของแอมพลิจูด" }
      ],
      answer: "A"
    },
    {
      id: "q3",
      prompt: `เมื่อวัตถุที่เคลื่อนที่แบบ SHM ผ่าน **จุดสมดุล** ความเร็วของวัตถุจะมีค่าเป็นอย่างไร?`,
      choices: [
        { key: "A", text: "มีค่าเป็นศูนย์" },
        { key: "B", text: "มีค่าสูงสุด" },
        { key: "C", text: "มีความเร็วเท่ากับความเร่ง" },
        { key: "D", text: "มีความเร็วเพิ่มขึ้นเรื่อยๆ ไม่มีขีดจำกัด" }
      ],
      answer: "B"
    },
    {
      id: "q4",
      prompt: `เมื่อวัตถุที่เคลื่อนที่แบบ SHM ผ่าน **จุดสมดุล** ความเร่งของวัตถุจะมีค่าเป็นอย่างไร?`,
      choices: [
        { key: "A", text: "มีค่าสูงสุด" },
        { key: "B", text: "มีค่าคงที่" },
        { key: "C", text: "มีค่าเป็นศูนย์" },
        { key: "D", text: "มีค่าเท่ากับความเร็ว" }
      ],
      answer: "C"
    },
    {
      id: "q5",
      prompt: `ที่ตำแหน่ง **การกระจัดสูงสุด (แอมพลิจูด)** ความเร็วของวัตถุจะมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "มีค่าสูงสุด" },
        { key: "B", text: "มีค่าเป็นศูนย์" },
        { key: "C", text: "เท่ากับความถี่มุม" },
        { key: "D", text: "เท่ากับความเร็วที่จุดสมดุล" }
      ],
      answer: "B"
    },
    {
      id: "q6",
      prompt: `ที่ตำแหน่ง **การกระจัดสูงสุด (แอมพลิจูด)** ขนาดของความเร่งของวัตถุจะมีค่าเป็นอย่างไร?`,
      choices: [
        { key: "A", text: "มีค่าเป็นศูนย์" },
        { key: "B", text: "มีค่าต่ำสุดแต่ไม่เป็นศูนย์" },
        { key: "C", text: "มีค่าคงที่เท่ากับจุดสมดุล" },
        { key: "D", text: "มีค่าสูงสุด" }
      ],
      answer: "D"
    },
    {
      id: "q7",
      prompt: `นิยามของ **แอมพลิจูด (Amplitude)** ในการเคลื่อนที่แบบ SHM คืออะไร?`,
      choices: [
        { key: "A", text: "ระยะทางทั้งหมดที่วัตถุเคลื่อนที่ได้ใน 1 รอบ" },
        { key: "B", text: "เวลาที่วัตถุใช้ในการเคลื่อนที่ครบ 1 รอบ" },
        { key: "C", text: "ขนาดของการกระจัดสูงสุดจากจุดสมดุล" },
        { key: "D", text: "ความเร็วสูงสุดของการเคลื่อนที่" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `ทิศทางของความเร่งในการเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย จะมีทิศทางอย่างไรเสมอ?`,
      choices: [
        { key: "A", text: "ชี้ไปในทิศทางเดียวกับการเคลื่อนที่เสมอ" },
        { key: "B", text: "ชี้ออกจากจุดสมดุลเสมอ" },
        { key: "C", text: "ชี้เข้าหาจุดสมดุลเสมอ" },
        { key: "D", text: "ตั้งฉากกับการกระจัดเสมอ" }
      ],
      answer: "C"
    },
    {
      id: "q9",
      prompt: `ในการเคลื่อนที่แบบ SHM เฟสของ **ความเร็ว** จะนำหน้าเฟสของ **การกระจัด** อยู่เท่าใด?`,
      choices: [
        { key: "A", text: "$45^\\circ$ หรือ $\\frac{\\pi}{4} \\text{ rad}$" },
        { key: "B", text: "$90^\\circ$ หรือ $\\frac{\\pi}{2} \\text{ rad}$" },
        { key: "C", text: "$180^\\circ$ หรือ $\\pi \\text{ rad}$" },
        { key: "D", text: "$360^\\circ$ หรือ $2\\pi \\text{ rad}$" }
      ],
      answer: "B"
    },
    {
      id: "q10",
      prompt: `ในการเคลื่อนที่แบบ SHM เฟสของ **ความเร่ง** จะมีความต่างเฟสกับ **การกระจัด** อยู่เท่าใด?`,
      choices: [
        { key: "A", text: "$0^\\circ$ (มีเฟสตรงกัน)" },
        { key: "B", text: "$90^\\circ$ หรือ $\\frac{\\pi}{2} \\text{ rad}$" },
        { key: "C", text: "$180^\\circ$ หรือ $\\pi \\text{ rad}$ (มีเฟสตรงข้ามกัน)" },
        { key: "D", text: "$270^\\circ$ หรือ $\\frac{3\\pi}{2} \\text{ rad}$" }
      ],
      answer: "C"
    },
    {
      id: "q11",
      prompt: `สมการใดแสดงความสัมพันธ์ระหว่างความเร่ง ($a$) และการกระจัด ($x$) ในการเคลื่อนที่แบบ SHM ได้ถูกต้อง?`,
      choices: [
        { key: "A", text: "$a = \\omega x$" },
        { key: "B", text: "$a = -\\omega^2 x$" },
        { key: "C", text: "$a = \\omega^2 x$" },
        { key: "D", text: "$a = -\\omega x$" }
      ],
      answer: "B"
    },
    {
      id: "q12",
      prompt: `สูตรในการหาขนาดของ **ความเร็วสูงสุด** ($V_{max}$) คือข้อใด?`,
      choices: [
        { key: "A", text: "$V_{max} = \\omega^2 A$" },
        { key: "B", text: "$V_{max} = \\omega A$" },
        { key: "C", text: "$V_{max} = \\frac{A}{\\omega}$" },
        { key: "D", text: "$V_{max} = 2\\pi \\omega A$" }
      ],
      answer: "B"
    },
    {
      id: "q13",
      prompt: `เครื่องหมาย **ลบ (-)** ในสมการแรงดึงกลับ $F = -kx$ หรือสมการความเร่ง $a = -\\omega^2 x$ มีความหมายว่าอย่างไร?`,
      choices: [
        { key: "A", text: "วัตถุเคลื่อนที่ช้าลงเสมอ" },
        { key: "B", text: "แรงหรือความเร่งมีทิศทางตรงข้ามกับการกระจัดเสมอ" },
        { key: "C", text: "วัตถุมีมวลลดลง" },
        { key: "D", text: "วัตถุเคลื่อนที่ไปทางซ้ายมือเสมอ" }
      ],
      answer: "B"
    },
    {
      id: "q14",
      prompt: `สูตรในการหาขนาดของ **ความเร่งสูงสุด** ($a_{max}$) คือข้อใด?`,
      choices: [
        { key: "A", text: "$a_{max} = \\omega A$" },
        { key: "B", text: "$a_{max} = \\omega^2 A$" },
        { key: "C", text: "$a_{max} = \\sqrt{\\omega A}$" },
        { key: "D", text: "$a_{max} = \\frac{\\omega^2}{A}$" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `วัตถุสั่นแบบ SHM ด้วยความถี่มุม $\\omega = 2 \\text{ rad/s}$ และมีแอมพลิจูด $A = 5 \\text{ m}$ จงหาความเร็วสูงสุด ($V_{max}$)`,
      choices: [
        { key: "A", text: "$2.5 \\text{ m/s}$" },
        { key: "B", text: "$7 \\text{ m/s}$" },
        { key: "C", text: "$10 \\text{ m/s}$" },
        { key: "D", text: "$20 \\text{ m/s}$" }
      ],
      answer: "C"
    },
    {
      id: "q16",
      prompt: `วัตถุเคลื่อนที่แบบ SHM โดยมีคาบการสั่น $T = 2 \\text{ s}$ และแอมพลิจูด $A = 4 \\text{ cm}$ จงหาความเร็วสูงสุด ($V_{max}$)<br>(กำหนดให้ $\\omega = \\frac{2\\pi}{T}$)`,
      choices: [
        { key: "A", text: "$2\\pi \\text{ cm/s}$" },
        { key: "B", text: "$4\\pi \\text{ cm/s}$" },
        { key: "C", text: "$8\\pi \\text{ cm/s}$" },
        { key: "D", text: "$16\\pi \\text{ cm/s}$" }
      ],
      answer: "B"
    },
    {
      id: "q17",
      prompt: `วัตถุมีความถี่มุม $\\omega = 3 \\text{ rad/s}$ และมีแอมพลิจูด $A = 2 \\text{ m}$ จงหาความเร่งสูงสุด ($a_{max}$)`,
      choices: [
        { key: "A", text: "$6 \\text{ m/s}^2$" },
        { key: "B", text: "$9 \\text{ m/s}^2$" },
        { key: "C", text: "$12 \\text{ m/s}^2$" },
        { key: "D", text: "$18 \\text{ m/s}^2$" }
      ],
      answer: "D"
    },
    {
      id: "q18",
      prompt: `วัตถุสั่นด้วยคาบ $T = \\pi \\text{ s}$ และมีแอมพลิจูด $A = 5 \\text{ cm}$ ความเร่งสูงสุด ($a_{max}$) ของวัตถุคือข้อใด?`,
      choices: [
        { key: "A", text: "$10 \\text{ cm/s}^2$" },
        { key: "B", text: "$20 \\text{ cm/s}^2$" },
        { key: "C", text: "$5\\pi \\text{ cm/s}^2$" },
        { key: "D", text: "$25 \\text{ cm/s}^2$" }
      ],
      answer: "B"
    },
    {
      id: "q19",
      prompt: `หากวัตถุหนึ่งมีอัตราเร็วสูงสุด $V_{max} = 20 \\text{ m/s}$ และมีความถี่มุม $\\omega = 4 \\text{ rad/s}$ วัตถุนี้มีแอมพลิจูดเท่าใด?`,
      choices: [
        { key: "A", text: "$4 \\text{ m}$" },
        { key: "B", text: "$5 \\text{ m}$" },
        { key: "C", text: "$16 \\text{ m}$" },
        { key: "D", text: "$80 \\text{ m}$" }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `หากวัตถุหนึ่งมีความเร่งสูงสุด $a_{max} = 50 \\text{ m/s}^2$ และมีแอมพลิจูด $A = 2 \\text{ m}$ ความถี่มุม $\\omega$ ของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$5 \\text{ rad/s}$" },
        { key: "B", text: "$10 \\text{ rad/s}$" },
        { key: "C", text: "$25 \\text{ rad/s}$" },
        { key: "D", text: "$100 \\text{ rad/s}$" }
      ],
      answer: "A"
    },
    {
      id: "q21",
      prompt: `ในการเคลื่อนที่แบบ SHM หากทราบว่า $V_{max} = 10 \\text{ cm/s}$ และ $a_{max} = 20 \\text{ cm/s}^2$ จงหาความถี่มุม $\\omega$<br>(Hint: นำ $a_{max}$ หารด้วย $V_{max}$)`,
      choices: [
        { key: "A", text: "$0.5 \\text{ rad/s}$" },
        { key: "B", text: "$2 \\text{ rad/s}$" },
        { key: "C", text: "$4 \\text{ rad/s}$" },
        { key: "D", text: "$200 \\text{ rad/s}$" }
      ],
      answer: "B"
    },
    {
      id: "q22",
      prompt: `ต่อเนื่องจากข้อที่แล้ว ($V_{max} = 10 \\text{ cm/s}$ และ $a_{max} = 20 \\text{ cm/s}^2$) แอมพลิจูด $A$ ของการเคลื่อนที่นี้มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$2 \\text{ cm}$" },
        { key: "B", text: "$5 \\text{ cm}$" },
        { key: "C", text: "$10 \\text{ cm}$" },
        { key: "D", text: "$20 \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q23",
      prompt: `วัตถุเคลื่อนที่แบบ SHM โดยมีสมการการกระจัดคือ $x = 10 \\sin(2t)$ ในหน่วยเมตรและวินาที ความเร็วสูงสุด ($V_{max}$) ของวัตถุนี้คือเท่าใด?`,
      choices: [
        { key: "A", text: "$10 \\text{ m/s}$" },
        { key: "B", text: "$12 \\text{ m/s}$" },
        { key: "C", text: "$20 \\text{ m/s}$" },
        { key: "D", text: "$40 \\text{ m/s}$" }
      ],
      answer: "C"
    },
    {
      id: "q24",
      prompt: `วัตถุเคลื่อนที่แบบ SHM โดยมีสมการการกระจัดคือ $x = 5 \\cos(4t)$ ในหน่วยเซนติเมตรและวินาที ความเร่งสูงสุด ($a_{max}$) ของวัตถุนี้คือเท่าใด?`,
      choices: [
        { key: "A", text: "$20 \\text{ cm/s}^2$" },
        { key: "B", text: "$40 \\text{ cm/s}^2$" },
        { key: "C", text: "$80 \\text{ cm/s}^2$" },
        { key: "D", text: "$100 \\text{ cm/s}^2$" }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `กำหนดสมการการกระจัด $x = 12 \\sin(\\frac{\\pi t}{6})$ เซนติเมตร จงหาการกระจัดเมื่อเวลาผ่านไป $t = 1 \\text{ s}$<br>(กำหนด $\\sin(30^\\circ) = \\sin(\\frac{\\pi}{6} \\text{ rad}) = 0.5$)`,
      choices: [
        { key: "A", text: "$0 \\text{ cm}$" },
        { key: "B", text: "$6 \\text{ cm}$" },
        { key: "C", text: "$12 \\text{ cm}$" },
        { key: "D", text: "$6\\sqrt{3} \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q26",
      prompt: `กำหนดสมการการกระจัด $x = 8 \\cos(\\frac{\\pi t}{3})$ เซนติเมตร จงหาการกระจัดเมื่อเวลาผ่านไป $t = 1 \\text{ s}$<br>(กำหนด $\\cos(60^\\circ) = \\cos(\\frac{\\pi}{3} \\text{ rad}) = 0.5$)`,
      choices: [
        { key: "A", text: "$4 \\text{ cm}$" },
        { key: "B", text: "$4\\sqrt{2} \\text{ cm}$" },
        { key: "C", text: "$4\\sqrt{3} \\text{ cm}$" },
        { key: "D", text: "$8 \\text{ cm}$" }
      ],
      answer: "A"
    },
    {
      id: "q27",
      prompt: `กำหนดสมการความเร็ว $v = 20 \\cos(2t)$ ในหน่วยเมตรต่อวินาที ความเร็วของวัตถุที่เวลาเริ่มต้น ($t = 0 \\text{ s}$) มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0 \\text{ m/s}$" },
        { key: "B", text: "$10 \\text{ m/s}$" },
        { key: "C", text: "$20 \\text{ m/s}$" },
        { key: "D", text: "$40 \\text{ m/s}$" }
      ],
      answer: "C"
    },
    {
      id: "q28",
      prompt: `วัตถุมีการกระจัดตามสมการ $x = 4 \\sin(5t)$ เมตร จงหาความเร่งของวัตถุที่เวลา $t = 0 \\text{ s}$`,
      choices: [
        { key: "A", text: "$0 \\text{ m/s}^2$" },
        { key: "B", text: "$20 \\text{ m/s}^2$" },
        { key: "C", text: "$100 \\text{ m/s}^2$" },
        { key: "D", text: "$-100 \\text{ m/s}^2$" }
      ],
      answer: "A"
    },
    {
      id: "q29",
      prompt: `วัตถุสั่นด้วยสมการการกระจัด $x = 10 \\sin(\\pi t)$ เซนติเมตร จงหา **ขนาดความเร็ว** ที่เวลา $t = 0.5 \\text{ s}$<br>(สมการความเร็วคือ $v = \\omega A \\cos(\\omega t)$ และ $\\cos(\\frac{\\pi}{2} \\text{ rad}) = 0$)`,
      choices: [
        { key: "A", text: "$0 \\text{ cm/s}$" },
        { key: "B", text: "$10 \\text{ cm/s}$" },
        { key: "C", text: "$10\\pi \\text{ cm/s}$" },
        { key: "D", text: "$5\\pi \\text{ cm/s}$" }
      ],
      answer: "A"
    },
    {
      id: "q30",
      prompt: `วัตถุเริ่มสั่นจากจุดสมดุล ($t=0, x=0$) มีแอมพลิจูด $20 \\text{ cm}$ และคาบ $12 \\text{ s}$ จงหาการกระจัดที่เวลา $t = 2 \\text{ s}$<br>(ใช้สมการ $x = A \\sin(\\frac{2\\pi t}{T})$ และ $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2}$)`,
      choices: [
        { key: "A", text: "$10 \\text{ cm}$" },
        { key: "B", text: "$10\\sqrt{3} \\text{ cm}$" },
        { key: "C", text: "$20 \\text{ cm}$" },
        { key: "D", text: "$20\\sqrt{3} \\text{ cm}$" }
      ],
      answer: "B"
    }
  ]
}
};
