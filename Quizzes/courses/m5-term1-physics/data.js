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
}
