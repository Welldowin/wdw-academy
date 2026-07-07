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
},
  "quiz4": {
  meta: {
    courseId: "m5-term1-math",
    quizKey: "quiz4",
    title: "Quiz 4 : เอกลักษณ์ตรีโกณมิติ (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `ค่าของ $\\sin^2 x + \\cos^2 x$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "$\\tan^2 x$" }
      ],
      answer: "B"
    },
    {
      id: "q2",
      prompt: `เอกลักษณ์ในข้อใดคือรูปที่ถูกต้องของ $\\tan x$`,
      choices: [
        { key: "A", text: "$\\frac{\\cos x}{\\sin x}$" },
        { key: "B", text: "$\\frac{1}{\\cos x}$" },
        { key: "C", text: "$\\frac{\\sin x}{\\cos x}$" },
        { key: "D", text: "$\\frac{1}{\\sin x}$" }
      ],
      answer: "C"
    },
    {
      id: "q3",
      prompt: `ค่าของ $\\sec^2 \\theta - \\tan^2 \\theta$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$0$" },
        { key: "D", text: "$\\cot^2 \\theta$" }
      ],
      answer: "A"
    },
    {
      id: "q4",
      prompt: `รูปอย่างง่ายของ $\\csc^2 \\theta - 1$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\tan^2 \\theta$" },
        { key: "B", text: "$\\sec^2 \\theta$" },
        { key: "C", text: "$\\cot^2 \\theta$" },
        { key: "D", text: "$-\\cot^2 \\theta$" }
      ],
      answer: "C"
    },
    {
      id: "q5",
      prompt: `รูปอย่างง่ายของ $\\cos x \\cdot \\tan x$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin x$" },
        { key: "B", text: "$\\cos x$" },
        { key: "C", text: "$\\sec x$" },
        { key: "D", text: "$\\csc x$" }
      ],
      answer: "A"
    },
    {
      id: "q6",
      prompt: `รูปอย่างง่ายของ $\\sin x \\cdot \\csc x$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin^2 x$" },
        { key: "B", text: "$\\cos^2 x$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$0$" }
      ],
      answer: "C"
    },
    {
      id: "q7",
      prompt: `ผลสำเร็จของ $\\frac{\\sin^2 A + \\cos^2 A}{\\sec A}$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin A$" },
        { key: "B", text: "$\\cos A$" },
        { key: "C", text: "$\\tan A$" },
        { key: "D", text: "$\\sec A$" }
      ],
      answer: "B"
    },
    {
      id: "q8",
      prompt: `รูปอย่างง่ายของ $(1 - \\cos^2 x)\\csc^2 x$ คือข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$\\sin x$" },
        { key: "D", text: "$\\cos x$" }
      ],
      answer: "B"
    },
    {
      id: "q9",
      prompt: `ผลคูณของ $\\cot \\theta \\cdot \\sec \\theta$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin \\theta$" },
        { key: "B", text: "$\\cos \\theta$" },
        { key: "C", text: "$\\sec \\theta$" },
        { key: "D", text: "$\\csc \\theta$" }
      ],
      answer: "D"
    },
    {
      id: "q10",
      prompt: `เอกลักษณ์ของ $\\sin(-\\theta)$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin \\theta$" },
        { key: "B", text: "$-\\sin \\theta$" },
        { key: "C", text: "$\\cos \\theta$" },
        { key: "D", text: "$-\\cos \\theta$" }
      ],
      answer: "B"
    },
    {
      id: "q11",
      prompt: `เอกลักษณ์ของ $\\cos(-\\theta)$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin \\theta$" },
        { key: "B", text: "$-\\sin \\theta$" },
        { key: "C", text: "$\\cos \\theta$" },
        { key: "D", text: "$-\\cos \\theta$" }
      ],
      answer: "C"
    },
    {
      id: "q12",
      prompt: `ค่าของ $\\sec x \\cdot \\cos x - 1$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "$\\sin x$" }
      ],
      answer: "A"
    },
    {
      id: "q13",
      prompt: `รูปอย่างง่ายของ $\\frac{1}{\\cos^2 x} - 1$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin^2 x$" },
        { key: "B", text: "$\\cos^2 x$" },
        { key: "C", text: "$\\tan^2 x$" },
        { key: "D", text: "$\\cot^2 x$" }
      ],
      answer: "C"
    },
    {
      id: "q14",
      prompt: `ผลสำเร็จของ $\\sin x (\\csc x - \\sin x)$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin^2 x$" },
        { key: "B", text: "$\\cos^2 x$" },
        { key: "C", text: "$\\tan^2 x$" },
        { key: "D", text: "$1$" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `เอกลักษณ์โคฟังก์ชันของ $\\cos(90^\\circ - \\theta)$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin \\theta$" },
        { key: "B", text: "$-\\sin \\theta$" },
        { key: "C", text: "$\\csc \\theta$" },
        { key: "D", text: "$\\cos \\theta$" }
      ],
      answer: "A"
    },
    {
      id: "q16",
      prompt: `รูปอย่างง่ายของ $\\frac{\\tan x}{\\sec x}$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin x$" },
        { key: "B", text: "$\\cos x$" },
        { key: "C", text: "$\\cot x$" },
        { key: "D", text: "$\\csc x$" }
      ],
      answer: "A"
    },
    {
      id: "q17",
      prompt: `ค่าของ $\\cos^2 x + \\cos^2 x \\tan^2 x$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$\\sin^2 x$" },
        { key: "D", text: "$\\cos^2 x$" }
      ],
      answer: "B"
    },
    {
      id: "q18",
      prompt: `ผลสำเร็จของ $\\frac{1 - \\sin^2 \\theta}{1 - \\cos^2 \\theta}$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\tan^2 \\theta$" },
        { key: "B", text: "$\\cot^2 \\theta$" },
        { key: "C", text: "$\\sec^2 \\theta$" },
        { key: "D", text: "$\\csc^2 \\theta$" }
      ],
      answer: "B"
    },
    {
      id: "q19",
      prompt: `เอกลักษณ์ของ $\\tan(-\\theta)$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\tan \\theta$" },
        { key: "B", text: "$-\\tan \\theta$" },
        { key: "C", text: "$\\cot \\theta$" },
        { key: "D", text: "$-\\cot \\theta$" }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `ค่าของ $\\sin^2(30^\\circ) + \\cos^2(30^\\circ)$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\frac{1}{2}$" },
        { key: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$2$" }
      ],
      answer: "C"
    },
    {
      id: "q21",
      prompt: `ผลสำเร็จของ $(1 - \\sin x)(1 + \\sin x)$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin^2 x$" },
        { key: "B", text: "$\\cos^2 x$" },
        { key: "C", text: "$\\tan^2 x$" },
        { key: "D", text: "$1 + \\sin^2 x$" }
      ],
      answer: "B"
    },
    {
      id: "q22",
      prompt: `ค่าของ $\\frac{1}{\\csc^2 A} + \\frac{1}{\\sec^2 A}$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$\\sec^2 A \\csc^2 A$" }
      ],
      answer: "B"
    },
    {
      id: "q23",
      prompt: `ข้อใดมีค่าเทียบเท่ากับ $\\frac{\\sin x}{\\cot x}$`,
      choices: [
        { key: "A", text: "$\\sin^2 x \\tan x$" },
        { key: "B", text: "$\\sin x \\tan x$" },
        { key: "C", text: "$\\cos x \\cot x$" },
        { key: "D", text: "$\\cos^2 x \\tan x$" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `ผลสำเร็จของ $\\cos \\theta (\\sec \\theta - \\cos \\theta)$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin^2 \\theta$" },
        { key: "B", text: "$\\cos^2 \\theta$" },
        { key: "C", text: "$\\tan^2 \\theta$" },
        { key: "D", text: "$1$" }
      ],
      answer: "A"
    },
    {
      id: "q25",
      prompt: `รูปอย่างง่ายของ $\\csc x \\cdot \\tan x$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin x$" },
        { key: "B", text: "$\\cos x$" },
        { key: "C", text: "$\\sec x$" },
        { key: "D", text: "$\\csc x$" }
      ],
      answer: "C"
    },
    {
      id: "q26",
      prompt: `การแยกตัวประกอบและการจัดรูปของ $\\sin^4 x - \\cos^4 x$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$\\sin^2 x - \\cos^2 x$" },
        { key: "C", text: "$\\cos^2 x - \\sin^2 x$" },
        { key: "D", text: "$1 - 2\\sin^2 x$" }
      ],
      answer: "B"
    },
    {
      id: "q27",
      prompt: `ผลสำเร็จของ $\\frac{\\sec x}{\\csc x}$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\sin x$" },
        { key: "B", text: "$\\cos x$" },
        { key: "C", text: "$\\tan x$" },
        { key: "D", text: "$\\cot x$" }
      ],
      answer: "C"
    },
    {
      id: "q28",
      prompt: `ค่าของ $\\tan^2 \\theta - \\sec^2 \\theta$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$-1$" },
        { key: "D", text: "$\\tan \\theta$" }
      ],
      answer: "C"
    },
    {
      id: "q29",
      prompt: `รูปอย่างง่ายของ $\\cos A + \\sin A \\tan A$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$\\sin A$" },
        { key: "B", text: "$\\cos A$" },
        { key: "C", text: "$\\sec A$" },
        { key: "D", text: "$\\csc A$" }
      ],
      answer: "C"
    },
    {
      id: "q30",
      prompt: `ค่าของ $(\\tan x + \\cot x)\\sin x \\cos x$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$1$" },
        { key: "C", text: "$\\sin x \\cos x$" },
        { key: "D", text: "$\\tan x \\cot x$" }
      ],
      answer: "B"
    }
  ]
}
};
