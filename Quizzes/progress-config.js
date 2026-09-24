// 📄 progress-config.js
// ─────────────────────────────────────────────────────────────
//  ตั้งค่าหน้า Progress Tracker — พี่แก้ได้ที่ไฟล์นี้ไฟล์เดียว
// ─────────────────────────────────────────────────────────────

// 1) URL ของ Apps Script ตัวใหม่ (Progress) — เอามาวางหลัง Deploy
//    *** อย่าลืมเปลี่ยนเป็น URL จริงหลัง deploy ***
window.PROGRESS_API_URL =
  "https://script.google.com/macros/s/AKfycbyDSjGx-TM8L0sZrv-IFyavH3H3Ag1smo-CEtoNrDiIL0oDpLKhrkvqShCq6bdmZQjy/exec";

// 2) จำนวนคอลัมน์ quiz ทั้งหมดที่จะโชว์ในตารางรวม (เป็น roadmap)
//    ตารางจะมี Q1..Q12 เสมอ แม้ยังเปิดไม่ครบ
window.PROGRESS_TOTAL_QUIZZES = 12;

// 3) รายการคอร์สที่จะให้เลือกใน Dropdown
//    เพิ่ม / ลด คอร์ส = เพิ่มหรือลบ 1 บรรทัด
//    courseId ต้องตรงกับใน Sheet และต้องมีโฟลเดอร์ courses/<courseId>/data.js
//
//    active = จำนวน quiz ที่ "เปิด" แล้ว (นับคะแนน + คิดสัญลักษณ์ 🚀👍💀)
//            • คอลัมน์ที่เกิน active จะเป็นช่องล็อก 🔒 สีจาง ไม่ถูกนับ
//            • เปิด quiz เพิ่ม = เลื่อนเลข active ขึ้น (เช่น 5 → 6)
//            • ระบบจะไม่เปิดเกินจำนวนข้อสอบจริงใน data.js (เปิด quiz ที่ยังไม่มีข้อไม่ได้)
//            • ถ้าไม่ใส่ active = เปิดทุก quiz ที่มีใน data.js โดยอัตโนมัติ
window.PROGRESS_COURSES = [
  // หมายเหตุ: active = จำนวน quiz ที่ "ตั้งใจเปิด" (ระบบจะแสดงไม่เกินจำนวนที่มีจริงใน data.js อยู่แล้ว)
  //           ค่าด้านล่างเผื่ออีก 2 quiz ที่กำลังจะเพิ่ม (quiz ใหม่จะโผล่อัตโนมัติเมื่อมีใน data.js)
  { courseId: "m2-science",       label: "ม.2 — วิทยาศาสตร์" },
  { courseId: "m3-term1-math",    label: "ม.3 เทอม 1 — คณิตศาสตร์", active: 7 },
  { courseId: "m3-term1-science", label: "ม.3 เทอม 1 — วิทยาศาสตร์", active: 8  },
  { courseId: "m4-term1-math",    label: "ม.4 เทอม 1 — คณิตศาสตร์", active: 9 },
  { courseId: "m4-term1-physics", label: "ม.4 เทอม 1 — ฟิสิกส์",    active: 9 },
  { courseId: "m4-term1-chem",    label: "ม.4 เทอม 1 — เคมี",       active: 9 },
  { courseId: "m5-term1-math",    label: "ม.5 เทอม 1 — คณิตศาสตร์", active: 9 },
  { courseId: "m5-term1-physics", label: "ม.5 เทอม 1 — ฟิสิกส์",    active: 9 },
  { courseId: "m5-term1-chem",    label: "ม.5 เทอม 1 — เคมี",       active: 9 },
  { courseId: "m6-term1-math",    label: "ม.6 เทอม 1 — คณิตศาสตร์" },
  { courseId: "m6-term1-physics", label: "ม.6 เทอม 1 — ฟิสิกส์" },
  { courseId: "m6-term1-chem",    label: "ม.6 เทอม 1 — เคมี" },
];