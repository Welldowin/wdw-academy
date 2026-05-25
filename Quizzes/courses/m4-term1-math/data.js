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
      prompt: `กำหนดให้ $A = \\{ x \\in \\mathbb{I} \\mid -3 < x \\le 2 \\}$ ข้อใดเขียนเซต $A$ แบบแจกแจงสมาชิกได้ถูกต้อง`,
      choices: [
        { key: "A", text: "$\\{-3, -2, -1, 0, 1, 2\\}$" },
        { key: "B", text: "$\\{-2, -1, 0, 1, 2\\}$" },
        { key: "C", text: "$\\{-3, -2, -1, 0, 1\\}$" },
        { key: "D", text: "$\\{-2, -1, 1, 2\\}$" }
      ],
      answer: "B"
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
      answer: "C"
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
      answer: "A"
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
      answer: "C"
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
      answer: "D"
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
      answer: "B"
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
      answer: "B"
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
      answer: "B"
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
      answer: "C"
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
      answer: "B"
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
      answer: "C"
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
      answer: "B"
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
      answer: "B"
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
      answer: "B"
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
      answer: "B"
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
      answer: "C"
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
      answer: "A"
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
      answer: "B"
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
      answer: "C"
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
      answer: "B"
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
      answer: "B"
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
      answer: "B"
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
      answer: "C"
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
      answer: "B"
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
      answer: "C"
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
      answer: "A"
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
      answer: "B"
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
      answer: "B"
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
      answer: "C"
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
  }
};
