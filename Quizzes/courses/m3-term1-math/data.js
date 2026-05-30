window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
  meta: {
    courseId: "m3-term1-math",
    quizKey: "quiz1",
    title: "Quiz 1 : การแยกตัวประกอบของพหุนาม (ดึงตัวร่วมและผลต่างกำลังสอง) (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    // --- การดึงตัวร่วม (ข้อ 1-15) ---
    {
      id: "q1",
      prompt: `ข้อใดคือการแยกตัวประกอบของพหุนาม $2x + 6$ ที่ถูกต้องที่สุด?`,
      choices: [
        { key: "A", text: "$2(x + 3)$" },
        { key: "B", text: "$2(x + 6)$" },
        { key: "C", text: "$x(2 + 6)$" },
        { key: "D", text: "$2(x - 3)$" }
      ],
      answer: "A"
    },
    {
      id: "q2",
      prompt: `จงแยกตัวประกอบของ $5x - 15$`,
      choices: [
        { key: "A", text: "$5(x + 3)$" },
        { key: "B", text: "$5(x - 15)$" },
        { key: "C", text: "$5(x - 3)$" },
        { key: "D", text: "$x(5 - 15)$" }
      ],
      answer: "C"
    },
    {
      id: "q3",
      prompt: `พหุนาม $x^2 + 4x$ แยกตัวประกอบได้ตามข้อใด?`,
      choices: [
        { key: "A", text: "$x(x + 4x)$" },
        { key: "B", text: "$x(x + 4)$" },
        { key: "C", text: "$4(x^2 + x)$" },
        { key: "D", text: "$x^2(1 + 4x)$" }
      ],
      answer: "B"
    },
    {
      id: "q4",
      prompt: `ข้อใดคือผลการแยกตัวประกอบของ $3x^2 - 9x$ ?`,
      choices: [
        { key: "A", text: "$3x(x - 3)$" },
        { key: "B", text: "$3(x^2 - 3x)$" },
        { key: "C", text: "$x(3x - 9)$" },
        { key: "D", text: "$3x(x - 9)$" }
      ],
      answer: "A"
    },
    {
      id: "q5",
      prompt: `จงแยกตัวประกอบของ $8x^2 + 12x$`,
      choices: [
        { key: "A", text: "$2x(4x + 6)$" },
        { key: "B", text: "$4x(2x + 3)$" },
        { key: "C", text: "$4(2x^2 + 3x)$" },
        { key: "D", text: "$8x(x + 12)$" }
      ],
      answer: "B"
    },
    {
      id: "q6",
      prompt: `พหุนาม $14x^3 - 7x^2$ แยกตัวประกอบได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$7x(2x^2 - x)$" },
        { key: "B", text: "$7x^2(2x - 1)$" },
        { key: "C", text: "$14x^2(x - 1)$" },
        { key: "D", text: "$7x^3(2 - x)$" }
      ],
      answer: "B"
    },
    {
      id: "q7",
      prompt: `ข้อใดเป็นการแยกตัวประกอบของ $x^3 + x^2 + x$ ?`,
      choices: [
        { key: "A", text: "$x(x^2 + x)$" },
        { key: "B", text: "$x^2(x + 1) + x$" },
        { key: "C", text: "$x(x^2 + x + 1)$" },
        { key: "D", text: "$x(x^3 + x^2 + x)$" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `จงแยกตัวประกอบของ $ab + ac$`,
      choices: [
        { key: "A", text: "$a(b + c)$" },
        { key: "B", text: "$b(a + c)$" },
        { key: "C", text: "$c(a + b)$" },
        { key: "D", text: "$a(bc)$" }
      ],
      answer: "A"
    },
    {
      id: "q9",
      prompt: `แยกตัวประกอบของ $2x^2y + 4xy^2$ ได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$2xy(x + 2y)$" },
        { key: "B", text: "$2x^2(y + 2y^2)$" },
        { key: "C", text: "$2y^2(x^2 + 2x)$" },
        { key: "D", text: "$4xy(x + y)$" }
      ],
      answer: "A"
    },
    {
      id: "q10",
      prompt: `พหุนาม $10a^2b - 15ab^2$ แยกตัวประกอบได้ตามข้อใด?`,
      choices: [
        { key: "A", text: "$5ab(2a - 3b)$" },
        { key: "B", text: "$5a(2ab - 3b^2)$" },
        { key: "C", text: "$10ab(a - 1.5b)$" },
        { key: "D", text: "$5a^2b^2(2 - 3)$" }
      ],
      answer: "A"
    },
    {
      id: "q11",
      prompt: `จงแยกตัวประกอบของ $-3x - 9$`,
      choices: [
        { key: "A", text: "$-3(x - 3)$" },
        { key: "B", text: "$-3(x + 3)$" },
        { key: "C", text: "$3(-x + 3)$" },
        { key: "D", text: "$-x(3 + 9)$" }
      ],
      answer: "B"
    },
    {
      id: "q12",
      prompt: `พหุนาม $6x^3y^2 - 9x^2y^3$ แยกตัวประกอบได้เป็นข้อใด?`,
      choices: [
        { key: "A", text: "$3xy(2x^2 - 3y^2)$" },
        { key: "B", text: "$3x^2y^2(2x - 3y)$" },
        { key: "C", text: "$3x^3y^3(2 - 3)$" },
        { key: "D", text: "$x^2y^2(6x - 9y)$" }
      ],
      answer: "B"
    },
    {
      id: "q13",
      prompt: `จงแยกตัวประกอบของพหุนาม $x(a+b) + y(a+b)$`,
      choices: [
        { key: "A", text: "$(a+b)(x+y)$" },
        { key: "B", text: "$(a+b)(xy)$" },
        { key: "C", text: "$(x+y)(a-b)$" },
        { key: "D", text: "$xy(a+b)$" }
      ],
      answer: "A"
    },
    {
      id: "q14",
      prompt: `ข้อใดเป็นการแยกตัวประกอบของ $2a(x-y) - 3b(x-y)$ ?`,
      choices: [
        { key: "A", text: "$(x-y)(2a+3b)$" },
        { key: "B", text: "$(x-y)(2a-3b)$" },
        { key: "C", text: "$(2a-3b)(x+y)$" },
        { key: "D", text: "$(2a-x)(3b-y)$" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `แยกตัวประกอบของ $4x^4 - 8x^3 + 12x^2$ ได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$4x(x^3 - 2x^2 + 3x)$" },
        { key: "B", text: "$4x^2(x^2 - 2x + 3)$" },
        { key: "C", text: "$2x^2(2x^2 - 4x + 6)$" },
        { key: "D", text: "$4x^3(x - 2 + 3x^{-1})$" }
      ],
      answer: "B"
    },

    // --- ผลต่างกำลังสอง (ข้อ 16-25) ---
    {
      id: "q16",
      prompt: `ข้อใดคือการแยกตัวประกอบของ $x^2 - 1$ ?`,
      choices: [
        { key: "A", text: "$(x-1)(x-1)$" },
        { key: "B", text: "$(x+1)(x+1)$" },
        { key: "C", text: "$(x-1)(x+1)$" },
        { key: "D", text: "$x(x-1)$" }
      ],
      answer: "C"
    },
    {
      id: "q17",
      prompt: `จงแยกตัวประกอบของ $x^2 - 16$`,
      choices: [
        { key: "A", text: "$(x-4)(x+4)$" },
        { key: "B", text: "$(x-8)(x+8)$" },
        { key: "C", text: "$(x-4)^2$" },
        { key: "D", text: "$(x-2)(x+8)$" }
      ],
      answer: "A"
    },
    {
      id: "q18",
      prompt: `พหุนาม $y^2 - 49$ แยกตัวประกอบได้ตามข้อใด?`,
      choices: [
        { key: "A", text: "$(y-7)(y+7)$" },
        { key: "B", text: "$(y-7)^2$" },
        { key: "C", text: "$(y-49)(y+1)$" },
        { key: "D", text: "$(y-7)(y-7)$" }
      ],
      answer: "A"
    },
    {
      id: "q19",
      prompt: `ข้อใดคือผลการแยกตัวประกอบของ $4x^2 - 9$ ?`,
      choices: [
        { key: "A", text: "$(4x-3)(4x+3)$" },
        { key: "B", text: "$(2x-9)(2x+1)$" },
        { key: "C", text: "$(2x-3)^2$" },
        { key: "D", text: "$(2x-3)(2x+3)$" }
      ],
      answer: "D"
    },
    {
      id: "q20",
      prompt: `จงแยกตัวประกอบของ $25x^2 - 1$`,
      choices: [
        { key: "A", text: "$(5x-1)^2$" },
        { key: "B", text: "$(5x-1)(5x+1)$" },
        { key: "C", text: "$(25x-1)(x+1)$" },
        { key: "D", text: "$(5x-1)(5x-1)$" }
      ],
      answer: "B"
    },
    {
      id: "q21",
      prompt: `พหุนาม $9x^2 - 64$ แยกตัวประกอบได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$(3x-8)(3x+8)$" },
        { key: "B", text: "$(9x-8)(x+8)$" },
        { key: "C", text: "$(3x-32)(3x+32)$" },
        { key: "D", text: "$(3x-8)^2$" }
      ],
      answer: "A"
    },
    {
      id: "q22",
      prompt: `ข้อใดเป็นการแยกตัวประกอบของ $16a^2 - 81b^2$ ?`,
      choices: [
        { key: "A", text: "$(4a-9b)^2$" },
        { key: "B", text: "$(16a-9b)(a+9b)$" },
        { key: "C", text: "$(4a-9b)(4a+9b)$" },
        { key: "D", text: "$(8a-9b)(2a+9b)$" }
      ],
      answer: "C"
    },
    {
      id: "q23",
      prompt: `จงแยกตัวประกอบของ $100x^2 - 121y^2$`,
      choices: [
        { key: "A", text: "$(10x-11y)^2$" },
        { key: "B", text: "$(10x-11y)(10x+11y)$" },
        { key: "C", text: "$(50x-11y)(2x+11y)$" },
        { key: "D", text: "$(10x-121y)(10x+y)$" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `แยกตัวประกอบของ $x^2 - 225$ ได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$(x-15)(x+15)$" },
        { key: "B", text: "$(x-25)(x+9)$" },
        { key: "C", text: "$(x-15)^2$" },
        { key: "D", text: "$(x-5)(x+45)$" }
      ],
      answer: "A"
    },
    {
      id: "q25",
      prompt: `พหุนาม $x^2 - 144$ แยกตัวประกอบได้ตามข้อใด?`,
      choices: [
        { key: "A", text: "$(x-12)^2$" },
        { key: "B", text: "$(x-12)(x+12)$" },
        { key: "C", text: "$(x-72)(x+2)$" },
        { key: "D", text: "$(x-144)(x+1)$" }
      ],
      answer: "B"
    },

    // --- ดึงตัวร่วม + ผลต่างกำลังสอง (ข้อ 26-30) ---
    {
      id: "q26",
      prompt: `จงแยกตัวประกอบของพหุนาม $2x^2 - 8$ ให้สมบูรณ์ที่สุด`,
      choices: [
        { key: "A", text: "$2(x^2 - 4)$" },
        { key: "B", text: "$(2x-4)(x+2)$" },
        { key: "C", text: "$2(x-2)(x+2)$" },
        { key: "D", text: "$(x-2)(2x+4)$" }
      ],
      answer: "C"
    },
    {
      id: "q27",
      prompt: `พหุนาม $3x^2 - 27$ แยกตัวประกอบได้อย่างสมบูรณ์ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$3(x-3)(x+3)$" },
        { key: "B", text: "$3(x^2-9)$" },
        { key: "C", text: "$(3x-9)(x+3)$" },
        { key: "D", text: "$3(x-9)(x+1)$" }
      ],
      answer: "A"
    },
    {
      id: "q28",
      prompt: `ข้อใดคือผลการแยกตัวประกอบที่สมบูรณ์ของ $5x^2 - 20$ ?`,
      choices: [
        { key: "A", text: "$5(x-4)(x+1)$" },
        { key: "B", text: "$5(x-2)(x+2)$" },
        { key: "C", text: "$5(x^2-4)$" },
        { key: "D", text: "$(5x-10)(x+2)$" }
      ],
      answer: "B"
    },
    {
      id: "q29",
      prompt: `จงแยกตัวประกอบของ $ax^2 - ay^2$`,
      choices: [
        { key: "A", text: "$a(x^2 - y^2)$" },
        { key: "B", text: "$(ax-ay)(x+y)$" },
        { key: "C", text: "$a(x-y)(x-y)$" },
        { key: "D", text: "$a(x-y)(x+y)$" }
      ],
      answer: "D"
    },
    {
      id: "q30",
      prompt: `แยกตัวประกอบของ $x^3 - x$ ให้สมบูรณ์ได้ตรงกับข้อใด?`,
      choices: [
        { key: "A", text: "$x(x^2 - 1)$" },
        { key: "B", text: "$x(x-1)^2$" },
        { key: "C", text: "$x(x-1)(x+1)$" },
        { key: "D", text: "$(x^2-1)(x)$" }
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
