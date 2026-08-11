window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
  meta: {
    courseId: "m4-term1-math",
    quizKey: "quiz1",
    title: "Quiz 1 : เซต การเขียนเซต และสับเซต (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- ข้อ 1-5: การเขียนเซตแบบแจกแจงสมาชิกและแบบเงื่อนไข ---
    {
      id: "q1",
prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{I} \\mid -3 < x \\le 2 \\}$ ข้อใดเขียนเซต $A$ แบบแจกแจงสมาชิกได้ถูกต้อง

* $\\mathbb{I}$ (Integer): คือเซตของจำนวนเต็มทั้งหมด ครอบคลุมทั้งจำนวนเต็มบวก จำนวนเต็มลบ และศูนย์
* $\\mathbb{Z}$ (Zahlen): มีความหมายเหมือนกับ $\\mathbb{I}$ คือเซตของจำนวนเต็ม แต่เป็นสัญลักษณ์ที่นิยมใช้ในระดับสากล
* $\\mathbb{R}$ (Real Number): คือเซตของจำนวนจริงที่ครอบคลุมตัวเลขทุกชนิดที่สามารถหาตำแหน่งบนเส้นจำนวนได้`,
      choices: [
        { key: "A", text: "$\\{-3, -2, -1, 0, 1, 2\\}$" },
        { key: "B", text: "$\\{-2, -1, 0, 1, 2\\}$" },
        { key: "C", text: "$\\{-3, -2, -1, 0, 1\\}$" },
        { key: "D", text: "$\\{-2, -1, 1, 2\\}$" }
      ],
      answer: "B",
      explanation: `จำนวนเต็มที่ $-3 < x \\le 2$ คือ $-2,-1,0,1,2$ (ไม่รวม $-3$ แต่รวม $2$) จึงตอบ B`
    },
    {
      id: "q2",
      prompt: `กำหนดให้ $B = \\{ x \\in \\mathbb{Z}^+ \\mid x^2 < 15 \\}$ ข้อใดคือเซต $B$ แบบแจกแจงสมาชิก`,
      choices: [
        { key: "A", text: "$\\{0, 1, 2, 3\\}$" },
        { key: "B", text: "$\\{1, 2, 3, 4\\}$" },
        { key: "C", text: "$\\{1, 2, 3\\}$" },
        { key: "D", text: "$\\{-3, -2, -1, 0, 1, 2, 3\\}$" }
      ],
      answer: "C",
      explanation: `จำนวนเต็มบวกที่ $x^2<15$: $1,2,3$ (เพราะ $4^2=16>15$) จึงตอบ C`
    },
    {
      id: "q3",
      prompt: `กำหนดให้ $C = \\{ x \\in \\mathbb{I}^- \\mid 2x + 7 > 0 \\}$ ผลบวกของสมาชิกทั้งหมดในเซต $C$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "-6" },
        { key: "B", text: "-3" },
        { key: "C", text: "-10" },
        { key: "D", text: "0" }
      ],
      answer: "A",
      explanation: `จำนวนเต็มลบที่ $2x+7>0$ คือ $x>-3.5$ ได้ $-3,-2,-1$ ผลบวก $=-6$ จึงตอบ A`
    },
    {
      id: "q4",
      prompt: `กำหนดให้ $S = \\{ 1, 4, 9, 16, 25, \\dots \\}$ ข้อใดคือการเขียนเซต $S$ แบบบอกเงื่อนไขที่ถูกต้องที่สุด`,
      choices: [
        { key: "A", text: "$\\{ x \\in \\mathbb{I} \\mid x = n^2 \\text{ เมื่อ } n \\in \\mathbb{I} \\}$" },
        { key: "B", text: "$\\{ x^2 \\mid x \\in \\mathbb{N} \\}$" },
        { key: "C", text: "$\\{ x \\mid x = n^2 \\text{ และ } n \\in \\mathbb{N} \\}$" },
        { key: "D", text: "$\\{ x \\in \\mathbb{R} \\mid x > 0 \\}$" }
      ],
      answer: "C",
      explanation: `$S$ คือกำลังสองของจำนวนนับ เขียนแบบเงื่อนไขคือ $\\{x \\mid x=n^2, n\\in\\mathbb{N}\\}$ จึงตอบ C`
    },
    {
      id: "q5",
      prompt: `เซตในข้อใดมีจำนวนสมาชิกมากที่สุด`,
      choices: [
        { key: "A", text: "$\\{ x \\in \\mathbb{I} \\mid -4 < x < -1 \\}$" },
        { key: "B", text: "$\\{ x \\in \\mathbb{Z} \\mid x^2 = 25 \\}$" },
        { key: "C", text: "$\\{ x \\in \\mathbb{N} \\mid x < 4 \\}$" },
        { key: "D", text: "$\\{ x \\in \\mathbb{I} \\mid |x| \\le 2 \\}$" }
      ],
      answer: "D",
      explanation: `นับสมาชิก: A มี 2, B ($x^2=25$) มี 2, C ($\\mathbb{N},x<4$) มี 3, D ($|x|\\le2$) มี 5 มากสุด จึงตอบ D`
    },
    // --- ข้อ 6-10: เซตว่าง และความสัมพันธ์ของการเป็นสมาชิก ---
    {
      id: "q6",
      prompt: `ข้อใดต่อไปนี้เป็นเซตว่าง`,
      choices: [
        { key: "A", text: "$\\{ x \\in \\mathbb{R} \\mid x^2 - 1 = 0 \\}$" },
        { key: "B", text: "$\\{ x \\in \\mathbb{I} \\mid \\frac{2x}{3} = 1 \\}$" },
        { key: "C", text: "$\\{ x \\in \\mathbb{N} \\mid x + 1 > 1 \\}$" },
        { key: "D", text: "$\\{ \\emptyset \\}$" }
      ],
      answer: "B",
      explanation: `B: จำนวนเต็มที่ $\\frac{2x}{3}=1$ คือ $x=1.5$ ไม่เป็นจำนวนเต็ม จึงเป็นเซตว่าง ตอบ B`
    },
    {
      id: "q7",
      prompt: `กำหนดให้ $A = \\{ \\emptyset, 0, 1, \\{0, 1\\} \\}$ ข้อใดกล่าว <b>ผิด</b>`,
      choices: [
        { key: "A", text: "$\\emptyset \\in A$" },
        { key: "B", text: "$\\{0\\} \\in A$" },
        { key: "C", text: "$\\{0, 1\\} \\in A$" },
        { key: "D", text: "$\\{0, 1\\} \\subset A$" }
      ],
      answer: "B",
      explanation: `สมาชิกของ $A$ คือ $\\emptyset,0,1,\\{0,1\\}$ แต่ $\\{0\\}$ ไม่ได้เป็นสมาชิก ข้อ B จึงผิด ตอบ B`
    },
    {
      id: "q8",
      prompt: `กำหนดให้ $B = \\{ \\emptyset, \\{\\emptyset\\}, \\{\\emptyset, \\{\\emptyset\\}\\} \\}$ ข้อใดต่อไปนี้ <b>เป็นจริง</b>`,
      choices: [
        { key: "A", text: "$\\emptyset \\notin B$" },
        { key: "B", text: "$\\{\\{\\emptyset\\}\\} \\subset B$" },
        { key: "C", text: "$B$ มีสมาชิก 4 ตัว" },
        { key: "D", text: "$\\{\\emptyset, \\{\\emptyset\\}\\} \\notin B$" }
      ],
      answer: "B",
      explanation: `$\\{\\emptyset\\}$ เป็นสมาชิกของ $B$ ดังนั้น $\\{\\{\\emptyset\\}\\}\\subset B$ เป็นจริง จึงตอบ B`
    },
    {
      id: "q9",
      prompt: `ข้อใดกล่าวถูกต้องเกี่ยวกับเซตว่าง ($\\emptyset$)`,
      choices: [
        { key: "A", text: "เซตว่างไม่มีสับเซต" },
        { key: "B", text: "เซตว่างเป็นสับเซตแท้ของทุกเซต" },
        { key: "C", text: "สับเซตทั้งหมดของ $\\{ \\emptyset \\}$ มี 2 เซต คือ $\\emptyset$ และ $\\{ \\emptyset \\}$" },
        { key: "D", text: "$\\emptyset \\in \\emptyset$" }
      ],
      answer: "C",
      explanation: `สับเซตของ $\\{\\emptyset\\}$ มี 2 เซต คือ $\\emptyset$ และ $\\{\\emptyset\\}$ จึงตอบ C`
    },
    {
      id: "q10",
      prompt: `กำหนดให้ $M = \\{ x \\in \\mathbb{I} \\mid x^2 < 0 \\}$ จำนวนสับเซตทั้งหมดของ $M$ เท่ากับเท่าใด`,
      choices: [
        { key: "A", text: "0" },
        { key: "B", text: "1" },
        { key: "C", text: "2" },
        { key: "D", text: "หาค่าไม่ได้" }
      ],
      answer: "B",
      explanation: `$x^2<0$ ไม่มีจำนวนเต็มใดจริง $M$ เป็นเซตว่าง สับเซตมี $2^0=1$ เซต จึงตอบ B`
    },
    // --- ข้อ 11-15: การหาสับเซตและสับเซตแท้พื้นฐาน ---
    {
      id: "q11",
      prompt: `เซต $A$ มีสมาชิก 5 ตัว จำนวนสับเซตทั้งหมดของ $A$ เท่ากับเท่าใด`,
      choices: [
        { key: "A", text: "16" },
        { key: "B", text: "31" },
        { key: "C", text: "32" },
        { key: "D", text: "64" }
      ],
      answer: "C",
      explanation: `สมาชิก 5 ตัว สับเซตทั้งหมด $=2^5=32$ จึงตอบ C`
    },
    {
      id: "q12",
      prompt: `เซต $B = \\{ x \\in \\mathbb{I} \\mid -2 \\le x < 3 \\}$ มีสับเซตแท้ทั้งหมดกี่เซต`,
      choices: [
        { key: "A", text: "15" },
        { key: "B", text: "31" },
        { key: "C", text: "32" },
        { key: "D", text: "63" }
      ],
      answer: "B",
      explanation: `$B=\\{-2,-1,0,1,2\\}$ มี 5 ตัว สับเซตแท้ $=2^5-1=31$ จึงตอบ B`
    },
    {
      id: "q13",
      prompt: `ถ้าเซต $C$ มีสับเซตแท้ทั้งหมด 127 เซต แล้วเซต $C$ มีจำนวนสมาชิกกี่ตัว`,
      choices: [
        { key: "A", text: "6" },
        { key: "B", text: "7" },
        { key: "C", text: "8" },
        { key: "D", text: "128" }
      ],
      answer: "B",
      explanation: `$2^n-1=127 \\Rightarrow 2^n=128 \\Rightarrow n=7$ จึงตอบ B`
    },
    {
      id: "q14",
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{I} \\mid (x^2 - 1)(x^2 - 4) = 0 \\}$ จำนวนสับเซตแท้ของ $A$ คือข้อใด`,
      choices: [
        { key: "A", text: "7" },
        { key: "B", text: "15" },
        { key: "C", text: "16" },
        { key: "D", text: "31" }
      ],
      answer: "B",
      explanation: `$(x^2-1)(x^2-4)=0$ ได้ $x=\\pm1,\\pm2$ มี 4 ตัว สับเซตแท้ $=2^4-1=15$ จึงตอบ B`
    },
    {
      id: "q15",
      prompt: `ให้ $A$ เป็นเซตของตัวอักษรในคำว่า "THAILAND" จำนวนสับเซตแท้ของ $A$ คือข้อใด`,
      choices: [
        { key: "A", text: "63" },
        { key: "B", text: "127" },
        { key: "C", text: "128" },
        { key: "D", text: "255" }
      ],
      answer: "B",
      explanation: `ตัวอักษรต่างกันใน THAILAND คือ T,H,A,I,L,N,D มี 7 ตัว สับเซตแท้ $=2^7-1=127$ จึงตอบ B`
    },
    // --- ข้อ 16-20: สับเซตแบบมีเงื่อนไข (รวม/ไม่รวมสมาชิก) ---
    {
      id: "q16",
      prompt: `กำหนดให้ $A = \\{ 1, 2, 3, 4, 5, 6 \\}$ จำนวนสับเซต $X$ ของ $A$ ซึ่ง $1 \\in X$ มีทั้งหมดกี่เซต`,
      choices: [
        { key: "A", text: "16" },
        { key: "B", text: "31" },
        { key: "C", text: "32" },
        { key: "D", text: "64" }
      ],
      answer: "C",
      explanation: `บังคับให้มี 1 เลือกที่เหลือจาก 5 ตัว $=2^5=32$ จึงตอบ C`
    },
    {
      id: "q17",
      prompt: `กำหนดให้ $S = \\{ a, b, c, d, e \\}$ จำนวนสับเซตของ $S$ ที่ไม่มี $a$ และ $b$ เป็นสมาชิก มีทั้งหมดกี่เซต`,
      choices: [
        { key: "A", text: "8" },
        { key: "B", text: "16" },
        { key: "C", text: "24" },
        { key: "D", text: "32" }
      ],
      answer: "A",
      explanation: `ไม่เอา $a,b$ เลือกจาก $\\{c,d,e\\}$ $=2^3=8$ จึงตอบ A`
    },
    {
      id: "q18",
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{I}^+ \\mid 2x - 1 < 10 \\}$ จำนวนสับเซต $X \\subset A$ ซึ่ง $1 \\in X$ และ $5 \\notin X$ คือเท่าใด`,
      choices: [
        { key: "A", text: "4" },
        { key: "B", text: "8" },
        { key: "C", text: "16" },
        { key: "D", text: "32" }
      ],
      answer: "B",
      explanation: `$A=\\{1,2,3,4,5\\}$ บังคับมี 1 ไม่เอา 5 เลือกจาก $\\{2,3,4\\}$ $=2^3=8$ จึงตอบ B`
    },
    {
      id: "q19",
      prompt: `กำหนดให้ $A = \\{ 1, 2 \\}$ และ $B = \\{ 1, 2, 3, 4, 5 \\}$ มีเซต $C$ กี่เซตที่สอดคล้องกับเงื่อนไข $A \\subset C \\subset B$`,
      choices: [
        { key: "A", text: "4" },
        { key: "B", text: "7" },
        { key: "C", text: "8" },
        { key: "D", text: "16" }
      ],
      answer: "C",
      explanation: `$C$ ต้องมี $1,2$ ที่เหลือเลือกจาก $\\{3,4,5\\}$ $=2^3=8$ จึงตอบ C`
    },
    {
      id: "q20",
      prompt: `จากข้อ 19 หากเปลี่ยนเงื่อนไขเป็น $A \\subset C$ และ $C$ เป็นสับเซตแท้ของ $B$ จะมีเซต $C$ ได้ทั้งหมดกี่เซต`,
      choices: [
        { key: "A", text: "6" },
        { key: "B", text: "7" },
        { key: "C", text: "8" },
        { key: "D", text: "15" }
      ],
      answer: "B",
      explanation: `จาก 8 เซต ตัดกรณี $C=B$ ออก 1 เซต เหลือ $8-1=7$ จึงตอบ B`
    },
    // --- ข้อ 21-25: การวิเคราะห์เชิงซ้อนและทฤษฎีเซต ---
    {
      id: "q21",
      prompt: `ถ้าเพิ่มสมาชิกในเซต $A$ อีก 2 ตัว จะทำให้จำนวนสับเซตทั้งหมดเพิ่มขึ้น 192 เซต เดิมเซต $A$ มีสมาชิกกี่ตัว`,
      choices: [
        { key: "A", text: "5" },
        { key: "B", text: "6" },
        { key: "C", text: "7" },
        { key: "D", text: "8" }
      ],
      answer: "B",
      explanation: `$2^{n+2}-2^n=192 \\Rightarrow 2^n(3)=192 \\Rightarrow 2^n=64 \\Rightarrow n=6$ จึงตอบ B`
    },
    {
      id: "q22",
      prompt: `กำหนดให้เซต $S$ มีสับเซตที่มีสมาชิก 2 ตัว ทั้งหมด 10 เซต แล้วเซต $S$ มีสมาชิกทั้งหมดกี่ตัว`,
      choices: [
        { key: "A", text: "4" },
        { key: "B", text: "5" },
        { key: "C", text: "6" },
        { key: "D", text: "10" }
      ],
      answer: "B",
      explanation: `สับเซต 2 ตัว $=\\binom{n}{2}=10 \\Rightarrow n(n-1)=20 \\Rightarrow n=5$ จึงตอบ B`
    },
    {
      id: "q23",
      prompt: `กำหนดให้ $X = \\{ x \\in \\mathbb{I} \\mid x^2 < 20 \\}$ และ $Y = \\{ x \\in X \\mid x > 0 \\}$ จำนวนสับเซตของ $Y$ เท่ากับเท่าใด`,
      choices: [
        { key: "A", text: "8" },
        { key: "B", text: "15" },
        { key: "C", text: "16" },
        { key: "D", text: "32" }
      ],
      answer: "C",
      explanation: `$X$: $x^2<20$ ได้ $-4..4$; $Y$ ส่วนที่ $>0$ คือ $1,2,3,4$ มี 4 ตัว สับเซต $=2^4=16$ จึงตอบ C`
    },
    {
      id: "q24",
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{I} \\mid x^3 - 4x = 0 \\}$ และ $B = \\{ x \\in \\mathbb{N} \\mid x \\le 5 \\}$ จำนวนสับเซต $C$ ที่ $A \\subset C \\subset (A \\cup B)$ คือเท่าใด`,
      choices: [
        { key: "A", text: "8" },
        { key: "B", text: "16" },
        { key: "C", text: "32" },
        { key: "D", text: "64" }
      ],
      answer: "B",
      explanation: `$A=\\{-2,0,2\\},\\ A\\cup B=\\{-2,0,1,2,3,4,5\\}$ ส่วนที่เลือกได้ $=(A\\cup B)-A$ มี 4 ตัว $=2^4=16$ จึงตอบ B`
    },
    {
      id: "q25",
      prompt: `กำหนดให้ $X = \\{ 1, 2, \\{3, 4\\}, 5 \\}$ ข้อใดต่อไปนี้กล่าว <b>ผิด</b>`,
      choices: [
        { key: "A", text: "$\\{3, 4\\} \\in X$" },
        { key: "B", text: "$\\{1, 5\\} \\subset X$" },
        { key: "C", text: "$\\{3, 4\\} \\subset X$" },
        { key: "D", text: "$\\{\\{3, 4\\}\\} \\subset X$" }
      ],
      answer: "C",
      explanation: `$\\{3,4\\}$ เป็นสมาชิกหนึ่งตัวของ $X$ แต่ $3,4$ ไม่ได้เป็นสมาชิกเดี่ยว ดังนั้น $\\{3,4\\}\\subset X$ ผิด จึงตอบ C`
    },
    // --- ข้อ 26-30: โจทย์ประยุกต์และสมบัติของสับเซต ---
    {
      id: "q26",
      prompt: `พิจารณาข้อความ: (1) ถ้า $A \\subset B$ และ $B \\subset C$ แล้ว $A \\subset C$ (2) $\\emptyset \\subset \\{ \\emptyset \\}$ ข้อใดสรุปถูกต้อง`,
      choices: [
        { key: "A", text: "(1) ถูก, (2) ถูก" },
        { key: "B", text: "(1) ถูก, (2) ผิด" },
        { key: "C", text: "(1) ผิด, (2) ถูก" },
        { key: "D", text: "(1) ผิด, (2) ผิด" }
      ],
      answer: "A",
      explanation: `(1) สมบัติถ่ายทอดของสับเซตถูก (2) $\\emptyset$ เป็นสับเซตของทุกเซตถูก จึงตอบ A`
    },
    {
      id: "q27",
      prompt: `กำหนดให้ $A = \\{ \\emptyset \\}$ เซตของสับเซตทั้งหมดของ $A$ คือเซตในข้อใด`,
      choices: [
        { key: "A", text: "$\\{ \\emptyset \\}$" },
        { key: "B", text: "$\\{ \\emptyset, \\{\\emptyset\\} \\}$" },
        { key: "C", text: "$\\{ \\{\\emptyset\\} \\}$" },
        { key: "D", text: "$\\emptyset$" }
      ],
      answer: "B",
      explanation: `$A=\\{\\emptyset\\}$ สับเซตคือ $\\emptyset$ และ $\\{\\emptyset\\}$ รวมเป็น $\\{\\emptyset,\\{\\emptyset\\}\\}$ จึงตอบ B`
    },
    {
      id: "q28",
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{R} \\mid |x - 2| \\le 0 \\}$ จำนวนสับเซตของ $A$ เท่ากับเท่าใด`,
      choices: [
        { key: "A", text: "1" },
        { key: "B", text: "2" },
        { key: "C", text: "4" },
        { key: "D", text: "หาไม่ได้เนื่องจากเป็นเซตอนันต์" }
      ],
      answer: "B",
      explanation: `$|x-2|\\le0$ ได้ $x=2$ ตัวเดียว สับเซต $=2^1=2$ จึงตอบ B`
    },
    {
      id: "q29",
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{N} \\mid x \\text{ หาร } 24 \\text{ ลงตัว } \\}$ เซต $A$ มีจำนวนสับเซตกี่เซต`,
      choices: [
        { key: "A", text: "64" },
        { key: "B", text: "128" },
        { key: "C", text: "256" },
        { key: "D", text: "512" }
      ],
      answer: "C",
      explanation: `จำนวนนับที่หาร 24 ลงตัว: $1,2,3,4,6,8,12,24$ มี 8 ตัว สับเซต $=2^8=256$ จึงตอบ C`
    },
    {
      id: "q30",
      prompt: `กำหนดให้ $A = \\{1, 2, 3\\}$ ข้อความใดต่อไปนี้เป็น <b>จริง</b>`,
      choices: [
        { key: "A", text: "ถ้า $X \\subset A$ และ $Y \\subset A$ แล้ว $X \\cap Y \\neq \\emptyset$ เสมอ" },
        { key: "B", text: "สับเซตแท้ของ $A$ ที่มีสมาชิก 2 ตัว มีทั้งหมด 3 เซต" },
        { key: "C", text: "จำนวนสับเซตของ $A$ ที่มีสมาชิก 1 ตัว เท่ากับจำนวนสับเซตแท้ทั้งหมดของ $A$" },
        { key: "D", text: "$\\emptyset \\in A$" }
      ],
      answer: "B",
      explanation: `สับเซตแท้ 2 ตัวของ $\\{1,2,3\\}$ คือ $\\{1,2\\},\\{1,3\\},\\{2,3\\}$ รวม 3 เซต จึงตอบ B`
    }
  ]
},
    "quiz2": {
  meta: {
    courseId: "m4-term1-math",
    quizKey: "quiz2",
    title: "Quiz 2 : การดำเนินการทางเซต (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `กำหนดให้ $A = \\{1, 2, 3\\}$ และ $B = \\{3, 4, 5\\}$ จงหาค่าของ $A \\cup B$`,
      choices: [
        { key: "A", text: "$\\{3\\}$" },
        { key: "B", text: "$\\{1, 2, 3, 4, 5\\}$" },
        { key: "C", text: "$\\{1, 2, 4, 5\\}$" },
        { key: "D", text: "$\\{1, 2, 3, 3, 4, 5\\}$" }
      ],
      answer: "B",
      explanation: `$A\\cup B$ รวมสมาชิกทั้งหมดไม่ซ้ำ $=\\{1,2,3,4,5\\}$ จึงตอบ B`
    },
    {
      id: "q2",
      prompt: `ถ้า $A \\cap B = \\emptyset$ ข้อใดต่อไปนี้กล่าวถูกต้องเกี่ยวกับเซต $A$ และ $B$`,
      choices: [
        { key: "A", text: "$A$ และ $B$ เป็นเซตที่เท่ากัน" },
        { key: "B", text: "$A$ เป็นสับเซตของ $B$" },
        { key: "C", text: "$A$ และ $B$ ไม่มีสมาชิกตัวใดร่วมกันเลย" },
        { key: "D", text: "$A$ และ $B$ ต้องเป็นเซตว่างทั้งคู่" }
      ],
      answer: "C",
      explanation: `$A\\cap B=\\emptyset$ หมายถึงไม่มีสมาชิกร่วมกันเลย จึงตอบ C`
    },
    {
      id: "q3",
      prompt: `กำหนด $U = \\{1, 2, 3, 4, 5\\}$ และ $A = \\{2, 4\\}$ จงหาค่าของ $A'$ (A-complement)`,
      choices: [
        { key: "A", text: "$\\{1, 3, 5\\}$" },
        { key: "B", text: "$\\{2, 4\\}$" },
        { key: "C", text: "$\\{1, 2, 3, 4, 5\\}$" },
        { key: "D", text: "$\\{\\emptyset\\}$" }
      ],
      answer: "A",
      explanation: `$A'$ คือสมาชิกใน $U$ ที่ไม่อยู่ใน $A$ $=\\{1,3,5\\}$ จึงตอบ A`
    },
    {
      id: "q4",
      prompt: `กำหนด $A = \\{a, b, c, d\\}$ และ $B = \\{b, d, e\\}$ จงหาผลต่างของเซต $A - B$`,
      choices: [
        { key: "A", text: "$\\{e\\}$" },
        { key: "B", text: "$\\{b, d\\}$" },
        { key: "C", text: "$\\{a, c\\}$" },
        { key: "D", text: "$\\{a, b, c, d, e\\}$" }
      ],
      answer: "C",
      explanation: `$A-B$ คือสมาชิกใน $A$ ที่ไม่อยู่ใน $B$ $=\\{a,c\\}$ จึงตอบ C`
    },
    {
      id: "q5",
      prompt: `ข้อใดคือสมบัติที่ถูกต้องของ $(A \\cup B)'$ ตามกฎของเดอมอร์แกน (De Morgan's Laws)`,
      choices: [
        { key: "A", text: "$A' \\cup B'$" },
        { key: "B", text: "$A' \\cap B'$" },
        { key: "C", text: "$(A \\cap B)'$" },
        { key: "D", text: "$A \\cup B'$" }
      ],
      answer: "B",
      explanation: `เดอมอร์แกน: $(A\\cup B)'=A'\\cap B'$ จึงตอบ B`
    },
    {
      id: "q6",
      prompt: `กำหนด $A \\subset B$ ข้อใดต่อไปนี้มีค่าเท่ากับ $A \\cup B$`,
      choices: [
        { key: "A", text: "$A$" },
        { key: "B", text: "$B$" },
        { key: "C", text: "$\\emptyset$" },
        { key: "D", text: "$U$ (เอกภพสัมพัทธ์)" }
      ],
      answer: "B",
      explanation: `$A\\subset B$ ทำให้ $A\\cup B=B$ จึงตอบ B`
    },
    {
      id: "q7",
      prompt: `ถ้า $n(A) = 10, n(B) = 15$ และ $n(A \\cup B) = 20$ จงหาค่าของ $n(A \\cap B)$`,
      choices: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$10$" },
        { key: "C", text: "$25$" },
        { key: "D", text: "$0$" }
      ],
      answer: "A",
      explanation: `$n(A\\cap B)=n(A)+n(B)-n(A\\cup B)=10+15-20=5$ จึงตอบ A`
    },
    {
      id: "q8",
      prompt: `ข้อใดต่อไปนี้มีความหมายตรงกับ $A - B$`,
      choices: [
        { key: "A", text: "$A \\cap B'$" },
        { key: "B", text: "$A' \\cap B$" },
        { key: "C", text: "$A \\cup B'$" },
        { key: "D", text: "$A' \\cup B$" }
      ],
      answer: "A",
      explanation: `$A-B=A\\cap B'$ จึงตอบ A`
    },
    {
      id: "q9",
      prompt: `กำหนด $U$ คือเซตของจำนวนเต็มบวกที่น้อยกว่า 10, $A = \\{1, 3, 5, 7, 9\\}$ และ $B = \\{2, 3, 5, 7\\}$ จงหา $(A \\cap B)'$`,
      choices: [
        { key: "A", text: "$\\{3, 5, 7\\}$" },
        { key: "B", text: "$\\{1, 2, 4, 6, 8, 9\\}$" },
        { key: "C", text: "$\\{1, 9\\}$" },
        { key: "D", text: "$\\{2, 4, 6, 8\\}$" }
      ],
      answer: "B",
      explanation: `$A\\cap B=\\{3,5,7\\}$ ส่วนเติมเต็มใน $U=\\{1,2,4,6,8,9\\}$ จึงตอบ B`
    },
    {
      id: "q10",
      prompt: `ผลลัพธ์ของ $A \\cup A'$ มีค่าเท่ากับข้อใดเสมอ`,
      choices: [
        { key: "A", text: "$A$" },
        { key: "B", text: "$\\{0\\}$" },
        { key: "C", text: "$\\emptyset$" },
        { key: "D", text: "$U$" }
      ],
      answer: "D",
      explanation: `$A\\cup A'=U$ เสมอ จึงตอบ D`
    },
    {
      id: "q11",
      prompt: `กำหนด $n(U) = 50, n(A) = 20, n(B) = 25$ และ $n(A \\cap B) = 10$ จงหา $n(A \\cup B)'$`,
      choices: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$15$" },
        { key: "C", text: "$35$" },
        { key: "D", text: "$40$" }
      ],
      answer: "B",
      explanation: `$n(A\\cup B)=20+25-10=35$ ดังนั้น $n((A\\cup B)')=50-35=15$ จึงตอบ B`
    },
    {
      id: "q12",
      prompt: `ถ้า $A = \\{x | x$ เป็นจำนวนคู่บวกที่น้อยกว่า $10\\}$ และ $B = \\{x | x$ เป็นจำนวนเฉพาะที่น้อยกว่า $10\\}$ จงหา $A \\cap B$`,
      choices: [
        { key: "A", text: "$\\{2\\}$" },
        { key: "B", text: "$\\{2, 4, 6, 8\\}$" },
        { key: "C", text: "$\\{2, 3, 5, 7\\}$" },
        { key: "D", text: "$\\emptyset$" }
      ],
      answer: "A",
      explanation: `จำนวนคู่บวก $<10=\\{2,4,6,8\\}$ จำนวนเฉพาะ $<10=\\{2,3,5,7\\}$ ร่วมกันคือ $\\{2\\}$ จึงตอบ A`
    },
    {
      id: "q13",
      prompt: `ข้อใดต่อไปนี้มีค่าเท่ากับ $(A-B) \\cup (B-A)$`,
      choices: [
        { key: "A", text: "$A \\cup B$" },
        { key: "B", text: "$A \\cap B$" },
        { key: "C", text: "$(A \\cup B) - (A \\cap B)$" },
        { key: "D", text: "$\\emptyset$" }
      ],
      answer: "C",
      explanation: `$(A-B)\\cup(B-A)$ คือผลต่างสมมาตร $=(A\\cup B)-(A\\cap B)$ จึงตอบ C`
    },
    {
      id: "q14",
      prompt: `กำหนด $A = \\{1, 2\\}$ จงหาค่าของ $P(A) - A$ (เมื่อ $P(A)$ คือเพาเวอร์เซตของ $A$)`,
      choices: [
        { key: "A", text: "$\\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$" },
        { key: "B", text: "$\\{\\emptyset, \\{1\\}, \\{2\\}\\}$" },
        { key: "C", text: "$\\{\\{1\\}, \\{2\\}\\}$" },
        { key: "D", text: "$\\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}, 1, 2\\}$" }
      ],
      answer: "A",
      explanation: `$P(A)=\\{\\emptyset,\\{1\\},\\{2\\},\\{1,2\\}\\}$ ไม่มีสมาชิก $1,2$ เดี่ยว ดังนั้น $P(A)-A=P(A)$ จึงตอบ A`
    },
    {
      id: "q15",
      prompt: `ให้ $A \\cap B = B$ ข้อใดต่อไปนี้เป็นจริงเสมอ`,
      choices: [
        { key: "A", text: "$A \\subset B$" },
        { key: "B", text: "$B \\subset A$" },
        { key: "C", text: "$A = B$" },
        { key: "D", text: "$A \\cap B = \\emptyset$" }
      ],
      answer: "B",
      explanation: `$A\\cap B=B$ แสดงว่า $B\\subset A$ จึงตอบ B`
    },
    {
      id: "q16",
      prompt: `กำหนดให้ $A - B = \\{1, 2\\}, B - A = \\{4, 5\\}$ และ $A \\cup B = \\{1, 2, 3, 4, 5\\}$ จงหาเซต $A \\cap B$`,
      choices: [
        { key: "A", text: "$\\{3\\}$" },
        { key: "B", text: "$\\{1, 2, 4, 5\\}$" },
        { key: "C", text: "$\\{1, 2, 3, 4, 5\\}$" },
        { key: "D", text: "$\\emptyset$" }
      ],
      answer: "A",
      explanation: `$A\\cup B=\\{1,2,3,4,5\\}$ ตัด $A-B$ และ $B-A$ ออก เหลือ $A\\cap B=\\{3\\}$ จึงตอบ A`
    },
    {
      id: "q17",
      prompt: `เซตใดต่อไปนี้มีจำนวนสมาชิกมากที่สุด เมื่อกำหนด $n(A)=5, n(B)=5$`,
      choices: [
        { key: "A", text: "$A \\cap B$ เมื่อ $A$ และ $B$ ไม่มีสมาชิกร่วมกัน" },
        { key: "B", text: "$A \\cup B$ เมื่อ $A \\cap B = \\emptyset$" },
        { key: "C", text: "$A \\cup B$ เมื่อ $A = B$" },
        { key: "D", text: "$A - B$ เมื่อ $A \\subset B$" }
      ],
      answer: "B",
      explanation: `$A\\cup B$ ใหญ่สุดเมื่อไม่มีสมาชิกร่วม $=5+5=10$ จึงตอบ B`
    },
    {
      id: "q18",
      prompt: `ข้อใดกล่าวผิดเกี่ยวกับเซตว่าง ($\\emptyset$)`,
      choices: [
        { key: "A", text: "$\\emptyset \\cup A = A$" },
        { key: "B", text: "$\\emptyset \\cap A = \\emptyset$" },
        { key: "C", text: "$A - \\emptyset = A$" },
        { key: "D", text: "$\\emptyset - A = A$" }
      ],
      answer: "D",
      explanation: `$\\emptyset-A=\\emptyset$ ไม่ใช่ $A$ ข้อ D จึงผิด ตอบ D`
    },
    {
      id: "q19",
      prompt: `กำหนด $U = \\{x | x \\in I\\}$ และ $A = \\{x | x > 0\\}$ จงหา $A'$`,
      choices: [
        { key: "A", text: "$\\{x | x < 0\\}$" },
        { key: "B", text: "$\\{x | x \\le 0\\}$" },
        { key: "C", text: "$\\emptyset$" },
        { key: "D", text: "$U$" }
      ],
      answer: "B",
      explanation: `$U=\\mathbb{I}$, $A=\\{x>0\\}$ ส่วนเติมเต็มคือ $\\{x\\le0\\}$ (รวม 0 และลบ) จึงตอบ B`
    },
    {
      id: "q20",
      prompt: `ถ้า $A \\cap B' = \\emptyset$ แสดงว่าความสัมพันธ์ระหว่าง $A$ และ $B$ เป็นอย่างไร`,
      choices: [
        { key: "A", text: "$A$ เป็นสับเซตของ $B$" },
        { key: "B", text: "$B$ เป็นสับเซตของ $A$" },
        { key: "C", text: "$A$ และ $B$ แยกกันอยู่" },
        { key: "D", text: "$A$ และ $B$ เป็นเซตว่าง" }
      ],
      answer: "A",
      explanation: `$A\\cap B'=\\emptyset$ แปลว่าไม่มีส่วนของ $A$ ที่อยู่นอก $B$ คือ $A\\subset B$ จึงตอบ A`
    },
    {
      id: "q21",
      prompt: `กำหนด $n(U)=100, n(A)=40, n(B)=30, n(A \\cap B)=15$ จงหา $n(A' \\cap B')$`,
      choices: [
        { key: "A", text: "$15$" },
        { key: "B", text: "$45$" },
        { key: "C", text: "$55$" },
        { key: "D", text: "$70$" }
      ],
      answer: "B",
      explanation: `$n(A'\\cap B')=n(U)-n(A\\cup B)=100-(40+30-15)=100-55=45$ จึงตอบ B`
    },
    {
      id: "q22",
      prompt: `สมบัติข้อใดคือ "กฎการจัดหมู่" (Associative Law) สำหรับการดำเนินการของเซต`,
      choices: [
        { key: "A", text: "$A \\cup B = B \\cup A$" },
        { key: "B", text: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$" },
        { key: "C", text: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$" },
        { key: "D", text: "$(A')' = A$" }
      ],
      answer: "C",
      explanation: `กฎการจัดหมู่คือ $(A\\cup B)\\cup C=A\\cup(B\\cup C)$ จึงตอบ C`
    },
    {
      id: "q23",
      prompt: `ในห้องเรียนหนึ่งมีนักเรียน 40 คน ชอบคณิตศาสตร์ 25 คน ชอบภาษาอังกฤษ 20 คน และชอบทั้งสองวิชา 10 คน จะมีนักเรียนที่ไม่ชอบวิชาใดเลยกี่คน`,
      choices: [
        { key: "A", text: "$5$ คน" },
        { key: "B", text: "$10$ คน" },
        { key: "C", text: "$15$ คน" },
        { key: "D", text: "$20$ คน" }
      ],
      answer: "A",
      explanation: `ชอบอย่างน้อยหนึ่ง $=25+20-10=35$ ไม่ชอบเลย $=40-35=5$ จึงตอบ A`
    },
    {
      id: "q24",
      prompt: `เซต $(A \\cap B) \\cup (A \\cap B')$ มีค่าเท่ากับเซตในข้อใด`,
      choices: [
        { key: "A", text: "$A$" },
        { key: "B", text: "$B$" },
        { key: "C", text: "$A \\cap B$" },
        { key: "D", text: "$U$" }
      ],
      answer: "A",
      explanation: `$(A\\cap B)\\cup(A\\cap B')=A\\cap(B\\cup B')=A\\cap U=A$ จึงตอบ A`
    },
    {
      id: "q25",
      prompt: `กำหนด $A = \\{1, 2, 3, 4\\}$ และ $B = \\{3, 4, 5, 6\\}$ จงหา $n(P(A \\cap B))$`,
      choices: [
        { key: "A", text: "$2$" },
        { key: "B", text: "$4$" },
        { key: "C", text: "$8$" },
        { key: "D", text: "$16$" }
      ],
      answer: "B",
      explanation: `$A\\cap B=\\{3,4\\}$ มี 2 ตัว $n(P)=2^2=4$ จึงตอบ B`
    },
    {
      id: "q26",
      prompt: `ถ้า $A' = \\{1, 2, 3, 4\\}$ และ $U = \\{1, 2, 3, 4, 5, 6\\}$ ข้อใดคือเซต $A$`,
      choices: [
        { key: "A", text: "$\\{1, 2, 3, 4\\}$" },
        { key: "B", text: "$\\{5, 6\\}$" },
        { key: "C", text: "$\\{1, 2, 3, 4, 5, 6\\}$" },
        { key: "D", text: "$\\emptyset$" }
      ],
      answer: "B",
      explanation: `$A=U-A'=\\{1..6\\}-\\{1,2,3,4\\}=\\{5,6\\}$ จึงตอบ B`
    },
    {
      id: "q27",
      prompt: `ข้อใดต่อไปนี้ถูกต้องเกี่ยวกับสมบัติของคอมพลีเมนต์`,
      choices: [
        { key: "A", text: "$U' = U$" },
        { key: "B", text: "$\\emptyset' = \\emptyset$" },
        { key: "C", text: "$U' = \\emptyset$" },
        { key: "D", text: "$A \\cap A' = U$" }
      ],
      answer: "C",
      explanation: `$U'=\\emptyset$ จึงตอบ C`
    },
    {
      id: "q28",
      prompt: `กำหนด $A = \\{x | x \\in I^+\\text{ และ } x \\le 5\\}$ และ $B = \\{x | x \\in I\\text{ และ } 3 < x < 8\\}$ จงหา $A - B$`,
      choices: [
        { key: "A", text: "$\\{1, 2, 3\\}$" },
        { key: "B", text: "$\\{4, 5\\}$" },
        { key: "C", text: "$\\{6, 7\\}$" },
        { key: "D", text: "$\\{1, 2, 3, 4, 5\\}$" }
      ],
      answer: "A",
      explanation: `$A=\\{1,2,3,4,5\\}$, $B=\\{4,5,6,7\\}$, $A-B=\\{1,2,3\\}$ จึงตอบ A`
    },
    {
      id: "q29",
      prompt: `พื้นที่ที่ระบายสีในแผนภาพเวนน์-ออยเลอร์ ซึ่งเกิดจาก $(A \\cup B) - (A \\cap B)$ เรียกว่าอะไรในทางทฤษฎีเซต (ทางเลือก)`,
      choices: [
        { key: "A", text: "Symmetric Difference" },
        { key: "B", text: "Absolute Complement" },
        { key: "C", text: "Power Set" },
        { key: "D", text: "Universal Set" }
      ],
      answer: "A",
      explanation: `$(A\\cup B)-(A\\cap B)$ เรียกว่าผลต่างสมมาตร (Symmetric Difference) จึงตอบ A`
    },
    {
      id: "q30",
      prompt: `ถ้า $A \\subset B$ แล้ว ข้อใดต่อไปนี้กล่าว **ผิด**`,
      choices: [
        { key: "A", text: "$A \\cup B = B$" },
        { key: "B", text: "$A \\cap B = A$" },
        { key: "C", text: "$A - B = \\emptyset$" },
        { key: "D", text: "$B - A = \\emptyset$" }
      ],
      answer: "D",
      explanation: `$A\\subset B$ ทำให้ $B-A$ อาจไม่ว่าง ดังนั้น $B-A=\\emptyset$ ผิด จึงตอบ D`
    }
  ]
},
    "quiz3": {
  meta: {
    courseId: "m4-term1-math",
    quizKey: "quiz3",
    title: "Quiz 3 : แผนภาพออยเลอร์และแวน โจทย์ปัญหาเซต (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- ตอนที่ 1: สูตรพื้นฐานและการหาจำนวนสมาชิก (2 เซต) ---
    {
      id: "q1",
      prompt: `ข้อใดคือสูตรที่ถูกต้องในการหาจำนวนสมาชิกของเซต $A \\cup B$ เมื่อกำหนดให้ $A$ และ $B$ เป็นเซตจำกัดใดๆ?`,
      choices: [
        { key: "A", text: "$n(A \\cup B) = n(A) + n(B)$" },
        { key: "B", text: "$n(A \\cup B) = n(A) + n(B) + n(A \\cap B)$" },
        { key: "C", text: "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$" },
        { key: "D", text: "$n(A \\cup B) = n(A) \\times n(B) - n(A \\cap B)$" }
      ],
      answer: "C",
      explanation: `สูตร $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$ จึงตอบ C`
    },
    {
      id: "q2",
      prompt: `กำหนดให้ $n(A) = 15$, $n(B) = 20$ และ $n(A \\cap B) = 8$ จงหา $n(A \\cup B)$`,
      choices: [
        { key: "A", text: "$27$" },
        { key: "B", text: "$35$" },
        { key: "C", text: "$43$" },
        { key: "D", text: "$20$" }
      ],
      answer: "A",
      explanation: `$15+20-8=27$ จึงตอบ A`
    },
    {
      id: "q3",
      prompt: `ถ้าเซต $A$ และ $B$ ไม่มีสมาชิกร่วมกันเลย (Disjoint sets) และ $n(A) = 12$, $n(B) = 18$ จำนวนสมาชิกของ $A \\cup B$ จะมีค่าเท่าใด?`,
      choices: [
        { key: "A", text: "$0$" },
        { key: "B", text: "$6$" },
        { key: "C", text: "$18$" },
        { key: "D", text: "$30$" }
      ],
      answer: "D",
      explanation: `ไม่มีสมาชิกร่วม $n(A\\cup B)=12+18=30$ จึงตอบ D`
    },
    {
      id: "q4",
      prompt: `กำหนดให้ $n(A \\cup B) = 45$, $n(A) = 25$ และ $n(B) = 30$ จงหาจำนวนสมาชิกที่มีอยู่ในทั้งเซต $A$ และเซต $B$`,
      choices: [
        { key: "A", text: "$5$" },
        { key: "B", text: "$10$" },
        { key: "C", text: "$15$" },
        { key: "D", text: "$20$" }
      ],
      answer: "B",
      explanation: `$n(A\\cap B)=n(A)+n(B)-n(A\\cup B)=25+30-45=10$ จึงตอบ B`
    },
    {
      id: "q5",
      prompt: `กำหนดเอกภพสัมพัทธ์ $U$ มีจำนวนสมาชิก $50$ ตัว ถ้า $n(A) = 20$ จงหา $n(A')$`,
      choices: [
        { key: "A", text: "$20$" },
        { key: "B", text: "$30$" },
        { key: "C", text: "$50$" },
        { key: "D", text: "$70$" }
      ],
      answer: "B",
      explanation: `$n(A')=50-20=30$ จึงตอบ B`
    },
    {
      id: "q6",
      prompt: `ข้อใดคือความหมายของ $n(A - B)$ ในเชิงการหาจำนวนสมาชิกจากแผนภาพเวนน์-ออยเลอร์?`,
      choices: [
        { key: "A", text: "$n(A) - n(B)$" },
        { key: "B", text: "$n(A) + n(B) - n(A \\cap B)$" },
        { key: "C", text: "$n(B) - n(A \\cap B)$" },
        { key: "D", text: "$n(A) - n(A \\cap B)$" }
      ],
      answer: "D",
      explanation: `$n(A-B)=n(A)-n(A\\cap B)$ จึงตอบ D`
    },
    {
      id: "q7",
      prompt: `กำหนดให้ $n(A) = 24$ และ $n(A \\cap B) = 9$ จงหาจำนวนสมาชิกที่อยู่ใน $A$ แต่ไม่อยู่ใน $B$`,
      choices: [
        { key: "A", text: "$9$" },
        { key: "B", text: "$15$" },
        { key: "C", text: "$24$" },
        { key: "D", text: "$33$" }
      ],
      answer: "B",
      explanation: `$24-9=15$ จึงตอบ B`
    },

    // --- ตอนที่ 2: โจทย์ปัญหาเซต (2 เซต) ---
    {
      id: "q8",
      prompt: `จากการสอบถามนักเรียนห้องหนึ่งจำนวน $40$ คน พบว่ามีคนชอบวิชาคณิตศาสตร์ $25$ คน ชอบวิชาภาษาอังกฤษ $20$ คน และชอบทั้งสองวิชา $10$ คน มีนักเรียนกี่คนที่ชอบอย่างน้อยหนึ่งวิชา?`,
      choices: [
        { key: "A", text: "$30$ คน" },
        { key: "B", text: "$35$ คน" },
        { key: "C", text: "$40$ คน" },
        { key: "D", text: "$45$ คน" }
      ],
      answer: "B",
      explanation: `อย่างน้อยหนึ่งวิชา $=25+20-10=35$ จึงตอบ B`
    },
    {
      id: "q9",
      prompt: `จากข้อมูลในข้อ 8 มีนักเรียนกี่คนที่ไม่ชอบทั้งวิชาคณิตศาสตร์และวิชาภาษาอังกฤษเลย?`,
      choices: [
        { key: "A", text: "$0$ คน" },
        { key: "B", text: "$5$ คน" },
        { key: "C", text: "$10$ คน" },
        { key: "D", text: "$15$ คน" }
      ],
      answer: "B",
      explanation: `ไม่ชอบเลย $=40-35=5$ จึงตอบ B`
    },
    {
      id: "q10",
      prompt: `ในการสำรวจคน $50$ คน พบว่าดื่มชา $30$ คน ดื่มกาแฟ $25$ คน และไม่ดื่มทั้งสองอย่าง $5$ คน มีคนที่ดื่มทั้งชาและกาแฟกี่คน?`,
      choices: [
        { key: "A", text: "$5$ คน" },
        { key: "B", text: "$10$ คน" },
        { key: "C", text: "$15$ คน" },
        { key: "D", text: "$20$ คน" }
      ],
      answer: "B",
      explanation: `ดื่มอย่างน้อยหนึ่ง $=50-5=45$ ทั้งสอง $=30+25-45=10$ จึงตอบ B`
    },
    {
      id: "q11",
      prompt: `จากข้อมูลในข้อ 10 มีคนที่ดื่มชาเพียงอย่างเดียว (ไม่ดื่มกาแฟ) จำนวนกี่คน?`,
      choices: [
        { key: "A", text: "$10$ คน" },
        { key: "B", text: "$15$ คน" },
        { key: "C", text: "$20$ คน" },
        { key: "D", text: "$30$ คน" }
      ],
      answer: "C",
      explanation: `ชาอย่างเดียว $=30-10=20$ จึงตอบ C`
    },
    {
      id: "q12",
      prompt: `ในกลุ่มนักกีฬา $60$ คน มีคนเล่นฟุตบอล $40$ คน เล่นบาสเกตบอล $30$ คน และเล่นทั้งสองอย่าง $15$ คน มีนักกีฬากี่คนที่เล่นกีฬาเพียงชนิดเดียวเท่านั้น?`,
      choices: [
        { key: "A", text: "$25$ คน" },
        { key: "B", text: "$30$ คน" },
        { key: "C", text: "$40$ คน" },
        { key: "D", text: "$55$ คน" }
      ],
      answer: "C",
      explanation: `เล่นชนิดเดียว $=(40-15)+(30-15)=25+15=40$ จึงตอบ C`
    },
    {
      id: "q13",
      prompt: `หมู่บ้านแห่งหนึ่งมีประชากร $100$ คน พบว่า $60$ คนเลี้ยงสุนัข $50$ คนเลี้ยงแมว และมี $20$ คนที่ไม่เลี้ยงสัตว์ทั้งสองชนิดนี้เลย จงหาว่ามีกี่คนที่เลี้ยงสุนัขแต่ไม่เลี้ยงแมว?`,
      choices: [
        { key: "A", text: "$20$ คน" },
        { key: "B", text: "$30$ คน" },
        { key: "C", text: "$40$ คน" },
        { key: "D", text: "$50$ คน" }
      ],
      answer: "B",
      explanation: `เลี้ยงอย่างน้อยหนึ่ง $=100-20=80$ ทั้งสอง $=60+50-80=30$ สุนัขแต่ไม่แมว $=60-30=30$ จึงตอบ B`
    },
    {
      id: "q14",
      prompt: `นักท่องเที่ยวกลุ่มหนึ่งมี $80$ คน เคยไปภูเก็ต $45$ คน เคยไปเชียงใหม่ $35$ คน และเคยไปทั้งสองที่ $15$ คน มีกี่คนที่ไม่เคยไปทั้งสองที่นี้เลย?`,
      choices: [
        { key: "A", text: "$10$ คน" },
        { key: "B", text: "$15$ คน" },
        { key: "C", text: "$20$ คน" },
        { key: "D", text: "$25$ คน" }
      ],
      answer: "B",
      explanation: `เคยไปอย่างน้อยหนึ่ง $=45+35-15=65$ ไม่เคยเลย $=80-65=15$ จึงตอบ B`
    },
    {
      id: "q15",
      prompt: `กำหนดให้ $n(U) = 120$, $n(A) = 60$, $n(B) = 70$ และ $n(A \\cup B)' = 20$ จงหา $n(A \\cap B)$`,
      choices: [
        { key: "A", text: "$10$" },
        { key: "B", text: "$20$" },
        { key: "C", text: "$30$" },
        { key: "D", text: "$40$" }
      ],
      answer: "C",
      explanation: `$n(A\\cup B)=120-20=100$ ดังนั้น $n(A\\cap B)=60+70-100=30$ จึงตอบ C`
    },

    // --- ตอนที่ 3: พื้นที่ในแผนภาพเวนน์-ออยเลอร์ และสมบัติของเซต ---
    {
      id: "q16",
      prompt: `บริเวณพื้นที่ที่แรเงาเฉพาะวงกลม $A$ โดยไม่ทับซ้อนกับวงกลม $B$ เลย ตรงกับการดำเนินการของเซตในข้อใด?`,
      choices: [
        { key: "A", text: "$A \\cap B$" },
        { key: "B", text: "$A \\cup B$" },
        { key: "C", text: "$A - B$" },
        { key: "D", text: "$B - A$" }
      ],
      answer: "C",
      explanation: `เฉพาะ $A$ ไม่ทับ $B$ คือ $A-B$ จึงตอบ C`
    },
    {
      id: "q17",
      prompt: `บริเวณพื้นที่ด้านนอกวงกลม $A$ และวงกลม $B$ ทั้งหมด (ส่วนที่เหลือในกรอบสี่เหลี่ยม $U$) สามารถเขียนแทนด้วยเซตในข้อใด?`,
      choices: [
        { key: "A", text: "$(A \\cap B)'$" },
        { key: "B", text: "$(A \\cup B)'$" },
        { key: "C", text: "$A' \\cup B'$" },
        { key: "D", text: "$A - B'$" }
      ],
      answer: "B",
      explanation: `นอกวงทั้งสองคือ $(A\\cup B)'$ จึงตอบ B`
    },
    {
      id: "q18",
      prompt: `จากกฎของเดอมอร์แกน (De Morgan's Laws) เซต $(A \\cup B)'$ มีค่าเท่ากับข้อใด?`,
      choices: [
        { key: "A", text: "$A' \\cap B'$" },
        { key: "B", text: "$A' \\cup B'$" },
        { key: "C", text: "$A \\cap B'$" },
        { key: "D", text: "$A' - B'$" }
      ],
      answer: "A",
      explanation: `เดอมอร์แกน $(A\\cup B)'=A'\\cap B'$ จึงตอบ A`
    },
    {
      id: "q19",
      prompt: `ข้อใดกล่าวถึง $A \\cap B'$ ได้ถูกต้อง?`,
      choices: [
        { key: "A", text: "มีความหมายเหมือนกับ $B - A$" },
        { key: "B", text: "มีความหมายเหมือนกับ $A - B$" },
        { key: "C", text: "คือสมาชิกทั้งหมดที่ไม่อยู่ใน $A$ และ $B$" },
        { key: "D", text: "คือสมาชิกทั้งหมดในเอกภพสัมพัทธ์ยกเว้น $B$" }
      ],
      answer: "B",
      explanation: `$A\\cap B'=A-B$ จึงตอบ B`
    },

    // --- ตอนที่ 4: สูตรและโจทย์ปัญหา (3 เซต) ---
    {
      id: "q20",
      prompt: `ข้อใดคือสูตรการหาจำนวนสมาชิกของเซต $A \\cup B \\cup C$ ที่ถูกต้อง?`,
      choices: [
        { key: "A", text: "$n(A) + n(B) + n(C) - n(A \\cap B \\cap C)$" },
        { key: "B", text: "$n(A) + n(B) + n(C) - n(A \\cap B) - n(A \\cap C) - n(B \\cap C)$" },
        { key: "C", text: "$n(A) + n(B) + n(C) - n(A \\cap B) - n(A \\cap C) - n(B \\cap C) - n(A \\cap B \\cap C)$" },
        { key: "D", text: "$n(A) + n(B) + n(C) - n(A \\cap B) - n(A \\cap C) - n(B \\cap C) + n(A \\cap B \\cap C)$" }
      ],
      answer: "D",
      explanation: `สูตร 3 เซตต้อง $+n(A\\cap B\\cap C)$ ตอนท้าย จึงตอบ D`
    },
    {
      id: "q21",
      prompt: `กำหนด $n(A)=10$, $n(B)=12$, $n(C)=15$, $n(A \\cap B)=4$, $n(A \\cap C)=5$, $n(B \\cap C)=6$ และ $n(A \\cap B \\cap C)=2$ จงหา $n(A \\cup B \\cup C)$`,
      choices: [
        { key: "A", text: "$20$" },
        { key: "B", text: "$24$" },
        { key: "C", text: "$28$" },
        { key: "D", text: "$37$" }
      ],
      answer: "B",
      explanation: `$10+12+15-4-5-6+2=24$ จึงตอบ B`
    },
    {
      id: "q22",
      prompt: `ในการสำรวจนักเรียน $100$ คน เกี่ยวกับวิชาที่ชอบ ได้แก่ คณิต($M$), วิทย์($S$), อังกฤษ($E$) พบว่า $n(M)=40, n(S)=50, n(E)=45$, $n(M \\cap S)=15, n(M \\cap E)=10, n(S \\cap E)=20$ และ $n(M \\cap S \\cap E)=5$ มีนักเรียนกี่คนที่ชอบอย่างน้อย $1$ วิชา?`,
      choices: [
        { key: "A", text: "$85$ คน" },
        { key: "B", text: "$90$ คน" },
        { key: "C", text: "$95$ คน" },
        { key: "D", text: "$100$ คน" }
      ],
      answer: "C",
      explanation: `$40+50+45-15-10-20+5=95$ จึงตอบ C`
    },
    {
      id: "q23",
      prompt: `จากข้อมูลในข้อ 22 มีนักเรียนกี่คนที่ไม่ชอบทั้งสามวิชานี้เลย?`,
      choices: [
        { key: "A", text: "$5$ คน" },
        { key: "B", text: "$10$ คน" },
        { key: "C", text: "$15$ คน" },
        { key: "D", text: "$20$ คน" }
      ],
      answer: "A",
      explanation: `ไม่ชอบเลย $=100-95=5$ จึงตอบ A`
    },
    {
      id: "q24",
      prompt: `จากข้อมูลในข้อ 22 มีนักเรียนกี่คนที่ชอบวิชาคณิตศาสตร์ **เพียงวิชาเดียว** เท่านั้น?`,
      choices: [
        { key: "A", text: "$15$ คน" },
        { key: "B", text: "$20$ คน" },
        { key: "C", text: "$25$ คน" },
        { key: "D", text: "$40$ คน" }
      ],
      answer: "B",
      explanation: `คณิตอย่างเดียว $=40-15-10+5=20$ จึงตอบ B`
    },
    {
      id: "q25",
      prompt: `จากการสำรวจคน $80$ คน เกี่ยวกับการอ่านนิตยสาร $A, B$ และ $C$ พบว่า อ่าน $A$ $30$ คน, อ่าน $B$ $40$ คน, อ่าน $C$ $25$ คน, อ่าน $A$ และ $B$ $10$ คน, อ่าน $A$ และ $C$ $8$ คน, อ่าน $B$ และ $C$ $12$ คน และอ่านทั้งสามเล่ม $5$ คน มีคนกี่คนที่อ่านนิตยสารอย่างน้อย $1$ เล่ม?`,
      choices: [
        { key: "A", text: "$60$ คน" },
        { key: "B", text: "$65$ คน" },
        { key: "C", text: "$70$ คน" },
        { key: "D", text: "$75$ คน" }
      ],
      answer: "C",
      explanation: `$30+40+25-10-8-12+5=70$ จึงตอบ C`
    },
    {
      id: "q26",
      prompt: `จากข้อ 25 มีคนที่ไม่อ่านนิตยสารเล่มใดเลยใน 3 เล่มนี้กี่คน?`,
      choices: [
        { key: "A", text: "$5$ คน" },
        { key: "B", text: "$10$ คน" },
        { key: "C", text: "$15$ คน" },
        { key: "D", text: "$20$ คน" }
      ],
      answer: "B",
      explanation: `ไม่อ่านเลย $=80-70=10$ จึงตอบ B`
    },
    {
      id: "q27",
      prompt: `พื้นที่ตรงกลางของแผนภาพเวนน์-ออยเลอร์ที่มี $3$ วงกลมตัดกัน (ซ้อนทับกันทั้งสามวง) หมายถึงเซตในข้อใด?`,
      choices: [
        { key: "A", text: "$A \\cup B \\cup C$" },
        { key: "B", text: "$(A \\cap B) \\cup C$" },
        { key: "C", text: "$A \\cap B \\cap C$" },
        { key: "D", text: "$(A \\cup B)' \\cap C$" }
      ],
      answer: "C",
      explanation: `ตรงกลางซ้อนทั้งสามคือ $A\\cap B\\cap C$ จึงตอบ C`
    },
    {
      id: "q28",
      prompt: `กำหนดเอกภพสัมพัทธ์ $n(U) = 150$ และ $n(A \\cup B \\cup C) = 115$ จงหาจำนวนสมาชิกที่ไม่ได้อยู่ในเซต $A$, $B$ และ $C$ เลย`,
      choices: [
        { key: "A", text: "$35$" },
        { key: "B", text: "$115$" },
        { key: "C", text: "$150$" },
        { key: "D", text: "$265$" }
      ],
      answer: "A",
      explanation: `ไม่อยู่ในเซตใดเลย $=150-115=35$ จึงตอบ A`
    },
    {
      id: "q29",
      prompt: `กำหนด $n(A) = 30$, $n(B) = 30$, $n(C) = 30$ และทั้งสามเซตไม่มีสมาชิกร่วมกันเลย (Mutually Disjoint Sets) จงหา $n(A \\cup B \\cup C)$`,
      choices: [
        { key: "A", text: "$30$" },
        { key: "B", text: "$60$" },
        { key: "C", text: "$90$" },
        { key: "D", text: "$0$" }
      ],
      answer: "C",
      explanation: `ไม่มีสมาชิกร่วม $=30+30+30=90$ จึงตอบ C`
    },
    {
      id: "q30",
      prompt: `ในงานเลี้ยงที่มีคน $50$ คน ทุกคนต้องเลือกกินของหวานอย่างน้อย 1 ชนิด (ไอศกรีม, เค้ก, พุดดิ้ง) แสดงว่าบริเวณ $(I \\cup C \\cup P)'$ ในแผนภาพเวนน์จะมีจำนวนสมาชิกเท่าใด?`,
      choices: [
        { key: "A", text: "$0$ คน" },
        { key: "B", text: "$1$ คน" },
        { key: "C", text: "$25$ คน" },
        { key: "D", text: "$50$ คน" }
      ],
      answer: "A",
      explanation: `ทุกคนเลือกอย่างน้อยหนึ่ง ส่วนนอกทั้งสาม $(I\\cup C\\cup P)'=0$ จึงตอบ A`
    }
  ]
},
  "quiz4": {
  meta: {
    courseId: "m4-term1-math",
    quizKey: "quiz4",
    title: "Quiz 4 : สมการกำลังสอง กำลังสาม (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `เซตคำตอบของสมการ $x^2 - 5x + 6 = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{2, 3\\}$" },
        { key: "B", text: "$\\{-2, -3\\}$" },
        { key: "C", text: "$\\{-2, 3\\}$" },
        { key: "D", text: "$\\{2, -3\\}$" }
      ],
      answer: "A",
      explanation: `$(x-2)(x-3)=0$ ได้ $x=2,3$ จึงตอบ A`
    },
    {
      id: "q2",
      prompt: `เซตคำตอบของสมการ $2x^2 + 5x - 3 = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{\\frac{1}{2}, -3\\}$" },
        { key: "B", text: "$\\{-\\frac{1}{2}, 3\\}$" },
        { key: "C", text: "$\\{2, -3\\}$" },
        { key: "D", text: "$\\{-2, 3\\}$" }
      ],
      answer: "A",
      explanation: `$(2x-1)(x+3)=0$ ได้ $x=\\frac{1}{2},-3$ จึงตอบ A`
    },
    {
      id: "q3",
      prompt: `ผลบวกของคำตอบทั้งหมดของสมการ $x^2 - 7x + 10 = 0$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-7$" },
        { key: "B", text: "$-10$" },
        { key: "C", text: "$7$" },
        { key: "D", text: "$10$" }
      ],
      answer: "C",
      explanation: `ผลบวกราก $=-\\frac{b}{a}=-\\frac{-7}{1}=7$ จึงตอบ C`
    },
    {
      id: "q4",
      prompt: `ผลคูณของคำตอบทั้งหมดของสมการ $3x^2 - 12x + 9 = 0$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-3$" },
        { key: "B", text: "$3$" },
        { key: "C", text: "$4$" },
        { key: "D", text: "$9$" }
      ],
      answer: "B",
      explanation: `$3x^2-12x+9=3(x-1)(x-3)$ ผลคูณราก $=\\frac{c}{a}=\\frac{9}{3}=3$ จึงตอบ B`
    },
    {
      id: "q5",
      prompt: `สมการในข้อใดต่อไปนี้ มีคำตอบเป็นจำนวนจริงเพียงคำตอบเดียว (รากซ้ำ)`,
      choices: [
        { key: "A", text: "$x^2 - 4x + 5 = 0$" },
        { key: "B", text: "$x^2 - 5x + 6 = 0$" },
        { key: "C", text: "$x^2 - 6x + 9 = 0$" },
        { key: "D", text: "$x^2 - 9 = 0$" }
      ],
      answer: "C",
      explanation: `$x^2-6x+9=(x-3)^2$ มีรากซ้ำ $x=3$ จึงตอบ C`
    },
    {
      id: "q6",
      prompt: `สมการกำลังสองที่มีรากคือ $4$ และ $-2$ ตรงกับข้อใด`,
      choices: [
        { key: "A", text: "$x^2 - 2x - 8 = 0$" },
        { key: "B", text: "$x^2 + 2x - 8 = 0$" },
        { key: "C", text: "$x^2 - 6x + 8 = 0$" },
        { key: "D", text: "$x^2 + 6x + 8 = 0$" }
      ],
      answer: "A",
      explanation: `ราก $4,-2$: $(x-4)(x+2)=x^2-2x-8$ จึงตอบ A`
    },
    {
      id: "q7",
      prompt: `ถ้า $\\alpha$ และ $\\beta$ เป็นรากของสมการ $x^2 - 4x + 1 = 0$ แล้ว $\\alpha + \\beta$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-4$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$4$" }
      ],
      answer: "D",
      explanation: `$\\alpha+\\beta=-\\frac{b}{a}=4$ จึงตอบ D`
    },
    {
      id: "q8",
      prompt: `ถ้า $\\alpha$ และ $\\beta$ เป็นรากของสมการ $x^2 - 4x + 1 = 0$ แล้ว $\\alpha \\cdot \\beta$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-4$" },
        { key: "B", text: "$-1$" },
        { key: "C", text: "$1$" },
        { key: "D", text: "$4$" }
      ],
      answer: "C",
      explanation: `$\\alpha\\beta=\\frac{c}{a}=1$ จึงตอบ C`
    },
    {
      id: "q9",
      prompt: `ถ้า $\\alpha$ และ $\\beta$ เป็นรากของสมการ $x^2 - 4x + 1 = 0$ แล้ว $\\alpha^2 + \\beta^2$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$14$" },
        { key: "B", text: "$16$" },
        { key: "C", text: "$18$" },
        { key: "D", text: "$20$" }
      ],
      answer: "A",
      explanation: `$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=4^2-2(1)=14$ จึงตอบ A`
    },
    {
      id: "q10",
      prompt: `ค่า $k$ ในข้อใดที่ทำให้สมการ $x^2 + kx + 16 = 0$ มีคำตอบเป็นจำนวนจริงเพียงค่าเดียว`,
      choices: [
        { key: "A", text: "$k = 4, -4$" },
        { key: "B", text: "$k = 8, -8$" },
        { key: "C", text: "$k = 16, -16$" },
        { key: "D", text: "$k = 0$" }
      ],
      answer: "B",
      explanation: `รากซ้ำ ดิสคริมิแนนต์ $=0$: $k^2-4(16)=0 \\Rightarrow k^2=64 \\Rightarrow k=\\pm8$ จึงตอบ B`
    },
    {
      id: "q11",
      prompt: `รูปสี่เหลี่ยมผืนผ้ารูปหนึ่งมีด้านยาวยาวกว่าด้านกว้าง $3$ เมตร และมีพื้นที่ $40$ ตารางเมตร ด้านกว้างยาวกี่เมตร`,
      choices: [
        { key: "A", text: "$4$ เมตร" },
        { key: "B", text: "$5$ เมตร" },
        { key: "C", text: "$8$ เมตร" },
        { key: "D", text: "$10$ เมตร" }
      ],
      answer: "B",
      explanation: `ให้กว้าง $w$: $w(w+3)=40 \\Rightarrow w^2+3w-40=0 \\Rightarrow (w+8)(w-5)=0 \\Rightarrow w=5$ จึงตอบ B`
    },
    {
      id: "q12",
      prompt: `เซตคำตอบของสมการ $x^2 + 9 = 0$ ในระบบจำนวนจริงคือข้อใด`,
      choices: [
        { key: "A", text: "$\\{3\\}$" },
        { key: "B", text: "$\\{-3\\}$" },
        { key: "C", text: "$\\{3, -3\\}$" },
        { key: "D", text: "$\\emptyset$ (เซตว่าง)" }
      ],
      answer: "D",
      explanation: `$x^2=-9$ ไม่มีคำตอบจริง จึงเป็นเซตว่าง ตอบ D`
    },
    {
      id: "q13",
      prompt: `จงหาเศษเหลือจากการหารพหุนาม $P(x) = x^2 - 5x + 7$ ด้วย $x - 2$`,
      choices: [
        { key: "A", text: "$1$" },
        { key: "B", text: "$2$" },
        { key: "C", text: "$3$" },
        { key: "D", text: "$7$" }
      ],
      answer: "A",
      explanation: `ทฤษฎีเศษเหลือ เศษ $=P(2)=4-10+7=1$ จึงตอบ A`
    },
    {
      id: "q14",
      prompt: `ถ้า $x + 1$ เป็นตัวประกอบของพหุนาม $x^2 + kx - 5$ แล้ว $k$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-6$" },
        { key: "B", text: "$-4$" },
        { key: "C", text: "$4$" },
        { key: "D", text: "$6$" }
      ],
      answer: "B",
      explanation: `$x+1$ เป็นตัวประกอบ $\\Rightarrow P(-1)=0$: $1-k-5=0 \\Rightarrow k=-4$ จึงตอบ B`
    },
    {
      id: "q15",
      prompt: `เซตคำตอบของสมการ $4x^2 - 9 = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{\\frac{2}{3}, -\\frac{2}{3}\\}$" },
        { key: "B", text: "$\\{\\frac{3}{2}, -\\frac{3}{2}\\}$" },
        { key: "C", text: "$\\{\\frac{9}{4}, -\\frac{9}{4}\\}$" },
        { key: "D", text: "$\\{3, -3\\}$" }
      ],
      answer: "B",
      explanation: `$4x^2=9 \\Rightarrow x^2=\\frac{9}{4} \\Rightarrow x=\\pm\\frac{3}{2}$ จึงตอบ B`
    },
    {
      id: "q16",
      prompt: `เซตคำตอบของสมการ $x^3 - x = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{0, 1\\}$" },
        { key: "B", text: "$\\{-1, 1\\}$" },
        { key: "C", text: "$\\{-1, 0, 1\\}$" },
        { key: "D", text: "$\\{1\\}$" }
      ],
      answer: "C",
      explanation: `$x(x-1)(x+1)=0$ ได้ $x=-1,0,1$ จึงตอบ C`
    },
    {
      id: "q17",
      prompt: `เซตคำตอบของสมการ $x^3 - 8 = 0$ ในระบบจำนวนจริงคือข้อใด`,
      choices: [
        { key: "A", text: "$\\{2\\}$" },
        { key: "B", text: "$\\{-2, 2\\}$" },
        { key: "C", text: "$\\{-2\\}$" },
        { key: "D", text: "$\\{2, 4\\}$" }
      ],
      answer: "A",
      explanation: `$x^3=8 \\Rightarrow x=2$ (รากจริงเดียว) จึงตอบ A`
    },
    {
      id: "q18",
      prompt: `เซตคำตอบของสมการ $x^3 + 3x^2 - 4x - 12 = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{2, -2, 3\\}$" },
        { key: "B", text: "$\\{2, -2, -3\\}$" },
        { key: "C", text: "$\\{2, 3, -3\\}$" },
        { key: "D", text: "$\\{-2, 3, -3\\}$" }
      ],
      answer: "B",
      explanation: `$(x+3)(x^2-4)=(x+3)(x-2)(x+2)$ ได้ $x=-3,2,-2$ จึงตอบ B`
    },
    {
      id: "q19",
      prompt: `ผลบวกของคำตอบทั้งหมดของสมการ $2x^3 - 4x^2 - 6x = 0$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-4$" },
        { key: "B", text: "$-2$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$4$" }
      ],
      answer: "C",
      explanation: `$2x(x-3)(x+1)=0$ ได้ $0,3,-1$ ผลบวก $=2$ จึงตอบ C`
    },
    {
      id: "q20",
      prompt: `ผลคูณของคำตอบทั้งหมดของสมการ $x^3 - 2x^2 - 5x + 6 = 0$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-6$" },
        { key: "B", text: "$-5$" },
        { key: "C", text: "$5$" },
        { key: "D", text: "$6$" }
      ],
      answer: "A",
      explanation: `ผลคูณราก $=-\\frac{d}{a}=-\\frac{6}{1}=-6$ จึงตอบ A`
    },
    {
      id: "q21",
      prompt: `ข้อใดเป็นตัวประกอบของพหุนาม $x^3 - 6x^2 + 11x - 6$`,
      choices: [
        { key: "A", text: "$x + 1$" },
        { key: "B", text: "$x - 1$" },
        { key: "C", text: "$x + 2$" },
        { key: "D", text: "$x + 3$" }
      ],
      answer: "B",
      explanation: `ลอง $x=1$: $1-6+11-6=0$ ดังนั้น $x-1$ เป็นตัวประกอบ จึงตอบ B`
    },
    {
      id: "q22",
      prompt: `เซตคำตอบของสมการ $x^3 - 6x^2 + 11x - 6 = 0$ คือข้อใด`,
      choices: [
        { key: "A", text: "$\\{-1, -2, -3\\}$" },
        { key: "B", text: "$\\{-1, 2, 3\\}$" },
        { key: "C", text: "$\\{1, -2, 3\\}$" },
        { key: "D", text: "$\\{1, 2, 3\\}$" }
      ],
      answer: "D",
      explanation: `แยกได้ $(x-1)(x-2)(x-3)$ ได้ราก $1,2,3$ จึงตอบ D`
    },
    {
      id: "q23",
      prompt: `ตามทฤษฎีบทเศษเหลือ (Remainder Theorem) เศษจากการหารพหุนาม $P(x)$ ด้วย $x - c$ คือข้อใด`,
      choices: [
        { key: "A", text: "$P(x)$" },
        { key: "B", text: "$P(c)$" },
        { key: "C", text: "$P(-c)$" },
        { key: "D", text: "$0$" }
      ],
      answer: "B",
      explanation: `ทฤษฎีเศษเหลือ เศษ $=P(c)$ จึงตอบ B`
    },
    {
      id: "q24",
      prompt: `จงหาเศษเหลือจากการหารพหุนาม $x^3 - 2x^2 + x - 5$ ด้วย $x - 3$`,
      choices: [
        { key: "A", text: "$-5$" },
        { key: "B", text: "$7$" },
        { key: "C", text: "$11$" },
        { key: "D", text: "$15$" }
      ],
      answer: "B",
      explanation: `$P(3)=27-18+3-5=7$ จึงตอบ B`
    },
    {
      id: "q25",
      prompt: `ถ้า $x - 2$ หาร $x^3 - 3x^2 + kx + 4$ ลงตัว (เหลือเศษ 0) แล้ว $k$ มีค่าเท่าใด`,
      choices: [
        { key: "A", text: "$-2$" },
        { key: "B", text: "$0$" },
        { key: "C", text: "$2$" },
        { key: "D", text: "$4$" }
      ],
      answer: "B",
      explanation: `$x-2$ หารลงตัว $\\Rightarrow P(2)=0$: $8-12+2k+4=0 \\Rightarrow k=0$ จึงตอบ B`
    },
    {
      id: "q26",
      prompt: `สมการพหุนามกำลังสาม $ax^3+bx^2+cx+d=0$ (เมื่อ $a \\neq 0$) จะมีรากที่เป็นจำนวนจริงได้มากที่สุดกี่ค่า (ไม่นับรากซ้ำ)`,
      choices: [
        { key: "A", text: "$1$ ค่า" },
        { key: "B", text: "$2$ ค่า" },
        { key: "C", text: "$3$ ค่า" },
        { key: "D", text: "$4$ ค่า" }
      ],
      answer: "C",
      explanation: `สมการกำลังสามมีรากจริงได้มากที่สุด 3 ค่า จึงตอบ C`
    },
    {
      id: "q27",
      prompt: `สมการกำลังสามในข้อใดที่มีคำตอบคือ $-1, 1, 2$`,
      choices: [
        { key: "A", text: "$x^3 - 2x^2 - x + 2 = 0$" },
        { key: "B", text: "$x^3 + 2x^2 - x - 2 = 0$" },
        { key: "C", text: "$x^3 - x^2 - 2x + 2 = 0$" },
        { key: "D", text: "$x^3 + x^2 - 2x - 2 = 0$" }
      ],
      answer: "A",
      explanation: `$(x+1)(x-1)(x-2)=x^3-2x^2-x+2$ จึงตอบ A`
    },
    {
      id: "q28",
      prompt: `ข้อใดคือการแยกตัวประกอบที่ถูกต้องของ $x^3 + 27$`,
      choices: [
        { key: "A", text: "$(x + 3)(x^2 - 6x + 9)$" },
        { key: "B", text: "$(x + 3)(x^2 - 3x + 9)$" },
        { key: "C", text: "$(x - 3)(x^2 + 3x + 9)$" },
        { key: "D", text: "$(x + 3)(x^2 + 3x + 9)$" }
      ],
      answer: "B",
      explanation: `ผลบวกกำลังสาม $a^3+b^3=(a+b)(a^2-ab+b^2)$: $x^3+27=(x+3)(x^2-3x+9)$ จึงตอบ B`
    },
    {
      id: "q29",
      prompt: `ถ้าสมการ $x^3 + ax^2 + bx + c = 0$ มีคำตอบคือ $2, -3$ และ $4$ แล้ว ค่าของ $c$ คือข้อใด`,
      choices: [
        { key: "A", text: "$-24$" },
        { key: "B", text: "$-12$" },
        { key: "C", text: "$12$" },
        { key: "D", text: "$24$" }
      ],
      answer: "D",
      explanation: `$c$ = ค่าคงที่ $=-(\\text{ผลคูณราก})=-(2)(-3)(4)=24$ จึงตอบ D`
    },
    {
      id: "q30",
      prompt: `ให้ $P(x) = ax^3 + bx^2 + cx + d$ ถ้าพบว่า $P(1) = 0$ จะสรุปได้ตามข้อใด`,
      choices: [
        { key: "A", text: "$x + 1$ เป็นตัวประกอบของ $P(x)$" },
        { key: "B", text: "$x - 1$ เป็นตัวประกอบของ $P(x)$" },
        { key: "C", text: "$x$ เป็นตัวประกอบของ $P(x)$" },
        { key: "D", text: "$1$ เป็นเศษเหลือจากการหาร $P(x)$ ด้วย $x$" }
      ],
      answer: "B",
      explanation: `$P(1)=0$ แสดงว่า $x-1$ เป็นตัวประกอบของ $P(x)$ จึงตอบ B`
    }
  ]
},

  "quiz5": {
    meta: {
      courseId: "m4-term1-math",
      quizKey: "quiz5",
      title: "Quiz 5 : สมการ/อสมการพหุนาม เศษส่วนพหุนาม และค่าสัมบูรณ์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- สมการพหุนามตัวแปรเดียว (ข้อ 1-8) ---
      {
        id: "q1",
        prompt: `เซตคำตอบของสมการ $x^2 - 7x + 10 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{-2, -5\\}$" },
          { key: "B", text: "$\\{1, 10\\}$" },
          { key: "C", text: "$\\{2, 5\\}$" },
          { key: "D", text: "$\\{-2, 5\\}$" }
        ],
        answer: "C",
        explanation: `$(x-2)(x-5)=0 \\Rightarrow x = 2, 5$ จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `เซตคำตอบของสมการ $x^2 - 9 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{-3, 3\\}$" },
          { key: "B", text: "$\\{9\\}$" },
          { key: "C", text: "$\\{3\\}$" },
          { key: "D", text: "$\\{-9, 9\\}$" }
        ],
        answer: "A",
        explanation: `$x^2 = 9 \\Rightarrow x = \\pm 3$ จึงตอบ A`
      },
      {
        id: "q3",
        prompt: `เซตคำตอบของสมการ $x^2 + 2x - 8 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{4, -2\\}$" },
          { key: "B", text: "$\\{4, 2\\}$" },
          { key: "C", text: "$\\{-4, -2\\}$" },
          { key: "D", text: "$\\{-4, 2\\}$" }
        ],
        answer: "D",
        explanation: `$(x+4)(x-2)=0 \\Rightarrow x = -4, 2$ จึงตอบ D`
      },
      {
        id: "q4",
        prompt: `ผลบวกของคำตอบทั้งหมดของสมการ $x^2 - 6x + 8 = 0$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$6$" },
          { key: "C", text: "$-6$" },
          { key: "D", text: "$2$" }
        ],
        answer: "B",
        explanation: `ผลบวกคำตอบ $= -\\dfrac{b}{a} = -\\dfrac{-6}{1} = 6$ (หรือคำตอบ $2, 4$ บวกกันได้ 6) จึงตอบ B`
      },
      {
        id: "q5",
        prompt: `ผลคูณของคำตอบทั้งหมดของสมการ $x^2 - 6x + 8 = 0$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$-8$" },
          { key: "C", text: "$8$" },
          { key: "D", text: "$2$" }
        ],
        answer: "C",
        explanation: `ผลคูณคำตอบ $= \\dfrac{c}{a} = \\dfrac{8}{1} = 8$ (หรือ $2 \\times 4 = 8$) จึงตอบ C`
      },
      {
        id: "q6",
        prompt: `เซตคำตอบของสมการ $x^3 - 4x = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{0, 2, -2\\}$" },
          { key: "B", text: "$\\{2, -2\\}$" },
          { key: "C", text: "$\\{0, 4, -4\\}$" },
          { key: "D", text: "$\\{0, 2\\}$" }
        ],
        answer: "A",
        explanation: `$x(x^2-4) = x(x-2)(x+2) = 0 \\Rightarrow x = 0, 2, -2$ จึงตอบ A`
      },
      {
        id: "q7",
        prompt: `เซตคำตอบของสมการ $(x - 1)(x + 3)(x - 2) = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{-1, 3, -2\\}$" },
          { key: "B", text: "$\\{1, 3, 2\\}$" },
          { key: "C", text: "$\\{-1, -3, 2\\}$" },
          { key: "D", text: "$\\{1, -3, 2\\}$" }
        ],
        answer: "D",
        explanation: `ให้แต่ละวงเล็บเป็นศูนย์: $x = 1, -3, 2$ จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `สมการ $x^2 + 1 = 0$ มีคำตอบที่เป็นจำนวนจริงกี่จำนวน?`,
        choices: [
          { key: "A", text: "$1$ จำนวน" },
          { key: "B", text: "$0$ จำนวน" },
          { key: "C", text: "$2$ จำนวน" },
          { key: "D", text: "มากมายนับไม่ถ้วน" }
        ],
        answer: "B",
        explanation: `$x^2 = -1$ ไม่มีจำนวนจริงใดยกกำลังสองแล้วได้ค่าลบ จึงไม่มีคำตอบจริง จึงตอบ B`
      },

      // --- อสมการพหุนาม (ข้อ 9-15) ---
      {
        id: "q9",
        prompt: `ผลเฉลยของอสมการ $(x - 2)(x - 5) > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$2 < x < 5$" },
          { key: "B", text: "$x > 5$ เท่านั้น" },
          { key: "C", text: "$x < 2$ หรือ $x > 5$" },
          { key: "D", text: "$x < 5$" }
        ],
        answer: "C",
        explanation: `ผลคูณเป็นบวกเมื่ออยู่นอกช่วงรากทั้งสอง: $x < 2$ หรือ $x > 5$ จึงตอบ C`
      },
      {
        id: "q10",
        prompt: `ผลเฉลยของอสมการ $(x - 1)(x + 3) < 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 < x < 1$" },
          { key: "B", text: "$x < -3$ หรือ $x > 1$" },
          { key: "C", text: "$1 < x < 3$" },
          { key: "D", text: "$-1 < x < 3$" }
        ],
        answer: "A",
        explanation: `ผลคูณเป็นลบเมื่ออยู่ระหว่างราก $-3$ กับ $1$: $-3 < x < 1$ จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `ผลเฉลยของอสมการ $x^2 - 4 > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-2 < x < 2$" },
          { key: "B", text: "$x > 2$ เท่านั้น" },
          { key: "C", text: "$x < 2$" },
          { key: "D", text: "$x < -2$ หรือ $x > 2$" }
        ],
        answer: "D",
        explanation: `$(x-2)(x+2) > 0 \\Rightarrow x < -2$ หรือ $x > 2$ จึงตอบ D`
      },
      {
        id: "q12",
        prompt: `ผลเฉลยของอสมการ $x^2 - 5x + 6 \\le 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\le 2$ หรือ $x \\ge 3$" },
          { key: "B", text: "$2 \\le x \\le 3$" },
          { key: "C", text: "$-3 \\le x \\le -2$" },
          { key: "D", text: "$x \\ge 3$" }
        ],
        answer: "B",
        explanation: `$(x-2)(x-3) \\le 0 \\Rightarrow 2 \\le x \\le 3$ (ระหว่างรากรวมปลาย) จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `ผลเฉลยของอสมการ $x^2 + x - 6 \\ge 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 \\le x \\le 2$" },
          { key: "B", text: "$x \\ge 2$ เท่านั้น" },
          { key: "C", text: "$x \\le -3$ หรือ $x \\ge 2$" },
          { key: "D", text: "$x \\le 2$" }
        ],
        answer: "C",
        explanation: `$(x+3)(x-2) \\ge 0 \\Rightarrow x \\le -3$ หรือ $x \\ge 2$ จึงตอบ C`
      },
      {
        id: "q14",
        prompt: `ผลเฉลยของอสมการ $x(x - 4) < 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$0 < x < 4$" },
          { key: "B", text: "$x < 0$ หรือ $x > 4$" },
          { key: "C", text: "$-4 < x < 0$" },
          { key: "D", text: "$x > 4$ เท่านั้น" }
        ],
        answer: "A",
        explanation: `ผลคูณเป็นลบเมื่ออยู่ระหว่างราก $0$ กับ $4$: $0 < x < 4$ จึงตอบ A`
      },
      {
        id: "q15",
        prompt: `จำนวนเต็มที่สอดคล้องกับอสมการ $x^2 \\le 9$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$5$ จำนวน" },
          { key: "B", text: "$6$ จำนวน" },
          { key: "C", text: "$4$ จำนวน" },
          { key: "D", text: "$7$ จำนวน" }
        ],
        answer: "D",
        explanation: `$-3 \\le x \\le 3$ จำนวนเต็มคือ $-3,-2,-1,0,1,2,3$ รวม 7 จำนวน จึงตอบ D`
      },

      // --- อสมการเศษส่วนพหุนาม (ข้อ 16-21) ---
      {
        id: "q16",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x - 1}{x - 3} > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$1 < x < 3$" },
          { key: "B", text: "$x < 1$ หรือ $x > 3$" },
          { key: "C", text: "$x > 3$ เท่านั้น" },
          { key: "D", text: "$x < 3$" }
        ],
        answer: "B",
        explanation: `เศษส่วนเป็นบวกเมื่อตัวเศษและตัวส่วนมีเครื่องหมายเดียวกัน: $x < 1$ หรือ $x > 3$ จึงตอบ B`
      },
      {
        id: "q17",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x + 2}{x - 1} < 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x < -2$ หรือ $x > 1$" },
          { key: "B", text: "$1 < x < 2$" },
          { key: "C", text: "$-2 < x < 1$" },
          { key: "D", text: "$x > 1$ เท่านั้น" }
        ],
        answer: "C",
        explanation: `เศษส่วนเป็นลบเมื่ออยู่ระหว่างจุดวิกฤต $-2$ กับ $1$: $-2 < x < 1$ จึงตอบ C`
      },
      {
        id: "q18",
        prompt: `เศษส่วนพหุนาม $\\dfrac{x + 5}{x - 2}$ หานิยามไม่ได้ (ไม่มีความหมาย) เมื่อ $x$ มีค่าเท่าใด?`,
        choices: [
          { key: "A", text: "$x = 2$" },
          { key: "B", text: "$x = -5$" },
          { key: "C", text: "$x = 5$" },
          { key: "D", text: "$x = -2$" }
        ],
        answer: "A",
        explanation: `ตัวส่วนเป็นศูนย์ไม่ได้: $x - 2 = 0 \\Rightarrow x = 2$ ทำให้หานิยามไม่ได้ จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x - 4}{x + 1} \\ge 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-1 < x \\le 4$" },
          { key: "B", text: "$x \\ge 4$ เท่านั้น" },
          { key: "C", text: "$x \\le -1$ หรือ $x \\ge 4$" },
          { key: "D", text: "$x < -1$ หรือ $x \\ge 4$" }
        ],
        answer: "D",
        explanation: `จุดวิกฤต $x=-1$ (ห้ามเท่ากับ) และ $x=4$ (รวมได้); เศษส่วน $\\ge 0$ เมื่อ $x < -1$ หรือ $x \\ge 4$ จึงตอบ D`
      },
      {
        id: "q20",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{1}{x} > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x < 0$" },
          { key: "B", text: "$x > 0$" },
          { key: "C", text: "$x \\ge 0$" },
          { key: "D", text: "จำนวนจริงทุกค่า" }
        ],
        answer: "B",
        explanation: `$\\dfrac{1}{x}$ เป็นบวกเมื่อ $x > 0$ จึงตอบ B`
      },
      {
        id: "q21",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x - 2}{x - 5} \\le 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$2 < x < 5$" },
          { key: "B", text: "$x < 2$ หรือ $x > 5$" },
          { key: "C", text: "$2 \\le x < 5$" },
          { key: "D", text: "$2 \\le x \\le 5$" }
        ],
        answer: "C",
        explanation: `ตัวเศษเป็นศูนย์ที่ $x=2$ (รวมได้) ตัวส่วนเป็นศูนย์ที่ $x=5$ (ห้าม); เศษส่วน $\\le 0$ เมื่อ $2 \\le x < 5$ จึงตอบ C`
      },

      // --- สมการค่าสัมบูรณ์ (ข้อ 22-25) ---
      {
        id: "q22",
        prompt: `เซตคำตอบของสมการ $|x - 4| = 6$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{10, -2\\}$" },
          { key: "B", text: "$\\{10, 2\\}$" },
          { key: "C", text: "$\\{-10, 2\\}$" },
          { key: "D", text: "$\\{4, 6\\}$" }
        ],
        answer: "A",
        explanation: `$x - 4 = 6$ หรือ $x - 4 = -6 \\Rightarrow x = 10$ หรือ $x = -2$ จึงตอบ A`
      },
      {
        id: "q23",
        prompt: `เซตคำตอบของสมการ $|2x + 1| = 7$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{3, 4\\}$" },
          { key: "B", text: "$\\{-3, 4\\}$" },
          { key: "C", text: "$\\{3.5, -3.5\\}$" },
          { key: "D", text: "$\\{3, -4\\}$" }
        ],
        answer: "D",
        explanation: `$2x+1 = 7 \\Rightarrow x = 3$ หรือ $2x+1 = -7 \\Rightarrow x = -4$ จึงตอบ D`
      },
      {
        id: "q24",
        prompt: `เซตคำตอบของสมการ $|x - 1| = |x - 5|$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{5\\}$" },
          { key: "B", text: "$\\{3\\}$" },
          { key: "C", text: "$\\{1, 5\\}$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "B",
        explanation: `จุดที่ห่างจาก 1 และ 5 เท่ากันคือจุดกึ่งกลาง $x = \\dfrac{1+5}{2} = 3$ จึงตอบ B`
      },
      {
        id: "q25",
        prompt: `สมการ $|x + 2| = -3$ มีคำตอบกี่จำนวน?`,
        choices: [
          { key: "A", text: "$1$ จำนวน" },
          { key: "B", text: "$2$ จำนวน" },
          { key: "C", text: "$0$ จำนวน" },
          { key: "D", text: "มากมายนับไม่ถ้วน" }
        ],
        answer: "C",
        explanation: `ค่าสัมบูรณ์ต้องไม่เป็นลบ จึงเท่ากับ $-3$ ไม่ได้ ไม่มีคำตอบ จึงตอบ C`
      },

      // --- อสมการค่าสัมบูรณ์ (ข้อ 26-30) ---
      {
        id: "q26",
        prompt: `ผลเฉลยของอสมการ $|x| < 7$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-7 < x < 7$" },
          { key: "B", text: "$x < 7$" },
          { key: "C", text: "$x < -7$ หรือ $x > 7$" },
          { key: "D", text: "$x > 7$" }
        ],
        answer: "A",
        explanation: `$|x| < 7 \\Rightarrow -7 < x < 7$ จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `ผลเฉลยของอสมการ $|x - 3| > 2$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$1 < x < 5$" },
          { key: "B", text: "$x > 5$ เท่านั้น" },
          { key: "C", text: "$x < 5$" },
          { key: "D", text: "$x < 1$ หรือ $x > 5$" }
        ],
        answer: "D",
        explanation: `$x - 3 < -2$ หรือ $x - 3 > 2 \\Rightarrow x < 1$ หรือ $x > 5$ จึงตอบ D`
      },
      {
        id: "q28",
        prompt: `ผลเฉลยของอสมการ $|x + 1| \\le 3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 \\le x \\le 3$" },
          { key: "B", text: "$-4 \\le x \\le 2$" },
          { key: "C", text: "$x \\le 2$" },
          { key: "D", text: "$-2 \\le x \\le 4$" }
        ],
        answer: "B",
        explanation: `$-3 \\le x + 1 \\le 3 \\Rightarrow -4 \\le x \\le 2$ จึงตอบ B`
      },
      {
        id: "q29",
        prompt: `ผลเฉลยของอสมการ $|2x - 4| < 6$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-1 < x < 10$" },
          { key: "B", text: "$1 < x < 5$" },
          { key: "C", text: "$-1 < x < 5$" },
          { key: "D", text: "$-2 < x < 5$" }
        ],
        answer: "C",
        explanation: `$-6 < 2x - 4 < 6 \\Rightarrow -2 < 2x < 10 \\Rightarrow -1 < x < 5$ จึงตอบ C`
      },
      {
        id: "q30",
        prompt: `จำนวนเต็มที่สอดคล้องกับอสมการ $|x| < 3$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$5$ จำนวน" },
          { key: "B", text: "$6$ จำนวน" },
          { key: "C", text: "$7$ จำนวน" },
          { key: "D", text: "$3$ จำนวน" }
        ],
        answer: "A",
        explanation: `$-3 < x < 3$ จำนวนเต็มคือ $-2,-1,0,1,2$ รวม 5 จำนวน จึงตอบ A`
      }
    ]
  },

  "quiz6": {
    meta: {
      courseId: "m4-term1-math",
      quizKey: "quiz6",
      title: "Quiz 6 : สมการ อสมการ และค่าสัมบูรณ์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- สมการกำลังสอง (ข้อ 1-8) ---
      {
        id: "q1",
        prompt: `เซตคำตอบของสมการ $x^2 - 4x + 3 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{-1, -3\\}$" },
          { key: "B", text: "$\\{4, 3\\}$" },
          { key: "C", text: "$\\{-1, 3\\}$" },
          { key: "D", text: "$\\{1, 3\\}$" }
        ],
        answer: "D",
        explanation: `$(x-1)(x-3)=0 \\Rightarrow x = 1, 3$ จึงตอบ D`
      },
      {
        id: "q2",
        prompt: `เซตคำตอบของสมการ $x^2 + 6x + 9 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{3\\}$" },
          { key: "B", text: "$\\{-3\\}$" },
          { key: "C", text: "$\\{-3, 3\\}$" },
          { key: "D", text: "$\\{9\\}$" }
        ],
        answer: "B",
        explanation: `$(x+3)^2 = 0 \\Rightarrow x = -3$ (รากซ้ำ) จึงตอบ B`
      },
      {
        id: "q3",
        prompt: `สูตรสำหรับหาคำตอบของสมการกำลังสอง $ax^2 + bx + c = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
          { key: "B", text: "$x = \\dfrac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$" },
          { key: "C", text: "$x = \\dfrac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
          { key: "D", text: "$x = \\dfrac{-b \\pm \\sqrt{4ac - b^2}}{2a}$" }
        ],
        answer: "A",
        explanation: `สูตรกำลังสองคือ $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ จึงตอบ A`
      },
      {
        id: "q4",
        prompt: `คำตอบของสมการ $x^2 - 2x - 1 = 0$ (ใช้สูตรกำลังสอง) คือข้อใด?`,
        choices: [
          { key: "A", text: "$1 \\pm \\sqrt{3}$" },
          { key: "B", text: "$2 \\pm \\sqrt{2}$" },
          { key: "C", text: "$1 \\pm \\sqrt{2}$" },
          { key: "D", text: "$-1 \\pm \\sqrt{2}$" }
        ],
        answer: "C",
        explanation: `$x = \\dfrac{2 \\pm \\sqrt{4 + 4}}{2} = \\dfrac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}$ จึงตอบ C`
      },
      {
        id: "q5",
        prompt: `สมการ $x^2 + x + 1 = 0$ มีคำตอบที่เป็นจำนวนจริงกี่จำนวน?`,
        choices: [
          { key: "A", text: "$2$ จำนวน" },
          { key: "B", text: "$1$ จำนวน" },
          { key: "C", text: "มากมายนับไม่ถ้วน" },
          { key: "D", text: "$0$ จำนวน (ไม่มีคำตอบจริง)" }
        ],
        answer: "D",
        explanation: `ดิสคริมิแนนต์ $b^2 - 4ac = 1 - 4 = -3 < 0$ จึงไม่มีคำตอบจริง จึงตอบ D`
      },
      {
        id: "q6",
        prompt: `ถ้าดิสคริมิแนนต์ $b^2 - 4ac > 0$ สมการกำลังสองจะมีคำตอบจริงลักษณะใด?`,
        choices: [
          { key: "A", text: "ไม่มีคำตอบจริง" },
          { key: "B", text: "มีคำตอบจริง 2 จำนวนที่แตกต่างกัน" },
          { key: "C", text: "มีคำตอบจริงซ้ำกัน 1 จำนวน" },
          { key: "D", text: "มีคำตอบจริง 3 จำนวน" }
        ],
        answer: "B",
        explanation: `เมื่อ $b^2 - 4ac > 0$ สมการมีคำตอบจริง 2 จำนวนที่ต่างกัน จึงตอบ B`
      },
      {
        id: "q7",
        prompt: `สมการกำลังสองที่มีราก (คำตอบ) เป็น $2$ และ $5$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 - 7x + 10 = 0$" },
          { key: "B", text: "$x^2 + 7x + 10 = 0$" },
          { key: "C", text: "$x^2 - 7x - 10 = 0$" },
          { key: "D", text: "$x^2 - 3x + 10 = 0$" }
        ],
        answer: "A",
        explanation: `$x^2 - (2+5)x + (2 \\cdot 5) = x^2 - 7x + 10 = 0$ จึงตอบ A`
      },
      {
        id: "q8",
        prompt: `ผลบวกและผลคูณของรากของสมการ $x^2 - 8x + 12 = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "ผลบวก $8$, ผลคูณ $-12$" },
          { key: "B", text: "ผลบวก $-8$, ผลคูณ $12$" },
          { key: "C", text: "ผลบวก $8$, ผลคูณ $12$" },
          { key: "D", text: "ผลบวก $12$, ผลคูณ $8$" }
        ],
        answer: "C",
        explanation: `ผลบวกราก $= -\\dfrac{b}{a} = 8$, ผลคูณราก $= \\dfrac{c}{a} = 12$ จึงตอบ C`
      },

      // --- อสมการ (ข้อ 9-17) ---
      {
        id: "q9",
        prompt: `ผลเฉลยของอสมการ $x^2 - x - 12 > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 < x < 4$" },
          { key: "B", text: "$x > 4$ เท่านั้น" },
          { key: "C", text: "$x < 4$" },
          { key: "D", text: "$x < -3$ หรือ $x > 4$" }
        ],
        answer: "D",
        explanation: `$(x-4)(x+3) > 0 \\Rightarrow x < -3$ หรือ $x > 4$ จึงตอบ D`
      },
      {
        id: "q10",
        prompt: `ผลเฉลยของอสมการ $x^2 \\le 16$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\le 4$" },
          { key: "B", text: "$-4 \\le x \\le 4$" },
          { key: "C", text: "$x \\le -4$ หรือ $x \\ge 4$" },
          { key: "D", text: "$0 \\le x \\le 4$" }
        ],
        answer: "B",
        explanation: `$x^2 \\le 16 \\Rightarrow -4 \\le x \\le 4$ จึงตอบ B`
      },
      {
        id: "q11",
        prompt: `ผลเฉลยของอสมการ $x^2 + 2x + 1 > 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "จำนวนจริงทุกค่า ยกเว้น $x = -1$" },
          { key: "B", text: "$x > -1$" },
          { key: "C", text: "ไม่มีคำตอบ" },
          { key: "D", text: "$x < -1$" }
        ],
        answer: "A",
        explanation: `$(x+1)^2 > 0$ จริงเสมอ ยกเว้นเมื่อ $x = -1$ (ที่ทำให้เท่ากับ 0) จึงตอบ A`
      },
      {
        id: "q12",
        prompt: `ผลเฉลยของอสมการ $x^2 + 4 < 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "จำนวนจริงทุกค่า" },
          { key: "B", text: "$x > 0$" },
          { key: "C", text: "ไม่มีคำตอบ" },
          { key: "D", text: "$x < -2$" }
        ],
        answer: "C",
        explanation: `$x^2 \\ge 0$ เสมอ ทำให้ $x^2 + 4 \\ge 4 > 0$ ไม่มีทางน้อยกว่า 0 จึงไม่มีคำตอบ จึงตอบ C`
      },
      {
        id: "q13",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x + 2}{x - 3} \\ge 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-2 \\le x < 3$" },
          { key: "B", text: "$x > 3$ เท่านั้น" },
          { key: "C", text: "$x \\le -2$ เท่านั้น" },
          { key: "D", text: "$x \\le -2$ หรือ $x > 3$" }
        ],
        answer: "D",
        explanation: `จุดวิกฤต $x=-2$ (รวมได้) และ $x=3$ (ห้าม); เศษส่วน $\\ge 0$ เมื่อ $x \\le -2$ หรือ $x > 3$ จึงตอบ D`
      },
      {
        id: "q14",
        prompt: `ผลเฉลยของอสมการ $\\dfrac{x - 1}{x + 4} \\le 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\le 1$" },
          { key: "B", text: "$-4 < x \\le 1$" },
          { key: "C", text: "$-4 \\le x \\le 1$" },
          { key: "D", text: "$x < -4$ หรือ $x \\ge 1$" }
        ],
        answer: "B",
        explanation: `ตัวเศษเป็นศูนย์ที่ $x=1$ (รวมได้) ตัวส่วนเป็นศูนย์ที่ $x=-4$ (ห้าม); เศษส่วน $\\le 0$ เมื่อ $-4 < x \\le 1$ จึงตอบ B`
      },
      {
        id: "q15",
        prompt: `ผลเฉลยของระบบอสมการ $x > -1$ และ $x < 3$ พร้อมกัน คือข้อใด?`,
        choices: [
          { key: "A", text: "$-1 < x < 3$" },
          { key: "B", text: "$x < 3$" },
          { key: "C", text: "$x > -1$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "A",
        explanation: `ค่าที่สอดคล้องทั้งสองเงื่อนไขคือส่วนที่ซ้อนทับกัน: $-1 < x < 3$ จึงตอบ A`
      },
      {
        id: "q16",
        prompt: `ผลเฉลยของอสมการ $3x - 2 \\ge x + 4$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\le 3$" },
          { key: "B", text: "$x > 3$" },
          { key: "C", text: "$x \\ge 3$" },
          { key: "D", text: "$x \\ge 1$" }
        ],
        answer: "C",
        explanation: `$3x - x \\ge 4 + 2 \\Rightarrow 2x \\ge 6 \\Rightarrow x \\ge 3$ จึงตอบ C`
      },
      {
        id: "q17",
        prompt: `ผลเฉลยของอสมการ $-2 \\le x - 3 < 4$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-2 \\le x < 4$" },
          { key: "B", text: "$1 < x < 7$" },
          { key: "C", text: "$x < 7$" },
          { key: "D", text: "$1 \\le x < 7$" }
        ],
        answer: "D",
        explanation: `บวก 3 ตลอด: $1 \\le x < 7$ จึงตอบ D`
      },

      // --- ค่าสัมบูรณ์ (ข้อ 18-30) ---
      {
        id: "q18",
        prompt: `เซตคำตอบของสมการ $|3x - 6| = 9$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{5, 1\\}$" },
          { key: "B", text: "$\\{5, -1\\}$" },
          { key: "C", text: "$\\{-5, 1\\}$" },
          { key: "D", text: "$\\{3, -3\\}$" }
        ],
        answer: "B",
        explanation: `$3x - 6 = 9 \\Rightarrow x = 5$ หรือ $3x - 6 = -9 \\Rightarrow x = -1$ จึงตอบ B`
      },
      {
        id: "q19",
        prompt: `เซตคำตอบของสมการ $|x + 2| = |x - 4|$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{1\\}$" },
          { key: "B", text: "$\\{3\\}$" },
          { key: "C", text: "$\\{-1, 3\\}$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "A",
        explanation: `จุดที่ห่างจาก $-2$ และ $4$ เท่ากันคือจุดกึ่งกลาง $x = \\dfrac{-2 + 4}{2} = 1$ จึงตอบ A`
      },
      {
        id: "q20",
        prompt: `เซตคำตอบของสมการ $|2x + 1| = |x - 3|$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{-4\\}$" },
          { key: "B", text: "$\\left\\{\\dfrac{2}{3}\\right\\}$" },
          { key: "C", text: "$\\left\\{-4, \\dfrac{2}{3}\\right\\}$" },
          { key: "D", text: "$\\left\\{4, -\\dfrac{2}{3}\\right\\}$" }
        ],
        answer: "C",
        explanation: `$2x+1 = x-3 \\Rightarrow x = -4$ หรือ $2x+1 = -(x-3) \\Rightarrow 3x = 2 \\Rightarrow x = \\dfrac{2}{3}$ จึงตอบ C`
      },
      {
        id: "q21",
        prompt: `สมการ $|x| = x$ เป็นจริงเมื่อใด?`,
        choices: [
          { key: "A", text: "เมื่อ $x < 0$" },
          { key: "B", text: "เมื่อ $x = 0$ เท่านั้น" },
          { key: "C", text: "จำนวนจริงทุกค่า" },
          { key: "D", text: "เมื่อ $x \\ge 0$" }
        ],
        answer: "D",
        explanation: `$|x| = x$ ก็ต่อเมื่อ $x$ ไม่เป็นลบ คือ $x \\ge 0$ จึงตอบ D`
      },
      {
        id: "q22",
        prompt: `ผลเฉลยของอสมการ $|x - 3| < 5$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x < 8$" },
          { key: "B", text: "$-2 < x < 8$" },
          { key: "C", text: "$-8 < x < 2$" },
          { key: "D", text: "$x > -2$" }
        ],
        answer: "B",
        explanation: `$-5 < x - 3 < 5 \\Rightarrow -2 < x < 8$ จึงตอบ B`
      },
      {
        id: "q23",
        prompt: `ผลเฉลยของอสมการ $|2x - 1| \\le 7$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 \\le x \\le 4$" },
          { key: "B", text: "$-4 \\le x \\le 3$" },
          { key: "C", text: "$-3 \\le x \\le 7$" },
          { key: "D", text: "$x \\le 4$" }
        ],
        answer: "A",
        explanation: `$-7 \\le 2x - 1 \\le 7 \\Rightarrow -6 \\le 2x \\le 8 \\Rightarrow -3 \\le x \\le 4$ จึงตอบ A`
      },
      {
        id: "q24",
        prompt: `ผลเฉลยของอสมการ $|x + 5| > 3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-8 < x < -2$" },
          { key: "B", text: "$x > -2$ เท่านั้น" },
          { key: "C", text: "$x < -8$ หรือ $x > -2$" },
          { key: "D", text: "$x < -2$" }
        ],
        answer: "C",
        explanation: `$x + 5 < -3$ หรือ $x + 5 > 3 \\Rightarrow x < -8$ หรือ $x > -2$ จึงตอบ C`
      },
      {
        id: "q25",
        prompt: `ผลเฉลยของอสมการ $|3x| \\ge 12$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-4 \\le x \\le 4$" },
          { key: "B", text: "$x \\ge 4$ เท่านั้น" },
          { key: "C", text: "$x \\le 4$" },
          { key: "D", text: "$x \\le -4$ หรือ $x \\ge 4$" }
        ],
        answer: "D",
        explanation: `$3x \\le -12$ หรือ $3x \\ge 12 \\Rightarrow x \\le -4$ หรือ $x \\ge 4$ จึงตอบ D`
      },
      {
        id: "q26",
        prompt: `จำนวนเต็มที่สอดคล้องกับอสมการ $|x - 2| < 3$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$4$ จำนวน" },
          { key: "B", text: "$5$ จำนวน" },
          { key: "C", text: "$6$ จำนวน" },
          { key: "D", text: "$3$ จำนวน" }
        ],
        answer: "B",
        explanation: `$-1 < x < 5$ จำนวนเต็มคือ $0,1,2,3,4$ รวม 5 จำนวน จึงตอบ B`
      },
      {
        id: "q27",
        prompt: `เซตคำตอบของสมการ $|x| + 2 = 6$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{4, -4\\}$" },
          { key: "B", text: "$\\{4\\}$" },
          { key: "C", text: "$\\{6, -6\\}$" },
          { key: "D", text: "$\\{2, -2\\}$" }
        ],
        answer: "A",
        explanation: `$|x| = 4 \\Rightarrow x = \\pm 4$ จึงตอบ A`
      },
      {
        id: "q28",
        prompt: `เซตคำตอบของสมการ $|2x - 4| = 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$\\{2, -2\\}$" },
          { key: "B", text: "ไม่มีคำตอบ" },
          { key: "C", text: "$\\{2\\}$" },
          { key: "D", text: "$\\{0\\}$" }
        ],
        answer: "C",
        explanation: `ค่าสัมบูรณ์เป็นศูนย์เมื่อภายในเป็นศูนย์: $2x - 4 = 0 \\Rightarrow x = 2$ จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `ผลเฉลยของอสมการ $|x - 1| \\ge 0$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x = 1$ เท่านั้น" },
          { key: "B", text: "ไม่มีคำตอบ" },
          { key: "C", text: "$x \\ge 1$" },
          { key: "D", text: "จำนวนจริงทุกค่า" }
        ],
        answer: "D",
        explanation: `ค่าสัมบูรณ์ไม่เป็นลบเสมอ ($\\ge 0$) ดังนั้นอสมการเป็นจริงสำหรับทุกค่า $x$ จึงตอบ D`
      },
      {
        id: "q30",
        prompt: `ผลบวกของคำตอบทั้งหมดของสมการ $|2x + 3| = 7$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$-3$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$-2$" }
        ],
        answer: "B",
        explanation: `$2x+3 = 7 \\Rightarrow x = 2$ และ $2x+3 = -7 \\Rightarrow x = -5$; ผลบวก $= 2 + (-5) = -3$ จึงตอบ B`
      }
    ]
  },

  "quiz7": {
    meta: {
      courseId: "m4-term1-math",
      quizKey: "quiz7",
      title: "Quiz 7 : ตรรกศาสตร์เบื้องต้น (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- ประพจน์และตัวเชื่อม (ข้อ 1-7) ---
      {
        id: "q1",
        prompt: `"ประพจน์" (proposition) หมายถึงข้อใด`,
        choices: [
          { key: "A", text: "ประโยคคำถามที่ต้องการคำตอบ" },
          { key: "B", text: "ประโยคบอกเล่าหรือปฏิเสธที่บอกค่าความจริงได้ว่าเป็นจริงหรือเท็จอย่างใดอย่างหนึ่ง" },
          { key: "C", text: "ประโยคคำสั่งให้ทำตาม" },
          { key: "D", text: "ประโยคอุทานแสดงความรู้สึก" }
        ],
        answer: "B",
        explanation: `ประพจน์คือประโยคที่บอกค่าความจริงได้แน่นอนว่าจริงหรือเท็จเพียงอย่างใดอย่างหนึ่ง จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `ข้อใด <b>ไม่เป็น</b> ประพจน์`,
        choices: [
          { key: "A", text: "$2 + 3 = 5$" },
          { key: "B", text: "กรุงเทพมหานครเป็นเมืองหลวงของประเทศไทย" },
          { key: "C", text: "$7$ เป็นจำนวนคู่" },
          { key: "D", text: "กรุณาปิดประตูด้วย" }
        ],
        answer: "D",
        explanation: `"กรุณาปิดประตูด้วย" เป็นประโยคขอร้อง บอกค่าความจริงไม่ได้ จึงไม่เป็นประพจน์ จึงตอบ D`
      },
      {
        id: "q3",
        prompt: `ประพจน์ $p \\land q$ (p และ q) จะมีค่าความจริงเป็น "จริง" ในกรณีใด`,
        choices: [
          { key: "A", text: "เมื่อ $p$ เป็นจริงเพียงตัวเดียว" },
          { key: "B", text: "เมื่อ $q$ เป็นจริงเพียงตัวเดียว" },
          { key: "C", text: "เมื่อ $p$ และ $q$ เป็นจริงทั้งคู่" },
          { key: "D", text: "เมื่อ $p$ และ $q$ เป็นเท็จทั้งคู่" }
        ],
        answer: "C",
        explanation: `ตัวเชื่อม "และ" เป็นจริงเมื่อประพจน์ย่อยเป็นจริงทั้งคู่เท่านั้น จึงตอบ C`
      },
      {
        id: "q4",
        prompt: `ประพจน์ $p \\lor q$ (p หรือ q) จะมีค่าความจริงเป็น "เท็จ" ในกรณีใด`,
        choices: [
          { key: "A", text: "เมื่อ $p$ และ $q$ เป็นเท็จทั้งคู่" },
          { key: "B", text: "เมื่อ $p$ จริง และ $q$ เท็จ" },
          { key: "C", text: "เมื่อ $p$ เท็จ และ $q$ จริง" },
          { key: "D", text: "เมื่อ $p$ และ $q$ เป็นจริงทั้งคู่" }
        ],
        answer: "A",
        explanation: `ตัวเชื่อม "หรือ" เป็นเท็จเมื่อประพจน์ย่อยเป็นเท็จทั้งคู่เท่านั้น จึงตอบ A`
      },
      {
        id: "q5",
        prompt: `ประพจน์ $p \\to q$ (ถ้า p แล้ว q) จะมีค่าความจริงเป็น "เท็จ" ในกรณีใดเท่านั้น`,
        choices: [
          { key: "A", text: "$p$ เท็จ และ $q$ จริง" },
          { key: "B", text: "$p$ เท็จ และ $q$ เท็จ" },
          { key: "C", text: "$p$ จริง และ $q$ จริง" },
          { key: "D", text: "$p$ จริง และ $q$ เท็จ" }
        ],
        answer: "D",
        explanation: `ประพจน์เงื่อนไขเป็นเท็จเพียงกรณีเดียวคือ เหตุจริงแต่ผลเท็จ ($T \\to F$) จึงตอบ D`
      },
      {
        id: "q6",
        prompt: `ประพจน์ $p \\leftrightarrow q$ (p ก็ต่อเมื่อ q) จะมีค่าความจริงเป็น "จริง" ในกรณีใด`,
        choices: [
          { key: "A", text: "เมื่อ $p$ และ $q$ มีค่าความจริงต่างกัน" },
          { key: "B", text: "เมื่อ $p$ และ $q$ มีค่าความจริงเหมือนกัน (จริงทั้งคู่ หรือเท็จทั้งคู่)" },
          { key: "C", text: "เมื่อ $p$ เป็นจริงเท่านั้น" },
          { key: "D", text: "เมื่อ $q$ เป็นเท็จเท่านั้น" }
        ],
        answer: "B",
        explanation: `ประพจน์ "ก็ต่อเมื่อ" เป็นจริงเมื่อทั้งสองประพจน์มีค่าความจริงตรงกัน จึงตอบ B`
      },
      {
        id: "q7",
        prompt: `นิเสธ ($\\sim p$) ของประพจน์ $p$ มีความหมายอย่างไร`,
        choices: [
          { key: "A", text: "มีค่าความจริงตรงข้ามกับ $p$ (ถ้า $p$ จริง แล้ว $\\sim p$ เป็นเท็จ)" },
          { key: "B", text: "มีค่าความจริงเหมือนกับ $p$ เสมอ" },
          { key: "C", text: "เป็นจริงเสมอไม่ว่า $p$ จะเป็นอย่างไร" },
          { key: "D", text: "เป็นเท็จเสมอไม่ว่า $p$ จะเป็นอย่างไร" }
        ],
        answer: "A",
        explanation: `นิเสธคือการกลับค่าความจริงของประพจน์เดิม จึงตอบ A`
      },

      // --- การหาค่าความจริง (ข้อ 8-17) ---
      {
        id: "q8",
        prompt: `ถ้า $p$ เป็นจริง และ $q$ เป็นเท็จ ค่าความจริงของ $p \\land q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริง" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "เท็จ" },
          { key: "D", text: "เป็นได้ทั้งจริงและเท็จ" }
        ],
        answer: "C",
        explanation: `$T \\land F = F$ เพราะ "และ" ต้องจริงทั้งคู่จึงจะจริง จึงตอบ C`
      },
      {
        id: "q9",
        prompt: `ถ้า $p$ เป็นจริง และ $q$ เป็นเท็จ ค่าความจริงของ $p \\lor q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "เป็นได้ทั้งจริงและเท็จ" },
          { key: "D", text: "จริง" }
        ],
        answer: "D",
        explanation: `$T \\lor F = T$ เพราะ "หรือ" จริงเมื่อมีตัวใดตัวหนึ่งจริง จึงตอบ D`
      },
      {
        id: "q10",
        prompt: `ถ้า $p$ เป็นจริง และ $q$ เป็นเท็จ ค่าความจริงของ $p \\to q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "จริง" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "ขึ้นอยู่กับบริบท" }
        ],
        answer: "A",
        explanation: `$T \\to F = F$ เป็นกรณีเดียวที่ประพจน์เงื่อนไขเป็นเท็จ จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `ถ้า $p$ เป็นเท็จ และ $q$ เป็นเท็จ ค่าความจริงของ $p \\to q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "จริง" },
          { key: "D", text: "ขึ้นอยู่กับค่าของ $q$ เท่านั้น" }
        ],
        answer: "C",
        explanation: `$F \\to F = T$ เพราะประพจน์เงื่อนไขเป็นเท็จเฉพาะเมื่อ $T \\to F$ เท่านั้น จึงตอบ C`
      },
      {
        id: "q12",
        prompt: `ถ้า $p$ เป็นจริง และ $q$ เป็นเท็จ ค่าความจริงของ $p \\leftrightarrow q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริง" },
          { key: "B", text: "เท็จ" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "จริงเสมอไม่ว่ากรณีใด" }
        ],
        answer: "B",
        explanation: `$T \\leftrightarrow F = F$ เพราะค่าความจริงของทั้งสองไม่เหมือนกัน จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `ค่าความจริงของ $p \\land \\sim p$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จทุกกรณี" },
          { key: "B", text: "จริงทุกกรณี" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "จริงเมื่อ $p$ เป็นจริงเท่านั้น" }
        ],
        answer: "A",
        explanation: `$p$ กับ $\\sim p$ มีค่าความจริงตรงข้ามกันเสมอ เมื่อเชื่อมด้วย "และ" จึงเป็นเท็จทุกกรณี (ข้อขัดแย้ง) จึงตอบ A`
      },
      {
        id: "q14",
        prompt: `ตารางค่าความจริงของประพจน์ที่ประกอบด้วยตัวแปร 2 ตัว ($p, q$) จะมีทั้งหมดกี่กรณี`,
        choices: [
          { key: "A", text: "$2$ กรณี" },
          { key: "B", text: "$3$ กรณี" },
          { key: "C", text: "$8$ กรณี" },
          { key: "D", text: "$4$ กรณี" }
        ],
        answer: "D",
        explanation: `จำนวนกรณี $= 2^n = 2^2 = 4$ กรณี จึงตอบ D`
      },
      {
        id: "q15",
        prompt: `ตารางค่าความจริงของประพจน์ที่ประกอบด้วยตัวแปร 3 ตัว จะมีทั้งหมดกี่กรณี`,
        choices: [
          { key: "A", text: "$6$ กรณี" },
          { key: "B", text: "$8$ กรณี" },
          { key: "C", text: "$9$ กรณี" },
          { key: "D", text: "$3$ กรณี" }
        ],
        answer: "B",
        explanation: `จำนวนกรณี $= 2^3 = 8$ กรณี จึงตอบ B`
      },
      {
        id: "q16",
        prompt: `ถ้า $p$ เป็นจริง และ $q$ เป็นจริง ค่าความจริงของ $(p \\land q) \\to p$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "จริง" },
          { key: "D", text: "ขึ้นอยู่กับค่าของ $q$" }
        ],
        answer: "C",
        explanation: `$(T \\land T) = T$ แล้ว $T \\to T = T$ จึงตอบ C`
      },
      {
        id: "q17",
        prompt: `ถ้า $p$ เป็นเท็จ และ $q$ เป็นจริง ค่าความจริงของ $\\sim p \\land q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "ขึ้นอยู่กับบริบท" },
          { key: "D", text: "จริง" }
        ],
        answer: "D",
        explanation: `$p$ เท็จ ทำให้ $\\sim p$ เป็นจริง แล้ว $T \\land T = T$ จึงตอบ D`
      },

      // --- นิเสธ บทกลับ และแย้งสลับที่ (ข้อ 18-23) ---
      {
        id: "q18",
        prompt: `นิเสธของประพจน์ "$2$ เป็นจำนวนคู่" คือข้อใด`,
        choices: [
          { key: "A", text: "$2$ ไม่เป็นจำนวนคู่" },
          { key: "B", text: "$2$ เป็นจำนวนคี่ และเป็นจำนวนคู่" },
          { key: "C", text: "$3$ เป็นจำนวนคู่" },
          { key: "D", text: "$2$ เป็นจำนวนเฉพาะ" }
        ],
        answer: "A",
        explanation: `นิเสธคือการปฏิเสธข้อความเดิม จึงเป็น "$2$ ไม่เป็นจำนวนคู่" จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `บทกลับ (converse) ของประพจน์ $p \\to q$ คือข้อใด`,
        choices: [
          { key: "A", text: "$\\sim p \\to \\sim q$" },
          { key: "B", text: "$q \\to p$" },
          { key: "C", text: "$\\sim q \\to \\sim p$" },
          { key: "D", text: "$p \\land \\sim q$" }
        ],
        answer: "B",
        explanation: `บทกลับคือการสลับเหตุกับผล ได้ $q \\to p$ จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `ประพจน์ "แย้งสลับที่" (contrapositive) ของ $p \\to q$ คือข้อใด`,
        choices: [
          { key: "A", text: "$q \\to p$" },
          { key: "B", text: "$\\sim p \\to \\sim q$" },
          { key: "C", text: "$\\sim q \\to \\sim p$" },
          { key: "D", text: "$p \\lor q$" }
        ],
        answer: "C",
        explanation: `แย้งสลับที่คือสลับที่แล้วใส่นิเสธทั้งสองข้าง ได้ $\\sim q \\to \\sim p$ ซึ่งสมมูลกับ $p \\to q$ จึงตอบ C`
      },
      {
        id: "q21",
        prompt: `นิเสธของประพจน์ $p \\to q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$p \\land \\sim q$" },
          { key: "B", text: "$\\sim p \\land q$" },
          { key: "C", text: "$q \\to p$" },
          { key: "D", text: "$\\sim p \\lor q$" }
        ],
        answer: "A",
        explanation: `$\\sim(p \\to q) \\equiv p \\land \\sim q$ (เหตุจริงแต่ผลเท็จ) จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `ประพจน์ $p \\to q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$p \\land q$" },
          { key: "B", text: "$q \\to p$" },
          { key: "C", text: "$\\sim p \\land q$" },
          { key: "D", text: "$\\sim p \\lor q$" }
        ],
        answer: "D",
        explanation: `$p \\to q \\equiv \\sim p \\lor q$ จึงตอบ D`
      },
      {
        id: "q23",
        prompt: `จากประโยค "ถ้าฝนตก แล้วถนนเปียก" บทกลับของประโยคนี้คือข้อใด`,
        choices: [
          { key: "A", text: "ถ้าฝนไม่ตก แล้วถนนไม่เปียก" },
          { key: "B", text: "ถ้าถนนไม่เปียก แล้วฝนไม่ตก" },
          { key: "C", text: "ถ้าถนนเปียก แล้วฝนตก" },
          { key: "D", text: "ฝนตกและถนนไม่เปียก" }
        ],
        answer: "C",
        explanation: `บทกลับคือสลับเหตุกับผล จึงได้ "ถ้าถนนเปียก แล้วฝนตก" จึงตอบ C`
      },

      // --- สัจนิรันดร์ (ข้อ 24-26) ---
      {
        id: "q24",
        prompt: `"สัจนิรันดร์" (tautology) หมายถึงข้อใด`,
        choices: [
          { key: "A", text: "ประพจน์ที่มีค่าความจริงเป็นเท็จทุกกรณี" },
          { key: "B", text: "ประพจน์ที่มีค่าความจริงเป็นจริงทุกกรณี" },
          { key: "C", text: "ประพจน์ที่มีทั้งกรณีจริงและกรณีเท็จ" },
          { key: "D", text: "ประพจน์ที่หาค่าความจริงไม่ได้" }
        ],
        answer: "B",
        explanation: `สัจนิรันดร์คือประพจน์ที่เป็นจริงในทุกกรณีของตารางค่าความจริง จึงตอบ B`
      },
      {
        id: "q25",
        prompt: `ข้อใดเป็นสัจนิรันดร์`,
        choices: [
          { key: "A", text: "$p \\lor \\sim p$" },
          { key: "B", text: "$p \\land \\sim p$" },
          { key: "C", text: "$p \\land q$" },
          { key: "D", text: "$p \\to q$" }
        ],
        answer: "A",
        explanation: `$p \\lor \\sim p$ เป็นจริงเสมอ เพราะไม่ว่า $p$ จริงหรือเท็จ จะมีตัวหนึ่งเป็นจริงเสมอ จึงตอบ A`
      },
      {
        id: "q26",
        prompt: `ประพจน์ $p \\land \\sim p$ มีค่าความจริงเป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริงทุกกรณี (สัจนิรันดร์)" },
          { key: "B", text: "จริงบางกรณี" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "เท็จทุกกรณี (ข้อขัดแย้ง)" }
        ],
        answer: "D",
        explanation: `$p$ และ $\\sim p$ ไม่มีทางเป็นจริงพร้อมกัน จึงเป็นเท็จทุกกรณี เรียกว่าข้อขัดแย้ง จึงตอบ D`
      },

      // --- กฎเดอมอร์แกน (ข้อ 27-30) ---
      {
        id: "q27",
        prompt: `ตามกฎเดอมอร์แกน $\\sim(p \\land q)$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$\\sim p \\land \\sim q$" },
          { key: "B", text: "$\\sim p \\lor \\sim q$" },
          { key: "C", text: "$p \\lor q$" },
          { key: "D", text: "$p \\land q$" }
        ],
        answer: "B",
        explanation: `กฎเดอมอร์แกน: $\\sim(p \\land q) \\equiv \\sim p \\lor \\sim q$ (กระจายนิเสธแล้วเปลี่ยน "และ" เป็น "หรือ") จึงตอบ B`
      },
      {
        id: "q28",
        prompt: `ตามกฎเดอมอร์แกน $\\sim(p \\lor q)$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$\\sim p \\lor \\sim q$" },
          { key: "B", text: "$p \\land q$" },
          { key: "C", text: "$\\sim p \\land \\sim q$" },
          { key: "D", text: "$p \\to q$" }
        ],
        answer: "C",
        explanation: `กฎเดอมอร์แกน: $\\sim(p \\lor q) \\equiv \\sim p \\land \\sim q$ จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `นิเสธของข้อความ "ฉันชอบคณิตศาสตร์ และ ฉันชอบฟิสิกส์" คือข้อใด`,
        choices: [
          { key: "A", text: "ฉันไม่ชอบคณิตศาสตร์ หรือ ฉันไม่ชอบฟิสิกส์" },
          { key: "B", text: "ฉันไม่ชอบคณิตศาสตร์ และ ฉันไม่ชอบฟิสิกส์" },
          { key: "C", text: "ฉันชอบคณิตศาสตร์ หรือ ฉันชอบฟิสิกส์" },
          { key: "D", text: "ฉันชอบคณิตศาสตร์ แต่ไม่ชอบฟิสิกส์" }
        ],
        answer: "A",
        explanation: `ใช้เดอมอร์แกน $\\sim(p \\land q) \\equiv \\sim p \\lor \\sim q$ จึงได้ "ไม่ชอบคณิตศาสตร์ หรือ ไม่ชอบฟิสิกส์" จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `นิเสธของข้อความ "$x$ เป็นจำนวนคู่ หรือ $x$ เป็นจำนวนเฉพาะ" คือข้อใด`,
        choices: [
          { key: "A", text: "$x$ ไม่เป็นจำนวนคู่ หรือ $x$ ไม่เป็นจำนวนเฉพาะ" },
          { key: "B", text: "$x$ เป็นจำนวนคู่ และ $x$ เป็นจำนวนเฉพาะ" },
          { key: "C", text: "$x$ ไม่เป็นจำนวนคู่ และ $x$ ไม่เป็นจำนวนเฉพาะ" },
          { key: "D", text: "$x$ เป็นจำนวนคี่ หรือ $x$ ไม่เป็นจำนวนเฉพาะ" }
        ],
        answer: "C",
        explanation: `ใช้เดอมอร์แกน $\\sim(p \\lor q) \\equiv \\sim p \\land \\sim q$ จึงได้ "ไม่เป็นจำนวนคู่ และ ไม่เป็นจำนวนเฉพาะ" จึงตอบ C`
      }
    ]
  },

  "quiz8": {
    meta: {
      courseId: "m4-term1-math",
      quizKey: "quiz8",
      title: "Quiz 8 : ตรรกศาสตร์ — ตัวเชื่อม นิเสธ สัจนิรันดร์ และการสมมูล (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // ===== ตัวเชื่อม และ/หรือ/ถ้า...แล้ว/ก็ต่อเมื่อ (ข้อ 1-8) =====
      {
        id: "q1",
        prompt: `ถ้า $p$ เป็นจริง, $q$ เป็นเท็จ และ $r$ เป็นจริง ค่าความจริงของ $(p \\land q) \\lor r$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "จริง" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "ขึ้นอยู่กับค่าของ $q$ เท่านั้น" }
        ],
        answer: "B",
        explanation: `$(T \\land F) = F$ แล้ว $F \\lor T = T$ จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `ถ้า $p$ เป็นเท็จ และ $q$ เป็นจริง ค่าความจริงของ $(p \\to q) \\land (q \\to p)$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริง" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "เท็จ" },
          { key: "D", text: "จริงเสมอไม่ว่ากรณีใด" }
        ],
        answer: "C",
        explanation: `$p \\to q = F \\to T = T$ แต่ $q \\to p = T \\to F = F$; ดังนั้น $T \\land F = F$ จึงตอบ C`
      },
      {
        id: "q3",
        prompt: `ประพจน์ $p \\leftrightarrow q$ จะมีค่าความจริงเป็นเท็จในกรณีใด`,
        choices: [
          { key: "A", text: "เมื่อ $p$ และ $q$ เป็นจริงทั้งคู่" },
          { key: "B", text: "เมื่อ $p$ และ $q$ เป็นเท็จทั้งคู่" },
          { key: "C", text: "ไม่มีกรณีใดที่เป็นเท็จ" },
          { key: "D", text: "เมื่อ $p$ และ $q$ มีค่าความจริงต่างกัน" }
        ],
        answer: "D",
        explanation: `"ก็ต่อเมื่อ" เป็นจริงเมื่อค่าความจริงเหมือนกัน จึงเป็นเท็จเมื่อค่าความจริงต่างกัน จึงตอบ D`
      },
      {
        id: "q4",
        prompt: `ถ้า $p \\to q$ มีค่าความจริงเป็นเท็จ แล้วค่าความจริงของ $p$ และ $q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "$p$ เป็นจริง และ $q$ เป็นเท็จ" },
          { key: "B", text: "$p$ เป็นเท็จ และ $q$ เป็นจริง" },
          { key: "C", text: "$p$ และ $q$ เป็นเท็จทั้งคู่" },
          { key: "D", text: "$p$ และ $q$ เป็นจริงทั้งคู่" }
        ],
        answer: "A",
        explanation: `ประพจน์เงื่อนไขเป็นเท็จกรณีเดียวคือ $T \\to F$ ดังนั้น $p$ จริง $q$ เท็จ จึงตอบ A`
      },
      {
        id: "q5",
        prompt: `ถ้า $p \\lor q$ เป็นเท็จ แล้วค่าความจริงของ $\\sim p \\land \\sim q$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จ" },
          { key: "B", text: "หาค่าความจริงไม่ได้" },
          { key: "C", text: "จริง" },
          { key: "D", text: "ขึ้นอยู่กับ $p$ เท่านั้น" }
        ],
        answer: "C",
        explanation: `$p \\lor q$ เป็นเท็จได้เมื่อ $p, q$ เท็จทั้งคู่ ดังนั้น $\\sim p, \\sim q$ จริงทั้งคู่ ทำให้ $\\sim p \\land \\sim q$ เป็นจริง จึงตอบ C`
      },
      {
        id: "q6",
        prompt: `ถ้า $p$ เป็นจริง, $q$ เป็นจริง และ $r$ เป็นเท็จ ค่าความจริงของ $p \\to (q \\land r)$ เป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริง" },
          { key: "B", text: "เท็จ" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "จริงเสมอ เพราะ $p$ เป็นจริง" }
        ],
        answer: "B",
        explanation: `$q \\land r = T \\land F = F$; แล้ว $p \\to F = T \\to F = F$ จึงตอบ B`
      },
      {
        id: "q7",
        prompt: `ข้อความ "$x > 0$ ก็ต่อเมื่อ $x$ เป็นจำนวนบวก" ใช้ตัวเชื่อมใด และมีค่าความจริงอย่างไร`,
        choices: [
          { key: "A", text: "ตัวเชื่อม “และ” มีค่าความจริงเป็นเท็จ" },
          { key: "B", text: "ตัวเชื่อม “หรือ” มีค่าความจริงเป็นจริง" },
          { key: "C", text: "ตัวเชื่อม “ถ้า...แล้ว” มีค่าความจริงเป็นเท็จ" },
          { key: "D", text: "ตัวเชื่อม “ก็ต่อเมื่อ” มีค่าความจริงเป็นจริง เพราะทั้งสองข้อความสมมูลกัน" }
        ],
        answer: "D",
        explanation: `"ก็ต่อเมื่อ" คือ $\\leftrightarrow$; ทั้งสองข้อความมีค่าความจริงตรงกันเสมอ ประพจน์นี้จึงเป็นจริง จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `กำหนดให้ $p$ แทน "ฝนตก" และ $q$ แทน "ถนนเปียก" ข้อความ "ฝนตกแต่ถนนไม่เปียก" เขียนเป็นสัญลักษณ์ได้ตามข้อใด`,
        choices: [
          { key: "A", text: "$p \\to \\sim q$" },
          { key: "B", text: "$p \\land \\sim q$" },
          { key: "C", text: "$\\sim p \\land q$" },
          { key: "D", text: "$p \\lor \\sim q$" }
        ],
        answer: "B",
        explanation: `คำว่า "แต่" มีความหมายเชิงตรรกศาสตร์เหมือน "และ" จึงได้ $p \\land \\sim q$ จึงตอบ B`
      },

      // ===== นิเสธ บทกลับ แย้งสลับที่ สัจนิรันดร์ ข้อขัดแย้ง (ข้อ 9-20) =====
      {
        id: "q9",
        prompt: `นิเสธของประพจน์ $p \\land q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$\\sim p \\land \\sim q$" },
          { key: "B", text: "$p \\lor q$" },
          { key: "C", text: "$\\sim p \\lor \\sim q$" },
          { key: "D", text: "$p \\to q$" }
        ],
        answer: "C",
        explanation: `กฎเดอมอร์แกน $\\sim(p \\land q) \\equiv \\sim p \\lor \\sim q$ จึงตอบ C`
      },
      {
        id: "q10",
        prompt: `นิเสธของประพจน์ $p \\leftrightarrow q$ มีค่าความจริงเป็นจริงในกรณีใด`,
        choices: [
          { key: "A", text: "เมื่อ $p$ และ $q$ มีค่าความจริงต่างกัน" },
          { key: "B", text: "เมื่อ $p$ และ $q$ มีค่าความจริงเหมือนกัน" },
          { key: "C", text: "จริงทุกกรณี" },
          { key: "D", text: "เท็จทุกกรณี" }
        ],
        answer: "A",
        explanation: `$p \\leftrightarrow q$ จริงเมื่อค่าความจริงเหมือนกัน ดังนั้นนิเสธจึงจริงเมื่อค่าความจริงต่างกัน จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `บทกลับ (converse) ของ "ถ้า $x$ เป็นจำนวนคู่ แล้ว $x$ หารด้วย 2 ลงตัว" คือข้อใด`,
        choices: [
          { key: "A", text: "ถ้า $x$ ไม่เป็นจำนวนคู่ แล้ว $x$ หารด้วย 2 ไม่ลงตัว" },
          { key: "B", text: "ถ้า $x$ หารด้วย 2 ไม่ลงตัว แล้ว $x$ ไม่เป็นจำนวนคู่" },
          { key: "C", text: "$x$ เป็นจำนวนคู่ และ $x$ หารด้วย 2 ไม่ลงตัว" },
          { key: "D", text: "ถ้า $x$ หารด้วย 2 ลงตัว แล้ว $x$ เป็นจำนวนคู่" }
        ],
        answer: "D",
        explanation: `บทกลับของ $p \\to q$ คือ $q \\to p$ (สลับเหตุกับผล) จึงตอบ D`
      },
      {
        id: "q12",
        prompt: `ข้อใดคือ "แย้งสลับที่" (contrapositive) ของ $p \\to q$ และมีสมบัติอย่างไร`,
        choices: [
          { key: "A", text: "$q \\to p$ และสมมูลกับ $p \\to q$" },
          { key: "B", text: "$\\sim q \\to \\sim p$ และสมมูลกับ $p \\to q$" },
          { key: "C", text: "$\\sim p \\to \\sim q$ และสมมูลกับ $p \\to q$" },
          { key: "D", text: "$p \\land \\sim q$ และเป็นนิเสธของ $p \\to q$" }
        ],
        answer: "B",
        explanation: `แย้งสลับที่คือ $\\sim q \\to \\sim p$ ซึ่งสมมูลกับ $p \\to q$ เสมอ (ต่างจากบทกลับที่ไม่สมมูล) จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `นิเสธของ "ถ้าเรียนหนัก แล้วสอบผ่าน" คือข้อใด`,
        choices: [
          { key: "A", text: "เรียนหนัก และ สอบไม่ผ่าน" },
          { key: "B", text: "ถ้าไม่เรียนหนัก แล้วสอบไม่ผ่าน" },
          { key: "C", text: "ถ้าสอบผ่าน แล้วเรียนหนัก" },
          { key: "D", text: "ไม่เรียนหนัก หรือ สอบผ่าน" }
        ],
        answer: "A",
        explanation: `$\\sim(p \\to q) \\equiv p \\land \\sim q$ คือ "เรียนหนัก แต่สอบไม่ผ่าน" จึงตอบ A`
      },
      {
        id: "q14",
        prompt: `"สัจนิรันดร์" (tautology) และ "ข้อขัดแย้ง" (contradiction) ต่างกันอย่างไร`,
        choices: [
          { key: "A", text: "สัจนิรันดร์เป็นเท็จทุกกรณี ข้อขัดแย้งเป็นจริงทุกกรณี" },
          { key: "B", text: "ทั้งสองอย่างมีทั้งกรณีจริงและเท็จ" },
          { key: "C", text: "สัจนิรันดร์เป็นจริงทุกกรณี ส่วนข้อขัดแย้งเป็นเท็จทุกกรณี" },
          { key: "D", text: "ทั้งสองอย่างหาค่าความจริงไม่ได้" }
        ],
        answer: "C",
        explanation: `สัจนิรันดร์จริงทุกกรณีในตารางค่าความจริง ส่วนข้อขัดแย้งเท็จทุกกรณี จึงตอบ C`
      },
      {
        id: "q15",
        prompt: `ข้อใด <b>ไม่เป็น</b> สัจนิรันดร์`,
        choices: [
          { key: "A", text: "$p \\lor \\sim p$" },
          { key: "B", text: "$p \\to p$" },
          { key: "C", text: "$(p \\land q) \\to p$" },
          { key: "D", text: "$p \\to (p \\land q)$" }
        ],
        answer: "D",
        explanation: `ถ้า $p$ จริงแต่ $q$ เท็จ จะได้ $T \\to F = F$ จึงไม่ใช่สัจนิรันดร์ (ส่วนข้ออื่นเป็นจริงทุกกรณี) จึงตอบ D`
      },
      {
        id: "q16",
        prompt: `ประพจน์ $(p \\land \\sim p) \\to q$ มีค่าความจริงเป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จทุกกรณี" },
          { key: "B", text: "จริงทุกกรณี เพราะเหตุเป็นเท็จเสมอ" },
          { key: "C", text: "จริงเมื่อ $q$ เป็นจริงเท่านั้น" },
          { key: "D", text: "หาค่าความจริงไม่ได้" }
        ],
        answer: "B",
        explanation: `$p \\land \\sim p$ เป็นเท็จเสมอ และ $F \\to$ อะไรก็ตาม เป็นจริงเสมอ ประพจน์นี้จึงเป็นสัจนิรันดร์ จึงตอบ B`
      },
      {
        id: "q17",
        prompt: `ข้อใดเป็น "ข้อขัดแย้ง" (contradiction)`,
        choices: [
          { key: "A", text: "$p \\leftrightarrow \\sim p$" },
          { key: "B", text: "$p \\lor \\sim p$" },
          { key: "C", text: "$p \\to q$" },
          { key: "D", text: "$p \\land q$" }
        ],
        answer: "A",
        explanation: `$p$ กับ $\\sim p$ มีค่าความจริงตรงข้ามเสมอ ประพจน์ "ก็ต่อเมื่อ" จึงเป็นเท็จทุกกรณี เป็นข้อขัดแย้ง จึงตอบ A`
      },
      {
        id: "q18",
        prompt: `ถ้า $A$ เป็นสัจนิรันดร์ แล้วนิเสธของ $A$ เป็นอะไร`,
        choices: [
          { key: "A", text: "สัจนิรันดร์เช่นเดียวกัน" },
          { key: "B", text: "ประพจน์ที่มีทั้งกรณีจริงและเท็จ" },
          { key: "C", text: "ข้อขัดแย้ง (เท็จทุกกรณี)" },
          { key: "D", text: "หาค่าความจริงไม่ได้" }
        ],
        answer: "C",
        explanation: `นิเสธกลับค่าความจริงทุกกรณี เมื่อเดิมจริงทุกกรณี นิเสธจึงเท็จทุกกรณี คือข้อขัดแย้ง จึงตอบ C`
      },
      {
        id: "q19",
        prompt: `นิเสธของข้อความ "จำนวนเต็มทุกจำนวนเป็นจำนวนคู่" คือข้อใด`,
        choices: [
          { key: "A", text: "จำนวนเต็มทุกจำนวนไม่เป็นจำนวนคู่" },
          { key: "B", text: "มีจำนวนเต็มบางจำนวนที่ไม่เป็นจำนวนคู่" },
          { key: "C", text: "ไม่มีจำนวนเต็มใดเป็นจำนวนคู่" },
          { key: "D", text: "จำนวนเต็มทุกจำนวนเป็นจำนวนคี่" }
        ],
        answer: "B",
        explanation: `นิเสธของ "ทุก ๆ ... เป็น P" คือ "มีบาง ... ที่ไม่เป็น P" จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `ประพจน์ $(p \\to q) \\land (p \\land \\sim q)$ มีค่าความจริงเป็นอย่างไร`,
        choices: [
          { key: "A", text: "จริงทุกกรณี" },
          { key: "B", text: "จริงเมื่อ $p$ เป็นจริง" },
          { key: "C", text: "หาค่าความจริงไม่ได้" },
          { key: "D", text: "เท็จทุกกรณี (เป็นข้อขัดแย้ง)" }
        ],
        answer: "D",
        explanation: `$p \\land \\sim q$ คือนิเสธของ $p \\to q$ การนำประพจน์กับนิเสธมาเชื่อมด้วย "และ" จึงเป็นเท็จทุกกรณี จึงตอบ D`
      },

      // ===== การสมมูล (ข้อ 21-30) =====
      {
        id: "q21",
        prompt: `ประพจน์สองประพจน์ "สมมูลกัน" หมายความว่าอย่างไร`,
        choices: [
          { key: "A", text: "มีค่าความจริงตรงกันทุกกรณีในตารางค่าความจริง" },
          { key: "B", text: "มีจำนวนตัวแปรเท่ากัน" },
          { key: "C", text: "เป็นจริงทั้งคู่ในบางกรณี" },
          { key: "D", text: "มีตัวเชื่อมชนิดเดียวกัน" }
        ],
        answer: "A",
        explanation: `$A \\equiv B$ เมื่อ $A$ และ $B$ มีค่าความจริงตรงกันทุกกรณี (เทียบเท่ากับ $A \\leftrightarrow B$ เป็นสัจนิรันดร์) จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `$p \\to q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$p \\land \\sim q$" },
          { key: "B", text: "$\\sim p \\lor q$" },
          { key: "C", text: "$p \\lor \\sim q$" },
          { key: "D", text: "$q \\to p$" }
        ],
        answer: "B",
        explanation: `$p \\to q \\equiv \\sim p \\lor q$ (ตรวจได้จากตารางค่าความจริงทั้ง 4 กรณี) จึงตอบ B`
      },
      {
        id: "q23",
        prompt: `$\\sim(\\sim p)$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$\\sim p$" },
          { key: "B", text: "$p \\land \\sim p$" },
          { key: "C", text: "$p$" },
          { key: "D", text: "$p \\lor \\sim p$" }
        ],
        answer: "C",
        explanation: `นิเสธซ้อนนิเสธจะกลับค่าความจริง 2 ครั้ง ได้ค่าเดิม ดังนั้น $\\sim(\\sim p) \\equiv p$ จึงตอบ C`
      },
      {
        id: "q24",
        prompt: `$p \\leftrightarrow q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$(p \\to q) \\lor (q \\to p)$" },
          { key: "B", text: "$p \\land q$" },
          { key: "C", text: "$(p \\to q) \\to (q \\to p)$" },
          { key: "D", text: "$(p \\to q) \\land (q \\to p)$" }
        ],
        answer: "D",
        explanation: `"ก็ต่อเมื่อ" คือเงื่อนไขสองทาง จึงสมมูลกับ $(p \\to q) \\land (q \\to p)$ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `$\\sim(p \\to q)$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$p \\land \\sim q$" },
          { key: "B", text: "$\\sim p \\land q$" },
          { key: "C", text: "$\\sim p \\lor q$" },
          { key: "D", text: "$q \\to p$" }
        ],
        answer: "A",
        explanation: `$p \\to q$ เป็นเท็จเฉพาะเมื่อ $p$ จริงและ $q$ เท็จ นิเสธจึงสมมูลกับ $p \\land \\sim q$ จึงตอบ A`
      },
      {
        id: "q26",
        prompt: `ข้อใด <b>ไม่</b> สมมูลกับ $p \\to q$`,
        choices: [
          { key: "A", text: "$\\sim q \\to \\sim p$" },
          { key: "B", text: "$\\sim p \\lor q$" },
          { key: "C", text: "$q \\to p$" },
          { key: "D", text: "$\\sim(p \\land \\sim q)$" }
        ],
        answer: "C",
        explanation: `$q \\to p$ คือบทกลับ ซึ่งไม่สมมูลกับ $p \\to q$ (เช่น $p$ เท็จ $q$ จริง จะได้ค่าต่างกัน) ส่วนข้ออื่นสมมูลทั้งหมด จึงตอบ C`
      },
      {
        id: "q27",
        prompt: `$p \\land (q \\lor r)$ สมมูลกับข้อใด (กฎการแจกแจง)`,
        choices: [
          { key: "A", text: "$(p \\land q) \\land (p \\land r)$" },
          { key: "B", text: "$(p \\lor q) \\land (p \\lor r)$" },
          { key: "C", text: "$p \\lor (q \\land r)$" },
          { key: "D", text: "$(p \\land q) \\lor (p \\land r)$" }
        ],
        answer: "D",
        explanation: `กฎการแจกแจง: $p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$ จึงตอบ D`
      },
      {
        id: "q28",
        prompt: `ข้อความ "ถ้าไม่ตั้งใจเรียน แล้วจะสอบตก" สมมูลกับข้อความใด`,
        choices: [
          { key: "A", text: "ถ้าสอบไม่ตก แล้วตั้งใจเรียน" },
          { key: "B", text: "ถ้าสอบตก แล้วไม่ตั้งใจเรียน" },
          { key: "C", text: "ไม่ตั้งใจเรียน และ สอบไม่ตก" },
          { key: "D", text: "ถ้าตั้งใจเรียน แล้วจะสอบไม่ตก" }
        ],
        answer: "A",
        explanation: `ใช้แย้งสลับที่ $\\sim p \\to q \\equiv \\sim q \\to p$; ที่นี่ได้ "ถ้าสอบไม่ตก แล้วตั้งใจเรียน" จึงตอบ A`
      },
      {
        id: "q29",
        prompt: `$\\sim p \\to \\sim q$ สมมูลกับข้อใด`,
        choices: [
          { key: "A", text: "$p \\to q$" },
          { key: "B", text: "$q \\to p$" },
          { key: "C", text: "$\\sim p \\land q$" },
          { key: "D", text: "$p \\land \\sim q$" }
        ],
        answer: "B",
        explanation: `แย้งสลับที่ของ $\\sim p \\to \\sim q$ คือ $q \\to p$ ซึ่งสมมูลกัน (สังเกตว่าไม่สมมูลกับ $p \\to q$) จึงตอบ B`
      },
      {
        id: "q30",
        prompt: `ถ้า $A \\equiv B$ (สมมูลกัน) แล้วประพจน์ $A \\leftrightarrow B$ มีค่าความจริงเป็นอย่างไร`,
        choices: [
          { key: "A", text: "เท็จทุกกรณี" },
          { key: "B", text: "มีทั้งกรณีจริงและเท็จ" },
          { key: "C", text: "จริงทุกกรณี (เป็นสัจนิรันดร์)" },
          { key: "D", text: "หาค่าความจริงไม่ได้" }
        ],
        answer: "C",
        explanation: `เมื่อ $A$ และ $B$ มีค่าความจริงตรงกันทุกกรณี ประพจน์ $A \\leftrightarrow B$ จึงเป็นจริงทุกกรณี คือเป็นสัจนิรันดร์ จึงตอบ C`
      }
    ]
  }
};
