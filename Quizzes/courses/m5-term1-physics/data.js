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
      answer: "A",
      explanation: `แอมพลิจูด (A) คือขนาดการกระจัดสูงสุดจากตำแหน่งสมดุล
ส่วนความถี่และคาบบอกเรื่องเวลา ไม่ใช่ระยะ จึงตอบ A`
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
      answer: "C",
      explanation: `ความถี่ $f = \\dfrac{1}{T} = \\dfrac{1}{0.5} = 2.0\\text{ Hz}$
คาบ $T$ คือเวลาต่อรอบ ความถี่คือส่วนกลับของคาบ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\omega$ คือความถี่เชิงมุม (angular frequency) จึงตอบ B`
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
      answer: "B",
      explanation: `อ่านค่าสูงสุดของกราฟได้แอมพลิจูด $A=1.5\\text{ cm}$ จึงตอบ B`
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
      answer: "C",
      explanation: `กราฟครบ 1 รอบใช้เวลา $T=2.0\\text{ s}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$f=\\dfrac{1}{T}=\\dfrac{1}{2}=0.5\\text{ Hz}$ จึงตอบ B`
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
      answer: "A",
      explanation: `กราฟเริ่มที่ $x=0$ แล้วขึ้น (รูปไซน์) เฟสเริ่มต้น $=0^\\circ$ จึงตอบ A`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A=\\dfrac{2\\pi}{2}\\times1.5=1.5\\pi\\text{ cm/s}$ จึงตอบ C`
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
      answer: "B",
      explanation: `อ่านค่าสูงสุดของกราฟได้ $A=1.5\\text{ cm}$ จึงตอบ B`
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
      answer: "C",
      explanation: `ที่ $t=0$ กราฟอยู่ที่ค่าสูงสุดบวก = การกระจัดสูงสุดทางบวก จึงตอบ C`
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
      answer: "B",
      explanation: `กราฟเริ่มที่จุดสูงสุด (รูปโคไซน์) เฟสเริ่มต้น $=\\dfrac{\\pi}{2}$ จึงตอบ B`
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
      answer: "D",
      explanation: `$T=2.0$ s, $f=0.5$ Hz, เริ่มที่จุดสูงสุด $\\phi=90^\\circ$ ถูกทุกข้อ จึงตอบ D`
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
      answer: "B",
      explanation: `$a_{max}=\\omega^2 A=\\pi^2\\times1.5=1.5\\pi^2\\text{ cm/s}^2$ จึงตอบ B`
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
      answer: "B",
      explanation: `อ่านค่าสูงสุดของกราฟได้ $A=0.5\\text{ cm}$ จึงตอบ B`
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
      answer: "C",
      explanation: `กราฟเริ่มที่ค่าต่ำสุด (ติดลบ) เฟสเริ่มต้น $=180^\\circ$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\omega=\\dfrac{2\\pi}{T}=\\dfrac{2\\pi}{2}=\\pi\\text{ rad/s}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$A=0.5$, เริ่มที่ค่าลบสุด (เฟส $\\pi$): $y=0.5\\sin(\\pi t+\\pi)$ จึงตอบ C`
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
      answer: "B",
      explanation: `$V_{max}=\\omega A=\\pi\\times0.5=0.5\\pi\\text{ cm/s}$ จึงตอบ B`
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
      answer: "C",
      explanation: `แอมพลิจูดคือตัวเลขหน้า $\\sin$ คือ $8\\text{ cm}$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\omega=10\\pi$ ดังนั้น $f=\\dfrac{\\omega}{2\\pi}=5\\text{ Hz}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\omega=8\\pi$, $T=\\dfrac{2\\pi}{\\omega}=\\dfrac{2\\pi}{8\\pi}=0.25\\text{ s}$ จึงตอบ B`
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
      answer: "C",
      explanation: `เฟสเริ่มต้นคือพจน์คงที่ในวงเล็บ $=\\dfrac{\\pi}{3}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\dfrac{\\pi}{6}\\times\\dfrac{180}{\\pi}=30^\\circ$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\dfrac{3\\pi}{2}\\times\\dfrac{180}{\\pi}=270^\\circ$ จึงตอบ C`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A=5\\pi\\times0.2=\\pi\\text{ m/s}$ จึงตอบ C`
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
      answer: "D",
      explanation: `$a_{max}=\\omega^2 A=(3\\pi)^2\\times2=18\\pi^2\\text{ cm/s}^2$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\omega=\\dfrac{2\\pi}{T}=\\dfrac{2\\pi}{4}=\\dfrac{\\pi}{2}$, $V_{max}=\\omega A=\\dfrac{\\pi}{2}\\times10=5\\pi$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\omega=2\\pi f=4\\pi$, $a_{max}=\\omega^2 A=(4\\pi)^2\\times5=80\\pi^2$ จึงตอบ C`
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
      answer: "B",
      explanation: `$A=2$, $\\omega=2\\pi f=10\\pi$: $x=2\\sin(10\\pi t)$ จึงตอบ B`
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
      answer: "B",
      explanation: `$-4\\sin(\\pi t)=4\\sin(\\pi t+\\pi)$ (เลื่อนเฟส $\\pi$ กลับเครื่องหมาย) จึงตอบ B`
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
      answer: "B",
      explanation: `SHM: ความเร่งแปรผันตรงกับการกระจัดและมีทิศตรงข้าม ($a=-\\omega^2 x$) จึงตอบ B`
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
      answer: "A",
      explanation: `ที่จุดสมดุล การกระจัด $x=0$ จึงตอบ A`
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
      answer: "B",
      explanation: `ที่จุดสมดุล ความเร็วมีค่าสูงสุด จึงตอบ B`
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
      answer: "C",
      explanation: `ที่จุดสมดุล $x=0$ ดังนั้น $a=-\\omega^2 x=0$ จึงตอบ C`
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
      answer: "B",
      explanation: `ที่ตำแหน่งแอมพลิจูด วัตถุหยุดชั่วขณะ ความเร็ว $=0$ จึงตอบ B`
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
      answer: "D",
      explanation: `ที่แอมพลิจูด $x$ มากสุด ความเร่ง $|a|=\\omega^2 A$ สูงสุด จึงตอบ D`
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
      answer: "C",
      explanation: `แอมพลิจูดคือขนาดการกระจัดสูงสุดจากจุดสมดุล จึงตอบ C`
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
      answer: "C",
      explanation: `ความเร่ง (แรงดึงกลับ) ชี้เข้าหาจุดสมดุลเสมอ จึงตอบ C`
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
      answer: "B",
      explanation: `ความเร็วนำหน้าการกระจัด $90^\\circ$ ($\\frac{\\pi}{2}$) จึงตอบ B`
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
      answer: "C",
      explanation: `ความเร่งต่างเฟสกับการกระจัด $180^\\circ$ (ตรงข้าม) จึงตอบ C`
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
      answer: "B",
      explanation: `ความสัมพันธ์ SHM คือ $a=-\\omega^2 x$ จึงตอบ B`
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
      answer: "B",
      explanation: `$V_{max}=\\omega A$ จึงตอบ B`
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
      answer: "B",
      explanation: `เครื่องหมายลบหมายถึงแรง/ความเร่งมีทิศตรงข้ามกับการกระจัดเสมอ จึงตอบ B`
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
      answer: "B",
      explanation: `$a_{max}=\\omega^2 A$ จึงตอบ B`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A=2\\times5=10\\text{ m/s}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\omega=\\dfrac{2\\pi}{T}=\\pi$, $V_{max}=\\omega A=\\pi\\times4=4\\pi\\text{ cm/s}$ จึงตอบ B`
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
      answer: "D",
      explanation: `$a_{max}=\\omega^2 A=3^2\\times2=18\\text{ m/s}^2$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\omega=\\dfrac{2\\pi}{T}=\\dfrac{2\\pi}{\\pi}=2$, $a_{max}=\\omega^2 A=4\\times5=20$ จึงตอบ B`
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
      answer: "B",
      explanation: `$A=\\dfrac{V_{max}}{\\omega}=\\dfrac{20}{4}=5\\text{ m}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\omega=\\sqrt{\\dfrac{a_{max}}{A}}=\\sqrt{\\dfrac{50}{2}}=\\sqrt{25}=5$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\omega=\\dfrac{a_{max}}{V_{max}}=\\dfrac{20}{10}=2\\text{ rad/s}$ จึงตอบ B`
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
      answer: "B",
      explanation: `$A=\\dfrac{V_{max}}{\\omega}=\\dfrac{10}{2}=5\\text{ cm}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A=2\\times10=20\\text{ m/s}$ จึงตอบ C`
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
      answer: "C",
      explanation: `$a_{max}=\\omega^2 A=4^2\\times5=80\\text{ cm/s}^2$ จึงตอบ C`
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
      answer: "B",
      explanation: `$x=12\\sin\\left(\\dfrac{\\pi}{6}\\right)=12\\times0.5=6\\text{ cm}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$x=8\\cos\\left(\\dfrac{\\pi}{3}\\right)=8\\times0.5=4\\text{ cm}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$v(0)=20\\cos0=20\\text{ m/s}$ จึงตอบ C`
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
      answer: "A",
      explanation: `ที่ $t=0$: $x=4\\sin0=0$ ดังนั้น $a=-\\omega^2 x=0$ จึงตอบ A`
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
      answer: "A",
      explanation: `$v=\\omega A\\cos(\\omega t)$, ที่ $t=0.5$: $\\cos\\left(\\dfrac{\\pi}{2}\\right)=0$ ดังนั้น $v=0$ จึงตอบ A`
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
      answer: "B",
      explanation: `$x=20\\sin\\left(\\dfrac{2\\pi\\times2}{12}\\right)=20\\sin60^\\circ=20\\times\\dfrac{\\sqrt3}{2}=10\\sqrt3$ จึงตอบ B`
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
      answer: "C",
      explanation: `การกระจัดกับความเร่งต่างเฟส $180^\\circ$ (ทิศตรงข้าม) จึงตอบ C`
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
      answer: "B",
      explanation: `ความเร็วนำหน้าการกระจัด $\\dfrac{\\pi}{2}$ จึงตอบ B`
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
      answer: "A",
      explanation: `ความเร็วสูงสุดที่ตำแหน่งสมดุล จึงตอบ A`
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
      answer: "C",
      explanation: `ความเร่งสูงสุดที่ตำแหน่งการกระจัดสูงสุด จึงตอบ C`
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
      answer: "B",
      explanation: `จากสมดุลไปแอมพลิจูดใช้เวลา $\\dfrac{T}{4}=\\dfrac{2}{4}=0.5\\text{ s}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin(\\omega t)=\\dfrac{1}{2}\\Rightarrow\\omega t=\\dfrac{\\pi}{6}\\Rightarrow t=\\dfrac{T}{12}$ จึงตอบ A`
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
      answer: "C",
      explanation: `อนุพันธ์ของไซน์คือโคไซน์ กราฟ $v$-$t$ เป็นรูปโคไซน์ จึงตอบ C`
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
      answer: "D",
      explanation: `$a=-\\omega^2 x$ จึงตอบ D`
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
      answer: "A",
      explanation: `ครบ 1 คาบกลับมาที่จุดเริ่ม (สมดุล) $x=0$ จึงตอบ A`
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
      answer: "C",
      explanation: `$x=A\\cos(\\omega t)\\Rightarrow a=-A\\omega^2\\cos(\\omega t)$ จึงตอบ C`
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
      answer: "B",
      explanation: `$v=\\pm\\omega\\sqrt{A^2-x^2}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$v=\\omega\\sqrt{A^2-(A/2)^2}=\\omega A\\dfrac{\\sqrt3}{2}=\\dfrac{\\sqrt3}{2}v_{max}$ จึงตอบ C`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A=4\\times5=20\\text{ cm/s}$ จึงตอบ C`
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
      answer: "C",
      explanation: `$a_{max}=\\omega^2 A=16\\times5=80\\text{ cm/s}^2$ จึงตอบ C`
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
      answer: "B",
      explanation: `$A=\\dfrac{V_{max}^2}{a_{max}}=\\dfrac{100}{50}=2\\text{ m}$ จึงตอบ B`
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
      answer: "D",
      explanation: `$x=5\\sin(2\\pi t)$: $T=1$ s ใน 1 วิครบ 1 รอบ ระยะทาง $=4A=20\\text{ cm}$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\omega=4\\pi\\Rightarrow f=\\dfrac{\\omega}{2\\pi}=2$ Hz ใน 2 วินาที สั่นได้ $f\\times t=2\\times2=4$ รอบ จึงตอบ B`
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
      answer: "A",
      explanation: `$V_{max}=\\omega A$: $12\\pi=4\\pi\\times A\\Rightarrow A=3\\text{ cm}$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\omega=20\\pi\\Rightarrow f=\\dfrac{\\omega}{2\\pi}=10$ Hz จึงตอบ A`
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
      answer: "C",
      explanation: `$x=2\\sin(\\pi t)$: $T=2$ s, ใน 0.5 วิ = $\\dfrac{T}{4}$ ระยะทาง $=A=2$ m จึงตอบ C`
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
      answer: "C",
      explanation: `$\\omega=5\\pi$, $T=\\dfrac{2\\pi}{5\\pi}=0.4$ s ใน 10 วิ $=\\dfrac{10}{0.4}=25$ รอบ จึงตอบ C`
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
      answer: "D",
      explanation: `ใน 1 รอบ ระยะทาง $=4A=4\\times3=12\\text{ cm}$ จึงตอบ D`
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
      answer: "B",
      explanation: `คาบลูกตุ้ม $T=2\\pi\\sqrt{\\dfrac{L}{g}}$ ไม่ขึ้นกับมวล จึงเท่าเดิม ตอบ B`
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
      answer: "C",
      explanation: `$T\\propto\\sqrt{L}$: $L$ เพิ่ม 4 เท่า $\\Rightarrow T$ เพิ่ม $\\sqrt4=2$ เท่า จึงตอบ C`
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
      answer: "C",
      explanation: `$T\\propto\\dfrac{1}{\\sqrt{g}}$: $g$ ลดเหลือ $\\frac{1}{6}\\Rightarrow T$ เพิ่ม $\\sqrt6$ เท่า จึงตอบ C`
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
      answer: "C",
      explanation: `$T\\propto\\sqrt{m}$: $m$ เพิ่ม 4 เท่า $\\Rightarrow T$ เพิ่ม 2 เท่า จึงตอบ C`
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
      answer: "B",
      explanation: `$f\\propto\\sqrt{k}$: $k$ เพิ่ม 4 เท่า $\\Rightarrow f$ เพิ่ม 2 เท่า จึงตอบ B`
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
      answer: "B",
      explanation: `ตัดครึ่ง $k$ เพิ่ม 2 เท่า, $T\\propto\\dfrac{1}{\\sqrt{k}}\\Rightarrow T$ เป็น $\\dfrac{1}{\\sqrt2}$ เท่า จึงตอบ B`
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
      answer: "D",
      explanation: `คาบมวล-สปริงขึ้นกับ $m,k$ เท่านั้น ไม่ขึ้นกับความเอียง จึงเท่าเดิม ตอบ D`
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
      answer: "B",
      explanation: `$f\\propto\\dfrac{1}{\\sqrt{L}}$: $L_A=9L_B\\Rightarrow f_A=\\dfrac{1}{\\sqrt9}f_B=\\dfrac{1}{3}f_B$ จึงตอบ B`
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
      answer: "B",
      explanation: `SHM: ความเร่งแปรผันตรงกับการกระจัดและทิศตรงข้าม จึงตอบ B`
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
      answer: "B",
      explanation: `แอมพลิจูดคือตัวเลขหน้า $\\sin$ คือ $5\\text{ cm}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\omega$ คือพจน์หน้า $t$ ในวงเล็บ $=4\\pi\\text{ rad/s}$ จึงตอบ C`
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
      answer: "A",
      explanation: `$v_{max}=\\omega A=4\\pi\\times5=20\\pi\\text{ cm/s}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$a_{max}=\\omega^2 A=(4\\pi)^2\\times5=80\\pi^2\\text{ cm/s}^2$ จึงตอบ C`
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
      answer: "B",
      explanation: `ความเร็วนำหน้าการกระจัด $\\dfrac{\\pi}{2}$ จึงตอบ B`
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
      answer: "B",
      explanation: `ความเร่งนำหน้าความเร็ว $\\dfrac{\\pi}{2}$ จึงตอบ B`
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
      answer: "B",
      explanation: `ความเร่งกับการกระจัดต่างเฟส $\\pi$ (ตรงข้าม) จึงตอบ B`
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
      answer: "A",
      explanation: `$\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{200}{2}}=\\sqrt{100}=10\\text{ rad/s}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$T\\propto\\sqrt{m}$: อยากได้ $T$ เพิ่ม 2 เท่า ต้องเพิ่มมวล $2^2=4$ เท่า จึงตอบ B`
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
      answer: "A",
      explanation: `$g$ น้อยลง, $T=2\\pi\\sqrt{L/g}$ เพิ่มขึ้น จึงตอบ A`
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
      answer: "C",
      explanation: `คาบลูกตุ้มไม่ขึ้นกับมวล จึงเท่าเดิม ตอบ C`
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
      answer: "C",
      explanation: `$T=2\\pi\\sqrt{\\dfrac{L}{g}}=2\\pi\\sqrt{\\dfrac{1}{\\pi^2}}=2\\pi\\times\\dfrac{1}{\\pi}=2\\text{ s}$ จึงตอบ C`
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
      answer: "D",
      explanation: `ที่จุดสมดุล อัตราเร็วสูงสุด จึงตอบ D`
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
      answer: "C",
      explanation: `ที่แอมพลิจูด วัตถุหยุดชั่วขณะ พลังงานจลน์ $=0$ จึงตอบ C`
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
      answer: "B",
      explanation: `พลังงานกลรวม $E=\\frac{1}{2}kA^2$ แปรผันกับ $A^2$ จึงตอบ B`
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
      answer: "C",
      explanation: `ที่จุดสมดุลพลังงานทั้งหมดเป็นพลังงานจลน์ $=20\\text{ J}$ จึงตอบ C`
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
      answer: "B",
      explanation: `KE=PE เมื่อ $x=\\dfrac{A}{\\sqrt2}$ จึงตอบ B`
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
      answer: "C",
      explanation: `ตัดสปริงครึ่งหนึ่ง ค่านิจเพิ่มเป็น $2k$ จึงตอบ C`
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
      answer: "A",
      explanation: `อนุกรม: $\\dfrac{1}{k}=\\dfrac{1}{300}+\\dfrac{1}{600}=\\dfrac{3}{600}\\Rightarrow k=200\\text{ N/m}$ จึงตอบ A`
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
      answer: "D",
      explanation: `ขนาน: $k=300+600=900\\text{ N/m}$ จึงตอบ D`
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
      answer: "B",
      explanation: `ลิฟต์เร่งขึ้น $g$ ประสิทธิผลเพิ่ม, $T=2\\pi\\sqrt{L/g}$ ลดลง จึงตอบ B`
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
      answer: "B",
      explanation: `$a=-\\omega^2 x$ เป็นเส้นตรงผ่านจุดกำเนิด ความชันลบ จึงตอบ B`
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
      answer: "B",
      explanation: `จากแอมพลิจูดไปสมดุลใช้ $\\dfrac{T}{4}=\\dfrac{4}{4}=1\\text{ s}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$V_{max}$ คือค่าสัมประสิทธิ์หน้า $\\cos$ คือ $10\\pi$ จึงตอบ C`
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
      answer: "D",
      explanation: `SHM เป็นการเคลื่อนที่แบบคาบ (Periodic Motion) ชนิดหนึ่ง จึงตอบ D`
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
      answer: "C",
      explanation: `$V_{max}=\\omega A$ แปรผันตรงกับแอมพลิจูด: $A$ เพิ่ม 2 เท่า $V_{max}$ เพิ่ม 2 เท่า จึงตอบ C`
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
      answer: "A",
      explanation: `คาบมวล-สปริงขึ้นกับ $m,k$ เท่านั้น ไม่ขึ้นกับ $g$ จึงเท่าเดิม ตอบ A`
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
      answer: "A",
      explanation: `จากสมดุลไป $\\frac{A}{2}$: $t=\\dfrac{T}{12}=\\dfrac{12}{12}=1\\text{ s}$ จึงตอบ A`
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
      answer: "B",
      explanation: `จาก $x=A$ ไป $\\frac{A}{2}$: $\\cos(\\omega t)=\\frac{1}{2}\\Rightarrow\\omega t=\\dfrac{\\pi}{3}\\Rightarrow t=\\dfrac{T}{6}=\\dfrac{12}{6}=2\\text{ s}$ จึงตอบ B`
    }
  ]
},

  "quiz5": {
    meta: {
      courseId: "m5-term1-physics",
      quizKey: "quiz5",
      title: "Quiz 5 : คลื่นกล อัตราเร็วคลื่น กราฟคลื่น และเฟส (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- ทฤษฎีพื้นฐานของคลื่น (ข้อ 1-8) ---
      {
        id: "q1",
        prompt: `คลื่นเป็นการถ่ายโอนสิ่งใดจากที่หนึ่งไปยังอีกที่หนึ่ง โดยที่อนุภาคของตัวกลางไม่ได้เคลื่อนที่ไปพร้อมกับคลื่น?`,
        choices: [
          { key: "A", text: "มวลสารของตัวกลาง" },
          { key: "B", text: "พลังงาน" },
          { key: "C", text: "ประจุไฟฟ้า" },
          { key: "D", text: "อนุภาคของตัวกลางทั้งหมด" }
        ],
        answer: "B",
        explanation: `คลื่นถ่ายโอนพลังงานผ่านตัวกลาง โดยอนุภาคเพียงสั่นรอบจุดสมดุล ไม่ได้เคลื่อนที่ไปกับคลื่น จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `คลื่นชนิดใดที่ต้องอาศัยตัวกลางในการเคลื่อนที่ (เคลื่อนที่ผ่านสุญญากาศไม่ได้)?`,
        choices: [
          { key: "A", text: "คลื่นแม่เหล็กไฟฟ้า" },
          { key: "B", text: "คลื่นแสง" },
          { key: "C", text: "คลื่นกล" },
          { key: "D", text: "คลื่นวิทยุ" }
        ],
        answer: "C",
        explanation: `คลื่นกล (เช่น เสียง คลื่นน้ำ คลื่นในเส้นเชือก) ต้องอาศัยตัวกลาง ส่วนคลื่นแสง/วิทยุเป็นคลื่นแม่เหล็กไฟฟ้าเดินทางในสุญญากาศได้ จึงตอบ C`
      },
      {
        id: "q3",
        prompt: `ข้อใดคือความแตกต่างที่สำคัญที่สุดระหว่างคลื่นแม่เหล็กไฟฟ้ากับคลื่นกล?`,
        choices: [
          { key: "A", text: "คลื่นแม่เหล็กไฟฟ้าเคลื่อนที่ผ่านสุญญากาศได้ แต่คลื่นกลต้องอาศัยตัวกลาง" },
          { key: "B", text: "คลื่นกลเคลื่อนที่เร็วกว่าคลื่นแม่เหล็กไฟฟ้าเสมอ" },
          { key: "C", text: "คลื่นแม่เหล็กไฟฟ้าเป็นคลื่นตามยาวเสมอ" },
          { key: "D", text: "คลื่นกลไม่มีการถ่ายโอนพลังงาน" }
        ],
        answer: "A",
        explanation: `คลื่นแม่เหล็กไฟฟ้าเกิดจากการเปลี่ยนแปลงสนามไฟฟ้า-สนามแม่เหล็ก เดินทางในสุญญากาศได้ ต่างจากคลื่นกลที่ต้องมีตัวกลาง จึงตอบ A`
      },
      {
        id: "q4",
        prompt: `คลื่นตามขวาง (transverse wave) อนุภาคของตัวกลางสั่นในทิศทางใดเทียบกับทิศการเคลื่อนที่ของคลื่น?`,
        choices: [
          { key: "A", text: "สั่นในทิศขนานกับทิศการเคลื่อนที่ของคลื่น" },
          { key: "B", text: "สั่นเป็นวงกลมรอบจุดสมดุล" },
          { key: "C", text: "ไม่มีการสั่น" },
          { key: "D", text: "สั่นในทิศตั้งฉากกับทิศการเคลื่อนที่ของคลื่น" }
        ],
        answer: "D",
        explanation: `คลื่นตามขวาง อนุภาคสั่นตั้งฉากกับทิศการเคลื่อนที่ของคลื่น เช่น คลื่นในเส้นเชือกและคลื่นแสง จึงตอบ D`
      },
      {
        id: "q5",
        prompt: `ข้อใดกล่าวถึงคลื่นตามยาว (longitudinal wave) พร้อมตัวอย่างได้ถูกต้อง?`,
        choices: [
          { key: "A", text: "อนุภาคสั่นตั้งฉากกับทิศการเคลื่อนที่ เช่น คลื่นแสง" },
          { key: "B", text: "อนุภาคสั่นขนานกับทิศการเคลื่อนที่ เช่น คลื่นเสียง" },
          { key: "C", text: "อนุภาคสั่นเป็นวงกลม เช่น คลื่นแม่เหล็กไฟฟ้า" },
          { key: "D", text: "อนุภาคไม่สั่น เช่น คลื่นวิทยุ" }
        ],
        answer: "B",
        explanation: `คลื่นตามยาว อนุภาคสั่นขนานกับทิศการเคลื่อนที่ ทำให้เกิดส่วนอัด-ส่วนขยาย ตัวอย่างชัดเจนคือคลื่นเสียง จึงตอบ B`
      },
      {
        id: "q6",
        prompt: `ข้อใดจับคู่ชนิดของคลื่นได้ถูกต้อง?`,
        choices: [
          { key: "A", text: "คลื่นเสียงเป็นคลื่นตามขวาง" },
          { key: "B", text: "คลื่นแสงเป็นคลื่นตามยาว" },
          { key: "C", text: "คลื่นเสียงเป็นคลื่นตามยาว ส่วนคลื่นแสงเป็นคลื่นตามขวาง" },
          { key: "D", text: "คลื่นน้ำเป็นคลื่นตามยาวเพียงอย่างเดียว" }
        ],
        answer: "C",
        explanation: `คลื่นเสียงเป็นคลื่นตามยาว ส่วนคลื่นแสง (คลื่นแม่เหล็กไฟฟ้า) เป็นคลื่นตามขวาง จึงตอบ C`
      },
      {
        id: "q7",
        prompt: `แอมพลิจูด (amplitude) ของคลื่นหมายถึงข้อใด?`,
        choices: [
          { key: "A", text: "ขนาดการกระจัดสูงสุดของอนุภาคจากตำแหน่งสมดุล ซึ่งสัมพันธ์กับพลังงานของคลื่น" },
          { key: "B", text: "ระยะทางที่คลื่นเคลื่อนที่ได้ใน 1 วินาที" },
          { key: "C", text: "จำนวนรอบที่คลื่นสั่นได้ใน 1 วินาที" },
          { key: "D", text: "เวลาที่คลื่นใช้ในการสั่นครบ 1 รอบ" }
        ],
        answer: "A",
        explanation: `แอมพลิจูดคือขนาดการกระจัดสูงสุดจากตำแหน่งสมดุล และยิ่งมากคลื่นยิ่งพาพลังงานมาก จึงตอบ A`
      },
      {
        id: "q8",
        prompt: `ความสัมพันธ์ระหว่างความถี่ (f) และคาบ (T) ของคลื่นเป็นไปตามข้อใด?`,
        choices: [
          { key: "A", text: "$f = T$" },
          { key: "B", text: "$f = 2\\pi T$" },
          { key: "C", text: "$f = \\dfrac{T}{2}$" },
          { key: "D", text: "$f = \\dfrac{1}{T}$" }
        ],
        answer: "D",
        explanation: `ความถี่คือจำนวนรอบต่อวินาที ซึ่งเป็นส่วนกลับของคาบ ($f=1/T$) จึงตอบ D`
      },

      // --- อัตราเร็วคลื่นและการคำนวณ (ข้อ 9-15) ---
      {
        id: "q9",
        prompt: `สมการหาอัตราเร็วของคลื่น (v) เมื่อทราบความถี่ (f) และความยาวคลื่น ($\\lambda$) คือข้อใด?`,
        choices: [
          { key: "A", text: "$v = \\dfrac{f}{\\lambda}$" },
          { key: "B", text: "$v = f\\lambda$" },
          { key: "C", text: "$v = \\dfrac{\\lambda}{f}$" },
          { key: "D", text: "$v = f + \\lambda$" }
        ],
        answer: "B",
        explanation: `อัตราเร็วคลื่น $v = f\\lambda$ (ความถี่คูณความยาวคลื่น) จึงตอบ B`
      },
      {
        id: "q10",
        prompt: `คลื่นมีความถี่ $50 \\text{ Hz}$ และความยาวคลื่น $0.2 \\text{ m}$ อัตราเร็วของคลื่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$250 \\text{ m/s}$" },
          { key: "B", text: "$0.004 \\text{ m/s}$" },
          { key: "C", text: "$10 \\text{ m/s}$" },
          { key: "D", text: "$50 \\text{ m/s}$" }
        ],
        answer: "C",
        explanation: `$v = f\\lambda = 50 \\times 0.2 = 10 \\text{ m/s}$ จึงตอบ C`
      },
      {
        id: "q11",
        prompt: `คลื่นเสียงมีอัตราเร็ว $340 \\text{ m/s}$ และความถี่ $170 \\text{ Hz}$ ความยาวคลื่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$2 \\text{ m}$" },
          { key: "B", text: "$0.5 \\text{ m}$" },
          { key: "C", text: "$4 \\text{ m}$" },
          { key: "D", text: "$510 \\text{ m}$" }
        ],
        answer: "A",
        explanation: `$\\lambda = v/f = 340/170 = 2 \\text{ m}$ จึงตอบ A`
      },
      {
        id: "q12",
        prompt: `คลื่นเคลื่อนที่ด้วยอัตราเร็ว $12 \\text{ m/s}$ มีความยาวคลื่น $3 \\text{ m}$ ความถี่เป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$36 \\text{ Hz}$" },
          { key: "B", text: "$0.25 \\text{ Hz}$" },
          { key: "C", text: "$15 \\text{ Hz}$" },
          { key: "D", text: "$4 \\text{ Hz}$" }
        ],
        answer: "D",
        explanation: `$f = v/\\lambda = 12/3 = 4 \\text{ Hz}$ จึงตอบ D`
      },
      {
        id: "q13",
        prompt: `คลื่นมีความถี่ $5 \\text{ Hz}$ คาบของคลื่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$5 \\text{ s}$" },
          { key: "B", text: "$0.2 \\text{ s}$" },
          { key: "C", text: "$0.5 \\text{ s}$" },
          { key: "D", text: "$2 \\text{ s}$" }
        ],
        answer: "B",
        explanation: `$T = 1/f = 1/5 = 0.2 \\text{ s}$ จึงตอบ B`
      },
      {
        id: "q14",
        prompt: `เมื่อคลื่นเคลื่อนที่จากตัวกลางหนึ่งไปยังอีกตัวกลางหนึ่ง ปริมาณใดของคลื่นมีค่าคงที่?`,
        choices: [
          { key: "A", text: "อัตราเร็วของคลื่น" },
          { key: "B", text: "ความยาวคลื่น" },
          { key: "C", text: "ความถี่" },
          { key: "D", text: "ทั้งอัตราเร็วและความยาวคลื่น" }
        ],
        answer: "C",
        explanation: `ความถี่ถูกกำหนดโดยแหล่งกำเนิด จึงคงที่เมื่อเปลี่ยนตัวกลาง ส่วน v และ λ เปลี่ยนไป (v=fλ) จึงตอบ C`
      },
      {
        id: "q15",
        prompt: `แหล่งกำเนิดคลื่นน้ำทำให้เกิดคลื่น 20 ลูก ในเวลา 4 วินาที ความถี่ของคลื่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$5 \\text{ Hz}$" },
          { key: "B", text: "$0.2 \\text{ Hz}$" },
          { key: "C", text: "$80 \\text{ Hz}$" },
          { key: "D", text: "$4 \\text{ Hz}$" }
        ],
        answer: "A",
        explanation: `$f = \\dfrac{จำนวนรอบ}{เวลา} = \\dfrac{20}{4} = 5 \\text{ Hz}$ จึงตอบ A`
      },

      // --- กราฟคลื่น (ข้อ 16-23) ---
      {
        id: "q16",
        prompt: `จากกราฟการกระจัด–ตำแหน่ง (y–x) ของคลื่นต่อไปนี้ ความยาวคลื่น ($\\lambda$) มีค่ากี่เมตร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q5_16.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "$1 \\text{ m}$" },
          { key: "B", text: "$2 \\text{ m}$" },
          { key: "C", text: "$4 \\text{ m}$" },
          { key: "D", text: "$0.5 \\text{ m}$" }
        ],
        answer: "B",
        explanation: `ความยาวคลื่นคือระยะระหว่างยอดคลื่นสองยอดที่ติดกัน (จาก x=0.5 ถึง x=2.5) = 2 m จึงตอบ B`
      },
      {
        id: "q17",
        prompt: `แอมพลิจูดของคลื่นมีความสัมพันธ์โดยตรงกับปริมาณใดของคลื่น?`,
        choices: [
          { key: "A", text: "ความถี่ของคลื่น" },
          { key: "B", text: "ความยาวคลื่น" },
          { key: "C", text: "อัตราเร็วของคลื่น" },
          { key: "D", text: "พลังงานที่คลื่นถ่ายโอน" }
        ],
        answer: "D",
        explanation: `แอมพลิจูดยิ่งมาก คลื่นยิ่งพาพลังงานมาก (พลังงานแปรผันตามกำลังสองของแอมพลิจูด) จึงตอบ D`
      },
      {
        id: "q18",
        prompt: `จากกราฟการกระจัด–เวลา (y–t) ของอนุภาคต่อไปนี้ คาบ (T) ของคลื่นมีค่ากี่วินาที?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q5_18.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "$0.2 \\text{ s}$" },
          { key: "B", text: "$0.8 \\text{ s}$" },
          { key: "C", text: "$0.4 \\text{ s}$" },
          { key: "D", text: "$2.5 \\text{ s}$" }
        ],
        answer: "C",
        explanation: `คาบคือเวลาในการสั่นครบ 1 รอบเต็ม จากกราฟอ่านได้ $T = 0.4 \\text{ s}$ จึงตอบ C`
      },
      {
        id: "q19",
        prompt: `อนุภาคหนึ่งสั่นด้วยคาบ $0.4 \\text{ s}$ ความถี่ของการสั่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$2.5 \\text{ Hz}$" },
          { key: "B", text: "$0.4 \\text{ Hz}$" },
          { key: "C", text: "$4 \\text{ Hz}$" },
          { key: "D", text: "$25 \\text{ Hz}$" }
        ],
        answer: "A",
        explanation: `$f = 1/T = 1/0.4 = 2.5 \\text{ Hz}$ จึงตอบ A`
      },
      {
        id: "q20",
        prompt: `กราฟการกระจัด–ตำแหน่ง (y–x) และกราฟการกระจัด–เวลา (y–t) ให้ข้อมูลของคลื่นต่างกันอย่างไร?`,
        choices: [
          { key: "A", text: "ทั้งสองกราฟอ่านความยาวคลื่นได้เหมือนกัน" },
          { key: "B", text: "กราฟ y–x ใช้อ่านความยาวคลื่น (λ) ส่วนกราฟ y–t ใช้อ่านคาบ (T)" },
          { key: "C", text: "กราฟ y–x ใช้อ่านคาบ ส่วนกราฟ y–t ใช้อ่านความยาวคลื่น" },
          { key: "D", text: "ทั้งสองกราฟอ่านได้เฉพาะแอมพลิจูดเท่านั้น" }
        ],
        answer: "B",
        explanation: `แกนนอนเป็นตำแหน่ง (x) จะอ่านความยาวคลื่น λ ส่วนแกนนอนเป็นเวลา (t) จะอ่านคาบ T จึงตอบ B`
      },
      {
        id: "q21",
        prompt: `รูปแสดงตำแหน่งของพัลส์คลื่นบนเส้นเชือกที่เวลา $t=0$ และ $t=2$ วินาที อัตราเร็วของคลื่นเป็นเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q5_21.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "$2 \\text{ m/s}$" },
          { key: "B", text: "$4 \\text{ m/s}$" },
          { key: "C", text: "$8 \\text{ m/s}$" },
          { key: "D", text: "$1 \\text{ m/s}$" }
        ],
        answer: "A",
        explanation: `พัลส์เลื่อนไป $\\Delta x = 4 \\text{ m}$ ในเวลา $\\Delta t = 2 \\text{ s}$ ดังนั้น $v = \\Delta x/\\Delta t = 4/2 = 2 \\text{ m/s}$ จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `คลื่นเคลื่อนที่ได้ระยะ $12 \\text{ m}$ ในเวลา $3 \\text{ s}$ ถ้าความยาวคลื่นเท่ากับ $2 \\text{ m}$ ความถี่ของคลื่นเป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$6 \\text{ Hz}$" },
          { key: "B", text: "$24 \\text{ Hz}$" },
          { key: "C", text: "$0.5 \\text{ Hz}$" },
          { key: "D", text: "$2 \\text{ Hz}$" }
        ],
        answer: "D",
        explanation: `$v = 12/3 = 4 \\text{ m/s}$ แล้ว $f = v/\\lambda = 4/2 = 2 \\text{ Hz}$ จึงตอบ D`
      },
      {
        id: "q23",
        prompt: `จากรูปคลื่นตามยาวต่อไปนี้ บริเวณที่อนุภาคของตัวกลางอยู่ชิดกันหนาแน่นที่สุดเรียกว่าอะไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q5_23.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "ส่วนอัด (compression)" },
          { key: "B", text: "ส่วนขยาย (rarefaction)" },
          { key: "C", text: "ยอดคลื่น (crest)" },
          { key: "D", text: "ท้องคลื่น (trough)" }
        ],
        answer: "A",
        explanation: `ในคลื่นตามยาว บริเวณที่อนุภาคชิดกันหนาแน่นคือส่วนอัด ส่วนบริเวณที่ห่างกันคือส่วนขยาย (ยอด/ท้องคลื่นใช้กับคลื่นตามขวาง) จึงตอบ A`
      },

      // --- เฟสและความต่างเฟส (ข้อ 24-30) ---
      {
        id: "q24",
        prompt: `เฟสเริ่มต้น (initial phase) ของคลื่นบอกถึงสิ่งใด?`,
        choices: [
          { key: "A", text: "ความยาวคลื่นของคลื่น" },
          { key: "B", text: "อัตราเร็วของคลื่น" },
          { key: "C", text: "จำนวนรอบต่อวินาที" },
          { key: "D", text: "สถานะการสั่น (ตำแหน่งบนวงรอบการสั่น) ของคลื่น ณ เวลาเริ่มต้น $t=0$" }
        ],
        answer: "D",
        explanation: `เฟสเริ่มต้นบอกสถานะการสั่น ณ เวลา $t=0$ ว่าเริ่มจากตำแหน่งใดของวงรอบ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `ความต่างเฟส ($\\Delta\\phi$) ระหว่างจุดสองจุดบนคลื่นที่ห่างกันเป็นระยะ $\\Delta x$ เมื่อความยาวคลื่นเป็น $\\lambda$ หาได้จากข้อใด?`,
        choices: [
          { key: "A", text: "$\\Delta\\phi = \\dfrac{2\\pi\\lambda}{\\Delta x}$" },
          { key: "B", text: "$\\Delta\\phi = \\dfrac{\\pi\\,\\Delta x}{\\lambda}$" },
          { key: "C", text: "$\\Delta\\phi = \\dfrac{2\\pi\\,\\Delta x}{\\lambda}$" },
          { key: "D", text: "$\\Delta\\phi = \\dfrac{\\Delta x}{\\lambda}$" }
        ],
        answer: "C",
        explanation: `ระยะห่าง 1 ความยาวคลื่นเทียบเท่าเฟส $2\\pi$ ดังนั้น $\\Delta\\phi = 2\\pi\\dfrac{\\Delta x}{\\lambda}$ จึงตอบ C`
      },
      {
        id: "q26",
        prompt: `จากรูป จุด P และ จุด Q อยู่บนคลื่นเดียวกัน (ความยาวคลื่น $4 \\text{ m}$) ความต่างเฟสระหว่างจุด P และ Q มีค่าเท่าใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q5_26.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "$\\dfrac{\\pi}{2} \\text{ rad}$" },
          { key: "B", text: "$\\pi \\text{ rad}$" },
          { key: "C", text: "$2\\pi \\text{ rad}$" },
          { key: "D", text: "$\\dfrac{\\pi}{4} \\text{ rad}$" }
        ],
        answer: "B",
        explanation: `P (ยอดคลื่น) กับ Q (ท้องคลื่น) ห่างกัน $\\Delta x = 2 \\text{ m} = \\lambda/2$ ดังนั้น $\\Delta\\phi = 2\\pi\\cdot\\dfrac{1}{2} = \\pi$ จึงตอบ B`
      },
      {
        id: "q27",
        prompt: `จุดสองจุดบนคลื่นอยู่ห่างกันเป็นระยะ $\\dfrac{\\lambda}{4}$ ความต่างเฟสของสองจุดนี้เป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$2\\pi \\text{ rad}$" },
          { key: "B", text: "$\\pi \\text{ rad}$" },
          { key: "C", text: "$\\dfrac{\\pi}{4} \\text{ rad}$" },
          { key: "D", text: "$\\dfrac{\\pi}{2} \\text{ rad}$" }
        ],
        answer: "D",
        explanation: `$\\Delta\\phi = 2\\pi\\cdot\\dfrac{\\lambda/4}{\\lambda} = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}$ จึงตอบ D`
      },
      {
        id: "q28",
        prompt: `จุดสองจุดบนคลื่นอยู่ห่างกัน $3 \\text{ m}$ ถ้าความยาวคลื่นเป็น $4 \\text{ m}$ ความต่างเฟสของสองจุดนี้เป็นเท่าใด?`,
        choices: [
          { key: "A", text: "$\\dfrac{\\pi}{2} \\text{ rad}$" },
          { key: "B", text: "$\\pi \\text{ rad}$" },
          { key: "C", text: "$\\dfrac{3\\pi}{2} \\text{ rad}$" },
          { key: "D", text: "$3\\pi \\text{ rad}$" }
        ],
        answer: "C",
        explanation: `$\\Delta\\phi = 2\\pi\\cdot\\dfrac{\\Delta x}{\\lambda} = 2\\pi\\cdot\\dfrac{3}{4} = \\dfrac{3\\pi}{2}$ จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `จุดสองจุดบนคลื่นที่มีเฟสตรงกัน (in phase) จะอยู่ห่างกันเป็นระยะเท่าใด (เมื่อ n เป็นจำนวนเต็ม)?`,
        choices: [
          { key: "A", text: "จำนวนเต็มเท่าของความยาวคลื่น ($n\\lambda$)" },
          { key: "B", text: "ครึ่งหนึ่งของความยาวคลื่น ($\\lambda/2$)" },
          { key: "C", text: "หนึ่งในสี่ของความยาวคลื่น ($\\lambda/4$)" },
          { key: "D", text: "$\\left(n+\\dfrac{1}{2}\\right)\\lambda$" }
        ],
        answer: "A",
        explanation: `จุดที่เฟสตรงกันต่างเฟส $2\\pi$ พอดี ระยะห่างจึงเป็นจำนวนเต็มเท่าของความยาวคลื่น $n\\lambda$ จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `จุดสองจุดบนคลื่นที่มีเฟสตรงข้ามกัน (ต่างเฟส $\\pi$) จะอยู่ห่างกันเป็นระยะเท่าใด (เมื่อ n เป็นจำนวนเต็ม)?`,
        choices: [
          { key: "A", text: "$n\\lambda$" },
          { key: "B", text: "$\\left(n+\\dfrac{1}{2}\\right)\\lambda$" },
          { key: "C", text: "$\\dfrac{\\lambda}{4}$" },
          { key: "D", text: "$2n\\lambda$" }
        ],
        answer: "B",
        explanation: `เฟสตรงข้ามต่างเฟส $\\pi$ ระยะห่างเป็นครึ่งความยาวคลื่นบวกจำนวนเต็มเท่า คือ $\\left(n+\\dfrac{1}{2}\\right)\\lambda$ จึงตอบ B`
      }
    ]
  },

  "quiz6": {
    meta: {
      courseId: "m5-term1-physics",
      quizKey: "quiz6",
      title: "Quiz 6 : การเคลื่อนที่แบบ SHM (เตรียมสอบกลางภาค) (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- นิยามและปริมาณพื้นฐาน (ข้อ 1-9) ---
      {
        id: "q1",
        prompt: `การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (SHM) มีลักษณะสำคัญตรงกับข้อใด`,
        choices: [
          { key: "A", text: "ความเร็วคงที่ตลอดการเคลื่อนที่" },
          { key: "B", text: "ความเร่งคงที่ตลอดการเคลื่อนที่" },
          { key: "C", text: "ความเร่งแปรผันตรงกับการกระจัด และมีทิศตรงข้ามกับการกระจัดเสมอ" },
          { key: "D", text: "การกระจัดแปรผันตรงกับเวลา" }
        ],
        answer: "C",
        explanation: `SHM มีความเร่งแปรผันตรงกับการกระจัดและทิศตรงข้ามเสมอ ($a = -\\omega^2 x$) จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `แอมพลิจูดของการเคลื่อนที่แบบ SHM หมายถึงข้อใด`,
        choices: [
          { key: "A", text: "ขนาดการกระจัดสูงสุดจากตำแหน่งสมดุล" },
          { key: "B", text: "จำนวนรอบต่อวินาที" },
          { key: "C", text: "เวลาในการเคลื่อนที่ครบ 1 รอบ" },
          { key: "D", text: "ความเร็วสูงสุดของวัตถุ" }
        ],
        answer: "A",
        explanation: `แอมพลิจูด (A) คือขนาดการกระจัดสูงสุดจากตำแหน่งสมดุล จึงตอบ A`
      },
      {
        id: "q3",
        prompt: `ความสัมพันธ์ระหว่างความถี่เชิงมุม ($\\omega$), คาบ ($T$) และความถี่ ($f$) ข้อใดถูกต้อง`,
        choices: [
          { key: "A", text: "$\\omega = \\dfrac{T}{2\\pi}$" },
          { key: "B", text: "$\\omega = \\dfrac{2\\pi}{f}$" },
          { key: "C", text: "$\\omega = \\dfrac{f}{2\\pi}$" },
          { key: "D", text: "$\\omega = 2\\pi f = \\dfrac{2\\pi}{T}$" }
        ],
        answer: "D",
        explanation: `$\\omega = 2\\pi f = \\dfrac{2\\pi}{T}$ จึงตอบ D`
      },
      {
        id: "q4",
        prompt: `วัตถุสั่นแบบ SHM ด้วยความถี่ $2 \\text{ Hz}$ ความถี่เชิงมุม ($\\omega$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$2\\pi \\text{ rad/s}$" },
          { key: "B", text: "$4\\pi \\text{ rad/s}$" },
          { key: "C", text: "$\\pi \\text{ rad/s}$" },
          { key: "D", text: "$\\dfrac{1}{2\\pi} \\text{ rad/s}$" }
        ],
        answer: "B",
        explanation: `$\\omega = 2\\pi f = 2\\pi(2) = 4\\pi \\text{ rad/s}$ จึงตอบ B`
      },
      {
        id: "q5",
        prompt: `วัตถุสั่นแบบ SHM มีความถี่เชิงมุม $\\omega = \\pi \\text{ rad/s}$ คาบ ($T$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$\\pi \\text{ s}$" },
          { key: "B", text: "$\\dfrac{1}{\\pi} \\text{ s}$" },
          { key: "C", text: "$2 \\text{ s}$" },
          { key: "D", text: "$2\\pi \\text{ s}$" }
        ],
        answer: "C",
        explanation: `$T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{\\pi} = 2 \\text{ s}$ จึงตอบ C`
      },
      {
        id: "q6",
        prompt: `วัตถุสั่นแบบ SHM มีคาบ $0.25 \\text{ s}$ ความถี่ ($f$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$4 \\text{ Hz}$" },
          { key: "B", text: "$0.25 \\text{ Hz}$" },
          { key: "C", text: "$2 \\text{ Hz}$" },
          { key: "D", text: "$8 \\text{ Hz}$" }
        ],
        answer: "A",
        explanation: `$f = \\dfrac{1}{T} = \\dfrac{1}{0.25} = 4 \\text{ Hz}$ จึงตอบ A`
      },
      {
        id: "q7",
        prompt: `ขณะที่วัตถุ SHM เคลื่อนที่ผ่านตำแหน่งสมดุล ข้อใดถูกต้อง`,
        choices: [
          { key: "A", text: "ความเร็วเป็นศูนย์ ความเร่งสูงสุด" },
          { key: "B", text: "ความเร็วสูงสุด ความเร่งสูงสุด" },
          { key: "C", text: "ความเร็วเป็นศูนย์ ความเร่งเป็นศูนย์" },
          { key: "D", text: "ความเร็วสูงสุด และความเร่งเป็นศูนย์" }
        ],
        answer: "D",
        explanation: `ที่ตำแหน่งสมดุล การกระจัดเป็นศูนย์ ความเร่ง ($a=-\\omega^2 x$) จึงเป็นศูนย์ ส่วนความเร็วมีค่าสูงสุด จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `ขณะที่วัตถุ SHM อยู่ที่ตำแหน่งการกระจัดสูงสุด (แอมพลิจูด) ข้อใดถูกต้อง`,
        choices: [
          { key: "A", text: "ความเร็วสูงสุด ความเร่งเป็นศูนย์" },
          { key: "B", text: "ความเร็วเป็นศูนย์ และความเร่งมีค่าสูงสุด" },
          { key: "C", text: "ความเร็วและความเร่งสูงสุดพร้อมกัน" },
          { key: "D", text: "พลังงานจลน์มีค่าสูงสุด" }
        ],
        answer: "B",
        explanation: `ที่ตำแหน่งขอบสุด วัตถุหยุดชั่วขณะ (v=0) และความเร่งมีค่าสูงสุด (การกระจัดมากสุด) จึงตอบ B`
      },
      {
        id: "q9",
        prompt: `จากรูปวงกลมอ้างอิงต่อไปนี้ การเคลื่อนที่แบบ SHM สัมพันธ์กับการเคลื่อนที่แบบวงกลมสม่ำเสมออย่างไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q6_09.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "SHM ไม่มีความเกี่ยวข้องกับการเคลื่อนที่แบบวงกลม" },
          { key: "B", text: "SHM คือการเคลื่อนที่เป็นวงกลมจริง ๆ" },
          { key: "C", text: "SHM คือภาพฉาย (projection) ของการเคลื่อนที่แบบวงกลมสม่ำเสมอลงบนเส้นผ่านศูนย์กลาง โดยมี $\\omega$ เท่ากัน" },
          { key: "D", text: "SHM มีความเร็วเชิงมุมมากกว่าการเคลื่อนที่แบบวงกลม 2 เท่า" }
        ],
        answer: "C",
        explanation: `SHM คือภาพฉายของอนุภาคที่เคลื่อนที่เป็นวงกลมสม่ำเสมอลงบนแกน โดยใช้ความถี่เชิงมุม $\\omega$ เดียวกัน จึงตอบ C`
      },

      // --- สมการการเคลื่อนที่และการคำนวณ (ข้อ 10-15) ---
      {
        id: "q10",
        prompt: `สมการการกระจัด $x = 5\\sin(4t)$ เซนติเมตร แอมพลิจูดมีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$5 \\text{ cm}$" },
          { key: "B", text: "$4 \\text{ cm}$" },
          { key: "C", text: "$20 \\text{ cm}$" },
          { key: "D", text: "$8 \\text{ cm}$" }
        ],
        answer: "A",
        explanation: `จาก $x = A\\sin(\\omega t)$ ค่าสัมประสิทธิ์หน้า sin คือแอมพลิจูด $A = 5 \\text{ cm}$ จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `จากสมการ $x = 5\\sin(4t)$ เซนติเมตร ความถี่เชิงมุม ($\\omega$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$5 \\text{ rad/s}$" },
          { key: "B", text: "$20 \\text{ rad/s}$" },
          { key: "C", text: "$\\pi \\text{ rad/s}$" },
          { key: "D", text: "$4 \\text{ rad/s}$" }
        ],
        answer: "D",
        explanation: `ค่าสัมประสิทธิ์ของ $t$ ในวงเล็บคือ $\\omega = 4 \\text{ rad/s}$ จึงตอบ D`
      },
      {
        id: "q12",
        prompt: `จากสมการ $x = 5\\sin(4t)$ เซนติเมตร คาบ ($T$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$4 \\text{ s}$" },
          { key: "B", text: "$\\dfrac{\\pi}{2} \\text{ s}$" },
          { key: "C", text: "$2\\pi \\text{ s}$" },
          { key: "D", text: "$8 \\text{ s}$" }
        ],
        answer: "B",
        explanation: `$T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2} \\text{ s}$ จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `จากสมการ $x = 5\\sin(4t)$ เซนติเมตร ความถี่ ($f$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$4 \\text{ Hz}$" },
          { key: "B", text: "$2\\pi \\text{ Hz}$" },
          { key: "C", text: "$\\dfrac{2}{\\pi} \\text{ Hz}$" },
          { key: "D", text: "$\\dfrac{\\pi}{2} \\text{ Hz}$" }
        ],
        answer: "C",
        explanation: `$f = \\dfrac{\\omega}{2\\pi} = \\dfrac{4}{2\\pi} = \\dfrac{2}{\\pi} \\text{ Hz}$ จึงตอบ C`
      },
      {
        id: "q14",
        prompt: `จากสมการ $x = 5\\sin(4t)$ เซนติเมตร อัตราเร็วสูงสุด ($v_{max}$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$20 \\text{ cm/s}$" },
          { key: "B", text: "$5 \\text{ cm/s}$" },
          { key: "C", text: "$4 \\text{ cm/s}$" },
          { key: "D", text: "$80 \\text{ cm/s}$" }
        ],
        answer: "A",
        explanation: `$v_{max} = A\\omega = 5 \\times 4 = 20 \\text{ cm/s}$ จึงตอบ A`
      },
      {
        id: "q15",
        prompt: `จากสมการ $x = 5\\sin(4t)$ เซนติเมตร ขนาดความเร่งสูงสุด ($a_{max}$) เป็นเท่าใด`,
        choices: [
          { key: "A", text: "$20 \\text{ cm/s}^2$" },
          { key: "B", text: "$40 \\text{ cm/s}^2$" },
          { key: "C", text: "$5 \\text{ cm/s}^2$" },
          { key: "D", text: "$80 \\text{ cm/s}^2$" }
        ],
        answer: "D",
        explanation: `$a_{max} = A\\omega^2 = 5 \\times 4^2 = 5 \\times 16 = 80 \\text{ cm/s}^2$ จึงตอบ D`
      },

      // --- กราฟและความสัมพันธ์ (ข้อ 16-20) ---
      {
        id: "q16",
        prompt: `จากกราฟการกระจัด–เวลา (x–t) ของการเคลื่อนที่แบบ SHM ต่อไปนี้ คาบ (T) มีค่ากี่วินาที?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q6_16.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "$2 \\text{ s}$" },
          { key: "B", text: "$4 \\text{ s}$" },
          { key: "C", text: "$8 \\text{ s}$" },
          { key: "D", text: "$5 \\text{ s}$" }
        ],
        answer: "B",
        explanation: `กราฟครบ 1 รอบเต็มในเวลา 4 วินาที ดังนั้น $T = 4 \\text{ s}$ จึงตอบ B`
      },
      {
        id: "q17",
        prompt: `ทิศของความเร่งของวัตถุที่สั่นแบบ SHM เป็นอย่างไร`,
        choices: [
          { key: "A", text: "ทิศเดียวกับการกระจัดเสมอ" },
          { key: "B", text: "ทิศเดียวกับความเร็วเสมอ" },
          { key: "C", text: "ทิศเข้าหาตำแหน่งสมดุลเสมอ (ตรงข้ามกับการกระจัด)" },
          { key: "D", text: "คงที่ ไม่เปลี่ยนทิศ" }
        ],
        answer: "C",
        explanation: `ความเร่ง $a = -\\omega^2 x$ มีทิศตรงข้ามกับการกระจัด คือชี้เข้าหาตำแหน่งสมดุลเสมอ จึงตอบ C`
      },
      {
        id: "q18",
        prompt: `แรงดึงกลับ (restoring force) ที่ทำให้เกิดการเคลื่อนที่แบบ SHM สัมพันธ์กับการกระจัดอย่างไร`,
        choices: [
          { key: "A", text: "$F = -kx$ (แปรผันตรงกับการกระจัด และมีทิศตรงข้าม)" },
          { key: "B", text: "$F = kx^2$" },
          { key: "C", text: "$F = $ ค่าคงที่" },
          { key: "D", text: "$F = kv$" }
        ],
        answer: "A",
        explanation: `แรงดึงกลับใน SHM เป็นไปตาม $F = -kx$ แปรผันตรงกับการกระจัดและมีทิศตรงข้าม จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `จากกราฟความเร็ว–เวลา (v–t) ต่อไปนี้ ขณะที่ความเร็วมีค่าสูงสุด (ที่ $t = 0$) วัตถุอยู่ที่ตำแหน่งใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q6_19.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "ตำแหน่งการกระจัดสูงสุด (แอมพลิจูด)" },
          { key: "B", text: "ตำแหน่งที่ $x = \\dfrac{A}{2}$" },
          { key: "C", text: "หยุดนิ่งถาวร" },
          { key: "D", text: "ตำแหน่งสมดุล ($x = 0$)" }
        ],
        answer: "D",
        explanation: `ความเร็วสูงสุดเกิดที่ตำแหน่งสมดุล ($x = 0$) จึงตอบ D`
      },
      {
        id: "q20",
        prompt: `ความสัมพันธ์ระหว่างความเร่ง ($a$) กับการกระจัด ($x$) ในการเคลื่อนที่แบบ SHM คือข้อใด`,
        choices: [
          { key: "A", text: "$a = \\omega^2 x$" },
          { key: "B", text: "$a = -\\omega^2 x$" },
          { key: "C", text: "$a = -\\omega x$" },
          { key: "D", text: "$a = \\omega x^2$" }
        ],
        answer: "B",
        explanation: `ใน SHM ความเร่ง $a = -\\omega^2 x$ (แปรผันตรงกับ $x$ ทิศตรงข้าม) จึงตอบ B`
      },

      // --- มวล-สปริง และลูกตุ้มอย่างง่าย (ข้อ 21-27) ---
      {
        id: "q21",
        prompt: `ระบบมวล-สปริงที่สั่นแบบ SHM มีความถี่เชิงมุม $\\omega$ สัมพันธ์กับค่านิจสปริง ($k$) และมวล ($m$) อย่างไร`,
        choices: [
          { key: "A", text: "$\\omega = \\sqrt{\\dfrac{m}{k}}$" },
          { key: "B", text: "$\\omega = \\dfrac{k}{m}$" },
          { key: "C", text: "$\\omega = \\sqrt{\\dfrac{k}{m}}$" },
          { key: "D", text: "$\\omega = \\dfrac{m}{k}$" }
        ],
        answer: "C",
        explanation: `ระบบมวล-สปริงมี $\\omega = \\sqrt{\\dfrac{k}{m}}$ จึงตอบ C`
      },
      {
        id: "q22",
        prompt: `คาบการสั่นของระบบมวล-สปริง ($T$) หาได้จากสูตรใด`,
        choices: [
          { key: "A", text: "$T = 2\\pi\\sqrt{\\dfrac{m}{k}}$" },
          { key: "B", text: "$T = 2\\pi\\sqrt{\\dfrac{k}{m}}$" },
          { key: "C", text: "$T = 2\\pi\\sqrt{\\dfrac{L}{g}}$" },
          { key: "D", text: "$T = 2\\pi\\dfrac{m}{k}$" }
        ],
        answer: "A",
        explanation: `คาบของระบบมวล-สปริงคือ $T = 2\\pi\\sqrt{\\dfrac{m}{k}}$ จึงตอบ A`
      },
      {
        id: "q23",
        prompt: `จากระบบมวล-สปริงในรูป ถ้าเพิ่มมวล $m$ เป็น 4 เท่า (โดยค่านิจสปริง $k$ เท่าเดิม) คาบการสั่น $T$ จะเปลี่ยนแปลงอย่างไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q6_23.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "ลดลงครึ่งหนึ่ง" },
          { key: "B", text: "เท่าเดิม" },
          { key: "C", text: "เพิ่มเป็น 4 เท่า" },
          { key: "D", text: "เพิ่มเป็น 2 เท่า" }
        ],
        answer: "D",
        explanation: `$T \\propto \\sqrt{m}$ เมื่อ $m$ เพิ่มเป็น 4 เท่า $T$ จึงเพิ่มเป็น $\\sqrt{4} = 2$ เท่า จึงตอบ D`
      },
      {
        id: "q24",
        prompt: `ระบบมวล-สปริงมีมวล $2 \\text{ kg}$ ค่านิจสปริง $8 \\text{ N/m}$ คาบการสั่นเป็นเท่าใด`,
        choices: [
          { key: "A", text: "$2\\pi \\text{ s}$" },
          { key: "B", text: "$\\pi \\text{ s}$" },
          { key: "C", text: "$\\dfrac{\\pi}{2} \\text{ s}$" },
          { key: "D", text: "$4\\pi \\text{ s}$" }
        ],
        answer: "B",
        explanation: `$T = 2\\pi\\sqrt{\\dfrac{m}{k}} = 2\\pi\\sqrt{\\dfrac{2}{8}} = 2\\pi\\sqrt{\\dfrac{1}{4}} = 2\\pi \\times \\dfrac{1}{2} = \\pi \\text{ s}$ จึงตอบ B`
      },
      {
        id: "q25",
        prompt: `คาบการแกว่งของลูกตุ้มอย่างง่าย ($T$) หาได้จากสูตรใด (เมื่อ $L$ = ความยาวเชือก, $g$ = ความเร่งโน้มถ่วง)`,
        choices: [
          { key: "A", text: "$T = 2\\pi\\sqrt{\\dfrac{g}{L}}$" },
          { key: "B", text: "$T = 2\\pi\\sqrt{\\dfrac{m}{L}}$" },
          { key: "C", text: "$T = 2\\pi\\sqrt{\\dfrac{L}{g}}$" },
          { key: "D", text: "$T = 2\\pi\\dfrac{L}{g}$" }
        ],
        answer: "C",
        explanation: `คาบของลูกตุ้มอย่างง่ายคือ $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$ จึงตอบ C`
      },
      {
        id: "q26",
        prompt: `คาบการแกว่งของลูกตุ้มอย่างง่ายขึ้นอยู่กับปัจจัยใด`,
        choices: [
          { key: "A", text: "ความยาวเชือกและความเร่งโน้มถ่วง แต่ไม่ขึ้นกับมวลของลูกตุ้ม" },
          { key: "B", text: "มวลของลูกตุ้มเท่านั้น" },
          { key: "C", text: "แอมพลิจูดการแกว่งเท่านั้น" },
          { key: "D", text: "ชนิดของวัสดุที่ใช้ทำลูกตุ้ม" }
        ],
        answer: "A",
        explanation: `$T = 2\\pi\\sqrt{\\dfrac{L}{g}}$ ขึ้นกับ $L$ และ $g$ เท่านั้น ไม่ขึ้นกับมวล จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `ลูกตุ้มอย่างง่ายยาว $1 \\text{ m}$ แกว่งบนพื้นโลกที่ $g \\approx \\pi^2 \\text{ m/s}^2$ คาบการแกว่งมีค่าประมาณเท่าใด`,
        choices: [
          { key: "A", text: "$0.5 \\text{ s}$" },
          { key: "B", text: "$1 \\text{ s}$" },
          { key: "C", text: "$4 \\text{ s}$" },
          { key: "D", text: "$2 \\text{ s}$" }
        ],
        answer: "D",
        explanation: `$T = 2\\pi\\sqrt{\\dfrac{L}{g}} = 2\\pi\\sqrt{\\dfrac{1}{\\pi^2}} = 2\\pi \\times \\dfrac{1}{\\pi} = 2 \\text{ s}$ จึงตอบ D`
      },

      // --- พลังงานในการเคลื่อนที่แบบ SHM (ข้อ 28-30) ---
      {
        id: "q28",
        prompt: `จากกราฟพลังงานของ SHM ต่อไปนี้ พลังงานศักย์ (PE) มีค่าสูงสุดที่ตำแหน่งใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="./images/q6_28.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
        choices: [
          { key: "A", text: "ที่ตำแหน่งสมดุล ($x = 0$)" },
          { key: "B", text: "ที่ตำแหน่งขอบสุด ($x = \\pm A$)" },
          { key: "C", text: "มีค่าคงที่เท่ากันทุกตำแหน่ง" },
          { key: "D", text: "ที่ตำแหน่ง $x = \\dfrac{A}{2}$" }
        ],
        answer: "B",
        explanation: `พลังงานศักย์มีค่าสูงสุดที่การกระจัดมากสุด คือที่ขอบสุด $x = \\pm A$ (จุดที่ KE = 0) จึงตอบ B`
      },
      {
        id: "q29",
        prompt: `พลังงานกลรวมของระบบที่สั่นแบบ SHM (แอมพลิจูด $A$, ค่านิจสปริง $k$) มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$\\dfrac{1}{2}kA$" },
          { key: "B", text: "$kA^2$" },
          { key: "C", text: "$\\dfrac{1}{2}kA^2$" },
          { key: "D", text: "$\\dfrac{1}{2}kv^2$" }
        ],
        answer: "C",
        explanation: `พลังงานกลรวมของ SHM คงที่และเท่ากับ $E = \\dfrac{1}{2}kA^2$ จึงตอบ C`
      },
      {
        id: "q30",
        prompt: `พลังงานจลน์ (KE) ของวัตถุที่สั่นแบบ SHM มีค่าสูงสุดที่ตำแหน่งใด`,
        choices: [
          { key: "A", text: "ที่ตำแหน่งสมดุล ($x = 0$)" },
          { key: "B", text: "ที่ตำแหน่งขอบสุด ($x = \\pm A$)" },
          { key: "C", text: "ที่ตำแหน่ง $x = \\dfrac{A}{2}$" },
          { key: "D", text: "มีค่าคงที่ทุกตำแหน่ง" }
        ],
        answer: "A",
        explanation: `ที่ตำแหน่งสมดุลวัตถุมีความเร็วสูงสุด พลังงานจลน์จึงสูงสุด จึงตอบ A`
      }
    ]
  }
};
