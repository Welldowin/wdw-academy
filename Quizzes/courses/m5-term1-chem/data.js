window.COURSE_DATA = {
  // เพิ่มรหัสวิชาครอบไว้ชั้นนอกสุด
  "m5-term1-chem": {
    // ข้อมูลของ quiz1
    "quiz1": {
      meta: {
        courseId: "m5-term1-chem",
        quizKey: "quiz1",
        title: "Quiz 1 : กฎของบอยล์และกฎของชาร์ล (30 ข้อ)",
        enableTimer: true,
        timeLimitSec: 3600
      },
      data: [
        // --- ทฤษฎี (ข้อ 1 - 9) ---
        {
          id: "q1",
          prompt: `พิจารณากราฟความสัมพันธ์ระหว่างความดัน ($P$) และปริมาตร ($V$) ของแก๊สชนิดหนึ่งต่อไปนี้ แล้วพิจารณาข้อความ ก. ข. และ ค.<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src=".../images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>
      ก. ความดันจะแปรผันตรงกับปริมาตร<br>
      ข. จากกราฟเป็นสภาวะที่อุณหภูมิคงที่<br>
      ค. เรียงลำดับอุณหภูมิได้ดังนี้ $T_3 > T_2 > T_1$<br>
      ข้อใดกล่าวถูกต้อง?`,
          choices: [
            { key: "A", text: "ก และ ข" },
            { key: "B", text: "ข และ ค" },
            { key: "C", text: "ก และ ค" },
            { key: "D", text: "ก ข และ ค" }
          ],
          answer: "B"
        },
        {
          id: "q2",
          prompt: `พิจารณากราฟต่อไปนี้ แล้วพิจารณาข้อความ ก. ข. และ ค.<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src=".../images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>
      ก. กราฟนี้แสดงให้เห็นว่าปริมาตรจะแปรผันตรงกับอุณหภูมิ<br>
      ข. จากกราฟจุดตัดบนแกน $X$ คือ $-273^\\circ\\text{C}$<br>
      ค. เรียงลำดับความดันของแต่ละเส้นกราฟได้ดังนี้ $P_3 > P_2 > P_1$<br>
      ข้อใดกล่าวถูกต้อง?`,
          choices: [
            { key: "A", text: "ก และ ข" },
            { key: "B", text: "ข และ ค" },
            { key: "C", text: "ก และ ค" },
            { key: "D", text: "ก ข และ ค" }
          ],
          answer: "A"
        },
        {
          id: "q3",
          prompt: `พิจารณากราฟเส้นตรงที่ผ่านจุดกำเนิดต่อไปนี้<br><br>
<div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
   <img src=".../images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
</div><br>
      กราฟนี้สามารถแทนความสัมพันธ์ระหว่างตัวแปรบนแกน $Y$ และแกน $X$ ตามกฎของแก๊ส พิจารณาข้อความต่อไปนี้<br>
      ก. แกน $Y$ คือปริมาตร ($V$) และแกน $X$ คืออุณหภูมิ ($T$ ในหน่วยเคลวิน)<br>
      ข. แกน $Y$ คือความดัน ($P$) และแกน $X$ คือส่วนกลับของปริมาตร ($\\frac{1}{V}$)<br>
      ค. แกน $Y$ คือปริมาตร ($V$) และแกน $X$ คือความดัน ($P$)<br>
      ข้อใดระบุแกน $Y$ และ $X$ ของกราฟนี้ได้ถูกต้อง?`,
          choices: [
            { key: "A", text: "ก และ ข" },
            { key: "B", text: "ข และ ค" },
            { key: "C", text: "ก และ ค" },
            { key: "D", text: "ก ข และ ค" }
