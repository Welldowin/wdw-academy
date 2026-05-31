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
      courseId: "m3-term1-math",
      quizKey: "quiz2",
      title: "Quiz 2 : จำนวนตรรกยะ อตรรกยะ สมการและอสมการของค่าสัมบูรณ์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      {
        id: "q1",
        prompt: `ข้อใดต่อไปนี้เป็น <b>จำนวนตรรกยะ</b> ?`,
        choices: [
          { key: "A", text: "$\\pi$" },
          { key: "B", text: "$\\sqrt{2}$" },
          { key: "C", text: "$0.333\\dots$" },
          { key: "D", text: "$\\sqrt{3}$" }
        ],
        answer: "C"
      },
      {
        id: "q2",
        prompt: `ข้อใดต่อไปนี้เป็น <b>จำนวนอตรรกยะ</b> ?`,
        choices: [
          { key: "A", text: "$\\sqrt{9}$" },
          { key: "B", text: "$\\frac{22}{7}$" },
          { key: "C", text: "$1.414$" },
          { key: "D", text: "$\\sqrt{5}$" }
        ],
        answer: "D"
      },
      {
        id: "q3",
        prompt: `เขียนทศนิยมซ้ำ $0.555\\dots$ (หรือ $0.\\dot{5}$) ในรูปเศษส่วนได้เท่าใด?`,
        choices: [
          { key: "A", text: "$\\frac{5}{9}$" },
          { key: "B", text: "$\\frac{5}{10}$" },
          { key: "C", text: "$\\frac{1}{2}$" },
          { key: "D", text: "$\\frac{5}{11}$" }
        ],
        answer: "A"
      },
      {
        id: "q4",
        prompt: `ผลบวกของ <b>จำนวนตรรกยะ</b> และ <b>จำนวนอตรรกยะ</b> จะเป็นจำนวนชนิดใดเสมอ?`,
        choices: [
          { key: "A", text: "จำนวนตรรกยะ" },
          { key: "B", text: "จำนวนอตรรกยะ" },
          { key: "C", text: "เป็นไปได้ทั้งสองชนิด" },
          { key: "D", text: "จำนวนเต็ม" }
        ],
        answer: "B"
      },
      {
        id: "q5",
        prompt: `ค่าของ $\\sqrt{12}$ สามารถจัดให้อยู่ในรูปอย่างง่ายได้ตรงกับข้อใด?`,
        choices: [
          { key: "A", text: "$2\\sqrt{3}$" },
          { key: "B", text: "$3\\sqrt{2}$" },
          { key: "C", text: "$4\\sqrt{3}$" },
          { key: "D", text: "$6$" }
        ],
        answer: "A"
      },
      {
        id: "q6",
        prompt: `จำนวนในข้อใด <b>ไม่เป็น</b> จำนวนจริง?`,
        choices: [
          { key: "A", text: "$\\sqrt{0}$" },
          { key: "B", text: "$-\\sqrt{4}$" },
          { key: "C", text: "$\\sqrt{-4}$" },
          { key: "D", text: "$\\frac{0}{5}$" }
        ],
        answer: "C"
      },
      {
        id: "q7",
        prompt: `ข้อความใดต่อไปนี้ <b>กล่าวถูกต้อง</b> ?`,
        choices: [
          { key: "A", text: "ค่าของ $\\pi$ คือ $\\frac{22}{7}$ พอดี" },
          { key: "B", text: "$\\sqrt{16}$ เป็นจำนวนอตรรกยะ" },
          { key: "C", text: "ทศนิยมซ้ำทุกตัวสามารถเขียนเป็นเศษส่วนได้ จึงเป็นจำนวนตรรกยะ" },
          { key: "D", text: "มีจำนวนจริงบางจำนวนที่สามารถหารด้วยศูนย์ได้" }
        ],
        answer: "C"
      },
      {
        id: "q8",
        prompt: `ผลคูณของ $\\sqrt{2} \\times \\sqrt{8}$ เป็นจำนวนชนิดใด?`,
        choices: [
          { key: "A", text: "จำนวนตรรกยะ" },
          { key: "B", text: "จำนวนอตรรกยะ" },
          { key: "C", text: "ทศนิยมไม่รู้จบแบบไม่ซ้ำ" },
          { key: "D", text: "ไม่ใช่จำนวนจริง" }
        ],
        answer: "A"
      },
      {
        id: "q9",
        prompt: `จำนวนในข้อใดมีค่าอยู่ระหว่าง $\\sqrt{2}$ และ $\\sqrt{3}$ ?`,
        choices: [
          { key: "A", text: "$1.1$" },
          { key: "B", text: "$1.5$" },
          { key: "C", text: "$1.8$" },
          { key: "D", text: "$2.0$" }
        ],
        answer: "B"
      },
      {
        id: "q10",
        prompt: `ค่าของ $\\frac{\\sqrt{50}}{\\sqrt{2}}$ ตรงกับข้อใด?`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$\\sqrt{25}$" },
          { key: "C", text: "$25$" },
          { key: "D", text: "ถูกทั้งข้อ A และ B" }
        ],
        answer: "D"
      },
      {
        id: "q11",
        prompt: `นิยามของ <b>ค่าสัมบูรณ์ของ $x$</b> หรือ $|x|$ คืออะไร?`,
        choices: [
          { key: "A", text: "ระยะห่างจาก $x$ ถึง $0$ บนเส้นจำนวน" },
          { key: "B", text: "ค่าบวกของ $x$ เสมอ" },
          { key: "C", text: "ค่าของ $x$ ยกกำลังสอง" },
          { key: "D", text: "ส่วนกลับของ $x$" }
        ],
        answer: "A"
      },
      {
        id: "q12",
        prompt: `ค่าของ $|-5| + |3|$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$-2$" },
          { key: "B", text: "$2$" },
          { key: "C", text: "$8$" },
          { key: "D", text: "$-8$" }
        ],
        answer: "C"
      },
      {
        id: "q13",
        prompt: `คำตอบของสมการ $|x| = 7$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$-7$" },
          { key: "C", text: "$7$ และ $-7$" },
          { key: "D", text: "ไม่มีคำตอบเป็นจำนวนจริง" }
        ],
        answer: "C"
      },
      {
        id: "q14",
        prompt: `คำตอบของสมการ $|x - 2| = 5$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$7$ และ $-3$" },
          { key: "C", text: "$3$ และ $-3$" },
          { key: "D", text: "$7$ และ $-7$" }
        ],
        answer: "B"
      },
      {
        id: "q15",
        prompt: `สมการในข้อใด <b>ไม่มีคำตอบ</b> ในระบบจำนวนจริง?`,
        choices: [
          { key: "A", text: "$|x| = 0$" },
          { key: "B", text: "$|x| = 1$" },
          { key: "C", text: "$|x| = -2$" },
          { key: "D", text: "$|x - 1| = 0$" }
        ],
        answer: "C"
      },
      {
        id: "q16",
        prompt: `คำตอบของสมการ $|2x - 1| = 9$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$5$ และ $-4$" },
          { key: "B", text: "$4$ และ $-5$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$-4$" }
        ],
        answer: "A"
      },
      {
        id: "q17",
        prompt: `กำหนดให้ $|x| = x$ แล้วเงื่อนไขของ $x$ ต้องเป็นไปตามข้อใดจึงจะทำให้สมการเป็นจริง?`,
        choices: [
          { key: "A", text: "$x > 0$" },
          { key: "B", text: "$x < 0$" },
          { key: "C", text: "$x \\ge 0$" },
          { key: "D", text: "$x \\le 0$" }
        ],
        answer: "C"
      },
      {
        id: "q18",
        prompt: `คำตอบของสมการ $|x + 3| = |x - 1|$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x = -1$" },
          { key: "B", text: "$x = 1$" },
          { key: "C", text: "$x = -2$" },
          { key: "D", text: "ไม่มีคำตอบ" }
        ],
        answer: "A"
      },
      {
        id: "q19",
        prompt: `ค่า $x$ ในข้อใดที่ทำให้สมการ $|3 - x| = 4$ เป็นจริง?`,
        choices: [
          { key: "A", text: "$7$ และ $-1$" },
          { key: "B", text: "$1$ และ $-7$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$-1$" }
        ],
        answer: "A"
      },
      {
        id: "q20",
        prompt: `คำตอบของสมการ $|\\frac{x}{2} - 1| = 3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$8$ และ $-4$" },
          { key: "B", text: "$4$ และ $-2$" },
          { key: "C", text: "$8$" },
          { key: "D", text: "$-4$" }
        ],
        answer: "A"
      },
      {
        id: "q21",
        prompt: `ช่วงคำตอบของอสมการ $|x| < 4$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-4 < x < 4$" },
          { key: "B", text: "$x < 4$" },
          { key: "C", text: "$x > -4$" },
          { key: "D", text: "$x < -4$ หรือ $x > 4$" }
        ],
        answer: "A"
      },
      {
        id: "q22",
        prompt: `คำตอบของอสมการ $|x| \\ge 2$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-2 \\le x \\le 2$" },
          { key: "B", text: "$x \\ge 2$" },
          { key: "C", text: "$x \\le -2$ หรือ $x \\ge 2$" },
          { key: "D", text: "$x \\le 2$" }
        ],
        answer: "C"
      },
      {
        id: "q23",
        prompt: `คำตอบของอสมการ $|x - 1| < 5$ ตรงกับช่วงในข้อใด?`,
        choices: [
          { key: "A", text: "$-4 < x < 6$" },
          { key: "B", text: "$-6 < x < 4$" },
          { key: "C", text: "$4 < x < 6$" },
          { key: "D", text: "$-5 < x < 5$" }
        ],
        answer: "A"
      },
      {
        id: "q24",
        prompt: `คำตอบของอสมการ $|2x + 1| \\le 7$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-4 \\le x \\le 3$" },
          { key: "B", text: "$-3 \\le x \\le 4$" },
          { key: "C", text: "$x \\le 3$" },
          { key: "D", text: "$x \\ge -4$" }
        ],
        answer: "A"
      },
      {
        id: "q25",
        prompt: `มีจำนวนเต็ม $x$ ทั้งหมดกี่จำนวน ที่สอดคล้องกับอสมการ $|x| \\le 3$ ?`,
        choices: [
          { key: "A", text: "$3$ จำนวน" },
          { key: "B", text: "$6$ จำนวน" },
          { key: "C", text: "$7$ จำนวน" },
          { key: "D", text: "$4$ จำนวน" }
        ],
        answer: "C"
      },
      {
        id: "q26",
        prompt: `คำตอบของอสมการ $|x + 2| > 3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$x > 1$" },
          { key: "B", text: "$x < -5$" },
          { key: "C", text: "$x < -5$ หรือ $x > 1$" },
          { key: "D", text: "$-5 < x < 1$" }
        ],
        answer: "C"
      },
      {
        id: "q27",
        prompt: `อสมการในข้อใด <b>เป็นจริงเสมอ</b> สำหรับทุกจำนวนจริง $x$ ?`,
        choices: [
          { key: "A", text: "$|x| > 0$" },
          { key: "B", text: "$|x| \\ge 0$" },
          { key: "C", text: "$|x| < 0$" },
          { key: "D", text: "$|x| \\le 0$" }
        ],
        answer: "B"
      },
      {
        id: "q28",
        prompt: `อสมการในข้อใด <b>ไม่มีคำตอบ</b> เป็นจำนวนจริง?`,
        choices: [
          { key: "A", text: "$|x - 5| < 0$" },
          { key: "B", text: "$|x| \\le 0$" },
          { key: "C", text: "$|x + 1| > -1$" },
          { key: "D", text: "$|x| \\ge 0$" }
        ],
        answer: "A"
      },
      {
        id: "q29",
        prompt: `อสมการ $-2 < x < 2$ สามารถเขียนในรูปอสมการค่าสัมบูรณ์ได้ตรงกับข้อใด?`,
        choices: [
          { key: "A", text: "$|x| > 2$" },
          { key: "B", text: "$|x| \\le 2$" },
          { key: "C", text: "$|x| < 2$" },
          { key: "D", text: "$|x - 2| < 0$" }
        ],
        answer: "C"
      },
      {
        id: "q30",
        prompt: `ผลบวกของ <b>จำนวนเต็ม</b> ทั้งหมดที่สอดคล้องกับอสมการ $|x - 3| \\le 2$ คือเท่าใด?`,
        choices: [
          { key: "A", text: "$12$" },
          { key: "B", text: "$15$" },
          { key: "C", text: "$10$" },
          { key: "D", text: "$9$" }
        ],
        answer: "B"
      }
    ]
  }

};
