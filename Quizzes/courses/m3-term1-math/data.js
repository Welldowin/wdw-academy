window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
    meta: {
      courseId: "m5-summer",
      quizKey: "quiz1",
      title: "Quiz 1 : กฎของแก๊ส (30 ข้อ)",
      enableTimer: true,
      timeLimitSec: 1800 // 30 นาที
    },
    data: [
      {
        id: "q1",
        prompt: `สมการกฎของแก๊สอุดมคติคืออะไร?<br><br>
        <img src="./courses/m5-summer/images/gas-law.png" style="max-width: 100%; border-radius: 8px;">`,
        choices: [
          { key: "A", text: "$PV = nRT$" },
          { key: "B", text: "$P_1V_1 = P_2V_2$" },
          { key: "C", text: "$V \\propto T$" },
          { key: "D", text: "$P_t = P_1 + P_2$" }
        ],
        answer: "A"
      },
      // ... ใส่ให้ครบกี่ข้อก็ได้ ระบบจะนับคะแนนเต็มให้เอง
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