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
    // --- การแปลงมุมเป็นเรเดียน และเรเดียนเป็นมุม (ข้อ 1-5) ---
    {
      id: "q1",
      prompt: `**การแปลงหน่วยมุม**
> **สูตร:** องศา $\\rightarrow$ เรเดียน $= \\theta^\\circ \\times \\dfrac{\\pi}{180}$

มุม $30^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\dfrac{\\pi}{6}$` },
        { key: "B", text: `$\\dfrac{\\pi}{4}$` },
        { key: "C", text: `$\\dfrac{\\pi}{3}$` },
        { key: "D", text: `$\\dfrac{\\pi}{2}$` }
      ],
      answer: "A"
    },
    {
      id: "q2",
      prompt: `**การแปลงหน่วยมุม**
> **สูตร:** เรเดียน $\\rightarrow$ องศา $= \\theta \\times \\dfrac{180}{\\pi}$

มุม $\\dfrac{3\\pi}{4}$ เรเดียน มีขนาดเท่ากับกี่องศา?`,
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
      prompt: `**การแปลงหน่วยมุม**
> **สูตร:** องศา $\\rightarrow$ เรเดียน $= \\theta^\\circ \\times \\dfrac{\\pi}{180}$

มุม $120^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\dfrac{2\\pi}{3}$` },
        { key: "B", text: `$\\dfrac{3\\pi}{4}$` },
        { key: "C", text: `$\\dfrac{5\\pi}{6}$` },
        { key: "D", text: `$\\dfrac{4\\pi}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q4",
      prompt: `**การแปลงหน่วยมุม**
> **สูตร:** เรเดียน $\\rightarrow$ องศา $= \\theta \\times \\dfrac{180}{\\pi}$

มุม $\\dfrac{5\\pi}{6}$ เรเดียน มีขนาดเท่ากับกี่องศา?`,
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
      prompt: `**การแปลงหน่วยมุม**
> **สูตร:** องศา $\\rightarrow$ เรเดียน $= \\theta^\\circ \\times \\dfrac{\\pi}{180}$

มุม $270^\\circ$ มีขนาดเท่ากับกี่เรเดียน?`,
      choices: [
        { key: "A", text: `$\\pi$` },
        { key: "B", text: `$\\dfrac{3\\pi}{2}$` },
        { key: "C", text: `$\\dfrac{5\\pi}{4}$` },
        { key: "D", text: `$2\\pi$` }
      ],
      answer: "B"
    },

    // --- ค่าฟังก์ชันตรีโกณมิติพื้นฐาน 0, 30, 45, 60, 90 (ข้อ 6-10) ---
    {
      id: "q6",
      prompt: `**ค่าฟังก์ชันตรีโกณมิติมาตรฐาน**
> **ตารางค่ามุมสำคัญ:**
> | มุม | $\\sin$ | $\\cos$ | $\\tan$ |
> |:---:|:---:|:---:|:---:|
> | $0^\\circ$ | $0$ | $1$ | $0$ |
> | $30^\\circ$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
> | $45^\\circ$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
> | $60^\\circ$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
> | $90^\\circ$ | $1$ | $0$ | ไม่นิยาม |

ค่าของ $\\sin(30^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{2}$` },
        { key: "B", text: `$\\dfrac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\dfrac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q7",
      prompt: `**ค่าฟังก์ชันตรีโกณมิติมาตรฐาน**
> **ตารางค่ามุมสำคัญ:**
> | มุม | $\\sin$ | $\\cos$ | $\\tan$ |
> |:---:|:---:|:---:|:---:|
> | $0^\\circ$ | $0$ | $1$ | $0$ |
> | $30^\\circ$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
> | $45^\\circ$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
> | $60^\\circ$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
> | $90^\\circ$ | $1$ | $0$ | ไม่นิยาม |

ค่าของ $\\cos(60^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{2}$` },
        { key: "B", text: `$\\dfrac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\dfrac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q8",
      prompt: `**ค่าฟังก์ชันตรีโกณมิติมาตรฐาน**
> **ตารางค่ามุมสำคัญ:**
> | มุม | $\\sin$ | $\\cos$ | $\\tan$ |
> |:---:|:---:|:---:|:---:|
> | $0^\\circ$ | $0$ | $1$ | $0$ |
> | $30^\\circ$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
> | $45^\\circ$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
> | $60^\\circ$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
> | $90^\\circ$ | $1$ | $0$ | ไม่นิยาม |

ค่าของ $\\tan(45^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{\\sqrt{3}}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\sqrt{3}$` },
        { key: "D", text: `หาค่าไม่ได้` }
      ],
      answer: "B"
    },
    {
      id: "q9",
      prompt: `**ค่าฟังก์ชันตรีโกณมิติมาตรฐาน**
> **ค่าที่ใช้:** $\\sin(90^\\circ) = 1$ และ $\\cos(0^\\circ) = 1$

ค่าของ $\\sin(90^\\circ) + \\cos(0^\\circ)$ ตรงกับข้อใด?`,
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
      prompt: `**ค่าฟังก์ชันตรีโกณมิติมาตรฐาน**
> **ความสัมพันธ์:** $\\tan(\\theta) = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$

ค่าของ $\\tan(60^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{\\sqrt{3}}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\sqrt{3}$` },
        { key: "D", text: `หาค่าไม่ได้` }
      ],
      answer: "C"
    },

    // --- ค่ามุม 37 และ 53 (ข้อ 11-13) ---
    {
      id: "q11",
      prompt: `**ค่าประมาณมุม 37° และ 53°**
> **จำไว้:** ใช้อัตราส่วน $3:4:5$ (สามเหลี่ยมมุมฉาก)
> - $\\sin(37^\\circ) \\approx \\dfrac{3}{5} = 0.6$, $\\;\\cos(37^\\circ) \\approx \\dfrac{4}{5} = 0.8$
> - $\\sin(53^\\circ) \\approx \\dfrac{4}{5} = 0.8$, $\\;\\cos(53^\\circ) \\approx \\dfrac{3}{5} = 0.6$
> - หมายเหตุ: $37^\\circ + 53^\\circ = 90^\\circ$ (เป็นมุมเสริมกัน)

ค่าประมาณของ $\\sin(37^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{3}{5}$` },
        { key: "B", text: `$\\dfrac{4}{5}$` },
        { key: "C", text: `$\\dfrac{3}{4}$` },
        { key: "D", text: `$\\dfrac{4}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q12",
      prompt: `**ค่าประมาณมุม 37° และ 53°**
> **จำไว้:** ใช้อัตราส่วน $3:4:5$ (สามเหลี่ยมมุมฉาก)
> - $\\sin(37^\\circ) \\approx \\dfrac{3}{5}$, $\\;\\cos(37^\\circ) \\approx \\dfrac{4}{5}$
> - $\\sin(53^\\circ) \\approx \\dfrac{4}{5}$, $\\;\\cos(53^\\circ) \\approx \\dfrac{3}{5}$
> - หมายเหตุ: $\\cos(53^\\circ) = \\sin(37^\\circ)$ เนื่องจาก $37^\\circ + 53^\\circ = 90^\\circ$

ค่าประมาณของ $\\cos(53^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{3}{5}$` },
        { key: "B", text: `$\\dfrac{4}{5}$` },
        { key: "C", text: `$\\dfrac{3}{4}$` },
        { key: "D", text: `$\\dfrac{4}{3}$` }
      ],
      answer: "A"
    },
    {
      id: "q13",
      prompt: `**ค่าประมาณมุม 37° และ 53°**
> **สูตร:** $\\tan(\\theta) = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)} = \\dfrac{\\text{ด้านตรงข้าม}}{\\text{ด้านประชิด}}$
>
> สำหรับมุม $37^\\circ$: $\\sin(37^\\circ) \\approx \\dfrac{3}{5}$, $\\;\\cos(37^\\circ) \\approx \\dfrac{4}{5}$

ค่าประมาณของ $\\tan(37^\\circ)$ ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{3}{5}$` },
        { key: "B", text: `$\\dfrac{4}{5}$` },
        { key: "C", text: `$\\dfrac{3}{4}$` },
        { key: "D", text: `$\\dfrac{4}{3}$` }
      ],
      answer: "C"
    },

    // --- เครื่องหมายและจตุภาค (Quadrant) (ข้อ 14-18) ---
    {
      id: "q14",
      prompt: `**จตุภาคบนวงกลมหนึ่งหน่วย**
> **แบ่งตามช่วงมุม (องศา):**
> - จตุภาคที่ **I** : $0^\\circ < \\theta < 90^\\circ$ → $\\sin > 0,\\; \\cos > 0$
> - จตุภาคที่ **II** : $90^\\circ < \\theta < 180^\\circ$ → $\\sin > 0,\\; \\cos < 0$
> - จตุภาคที่ **III** : $180^\\circ < \\theta < 270^\\circ$ → $\\sin < 0,\\; \\cos < 0$
> - จตุภาคที่ **IV** : $270^\\circ < \\theta < 360^\\circ$ → $\\sin < 0,\\; \\cos > 0$

มุม $150^\\circ$ ตกอยู่ในจตุภาค (Quadrant) ใดของวงกลมหนึ่งหน่วย?`,
      choices: [
        { key: "A", text: `จตุภาคที่ I` },
        { key: "B", text: `จตุภาคที่ II` },
        { key: "C", text: `จตุภาคที่ III` },
        { key: "D", text: `จตุภาคที่ IV` }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `**เครื่องหมายของฟังก์ชันตรีโกณมิติในแต่ละจตุภาค**
> **กฎ "ASTC" (All Students Take Calculus):**
> - จตุภาค **I** : ทุกฟังก์ชัน $(+)$
> - จตุภาค **II** : $\\sin, \\csc$ เป็น $(+)$
> - จตุภาค **III** : $\\tan, \\cot$ เป็น $(+)$
> - จตุภาค **IV** : $\\cos, \\sec$ เป็น $(+)$

ในจตุภาคที่ III ฟังก์ชันตรีโกณมิติใดมีค่าเป็นบวก?`,
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
      prompt: `**จตุภาคจากเครื่องหมายของฟังก์ชัน**
> **กฎ "ASTC":**
> - จตุภาค **I** : $\\sin > 0,\\; \\cos > 0$
> - จตุภาค **II** : $\\sin > 0,\\; \\cos < 0$
> - จตุภาค **III** : $\\sin < 0,\\; \\cos < 0$
> - จตุภาค **IV** : $\\sin < 0,\\; \\cos > 0$

ถ้า $\\sin(\\theta) < 0$ และ $\\cos(\\theta) > 0$ แล้ว มุม $\\theta$ จะอยู่ในจตุภาคใด?`,
      choices: [
        { key: "A", text: `จตุภาคที่ I` },
        { key: "B", text: `จตุภาคที่ II` },
        { key: "C", text: `จตุภาคที่ III` },
        { key: "D", text: `จตุภาคที่ IV` }
      ],
      answer: "D"
    },
    {
      id: "q17",
      prompt: `**จตุภาคบนวงกลมหนึ่งหน่วย (หน่วยเรเดียน)**
> **แบ่งตามช่วงมุม (เรเดียน):**
> - จตุภาค **I** : $0 < \\theta < \\dfrac{\\pi}{2}$
> - จตุภาค **II** : $\\dfrac{\\pi}{2} < \\theta < \\pi$
> - จตุภาค **III** : $\\pi < \\theta < \\dfrac{3\\pi}{2}$
> - จตุภาค **IV** : $\\dfrac{3\\pi}{2} < \\theta < 2\\pi$

มุม $\\dfrac{7\\pi}{4}$ เรเดียน ตกอยู่ในจตุภาคใด?`,
      choices: [
        { key: "A", text: `จตุภาคที่ I` },
        { key: "B", text: `จตุภาคที่ II` },
        { key: "C", text: `จตุภาคที่ III` },
        { key: "D", text: `จตุภาคที่ IV` }
      ],
      answer: "D"
    },
    {
      id: "q18",
      prompt: `**เครื่องหมายของ $\\cos$ และ $\\sin$ ในแต่ละจตุภาค**
> มุม $\\dfrac{4\\pi}{3}$ เรเดียน $= 240^\\circ$ → อยู่ในจตุภาคที่ **III**
>
> **กฎ "ASTC":**
> - จตุภาค **III** : $\\cos < 0$ และ $\\sin < 0$
>
> ดังนั้นเครื่องหมายของ $(\\cos,\\; \\sin)$ คือ $(-, -)$

สำหรับมุม $\\dfrac{4\\pi}{3}$ เรเดียน เครื่องหมายของฟังก์ชัน $(\\cos,\\; \\sin)$ คือข้อใดตามลำดับ?`,
      choices: [
        { key: "A", text: `$(+,\\; +)$` },
        { key: "B", text: `$(-,\\; +)$` },
        { key: "C", text: `$(-,\\; -)$` },
        { key: "D", text: `$(+,\\; -)$` }
      ],
      answer: "C"
    },

    // --- คู่อันดับ (x, y) บนวงกลมหนึ่งหน่วย (ข้อ 19-23) ---
    {
      id: "q19",
      prompt: `**คู่อันดับบนวงกลมหนึ่งหน่วย**
> **นิยาม:** บนวงกลมหนึ่งหน่วย $x^2 + y^2 = 1$ จุดที่มุม $\\theta$ คือ
> $$P(\\theta) = (\\cos\\theta,\\; \\sin\\theta)$$
> **มุมสำคัญ:**
> - $\\theta = 0$ → $(1, 0)$
> - $\\theta = \\dfrac{\\pi}{2}$ → $(0, 1)$
> - $\\theta = \\pi$ → $(-1, 0)$
> - $\\theta = \\dfrac{3\\pi}{2}$ → $(0, -1)$

คู่อันดับ $(x, y)$ บนวงกลมหนึ่งหน่วยที่สอดคล้องกับมุม $0$ เรเดียน คือข้อใด?`,
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
      prompt: `**คู่อันดับบนวงกลมหนึ่งหน่วย**
> **นิยาม:** $P(\\theta) = (\\cos\\theta,\\; \\sin\\theta)$
>
> เมื่อ $\\theta = \\dfrac{\\pi}{2}$:
> - $\\cos\\left(\\dfrac{\\pi}{2}\\right) = 0$
> - $\\sin\\left(\\dfrac{\\pi}{2}\\right) = 1$

จุดปลายส่วนโค้งที่ยาว $\\dfrac{\\pi}{2}$ หน่วยบนวงกลมหนึ่งหน่วย คือคู่อันดับใด?`,
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
      prompt: `**คู่อันดับบนวงกลมหนึ่งหน่วย**
> **นิยาม:** $P(\\theta) = (\\cos\\theta,\\; \\sin\\theta)$
>
> เมื่อ $\\theta = 180^\\circ = \\pi$:
> - $\\cos(180^\\circ) = -1$
> - $\\sin(180^\\circ) = 0$

คู่อันดับ $(x, y)$ ที่สอดคล้องกับมุม $180^\\circ$ คือข้อใด?`,
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
      prompt: `**คู่อันดับบนวงกลมหนึ่งหน่วย**
> **นิยาม:** $P(\\theta) = (\\cos\\theta,\\; \\sin\\theta)$
>
> เมื่อ $\\theta = \\dfrac{\\pi}{4} = 45^\\circ$:
> $$\\cos(45^\\circ) = \\frac{\\sqrt{2}}{2}, \\quad \\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}$$

คู่อันดับ $(x, y)$ ที่สอดคล้องกับมุม $\\dfrac{\\pi}{4}$ เรเดียน คือข้อใด?`,
      choices: [
        { key: "A", text: `$\\left(\\dfrac{1}{2},\\; \\dfrac{\\sqrt{3}}{2}\\right)$` },
        { key: "B", text: `$\\left(\\dfrac{\\sqrt{3}}{2},\\; \\dfrac{1}{2}\\right)$` },
        { key: "C", text: `$\\left(\\dfrac{\\sqrt{2}}{2},\\; \\dfrac{\\sqrt{2}}{2}\\right)$` },
        { key: "D", text: `$(1,\\; 1)$` }
      ],
      answer: "C"
    },
    {
      id: "q23",
      prompt: `**คู่อันดับบนวงกลมหนึ่งหน่วย**
> **นิยาม:** $P(\\theta) = (\\cos\\theta,\\; \\sin\\theta)$
>
> มุม $330^\\circ$ อยู่ในจตุภาค **IV** → $\\cos > 0,\\; \\sin < 0$
>
> มุมอ้างอิง: $360^\\circ - 330^\\circ = 30^\\circ$
> $$\\cos(330^\\circ) = \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}, \\quad \\sin(330^\\circ) = -\\sin(30^\\circ) = -\\frac{1}{2}$$

คู่อันดับ $(x, y)$ บนวงกลมหนึ่งหน่วยที่สอดคล้องกับมุม $330^\\circ$ คือข้อใด?`,
      choices: [
        { key: "A", text: `$\\left(\\dfrac{\\sqrt{3}}{2},\\; \\dfrac{1}{2}\\right)$` },
        { key: "B", text: `$\\left(\\dfrac{\\sqrt{3}}{2},\\; -\\dfrac{1}{2}\\right)$` },
        { key: "C", text: `$\\left(-\\dfrac{\\sqrt{3}}{2},\\; \\dfrac{1}{2}\\right)$` },
        { key: "D", text: `$\\left(-\\dfrac{\\sqrt{3}}{2},\\; -\\dfrac{1}{2}\\right)$` }
      ],
      answer: "B"
    },

    // --- สมการและการคำนวณพื้นฐาน (ข้อ 24-30) ---
    {
      id: "q24",
      prompt: `**เอกลักษณ์ตรีโกณมิติพื้นฐาน**
> **เอกลักษณ์ไพทาโกรัส:**
> $$\\sin^2(\\theta) + \\cos^2(\\theta) = 1 \\quad \\text{(สำหรับทุกค่า } \\theta \\text{)}$$

ผลลัพธ์ของ $\\sin^2(45^\\circ) + \\cos^2(45^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$\\dfrac{1}{2}$` },
        { key: "C", text: `$1$` },
        { key: "D", text: `$2$` }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `**สูตรมุมสองเท่า (Double Angle Formula)**
> $$2\\sin(\\theta)\\cos(\\theta) = \\sin(2\\theta)$$
>
> ดังนั้น: $2\\sin(30^\\circ)\\cos(30^\\circ) = \\sin(2 \\times 30^\\circ) = \\sin(60^\\circ)$

ผลลัพธ์ของ $2\\sin(30^\\circ)\\cos(30^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{2}$` },
        { key: "B", text: `$\\dfrac{\\sqrt{2}}{2}$` },
        { key: "C", text: `$\\dfrac{\\sqrt{3}}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `**สูตรมุมสองเท่า (Double Angle Formula)**
> $$\\cos^2(\\theta) - \\sin^2(\\theta) = \\cos(2\\theta)$$
>
> ดังนั้น: $\\cos^2(60^\\circ) - \\sin^2(60^\\circ) = \\cos(2 \\times 60^\\circ) = \\cos(120^\\circ)$
>
> และ $\\cos(120^\\circ) = -\\cos(60^\\circ) = -\\dfrac{1}{2}$

ผลลัพธ์ของ $\\cos^2(60^\\circ) - \\sin^2(60^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$-\\dfrac{1}{2}$` },
        { key: "B", text: `$0$` },
        { key: "C", text: `$\\dfrac{1}{2}$` },
        { key: "D", text: `$1$` }
      ],
      answer: "A"
    },
    {
      id: "q27",
      prompt: `**การคำนวณค่าฟังก์ชันตรีโกณมิติ**
> $\\tan(60^\\circ) = \\sqrt{3}$ ดังนั้น:
> $$\\tan^2(60^\\circ) = (\\sqrt{3})^2 = 3$$

ผลลัพธ์ของ $\\tan^2(60^\\circ) - 1$ มีค่าเท่าใด?`,
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
      prompt: `**การคำนวณค่าฟังก์ชันตรีโกณมิติ**
> ค่าที่ใช้:
> - $\\sin(30^\\circ) = \\dfrac{1}{2}$
> - $\\cos(60^\\circ) = \\dfrac{1}{2}$
>
> **หมายเหตุ:** $\\sin(30^\\circ) = \\cos(60^\\circ)$ เพราะ $30^\\circ + 60^\\circ = 90^\\circ$ (มุมเสริมกัน)

ผลลัพธ์ของ $\\sin(30^\\circ) + \\cos(60^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$\\dfrac{1}{2}$` },
        { key: "B", text: `$1$` },
        { key: "C", text: `$\\dfrac{3}{2}$` },
        { key: "D", text: `$2$` }
      ],
      answer: "B"
    },
    {
      id: "q29",
      prompt: `**การคำนวณค่าฟังก์ชันตรีโกณมิติ**
> ค่าที่ใช้:
> - $\\cos(60^\\circ) = \\dfrac{1}{2}$ ดังนั้น $4\\cos(60^\\circ) = 4 \\times \\dfrac{1}{2} = 2$
> - $\\sin(30^\\circ) = \\dfrac{1}{2}$ ดังนั้น $2\\sin(30^\\circ) = 2 \\times \\dfrac{1}{2} = 1$

ผลลัพธ์ของ $4\\cos(60^\\circ) + 2\\sin(30^\\circ)$ มีค่าเท่าใด?`,
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
      prompt: `**สูตรผลบวกมุม (Sum Formula)**
> $$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$$
>
> สังเกต: $\\cos(37^\\circ)\\sin(53^\\circ) + \\sin(37^\\circ)\\cos(53^\\circ) = \\sin(37^\\circ + 53^\\circ)$
>
> และ $37^\\circ + 53^\\circ = 90^\\circ$ ดังนั้น $\\sin(90^\\circ) = 1$

ผลลัพธ์ของ $\\cos(37^\\circ)\\sin(53^\\circ) + \\sin(37^\\circ)\\cos(53^\\circ)$ มีค่าเท่าใด?`,
      choices: [
        { key: "A", text: `$0$` },
        { key: "B", text: `$\\dfrac{12}{25}$` },
        { key: "C", text: `$1$` },
        { key: "D", text: `$\\dfrac{24}{25}$` }
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
        prompt: `**ปัจจัยที่มีผลต่ออัตราการเกิดปฏิกิริยาเคมี**
> **ปัจจัยที่มีผล:** อุณหภูมิ, ความเข้มข้น, พื้นที่ผิว, ตัวเร่งปฏิกิริยา
> **หมายเหตุ:** ความดันมีผลเฉพาะกรณีที่สารเป็น**แก๊ส** ไม่มีผลต่อ**ของแข็ง**

ปัจจัยใดไม่มีผลต่ออัตราการเกิดปฏิกิริยา?`,
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
