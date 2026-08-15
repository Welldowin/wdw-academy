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
        answer: "A",
        explanation: `ดึงตัวร่วม 2 ออก: $2x+6 = 2(x+3)$ จึงตอบ A`
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
        answer: "C",
        explanation: `ดึงตัวร่วม 5 ออก: $5x-15 = 5(x-3)$ จึงตอบ C`
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
        answer: "B",
        explanation: `ดึงตัวร่วม $x$ ออก: $x^2+4x = x(x+4)$ จึงตอบ B`
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
        answer: "A",
        explanation: `ตัวร่วมมากสุดคือ $3x$: $3x^2-9x = 3x(x-3)$ จึงตอบ A`
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
        answer: "B",
        explanation: `ตัวร่วมมากสุดคือ $4x$: $8x^2+12x = 4x(2x+3)$ จึงตอบ B`
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
        answer: "B",
        explanation: `ตัวร่วมมากสุดคือ $7x^2$: $14x^3-7x^2 = 7x^2(2x-1)$ จึงตอบ B`
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
        answer: "C",
        explanation: `ดึง $x$ ออกได้ทุกพจน์: $x^3+x^2+x = x(x^2+x+1)$ จึงตอบ C`
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
        answer: "A",
        explanation: `ดึงตัวร่วม $a$: $ab+ac = a(b+c)$ จึงตอบ A`
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
        answer: "A",
        explanation: `ตัวร่วมคือ $2xy$: $2x^2y+4xy^2 = 2xy(x+2y)$ จึงตอบ A`
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
        answer: "A",
        explanation: `ตัวร่วมคือ $5ab$: $10a^2b-15ab^2 = 5ab(2a-3b)$ จึงตอบ A`
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
        answer: "B",
        explanation: `ดึง $-3$ ออก: $-3x-9 = -3(x+3)$ จึงตอบ B`
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
        answer: "B",
        explanation: `ตัวร่วมคือ $3x^2y^2$: $6x^3y^2-9x^2y^3 = 3x^2y^2(2x-3y)$ จึงตอบ B`
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
        answer: "A",
        explanation: `มี $(a+b)$ เป็นตัวร่วม: $x(a+b)+y(a+b) = (a+b)(x+y)$ จึงตอบ A`
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
        answer: "B",
        explanation: `มี $(x-y)$ เป็นตัวร่วม: $2a(x-y)-3b(x-y) = (x-y)(2a-3b)$ จึงตอบ B`
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
        answer: "B",
        explanation: `ตัวร่วมคือ $4x^2$: $4x^4-8x^3+12x^2 = 4x^2(x^2-2x+3)$ จึงตอบ B`
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
        answer: "C",
        explanation: `ผลต่างกำลังสอง $a^2-b^2=(a-b)(a+b)$: $x^2-1 = (x-1)(x+1)$ จึงตอบ C`
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
        answer: "A",
        explanation: `$16=4^2$: $x^2-16 = (x-4)(x+4)$ จึงตอบ A`
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
        answer: "A",
        explanation: `$49=7^2$: $y^2-49 = (y-7)(y+7)$ จึงตอบ A`
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
        answer: "D",
        explanation: `$4x^2=(2x)^2,\\ 9=3^2$: $4x^2-9 = (2x-3)(2x+3)$ จึงตอบ D`
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
        answer: "B",
        explanation: `$25x^2=(5x)^2,\\ 1=1^2$: $25x^2-1 = (5x-1)(5x+1)$ จึงตอบ B`
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
        answer: "A",
        explanation: `$9x^2=(3x)^2,\\ 64=8^2$: $9x^2-64 = (3x-8)(3x+8)$ จึงตอบ A`
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
        answer: "C",
        explanation: `$16a^2=(4a)^2,\\ 81b^2=(9b)^2$: $16a^2-81b^2 = (4a-9b)(4a+9b)$ จึงตอบ C`
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
        answer: "B",
        explanation: `$100x^2=(10x)^2,\\ 121y^2=(11y)^2$: ได้ $(10x-11y)(10x+11y)$ จึงตอบ B`
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
        answer: "A",
        explanation: `$225=15^2$: $x^2-225 = (x-15)(x+15)$ จึงตอบ A`
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
        answer: "B",
        explanation: `$144=12^2$: $x^2-144 = (x-12)(x+12)$ จึงตอบ B`
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
        answer: "C",
        explanation: `ดึง 2 ก่อนแล้วใช้ผลต่างกำลังสอง: $2x^2-8 = 2(x^2-4) = 2(x-2)(x+2)$ จึงตอบ C`
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
        answer: "A",
        explanation: `ดึง 3 ก่อน: $3x^2-27 = 3(x^2-9) = 3(x-3)(x+3)$ จึงตอบ A`
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
        answer: "B",
        explanation: `ดึง 5 ก่อน: $5x^2-20 = 5(x^2-4) = 5(x-2)(x+2)$ จึงตอบ B`
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
        answer: "D",
        explanation: `ดึง $a$ ก่อน: $ax^2-ay^2 = a(x^2-y^2) = a(x-y)(x+y)$ จึงตอบ D`
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
        answer: "C",
        explanation: `ดึง $x$ ก่อน: $x^3-x = x(x^2-1) = x(x-1)(x+1)$ จึงตอบ C`
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
        answer: "C",
        explanation: `$0.333\\dots = \\frac{1}{3}$ เขียนเป็นเศษส่วนได้ จึงเป็นจำนวนตรรกยะ ตอบ C (ส่วน $\\pi,\\sqrt{2},\\sqrt{3}$ เป็นอตรรกยะ)`
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
        answer: "D",
        explanation: `$\\sqrt{9}=3,\\ \\frac{22}{7},\\ 1.414$ ล้วนเป็นตรรกยะ เหลือ $\\sqrt{5}$ ที่หารากไม่ลงตัว เป็นอตรรกยะ ตอบ D`
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
        answer: "A",
        explanation: `ทศนิยมซ้ำหนึ่งหลัก $0.\\dot{5} = \\frac{5}{9}$ จึงตอบ A`
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
        answer: "B",
        explanation: `ตรรกยะ + อตรรกยะ ได้ผลเป็นอตรรกยะเสมอ จึงตอบ B`
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
        answer: "A",
        explanation: `$\\sqrt{12}=\\sqrt{4\\times3}=\\sqrt{4}\\,\\sqrt{3}=2\\sqrt{3}$ จึงตอบ A`
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
        answer: "C",
        explanation: `รากที่สองของจำนวนลบไม่เป็นจำนวนจริง $\\sqrt{-4}$ จึงตอบ C`
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
        answer: "C",
        explanation: `ทศนิยมซ้ำทุกตัวเขียนเป็นเศษส่วนได้ จึงเป็นจำนวนตรรกยะ ตอบ C ($\\pi\\neq\\frac{22}{7}$, $\\sqrt{16}=4$ เป็นตรรกยะ, หารด้วยศูนย์ไม่ได้)`
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
        answer: "A",
        explanation: `$\\sqrt{2}\\times\\sqrt{8}=\\sqrt{16}=4$ เป็นจำนวนตรรกยะ จึงตอบ A`
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
        answer: "B",
        explanation: `$\\sqrt{2}\\approx1.41,\\ \\sqrt{3}\\approx1.73$ ค่าที่อยู่ระหว่างคือ $1.5$ จึงตอบ B`
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
        answer: "D",
        explanation: `$\\frac{\\sqrt{50}}{\\sqrt{2}}=\\sqrt{\\frac{50}{2}}=\\sqrt{25}=5$ ตรงทั้ง A และ B จึงตอบ D`
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
        answer: "A",
        explanation: `ค่าสัมบูรณ์ $|x|$ คือระยะห่างจาก $x$ ถึง $0$ บนเส้นจำนวน จึงตอบ A`
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
        answer: "C",
        explanation: `$|-5|+|3| = 5+3 = 8$ จึงตอบ C`
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
        answer: "C",
        explanation: `$|x|=7$ ได้ $x=7$ หรือ $x=-7$ จึงตอบ C`
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
        answer: "B",
        explanation: `$|x-2|=5$ แยกเป็น $x-2=5\\Rightarrow x=7$ และ $x-2=-5\\Rightarrow x=-3$ จึงตอบ B`
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
        answer: "C",
        explanation: `ค่าสัมบูรณ์ติดลบไม่ได้ $|x|=-2$ จึงไม่มีคำตอบ ตอบ C`
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
        answer: "A",
        explanation: `$|2x-1|=9$: $2x-1=9\\Rightarrow x=5$ และ $2x-1=-9\\Rightarrow x=-4$ จึงตอบ A`
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
        answer: "C",
        explanation: `$|x|=x$ จริงเมื่อ $x$ ไม่เป็นลบ คือ $x\\ge0$ จึงตอบ C`
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
        answer: "A",
        explanation: `$|x+3|=|x-1|$ คือจุดที่ห่างจาก $-3$ และ $1$ เท่ากัน คือจุดกึ่งกลาง $x=-1$ จึงตอบ A`
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
        answer: "A",
        explanation: `$|3-x|=4$: $3-x=4\\Rightarrow x=-1$ และ $3-x=-4\\Rightarrow x=7$ จึงตอบ A`
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
        answer: "A",
        explanation: `$\\left|\\frac{x}{2}-1\\right|=3$: $\\frac{x}{2}-1=3\\Rightarrow x=8$ และ $\\frac{x}{2}-1=-3\\Rightarrow x=-4$ จึงตอบ A`
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
        answer: "A",
        explanation: `$|x|<4$ แปลว่า $-4<x<4$ จึงตอบ A`
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
        answer: "C",
        explanation: `$|x|\\ge2$ แปลว่า $x\\le-2$ หรือ $x\\ge2$ จึงตอบ C`
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
        answer: "A",
        explanation: `$|x-1|<5$: $-5<x-1<5$ บวก 1 ตลอด ได้ $-4<x<6$ จึงตอบ A`
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
        answer: "A",
        explanation: `$|2x+1|\\le7$: $-7\\le2x+1\\le7 \\Rightarrow -8\\le2x\\le6 \\Rightarrow -4\\le x\\le3$ จึงตอบ A`
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
        answer: "C",
        explanation: `$|x|\\le3$ จำนวนเต็มคือ $-3,-2,-1,0,1,2,3$ รวม 7 จำนวน จึงตอบ C`
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
        answer: "C",
        explanation: `$|x+2|>3$: $x+2>3\\Rightarrow x>1$ หรือ $x+2<-3\\Rightarrow x<-5$ จึงตอบ C`
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
        answer: "B",
        explanation: `ค่าสัมบูรณ์ไม่มีทางติดลบ $|x|\\ge0$ จึงเป็นจริงเสมอ ตอบ B`
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
        answer: "A",
        explanation: `$|x-5|<0$ เป็นไปไม่ได้ (ค่าสัมบูรณ์ติดลบไม่ได้) จึงไม่มีคำตอบ ตอบ A`
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
        answer: "C",
        explanation: `$-2<x<2$ คือระยะจาก 0 น้อยกว่า 2 เขียนได้เป็น $|x|<2$ จึงตอบ C`
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
        answer: "B",
        explanation: `$|x-3|\\le2$: $1\\le x\\le5$ จำนวนเต็มคือ $1,2,3,4,5$ ผลบวก $=15$ จึงตอบ B`
        }
    ]
  },

  "quiz3": {
    meta: {
      courseId: "m3-term1-math",
      quizKey: "quiz3",
      title: "Quiz 3 : สมการ อสมการ และค่าสัมบูรณ์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      {
        id: "q1",
        prompt: `แก้สมการ $2x + 5 = 13$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$5$" },
          { key: "D", text: "$9$" }
        ],
        answer: "B",
        explanation: `$2x = 13 - 5 = 8 \\Rightarrow x = 4$ จึงตอบ B`
      },
      {
        id: "q2",
        prompt: `แก้สมการ $3x - 7 = 2x + 1$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$-8$" },
          { key: "B", text: "$6$" },
          { key: "C", text: "$14$" },
          { key: "D", text: "$8$" }
        ],
        answer: "D",
        explanation: `$3x - 2x = 1 + 7 \\Rightarrow x = 8$ จึงตอบ D`
      },
      {
        id: "q3",
        prompt: `แก้สมการ $5(x - 2) = 3x + 4$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$-7$" },
          { key: "D", text: "$14$" }
        ],
        answer: "A",
        explanation: `$5x - 10 = 3x + 4 \\Rightarrow 2x = 14 \\Rightarrow x = 7$ จึงตอบ A`
      },
      {
        id: "q4",
        prompt: `แก้สมการ $\\dfrac{x}{2} + 3 = 7$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$8$" },
          { key: "D", text: "$20$" }
        ],
        answer: "C",
        explanation: `$\\dfrac{x}{2} = 4 \\Rightarrow x = 8$ จึงตอบ C`
      },
      {
        id: "q5",
        prompt: `จำนวนจริงที่สอดคล้องกับสมการ $x^2 = 49$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$\\pm 7$" },
          { key: "C", text: "$-7$" },
          { key: "D", text: "$\\pm 49$" }
        ],
        answer: "B",
        explanation: `$x = \\pm\\sqrt{49} = \\pm 7$ จึงตอบ B`
      },
      {
        id: "q6",
        prompt: `แก้สมการ $x^2 - 5x + 6 = 0$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = -2, -3$" },
          { key: "B", text: "$x = 1, 6$" },
          { key: "C", text: "$x = -1, -6$" },
          { key: "D", text: "$x = 2, 3$" }
        ],
        answer: "D",
        explanation: `$(x-2)(x-3) = 0 \\Rightarrow x = 2, 3$ จึงตอบ D`
      },
      {
        id: "q7",
        prompt: `แก้สมการ $(x - 4)(x + 2) = 0$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = 4, -2$" },
          { key: "B", text: "$x = -4, 2$" },
          { key: "C", text: "$x = 4, 2$" },
          { key: "D", text: "$x = -4, -2$" }
        ],
        answer: "A",
        explanation: `ให้แต่ละวงเล็บเป็นศูนย์: $x = 4$ หรือ $x = -2$ จึงตอบ A`
      },
      {
        id: "q8",
        prompt: `แก้อสมการ $2x + 1 > 7$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$x < 3$" },
          { key: "B", text: "$x > 4$" },
          { key: "C", text: "$x > 3$" },
          { key: "D", text: "$x < 4$" }
        ],
        answer: "C",
        explanation: `$2x > 6 \\Rightarrow x > 3$ จึงตอบ C`
      },
      {
        id: "q9",
        prompt: `แก้อสมการ $3x - 5 \\le 10$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\ge 5$" },
          { key: "B", text: "$x \\le 5$" },
          { key: "C", text: "$x < 5$" },
          { key: "D", text: "$x \\le 15$" }
        ],
        answer: "B",
        explanation: `$3x \\le 15 \\Rightarrow x \\le 5$ จึงตอบ B`
      },
      {
        id: "q10",
        prompt: `แก้อสมการ $-2x > 6$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$x > -3$" },
          { key: "B", text: "$x > 3$" },
          { key: "C", text: "$x < 3$" },
          { key: "D", text: "$x < -3$" }
        ],
        answer: "D",
        explanation: `หารด้วย $-2$ ต้องกลับเครื่องหมาย: $x < -3$ จึงตอบ D`
      },
      {
        id: "q11",
        prompt: `แก้อสมการ $4 - x \\ge 1$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$x \\le 3$" },
          { key: "B", text: "$x \\ge 3$" },
          { key: "C", text: "$x \\le -3$" },
          { key: "D", text: "$x \\ge -3$" }
        ],
        answer: "A",
        explanation: `$-x \\ge -3 \\Rightarrow x \\le 3$ (กลับเครื่องหมาย) จึงตอบ A`
      },
      {
        id: "q12",
        prompt: `สมการ $|x| = 5$ มีคำตอบที่เป็นจำนวนจริงกี่จำนวน?`,
        choices: [
          { key: "A", text: "$0$ จำนวน" },
          { key: "B", text: "$1$ จำนวน" },
          { key: "C", text: "$2$ จำนวน" },
          { key: "D", text: "มากมายนับไม่ถ้วน" }
        ],
        answer: "C",
        explanation: `$x = 5$ หรือ $x = -5$ รวม 2 จำนวน จึงตอบ C`
      },
      {
        id: "q13",
        prompt: `แก้สมการ $|x - 3| = 7$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = 3, 7$" },
          { key: "B", text: "$x = 10, -4$" },
          { key: "C", text: "$x = 10, 4$" },
          { key: "D", text: "$x = -10, 4$" }
        ],
        answer: "B",
        explanation: `$x - 3 = 7$ หรือ $x - 3 = -7 \\Rightarrow x = 10$ หรือ $x = -4$ จึงตอบ B`
      },
      {
        id: "q14",
        prompt: `แก้สมการ $|2x + 1| = 9$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = 4, 5$" },
          { key: "B", text: "$x = -4, 5$" },
          { key: "C", text: "$x = 4.5, -4.5$" },
          { key: "D", text: "$x = 4, -5$" }
        ],
        answer: "D",
        explanation: `$2x + 1 = 9 \\Rightarrow x = 4$ หรือ $2x + 1 = -9 \\Rightarrow x = -5$ จึงตอบ D`
      },
      {
        id: "q15",
        prompt: `แก้อสมการ $|x| < 4$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$-4 < x < 4$" },
          { key: "B", text: "$x < 4$" },
          { key: "C", text: "$x > 4$" },
          { key: "D", text: "$x < -4$ หรือ $x > 4$" }
        ],
        answer: "A",
        explanation: `$|x| < 4 \\Rightarrow -4 < x < 4$ จึงตอบ A`
      },
      {
        id: "q16",
        prompt: `แก้อสมการ $|x| > 3$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 < x < 3$" },
          { key: "B", text: "$x > 3$ เท่านั้น" },
          { key: "C", text: "$x < -3$ หรือ $x > 3$" },
          { key: "D", text: "$x < 3$" }
        ],
        answer: "C",
        explanation: `$|x| > 3 \\Rightarrow x < -3$ หรือ $x > 3$ จึงตอบ C`
      },
      {
        id: "q17",
        prompt: `แก้อสมการ $|x - 2| < 5$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$2 < x < 7$" },
          { key: "B", text: "$-3 < x < 7$" },
          { key: "C", text: "$-7 < x < 3$" },
          { key: "D", text: "$x < 7$" }
        ],
        answer: "B",
        explanation: `$-5 < x - 2 < 5 \\Rightarrow -3 < x < 7$ จึงตอบ B`
      },
      {
        id: "q18",
        prompt: `แก้อสมการ $|x + 1| \\le 4$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$-4 \\le x \\le 4$" },
          { key: "B", text: "$-3 \\le x \\le 5$" },
          { key: "C", text: "$x \\le 3$" },
          { key: "D", text: "$-5 \\le x \\le 3$" }
        ],
        answer: "D",
        explanation: `$-4 \\le x + 1 \\le 4 \\Rightarrow -5 \\le x \\le 3$ จึงตอบ D`
      },
      {
        id: "q19",
        prompt: `แก้อสมการ $|2x - 6| \\le 4$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$1 \\le x \\le 5$" },
          { key: "B", text: "$-1 \\le x \\le 5$" },
          { key: "C", text: "$2 \\le x \\le 10$" },
          { key: "D", text: "$1 \\le x \\le 10$" }
        ],
        answer: "A",
        explanation: `$-4 \\le 2x - 6 \\le 4 \\Rightarrow 2 \\le 2x \\le 10 \\Rightarrow 1 \\le x \\le 5$ จึงตอบ A`
      },
      {
        id: "q20",
        prompt: `แก้อสมการ $|x - 5| > 2$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$3 < x < 7$" },
          { key: "B", text: "$x > 7$ เท่านั้น" },
          { key: "C", text: "$x < 3$ หรือ $x > 7$" },
          { key: "D", text: "$x < 7$" }
        ],
        answer: "C",
        explanation: `$x - 5 < -2$ หรือ $x - 5 > 2 \\Rightarrow x < 3$ หรือ $x > 7$ จึงตอบ C`
      },
      {
        id: "q21",
        prompt: `จำนวนเต็มที่สอดคล้องกับอสมการ $|x| \\le 3$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$6$ จำนวน" },
          { key: "B", text: "$7$ จำนวน" },
          { key: "C", text: "$3$ จำนวน" },
          { key: "D", text: "$4$ จำนวน" }
        ],
        answer: "B",
        explanation: `จำนวนเต็มคือ $-3,-2,-1,0,1,2,3$ รวม 7 จำนวน จึงตอบ B`
      },
      {
        id: "q22",
        prompt: `ผลบวกของคำตอบทั้งหมดของสมการ $|x - 1| = 6$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$-6$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$2$" }
        ],
        answer: "D",
        explanation: `คำตอบคือ $x = 7$ และ $x = -5$ ผลบวก $= 7 + (-5) = 2$ จึงตอบ D`
      },
      {
        id: "q23",
        prompt: `แก้สมการ $2|x| = 10$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = \\pm 5$" },
          { key: "B", text: "$x = 5$" },
          { key: "C", text: "$x = \\pm 10$" },
          { key: "D", text: "$x = \\pm 2.5$" }
        ],
        answer: "A",
        explanation: `$|x| = 5 \\Rightarrow x = \\pm 5$ จึงตอบ A`
      },
      {
        id: "q24",
        prompt: `สมการ $|x - 2| = 0$ มีคำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = \\pm 2$" },
          { key: "B", text: "ไม่มีคำตอบ" },
          { key: "C", text: "$x = 2$" },
          { key: "D", text: "$x = 0$" }
        ],
        answer: "C",
        explanation: `ค่าสัมบูรณ์เป็นศูนย์ได้เมื่อภายในเป็นศูนย์: $x - 2 = 0 \\Rightarrow x = 2$ จึงตอบ C`
      },
      {
        id: "q25",
        prompt: `แก้สมการ $x^2 + 4x = 0$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = 0, 4$" },
          { key: "B", text: "$x = 0, -4$" },
          { key: "C", text: "$x = -4$ เท่านั้น" },
          { key: "D", text: "$x = 4$ เท่านั้น" }
        ],
        answer: "B",
        explanation: `$x(x + 4) = 0 \\Rightarrow x = 0$ หรือ $x = -4$ จึงตอบ B`
      },
      {
        id: "q26",
        prompt: `แก้อสมการ $2(x - 1) < x + 3$ จะได้ผลเฉลยคือข้อใด?`,
        choices: [
          { key: "A", text: "$x < 1$" },
          { key: "B", text: "$x > 5$" },
          { key: "C", text: "$x < 4$" },
          { key: "D", text: "$x < 5$" }
        ],
        answer: "D",
        explanation: `$2x - 2 < x + 3 \\Rightarrow x < 5$ จึงตอบ D`
      },
      {
        id: "q27",
        prompt: `แก้สมการ $|3x| = 12$ จะได้คำตอบคือข้อใด?`,
        choices: [
          { key: "A", text: "$x = \\pm 4$" },
          { key: "B", text: "$x = 4$" },
          { key: "C", text: "$x = \\pm 36$" },
          { key: "D", text: "$x = \\pm 3$" }
        ],
        answer: "A",
        explanation: `$|3x| = 12 \\Rightarrow 3x = \\pm 12 \\Rightarrow x = \\pm 4$ จึงตอบ A`
      },
      {
        id: "q28",
        prompt: `แก้สมการ $\\dfrac{x}{3} - 1 = 2$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$1$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$9$" },
          { key: "D", text: "$6$" }
        ],
        answer: "C",
        explanation: `$\\dfrac{x}{3} = 3 \\Rightarrow x = 9$ จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `จำนวนเต็มบวกที่สอดคล้องกับเงื่อนไข $0 < x < 4$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$2$ จำนวน" },
          { key: "B", text: "$3$ จำนวน" },
          { key: "C", text: "$4$ จำนวน" },
          { key: "D", text: "มากมายนับไม่ถ้วน" }
        ],
        answer: "B",
        explanation: `จำนวนเต็มบวกคือ $1, 2, 3$ รวม 3 จำนวน จึงตอบ B`
      },
      {
        id: "q30",
        prompt: `แก้สมการ $3x + 2 = x - 4$ จะได้ $x$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$3$" },
          { key: "B", text: "$-1$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$-3$" }
        ],
        answer: "D",
        explanation: `$3x - x = -4 - 2 \\Rightarrow 2x = -6 \\Rightarrow x = -3$ จึงตอบ D`
      }
    ]
  },

  "quiz4": {
    meta: {
      courseId: "m3-term1-math",
      quizKey: "quiz4",
      title: "Quiz 4 : เอกลักษณ์พีชคณิต และการหารสังเคราะห์ (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      {
        id: "q1",
        prompt: `$(x + 3)^2$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 + 9$" },
          { key: "B", text: "$x^2 + 3x + 9$" },
          { key: "C", text: "$x^2 + 6x + 9$" },
          { key: "D", text: "$x^2 + 6x + 6$" }
        ],
        answer: "C",
        explanation: `$(a+b)^2 = a^2 + 2ab + b^2 = x^2 + 6x + 9$ จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `$(x - 5)^2$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 - 10x + 25$" },
          { key: "B", text: "$x^2 - 25$" },
          { key: "C", text: "$x^2 - 5x + 25$" },
          { key: "D", text: "$x^2 - 10x - 25$" }
        ],
        answer: "A",
        explanation: `$(a-b)^2 = a^2 - 2ab + b^2 = x^2 - 10x + 25$ จึงตอบ A`
      },
      {
        id: "q3",
        prompt: `$(2x + 3)^2$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$4x^2 + 9$" },
          { key: "B", text: "$2x^2 + 12x + 9$" },
          { key: "C", text: "$4x^2 + 6x + 9$" },
          { key: "D", text: "$4x^2 + 12x + 9$" }
        ],
        answer: "D",
        explanation: `$(2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$ จึงตอบ D`
      },
      {
        id: "q4",
        prompt: `แยกตัวประกอบ $x^2 - 16$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x - 16)(x + 1)$" },
          { key: "B", text: "$(x - 4)(x + 4)$" },
          { key: "C", text: "$(x - 4)^2$" },
          { key: "D", text: "$(x - 8)(x + 8)$" }
        ],
        answer: "B",
        explanation: `ผลต่างกำลังสอง $a^2 - b^2 = (a-b)(a+b) = (x-4)(x+4)$ จึงตอบ B`
      },
      {
        id: "q5",
        prompt: `แยกตัวประกอบ $9x^2 - 25$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(9x - 25)(x + 1)$" },
          { key: "B", text: "$(3x - 5)^2$" },
          { key: "C", text: "$(3x - 5)(3x + 5)$" },
          { key: "D", text: "$(9x - 5)(x + 5)$" }
        ],
        answer: "C",
        explanation: `$(3x)^2 - 5^2 = (3x - 5)(3x + 5)$ จึงตอบ C`
      },
      {
        id: "q6",
        prompt: `$(x + 2)^3$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^3 + 6x^2 + 12x + 8$" },
          { key: "B", text: "$x^3 + 8$" },
          { key: "C", text: "$x^3 + 6x^2 + 6x + 8$" },
          { key: "D", text: "$x^3 + 2x^2 + 4x + 8$" }
        ],
        answer: "A",
        explanation: `$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = x^3 + 6x^2 + 12x + 8$ จึงตอบ A`
      },
      {
        id: "q7",
        prompt: `$(x - 1)^3$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^3 - 1$" },
          { key: "B", text: "$x^3 - 3x^2 - 3x - 1$" },
          { key: "C", text: "$x^3 + 3x^2 - 3x - 1$" },
          { key: "D", text: "$x^3 - 3x^2 + 3x - 1$" }
        ],
        answer: "D",
        explanation: `$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = x^3 - 3x^2 + 3x - 1$ จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `แยกตัวประกอบ $x^3 + 8$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x + 2)^3$" },
          { key: "B", text: "$(x + 2)(x^2 - 2x + 4)$" },
          { key: "C", text: "$(x + 2)(x^2 + 2x + 4)$" },
          { key: "D", text: "$(x - 2)(x^2 + 2x + 4)$" }
        ],
        answer: "B",
        explanation: `ผลบวกกำลังสาม $a^3 + b^3 = (a+b)(a^2 - ab + b^2) = (x+2)(x^2 - 2x + 4)$ จึงตอบ B`
      },
      {
        id: "q9",
        prompt: `แยกตัวประกอบ $x^3 - 27$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x - 3)^3$" },
          { key: "B", text: "$(x - 3)(x^2 - 3x + 9)$" },
          { key: "C", text: "$(x - 3)(x^2 + 3x + 9)$" },
          { key: "D", text: "$(x + 3)(x^2 - 3x + 9)$" }
        ],
        answer: "C",
        explanation: `ผลต่างกำลังสาม $a^3 - b^3 = (a-b)(a^2 + ab + b^2) = (x-3)(x^2 + 3x + 9)$ จึงตอบ C`
      },
      {
        id: "q10",
        prompt: `รูปแบบการแยกตัวประกอบของผลต่างกำลังสอง $a^2 - b^2$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$(a - b)(a + b)$" },
          { key: "B", text: "$(a - b)^2$" },
          { key: "C", text: "$(a + b)^2$" },
          { key: "D", text: "$(a - b)(a - b)$" }
        ],
        answer: "A",
        explanation: `$a^2 - b^2 = (a-b)(a+b)$ จึงตอบ A`
      },
      {
        id: "q11",
        prompt: `$(x + y + z)^2$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 + y^2 + z^2$" },
          { key: "B", text: "$x^2 + y^2 + z^2 + xy + yz + zx$" },
          { key: "C", text: "$x^2 + y^2 + z^2 + 3xyz$" },
          { key: "D", text: "$x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$" }
        ],
        answer: "D",
        explanation: `$(x+y+z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$ จึงตอบ D`
      },
      {
        id: "q12",
        prompt: `$(x + 4)(x - 4)$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 + 16$" },
          { key: "B", text: "$x^2 - 16$" },
          { key: "C", text: "$x^2 - 8x - 16$" },
          { key: "D", text: "$x^2 - 8$" }
        ],
        answer: "B",
        explanation: `$(a+b)(a-b) = a^2 - b^2 = x^2 - 16$ จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `แยกตัวประกอบ $4x^2 + 12x + 9$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(2x + 9)(2x + 1)$" },
          { key: "B", text: "$(4x + 3)(x + 3)$" },
          { key: "C", text: "$(2x + 3)^2$" },
          { key: "D", text: "$(2x - 3)^2$" }
        ],
        answer: "C",
        explanation: `เป็นกำลังสองสมบูรณ์: $(2x + 3)^2 = 4x^2 + 12x + 9$ จึงตอบ C`
      },
      {
        id: "q14",
        prompt: `แยกตัวประกอบ $x^2 - 6x + 9$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x - 3)^2$" },
          { key: "B", text: "$(x + 3)^2$" },
          { key: "C", text: "$(x - 3)(x + 3)$" },
          { key: "D", text: "$(x - 9)(x - 1)$" }
        ],
        answer: "A",
        explanation: `เป็นกำลังสองสมบูรณ์: $(x - 3)^2 = x^2 - 6x + 9$ จึงตอบ A`
      },
      {
        id: "q15",
        prompt: `รูปแบบการแยกตัวประกอบของผลบวกกำลังสาม $a^3 + b^3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$(a + b)^3$" },
          { key: "B", text: "$(a + b)(a^2 + ab + b^2)$" },
          { key: "C", text: "$(a - b)(a^2 + ab + b^2)$" },
          { key: "D", text: "$(a + b)(a^2 - ab + b^2)$" }
        ],
        answer: "D",
        explanation: `$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ จึงตอบ D`
      },
      {
        id: "q16",
        prompt: `รูปแบบการแยกตัวประกอบของผลต่างกำลังสาม $a^3 - b^3$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$(a - b)^3$" },
          { key: "B", text: "$(a - b)(a^2 + ab + b^2)$" },
          { key: "C", text: "$(a - b)(a^2 - ab + b^2)$" },
          { key: "D", text: "$(a + b)(a^2 + ab + b^2)$" }
        ],
        answer: "B",
        explanation: `$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ จึงตอบ B`
      },
      {
        id: "q17",
        prompt: `ใช้เอกลักษณ์ $(a + b)^2$ หาค่าของ $102^2$ ได้เท่าใด?`,
        choices: [
          { key: "A", text: "$10204$" },
          { key: "B", text: "$10400$" },
          { key: "C", text: "$10404$" },
          { key: "D", text: "$10024$" }
        ],
        answer: "C",
        explanation: `$(100 + 2)^2 = 10000 + 400 + 4 = 10404$ จึงตอบ C`
      },
      {
        id: "q18",
        prompt: `ใช้เอกลักษณ์ผลต่างกำลังสอง หาค่าของ $98 \\times 102$ ได้เท่าใด?`,
        choices: [
          { key: "A", text: "$9996$" },
          { key: "B", text: "$9998$" },
          { key: "C", text: "$10000$" },
          { key: "D", text: "$9994$" }
        ],
        answer: "A",
        explanation: `$(100 - 2)(100 + 2) = 100^2 - 2^2 = 10000 - 4 = 9996$ จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `เศษของการหารพหุนาม $P(x) = x^2 - 5x + 6$ ด้วย $(x - 2)$ เท่ากับเท่าใด? (ทฤษฎีเศษเหลือ)`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$2$" },
          { key: "C", text: "$-4$" },
          { key: "D", text: "$0$" }
        ],
        answer: "D",
        explanation: `เศษ $= P(2) = 4 - 10 + 6 = 0$ จึงตอบ D`
      },
      {
        id: "q20",
        prompt: `เศษของการหารพหุนาม $P(x) = x^3 + 2x - 3$ ด้วย $(x - 1)$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$-3$" },
          { key: "D", text: "$6$" }
        ],
        answer: "B",
        explanation: `เศษ $= P(1) = 1 + 2 - 3 = 0$ จึงตอบ B`
      },
      {
        id: "q21",
        prompt: `การหารสังเคราะห์ (synthetic division) ใช้สำหรับสิ่งใด?`,
        choices: [
          { key: "A", text: "หา ห.ร.ม. ของจำนวนสองจำนวน" },
          { key: "B", text: "หารากที่สองของพหุนาม" },
          { key: "C", text: "หาผลหารและเศษเมื่อหารพหุนามด้วย $(x - c)$" },
          { key: "D", text: "หาผลคูณของพหุนามสองพหุนาม" }
        ],
        answer: "C",
        explanation: `การหารสังเคราะห์เป็นวิธีลัดในการหารพหุนามด้วย $(x - c)$ เพื่อหาผลหารและเศษ จึงตอบ C`
      },
      {
        id: "q22",
        prompt: `หาร $x^2 + 3x - 10$ ด้วย $(x - 2)$ จะได้ผลหารเป็นข้อใด?`,
        choices: [
          { key: "A", text: "$x + 5$" },
          { key: "B", text: "$x - 5$" },
          { key: "C", text: "$x + 3$" },
          { key: "D", text: "$x - 2$" }
        ],
        answer: "A",
        explanation: `$x^2 + 3x - 10 = (x - 2)(x + 5)$ ผลหารคือ $x + 5$ (เศษ 0) จึงตอบ A`
      },
      {
        id: "q23",
        prompt: `$(x - a)$ เป็นตัวประกอบของพหุนาม $P(x)$ ก็ต่อเมื่อข้อใดเป็นจริง? (ทฤษฎีตัวประกอบ)`,
        choices: [
          { key: "A", text: "$P(0) = a$" },
          { key: "B", text: "$P(a) = 1$" },
          { key: "C", text: "$P(-a) = 0$" },
          { key: "D", text: "$P(a) = 0$" }
        ],
        answer: "D",
        explanation: `ทฤษฎีตัวประกอบ: $(x - a)$ เป็นตัวประกอบก็ต่อเมื่อ $P(a) = 0$ จึงตอบ D`
      },
      {
        id: "q24",
        prompt: `พหุนามใดต่อไปนี้มี $(x - 3)$ เป็นตัวประกอบ?`,
        choices: [
          { key: "A", text: "$x^2 + 2x - 3$" },
          { key: "B", text: "$x^2 - x - 6$" },
          { key: "C", text: "$x^2 + x + 6$" },
          { key: "D", text: "$x^2 - 2x - 1$" }
        ],
        answer: "B",
        explanation: `แทน $x = 3$: ข้อ B ได้ $9 - 3 - 6 = 0$ จึงมี $(x-3)$ เป็นตัวประกอบ จึงตอบ B`
      },
      {
        id: "q25",
        prompt: `$(x + 5)(x - 5)$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$x^2 + 25$" },
          { key: "B", text: "$x^2 - 10x - 25$" },
          { key: "C", text: "$x^2 - 25$" },
          { key: "D", text: "$x^2 - 10$" }
        ],
        answer: "C",
        explanation: `$(a+b)(a-b) = a^2 - b^2 = x^2 - 25$ จึงตอบ C`
      },
      {
        id: "q26",
        prompt: `แยกตัวประกอบ $x^2 + 10x + 25$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x + 5)^2$" },
          { key: "B", text: "$(x - 5)^2$" },
          { key: "C", text: "$(x + 5)(x - 5)$" },
          { key: "D", text: "$(x + 25)(x + 1)$" }
        ],
        answer: "A",
        explanation: `เป็นกำลังสองสมบูรณ์: $(x + 5)^2 = x^2 + 10x + 25$ จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `แยกตัวประกอบ $27x^3 - 1$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(3x - 1)^3$" },
          { key: "B", text: "$(3x - 1)(9x^2 - 3x + 1)$" },
          { key: "C", text: "$(3x + 1)(9x^2 - 3x + 1)$" },
          { key: "D", text: "$(3x - 1)(9x^2 + 3x + 1)$" }
        ],
        answer: "D",
        explanation: `$(3x)^3 - 1^3 = (3x - 1)((3x)^2 + 3x + 1) = (3x - 1)(9x^2 + 3x + 1)$ จึงตอบ D`
      },
      {
        id: "q28",
        prompt: `$(a - b)^2$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$a^2 - b^2$" },
          { key: "B", text: "$a^2 - 2ab + b^2$" },
          { key: "C", text: "$a^2 + 2ab + b^2$" },
          { key: "D", text: "$a^2 - 2ab - b^2$" }
        ],
        answer: "B",
        explanation: `$(a - b)^2 = a^2 - 2ab + b^2$ จึงตอบ B`
      },
      {
        id: "q29",
        prompt: `เศษของการหารพหุนาม $P(x) = x^3 - 2x^2 + x - 5$ ด้วย $(x - 2)$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$-3$" },
          { key: "D", text: "$-5$" }
        ],
        answer: "C",
        explanation: `เศษ $= P(2) = 8 - 8 + 2 - 5 = -3$ จึงตอบ C`
      },
      {
        id: "q30",
        prompt: `แยกตัวประกอบ $x^2 - 7x + 12$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$(x - 3)(x - 4)$" },
          { key: "B", text: "$(x + 3)(x + 4)$" },
          { key: "C", text: "$(x - 2)(x - 6)$" },
          { key: "D", text: "$(x - 12)(x + 1)$" }
        ],
        answer: "A",
        explanation: `หาสองจำนวนที่คูณได้ 12 บวกได้ 7 คือ 3 กับ 4: $(x - 3)(x - 4)$ จึงตอบ A`
      }
    ]
  },

  "quiz5": {
    meta: {
      courseId: "m3-term1-math",
      quizKey: "quiz5",
      title: "Quiz 5 : เลขยกกำลัง ราก คอนจูเกต และทฤษฎีจำนวน (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      {
        id: "q1",
        prompt: `$2^3 \\times 2^4$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$128$" },
          { key: "B", text: "$64$" },
          { key: "C", text: "$256$" },
          { key: "D", text: "$2^{12}$" }
        ],
        answer: "A",
        explanation: `$2^3 \\times 2^4 = 2^{7} = 128$ จึงตอบ A`
      },
      {
        id: "q2",
        prompt: `$\\dfrac{3^5}{3^2}$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$9$" },
          { key: "B", text: "$27$" },
          { key: "C", text: "$81$" },
          { key: "D", text: "$3^{7}$" }
        ],
        answer: "B",
        explanation: `$3^{5-2} = 3^3 = 27$ จึงตอบ B`
      },
      {
        id: "q3",
        prompt: `$(2^3)^2$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$16$" },
          { key: "B", text: "$32$" },
          { key: "C", text: "$64$" },
          { key: "D", text: "$128$" }
        ],
        answer: "C",
        explanation: `$(2^3)^2 = 2^{6} = 64$ จึงตอบ C`
      },
      {
        id: "q4",
        prompt: `$5^0$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$0$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$-1$" },
          { key: "D", text: "$1$" }
        ],
        answer: "D",
        explanation: `จำนวนใด ๆ (ที่ไม่ใช่ 0) ยกกำลัง 0 มีค่าเท่ากับ 1 จึงตอบ D`
      },
      {
        id: "q5",
        prompt: `$2^{-3}$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$\\dfrac{1}{8}$" },
          { key: "B", text: "$-8$" },
          { key: "C", text: "$-6$" },
          { key: "D", text: "$8$" }
        ],
        answer: "A",
        explanation: `$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$ จึงตอบ A`
      },
      {
        id: "q6",
        prompt: `$\\sqrt{144}$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$14$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$24$" },
          { key: "D", text: "$72$" }
        ],
        answer: "B",
        explanation: `$12^2 = 144$ ดังนั้น $\\sqrt{144} = 12$ จึงตอบ B`
      },
      {
        id: "q7",
        prompt: `จัดรูป $\\sqrt{50}$ ให้อยู่ในรูปอย่างง่ายได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$2\\sqrt{5}$" },
          { key: "B", text: "$25\\sqrt{2}$" },
          { key: "C", text: "$5\\sqrt{2}$" },
          { key: "D", text: "$10\\sqrt{5}$" }
        ],
        answer: "C",
        explanation: `$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$ จึงตอบ C`
      },
      {
        id: "q8",
        prompt: `จัดรูป $\\sqrt{72}$ ให้อยู่ในรูปอย่างง่ายได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$8\\sqrt{3}$" },
          { key: "B", text: "$3\\sqrt{8}$" },
          { key: "C", text: "$2\\sqrt{18}$" },
          { key: "D", text: "$6\\sqrt{2}$" }
        ],
        answer: "D",
        explanation: `$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$ จึงตอบ D`
      },
      {
        id: "q9",
        prompt: `$\\sqrt{18} + \\sqrt{8}$ เท่ากับข้อใด?`,
        choices: [
          { key: "A", text: "$5\\sqrt{2}$" },
          { key: "B", text: "$\\sqrt{26}$" },
          { key: "C", text: "$6\\sqrt{2}$" },
          { key: "D", text: "$\\sqrt{144}$" }
        ],
        answer: "A",
        explanation: `$3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}$ จึงตอบ A`
      },
      {
        id: "q10",
        prompt: `$\\sqrt{\\sqrt{81}}$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$9$" },
          { key: "B", text: "$3$" },
          { key: "C", text: "$81$" },
          { key: "D", text: "$27$" }
        ],
        answer: "B",
        explanation: `$\\sqrt{81} = 9$ แล้ว $\\sqrt{9} = 3$ จึงตอบ B`
      },
      {
        id: "q11",
        prompt: `จัดรูปรากซ้อนราก $\\sqrt{3 + 2\\sqrt{2}}$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$\\sqrt{2} + 2$" },
          { key: "B", text: "$2 + \\sqrt{3}$" },
          { key: "C", text: "$1 + \\sqrt{2}$" },
          { key: "D", text: "$\\sqrt{3} + 1$" }
        ],
        answer: "C",
        explanation: `$(1 + \\sqrt{2})^2 = 1 + 2\\sqrt{2} + 2 = 3 + 2\\sqrt{2}$ ดังนั้น $\\sqrt{3 + 2\\sqrt{2}} = 1 + \\sqrt{2}$ จึงตอบ C`
      },
      {
        id: "q12",
        prompt: `จัดรูปรากซ้อนราก $\\sqrt{7 + 4\\sqrt{3}}$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$1 + \\sqrt{3}$" },
          { key: "B", text: "$3 + \\sqrt{2}$" },
          { key: "C", text: "$\\sqrt{7} + 2$" },
          { key: "D", text: "$2 + \\sqrt{3}$" }
        ],
        answer: "D",
        explanation: `$(2 + \\sqrt{3})^2 = 4 + 4\\sqrt{3} + 3 = 7 + 4\\sqrt{3}$ ดังนั้น $\\sqrt{7 + 4\\sqrt{3}} = 2 + \\sqrt{3}$ จึงตอบ D`
      },
      {
        id: "q13",
        prompt: `ทำให้ส่วนไม่มีราก (rationalize) ของ $\\dfrac{1}{\\sqrt{2}}$ ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$\\dfrac{\\sqrt{2}}{2}$" },
          { key: "B", text: "$\\dfrac{2}{\\sqrt{2}}$" },
          { key: "C", text: "$\\sqrt{2}$" },
          { key: "D", text: "$\\dfrac{1}{2}$" }
        ],
        answer: "A",
        explanation: `$\\dfrac{1}{\\sqrt{2}} \\times \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$ จึงตอบ A`
      },
      {
        id: "q14",
        prompt: `สังยุค (คอนจูเกต) ของ $3 + \\sqrt{5}$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$-3 + \\sqrt{5}$" },
          { key: "B", text: "$3 - \\sqrt{5}$" },
          { key: "C", text: "$-3 - \\sqrt{5}$" },
          { key: "D", text: "$\\sqrt{5} - 3$" }
        ],
        answer: "B",
        explanation: `คอนจูเกตของ $a + \\sqrt{b}$ คือ $a - \\sqrt{b}$ ดังนั้นคือ $3 - \\sqrt{5}$ จึงตอบ B`
      },
      {
        id: "q15",
        prompt: `ทำให้ส่วนไม่มีราก $\\dfrac{1}{\\sqrt{3} + 1}$ โดยคูณด้วยสังยุค ได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$\\dfrac{\\sqrt{3} + 1}{2}$" },
          { key: "B", text: "$\\sqrt{3} - 1$" },
          { key: "C", text: "$\\dfrac{\\sqrt{3} - 1}{2}$" },
          { key: "D", text: "$\\dfrac{1 - \\sqrt{3}}{2}$" }
        ],
        answer: "C",
        explanation: `คูณด้วย $\\dfrac{\\sqrt{3} - 1}{\\sqrt{3} - 1}$: $\\dfrac{\\sqrt{3} - 1}{3 - 1} = \\dfrac{\\sqrt{3} - 1}{2}$ จึงตอบ C`
      },
      {
        id: "q16",
        prompt: `$(\\sqrt{5} + \\sqrt{2})(\\sqrt{5} - \\sqrt{2})$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$\\sqrt{7}$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$\\sqrt{10}$" },
          { key: "D", text: "$3$" }
        ],
        answer: "D",
        explanation: `$(\\sqrt{5})^2 - (\\sqrt{2})^2 = 5 - 2 = 3$ จึงตอบ D`
      },
      {
        id: "q17",
        prompt: `$8^{\\frac{2}{3}}$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$16$" },
          { key: "C", text: "$64$" },
          { key: "D", text: "$2$" }
        ],
        answer: "A",
        explanation: `$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$ จึงตอบ A`
      },
      {
        id: "q18",
        prompt: `จำนวนใดต่อไปนี้เป็น "จำนวนเฉพาะ"?`,
        choices: [
          { key: "A", text: "$1$" },
          { key: "B", text: "$17$" },
          { key: "C", text: "$21$" },
          { key: "D", text: "$27$" }
        ],
        answer: "B",
        explanation: `$17$ มีตัวประกอบเพียง 1 กับตัวเอง ($21 = 3 \\times 7$, $27 = 3^3$, $1$ ไม่ใช่จำนวนเฉพาะ) จึงตอบ B`
      },
      {
        id: "q19",
        prompt: `จำนวนใดต่อไปนี้หาร $84$ ลงตัว?`,
        choices: [
          { key: "A", text: "$5$" },
          { key: "B", text: "$9$" },
          { key: "C", text: "$7$" },
          { key: "D", text: "$11$" }
        ],
        answer: "C",
        explanation: `$84 = 2^2 \\times 3 \\times 7$ ดังนั้น $7$ หาร $84$ ลงตัว จึงตอบ C`
      },
      {
        id: "q20",
        prompt: `ห.ร.ม. (ตัวหารร่วมมาก) ของ $24$ และ $36$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$72$" },
          { key: "C", text: "$4$" },
          { key: "D", text: "$12$" }
        ],
        answer: "D",
        explanation: `$24 = 2^3 \\times 3$, $36 = 2^2 \\times 3^2$; ห.ร.ม. $= 2^2 \\times 3 = 12$ จึงตอบ D`
      },
      {
        id: "q21",
        prompt: `ใช้วิธียุคลิด (Euclidean algorithm) หา ห.ร.ม. ของ $48$ และ $18$ ได้เท่าใด?`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$2$" }
        ],
        answer: "A",
        explanation: `$48 = 2(18) + 12$; $18 = 1(12) + 6$; $12 = 2(6) + 0$ ห.ร.ม. คือเศษสุดท้ายก่อนเป็นศูนย์ $= 6$ จึงตอบ A`
      },
      {
        id: "q22",
        prompt: `วิธีการของยุคลิด (Euclidean algorithm) ใช้สำหรับหาสิ่งใด?`,
        choices: [
          { key: "A", text: "หาจำนวนเฉพาะ" },
          { key: "B", text: "หา ห.ร.ม. ของจำนวนสองจำนวน" },
          { key: "C", text: "หา ค.ร.น. ของจำนวนสองจำนวน" },
          { key: "D", text: "หารากที่สอง" }
        ],
        answer: "B",
        explanation: `วิธียุคลิดใช้หารเอาเศษซ้ำ ๆ เพื่อหา ห.ร.ม. ของจำนวนสองจำนวน จึงตอบ B`
      },
      {
        id: "q23",
        prompt: `เศษเหลือของ $2^{10}$ เมื่อหารด้วย $3$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$0$" },
          { key: "C", text: "$1$" },
          { key: "D", text: "$3$" }
        ],
        answer: "C",
        explanation: `$2 \\equiv -1 \\pmod{3}$ ดังนั้น $2^{10} \\equiv (-1)^{10} = 1 \\pmod{3}$ เศษ $= 1$ จึงตอบ C`
      },
      {
        id: "q24",
        prompt: `เลขโดดในหลักหน่วยของ $2^{7}$ คือข้อใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$8$" }
        ],
        answer: "D",
        explanation: `$2^7 = 128$ หลักหน่วยคือ $8$ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `จำนวนฐานสอง $1101_2$ มีค่าเท่ากับจำนวนฐานสิบในข้อใด?`,
        choices: [
          { key: "A", text: "$13$" },
          { key: "B", text: "$11$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$9$" }
        ],
        answer: "A",
        explanation: `$1101_2 = 8 + 4 + 0 + 1 = 13$ จึงตอบ A`
      },
      {
        id: "q26",
        prompt: `จำนวนฐานสิบ $25$ เขียนเป็นจำนวนฐานสองได้เป็นข้อใด?`,
        choices: [
          { key: "A", text: "$10011_2$" },
          { key: "B", text: "$11001_2$" },
          { key: "C", text: "$11011_2$" },
          { key: "D", text: "$10101_2$" }
        ],
        answer: "B",
        explanation: `$25 = 16 + 8 + 1 = 11001_2$ จึงตอบ B`
      },
      {
        id: "q27",
        prompt: `จำนวนเฉพาะที่อยู่ระหว่าง $1$ ถึง $10$ มีทั้งหมดกี่จำนวน?`,
        choices: [
          { key: "A", text: "$3$ จำนวน" },
          { key: "B", text: "$5$ จำนวน" },
          { key: "C", text: "$4$ จำนวน" },
          { key: "D", text: "$2$ จำนวน" }
        ],
        answer: "C",
        explanation: `จำนวนเฉพาะคือ $2, 3, 5, 7$ รวม 4 จำนวน จึงตอบ C`
      },
      {
        id: "q28",
        prompt: `ค.ร.น. (ตัวคูณร่วมน้อย) ของ $4$ และ $6$ เท่ากับเท่าใด?`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$24$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$12$" }
        ],
        answer: "D",
        explanation: `พหุคูณร่วมที่น้อยที่สุดของ 4 และ 6 คือ 12 จึงตอบ D`
      },
      {
        id: "q29",
        prompt: `จำนวนใดต่อไปนี้หารด้วย $6$ ลงตัว?`,
        choices: [
          { key: "A", text: "$18$" },
          { key: "B", text: "$20$" },
          { key: "C", text: "$15$" },
          { key: "D", text: "$22$" }
        ],
        answer: "A",
        explanation: `$18 = 6 \\times 3$ หารด้วย 6 ลงตัว (หารด้วยทั้ง 2 และ 3 ลงตัว) จึงตอบ A`
      },
      {
        id: "q30",
        prompt: `จำนวนฐานแปด $17_8$ มีค่าเท่ากับจำนวนฐานสิบในข้อใด?`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$15$" },
          { key: "C", text: "$17$" },
          { key: "D", text: "$23$" }
        ],
        answer: "B",
        explanation: `$17_8 = 1 \\times 8 + 7 = 15$ จึงตอบ B`
      }
    ]
  },

  "quiz6": {
    meta: {
      courseId: "m3-term1-math",
      quizKey: "quiz6",
      title: "Quiz 6 : สามเหลี่ยมและวงกลม (เตรียมสอบเข้า ม.4) (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 3600
    },
    data: [
      // --- ตอนที่ 1 : สามเหลี่ยมและความคล้าย (ข้อ 1-15) ---
      {
        id: "q1",
        prompt: `รูปสามเหลี่ยมมุมฉากรูปหนึ่งมีพื้นที่ $24$ ตารางหน่วย และด้านตรงข้ามมุมฉากยาว $10$ หน่วย ผลบวกของความยาวด้านประกอบมุมฉากทั้งสองด้านเท่ากับกี่หน่วย`,
        choices: [
          { key: "A", text: "$12$" },
          { key: "B", text: "$13$" },
          { key: "C", text: "$14$" },
          { key: "D", text: "$16$" }
        ],
        answer: "C",
        explanation: `ให้ด้านประกอบมุมฉากยาว $a, b$: พื้นที่ $\\Rightarrow ab = 48$; พีทาโกรัส $\\Rightarrow a^2+b^2 = 100$; $(a+b)^2 = a^2+b^2+2ab = 100+96 = 196 \\Rightarrow a+b = 14$ จึงตอบ C`
      },
      {
        id: "q2",
        prompt: `รูปสามเหลี่ยม $ABC$ มีพื้นที่ $54$ ตารางหน่วย จุด $D$ อยู่บน $BC$ โดย $BD:DC = 1:2$ และจุด $E$ เป็นจุดกึ่งกลางของ $AD$ พื้นที่ของรูปสามเหลี่ยม $BEC$ เท่ากับกี่ตารางหน่วย`,
        choices: [
          { key: "A", text: "$18$" },
          { key: "B", text: "$27$" },
          { key: "C", text: "$24$" },
          { key: "D", text: "$36$" }
        ],
        answer: "B",
        explanation: `$E$ เป็นจุดกึ่งกลาง $AD$ ระยะจาก $E$ ถึง $BC$ จึงเป็นครึ่งหนึ่งของระยะจาก $A$ ถึง $BC$ (อัตราส่วน $BD:DC$ ไม่มีผลต่อคำตอบ) พื้นที่ $BEC = \\frac{1}{2}(54) = 27$ ตารางหน่วย จึงตอบ B`
      },
      {
        id: "q3",
        prompt: `จากรูป รูปสามเหลี่ยม $ABC$ มีมุม $A$ เป็นมุมฉาก และ $AD$ ตั้งฉากกับ $BC$ ที่จุด $D$ ถ้า $BD = 5$ หน่วย และ $DC = 20$ หน่วย พื้นที่ของรูปสามเหลี่ยม $ABC$ เท่ากับกี่ตารางหน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_03.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$125$" },
          { key: "B", text: "$120$" },
          { key: "C", text: "$110$" },
          { key: "D", text: "$130$" }
        ],
        answer: "A",
        explanation: `ทฤษฎีบทเส้นสูงในสามเหลี่ยมมุมฉาก $AD^2 = BD \\times DC = 5 \\times 20 = 100 \\Rightarrow AD = 10$; $BC = 25$; พื้นที่ $= \\frac{1}{2}(25)(10) = 125$ ตารางหน่วย จึงตอบ A`
      },
      {
        id: "q4",
        prompt: `รูปสามเหลี่ยมหน้าจั่ว $ABC$ มี $AB = AC = 17$ หน่วย และ $BC = 16$ หน่วย รัศมีของวงกลมที่แนบในรูปสามเหลี่ยมนี้ (incircle) ยาวกี่หน่วย`,
        choices: [
          { key: "A", text: "$4$" },
          { key: "B", text: "$5$" },
          { key: "C", text: "$24/5$" },
          { key: "D", text: "$16/3$" }
        ],
        answer: "C",
        explanation: `ลากเส้นสูงจากยอดแบ่งฐานเป็น $8, 8$: สูง $= \\sqrt{17^2-8^2} = 15$; พื้นที่ $= \\frac{1}{2}(16)(15) = 120$; $s = \\frac{17+17+16}{2} = 25$; $r = \\frac{120}{25} = \\frac{24}{5}$ หน่วย จึงตอบ C`
      },
      {
        id: "q5",
        prompt: `จากรูป $DE$ ขนานกับ $BC$ โดยที่ $AD:DB = 2:3$ ถ้ารูปสี่เหลี่ยมคางหมู $DECB$ มีพื้นที่ $42$ ตารางหน่วย พื้นที่ของรูปสามเหลี่ยม $ADE$ เท่ากับกี่ตารางหน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_05.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$6$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$9$" },
          { key: "D", text: "$8$" }
        ],
        answer: "D",
        explanation: `$DE \\parallel BC$ ทำให้ $\\triangle ADE \\sim \\triangle ABC$ ด้วยอัตราส่วน $AD:AB = 2:5$; อัตราส่วนพื้นที่ $= 4:25$; คางหมู $DECB$ เทียบได้ $25-4=21$ ส่วน $= 42 \\Rightarrow 1$ ส่วน $=2$; พื้นที่ $ADE = 4(2) = 8$ ตารางหน่วย จึงตอบ D`
      },
      {
        id: "q6",
        prompt: `รูปสามเหลี่ยม $ABC$ มีพื้นที่ $90$ ตารางหน่วย จุด $D$ อยู่บน $AB$ โดย $AD:DB = 2:3$ และจุด $E$ อยู่บน $AC$ โดย $AE:EC = 1:2$ พื้นที่ของรูปสามเหลี่ยม $ADE$ เท่ากับกี่ตารางหน่วย`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$12$" },
          { key: "C", text: "$15$" },
          { key: "D", text: "$18$" }
        ],
        answer: "B",
        explanation: `เมื่อสองรูปสามเหลี่ยมมีมุมร่วมกัน (มุม $A$) อัตราส่วนพื้นที่ $= \\frac{AD}{AB} \\times \\frac{AE}{AC} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$; พื้นที่ $ADE = 90 \\times \\frac{2}{15} = 12$ ตารางหน่วย จึงตอบ B`
      },
      {
        id: "q7",
        prompt: `รูปสามเหลี่ยม $ABC$ มีมุม $A$ เป็นมุมฉาก $AB = 9$ หน่วย $AC = 12$ หน่วย ถ้า $AD$ ตั้งฉากกับ $BC$ ที่จุด $D$ แล้ว $BD$ ยาวกี่หน่วย`,
        choices: [
          { key: "A", text: "$4.8$" },
          { key: "B", text: "$5.0$" },
          { key: "C", text: "$6.0$" },
          { key: "D", text: "$5.4$" }
        ],
        answer: "D",
        explanation: `$BC = \\sqrt{9^2+12^2} = 15$; จากสามเหลี่ยมคล้าย $AB^2 = BD \\times BC \\Rightarrow 81 = BD(15) \\Rightarrow BD = 5.4$ หน่วย จึงตอบ D`
      },
      {
        id: "q8",
        prompt: `รูปสามเหลี่ยม $ABC$ มี $AB = 5$ หน่วย $BC = 6$ หน่วย และ $CA = 7$ หน่วย พื้นที่ของรูปสามเหลี่ยมนี้เท่ากับกี่ตารางหน่วย`,
        choices: [
          { key: "A", text: "$6\\sqrt{5}$" },
          { key: "B", text: "$4\\sqrt{6}$" },
          { key: "C", text: "$6\\sqrt{6}$" },
          { key: "D", text: "$12\\sqrt{2}$" }
        ],
        answer: "C",
        explanation: `$s = \\frac{5+6+7}{2} = 9$; จากสูตรเฮรอน พื้นที่ $= \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$ ตารางหน่วย จึงตอบ C`
      },
      {
        id: "q9",
        prompt: `จากรูป $DE$ ขนานกับ $BC$ ถ้าพื้นที่รูปสามเหลี่ยม $ADE$ ต่อพื้นที่รูปสี่เหลี่ยมคางหมู $DECB$ เท่ากับ $9:16$ แล้ว $AD:AB$ เป็นเท่าใด<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_09.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$3:5$" },
          { key: "B", text: "$3:4$" },
          { key: "C", text: "$9:16$" },
          { key: "D", text: "$9:25$" }
        ],
        answer: "A",
        explanation: `พื้นที่ $ADE:$ พื้นที่ $ABC = 9:(9+16) = 9:25$; อัตราส่วนพื้นที่รูปคล้าย $=$ กำลังสองของอัตราส่วนด้าน จึงได้ $AD:AB = 3:5$ จึงตอบ A`
      },
      {
        id: "q10",
        prompt: `รูปสามเหลี่ยมมุมฉากรูปหนึ่งมีด้านประกอบมุมฉากยาว $8$ และ $15$ หน่วย รัศมีของวงกลมแนบในรูปสามเหลี่ยมนี้ยาวกี่หน่วย`,
        choices: [
          { key: "A", text: "$2$" },
          { key: "B", text: "$4$" },
          { key: "C", text: "$3$" },
          { key: "D", text: "$5$" }
        ],
        answer: "C",
        explanation: `ด้านตรงข้ามมุมฉาก $= \\sqrt{8^2+15^2} = 17$; สำหรับสามเหลี่ยมมุมฉาก $r = \\frac{a+b-c}{2} = \\frac{8+15-17}{2} = 3$ หน่วย จึงตอบ C`
      },
      {
        id: "q11",
        prompt: `$\\triangle ABC \\sim \\triangle DEF$ ด้วยอัตราส่วนความยาวด้าน $2:5$ ถ้าเส้นรอบรูป $ABC = 18$ หน่วย เส้นรอบรูป $DEF$ ยาวเท่าใด`,
        choices: [
          { key: "A", text: "$45$" },
          { key: "B", text: "$40$" },
          { key: "C", text: "$36$" },
          { key: "D", text: "$50$" }
        ],
        answer: "A",
        explanation: `อัตราส่วนเส้นรอบรูปเท่ากับอัตราส่วนด้าน $= 2:5$; เส้นรอบรูป $DEF = 18 \\times \\frac{5}{2} = 45$ หน่วย จึงตอบ A`
      },
      {
        id: "q12",
        prompt: `$\\triangle ABC \\sim \\triangle DEF$ โดยมีอัตราส่วนพื้นที่ $16:25$ ถ้าด้าน $BC = 8$ หน่วย ด้าน $EF$ ยาวเท่าใด`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$10$" },
          { key: "C", text: "$9$" },
          { key: "D", text: "$12$" }
        ],
        answer: "B",
        explanation: `อัตราส่วนพื้นที่ $16:25$ ทำให้อัตราส่วนด้าน $= 4:5$; $EF = 8 \\times \\frac{5}{4} = 10$ หน่วย จึงตอบ B`
      },
      {
        id: "q13",
        prompt: `จากรูป $D$ อยู่บน $AB$ และ $E$ อยู่บน $AC$ โดย $AD:AB = 1:2$ และ $AE:AC = 2:3$ อัตราส่วนพื้นที่ $\\triangle ADE$ ต่อพื้นที่ $\\triangle ABC$ เป็นเท่าใด<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_13.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$1:2$" },
          { key: "B", text: "$2:3$" },
          { key: "C", text: "$1:3$" },
          { key: "D", text: "$1:4$" }
        ],
        answer: "C",
        explanation: `เมื่อมีมุมร่วมกัน อัตราส่วนพื้นที่ $= \\frac{AD}{AB} \\times \\frac{AE}{AC} = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$ จึงตอบ C`
      },
      {
        id: "q14",
        prompt: `รูปสามเหลี่ยม $ABC$ มีพื้นที่ $40$ ตารางหน่วย ให้ $AM$ เป็นเส้นมัธยฐานจากจุด $A$ ไปยังจุดกึ่งกลาง $M$ ของ $BC$ พื้นที่ของรูปสามเหลี่ยม $ABM$ เท่ากับกี่ตารางหน่วย`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$15$" },
          { key: "C", text: "$25$" },
          { key: "D", text: "$20$" }
        ],
        answer: "D",
        explanation: `เส้นมัธยฐานแบ่งรูปสามเหลี่ยมออกเป็นสองส่วนที่มีพื้นที่เท่ากันเสมอ พื้นที่ $ABM = \\frac{1}{2}(40) = 20$ ตารางหน่วย จึงตอบ D`
      },
      {
        id: "q15",
        prompt: `รูปสามเหลี่ยมมุมฉากรูปหนึ่งมีความยาวรอบรูป $40$ หน่วย และด้านตรงข้ามมุมฉากยาว $17$ หน่วย พื้นที่ของรูปสามเหลี่ยมนี้เท่ากับกี่ตารางหน่วย`,
        choices: [
          { key: "A", text: "$50$" },
          { key: "B", text: "$60$" },
          { key: "C", text: "$55$" },
          { key: "D", text: "$66$" }
        ],
        answer: "B",
        explanation: `$a+b = 40-17 = 23$; $a^2+b^2 = 17^2 = 289$; $(a+b)^2 = a^2+b^2+2ab \\Rightarrow 529 = 289+2ab \\Rightarrow ab = 120$; พื้นที่ $= \\frac{1}{2}(120) = 60$ ตารางหน่วย จึงตอบ B`
      },

      // --- ตอนที่ 2 : วงกลมและรูปหลายเหลี่ยม (ข้อ 16-30) ---
      {
        id: "q16",
        prompt: `จากรูป วงกลมวงหนึ่งมีรัศมี $17$ หน่วย มีคอร์ด $AB$ ยาว $30$ หน่วย ระยะจากจุดศูนย์กลาง $O$ ของวงกลมถึงคอร์ด $AB$ เท่ากับกี่หน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_16.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$8$" },
          { key: "B", text: "$7$" },
          { key: "C", text: "$6$" },
          { key: "D", text: "$9$" }
        ],
        answer: "A",
        explanation: `เส้นจากจุดศูนย์กลางที่ตั้งฉากกับคอร์ดจะแบ่งครึ่งคอร์ดพอดี ครึ่งคอร์ด $= 15$; ระยะที่ต้องการ $= \\sqrt{17^2-15^2} = \\sqrt{64} = 8$ หน่วย จึงตอบ A`
      },
      {
        id: "q17",
        prompt: `จากรูป จากจุด $P$ ภายนอกวงกลม ลากเส้นตรงตัดวงกลมที่จุด $A$ และ $B$ โดย $PA = 9$ หน่วย และ $AB = 7$ หน่วย ถ้าลากเส้นสัมผัสวงกลมจากจุด $P$ ไปสัมผัสที่จุด $T$ แล้ว $PT$ ยาวกี่หน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_17.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$11$" },
          { key: "C", text: "$13$" },
          { key: "D", text: "$12$" }
        ],
        answer: "D",
        explanation: `$PB = PA+AB = 9+7 = 16$; ทฤษฎีบท Power of a Point: $PT^2 = PA \\times PB = 9 \\times 16 = 144 \\Rightarrow PT = 12$ หน่วย จึงตอบ D`
      },
      {
        id: "q18",
        prompt: `รูปสี่เหลี่ยม $ABCD$ แนบในวงกลมวงหนึ่ง โดยมีขนาดของมุม $A$ เท่ากับ $(3x+10)$ องศา และมุม $C$ เท่ากับ $(2x+30)$ องศา ค่าของ $x$ เท่ากับเท่าใด`,
        choices: [
          { key: "A", text: "$28$" },
          { key: "B", text: "$26$" },
          { key: "C", text: "$30$" },
          { key: "D", text: "$32$" }
        ],
        answer: "A",
        explanation: `มุมตรงข้ามของรูปสี่เหลี่ยมแนบในวงกลมรวมกันได้ $180^\\circ$: $(3x+10)+(2x+30)=180 \\Rightarrow 5x+40=180 \\Rightarrow x=28$ จึงตอบ A`
      },
      {
        id: "q19",
        prompt: `รูปหลายเหลี่ยมด้านเท่ามุมเท่ารูปหนึ่งมีขนาดของมุมภายในแต่ละมุมเท่ากับ $144$ องศา รูปหลายเหลี่ยมนี้มีเส้นทแยงมุมทั้งหมดกี่เส้น`,
        choices: [
          { key: "A", text: "$27$" },
          { key: "B", text: "$35$" },
          { key: "C", text: "$44$" },
          { key: "D", text: "$54$" }
        ],
        answer: "B",
        explanation: `มุมภายนอก $= 180-144 = 36$; จำนวนด้าน $n = 360/36 = 10$; เส้นทแยงมุม $= \\frac{n(n-3)}{2} = \\frac{10 \\times 7}{2} = 35$ เส้น จึงตอบ B`
      },
      {
        id: "q20",
        prompt: `จากรูป วงกลมสองวงรัศมี $3$ หน่วย และ $12$ หน่วย สัมผัสกันภายนอก และมีเส้นตรงเส้นหนึ่งสัมผัสวงกลมทั้งสองวงที่จุด $P$ และ $Q$ ตามลำดับ ระยะ $PQ$ ยาวกี่หน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_20.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$12$" },
          { key: "B", text: "$11$" },
          { key: "C", text: "$10$" },
          { key: "D", text: "$13$" }
        ],
        answer: "A",
        explanation: `สูตรลัด $PQ = 2\\sqrt{r_1 r_2} = 2\\sqrt{3 \\times 12} = 2\\sqrt{36} = 12$ หน่วย จึงตอบ A`
      },
      {
        id: "q21",
        prompt: `จากรูป คอร์ด $AB$ และคอร์ด $CD$ ของวงกลมวงหนึ่งตัดกันที่จุด $P$ ภายในวงกลม ถ้า $AP = 6$ หน่วย $PB = 8$ หน่วย และ $CP = 4$ หน่วย แล้ว $PD$ ยาวกี่หน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_21.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$11$" },
          { key: "C", text: "$14$" },
          { key: "D", text: "$12$" }
        ],
        answer: "D",
        explanation: `ทฤษฎีบทคอร์ดตัดกัน: $AP \\times PB = CP \\times PD \\Rightarrow 48 = 4 \\times PD \\Rightarrow PD = 12$ หน่วย จึงตอบ D`
      },
      {
        id: "q22",
        prompt: `วงกลมวงหนึ่งมีรัศมี $13$ หน่วย มีคอร์ดสองเส้นขนานกันยาว $24$ หน่วย และ $10$ หน่วย อยู่คนละข้างของจุดศูนย์กลาง ระยะระหว่างคอร์ดทั้งสองเท่ากับกี่หน่วย`,
        choices: [
          { key: "A", text: "$7$" },
          { key: "B", text: "$17$" },
          { key: "C", text: "$12$" },
          { key: "D", text: "$19$" }
        ],
        answer: "B",
        explanation: `คอร์ด $24$: ระยะจากศูนย์กลาง $=\\sqrt{13^2-12^2}=5$; คอร์ด $10$: ระยะ $=\\sqrt{13^2-5^2}=12$; อยู่คนละข้าง ระยะรวม $=5+12=17$ หน่วย จึงตอบ B`
      },
      {
        id: "q23",
        prompt: `มุมที่จุดศูนย์กลางของวงกลมรองรับส่วนโค้งหนึ่งมีขนาด $100$ องศา มุมที่เส้นรอบวง (มุมในส่วนโค้งใหญ่) ที่รองรับส่วนโค้งเดียวกันมีขนาดเท่าใด`,
        choices: [
          { key: "A", text: "$50^\\circ$" },
          { key: "B", text: "$40^\\circ$" },
          { key: "C", text: "$80^\\circ$" },
          { key: "D", text: "$100^\\circ$" }
        ],
        answer: "A",
        explanation: `มุมที่เส้นรอบวงมีขนาดเป็นครึ่งหนึ่งของมุมที่จุดศูนย์กลางซึ่งรองรับส่วนโค้งเดียวกัน $= \\frac{100}{2} = 50^\\circ$ จึงตอบ A`
      },
      {
        id: "q24",
        prompt: `เส้นสัมผัสวงกลมทำมุมกับคอร์ดเส้นหนึ่ง $55$ องศา มุมในส่วนโค้งฝั่งตรงข้าม (alternate segment) ที่รองรับคอร์ดเส้นเดียวกันมีขนาดเท่าใด`,
        choices: [
          { key: "A", text: "$35^\\circ$" },
          { key: "B", text: "$110^\\circ$" },
          { key: "C", text: "$90^\\circ$" },
          { key: "D", text: "$55^\\circ$" }
        ],
        answer: "D",
        explanation: `ทฤษฎีบทมุมระหว่างเส้นสัมผัสกับคอร์ด: มุมนี้มีขนาดเท่ากับมุมในส่วนโค้งฝั่งตรงข้ามเสมอ $= 55^\\circ$ จึงตอบ D`
      },
      {
        id: "q25",
        prompt: `จากรูป รูปสามเหลี่ยม $ABC$ แนบในวงกลมโดยมี $BC$ เป็นเส้นผ่านศูนย์กลางยาว $26$ หน่วย ถ้าด้าน $AB = 10$ หน่วย ด้าน $AC$ ยาวกี่หน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_25.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$20$" },
          { key: "B", text: "$22$" },
          { key: "C", text: "$24$" },
          { key: "D", text: "$25$" }
        ],
        answer: "C",
        explanation: `เมื่อด้านหนึ่งของสามเหลี่ยมที่แนบในวงกลมเป็นเส้นผ่านศูนย์กลาง มุมยอด ($A$) จะเป็นมุมฉากเสมอ; $AC = \\sqrt{26^2-10^2} = \\sqrt{576} = 24$ หน่วย จึงตอบ C`
      },
      {
        id: "q26",
        prompt: `รูปหลายเหลี่ยมนูนรูปหนึ่งมีผลบวกของขนาดมุมภายในทั้งหมดเท่ากับ $1440$ องศา รูปหลายเหลี่ยมนี้มีกี่ด้าน`,
        choices: [
          { key: "A", text: "$10$" },
          { key: "B", text: "$9$" },
          { key: "C", text: "$8$" },
          { key: "D", text: "$12$" }
        ],
        answer: "A",
        explanation: `$(n-2) \\times 180 = 1440 \\Rightarrow n-2 = 8 \\Rightarrow n = 10$ ด้าน จึงตอบ A`
      },
      {
        id: "q27",
        prompt: `รูปหลายเหลี่ยมนูนรูปหนึ่งมีเส้นทแยงมุมทั้งหมด $44$ เส้น รูปหลายเหลี่ยมนี้มีกี่ด้าน`,
        choices: [
          { key: "A", text: "$9$" },
          { key: "B", text: "$11$" },
          { key: "C", text: "$10$" },
          { key: "D", text: "$12$" }
        ],
        answer: "B",
        explanation: `$\\frac{n(n-3)}{2} = 44 \\Rightarrow n^2-3n-88=0 \\Rightarrow (n-11)(n+8)=0 \\Rightarrow n=11$ ด้าน จึงตอบ B`
      },
      {
        id: "q28",
        prompt: `จากรูป รูปหกเหลี่ยมด้านเท่ามุมเท่ารูปหนึ่งมีด้านยาวด้านละ $4$ หน่วย พื้นที่ของรูปหกเหลี่ยมนี้เท่ากับกี่ตารางหน่วย<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src="images/q6_28.png" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>`,
        choices: [
          { key: "A", text: "$16\\sqrt{3}$" },
          { key: "B", text: "$20\\sqrt{3}$" },
          { key: "C", text: "$24\\sqrt{3}$" },
          { key: "D", text: "$32\\sqrt{3}$" }
        ],
        answer: "C",
        explanation: `รูปหกเหลี่ยมด้านเท่ามุมเท่าแบ่งได้เป็นสามเหลี่ยมด้านเท่า $6$ รูป ด้านละ $4$; พื้นที่สามเหลี่ยมด้านเท่าด้าน $a = \\frac{\\sqrt{3}}{4}a^2 = \\frac{\\sqrt{3}}{4}(16) = 4\\sqrt{3}$; พื้นที่ทั้งหมด $= 6 \\times 4\\sqrt{3} = 24\\sqrt{3}$ ตารางหน่วย จึงตอบ C`
      },
      {
        id: "q29",
        prompt: `ถ้าคอร์ดสองเส้นของวงกลมวงเดียวกันมีความยาวเท่ากัน ข้อใดสรุปเกี่ยวกับระยะห่างจากจุดศูนย์กลางถึงคอร์ดทั้งสองได้ถูกต้อง`,
        choices: [
          { key: "A", text: "ระยะห่างจากจุดศูนย์กลางถึงคอร์ดทั้งสองต่างกันเสมอ" },
          { key: "B", text: "ระยะห่างจากจุดศูนย์กลางถึงคอร์ดทั้งสองเท่ากันเสมอ" },
          { key: "C", text: "ไม่สามารถสรุปความสัมพันธ์ใด ๆ ได้เลย" },
          { key: "D", text: "คอร์ดทั้งสองต้องขนานกันเสมอ" }
        ],
        answer: "B",
        explanation: `คอร์ดที่มีความยาวเท่ากันในวงกลมวงเดียวกันจะอยู่ห่างจากจุดศูนย์กลางเป็นระยะเท่ากันเสมอ (และในทางกลับกันก็เป็นจริงด้วย) จึงตอบ B`
      },
      {
        id: "q30",
        prompt: `รูปสี่เหลี่ยม $ABCD$ แนบในวงกลมวงหนึ่ง ถ้ามุม $ABC$ มีขนาด $95$ องศา มุม $ADC$ มีขนาดเท่าใด`,
        choices: [
          { key: "A", text: "$75^\\circ$" },
          { key: "B", text: "$80^\\circ$" },
          { key: "C", text: "$95^\\circ$" },
          { key: "D", text: "$85^\\circ$" }
        ],
        answer: "D",
        explanation: `มุมตรงข้ามของรูปสี่เหลี่ยมแนบในวงกลมรวมกัน $180^\\circ$: มุม $ADC = 180-95 = 85^\\circ$ จึงตอบ D`
      }
    ]
  }
};
