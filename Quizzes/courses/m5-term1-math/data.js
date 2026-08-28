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
      answer: "A",
      explanation: `$30\\times\\dfrac{\\pi}{180}=\\dfrac{\\pi}{6}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\dfrac{3\\pi}{4}\\times\\dfrac{180}{\\pi}=135^\\circ$ จึงตอบ B`
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
      answer: "A",
      explanation: `$120\\times\\dfrac{\\pi}{180}=\\dfrac{2\\pi}{3}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\dfrac{5\\pi}{6}\\times\\dfrac{180}{\\pi}=150^\\circ$ จึงตอบ C`
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
      answer: "B",
      explanation: `$270\\times\\dfrac{\\pi}{180}=\\dfrac{3\\pi}{2}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin30^\\circ=\\dfrac{1}{2}$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\cos60^\\circ=\\dfrac{1}{2}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\tan45^\\circ=1$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\sin90^\\circ+\\cos0^\\circ=1+1=2$ จึงตอบ C`
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
      answer: "C",
      explanation: `$\\tan60^\\circ=\\sqrt{3}$ จึงตอบ C`
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
      answer: "A",
      explanation: `จากสามเหลี่ยม 3:4:5 ได้ $\\sin37^\\circ\\approx\\dfrac{3}{5}$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\cos53^\\circ=\\sin37^\\circ\\approx\\dfrac{3}{5}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\tan37^\\circ=\\dfrac{\\sin}{\\cos}=\\dfrac{3/5}{4/5}=\\dfrac{3}{4}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$150^\\circ$ อยู่ระหว่าง $90^\\circ$–$180^\\circ$ = จตุภาคที่ II จึงตอบ B`
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
      answer: "C",
      explanation: `จตุภาค III มีเพียง $\\tan,\\cot$ เป็นบวก จึงตอบ C`
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
      answer: "D",
      explanation: `$\\sin<0,\\cos>0$ ตรงกับจตุภาคที่ IV จึงตอบ D`
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
      answer: "D",
      explanation: `$\\dfrac{7\\pi}{4}=315^\\circ$ อยู่ในจตุภาคที่ IV จึงตอบ D`
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
      answer: "C",
      explanation: `$\\dfrac{4\\pi}{3}=240^\\circ$ จตุภาค III ทั้ง $\\cos,\\sin$ เป็นลบ $(-,-)$ จึงตอบ C`
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
      answer: "B",
      explanation: `มุม 0: $(\\cos0,\\sin0)=(1,0)$ จึงตอบ B`
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
      answer: "A",
      explanation: `มุม $\\dfrac{\\pi}{2}$: $(\\cos90^\\circ,\\sin90^\\circ)=(0,1)$ จึงตอบ A`
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
      answer: "D",
      explanation: `มุม $180^\\circ$: $(\\cos180^\\circ,\\sin180^\\circ)=(-1,0)$ จึงตอบ D`
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
      answer: "C",
      explanation: `มุม $\\dfrac{\\pi}{4}$: $\\left(\\dfrac{\\sqrt2}{2},\\dfrac{\\sqrt2}{2}\\right)$ จึงตอบ C`
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
      answer: "B",
      explanation: `$330^\\circ$ จตุภาค IV, มุมอ้างอิง $30^\\circ$: $\\left(\\dfrac{\\sqrt3}{2},-\\dfrac{1}{2}\\right)$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\sin^2\\theta+\\cos^2\\theta=1$ เสมอ จึงตอบ C`
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
      answer: "C",
      explanation: `$2\\sin30^\\circ\\cos30^\\circ=\\sin60^\\circ=\\dfrac{\\sqrt3}{2}$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\cos^2 60^\\circ-\\sin^2 60^\\circ=\\cos120^\\circ=-\\dfrac{1}{2}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\tan^2 60^\\circ-1=(\\sqrt3)^2-1=3-1=2$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sin30^\\circ+\\cos60^\\circ=\\dfrac{1}{2}+\\dfrac{1}{2}=1$ จึงตอบ B`
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
      answer: "C",
      explanation: `$4(\\tfrac12)+2(\\tfrac12)=2+1=3$ จึงตอบ C`
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
      answer: "C",
      explanation: `เป็นสูตร $\\sin(37^\\circ+53^\\circ)=\\sin90^\\circ=1$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sin450^\\circ=\\sin(450-360)^\\circ=\\sin90^\\circ=1$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\cos720^\\circ=\\cos0^\\circ=1$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\tan(-45^\\circ)=-\\tan45^\\circ=-1$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin(-300^\\circ)=-\\sin300^\\circ=-(-\\tfrac{\\sqrt3}{2})=\\dfrac{\\sqrt3}{2}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos(-120^\\circ)=\\cos120^\\circ=-\\dfrac{1}{2}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$1125^\\circ-3(360^\\circ)=45^\\circ$ ดังนั้น $\\tan1125^\\circ=\\tan45^\\circ=1$ จึงตอบ C`
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
      answer: "C",
      explanation: `$\\theta=-90^\\circ$: $\\sin=-1,\\cos=0$ รวม $=-1$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\cos390^\\circ=\\cos30^\\circ=\\dfrac{\\sqrt3}{2}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin(-150^\\circ)=-\\sin150^\\circ=-\\dfrac{1}{2}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\tan(-240^\\circ)=-\\tan240^\\circ=-\\tan60^\\circ=-\\sqrt3$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\sec60^\\circ=\\dfrac{1}{\\cos60^\\circ}=\\dfrac{1}{1/2}=2$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\csc30^\\circ+\\cot45^\\circ=2+1=3$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\cot(-30^\\circ)=-\\cot30^\\circ=-\\sqrt3$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\sec135^\\circ=\\dfrac{1}{\\cos135^\\circ}=\\dfrac{1}{-\\sqrt2/2}=-\\sqrt2$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\csc270^\\circ=\\dfrac{1}{\\sin270^\\circ}=\\dfrac{1}{-1}=-1$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\sin\\theta=\\dfrac{1}{2}$ ในช่วง Q1 ได้ $\\theta=30^\\circ$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\tan\\theta=\\dfrac{1}{\\sqrt3}$ มุมอ้างอิง $30^\\circ$ ในจตุภาค III ได้ $210^\\circ$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\sec\\theta=-2\\Rightarrow\\cos\\theta=-\\dfrac{1}{2}$ ในจตุภาค II ได้ $120^\\circ$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos^2\\theta=1\\Rightarrow\\cos\\theta=\\pm1$ ได้ $\\theta=0^\\circ,180^\\circ$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\cot\\theta=-1\\Rightarrow\\tan\\theta=-1$ ในจตุภาค IV ได้ $315^\\circ$ จึงตอบ B`
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
      answer: "A",
      explanation: `สูตร $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\sin15^\\circ=\\sin(45^\\circ-30^\\circ)=\\dfrac{\\sqrt6-\\sqrt2}{4}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos75^\\circ=\\cos(45^\\circ+30^\\circ)=\\dfrac{\\sqrt6-\\sqrt2}{4}$ จึงตอบ B`
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
      answer: "C",
      explanation: `เป็นสูตร $\\sin(70^\\circ-40^\\circ)=\\sin30^\\circ$ จึงตอบ C`
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
      answer: "A",
      explanation: `เป็นสูตร $\\cos(20^\\circ+10^\\circ)=\\cos30^\\circ$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\sin\\theta=\\dfrac{3}{5}$ ในจตุภาค II $\\cos\\theta$ เป็นลบ $=-\\dfrac{4}{5}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\tan(-315^\\circ)=-\\tan315^\\circ=-(-1)=1$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\sec(-60^\\circ)=\\sec60^\\circ=2$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos(180^\\circ-\\theta)=-\\cos\\theta$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\csc(-30^\\circ)\\cdot\\sin390^\\circ=(-2)\\left(\\dfrac{1}{2}\\right)=-1$ จึงตอบ B`
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
      answer: "B",
      explanation: `จุดบนวงกลมหนึ่งหน่วยคือ $(\\cos\\theta,\\sin\\theta)$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\sin>0,\\cos<0$ อยู่ในจตุภาคที่ 2 จึงตอบ B`
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
      answer: "C",
      explanation: `จตุภาค 3 มี $\\tan,\\cot$ เป็นบวก จึงตอบ C`
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
      answer: "D",
      explanation: `$270^\\circ$: $(\\cos,\\sin)=(0,-1)$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\sin\\theta=\\dfrac{3}{5}$ จตุภาค 2, $\\cos\\theta=-\\dfrac{4}{5}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\dfrac{1}{2}+\\dfrac{1}{2}=1$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\tan45^\\circ\\times\\cot45^\\circ=1\\times1=1$ จึงตอบ C`
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
      answer: "D",
      explanation: `$\\sec60^\\circ=\\dfrac{1}{1/2}=2$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\csc\\dfrac{\\pi}{4}=\\dfrac{1}{\\sin45^\\circ}=\\sqrt2$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin\\dfrac{\\pi}{3}\\times\\tan\\dfrac{\\pi}{6}=\\dfrac{\\sqrt3}{2}\\times\\dfrac{1}{\\sqrt3}=\\dfrac{1}{2}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\sin120^\\circ=\\sin60^\\circ=\\dfrac{\\sqrt3}{2}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\cos135^\\circ=-\\cos45^\\circ=-\\dfrac{\\sqrt2}{2}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\tan225^\\circ=\\tan45^\\circ=1$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\cos300^\\circ=\\cos60^\\circ=\\dfrac{1}{2}$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sin\\dfrac{7\\pi}{6}=\\sin210^\\circ=-\\dfrac{1}{2}$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin37^\\circ\\approx\\dfrac{3}{5}$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos53^\\circ+\\sin37^\\circ=\\dfrac{3}{5}+\\dfrac{3}{5}=\\dfrac{6}{5}$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\tan37^\\circ\\times\\tan53^\\circ=\\dfrac{3}{4}\\times\\dfrac{4}{3}=1$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sec37^\\circ=\\dfrac{1}{\\cos37^\\circ}=\\dfrac{1}{4/5}=\\dfrac{5}{4}$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\csc53^\\circ-\\cot53^\\circ=\\dfrac{5}{4}-\\dfrac{3}{4}=\\dfrac{1}{2}$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\sin^2+\\cos^2=1$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\sin^2 30^\\circ+\\tan135^\\circ=\\dfrac{1}{4}+(-1)=-\\dfrac{3}{4}$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\sin^2 37^\\circ=\\dfrac{9}{25}$; $\\dfrac{\\tan135^\\circ}{\\sec240^\\circ}=\\dfrac{-1}{-2}=\\dfrac{1}{2}$; รวม $=\\dfrac{18}{50}+\\dfrac{25}{50}=\\dfrac{43}{50}$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\cos^2 60^\\circ+\\csc210^\\circ=\\dfrac{1}{4}+(-2)=-\\dfrac{7}{4}$ จึงตอบ A`
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
      answer: "A",
      explanation: `$2\\sin30^\\circ\\cos30^\\circ=\\sin60^\\circ$ ดังนั้นลบกันได้ $0$ จึงตอบ A`
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
      answer: "C",
      explanation: `เอกลักษณ์จริงเสมอคือ $\\sin^2\\theta+\\cos^2\\theta=1$ จึงตอบ C`
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
      answer: "A",
      explanation: `$1+\\tan^2\\theta=\\sec^2\\theta$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\csc^2\\theta-\\cot^2\\theta=1$ จึงตอบ C`
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
      answer: "C",
      explanation: `$\\tan\\theta\\cdot\\csc\\theta=\\dfrac{\\sin}{\\cos}\\cdot\\dfrac{1}{\\sin}=\\dfrac{1}{\\cos}=\\sec\\theta$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\cos\\theta(\\sec\\theta-\\cos\\theta)=1-\\cos^2\\theta=\\sin^2\\theta$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\sin^2 x+\\cos^2 x=1$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\tan x=\\dfrac{\\sin x}{\\cos x}$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\sec^2\\theta-\\tan^2\\theta=1$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\csc^2\\theta-1=\\cot^2\\theta$ จึงตอบ C`
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
      answer: "A",
      explanation: `$\\cos x\\cdot\\tan x=\\cos x\\cdot\\dfrac{\\sin x}{\\cos x}=\\sin x$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\sin x\\cdot\\csc x=\\sin x\\cdot\\dfrac{1}{\\sin x}=1$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\dfrac{\\sin^2 A+\\cos^2 A}{\\sec A}=\\dfrac{1}{\\sec A}=\\cos A$ จึงตอบ B`
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
      answer: "B",
      explanation: `$(1-\\cos^2 x)\\csc^2 x=\\sin^2 x\\cdot\\dfrac{1}{\\sin^2 x}=1$ จึงตอบ B`
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
      answer: "D",
      explanation: `$\\cot\\theta\\cdot\\sec\\theta=\\dfrac{\\cos}{\\sin}\\cdot\\dfrac{1}{\\cos}=\\dfrac{1}{\\sin}=\\csc\\theta$ จึงตอบ D`
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
      answer: "B",
      explanation: `$\\sin(-\\theta)=-\\sin\\theta$ (ฟังก์ชันคี่) จึงตอบ B`
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
      answer: "C",
      explanation: `$\\cos(-\\theta)=\\cos\\theta$ (ฟังก์ชันคู่) จึงตอบ C`
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
      answer: "A",
      explanation: `$\\sec x\\cos x-1=1-1=0$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\dfrac{1}{\\cos^2 x}-1=\\sec^2 x-1=\\tan^2 x$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sin x(\\csc x-\\sin x)=1-\\sin^2 x=\\cos^2 x$ จึงตอบ B`
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
      answer: "A",
      explanation: `โคฟังก์ชัน $\\cos(90^\\circ-\\theta)=\\sin\\theta$ จึงตอบ A`
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
      answer: "A",
      explanation: `$\\dfrac{\\tan x}{\\sec x}=\\dfrac{\\sin/\\cos}{1/\\cos}=\\sin x$ จึงตอบ A`
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
      answer: "B",
      explanation: `$\\cos^2 x(1+\\tan^2 x)=\\cos^2 x\\cdot\\sec^2 x=1$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\dfrac{1-\\sin^2\\theta}{1-\\cos^2\\theta}=\\dfrac{\\cos^2\\theta}{\\sin^2\\theta}=\\cot^2\\theta$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\tan(-\\theta)=-\\tan\\theta$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\sin^2 30^\\circ+\\cos^2 30^\\circ=1$ จึงตอบ C`
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
      answer: "B",
      explanation: `$(1-\\sin x)(1+\\sin x)=1-\\sin^2 x=\\cos^2 x$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\dfrac{1}{\\csc^2 A}+\\dfrac{1}{\\sec^2 A}=\\sin^2 A+\\cos^2 A=1$ จึงตอบ B`
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
      answer: "B",
      explanation: `$\\dfrac{\\sin x}{\\cot x}=\\sin x\\cdot\\dfrac{\\sin x}{\\cos x}=\\sin x\\tan x$ จึงตอบ B`
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
      answer: "A",
      explanation: `$\\cos\\theta(\\sec\\theta-\\cos\\theta)=1-\\cos^2\\theta=\\sin^2\\theta$ จึงตอบ A`
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
      answer: "C",
      explanation: `$\\csc x\\cdot\\tan x=\\dfrac{1}{\\sin}\\cdot\\dfrac{\\sin}{\\cos}=\\dfrac{1}{\\cos}=\\sec x$ จึงตอบ C`
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
      answer: "B",
      explanation: `$\\sin^4 x-\\cos^4 x=(\\sin^2 x-\\cos^2 x)(\\sin^2 x+\\cos^2 x)=\\sin^2 x-\\cos^2 x$ จึงตอบ B`
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
      answer: "C",
      explanation: `$\\dfrac{\\sec x}{\\csc x}=\\dfrac{1/\\cos}{1/\\sin}=\\dfrac{\\sin}{\\cos}=\\tan x$ จึงตอบ C`
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
      answer: "C",
      explanation: `$\\tan^2\\theta-\\sec^2\\theta=-1$ จึงตอบ C`
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
      answer: "C",
      explanation: `$\\cos A+\\sin A\\tan A=\\dfrac{\\cos^2 A+\\sin^2 A}{\\cos A}=\\dfrac{1}{\\cos A}=\\sec A$ จึงตอบ C`
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
      answer: "B",
      explanation: `$(\\tan x+\\cot x)\\sin x\\cos x=\\dfrac{1}{\\sin x\\cos x}\\cdot\\sin x\\cos x=1$ จึงตอบ B`
    }
  ]
},

  "quiz5": {
    meta: {
      courseId: "m5-term1-math",
      quizKey: "quiz5",
      title: "Quiz 5 : กฎของโคไซน์ กฎของไซน์ และการแก้สมการตรีโกณมิติ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- กฎของโคไซน์ (ข้อ 1-8) ---
      {
        id: "q1",
        prompt: `กฎของโคไซน์ (Law of Cosines) เขียนได้ตามข้อใด`,
        choices: [
          { key: "A", text: "$c^2 = a^2 + b^2 + 2ab\\cos C$" },
          { key: "B", text: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
          { key: "C", text: "$c^2 = a^2 - b^2 - 2ab\\cos C$" },
          { key: "D", text: "$c = a + b - 2ab\\cos C$" }
        ],
        answer: "B",
        explanation: `กฎของโคไซน์คือ $c^2 = a^2 + b^2 - 2ab\\cos C$ จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `กฎของโคไซน์เหมาะกับการแก้รูปสามเหลี่ยมในกรณีใด`,
        choices: [
          { key: "A", text: "ทราบมุม 2 มุมและด้าน 1 ด้าน" },
          { key: "B", text: "ทราบด้าน 1 ด้านและมุมตรงข้ามด้านนั้น" },
          { key: "C", text: "ทราบมุมทั้งสามมุม" },
          { key: "D", text: "ทราบด้าน 2 ด้านและมุมระหว่างด้านทั้งสอง หรือทราบด้านทั้งสามด้าน" }
        ],
        answer: "D",
        explanation: `กฎโคไซน์ใช้เมื่อทราบด้าน 2 ด้าน + มุมระหว่างด้าน (SAS) หรือทราบด้านทั้งสาม (SSS) จึงตอบ D`
      },
      {
        id: "q3",
        prompt: `สามเหลี่ยมมีด้าน $a = 3$, $b = 5$ และมุม $C = 60^\\circ$ ด้าน $c$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$\\sqrt{34}$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$\\sqrt{19}$" },
          { key: "D", text: "$8$" }
        ],
        answer: "C",
        explanation: `$c^2 = 9 + 25 - 2(3)(5)\\cos 60^\\circ = 34 - 30(0.5) = 19 \\Rightarrow c = \\sqrt{19}$ จึงตอบ C`
      },
      {
        id: "q4",
        prompt: `สามเหลี่ยมมีด้าน $a = 4$, $b = 4$ และมุม $C = 90^\\circ$ ด้าน $c$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$4\\sqrt{2}$" },
          { key: "B", text: "$8$" },
          { key: "C", text: "$16$" },
          { key: "D", text: "$2\\sqrt{2}$" }
        ],
        answer: "A",
        explanation: `$c^2 = 16 + 16 - 2(4)(4)\\cos 90^\\circ = 32 - 0 = 32 \\Rightarrow c = \\sqrt{32} = 4\\sqrt{2}$ จึงตอบ A`
      },
      {
        id: "q5",
        prompt: `สามเหลี่ยมมีด้านยาว $3$, $5$ และ $7$ หน่วย มุมที่อยู่ตรงข้ามด้านยาว $7$ มีขนาดกี่องศา?`,
        choices: [
          { key: "A", text: "$60^\\circ$" },
          { key: "B", text: "$120^\\circ$" },
          { key: "C", text: "$90^\\circ$" },
          { key: "D", text: "$150^\\circ$" }
        ],
        answer: "B",
        explanation: `$\\cos\\theta = \\dfrac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\dfrac{-15}{30} = -\\dfrac{1}{2} \\Rightarrow \\theta = 120^\\circ$ จึงตอบ B`
      },
      {
        id: "q6",
        prompt: `เมื่อมุม $C = 90^\\circ$ กฎของโคไซน์ $c^2 = a^2 + b^2 - 2ab\\cos C$ จะลดรูปเป็นข้อใด`,
        choices: [
          { key: "A", text: "$c^2 = a^2 + b^2 - 2ab$" },
          { key: "B", text: "$c^2 = a^2 - b^2$" },
          { key: "C", text: "$c = a + b$" },
          { key: "D", text: "$c^2 = a^2 + b^2$ (ทฤษฎีบทพีทาโกรัส)" }
        ],
        answer: "D",
        explanation: `$\\cos 90^\\circ = 0$ พจน์สุดท้ายหายไป เหลือ $c^2 = a^2 + b^2$ จึงตอบ D`
      },
      {
        id: "q7",
        prompt: `สามเหลี่ยมมีด้าน $a = 5$, $b = 8$ และมุม $C = 60^\\circ$ ด้าน $c$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$\\sqrt{89}$" },
          { key: "B", text: "$13$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$9$" }
        ],
        answer: "C",
        explanation: `$c^2 = 25 + 64 - 2(5)(8)\\cos 60^\\circ = 89 - 40 = 49 \\Rightarrow c = 7$ จึงตอบ C`
      },
      {
        id: "q8",
        prompt: `สามเหลี่ยมมีด้านยาว $5$, $7$ และ $8$ หน่วย มุมที่อยู่ตรงข้ามด้านยาว $7$ มีขนาดกี่องศา?`,
        choices: [
          { key: "A", text: "$60^\\circ$" },
          { key: "B", text: "$45^\\circ$" },
          { key: "C", text: "$90^\\circ$" },
          { key: "D", text: "$120^\\circ$" }
        ],
        answer: "A",
        explanation: `$\\cos\\theta = \\dfrac{5^2 + 8^2 - 7^2}{2(5)(8)} = \\dfrac{40}{80} = \\dfrac{1}{2} \\Rightarrow \\theta = 60^\\circ$ จึงตอบ A`
      },

      // --- กฎของไซน์ (ข้อ 9-16) ---
      {
        id: "q9",
        prompt: `กฎของไซน์ (Law of Sines) เขียนได้ตามข้อใด`,
        choices: [
          { key: "A", text: "$a\\sin A = b\\sin B = c\\sin C$" },
          { key: "B", text: "$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$" },
          { key: "C", text: "$\\dfrac{\\sin A}{a^2} = \\dfrac{\\sin B}{b^2}$" },
          { key: "D", text: "$\\dfrac{a}{\\cos A} = \\dfrac{b}{\\cos B}$" }
        ],
        answer: "B",
        explanation: `กฎของไซน์คือ $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$ จึงตอบ B`
      },
      {
        id: "q10",
        prompt: `กฎของไซน์เหมาะกับการแก้รูปสามเหลี่ยมในกรณีใด`,
        choices: [
          { key: "A", text: "ทราบด้านทั้งสามด้าน" },
          { key: "B", text: "ทราบด้าน 2 ด้านและมุมระหว่างด้านทั้งสอง" },
          { key: "C", text: "ทราบมุมทั้งสามมุม" },
          { key: "D", text: "ทราบด้านและมุมตรงข้าม พร้อมอีกมุม/ด้านหนึ่ง (เช่น AAS, ASA)" }
        ],
        answer: "D",
        explanation: `กฎไซน์ใช้เมื่อมีคู่ของด้านและมุมตรงข้ามที่ทราบค่า จึงตอบ D`
      },
      {
        id: "q11",
        prompt: `สามเหลี่ยมมีด้าน $a = 10$, มุม $A = 30^\\circ$ และมุม $B = 45^\\circ$ ด้าน $b$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$5\\sqrt{2}$" },
          { key: "B", text: "$20$" },
          { key: "C", text: "$10\\sqrt{2}$" },
          { key: "D", text: "$5$" }
        ],
        answer: "C",
        explanation: `$b = \\dfrac{a\\sin B}{\\sin A} = \\dfrac{10\\sin 45^\\circ}{\\sin 30^\\circ} = \\dfrac{10(\\frac{\\sqrt{2}}{2})}{\\frac{1}{2}} = 10\\sqrt{2}$ จึงตอบ C`
      },
      {
        id: "q12",
        prompt: `สามเหลี่ยมมีด้าน $a = 6$, มุม $A = 30^\\circ$ และมุม $B = 90^\\circ$ ด้าน $b$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$12$" },
          { key: "B", text: "$6$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$6\\sqrt{3}$" }
        ],
        answer: "A",
        explanation: `$b = \\dfrac{a\\sin B}{\\sin A} = \\dfrac{6\\sin 90^\\circ}{\\sin 30^\\circ} = \\dfrac{6(1)}{\\frac{1}{2}} = 12$ จึงตอบ A`
      },
      {
        id: "q13",
        prompt: `สามเหลี่ยมมีด้าน $a = 10$, มุม $A = 30^\\circ$ และด้าน $b = 10\\sqrt{2}$ มุม $B$ (มุมแหลม) มีขนาดกี่องศา?`,
        choices: [
          { key: "A", text: "$30^\\circ$" },
          { key: "B", text: "$45^\\circ$" },
          { key: "C", text: "$60^\\circ$" },
          { key: "D", text: "$90^\\circ$" }
        ],
        answer: "B",
        explanation: `$\\sin B = \\dfrac{b\\sin A}{a} = \\dfrac{10\\sqrt{2}(\\frac{1}{2})}{10} = \\dfrac{\\sqrt{2}}{2} \\Rightarrow B = 45^\\circ$ จึงตอบ B`
      },
      {
        id: "q14",
        prompt: `ในกฎของไซน์ อัตราส่วน $\\dfrac{a}{\\sin A}$ มีค่าเท่ากับข้อใด (เมื่อ $R$ คือรัศมีวงกลมล้อมรอบ)`,
        choices: [
          { key: "A", text: "รัศมีวงกลมล้อมรอบ ($R$)" },
          { key: "B", text: "พื้นที่ของสามเหลี่ยม" },
          { key: "C", text: "ครึ่งหนึ่งของ $R$" },
          { key: "D", text: "เส้นผ่านศูนย์กลางของวงกลมล้อมรอบ ($2R$)" }
        ],
        answer: "D",
        explanation: `$\\dfrac{a}{\\sin A} = 2R$ คือเส้นผ่านศูนย์กลางของวงกลมล้อมรอบสามเหลี่ยม จึงตอบ D`
      },
      {
        id: "q15",
        prompt: `สามเหลี่ยมมีมุม $A = 45^\\circ$ และมุม $B = 60^\\circ$ มุม $C$ มีขนาดกี่องศา?`,
        choices: [
          { key: "A", text: "$85^\\circ$" },
          { key: "B", text: "$90^\\circ$" },
          { key: "C", text: "$75^\\circ$" },
          { key: "D", text: "$105^\\circ$" }
        ],
        answer: "C",
        explanation: `$C = 180^\\circ - 45^\\circ - 60^\\circ = 75^\\circ$ จึงตอบ C`
      },
      {
        id: "q16",
        prompt: `สามเหลี่ยมมีด้าน $a = 12$, มุม $A = 90^\\circ$ และมุม $B = 30^\\circ$ ด้าน $b$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$6\\sqrt{3}$" }
        ],
        answer: "A",
        explanation: `$b = \\dfrac{a\\sin B}{\\sin A} = \\dfrac{12\\sin 30^\\circ}{\\sin 90^\\circ} = \\dfrac{12(\\frac{1}{2})}{1} = 6$ จึงตอบ A`
      },

      // --- การแก้สมการตรีโกณมิติโดยใช้เอกลักษณ์ (ข้อ 17-30) ---
      {
        id: "q17",
        prompt: `ผลเฉลยของสมการ $\\sin x = \\dfrac{1}{2}$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{30^\\circ\\}$" },
          { key: "B", text: "$\\{30^\\circ, 150^\\circ\\}$" },
          { key: "C", text: "$\\{60^\\circ, 120^\\circ\\}$" },
          { key: "D", text: "$\\{30^\\circ, 210^\\circ\\}$" }
        ],
        answer: "B",
        explanation: `$\\sin x = \\frac{1}{2}$ ในควอดรันต์ 1 และ 2: $x = 30^\\circ, 150^\\circ$ จึงตอบ B`
      },
      {
        id: "q18",
        prompt: `ผลเฉลยของสมการ $\\cos x = -\\dfrac{1}{2}$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{60^\\circ, 120^\\circ\\}$" },
          { key: "B", text: "$\\{120^\\circ\\}$" },
          { key: "C", text: "$\\{60^\\circ, 300^\\circ\\}$" },
          { key: "D", text: "$\\{120^\\circ, 240^\\circ\\}$" }
        ],
        answer: "D",
        explanation: `$\\cos x = -\\frac{1}{2}$ ในควอดรันต์ 2 และ 3: $x = 120^\\circ, 240^\\circ$ จึงตอบ D`
      },
      {
        id: "q19",
        prompt: `ผลเฉลยของสมการ $\\tan x = 1$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{45^\\circ\\}$" },
          { key: "B", text: "$\\{135^\\circ, 315^\\circ\\}$" },
          { key: "C", text: "$\\{45^\\circ, 225^\\circ\\}$" },
          { key: "D", text: "$\\{45^\\circ, 135^\\circ\\}$" }
        ],
        answer: "C",
        explanation: `$\\tan x = 1$ ในควอดรันต์ 1 และ 3: $x = 45^\\circ, 225^\\circ$ จึงตอบ C`
      },
      {
        id: "q20",
        prompt: `ผลเฉลยของสมการ $2\\sin^2 x + \\sin x - 1 = 0$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{30^\\circ, 150^\\circ, 270^\\circ\\}$" },
          { key: "B", text: "$\\{30^\\circ, 150^\\circ\\}$" },
          { key: "C", text: "$\\{270^\\circ\\}$" },
          { key: "D", text: "$\\{90^\\circ, 270^\\circ\\}$" }
        ],
        answer: "A",
        explanation: `$(2\\sin x - 1)(\\sin x + 1) = 0 \\Rightarrow \\sin x = \\frac{1}{2}$ ($30^\\circ,150^\\circ$) หรือ $\\sin x = -1$ ($270^\\circ$) จึงตอบ A`
      },
      {
        id: "q21",
        prompt: `ผลเฉลยของสมการ $2\\cos^2 x + \\cos x - 1 = 0$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{60^\\circ, 300^\\circ\\}$" },
          { key: "B", text: "$\\{60^\\circ, 180^\\circ, 300^\\circ\\}$" },
          { key: "C", text: "$\\{180^\\circ\\}$" },
          { key: "D", text: "$\\{120^\\circ, 240^\\circ\\}$" }
        ],
        answer: "B",
        explanation: `$(2\\cos x - 1)(\\cos x + 1) = 0 \\Rightarrow \\cos x = \\frac{1}{2}$ ($60^\\circ,300^\\circ$) หรือ $\\cos x = -1$ ($180^\\circ$) จึงตอบ B`
      },
      {
        id: "q22",
        prompt: `เอกลักษณ์มุมสองเท่า $\\sin 2x$ เท่ากับข้อใด`,
        choices: [
          { key: "A", text: "$2\\sin x$" },
          { key: "B", text: "$\\sin^2 x - \\cos^2 x$" },
          { key: "C", text: "$1 - 2\\sin^2 x$" },
          { key: "D", text: "$2\\sin x\\cos x$" }
        ],
        answer: "D",
        explanation: `$\\sin 2x = 2\\sin x\\cos x$ จึงตอบ D`
      },
      {
        id: "q23",
        prompt: `เอกลักษณ์มุมสองเท่า $\\cos 2x$ เขียนได้ตามข้อใด`,
        choices: [
          { key: "A", text: "$2\\cos x$" },
          { key: "B", text: "$2\\sin x\\cos x$" },
          { key: "C", text: "$1 - 2\\sin^2 x$" },
          { key: "D", text: "$2\\cos^2 x + 1$" }
        ],
        answer: "C",
        explanation: `$\\cos 2x = 1 - 2\\sin^2 x$ (หนึ่งในรูปของมุมสองเท่า) จึงตอบ C`
      },
      {
        id: "q24",
        prompt: `ผลเฉลยของสมการ $\\sin 2x = 0$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ\\}$" },
          { key: "B", text: "$\\{0^\\circ, 180^\\circ\\}$" },
          { key: "C", text: "$\\{90^\\circ, 270^\\circ\\}$" },
          { key: "D", text: "$\\{45^\\circ, 135^\\circ\\}$" }
        ],
        answer: "A",
        explanation: `$2x = 0^\\circ, 180^\\circ, 360^\\circ, 540^\\circ \\Rightarrow x = 0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ$ จึงตอบ A`
      },
      {
        id: "q25",
        prompt: `ผลเฉลยของสมการ $\\sin x = \\cos x$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{45^\\circ\\}$" },
          { key: "B", text: "$\\{45^\\circ, 225^\\circ\\}$" },
          { key: "C", text: "$\\{135^\\circ, 315^\\circ\\}$" },
          { key: "D", text: "$\\{90^\\circ\\}$" }
        ],
        answer: "B",
        explanation: `หารด้วย $\\cos x$: $\\tan x = 1 \\Rightarrow x = 45^\\circ, 225^\\circ$ จึงตอบ B`
      },
      {
        id: "q26",
        prompt: `เอกลักษณ์ $1 + \\tan^2 x$ เท่ากับข้อใด`,
        choices: [
          { key: "A", text: "$\\csc^2 x$" },
          { key: "B", text: "$\\cot^2 x$" },
          { key: "C", text: "$\\sin^2 x$" },
          { key: "D", text: "$\\sec^2 x$" }
        ],
        answer: "D",
        explanation: `จากเอกลักษณ์พีทาโกรัส: $1 + \\tan^2 x = \\sec^2 x$ จึงตอบ D`
      },
      {
        id: "q27",
        prompt: `ผลเฉลยของสมการ $\\sin^2 x = 1$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{0^\\circ, 180^\\circ\\}$" },
          { key: "B", text: "$\\{90^\\circ\\}$" },
          { key: "C", text: "$\\{90^\\circ, 270^\\circ\\}$" },
          { key: "D", text: "$\\{0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ\\}$" }
        ],
        answer: "C",
        explanation: `$\\sin x = \\pm 1 \\Rightarrow x = 90^\\circ, 270^\\circ$ จึงตอบ C`
      },
      {
        id: "q28",
        prompt: `ผลเฉลยของสมการ $\\sin x\\,(2\\cos x - 1) = 0$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{0^\\circ, 60^\\circ, 180^\\circ, 300^\\circ\\}$" },
          { key: "B", text: "$\\{60^\\circ, 300^\\circ\\}$" },
          { key: "C", text: "$\\{0^\\circ, 180^\\circ\\}$" },
          { key: "D", text: "$\\{60^\\circ, 120^\\circ\\}$" }
        ],
        answer: "A",
        explanation: `$\\sin x = 0$ ($0^\\circ,180^\\circ$) หรือ $\\cos x = \\frac{1}{2}$ ($60^\\circ,300^\\circ$) จึงตอบ A`
      },
      {
        id: "q29",
        prompt: `ผลเฉลยของสมการ $2\\cos^2 x - 1 = 0$ ในช่วง $0^\\circ \\le x < 360^\\circ$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{45^\\circ, 315^\\circ\\}$" },
          { key: "B", text: "$\\{45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ\\}$" },
          { key: "C", text: "$\\{45^\\circ, 135^\\circ\\}$" },
          { key: "D", text: "$\\{135^\\circ, 225^\\circ\\}$" }
        ],
        answer: "B",
        explanation: `$\\cos^2 x = \\frac{1}{2} \\Rightarrow \\cos x = \\pm\\frac{\\sqrt{2}}{2} \\Rightarrow x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ$ จึงตอบ B`
      },
      {
        id: "q30",
        prompt: `สมการ $\\sin^2 x + \\cos^2 x = 1$ มีคำตอบเป็นอย่างไร?`,
        choices: [
          { key: "A", text: "$x = 90^\\circ$ เท่านั้น" },
          { key: "B", text: "ไม่มีคำตอบ" },
          { key: "C", text: "$x = 0^\\circ, 180^\\circ$ เท่านั้น" },
          { key: "D", text: "เป็นจริงสำหรับทุกค่าของ $x$ (เป็นเอกลักษณ์)" }
        ],
        answer: "D",
        explanation: `$\\sin^2 x + \\cos^2 x = 1$ เป็นเอกลักษณ์พีทาโกรัส เป็นจริงเสมอทุกค่า $x$ จึงตอบ D`
      }
    ]
  },

  "quiz6": {
    meta: {
      courseId: "m5-term1-math",
      quizKey: "quiz6",
      title: "Quiz 6 : เลขยกกำลังและกรณฑ์ (เตรียมสอบกลางภาค) (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- จัดรูปตามกฎเลขยกกำลัง (ข้อ 1-4) ---
      {
        id: "q1",
        prompt: `จงทำให้อยู่ในรูปอย่างง่าย $\\left(\\dfrac{x^{-3}y^{-2}}{x^{4}z^{-2}}\\right)^{-3}$`,
        choices: [
          { key: "A", text: "$\\dfrac{x^{21}y^{6}}{z^{6}}$" },
          { key: "B", text: "$\\dfrac{x^{6}y^{6}}{z^{6}}$" },
          { key: "C", text: "$\\dfrac{z^{6}}{x^{21}y^{6}}$" },
          { key: "D", text: "$x^{21}y^{6}z^{6}$" }
        ],
        answer: "A",
        explanation: `ในวงเล็บ $= x^{-7}y^{-2}z^{2}$ ยกกำลัง $-3$ ได้ $x^{21}y^{6}z^{-6} = \\dfrac{x^{21}y^{6}}{z^{6}}$ จึงตอบ A`
      },
      {
        id: "q2",
        prompt: `จงทำให้อยู่ในรูปอย่างง่าย $\\left(\\dfrac{x^{-2}y^{-4}}{x^{5}z^{-4}}\\right)^{-2}$`,
        choices: [
          { key: "A", text: "$x^{14}y^{8}z^{8}$" },
          { key: "B", text: "$\\dfrac{z^{8}}{x^{14}y^{8}}$" },
          { key: "C", text: "$\\dfrac{x^{14}y^{8}}{z^{8}}$" },
          { key: "D", text: "$\\dfrac{x^{7}y^{8}}{z^{8}}$" }
        ],
        answer: "C",
        explanation: `ในวงเล็บ $= x^{-7}y^{-4}z^{4}$ ยกกำลัง $-2$ ได้ $x^{14}y^{8}z^{-8} = \\dfrac{x^{14}y^{8}}{z^{8}}$ จึงตอบ C`
      },
      {
        id: "q3",
        prompt: `จงทำให้อยู่ในรูปอย่างง่าย $\\left(\\dfrac{x^{-5}y^{-3}}{x^{3}z^{-3}}\\right)^{-2}$`,
        choices: [
          { key: "A", text: "$\\dfrac{x^{6}y^{6}}{z^{6}}$" },
          { key: "B", text: "$\\dfrac{x^{16}y^{6}}{z^{6}}$" },
          { key: "C", text: "$\\dfrac{z^{6}}{x^{16}y^{6}}$" },
          { key: "D", text: "$x^{16}y^{6}z^{6}$" }
        ],
        answer: "B",
        explanation: `ในวงเล็บ $= x^{-8}y^{-3}z^{3}$ ยกกำลัง $-2$ ได้ $x^{16}y^{6}z^{-6} = \\dfrac{x^{16}y^{6}}{z^{6}}$ จึงตอบ B`
      },
      {
        id: "q4",
        prompt: `จงทำให้อยู่ในรูปอย่างง่าย $\\left(\\dfrac{x^{-1}y^{-2}}{x^{2}z^{-3}}\\right)^{-2}$`,
        choices: [
          { key: "A", text: "$\\dfrac{x^{3}y^{4}}{z^{6}}$" },
          { key: "B", text: "$\\dfrac{z^{6}}{x^{6}y^{4}}$" },
          { key: "C", text: "$x^{6}y^{4}z^{6}$" },
          { key: "D", text: "$\\dfrac{x^{6}y^{4}}{z^{6}}$" }
        ],
        answer: "D",
        explanation: `ในวงเล็บ $= x^{-3}y^{-2}z^{3}$ ยกกำลัง $-2$ ได้ $x^{6}y^{4}z^{-6} = \\dfrac{x^{6}y^{4}}{z^{6}}$ จึงตอบ D`
      },

      // --- ทำตัวส่วนให้เป็นจำนวนตรรกยะ (ข้อ 5-7) ---
      {
        id: "q5",
        prompt: `จงทำตัวส่วนให้เป็นจำนวนตรรกยะ $\\dfrac{6}{2\\sqrt{3} - 1}$`,
        choices: [
          { key: "A", text: "$\\dfrac{6(2\\sqrt{3} + 1)}{11}$" },
          { key: "B", text: "$\\dfrac{6(2\\sqrt{3} - 1)}{11}$" },
          { key: "C", text: "$\\dfrac{6(2\\sqrt{3} + 1)}{13}$" },
          { key: "D", text: "$6(2\\sqrt{3} + 1)$" }
        ],
        answer: "A",
        explanation: `คูณด้วยสังยุค $\\dfrac{2\\sqrt{3}+1}{2\\sqrt{3}+1}$: ส่วน $= (2\\sqrt{3})^2 - 1^2 = 12 - 1 = 11$ ได้ $\\dfrac{6(2\\sqrt{3}+1)}{11}$ จึงตอบ A`
      },
      {
        id: "q6",
        prompt: `จงทำตัวส่วนให้เป็นจำนวนตรรกยะ $\\dfrac{5}{2\\sqrt{7} - 3}$`,
        choices: [
          { key: "A", text: "$\\dfrac{5(2\\sqrt{7} - 3)}{19}$" },
          { key: "B", text: "$\\dfrac{5(2\\sqrt{7} + 3)}{25}$" },
          { key: "C", text: "$\\dfrac{5(2\\sqrt{7} + 3)}{19}$" },
          { key: "D", text: "$\\dfrac{5(2\\sqrt{7} + 3)}{11}$" }
        ],
        answer: "C",
        explanation: `คูณด้วยสังยุค: ส่วน $= (2\\sqrt{7})^2 - 3^2 = 28 - 9 = 19$ ได้ $\\dfrac{5(2\\sqrt{7}+3)}{19}$ จึงตอบ C`
      },
      {
        id: "q7",
        prompt: `จงทำตัวส่วนให้เป็นจำนวนตรรกยะ $\\dfrac{8}{5\\sqrt{2} - 3}$`,
        choices: [
          { key: "A", text: "$\\dfrac{8(5\\sqrt{2} + 3)}{47}$" },
          { key: "B", text: "$\\dfrac{8(5\\sqrt{2} + 3)}{41}$" },
          { key: "C", text: "$\\dfrac{8(5\\sqrt{2} - 3)}{41}$" },
          { key: "D", text: "$\\dfrac{8(5\\sqrt{2} + 3)}{25}$" }
        ],
        answer: "B",
        explanation: `คูณด้วยสังยุค: ส่วน $= (5\\sqrt{2})^2 - 3^2 = 50 - 9 = 41$ ได้ $\\dfrac{8(5\\sqrt{2}+3)}{41}$ จึงตอบ B`
      },

      // --- การหารกรณฑ์ (ข้อ 8-11) ---
      {
        id: "q8",
        prompt: `จงหาผลลัพธ์ $\\sqrt[4]{48} \\div \\sqrt[4]{3}$`,
        choices: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$2\\sqrt[4]{3}$" },
          { key: "D", text: "$2$" }
        ],
        answer: "D",
        explanation: `$\\sqrt[4]{\\dfrac{48}{3}} = \\sqrt[4]{16} = 2$ จึงตอบ D`
      },
      {
        id: "q9",
        prompt: `จงหาผลลัพธ์ $\\sqrt[5]{96} \\div \\sqrt[5]{3}$`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$32$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$8$" }
        ],
        answer: "A",
        explanation: `$\\sqrt[5]{\\dfrac{96}{3}} = \\sqrt[5]{32} = 2$ จึงตอบ A`
      },
      {
        id: "q10",
        prompt: `จงหาผลลัพธ์ $\\sqrt[4]{405} \\div \\sqrt[4]{5}$`,
        choices: [
          { key: "A", text: "$81$" },
          { key: "B", text: "$9$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$27$" }
        ],
        answer: "C",
        explanation: `$\\sqrt[4]{\\dfrac{405}{5}} = \\sqrt[4]{81} = 3$ จึงตอบ C`
      },
      {
        id: "q11",
        prompt: `จงหาผลลัพธ์ $\\sqrt[3]{54} \\div \\sqrt[3]{2}$`,
        choices: [
          { key: "A", text: "$27$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$9$" },
          { key: "D", text: "$\\sqrt[3]{52}$" }
        ],
        answer: "B",
        explanation: `$\\sqrt[3]{\\dfrac{54}{2}} = \\sqrt[3]{27} = 3$ จึงตอบ B`
      },

      // --- การบวกลบกรณฑ์ที่คล้ายกัน (ข้อ 12-14) ---
      {
        id: "q12",
        prompt: `จงหาค่า $\\sqrt{45x} + \\sqrt{20x} - \\sqrt{5x}$`,
        choices: [
          { key: "A", text: "$6\\sqrt{5x}$" },
          { key: "B", text: "$\\sqrt{60x}$" },
          { key: "C", text: "$2\\sqrt{5x}$" },
          { key: "D", text: "$4\\sqrt{5x}$" }
        ],
        answer: "D",
        explanation: `$3\\sqrt{5x} + 2\\sqrt{5x} - \\sqrt{5x} = 4\\sqrt{5x}$ จึงตอบ D`
      },
      {
        id: "q13",
        prompt: `จงหาค่า $\\sqrt{98x} + \\sqrt{32x} - \\sqrt{2x}$`,
        choices: [
          { key: "A", text: "$10\\sqrt{2x}$" },
          { key: "B", text: "$12\\sqrt{2x}$" },
          { key: "C", text: "$\\sqrt{128x}$" },
          { key: "D", text: "$8\\sqrt{2x}$" }
        ],
        answer: "A",
        explanation: `$7\\sqrt{2x} + 4\\sqrt{2x} - \\sqrt{2x} = 10\\sqrt{2x}$ จึงตอบ A`
      },
      {
        id: "q14",
        prompt: `จงหาค่า $\\sqrt{108x} + \\sqrt{48x} - \\sqrt{3x}$`,
        choices: [
          { key: "A", text: "$11\\sqrt{3x}$" },
          { key: "B", text: "$\\sqrt{153x}$" },
          { key: "C", text: "$9\\sqrt{3x}$" },
          { key: "D", text: "$7\\sqrt{3x}$" }
        ],
        answer: "C",
        explanation: `$6\\sqrt{3x} + 4\\sqrt{3x} - \\sqrt{3x} = 9\\sqrt{3x}$ จึงตอบ C`
      },

      // --- ผลคูณของสังยุค (ข้อ 15-18) ---
      {
        id: "q15",
        prompt: `จงหาผลคูณ $(2\\sqrt{7} - 3\\sqrt{3})(2\\sqrt{7} + 3\\sqrt{3})$`,
        choices: [
          { key: "A", text: "$55$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "$-1$" },
          { key: "D", text: "$5$" }
        ],
        answer: "B",
        explanation: `$(2\\sqrt{7})^2 - (3\\sqrt{3})^2 = 28 - 27 = 1$ จึงตอบ B`
      },
      {
        id: "q16",
        prompt: `จงหาผลคูณ $(4\\sqrt{3} - 2\\sqrt{5})(4\\sqrt{3} + 2\\sqrt{5})$`,
        choices: [
          { key: "A", text: "$68$" },
          { key: "B", text: "$8$" },
          { key: "C", text: "$-28$" },
          { key: "D", text: "$28$" }
        ],
        answer: "D",
        explanation: `$(4\\sqrt{3})^2 - (2\\sqrt{5})^2 = 48 - 20 = 28$ จึงตอบ D`
      },
      {
        id: "q17",
        prompt: `จงหาผลคูณ $(5\\sqrt{2} - 3\\sqrt{3})(5\\sqrt{2} + 3\\sqrt{3})$`,
        choices: [
          { key: "A", text: "$23$" },
          { key: "B", text: "$77$" },
          { key: "C", text: "$19$" },
          { key: "D", text: "$-23$" }
        ],
        answer: "A",
        explanation: `$(5\\sqrt{2})^2 - (3\\sqrt{3})^2 = 50 - 27 = 23$ จึงตอบ A`
      },
      {
        id: "q18",
        prompt: `จงหาผลคูณ $(3\\sqrt{2} - \\sqrt{5})(3\\sqrt{2} + \\sqrt{5})$`,
        choices: [
          { key: "A", text: "$23$" },
          { key: "B", text: "$-13$" },
          { key: "C", text: "$13$" },
          { key: "D", text: "$4$" }
        ],
        answer: "C",
        explanation: `$(3\\sqrt{2})^2 - (\\sqrt{5})^2 = 18 - 5 = 13$ จึงตอบ C`
      },

      // --- สมการติดกรณฑ์ (ข้อ 19-21) ---
      {
        id: "q19",
        prompt: `จงหาค่า $x$ จากสมการ $2\\sqrt{3x + 4} = 10$`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$21$" }
        ],
        answer: "B",
        explanation: `$\\sqrt{3x+4} = 5 \\Rightarrow 3x+4 = 25 \\Rightarrow x = 7$ จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `จงหาค่า $x$ จากสมการ $5\\sqrt{2x + 6} = 20$`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$10$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$5$" }
        ],
        answer: "D",
        explanation: `$\\sqrt{2x+6} = 4 \\Rightarrow 2x+6 = 16 \\Rightarrow x = 5$ จึงตอบ D`
      },
      {
        id: "q21",
        prompt: `จงหาค่า $x$ จากสมการ $4\\sqrt{5x + 1} = 24$`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$35$" },
          { key: "D", text: "$6$" }
        ],
        answer: "A",
        explanation: `$\\sqrt{5x+1} = 6 \\Rightarrow 5x+1 = 36 \\Rightarrow x = 7$ จึงตอบ A`
      },

      // --- เลขชี้กำลังลบ/เศษส่วน ฐานลบ (ข้อ 22-24) ---
      {
        id: "q22",
        prompt: `จงหาค่า $(-64)^{-\\frac{2}{3}}$`,
        choices: [
          { key: "A", text: "$-\\dfrac{1}{16}$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$\\dfrac{1}{16}$" },
          { key: "D", text: "$-16$" }
        ],
        answer: "C",
        explanation: `$(-64)^{-\\frac{2}{3}} = \\dfrac{1}{(\\sqrt[3]{-64})^2} = \\dfrac{1}{(-4)^2} = \\dfrac{1}{16}$ จึงตอบ C`
      },
      {
        id: "q23",
        prompt: `จงหาค่า $(-125)^{-\\frac{4}{3}}$`,
        choices: [
          { key: "A", text: "$-\\dfrac{1}{625}$" },
          { key: "B", text: "$\\dfrac{1}{625}$" },
          { key: "C", text: "$625$" },
          { key: "D", text: "$\\dfrac{1}{125}$" }
        ],
        answer: "B",
        explanation: `$(-125)^{-\\frac{4}{3}} = \\dfrac{1}{(\\sqrt[3]{-125})^4} = \\dfrac{1}{(-5)^4} = \\dfrac{1}{625}$ จึงตอบ B`
      },
      {
        id: "q24",
        prompt: `จงหาค่า $(-8)^{-\\frac{5}{3}}$`,
        choices: [
          { key: "A", text: "$\\dfrac{1}{32}$" },
          { key: "B", text: "$32$" },
          { key: "C", text: "$-32$" },
          { key: "D", text: "$-\\dfrac{1}{32}$" }
        ],
        answer: "D",
        explanation: `$(-8)^{-\\frac{5}{3}} = \\dfrac{1}{(\\sqrt[3]{-8})^5} = \\dfrac{1}{(-2)^5} = -\\dfrac{1}{32}$ จึงตอบ D`
      },

      // --- (N^(1/m))^k (ข้อ 25-27) ---
      {
        id: "q25",
        prompt: `จงหาค่า $\\left(64^{\\frac{1}{6}}\\right)^{4}$`,
        choices: [
          { key: "A", text: "$16$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$64$" },
          { key: "D", text: "$256$" }
        ],
        answer: "A",
        explanation: `$64 = 2^6$ ดังนั้น $\\left((2^6)^{\\frac{1}{6}}\\right)^{4} = 2^{4} = 16$ จึงตอบ A`
      },
      {
        id: "q26",
        prompt: `จงหาค่า $\\left(512^{\\frac{1}{9}}\\right)^{6}$`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$512$" },
          { key: "C", text: "$64$" },
          { key: "D", text: "$128$" }
        ],
        answer: "C",
        explanation: `$512 = 2^9$ ดังนั้น $\\left((2^9)^{\\frac{1}{9}}\\right)^{6} = 2^{6} = 64$ จึงตอบ C`
      },
      {
        id: "q27",
        prompt: `จงหาค่า $\\left(6561^{\\frac{1}{8}}\\right)^{6}$`,
        choices: [
          { key: "A", text: "$6561$" },
          { key: "B", text: "$729$" },
          { key: "C", text: "$81$" },
          { key: "D", text: "$243$" }
        ],
        answer: "B",
        explanation: `$6561 = 3^8$ ดังนั้น $\\left((3^8)^{\\frac{1}{8}}\\right)^{6} = 3^{6} = 729$ จึงตอบ B`
      },

      // --- สมการเลขชี้กำลัง (ข้อ 28-30) ---
      {
        id: "q28",
        prompt: `จงหาค่า $x$ จากสมการ $\\left(\\dfrac{2}{5}\\right)^{x+1} = \\dfrac{25}{4}$`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$-2$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$-3$" }
        ],
        answer: "D",
        explanation: `$\\dfrac{25}{4} = \\left(\\dfrac{2}{5}\\right)^{-2}$ ดังนั้น $x+1 = -2 \\Rightarrow x = -3$ จึงตอบ D`
      },
      {
        id: "q29",
        prompt: `จงหาค่า $x$ จากสมการ $\\left(\\dfrac{5}{2}\\right)^{x+1} = \\dfrac{8}{125}$`,
        choices: [
          { key: "A", text: "$-4$" },
          { key: "B", text: "$-3$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$3$" }
        ],
        answer: "A",
        explanation: `$\\dfrac{8}{125} = \\left(\\dfrac{2}{5}\\right)^{3} = \\left(\\dfrac{5}{2}\\right)^{-3}$ ดังนั้น $x+1 = -3 \\Rightarrow x = -4$ จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `จงหาค่า $x$ จากสมการ $\\left(\\dfrac{4}{3}\\right)^{x+1} = \\dfrac{27}{64}$`,
        choices: [
          { key: "A", text: "$-3$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$-4$" },
          { key: "D", text: "$4$" }
        ],
        answer: "C",
        explanation: `$\\dfrac{27}{64} = \\left(\\dfrac{3}{4}\\right)^{3} = \\left(\\dfrac{4}{3}\\right)^{-3}$ ดังนั้น $x+1 = -3 \\Rightarrow x = -4$ จึงตอบ C`
      }
    ]
  },

  "quiz7": {
    meta: {
      courseId: "m5-term1-math",
      quizKey: "quiz7",
      title: "Quiz 7 : การแก้สมการตรีโกณมิติ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- รูปแบบคำตอบทั่วไป (ข้อ 1-3) ---
      {
        id: "q1",
        prompt: `คำตอบทั่วไปของสมการ $\\sin x = a$ เมื่อ $\\theta$ เป็นคำตอบที่มีค่าน้อยที่สุดในช่วง $[0, 2\\pi)$ คือข้อใด`,
        choices: [
          { key: "A", text: "$x = 2n\\pi \\pm \\theta$" },
          { key: "B", text: "$x = n\\pi + \\theta$" },
          { key: "C", text: "$x = n\\pi + (-1)^n\\theta$" },
          { key: "D", text: "$x = 2n\\pi + \\theta$" }
        ],
        answer: "C",
        explanation: `สำหรับ $\\sin x = a$ (และ $\\text{cosec}\\,x = a$) คำตอบทั่วไปแบบที่ 2 คือ $x = n\\pi + (-1)^n\\theta$ จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `คำตอบทั่วไปของสมการ $\\cos x = a$ คือข้อใด`,
        choices: [
          { key: "A", text: "$x = 2n\\pi \\pm \\theta$" },
          { key: "B", text: "$x = n\\pi + (-1)^n\\theta$" },
          { key: "C", text: "$x = n\\pi + \\theta$" },
          { key: "D", text: "$x = n\\pi - \\theta$" }
        ],
        answer: "A",
        explanation: `สำหรับ $\\cos x = a$ (และ $\\sec x = a$) คำตอบทั่วไปคือ $x = 2n\\pi \\pm \\theta$ จึงตอบ A`
      },
      {
        id: "q3",
        prompt: `คำตอบทั่วไปของสมการ $\\tan x = a$ คือข้อใด`,
        choices: [
          { key: "A", text: "$x = 2n\\pi \\pm \\theta$" },
          { key: "B", text: "$x = n\\pi + (-1)^n\\theta$" },
          { key: "C", text: "$x = 2n\\pi + \\theta$" },
          { key: "D", text: "$x = n\\pi + \\theta$" }
        ],
        answer: "D",
        explanation: `สำหรับ $\\tan x = a$ (และ $\\cot x = a$) คำตอบทั่วไปคือ $x = n\\pi + \\theta$ จึงตอบ D`
      },

      // --- สมการพื้นฐาน (ข้อ 4-8) ---
      {
        id: "q4",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\sin x = \\dfrac{1}{2}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{7\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{6}\\right\\}$" }
        ],
        answer: "B",
        explanation: `$\\sin x$ เป็นบวกในควอดรันต์ 1 และ 2; มุมอ้างอิง $\\dfrac{\\pi}{6}$ จึงได้ $x = \\dfrac{\\pi}{6}, \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$ จึงตอบ B`
      },
      {
        id: "q5",
        prompt: `คำตอบทั่วไปของสมการ $\\sin x = \\dfrac{1}{2}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$x = n\\pi + (-1)^n\\dfrac{\\pi}{6}$" },
          { key: "B", text: "$x = 2n\\pi \\pm \\dfrac{\\pi}{6}$" },
          { key: "C", text: "$x = n\\pi + \\dfrac{\\pi}{6}$" },
          { key: "D", text: "$x = 2n\\pi + \\dfrac{\\pi}{3}$" }
        ],
        answer: "A",
        explanation: `ใช้รูปแบบของ $\\sin$: $x = n\\pi + (-1)^n\\theta$ โดย $\\theta = \\dfrac{\\pi}{6}$ จึงตอบ A`
      },
      {
        id: "q6",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\cos x = -\\dfrac{\\sqrt{2}}{2}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{7\\pi}{4}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}\\right\\}$" }
        ],
        answer: "C",
        explanation: `$\\cos x$ เป็นลบในควอดรันต์ 2 และ 3; มุมอ้างอิง $\\dfrac{\\pi}{4}$ จึงได้ $x = \\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}$ จึงตอบ C`
      },
      {
        id: "q7",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\tan x = -\\sqrt{3}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{4\\pi}{3}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{7\\pi}{6}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{2\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" }
        ],
        answer: "D",
        explanation: `$\\tan x$ เป็นลบในควอดรันต์ 2 และ 4; มุมอ้างอิง $\\dfrac{\\pi}{3}$ จึงได้ $x = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$ และ $2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$ จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `คำตอบทั่วไปของสมการ $\\tan x = -\\sqrt{3}$ (ใช้ $\\theta$ ที่น้อยที่สุดในช่วง $[0, 2\\pi)$) คือข้อใด`,
        choices: [
          { key: "A", text: "$x = 2n\\pi \\pm \\dfrac{2\\pi}{3}$" },
          { key: "B", text: "$x = n\\pi + \\dfrac{2\\pi}{3}$" },
          { key: "C", text: "$x = n\\pi + (-1)^n\\dfrac{2\\pi}{3}$" },
          { key: "D", text: "$x = 2n\\pi + \\dfrac{2\\pi}{3}$" }
        ],
        answer: "B",
        explanation: `รูปแบบของ $\\tan$ คือ $x = n\\pi + \\theta$ โดย $\\theta = \\dfrac{2\\pi}{3}$ จึงตอบ B`
      },

      // --- สมการกำลังสองในฟังก์ชันเดียว (ข้อ 9-13) ---
      {
        id: "q9",
        prompt: `ขั้นตอนแรกที่เหมาะสมที่สุดในการแก้สมการ $2\\cos^2 x + 3\\sin x - 3 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "แทน $\\cos^2 x = 1 - \\sin^2 x$ เพื่อให้เป็นสมการกำลังสองในตัวแปร $\\sin x$" },
          { key: "B", text: "แทน $\\sin x = 1 - \\cos x$" },
          { key: "C", text: "หารทั้งสมการด้วย $\\cos x$" },
          { key: "D", text: "แทน $\\cos^2 x = 1 + \\sin^2 x$" }
        ],
        answer: "A",
        explanation: `ใช้เอกลักษณ์ $\\sin^2 x + \\cos^2 x = 1$ เปลี่ยนให้เหลือฟังก์ชันเดียว จะได้สมการกำลังสองที่แยกตัวประกอบได้ จึงตอบ A`
      },
      {
        id: "q10",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $2\\cos^2 x + 3\\sin x - 3 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{2}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{\\pi}{2}, \\dfrac{2\\pi}{3}\\right\\}$" }
        ],
        answer: "C",
        explanation: `แทน $\\cos^2 x = 1-\\sin^2 x$ ได้ $2\\sin^2 x - 3\\sin x + 1 = 0 \\Rightarrow (2\\sin x - 1)(\\sin x - 1) = 0$; $\\sin x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$ และ $\\sin x = 1$ ให้ $\\dfrac{\\pi}{2}$ จึงตอบ C`
      },
      {
        id: "q11",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\sin^2 x + \\cos x - 1 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}\\right\\}$" },
          { key: "B", text: "$\\left\\{0, \\pi\\right\\}$" },
          { key: "C", text: "$\\left\\{0, \\dfrac{\\pi}{2}\\right\\}$" },
          { key: "D", text: "$\\left\\{0, \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}\\right\\}$" }
        ],
        answer: "D",
        explanation: `แทน $\\sin^2 x = 1-\\cos^2 x$ ได้ $\\cos x(1 - \\cos x) = 0$; $\\cos x = 0$ ให้ $\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$ และ $\\cos x = 1$ ให้ $0$ จึงตอบ D`
      },
      {
        id: "q12",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $2\\sin^2 x - 3\\cos x = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{11\\pi}{6}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\right\\}$" }
        ],
        answer: "B",
        explanation: `แทน $\\sin^2 x = 1-\\cos^2 x$ ได้ $2\\cos^2 x + 3\\cos x - 2 = 0 \\Rightarrow (2\\cos x - 1)(\\cos x + 2) = 0$; $\\cos x = -2$ ใช้ไม่ได้ เหลือ $\\cos x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$ จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $2\\cos^2 x - \\sin x + 1 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{2}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "C", text: "$\\left\\{0, \\pi\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{3\\pi}{2}\\right\\}$" }
        ],
        answer: "A",
        explanation: `แทน $\\cos^2 x = 1-\\sin^2 x$ ได้ $2\\sin^2 x + \\sin x - 3 = 0 \\Rightarrow (2\\sin x + 3)(\\sin x - 1) = 0$; $\\sin x = -\\dfrac{3}{2}$ ใช้ไม่ได้ เหลือ $\\sin x = 1$ ให้ $\\dfrac{\\pi}{2}$ จึงตอบ A`
      },

      // --- การแยกตัวประกอบแบบจับกลุ่ม (ข้อ 14-16) ---
      {
        id: "q14",
        prompt: `วิธีที่เหมาะสมที่สุดในการแก้สมการ $2\\sin x \\cdot \\tan x - 2\\sin x - \\tan x + 1 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "ยกกำลังสองทั้งสองข้างของสมการ" },
          { key: "B", text: "หารทั้งสมการด้วย $\\sin x$" },
          { key: "C", text: "จัดกลุ่มแล้วแยกตัวประกอบเป็น $(\\tan x - 1)(2\\sin x - 1) = 0$" },
          { key: "D", text: "แทน $\\tan x = 1 - \\sin x$" }
        ],
        answer: "C",
        explanation: `จับกลุ่ม: $2\\sin x(\\tan x - 1) - (\\tan x - 1) = (\\tan x - 1)(2\\sin x - 1) = 0$ จึงตอบ C`
      },
      {
        id: "q15",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $2\\sin x \\cdot \\tan x - 2\\sin x - \\tan x + 1 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{\\pi}{4}, \\dfrac{5\\pi}{6}, \\dfrac{5\\pi}{4}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{\\pi}{4}, \\dfrac{2\\pi}{3}, \\dfrac{5\\pi}{4}\\right\\}$" }
        ],
        answer: "B",
        explanation: `$(\\tan x - 1)(2\\sin x - 1) = 0$; $\\tan x = 1$ ให้ $\\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}$ และ $\\sin x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$ จึงตอบ B`
      },
      {
        id: "q16",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $2\\cos x \\cdot \\tan x - 2\\cos x - \\tan x + 1 = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{\\pi}{4}, \\dfrac{5\\pi}{6}, \\dfrac{5\\pi}{4}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{4}, \\dfrac{5\\pi}{3}\\right\\}$" }
        ],
        answer: "D",
        explanation: `จับกลุ่ม: $(\\tan x - 1)(2\\cos x - 1) = 0$; $\\tan x = 1$ ให้ $\\dfrac{\\pi}{4}, \\dfrac{5\\pi}{4}$ และ $\\cos x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$ จึงตอบ D`
      },

      // --- ลดรูปด้วยเอกลักษณ์ (cosec, cot, sec) (ข้อ 17-19) ---
      {
        id: "q17",
        prompt: `ขั้นตอนแรกที่เหมาะสมในการแก้สมการ $\\cot x + 2\\sin x = \\text{cosec}\\,x$ คือข้อใด`,
        choices: [
          { key: "A", text: "เขียน $\\cot x$ และ $\\text{cosec}\\,x$ ในรูปของ $\\sin x, \\cos x$ แล้วคูณทั้งสมการด้วย $\\sin x$" },
          { key: "B", text: "ยกกำลังสองทั้งสองข้างของสมการ" },
          { key: "C", text: "แทน $\\cot x$ ด้วย $\\tan x$" },
          { key: "D", text: "หารทั้งสมการด้วย $\\cos x$" }
        ],
        answer: "A",
        explanation: `เปลี่ยนเป็น $\\dfrac{\\cos x}{\\sin x} + 2\\sin x = \\dfrac{1}{\\sin x}$ แล้วคูณด้วย $\\sin x$ จะได้ $\\cos x + 2\\sin^2 x = 1$ จึงตอบ A`
      },
      {
        id: "q18",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\cot x + 2\\sin x = \\text{cosec}\\,x$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{0, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{0\\right\\}$" }
        ],
        answer: "C",
        explanation: `ได้ $2\\cos^2 x - \\cos x - 1 = 0 \\Rightarrow (2\\cos x + 1)(\\cos x - 1) = 0$; $\\cos x = 1$ ให้ $x=0$ แต่ทำให้ $\\sin x = 0$ ซึ่ง $\\cot, \\text{cosec}$ ไม่นิยาม ต้องตัดออก เหลือ $\\cos x = -\\dfrac{1}{2}$ ให้ $\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}$ จึงตอบ C`
      },
      {
        id: "q19",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\tan x + 2\\cos x = \\sec x$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{2}, \\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{2}\\right\\}$" }
        ],
        answer: "B",
        explanation: `คูณด้วย $\\cos x$ ได้ $\\sin x + 2\\cos^2 x = 1 \\Rightarrow 2\\sin^2 x - \\sin x - 1 = 0 \\Rightarrow (2\\sin x + 1)(\\sin x - 1) = 0$; $\\sin x = 1$ ให้ $\\dfrac{\\pi}{2}$ แต่ $\\cos x = 0$ ไม่นิยาม ตัดออก เหลือ $\\sin x = -\\dfrac{1}{2}$ จึงตอบ B`
      },

      // --- มุมสองเท่า (ข้อ 20-22) ---
      {
        id: "q20",
        prompt: `ในการแก้สมการ $\\cos x + 4\\sin x - \\sin 2x = 2$ ควรแทน $\\sin 2x$ ด้วยข้อใด`,
        choices: [
          { key: "A", text: "$2\\sin x$" },
          { key: "B", text: "$1 - 2\\sin^2 x$" },
          { key: "C", text: "$\\cos^2 x - \\sin^2 x$" },
          { key: "D", text: "$2\\sin x \\cos x$" }
        ],
        answer: "D",
        explanation: `เอกลักษณ์มุมสองเท่า $\\sin 2x = 2\\sin x\\cos x$ จึงตอบ D`
      },
      {
        id: "q21",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\cos x + 4\\sin x - \\sin 2x = 2$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "A",
        explanation: `แทน $\\sin 2x = 2\\sin x\\cos x$ แล้วจับกลุ่ม: $(1-2\\sin x)(\\cos x - 2) = 0$; $\\cos x = 2$ ใช้ไม่ได้ เหลือ $\\sin x = \\dfrac{1}{2}$ จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\sin x + 4\\cos x - \\sin 2x = 2$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "C",
        explanation: `จับกลุ่มได้ $(1-2\\cos x)(\\sin x - 2) = 0$; $\\sin x = 2$ ใช้ไม่ได้ เหลือ $\\cos x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}$ จึงตอบ C`
      },

      // --- รูป a sin Ax + b cos Ax (ข้อ 23-25) ---
      {
        id: "q23",
        prompt: `สมการรูป $a\\sin Ax + b\\cos Ax$ สามารถเขียนใหม่ได้เป็นข้อใด`,
        choices: [
          { key: "A", text: "$(a+b)\\sin(Ax + \\theta)$" },
          { key: "B", text: "$\\sqrt{a^2+b^2}\\,\\sin(Ax + \\theta)$ เมื่อ $\\tan\\theta = \\dfrac{b}{a}$" },
          { key: "C", text: "$\\sqrt{a^2-b^2}\\,\\cos(Ax + \\theta)$" },
          { key: "D", text: "$ab\\sin(Ax)$" }
        ],
        answer: "B",
        explanation: `สูตรคือ $a\\sin Ax + b\\cos Ax = \\sqrt{a^2+b^2}\\,\\sin(Ax+\\theta)$ เมื่อ $\\tan\\theta = \\dfrac{b}{a}$ จึงตอบ B`
      },
      {
        id: "q24",
        prompt: `ค่าของ $\\sqrt{a^2+b^2}$ สำหรับสมการ $\\cos x + \\sqrt{3}\\sin x = 1$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$\\sqrt{3}$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$2$" }
        ],
        answer: "D",
        explanation: `สัมประสิทธิ์ของ $\\sin x$ คือ $\\sqrt{3}$ และของ $\\cos x$ คือ $1$; $\\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\cos x + \\sqrt{3}\\sin x = 1$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\pi\\right\\}$" },
          { key: "C", text: "$\\left\\{0, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{0, \\dfrac{\\pi}{3}\\right\\}$" }
        ],
        answer: "C",
        explanation: `เขียนเป็น $2\\sin\\left(x + \\dfrac{\\pi}{6}\\right) = 1 \\Rightarrow \\sin\\left(x+\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$; $x+\\dfrac{\\pi}{6} = \\dfrac{\\pi}{6}$ หรือ $\\dfrac{5\\pi}{6}$ จึงได้ $x = 0$ หรือ $\\dfrac{2\\pi}{3}$ จึงตอบ C`
      },

      // --- ผลบวก-ผลต่างเป็นผลคูณ (ข้อ 26-27) ---
      {
        id: "q26",
        prompt: `$\\sin 5\\theta - \\sin 3\\theta$ เขียนในรูปผลคูณได้เป็นข้อใด`,
        choices: [
          { key: "A", text: "$2\\cos 4\\theta \\sin \\theta$" },
          { key: "B", text: "$2\\sin 4\\theta \\cos \\theta$" },
          { key: "C", text: "$-2\\sin 4\\theta \\sin \\theta$" },
          { key: "D", text: "$2\\cos 4\\theta \\cos \\theta$" }
        ],
        answer: "A",
        explanation: `$\\sin A - \\sin B = 2\\cos\\dfrac{1}{2}(A+B)\\sin\\dfrac{1}{2}(A-B) = 2\\cos 4\\theta \\sin\\theta$ จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `$\\cos 5\\theta - \\cos 3\\theta$ เขียนในรูปผลคูณได้เป็นข้อใด`,
        choices: [
          { key: "A", text: "$2\\cos 4\\theta \\cos \\theta$" },
          { key: "B", text: "$-2\\sin 4\\theta \\sin \\theta$" },
          { key: "C", text: "$2\\sin 4\\theta \\sin \\theta$" },
          { key: "D", text: "$2\\cos 4\\theta \\sin \\theta$" }
        ],
        answer: "B",
        explanation: `$\\cos A - \\cos B = -2\\sin\\dfrac{1}{2}(A+B)\\sin\\dfrac{1}{2}(A-B) = -2\\sin 4\\theta \\sin\\theta$ จึงตอบ B`
      },

      // --- โจทย์ประยุกต์รวมเทคนิค (ข้อ 28-30) ---
      {
        id: "q28",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $4\\cos^2 x + 2(\\sqrt{3}+1)\\sin x - 4 - \\sqrt{3} = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{4}, \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}, \\dfrac{3\\pi}{4}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}, \\dfrac{5\\pi}{6}\\right\\}$" }
        ],
        answer: "D",
        explanation: `แทน $\\cos^2 x = 1-\\sin^2 x$ ได้ $4\\sin^2 x - 2(\\sqrt{3}+1)\\sin x + \\sqrt{3} = 0 \\Rightarrow (2\\sin x - \\sqrt{3})(2\\sin x - 1) = 0$; $\\sin x = \\dfrac{\\sqrt{3}}{2}$ ให้ $\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}$ และ $\\sin x = \\dfrac{1}{2}$ ให้ $\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$ จึงตอบ D`
      },
      {
        id: "q29",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $6\\tan\\theta - 5\\sqrt{3}\\sec\\theta + 12\\cot\\theta = 0$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{2}\\right\\}$" }
        ],
        answer: "A",
        explanation: `คูณด้วย $\\sin\\theta\\cos\\theta$ ได้ $6\\sin^2\\theta + 12\\cos^2\\theta = 5\\sqrt{3}\\sin\\theta \\Rightarrow 6\\sin^2\\theta + 5\\sqrt{3}\\sin\\theta - 12 = 0$; ได้ $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$ (อีกค่าน้อยกว่า $-1$ ใช้ไม่ได้) จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `เซตคำตอบในช่วง $[0, 2\\pi)$ ของสมการ $\\text{cosec}\\,x + \\cot x = \\sqrt{3}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\left\\{\\dfrac{\\pi}{6}\\right\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{2\\pi}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{\\dfrac{\\pi}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\right\\}$" }
        ],
        answer: "C",
        explanation: `$\\text{cosec}\\,x + \\cot x = \\dfrac{1+\\cos x}{\\sin x} = \\cot\\dfrac{x}{2} = \\sqrt{3} \\Rightarrow \\dfrac{x}{2} = \\dfrac{\\pi}{6} \\Rightarrow x = \\dfrac{\\pi}{3}$ จึงตอบ C`
      }
    ]
  },

  "quiz8": {
    meta: {
      courseId: "m5-term1-math",
      quizKey: "quiz8",
      title: "Quiz 8 : เมทริกซ์ การคูณ ทรานสโพส และดีเทอร์มิแนนต์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- การคูณเมทริกซ์ (ข้อ 1-6) ---
      {
        id: "q1",
        prompt: `กำหนดเมทริกซ์ $A$ และ $B$ ดังรูป จงหา $AB$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_01.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 5 & 12 \\\\ 21 & 32 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$" }
        ],
        answer: "B",
        explanation: `คูณแถวของ $A$ กับหลักของ $B$: $(1)(5)+(2)(7)=19$, $(1)(6)+(2)(8)=22$, $(3)(5)+(4)(7)=43$, $(3)(6)+(4)(8)=50$ จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `เมทริกซ์ $A$ และ $B$ จะคูณกันเป็น $AB$ ได้ เมื่อมีเงื่อนไขตามข้อใด`,
        choices: [
          { key: "A", text: "จำนวนแถวของ $A$ เท่ากับจำนวนแถวของ $B$" },
          { key: "B", text: "จำนวนหลักของ $A$ เท่ากับจำนวนหลักของ $B$" },
          { key: "C", text: "$A$ และ $B$ ต้องมีขนาดเท่ากันเสมอ" },
          { key: "D", text: "จำนวนหลัก (คอลัมน์) ของ $A$ เท่ากับจำนวนแถวของ $B$" }
        ],
        answer: "D",
        explanation: `$A$ ขนาด $m \\times n$ คูณ $B$ ขนาด $n \\times p$ ได้ก็ต่อเมื่อจำนวนหลักของ $A$ เท่ากับจำนวนแถวของ $B$ จึงตอบ D`
      },
      {
        id: "q3",
        prompt: `กำหนดเมทริกซ์ $A$ และ $B$ ดังรูป จงหา $AB$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_03.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 2 & 8 \\\\ 7 & 19 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 2 & 0 \\\\ 2 & 15 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 6 & 12 \\\\ 9 & 15 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} 2 & 7 \\\\ 8 & 19 \\end{bmatrix}$" }
        ],
        answer: "A",
        explanation: `$(2)(1)+(0)(2)=2$, $(2)(4)+(0)(5)=8$, $(1)(1)+(3)(2)=7$, $(1)(4)+(3)(5)=19$ จึงตอบ A`
      },
      {
        id: "q4",
        prompt: `ถ้า $A$ เป็นเมทริกซ์ขนาด $2 \\times 3$ และ $B$ เป็นเมทริกซ์ขนาด $3 \\times 4$ แล้ว $AB$ มีขนาดเท่าใด`,
        choices: [
          { key: "A", text: "$3 \\times 3$" },
          { key: "B", text: "$3 \\times 4$" },
          { key: "C", text: "$2 \\times 4$" },
          { key: "D", text: "คูณกันไม่ได้" }
        ],
        answer: "C",
        explanation: `$(m \\times n)(n \\times p) = m \\times p$ ดังนั้น $(2 \\times 3)(3 \\times 4) = 2 \\times 4$ จึงตอบ C`
      },
      {
        id: "q5",
        prompt: `กำหนดเมทริกซ์ $A$ และ $B$ ดังรูป จงหา $AB$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_05.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 32 \\end{bmatrix}$ (ขนาด $1 \\times 1$)" },
          { key: "B", text: "$\\begin{bmatrix} 21 \\end{bmatrix}$ (ขนาด $1 \\times 1$)" },
          { key: "C", text: "เมทริกซ์ขนาด $3 \\times 3$" },
          { key: "D", text: "คูณกันไม่ได้ เพราะขนาดไม่สอดคล้องกัน" }
        ],
        answer: "A",
        explanation: `$(1 \\times 3)(3 \\times 1) = 1 \\times 1$; ค่าคือ $(1)(4)+(2)(5)+(3)(6) = 4+10+18 = 32$ จึงตอบ A`
      },
      {
        id: "q6",
        prompt: `ข้อใดกล่าวถูกต้องเกี่ยวกับ $AB$ และ $BA$ ของเมทริกซ์จัตุรัสขนาดเดียวกัน`,
        choices: [
          { key: "A", text: "เท่ากันเสมอ เพราะการคูณเมทริกซ์มีสมบัติการสลับที่" },
          { key: "B", text: "เท่ากันเสมอเมื่อ $A$ และ $B$ มีขนาดเท่ากัน" },
          { key: "C", text: "$AB$ มากกว่า $BA$ เสมอ" },
          { key: "D", text: "โดยทั่วไปไม่เท่ากัน เพราะการคูณเมทริกซ์ไม่มีสมบัติการสลับที่" }
        ],
        answer: "D",
        explanation: `การคูณเมทริกซ์ไม่มีสมบัติการสลับที่ โดยทั่วไป $AB \\neq BA$ (ดูข้อ 1 และ 3 ประกอบ) จึงตอบ D`
      },

      // --- ทรานสโพสเมทริกซ์ (ข้อ 7-9) ---
      {
        id: "q7",
        prompt: `กำหนดเมทริกซ์ $A$ ดังรูป จงหา $A^{T}$ (ทรานสโพสของ $A$)<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_07.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 6 & 5 & 4 \\\\ 3 & 2 & 1 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} 4 & 1 \\\\ 5 & 2 \\\\ 6 & 3 \\end{bmatrix}$" }
        ],
        answer: "C",
        explanation: `ทรานสโพสคือสลับแถวเป็นหลัก: แถวที่ 1 คือ $[1\\ 2\\ 3]$ กลายเป็นหลักที่ 1 ได้เมทริกซ์ขนาด $3 \\times 2$ จึงตอบ C`
      },
      {
        id: "q8",
        prompt: `ถ้า $A$ เป็นเมทริกซ์ขนาด $3 \\times 5$ แล้ว $A^{T}$ มีขนาดเท่าใด`,
        choices: [
          { key: "A", text: "$3 \\times 5$" },
          { key: "B", text: "$5 \\times 3$" },
          { key: "C", text: "$3 \\times 3$" },
          { key: "D", text: "$5 \\times 5$" }
        ],
        answer: "B",
        explanation: `ทรานสโพสสลับจำนวนแถวกับจำนวนหลัก $3 \\times 5$ จึงกลายเป็น $5 \\times 3$ จึงตอบ B`
      },
      {
        id: "q9",
        prompt: `กำหนดเมทริกซ์ $A$ ดังรูป จงหา $A^{T}$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_09.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 2 & 4 & 6 \\\\ 1 & 3 & 5 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 6 & 4 & 2 \\\\ 5 & 3 & 1 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} 1 & 3 & 5 \\\\ 2 & 4 & 6 \\end{bmatrix}$" }
        ],
        answer: "D",
        explanation: `$A$ ขนาด $3 \\times 2$ ทรานสโพสได้ขนาด $2 \\times 3$ โดยหลักที่ 1 ของ $A$ คือ $[1\\ 3\\ 5]$ กลายเป็นแถวที่ 1 จึงตอบ D`
      },

      // --- ดีเทอร์มิแนนต์ : ทฤษฎีและ 2x2 (ข้อ 10-18) ---
      {
        id: "q10",
        prompt: `ดีเทอร์มิแนนต์หาค่าได้กับเมทริกซ์ลักษณะใด`,
        choices: [
          { key: "A", text: "เมทริกซ์จัตุรัสเท่านั้น (จำนวนแถวเท่ากับจำนวนหลัก)" },
          { key: "B", text: "เมทริกซ์ทุกขนาด" },
          { key: "C", text: "เมทริกซ์ที่มีจำนวนแถวมากกว่าจำนวนหลัก" },
          { key: "D", text: "เมทริกซ์แถวเดียวเท่านั้น" }
        ],
        answer: "A",
        explanation: `ดีเทอร์มิแนนต์นิยามเฉพาะเมทริกซ์จัตุรัส ($n \\times n$) เท่านั้น จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `ถ้า $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ แล้ว $\\det(A)$ เท่ากับข้อใด`,
        choices: [
          { key: "A", text: "$ab - cd$" },
          { key: "B", text: "$ac - bd$" },
          { key: "C", text: "$ad - bc$" },
          { key: "D", text: "$ad + bc$" }
        ],
        answer: "C",
        explanation: `ดีเทอร์มิแนนต์ $2 \\times 2$ คือผลคูณแนวทแยงหลักลบผลคูณแนวทแยงรอง $= ad - bc$ จึงตอบ C`
      },
      {
        id: "q12",
        prompt: `จากเมทริกซ์ $A$ ในรูป จงหา $\\det(A)$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_12.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$23$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$-7$" },
          { key: "D", text: "$22$" }
        ],
        answer: "B",
        explanation: `$\\det(A) = (3)(5) - (4)(2) = 15 - 8 = 7$ จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `จงหาค่าของ $\\begin{vmatrix} 6 & 2 \\\\ 3 & 4 \\end{vmatrix}$`,
        choices: [
          { key: "A", text: "$18$" },
          { key: "B", text: "$30$" },
          { key: "C", text: "$-18$" },
          { key: "D", text: "$24$" }
        ],
        answer: "A",
        explanation: `$(6)(4) - (2)(3) = 24 - 6 = 18$ จึงตอบ A`
      },
      {
        id: "q14",
        prompt: `จงหาค่าของ $\\begin{vmatrix} 5 & -2 \\\\ 3 & 1 \\end{vmatrix}$`,
        choices: [
          { key: "A", text: "$-1$" },
          { key: "B", text: "$-11$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$11$" }
        ],
        answer: "D",
        explanation: `$(5)(1) - (-2)(3) = 5 + 6 = 11$ (ระวังเครื่องหมายลบคูณลบเป็นบวก) จึงตอบ D`
      },
      {
        id: "q15",
        prompt: `จากเมทริกซ์ $A$ ในรูป จงหา $\\det(A)$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_15.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$24$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$-12$" }
        ],
        answer: "B",
        explanation: `$(2)(6) - (3)(4) = 12 - 12 = 0$ (แถวที่ 2 เป็น 2 เท่าของแถวที่ 1) จึงตอบ B`
      },
      {
        id: "q16",
        prompt: `เมทริกซ์จัตุรัสที่มี $\\det(A) = 0$ เรียกว่าอะไร และมีสมบัติอย่างไร`,
        choices: [
          { key: "A", text: "เมทริกซ์เอกลักษณ์ และมีอินเวอร์สเสมอ" },
          { key: "B", text: "เมทริกซ์ทรานสโพส และมีอินเวอร์สเสมอ" },
          { key: "C", text: "เมทริกซ์เอกฐาน (singular) ซึ่งหาอินเวอร์สไม่ได้" },
          { key: "D", text: "เมทริกซ์ศูนย์เท่านั้น" }
        ],
        answer: "C",
        explanation: `เมทริกซ์ที่ $\\det = 0$ เรียกว่าเมทริกซ์เอกฐาน (singular matrix) หาอินเวอร์สไม่ได้ จึงตอบ C`
      },
      {
        id: "q17",
        prompt: `$\\det(A^{T})$ มีความสัมพันธ์กับ $\\det(A)$ อย่างไร`,
        choices: [
          { key: "A", text: "$\\det(A^{T}) = -\\det(A)$" },
          { key: "B", text: "$\\det(A^{T}) = 0$ เสมอ" },
          { key: "C", text: "$\\det(A^{T}) = 2\\det(A)$" },
          { key: "D", text: "$\\det(A^{T}) = \\det(A)$" }
        ],
        answer: "D",
        explanation: `การทรานสโพสไม่เปลี่ยนค่าดีเทอร์มิแนนต์ จึงได้ $\\det(A^{T}) = \\det(A)$ จึงตอบ D`
      },
      {
        id: "q18",
        prompt: `ดีเทอร์มิแนนต์ของเมทริกซ์เอกลักษณ์ $I_n$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$1$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$n$" },
          { key: "D", text: "$n^2$" }
        ],
        answer: "A",
        explanation: `$I_n$ เป็นเมทริกซ์สามเหลี่ยมที่แนวทแยงหลักเป็น 1 ทั้งหมด $\\det(I_n) = 1 \\times 1 \\times \\cdots = 1$ จึงตอบ A`
      },

      // --- ดีเทอร์มิแนนต์ 3x3 และสมบัติ (ข้อ 19-30) ---
      {
        id: "q19",
        prompt: `วิธีใดใช้หาดีเทอร์มิแนนต์ของเมทริกซ์ขนาด $3 \\times 3$ ได้ถูกต้อง`,
        choices: [
          { key: "A", text: "บวกสมาชิกทุกตัวในเมทริกซ์เข้าด้วยกัน" },
          { key: "B", text: "กระจายตามโคแฟกเตอร์ (cofactor expansion) หรือใช้กฎซาร์รูส" },
          { key: "C", text: "คูณสมาชิกทุกตัวในเมทริกซ์เข้าด้วยกัน" },
          { key: "D", text: "หาผลรวมของสมาชิกบนแนวทแยงมุมหลักเท่านั้น" }
        ],
        answer: "B",
        explanation: `$\\det$ ของ $3 \\times 3$ หาได้จากการกระจายโคแฟกเตอร์ตามแถวหรือหลัก หรือใช้กฎซาร์รูส (ผลรวมแนวทแยงลง ลบ แนวทแยงขึ้น) จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `จากเมทริกซ์ $A$ ในรูป จงหา $\\det(A)$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_20.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$-3$" },
          { key: "D", text: "$6$" }
        ],
        answer: "C",
        explanation: `กระจายตามแถวที่ 1: $1(5 \\cdot 10 - 6 \\cdot 8) - 2(4 \\cdot 10 - 6 \\cdot 7) + 3(4 \\cdot 8 - 5 \\cdot 7) = 1(2) - 2(-2) + 3(-3) = 2 + 4 - 9 = -3$ จึงตอบ C`
      },
      {
        id: "q21",
        prompt: `จงหาค่าของ $\\begin{vmatrix} 2 & 0 & 1 \\\\ 1 & 3 & 2 \\\\ 0 & 1 & 4 \\end{vmatrix}$`,
        choices: [
          { key: "A", text: "$21$" },
          { key: "B", text: "$24$" },
          { key: "C", text: "$19$" },
          { key: "D", text: "$-21$" }
        ],
        answer: "A",
        explanation: `กระจายตามแถวที่ 1: $2(3 \\cdot 4 - 2 \\cdot 1) - 0(1 \\cdot 4 - 2 \\cdot 0) + 1(1 \\cdot 1 - 3 \\cdot 0) = 2(10) - 0 + 1 = 21$ จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `กำหนด $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 10 \\end{bmatrix}$ ไมเนอร์ $M_{11}$ ของ $A$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$-2$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$2$" }
        ],
        answer: "D",
        explanation: `$M_{11}$ คือดีเทอร์มิแนนต์ที่เหลือเมื่อตัดแถวที่ 1 และหลักที่ 1 ออก $= \\begin{vmatrix} 5 & 6 \\\\ 8 & 10 \\end{vmatrix} = 50 - 48 = 2$ จึงตอบ D`
      },
      {
        id: "q23",
        prompt: `จากเมทริกซ์ $A$ ในรูป จงหา $\\det(A)$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_23.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$1$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$13$" },
          { key: "D", text: "$-13$" }
        ],
        answer: "C",
        explanation: `กระจายตามแถวที่ 1: $1(1 \\cdot 1 - 0 \\cdot 2) - 0(3 \\cdot 1 - 0 \\cdot 0) + 2(3 \\cdot 2 - 1 \\cdot 0) = 1 - 0 + 12 = 13$ จึงตอบ C`
      },
      {
        id: "q24",
        prompt: `ความสัมพันธ์ระหว่างโคแฟกเตอร์ $C_{ij}$ กับไมเนอร์ $M_{ij}$ คือข้อใด`,
        choices: [
          { key: "A", text: "$C_{ij} = M_{ij}$ เสมอ" },
          { key: "B", text: "$C_{ij} = (-1)^{i+j} M_{ij}$" },
          { key: "C", text: "$C_{ij} = (-1)^{ij} M_{ij}$" },
          { key: "D", text: "$C_{ij} = -M_{ij}$ เสมอ" }
        ],
        answer: "B",
        explanation: `โคแฟกเตอร์คือไมเนอร์ที่ติดเครื่องหมายตามตำแหน่ง $C_{ij} = (-1)^{i+j} M_{ij}$ จึงตอบ B`
      },
      {
        id: "q25",
        prompt: `ถ้าสลับตำแหน่งของสองแถวในเมทริกซ์จัตุรัส ค่าดีเทอร์มิแนนต์จะเปลี่ยนแปลงอย่างไร`,
        choices: [
          { key: "A", text: "มีค่าคงเดิม" },
          { key: "B", text: "กลายเป็นศูนย์" },
          { key: "C", text: "เพิ่มขึ้นเป็น 2 เท่า" },
          { key: "D", text: "เปลี่ยนเครื่องหมายเป็นตรงข้าม" }
        ],
        answer: "D",
        explanation: `การสลับสองแถว (หรือสองหลัก) ทำให้ดีเทอร์มิแนนต์เปลี่ยนเครื่องหมาย จึงตอบ D`
      },
      {
        id: "q26",
        prompt: `ถ้าเมทริกซ์จัตุรัสมีสมาชิกในแถวใดแถวหนึ่งเป็นศูนย์ทั้งแถว ดีเทอร์มิแนนต์มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$0$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "เท่ากับผลคูณของสมาชิกแนวทแยงหลัก" },
          { key: "D", text: "หาค่าไม่ได้" }
        ],
        answer: "A",
        explanation: `กระจายโคแฟกเตอร์ตามแถวที่เป็นศูนย์ทั้งแถว จะได้ผลรวมเป็น 0 ทุกพจน์ ดังนั้น $\\det = 0$ จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `เมทริกซ์ $A$ ในรูปเป็นเมทริกซ์สามเหลี่ยมบน (สมาชิกใต้แนวทแยงหลักเป็นศูนย์) จงหา $\\det(A)$<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q8_27.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$30$" },
          { key: "C", text: "$0$" },
          { key: "D", text: "$45$" }
        ],
        answer: "B",
        explanation: `ดีเทอร์มิแนนต์ของเมทริกซ์สามเหลี่ยมเท่ากับผลคูณของสมาชิกบนแนวทแยงหลัก $= 2 \\times 5 \\times 3 = 30$ จึงตอบ B`
      },
      {
        id: "q28",
        prompt: `ถ้า $\\det(A) = 3$ และ $\\det(B) = 4$ โดย $A, B$ เป็นเมทริกซ์จัตุรัสขนาดเดียวกัน แล้ว $\\det(AB)$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$\\dfrac{3}{4}$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$1$" }
        ],
        answer: "C",
        explanation: `$\\det(AB) = \\det(A) \\cdot \\det(B) = 3 \\times 4 = 12$ จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `ถ้า $A$ เป็นเมทริกซ์ขนาด $2 \\times 2$ ที่มี $\\det(A) = 5$ แล้ว $\\det(3A)$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$45$" },
          { key: "B", text: "$15$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$135$" }
        ],
        answer: "A",
        explanation: `$\\det(kA) = k^{n}\\det(A)$ เมื่อ $A$ ขนาด $n \\times n$; ที่นี่ $n = 2$ จึงได้ $3^{2} \\times 5 = 9 \\times 5 = 45$ จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `ถ้า $\\begin{vmatrix} 2 & 4 \\\\ 1 & k \\end{vmatrix} = 0$ แล้ว $k$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$-2$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$8$" }
        ],
        answer: "C",
        explanation: `$(2)(k) - (4)(1) = 0 \\Rightarrow 2k - 4 = 0 \\Rightarrow k = 2$ จึงตอบ C`
      }
    ]
  },


  "quiz9": {
    meta: {
      courseId: "m5-term1-math",
      quizKey: "quiz9",
      title: "Quiz 9 : การหาดีเทอร์มิแนนต์และเมทริกซ์ผกผัน (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- ตอนที่ 1 : การหาดีเทอร์มิแนนต์ (ข้อ 1-15) ---
      {
        id: "q1",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 4 & 3 \\\\ 2 & 5 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$17$" },
          { key: "C", text: "$14$" },
          { key: "D", text: "$20$" }
        ],
        answer: "C",
        explanation: `$\\det(A)=(4)(5)-(3)(2)=20-6=14$ จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 6 & -2 \\\\ 3 & 4 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$30$" },
          { key: "B", text: "$18$" },
          { key: "C", text: "$24$" },
          { key: "D", text: "$36$" }
        ],
        answer: "A",
        explanation: `$\\det(A)=(6)(4)-(-2)(3)=24-(-6)=24+6=30$ จึงตอบ A`
      },
      {
        id: "q3",
        prompt: `ถ้า $\\det\\begin{pmatrix}\\begin{bmatrix} x & 3 \\\\ 2 & x \\end{bmatrix}\\end{pmatrix}=10$ และ $x>0$ แล้ว $x$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$4$" }
        ],
        answer: "D",
        explanation: `$x^2-(3)(2)=10 \\Rightarrow x^2-6=10 \\Rightarrow x^2=16 \\Rightarrow x=4$ (เลือกค่าบวก) จึงตอบ D`
      },
      {
        id: "q4",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 2 \\\\ 1 & 0 & 4 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$9$" },
          { key: "D", text: "$11$" }
        ],
        answer: "B",
        explanation: `ขยายตามหลักที่ 2 (มีศูนย์ 2 ตัว): $\\det(A)=1\\times(-1)^{2+2}\\begin{vmatrix} 2 & 1 \\\\ 1 & 4 \\end{vmatrix}=1(8-1)=7$ จึงตอบ B`
      },
      {
        id: "q5",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 10 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$-1$" },
          { key: "C", text: "$-3$" },
          { key: "D", text: "$3$" }
        ],
        answer: "C",
        explanation: `$\\det(A)=1(50-48)-2(40-42)+3(32-35)=1(2)-2(-2)+3(-3)=2+4-9=-3$ จึงตอบ C`
      },
      {
        id: "q6",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 3 & 1 & 0 \\\\ 2 & 4 & 0 \\\\ 5 & 6 & 2 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$20$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$18$" },
          { key: "D", text: "$24$" }
        ],
        answer: "A",
        explanation: `ขยายตามหลักที่ 3 (มีศูนย์ 2 ตัว): $\\det(A)=2\\times(-1)^{3+3}\\begin{vmatrix} 3 & 1 \\\\ 2 & 4 \\end{vmatrix}=2(12-2)=20$ จึงตอบ A`
      },
      {
        id: "q7",
        prompt: `ถ้า $A$ เป็นเมทริกซ์ขนาด $3\\times3$ ที่มี $\\det(A)=5$ แล้ว $\\det(2A)$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$20$" },
          { key: "C", text: "$80$" },
          { key: "D", text: "$40$" }
        ],
        answer: "D",
        explanation: `$\\det(kA)=k^{n}\\det(A)$ เมื่อ $n=3$: $\\det(2A)=2^3\\times5=8\\times5=40$ จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `ถ้า $\\det(A)=6$ และ $\\det(B)=-2$ โดย $A,B$ เป็นเมทริกซ์จัตุรัสขนาดเดียวกัน แล้ว $\\det(AB)$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$-12$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$-8$" }
        ],
        answer: "B",
        explanation: `$\\det(AB)=\\det(A)\\cdot\\det(B)=6\\times(-2)=-12$ จึงตอบ B`
      },
      {
        id: "q9",
        prompt: `ถ้า $\\det(A)=4$ แล้ว $\\det(A^{-1})$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$\\dfrac{1}{4}$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$-4$" },
          { key: "D", text: "$\\dfrac{1}{16}$" }
        ],
        answer: "A",
        explanation: `$\\det(A^{-1})=\\dfrac{1}{\\det(A)}=\\dfrac{1}{4}$ จึงตอบ A`
      },
      {
        id: "q10",
        prompt: `ถ้าเมทริกซ์ $A=\\begin{bmatrix} k & 8 \\\\ 2 & k \\end{bmatrix}$ เป็นเมทริกซ์เอกฐาน (singular) และ $k>0$ แล้ว $k$ มีค่าเท่าใด`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$5$" }
        ],
        answer: "C",
        explanation: `เมทริกซ์เอกฐานมี $\\det(A)=0$: $k^2-(8)(2)=0 \\Rightarrow k^2=16 \\Rightarrow k=4$ (เลือกค่าบวก) จึงตอบ C`
      },
      {
        id: "q11",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 5 & 0 & 0 \\\\ 3 & 2 & 0 \\\\ 1 & 4 & 7 \\end{bmatrix}$ จงหา $\\det(A)$`,
        choices: [
          { key: "A", text: "$56$" },
          { key: "B", text: "$70$" },
          { key: "C", text: "$63$" },
          { key: "D", text: "$77$" }
        ],
        answer: "B",
        explanation: `$A$ เป็นเมทริกซ์สามเหลี่ยมล่าง ดีเทอร์มิแนนต์เท่ากับผลคูณสมาชิกแนวทแยงหลัก $=5\\times2\\times7=70$ จึงตอบ B`
      },
      {
        id: "q12",
        prompt: `ถ้าคูณสมาชิกในแถวหนึ่งของเมทริกซ์จัตุรัส $A$ ด้วย $5$ ทั้งแถว ดีเทอร์มิแนนต์ใหม่จะเป็นกี่เท่าของดีเทอร์มิแนนต์เดิม`,
        choices: [
          { key: "A", text: "$25$ เท่า" },
          { key: "B", text: "$15$ เท่า" },
          { key: "C", text: "ไม่เปลี่ยนแปลง" },
          { key: "D", text: "$5$ เท่า" }
        ],
        answer: "D",
        explanation: `การคูณสมาชิกในแถวหนึ่งด้วยค่าคงตัว $c$ ทั้งแถว ทำให้ดีเทอร์มิแนนต์ถูกคูณด้วย $c$ นั้นด้วย ดังนั้นดีเทอร์มิแนนต์ใหม่เป็น $5$ เท่าของเดิม จึงตอบ D`
      },
      {
        id: "q13",
        prompt: `จงหาค่า $x$ จากระบบสมการ $3x+2y=16$ และ $x-2y=-4$ โดยใช้กฎของคราเมอร์ (Cramer's rule)`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$5$" }
        ],
        answer: "C",
        explanation: `$D=\\begin{vmatrix} 3 & 2 \\\\ 1 & -2 \\end{vmatrix}=-6-2=-8$, $D_x=\\begin{vmatrix} 16 & 2 \\\\ -4 & -2 \\end{vmatrix}=-32+8=-24$ ดังนั้น $x=\\dfrac{D_x}{D}=\\dfrac{-24}{-8}=3$ จึงตอบ C`
      },
      {
        id: "q14",
        prompt: `จงหาค่า $y$ จากระบบสมการ $2x+3y=13$ และ $4x-y=5$ โดยใช้กฎของคราเมอร์ (Cramer's rule)`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$1$" },
          { key: "C", text: "$2$" },
          { key: "D", text: "$4$" }
        ],
        answer: "A",
        explanation: `$D=\\begin{vmatrix} 2 & 3 \\\\ 4 & -1 \\end{vmatrix}=-2-12=-14$, $D_y=\\begin{vmatrix} 2 & 13 \\\\ 4 & 5 \\end{vmatrix}=10-52=-42$ ดังนั้น $y=\\dfrac{D_y}{D}=\\dfrac{-42}{-14}=3$ จึงตอบ A`
      },
      {
        id: "q15",
        prompt: `จงหาพื้นที่ของรูปสามเหลี่ยมที่มีจุดยอด $(1,2)$, $(4,6)$ และ $(5,2)$ โดยใช้ดีเทอร์มิแนนต์`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$8$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$9$" }
        ],
        answer: "B",
        explanation: `พื้นที่ $=\\dfrac{1}{2}|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|=\\dfrac{1}{2}|1(6-2)+4(2-2)+5(2-6)|=\\dfrac{1}{2}|4+0-20|=\\dfrac{1}{2}(16)=8$ จึงตอบ B`
      },
      // --- ตอนที่ 2 : เมทริกซ์ผกผัน (ข้อ 16-30) ---
      {
        id: "q16",
        prompt: `เมทริกซ์ $A^{-1}$ เรียกว่าอินเวอร์สของเมทริกซ์ $A$ เมื่อสอดคล้องกับสมการใด`,
        choices: [
          { key: "A", text: "$AA^{-1}=0$" },
          { key: "B", text: "$A+A^{-1}=I$" },
          { key: "C", text: "$AA^{-1}=A$" },
          { key: "D", text: "$AA^{-1}=A^{-1}A=I$" }
        ],
        answer: "D",
        explanation: `นิยามของเมทริกซ์ผกผัน (inverse matrix) คือเมทริกซ์ $A^{-1}$ ที่คูณกับ $A$ แล้วได้เมทริกซ์เอกลักษณ์ ทั้งด้านซ้ายและด้านขวา: $AA^{-1}=A^{-1}A=I$ จึงตอบ D`
      },
      {
        id: "q17",
        prompt: `เมทริกซ์จัตุรัส $A$ จะมีอินเวอร์สได้ก็ต่อเมื่อข้อใดเป็นจริง`,
        choices: [
          { key: "A", text: "$\\det(A)=0$" },
          { key: "B", text: "$A$ เป็นเมทริกซ์เอกลักษณ์" },
          { key: "C", text: "$\\det(A)\\neq0$" },
          { key: "D", text: "$A$ เป็นเมทริกซ์สมมาตร" }
        ],
        answer: "C",
        explanation: `เมทริกซ์จัตุรัสจะมีอินเวอร์สได้ (nonsingular) ก็ต่อเมื่อ $\\det(A)\\neq0$ เท่านั้น จึงตอบ C`
      },
      {
        id: "q18",
        prompt: `ถ้า $A=\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ และ $\\det(A)\\neq0$ แล้ว $A^{-1}$ ตรงกับข้อใด`,
        choices: [
          { key: "A", text: "$\\dfrac{1}{\\det(A)}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$" },
          { key: "B", text: "$\\dfrac{1}{\\det(A)}\\begin{bmatrix} a & -b \\\\ -c & d \\end{bmatrix}$" },
          { key: "C", text: "$\\det(A)\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$" },
          { key: "D", text: "$\\dfrac{1}{\\det(A)}\\begin{bmatrix} d & b \\\\ c & a \\end{bmatrix}$" }
        ],
        answer: "A",
        explanation: `สูตรอินเวอร์สของเมทริกซ์ $2\\times2$ คือ สลับตำแหน่งสมาชิกแนวทแยงหลัก ($a \\leftrightarrow d$) และเปลี่ยนเครื่องหมายสมาชิกแนวทแยงรอง ($b, c \\to -b, -c$) แล้วหารด้วย $\\det(A)$ จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$ จงหา $A^{-1}$`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} -2 & 5 \\\\ 1 & -3 \\end{bmatrix}$" }
        ],
        answer: "B",
        explanation: `$\\det(A)=(3)(2)-(5)(1)=6-5=1$ ดังนั้น $A^{-1}=\\dfrac{1}{1}\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}=\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$ จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 5 & 3 \\\\ 3 & 2 \\end{bmatrix}$ จงหา $A^{-1}$`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 5 & -3 \\\\ -3 & 2 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} -2 & 3 \\\\ 3 & -5 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 2 & 3 \\\\ 3 & 5 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} 2 & -3 \\\\ -3 & 5 \\end{bmatrix}$" }
        ],
        answer: "D",
        explanation: `$\\det(A)=(5)(2)-(3)(3)=10-9=1$ ดังนั้น $A^{-1}=\\dfrac{1}{1}\\begin{bmatrix} 2 & -3 \\\\ -3 & 5 \\end{bmatrix}=\\begin{bmatrix} 2 & -3 \\\\ -3 & 5 \\end{bmatrix}$ จึงตอบ D`
      },
      {
        id: "q21",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 7 & 3 \\\\ 2 & 1 \\end{bmatrix}$ ข้อใดคือ $A^{-1}$`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 1 & 3 \\\\ 2 & 7 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} 7 & -3 \\\\ -2 & 1 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} 1 & -3 \\\\ -2 & 7 \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} -1 & 3 \\\\ 2 & -7 \\end{bmatrix}$" }
        ],
        answer: "C",
        explanation: `$\\det(A)=(7)(1)-(3)(2)=7-6=1$ ดังนั้น $A^{-1}=\\begin{bmatrix} 1 & -3 \\\\ -2 & 7 \\end{bmatrix}$ (ตรวจสอบ $AA^{-1}=I$ ได้) จึงตอบ C`
      },
      {
        id: "q22",
        prompt: `$(A^{-1})^{-1}$ เท่ากับข้อใด (กำหนดให้ $A$ มีอินเวอร์ส)`,
        choices: [
          { key: "A", text: "$I$" },
          { key: "B", text: "$A$" },
          { key: "C", text: "$A^{-1}$" },
          { key: "D", text: "$0$" }
        ],
        answer: "B",
        explanation: `อินเวอร์สของอินเวอร์ส คือเมทริกซ์เดิม: $(A^{-1})^{-1}=A$ จึงตอบ B`
      },
      {
        id: "q23",
        prompt: `ถ้า $A,B$ เป็นเมทริกซ์จัตุรัสที่มีอินเวอร์ส แล้ว $(AB)^{-1}$ เท่ากับข้อใด`,
        choices: [
          { key: "A", text: "$B^{-1}A^{-1}$" },
          { key: "B", text: "$A^{-1}B^{-1}$" },
          { key: "C", text: "$A^{-1}+B^{-1}$" },
          { key: "D", text: "$-A^{-1}B^{-1}$" }
        ],
        answer: "A",
        explanation: `กฎอินเวอร์สของผลคูณเมทริกซ์ต้องสลับลำดับการคูณ: $(AB)^{-1}=B^{-1}A^{-1}$ จึงตอบ A`
      },
      {
        id: "q24",
        prompt: `$(A^{T})^{-1}$ มีความสัมพันธ์ตรงกับข้อใด`,
        choices: [
          { key: "A", text: "$A^{T}$" },
          { key: "B", text: "$A$" },
          { key: "C", text: "$(A^{T})^{2}$" },
          { key: "D", text: "$(A^{-1})^{T}$" }
        ],
        answer: "D",
        explanation: `อินเวอร์สของทรานสโพส เท่ากับทรานสโพสของอินเวอร์ส: $(A^{T})^{-1}=(A^{-1})^{T}$ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `จากระบบสมการในรูปเมทริกซ์ $AX=B$ โดย $A=\\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$ และ $B=\\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}$ จงหา $X=A^{-1}B$ (ตอบในรูป $(x,y)$)`,
        choices: [
          { key: "A", text: "$(1,3)$" },
          { key: "B", text: "$(4,3)$" },
          { key: "C", text: "$(3,1)$" },
          { key: "D", text: "$(2,5)$" }
        ],
        answer: "C",
        explanation: `$\\det(A)=2-1=1$, $A^{-1}=\\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$, $X=A^{-1}B=\\begin{bmatrix} (1)(7)+(-1)(4) \\\\ (-1)(7)+(2)(4) \\end{bmatrix}=\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$ ดังนั้น $(x,y)=(3,1)$ จึงตอบ C`
      },
      {
        id: "q26",
        prompt: `กำหนดให้ $A^{-1}=\\begin{bmatrix} 3 & -1 \\\\ -2 & 1 \\end{bmatrix}$ และ $B=\\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$ จงหา $X$ จากสมการ $AX=B$ (ตอบในรูป $(x,y)$)`,
        choices: [
          { key: "A", text: "$(7,-12)$" },
          { key: "B", text: "$(12,-7)$" },
          { key: "C", text: "$(12,7)$" },
          { key: "D", text: "$(-7,12)$" }
        ],
        answer: "B",
        explanation: `$X=A^{-1}B=\\begin{bmatrix} (3)(5)+(-1)(3) \\\\ (-2)(5)+(1)(3) \\end{bmatrix}=\\begin{bmatrix} 15-3 \\\\ -10+3 \\end{bmatrix}=\\begin{bmatrix} 12 \\\\ -7 \\end{bmatrix}$ ดังนั้น $(x,y)=(12,-7)$ จึงตอบ B`
      },
      {
        id: "q27",
        prompt: `อินเวอร์สของเมทริกซ์เอกลักษณ์ $I$ คือข้อใด`,
        choices: [
          { key: "A", text: "$I$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$-I$" },
          { key: "D", text: "ไม่มีอินเวอร์ส" }
        ],
        answer: "A",
        explanation: `เมทริกซ์เอกลักษณ์เป็นอินเวอร์สของตัวเอง เพราะ $I \\cdot I=I$ ดังนั้น $I^{-1}=I$ จึงตอบ A`
      },
      {
        id: "q28",
        prompt: `กำหนดให้ $A=\\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$ จงหา $A^{-1}$`,
        choices: [
          { key: "A", text: "$\\begin{bmatrix} 5 & 0 \\\\ 0 & 2 \\end{bmatrix}$" },
          { key: "B", text: "$\\begin{bmatrix} -2 & 0 \\\\ 0 & -5 \\end{bmatrix}$" },
          { key: "C", text: "$\\begin{bmatrix} \\frac{1}{5} & 0 \\\\ 0 & \\frac{1}{2} \\end{bmatrix}$" },
          { key: "D", text: "$\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{5} \\end{bmatrix}$" }
        ],
        answer: "D",
        explanation: `อินเวอร์สของเมทริกซ์ทแยงมุม (diagonal matrix) คือการนำส่วนกลับของสมาชิกแต่ละตัวบนแนวทแยงหลักมาแทนที่: $A^{-1}=\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{5} \\end{bmatrix}$ จึงตอบ D`
      },
      {
        id: "q29",
        prompt: `การหาอินเวอร์สของเมทริกซ์ขนาด $3\\times3$ โดยวิธีเมทริกซ์ผูกพัน (adjoint) ใช้สูตรตรงกับข้อใด`,
        choices: [
          { key: "A", text: "$A^{-1}=\\det(A)\\cdot\\text{adj}(A)$" },
          { key: "B", text: "$A^{-1}=\\text{adj}(A)-\\det(A)$" },
          { key: "C", text: "$A^{-1}=\\dfrac{1}{\\det(A)}\\cdot\\text{adj}(A)$" },
          { key: "D", text: "$A^{-1}=\\text{adj}(A)$" }
        ],
        answer: "C",
        explanation: `สูตรอินเวอร์สโดยวิธีเมทริกซ์ผูกพันคือ $A^{-1}=\\dfrac{1}{\\det(A)}\\cdot\\text{adj}(A)$ โดย $\\text{adj}(A)$ คือทรานสโพสของเมทริกซ์โคแฟกเตอร์ จึงตอบ C`
      },
      {
        id: "q30",
        prompt: `จงแก้ระบบสมการ $3x+y=11$ และ $2x+y=8$ ด้วยวิธีเมทริกซ์ผกผัน แล้วหาค่า $x+y$`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$6$" }
        ],
        answer: "B",
        explanation: `เขียนในรูป $AX=B$ โดย $A=\\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}$, $B=\\begin{bmatrix} 11 \\\\ 8 \\end{bmatrix}$: $\\det(A)=3-2=1$, $A^{-1}=\\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix}$, $X=A^{-1}B=\\begin{bmatrix} 11-8 \\\\ -22+24 \\end{bmatrix}=\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$ ดังนั้น $x=3,y=2$ และ $x+y=5$ จึงตอบ B`
      }
    ]
  }
};
