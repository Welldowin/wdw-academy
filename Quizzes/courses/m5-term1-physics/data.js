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
},
    "quiz3": {
  meta: {
    courseId: "m5-term1-physics",
    quizKey: "quiz3",
    title: "Quiz 3 : การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- การกระจัด ความเร่ง ความเร็ว เมื่อเวลาเปลี่ยนไป (10 ข้อ) ---
    {
      id: "q1",
      prompt: `ในการเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย เฟสของการกระจัด ($x$) และความเร่ง ($a$) มีความแตกต่างกันเท่าใด?`,
      choices: [
        { key: "A", text: "$0^\\circ$ (มีเฟสตรงกัน)" },
        { key: "B", text: "$90^\\circ$ (หรือ $\\frac{\\pi}{2}$ เรเดียน)" },
        { key: "C", text: "$180^\\circ$ (หรือ $\\pi$ เรเดียน)" },
        { key: "D", text: "$270^\\circ$ (หรือ $\\frac{3\\pi}{2}$ เรเดียน)" }
      ],
      answer: "C"
    },
    {
      id: "q2",
      prompt: `สำหรับการเคลื่อนที่แบบ SHM เฟสของความเร็ว ($v$) จะนำหน้าเฟสของการกระจัด ($x$) อยู่เท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\pi}{4}$ เรเดียน" },
        { key: "B", text: "$\\frac{\\pi}{2}$ เรเดียน" },
        { key: "C", text: "$\\pi$ เรเดียน" },
        { key: "D", text: "$2\\pi$ เรเดียน" }
      ],
      answer: "B"
    },
    {
      id: "q3",
      prompt: `วัตถุที่เคลื่อนที่แบบฮาร์มอนิกอย่างง่าย จะมีขนาดของความเร็วสูงสุดที่ตำแหน่งใด?`,
      choices: [
        { key: "A", text: "ตำแหน่งสมดุล" },
        { key: "B", text: "ตำแหน่งการกระจัดสูงสุด (แอมพลิจูด)" },
        { key: "C", text: "ตำแหน่งกึ่งกลางระหว่างสมดุลและแอมพลิจูด" },
        { key: "D", text: "ทุกตำแหน่งมีความเร็วเท่ากัน" }
      ],
      answer: "A"
    },
    {
      id: "q4",
      prompt: `ขนาดของความเร่งของวัตถุที่เคลื่อนที่แบบ SHM จะมีค่าสูงสุดเมื่อใด?`,
      choices: [
        { key: "A", text: "เมื่อวัตถุมีความเร็วสูงสุด" },
        { key: "B", text: "เมื่อวัตถุผ่านตำแหน่งสมดุล" },
        { key: "C", text: "เมื่อวัตถุมีการกระจัดสูงสุด" },
        { key: "D", text: "เมื่อเวลาผ่านไปครบ 1 คาบพอดี" }
      ],
      answer: "C"
    },
    {
      id: "q5",
      prompt: `วัตถุเคลื่อนที่แบบ SHM มีคาบ $T = 2 \\text{ s}$ หากวัตถุเริ่มเคลื่อนที่จากตำแหน่งสมดุล จะใช้เวลาเท่าใดในการเคลื่อนที่ไปถึงตำแหน่งแอมพลิจูดเป็นครั้งแรก?`,
      choices: [
        { key: "A", text: "$0.25 \\text{ s}$" },
        { key: "B", text: "$0.5 \\text{ s}$" },
        { key: "C", text: "$1.0 \\text{ s}$" },
        { key: "D", text: "$2.0 \\text{ s}$" }
      ],
      answer: "B"
    },
    {
      id: "q6",
      prompt: `วัตถุเคลื่อนที่แบบ SHM ด้วยคาบ $T$ หากเริ่มจับเวลาที่ตำแหน่งสมดุล วัตถุจะใช้เวลาเท่าใดในการเคลื่อนที่ไปยังตำแหน่ง $x = \\frac{A}{2}$?`,
      choices: [
        { key: "A", text: "$\\frac{T}{12}$" },
        { key: "B", text: "$\\frac{T}{8}$" },
        { key: "C", text: "$\\frac{T}{6}$" },
        { key: "D", text: "$\\frac{T}{4}$" }
      ],
      answer: "A"
    },
    {
      id: "q7",
      prompt: `ถ้ากราฟความสัมพันธ์ระหว่างการกระจัดกับเวลา ($x-t$) ของการเคลื่อนที่แบบ SHM เป็นกราฟรูปฟังก์ชันไซน์ (Sine wave) กราฟความสัมพันธ์ระหว่างความเร็วกับเวลา ($v-t$) จะเป็นกราฟรูปใด?`,
      choices: [
        { key: "A", text: "กราฟเส้นตรง" },
        { key: "B", text: "กราฟฟังก์ชันไซน์ (Sine wave)" },
        { key: "C", text: "กราฟฟังก์ชันโคไซน์ (Cosine wave)" },
        { key: "D", text: "กราฟพาราโบลา" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `ข้อใดแสดงความสัมพันธ์ระหว่างความเร่ง ($a$) และการกระจัด ($x$) ของวัตถุที่เคลื่อนที่แบบ SHM ได้ถูกต้องที่สุด?`,
      choices: [
        { key: "A", text: "$a = \\omega x$" },
        { key: "B", text: "$a = -\\omega x$" },
        { key: "C", text: "$a = \\omega^2 x$" },
        { key: "D", text: "$a = -\\omega^2 x$" }
      ],
      answer: "D"
    },
    {
      id: "q9",
      prompt: `เมื่อเวลาผ่านไปครบ 1 คาบพอดี ($t=T$) การกระจัดของวัตถุที่เริ่มเคลื่อนที่จากตำแหน่งสมดุลจะมีค่าเป็นเท่าใด?`,
      choices: [
        { key: "A", text: "ศูนย์" },
        { key: "B", text: "$A$" },
        { key: "C", text: "$-A$" },
        { key: "D", text: "$\\frac{A}{2}$" }
      ],
      answer: "A"
    },
    {
      id: "q10",
      prompt: `หากสมการการกระจัดคือ $x = A \\cos(\\omega t)$ สมการความเร่ง ($a$) เมื่อเวลา $t$ ใดๆ คือข้อใด?`,
      choices: [
        { key: "A", text: "$a = -A \\omega \\sin(\\omega t)$" },
        { key: "B", text: "$a = A \\omega^2 \\cos(\\omega t)$" },
        { key: "C", text: "$a = -A \\omega^2 \\cos(\\omega t)$" },
        { key: "D", text: "$a = -A \\omega^2 \\sin(\\omega t)$" }
      ],
      answer: "C"
    },

    // --- อัตราเร็ว และอัตราเร่งที่ตำแหน่งใดๆ (5 ข้อ) ---
    {
      id: "q11",
      prompt: `สมการในการหาความเร็ว ($v$) ของวัตถุที่กำลังเคลื่อนที่แบบ SHM ที่ตำแหน่งการกระจัด $x$ ใดๆ คือข้อใด?`,
      choices: [
        { key: "A", text: "$v = \\pm \\omega \\sqrt{A - x}$" },
        { key: "B", text: "$v = \\pm \\omega \\sqrt{A^2 - x^2}$" },
        { key: "C", text: "$v = \\pm \\omega^2 \\sqrt{A^2 - x^2}$" },
        { key: "D", text: "$v = \\pm \\omega \\sqrt{x^2 - A^2}$" }
      ],
      answer: "B"
    },
    {
      id: "q12",
      prompt: `วัตถุสั่นแบบ SHM ด้วยแอมพลิจูด $A$ ที่ตำแหน่งการกระจัด $x = \\frac{A}{2}$ วัตถุจะมีอัตราเร็วเป็นกี่เท่าของอัตราเร็วสูงสุด ($v_{\\text{max}}$)?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2} v_{\\text{max}}$" },
        { key: "B", text: "$\\frac{1}{\\sqrt{2}} v_{\\text{max}}$" },
        { key: "C", text: "$\\frac{\\sqrt{3}}{2} v_{\\text{max}}$" },
        { key: "D", text: "$\\frac{3}{4} v_{\\text{max}}$" }
      ],
      answer: "C"
    },
    {
      id: "q13",
      prompt: `วัตถุเคลื่อนที่แบบ SHM ด้วยแอมพลิจูด $5 \\text{ cm}$ และมีความถี่เชิงมุม $4 \\text{ rad/s}$ อัตราเร็วสูงสุดของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$1.25 \\text{ cm/s}$" },
        { key: "B", text: "$9 \\text{ cm/s}$" },
        { key: "C", text: "$20 \\text{ cm/s}$" },
        { key: "D", text: "$80 \\text{ cm/s}$" }
      ],
      answer: "C"
    },
    {
      id: "q14",
      prompt: `จากข้อที่แล้ว ขนาดของความเร่งสูงสุดของวัตถุมีค่ากี่เซนติเมตรต่อวินาทีกำลังสอง?`,
      choices: [
        { key: "A", text: "$20 \\text{ cm/s}^2$" },
        { key: "B", text: "$40 \\text{ cm/s}^2$" },
        { key: "C", text: "$80 \\text{ cm/s}^2$" },
        { key: "D", text: "$100 \\text{ cm/s}^2$" }
      ],
      answer: "C"
    },
    {
      id: "q15",
      prompt: `วัตถุหนึ่งเคลื่อนที่แบบ SHM มีอัตราเร็วสูงสุด $10 \\text{ m/s}$ และมีขนาดความเร่งสูงสุด $50 \\text{ m/s}^2$ แอมพลิจูดของการเคลื่อนที่มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0.2 \\text{ m}$" },
        { key: "B", text: "$2.0 \\text{ m}$" },
        { key: "C", text: "$5.0 \\text{ m}$" },
        { key: "D", text: "$10.0 \\text{ m}$" }
      ],
      answer: "B"
    },

    // --- การให้สมการหาจำนวนรอบ/ระยะทาง (7 ข้อ) ---
    {
      id: "q16",
      prompt: `วัตถุเคลื่อนที่ตามสมการการกระจัด $x = 5 \\sin(2\\pi t)$ เซนติเมตร เมื่อเวลาผ่านไป $1$ วินาที วัตถุจะเคลื่อนที่ได้ระยะทางทั้งหมดกี่เซนติเมตร?`,
      choices: [
        { key: "A", text: "$5 \\text{ cm}$" },
        { key: "B", text: "$10 \\text{ cm}$" },
        { key: "C", text: "$15 \\text{ cm}$" },
        { key: "D", text: "$20 \\text{ cm}$" }
      ],
      answer: "D"
    },
    {
      id: "q17",
      prompt: `อนุภาคหนึ่งสั่นตามสมการ $x = 10 \\cos(4\\pi t)$ เซนติเมตร ภายในเวลา $2$ วินาที อนุภาคนี้จะสั่นได้ทั้งหมดกี่รอบ?`,
      choices: [
        { key: "A", text: "$2 \\text{ รอบ}$" },
        { key: "B", text: "$4 \\text{ รอบ}$" },
        { key: "C", text: "$8 \\text{ รอบ}$" },
        { key: "D", text: "$16 \\text{ รอบ}$" }
      ],
      answer: "C"
    },
    {
      id: "q18",
      prompt: `ความเร็วของวัตถุที่สั่นแบบ SHM มีสมการคือ $v = 12\\pi \\cos(4\\pi t)$ เซนติเมตร/วินาที แอมพลิจูดของการสั่นนี้มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$3 \\text{ cm}$" },
        { key: "B", text: "$4 \\text{ cm}$" },
        { key: "C", text: "$12 \\text{ cm}$" },
        { key: "D", text: "$48 \\text{ cm}$" }
      ],
      answer: "A"
    },
    {
      id: "q19",
      prompt: `สมการความเร่งของระบบคือ $a = -400\\pi^2 \\sin(20\\pi t)$ เซนติเมตร/วินาทีกำลังสอง ความถี่ของการสั่นนี้มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$10 \\text{ Hz}$" },
        { key: "B", text: "$20 \\text{ Hz}$" },
        { key: "C", text: "$20\\pi \\text{ Hz}$" },
        { key: "D", text: "$400 \\text{ Hz}$" }
      ],
      answer: "A"
    },
    {
      id: "q20",
      prompt: `วัตถุมีการกระจัดตามสมการ $x = 2 \\sin(\\pi t)$ เมตร เมื่อเวลาผ่านไป $0.5$ วินาที วัตถุจะเคลื่อนที่ได้ระยะทางทั้งหมดเท่าใด?`,
      choices: [
        { key: "A", text: "$0.5 \\text{ m}$" },
        { key: "B", text: "$1 \\text{ m}$" },
        { key: "C", text: "$2 \\text{ m}$" },
        { key: "D", text: "$4 \\text{ m}$" }
      ],
      answer: "C"
    },
    {
      id: "q21",
      prompt: `วัตถุมีสมการการกระจัด $x = 4 \\sin(5\\pi t)$ เซนติเมตร เมื่อเวลาผ่านไป $10$ วินาที วัตถุสั่นได้ทั้งหมดกี่รอบ?`,
      choices: [
        { key: "A", text: "$10 \\text{ รอบ}$" },
        { key: "B", text: "$20 \\text{ รอบ}$" },
        { key: "C", text: "$25 \\text{ รอบ}$" },
        { key: "D", text: "$50 \\text{ รอบ}$" }
      ],
      answer: "C"
    },
    {
      id: "q22",
      prompt: `วัตถุสั่นตามสมการ $x = 3 \\sin(4\\pi t)$ เซนติเมตร ใน 1 รอบการสั่น วัตถุจะเคลื่อนที่ได้ระยะทางทั้งหมดกี่เซนติเมตร?`,
      choices: [
        { key: "A", text: "$3 \\text{ cm}$" },
        { key: "B", text: "$6 \\text{ cm}$" },
        { key: "C", text: "$9 \\text{ cm}$" },
        { key: "D", text: "$12 \\text{ cm}$" }
      ],
      answer: "D"
    },

    // --- การเปรียบเทียบตัวแปรเพื่อหา คาบ หรือ ความถี่ (8 ข้อ) ---
    {
      id: "q23",
      prompt: `ลูกตุ้มนาฬิกาอย่างง่ายแกว่งด้วยคาบ $T$ หากเปลี่ยนมวลของลูกตุ้มให้เพิ่มขึ้นเป็น $2$ เท่า โดยคงความยาวเชือกไว้เท่าเดิม คาบการแกว่งจะเป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{T}{2}$" },
        { key: "B", text: "$T$ (เท่าเดิม)" },
        { key: "C", text: "$\\sqrt{2}T$" },
        { key: "D", text: "$2T$" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `ลูกตุ้มนาฬิกามีความยาวเชือก $L$ หากเพิ่มความยาวเชือกเป็น $4$ เท่า คาบการแกว่งจะเปลี่ยนเป็นกี่เท่าของของเดิม?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2} \\text{ เท่า}$" },
        { key: "B", text: "$\\sqrt{2} \\text{ เท่า}$" },
        { key: "C", text: "$2 \\text{ เท่า}$" },
        { key: "D", text: "$4 \\text{ เท่า}$" }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `นำลูกตุ้มนาฬิกาจากโลกไปแกว่งบนดวงจันทร์ ซึ่งมีความเร่งโน้มถ่วง ($g$) เป็น $\\frac{1}{6}$ ของโลก คาบการแกว่งบนดวงจันทร์จะเป็นอย่างไรเมื่อเทียบกับบนโลก?`,
      choices: [
        { key: "A", text: "ลดลงเป็น $\\frac{1}{6} \\text{ เท่า}$" },
        { key: "B", text: "ลดลงเป็น $\\frac{1}{\\sqrt{6}} \\text{ เท่า}$" },
        { key: "C", text: "เพิ่มขึ้นเป็น $\\sqrt{6} \\text{ เท่า}$" },
        { key: "D", text: "เพิ่มขึ้นเป็น $6 \\text{ เท่า}$" }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `ระบบมวลติดสปริงสั่นด้วยคาบ $T$ หากเปลี่ยนมวลให้เพิ่มขึ้นเป็น $4$ เท่า คาบการสั่นจะเปลี่ยนไปอย่างไร?`,
      choices: [
        { key: "A", text: "ลดลงครึ่งหนึ่ง" },
        { key: "B", text: "เท่าเดิม" },
        { key: "C", text: "เพิ่มขึ้นเป็น $2 \\text{ เท่า}$" },
        { key: "D", text: "เพิ่มขึ้นเป็น $4 \\text{ เท่า}$" }
      ],
      answer: "C"
    },
    {
      id: "q27",
      prompt: `ระบบมวลติดสปริงมีค่าคงที่สปริง $k$ และมีความถี่การสั่น $f$ หากเปลี่ยนสปริงเส้นใหม่ที่มีค่าคงที่สปริงเป็น $4k$ โดยใช้มวลเท่าเดิม ความถี่ในการสั่นจะเป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$f$ (เท่าเดิม)" },
        { key: "B", text: "$2f$" },
        { key: "C", text: "$4f$" },
        { key: "D", text: "$16f$" }
      ],
      answer: "B"
    },
    {
      id: "q28",
      prompt: `ถ้านำสปริงที่มีความยาว $L$ มาตัดครึ่ง ซึ่งจะส่งผลให้ค่าคงที่สปริงเพิ่มขึ้นเป็น $2$ เท่า แล้วนำมวลก้อนเดิมมาแขวน คาบการสั่นจะเป็นกี่เท่าของสปริงเส้นเดิมก่อนตัด?`,
      choices: [
        { key: "A", text: "$\\frac{1}{2} \\text{ เท่า}$" },
        { key: "B", text: "$\\frac{1}{\\sqrt{2}} \\text{ เท่า}$" },
        { key: "C", text: "$\\sqrt{2} \\text{ เท่า}$" },
        { key: "D", text: "$2 \\text{ เท่า}$" }
      ],
      answer: "B"
    },
    {
      id: "q29",
      prompt: `ระบบมวลติดสปริงวางอยู่บนพื้นราบลื่น มีคาบการสั่น $T$ ถ้านำระบบนี้ไปแกว่งบนพื้นเอียงลื่นที่ทำมุม $30^\\circ$ กับแนวระดับ คาบการสั่นจะเป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$T \\sin(30^\\circ)$" },
        { key: "B", text: "$T \\cos(30^\\circ)$" },
        { key: "C", text: "$\\frac{T}{\\sin(30^\\circ)}$" },
        { key: "D", text: "$T \\text{ (คาบเท่าเดิม)}$" }
      ],
      answer: "D"
    },
    {
      id: "q30",
      prompt: `ลูกตุ้มนาฬิกา $A$ มีความยาวเชือกเป็น $9$ เท่าของลูกตุ้ม $B$ ความถี่ในการแกว่งของลูกตุ้ม $A$ จะเป็นกี่เท่าของลูกตุ้ม $B$?`,
      choices: [
        { key: "A", text: "$\\frac{1}{9} \\text{ เท่า}$" },
        { key: "B", text: "$\\frac{1}{3} \\text{ เท่า}$" },
        { key: "C", text: "$3 \\text{ เท่า}$" },
        { key: "D", text: "$9 \\text{ เท่า}$" }
      ],
      answer: "B"
    }
  ]
},
  "quiz4": {
  meta: {
    courseId: "m5-term1-physics",
    quizKey: "quiz4",
    title: "Quiz 4 : ตะลุยโจทย์ SHM (พาร์ท 2) (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) มีลักษณะสำคัญตรงกับข้อใดมากที่สุด?`,
      choices: [
        { key: "A", text: "ความเร็วแปรผันตรงกับการกระจัด" },
        { key: "B", text: "ความเร่งแปรผันตรงกับการกระจัดและมีทิศตรงข้ามกันเสมอ" },
        { key: "C", text: "ความเร่งคงที่ตลอดการเคลื่อนที่" },
        { key: "D", text: "พลังงานจลน์คงที่ตลอดการเคลื่อนที่" }
      ],
      answer: "B"
    },
    {
      id: "q2",
      prompt: `สมการการกระจัดของวัตถุคือ $x = 5 \\sin(4\\pi t)$ หน่วยเป็นเซนติเมตร แอมพลิจูด ($A$) ของการเคลื่อนที่นี้มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$4 \\text{ cm}$" },
        { key: "B", text: "$5 \\text{ cm}$" },
        { key: "C", text: "$4\\pi \\text{ cm}$" },
        { key: "D", text: "$20\\pi \\text{ cm}$" }
      ],
      answer: "B"
    },
    {
      id: "q3",
      prompt: `จากสมการ $x = 5 \\sin(4\\pi t)$ เซนติเมตร ความถี่เชิงมุม ($\\omega$) ของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$4 \\text{ rad/s}$" },
        { key: "B", text: "$5 \\text{ rad/s}$" },
        { key: "C", text: "$4\\pi \\text{ rad/s}$" },
        { key: "D", text: "$20\\pi \\text{ rad/s}$" }
      ],
      answer: "C"
    },
    {
      id: "q4",
      prompt: `จากสมการ $x = 5 \\sin(4\\pi t)$ เซนติเมตร อัตราเร็วสูงสุด ($v_{max}$) ของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$20\\pi \\text{ cm/s}$" },
        { key: "B", text: "$20 \\text{ cm/s}$" },
        { key: "C", text: "$5 \\text{ cm/s}$" },
        { key: "D", text: "$4\\pi \\text{ cm/s}$" }
      ],
      answer: "A"
    },
    {
      id: "q5",
      prompt: `จากสมการ $x = 5 \\sin(4\\pi t)$ เซนติเมตร ขนาดของความเร่งสูงสุด ($a_{max}$) ของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$20\\pi \\text{ cm/s}^2$" },
        { key: "B", text: "$40\\pi^2 \\text{ cm/s}^2$" },
        { key: "C", text: "$80\\pi^2 \\text{ cm/s}^2$" },
        { key: "D", text: "$100\\pi^2 \\text{ cm/s}^2$" }
      ],
      answer: "C"
    },
    {
      id: "q6",
      prompt: `ในการเคลื่อนที่แบบ SHM เฟสของความเร็วจะนำหน้าเฟสของการกระจัดอยู่เท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\pi}{4} \\text{ เรเดียน}$" },
        { key: "B", text: "$\\frac{\\pi}{2} \\text{ เรเดียน}$" },
        { key: "C", text: "$\\pi \\text{ เรเดียน}$" },
        { key: "D", text: "$2\\pi \\text{ เรเดียน}$" }
      ],
      answer: "B"
    },
    {
      id: "q7",
      prompt: `ในการเคลื่อนที่แบบ SHM เฟสของความเร่งจะนำหน้าเฟสของความเร็วอยู่เท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\pi}{4} \\text{ เรเดียน}$" },
        { key: "B", text: "$\\frac{\\pi}{2} \\text{ เรเดียน}$" },
        { key: "C", text: "$\\pi \\text{ เรเดียน}$" },
        { key: "D", text: "$2\\pi \\text{ เรเดียน}$" }
      ],
      answer: "B"
    },
    {
      id: "q8",
      prompt: `ในการเคลื่อนที่แบบ SHM เฟสของความเร่งและเฟสของการกระจัดมีความต่างเฟสกันเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{\\pi}{2} \\text{ เรเดียน}$" },
        { key: "B", text: "$\\pi \\text{ เรเดียน}$" },
        { key: "C", text: "$\\frac{3\\pi}{2} \\text{ เรเดียน}$" },
        { key: "D", text: "$2\\pi \\text{ เรเดียน}$" }
      ],
      answer: "B"
    },
    {
      id: "q9",
      prompt: `วัตถุมวล $2 \\text{ kg}$ ผูกติดกับสปริงที่มีค่านิจ $200 \\text{ N/m}$ ความถี่เชิงมุม ($\\omega$) ของระบบมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$10 \\text{ rad/s}$" },
        { key: "B", text: "$20 \\text{ rad/s}$" },
        { key: "C", text: "$100 \\text{ rad/s}$" },
        { key: "D", text: "$400 \\text{ rad/s}$" }
      ],
      answer: "A"
    },
    {
      id: "q10",
      prompt: `วัตถุมวล $m$ ติดสปริงค่านิจ $k$ หากต้องการให้คาบการสั่น ($T$) เพิ่มขึ้นเป็น $2$ เท่า ต้องทำอย่างไร?`,
      choices: [
        { key: "A", text: "เพิ่มมวลเป็น $2$ เท่า" },
        { key: "B", text: "เพิ่มมวลเป็น $4$ เท่า" },
        { key: "C", text: "ลดมวลลงครึ่งหนึ่ง" },
        { key: "D", text: "ลดค่านิจสปริงลง $2$ เท่า" }
      ],
      answer: "B"
    },
    {
      id: "q11",
      prompt: `ลูกตุ้มนาฬิกาแขวนด้วยเชือกยาว $L$ หากนำไปแกว่งบนดวงจันทร์ที่มีค่าความเร่งโน้มถ่วงน้อยกว่าโลก คาบการแกว่งจะเป็นอย่างไร?`,
      choices: [
        { key: "A", text: "เพิ่มขึ้น" },
        { key: "B", text: "ลดลง" },
        { key: "C", text: "เท่าเดิม" },
        { key: "D", text: "หยุดแกว่ง" }
      ],
      answer: "A"
    },
    {
      id: "q12",
      prompt: `ลูกตุ้มนาฬิกาแขวนด้วยเชือกยาว $L$ หากเพิ่มมวลของลูกตุ้มเป็น $2$ เท่า คาบการแกว่งจะเปลี่ยนแปลงอย่างไร?`,
      choices: [
        { key: "A", text: "เพิ่มเป็น $\\sqrt{2}$ เท่า" },
        { key: "B", text: "ลดลงครึ่งหนึ่ง" },
        { key: "C", text: "เท่าเดิม" },
        { key: "D", text: "เพิ่มเป็น $2$ เท่า" }
      ],
      answer: "C"
    },
    {
      id: "q13",
      prompt: `ลูกตุ้มอย่างง่ายสายยาว $1 \\text{ m}$ แกว่งบนโลก ($g \\approx \\pi^2 \\text{ m/s}^2$) คาบการแกว่งมีค่าประมาณเท่าใด?`,
      choices: [
        { key: "A", text: "$0.5 \\text{ s}$" },
        { key: "B", text: "$1.0 \\text{ s}$" },
        { key: "C", text: "$2.0 \\text{ s}$" },
        { key: "D", text: "$4.0 \\text{ s}$" }
      ],
      answer: "C"
    },
    {
      id: "q14",
      prompt: `เมื่อวัตถุเคลื่อนที่แบบ SHM ผ่าน "ตำแหน่งสมดุล" ข้อใดกล่าวถูกต้องที่สุด?`,
      choices: [
        { key: "A", text: "ความเร็วมีค่าเป็นศูนย์" },
        { key: "B", text: "ความเร่งมีค่าสูงสุด" },
        { key: "C", text: "พลังงานศักย์ยืดหยุ่นมีค่าสูงสุด" },
        { key: "D", text: "อัตราเร็วมีค่าสูงสุด" }
      ],
      answer: "D"
    },
    {
      id: "q15",
      prompt: `เมื่อวัตถุเคลื่อนที่แบบ SHM อยู่ที่ "ตำแหน่งการกระจัดสูงสุด" (แอมพลิจูด) ข้อใดกล่าวถูกต้อง?`,
      choices: [
        { key: "A", text: "ความเร็วมีค่าสูงสุด" },
        { key: "B", text: "ความเร่งมีค่าเป็นศูนย์" },
        { key: "C", text: "พลังงานจลน์มีค่าเป็นศูนย์" },
        { key: "D", text: "พลังงานกลทั้งหมดมีค่าเป็นศูนย์" }
      ],
      answer: "C"
    },
    {
      id: "q16",
      prompt: `พลังงานกลรวมของระบบมวล-สปริงที่สั่นแบบ SHM มีค่าแปรผันตรงกับปริมาณใด?`,
      choices: [
        { key: "A", text: "แอมพลิจูด ($A$)" },
        { key: "B", text: "กำลังสองของแอมพลิจูด ($A^2$)" },
        { key: "C", text: "คาบการสั่น ($T$)" },
        { key: "D", text: "กำลังสองของความเร็ว ($v^2$)" }
      ],
      answer: "B"
    },
    {
      id: "q17",
      prompt: `ระบบ SHM มีพลังงานกลรวม $20 \\text{ J}$ ขณะที่วัตถุผ่านตำแหน่งสมดุล พลังงานจลน์ของวัตถุมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0 \\text{ J}$" },
        { key: "B", text: "$10 \\text{ J}$" },
        { key: "C", text: "$20 \\text{ J}$" },
        { key: "D", text: "$40 \\text{ J}$" }
      ],
      answer: "C"
    },
    {
      id: "q18",
      prompt: `วัตถุสั่นแบบ SHM ด้วยแอมพลิจูด $A$ ที่ตำแหน่งใด พลังงานจลน์จึงจะมีค่าเท่ากับพลังงานศักย์?`,
      choices: [
        { key: "A", text: "$x = \\frac{A}{2}$" },
        { key: "B", text: "$x = \\frac{A}{\\sqrt{2}}$" },
        { key: "C", text: "$x = \\frac{A}{4}$" },
        { key: "D", text: "$x = A$" }
      ],
      answer: "B"
    },
    {
      id: "q19",
      prompt: `สปริงค่านิจ $k$ ถูกนำมาตัดแบ่งครึ่ง สปริงแต่ละท่อนที่ได้ใหม่จะมีค่านิจสปริงเป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$\\frac{k}{2}$" },
        { key: "B", text: "$k$" },
        { key: "C", text: "$2k$" },
        { key: "D", text: "$4k$" }
      ],
      answer: "C"
    },
    {
      id: "q20",
      prompt: `สปริง 2 ตัว มีค่านิจ $k_1 = 300 \\text{ N/m}$ และ $k_2 = 600 \\text{ N/m}$ นำมาต่อกันแบบ "อนุกรม" จะมีค่านิจสปริงรวม ($k_{eq}$) เป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$200 \\text{ N/m}$" },
        { key: "B", text: "$300 \\text{ N/m}$" },
        { key: "C", text: "$450 \\text{ N/m}$" },
        { key: "D", text: "$900 \\text{ N/m}$" }
      ],
      answer: "A"
    },
    {
      id: "q21",
      prompt: `สปริง 2 ตัว มีค่านิจ $k_1 = 300 \\text{ N/m}$ และ $k_2 = 600 \\text{ N/m}$ นำมาต่อกันแบบ "ขนาน" จะมีค่านิจสปริงรวม ($k_{eq}$) เป็นเท่าใด?`,
      choices: [
        { key: "A", text: "$200 \\text{ N/m}$" },
        { key: "B", text: "$300 \\text{ N/m}$" },
        { key: "C", text: "$450 \\text{ N/m}$" },
        { key: "D", text: "$900 \\text{ N/m}$" }
      ],
      answer: "D"
    },
    {
      id: "q22",
      prompt: `แขวนลูกตุ้มนาฬิกาในลิฟต์ หากลิฟต์กำลังเคลื่อนที่ "ขึ้น" ด้วยความเร่ง $a$ คาบการแกว่งของลูกตุ้มจะเปลี่ยนไปอย่างไรเทียบกับขณะที่ลิฟต์อยู่นิ่ง?`,
      choices: [
        { key: "A", text: "คาบการแกว่งเพิ่มขึ้น" },
        { key: "B", text: "คาบการแกว่งลดลง" },
        { key: "C", text: "คาบการแกว่งเท่าเดิม" },
        { key: "D", text: "แกว่งไม่ได้" }
      ],
      answer: "B"
    },
    {
      id: "q23",
      prompt: `กราฟความสัมพันธ์ระหว่างความเร่ง ($a$) กับการกระจัด ($x$) ของการเคลื่อนที่แบบ SHM มีลักษณะเป็นอย่างไร?`,
      choices: [
        { key: "A", text: "เส้นตรงผ่านจุดกำเนิด มีความชันเป็นบวก" },
        { key: "B", text: "เส้นตรงผ่านจุดกำเนิด มีความชันเป็นลบ" },
        { key: "C", text: "เส้นโค้งพาราโบลาหงาย" },
        { key: "D", text: "เส้นโค้งพาราโบลาคว่ำ" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `วัตถุแกว่งแบบ SHM โดยมีคาบ $T = 4 \\text{ s}$ เริ่มจับเวลาเมื่อวัตถุอยู่ตำแหน่งการกระจัดสูงสุด เวลาผ่านไปเท่าใดวัตถุจึงจะมาถึงตำแหน่งสมดุลเป็นครั้งแรก?`,
      choices: [
        { key: "A", text: "$0.5 \\text{ s}$" },
        { key: "B", text: "$1.0 \\text{ s}$" },
        { key: "C", text: "$2.0 \\text{ s}$" },
        { key: "D", text: "$4.0 \\text{ s}$" }
      ],
      answer: "B"
    },
    {
      id: "q25",
      prompt: `จากสมการความเร็วของการเคลื่อนที่ $v = 10\\pi \\cos(2\\pi t)$ อัตราเร็วสูงสุดของการเคลื่อนที่มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$2\\pi$" },
        { key: "B", text: "$5\\pi$" },
        { key: "C", text: "$10\\pi$" },
        { key: "D", text: "$20\\pi$" }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย ถือเป็นรูปแบบหนึ่งของการเคลื่อนที่ในข้อใด?`,
      choices: [
        { key: "A", text: "การเคลื่อนที่แนวตรงด้วยความเร่งคงที่" },
        { key: "B", text: "การเคลื่อนที่แบบวงกลมด้วยอัตราเร็วคงที่" },
        { key: "C", text: "การเคลื่อนที่แบบโพรเจกไทล์" },
        { key: "D", text: "การเคลื่อนที่แบบคาบ (Periodic Motion) ชนิดหนึ่ง" }
      ],
      answer: "D"
    },
    {
      id: "q27",
      prompt: `ระบบมวล-สปริงวางบนพื้นราบลื่น ถ้ายืดสปริงออกเป็นระยะ $2A$ เทียบกับการยืดออกระยะ $A$ อัตราเร็วสูงสุดของระบบจะเปลี่ยนไปอย่างไร?`,
      choices: [
        { key: "A", text: "เท่าเดิม" },
        { key: "B", text: "เพิ่มขึ้น $\\sqrt{2}$ เท่า" },
        { key: "C", text: "เพิ่มขึ้น $2$ เท่า" },
        { key: "D", text: "เพิ่มขึ้น $4$ เท่า" }
      ],
      answer: "C"
    },
    {
      id: "q28",
      prompt: `ถ้านำระบบมวล-สปริงจากโลกไปทดลองสั่นบนดวงจันทร์ คาบการสั่นของระบบจะเปลี่ยนแปลงหรือไม่ อย่างไร?`,
      choices: [
        { key: "A", text: "ไม่เปลี่ยน เพราะมวลและค่านิจสปริงเท่าเดิม" },
        { key: "B", text: "เพิ่มขึ้น เพราะความเร่งโน้มถ่วงลดลง" },
        { key: "C", text: "ลดลง เพราะความเร่งโน้มถ่วงลดลง" },
        { key: "D", text: "ระบบไม่สามารถสั่นบนดวงจันทร์ได้" }
      ],
      answer: "A"
    },
    {
      id: "q29",
      prompt: `วัตถุแกว่งแบบ SHM มีคาบ $12 \\text{ s}$ เริ่มจับเวลาที่ตำแหน่งสมดุล ($x=0$) วัตถุจะใช้เวลาเท่าใดในการเคลื่อนที่ไปยังการกระจัด $x = \\frac{A}{2}$ เป็นครั้งแรก?`,
      choices: [
        { key: "A", text: "$1 \\text{ s}$" },
        { key: "B", text: "$2 \\text{ s}$" },
        { key: "C", text: "$3 \\text{ s}$" },
        { key: "D", text: "$4 \\text{ s}$" }
      ],
      answer: "A"
    },
    {
      id: "q30",
      prompt: `วัตถุแกว่งแบบ SHM มีคาบ $12 \\text{ s}$ เริ่มจับเวลาที่ตำแหน่งแอมพลิจูด ($x=A$) วัตถุจะใช้เวลาเท่าใดในการเคลื่อนที่มายังการกระจัด $x = \\frac{A}{2}$ เป็นครั้งแรก?`,
      choices: [
        { key: "A", text: "$1 \\text{ s}$" },
        { key: "B", text: "$2 \\text{ s}$" },
        { key: "C", text: "$3 \\text{ s}$" },
        { key: "D", text: "$4 \\text{ s}$" }
      ],
      answer: "B"
    }
  ]
}
};
