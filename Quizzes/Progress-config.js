// 📄 progress-config.js
// ─────────────────────────────────────────────────────────────
//  ตั้งค่าหน้า Progress Tracker — พี่แก้ได้ที่ไฟล์นี้ไฟล์เดียว
// ─────────────────────────────────────────────────────────────

// 1) URL ของ Apps Script ตัวใหม่ (Progress) — เอามาวางหลัง Deploy
//    *** อย่าลืมเปลี่ยนเป็น URL จริงหลัง deploy ***
window.PROGRESS_API_URL =
  "https://script.google.com/macros/s/AKfycbz25nXhnMO8KcmNRsFMlAUVJePI8qrpbcEpuFEgpC8alwiHEHZElZWLfELcTDxsF27KDg/exec";

// 2) รายการคอร์สที่จะให้เลือกใน Dropdown
//    เพิ่ม / ลด คอร์ส = เพิ่มหรือลบ 1 บรรทัด
//    courseId ต้องตรงกับใน Sheet และต้องมีโฟลเดอร์ courses/<courseId>/quizmaster.js
window.PROGRESS_COURSES = [
  { courseId: "m3-term1-math",    label: "ม.3 เทอม 1 — คณิตศาสตร์" },
  { courseId: "m3-term1-science", label: "ม.3 เทอม 1 — วิทยาศาสตร์" },
  { courseId: "m4-term1-math",    label: "ม.4 เทอม 1 — คณิตศาสตร์" },
  { courseId: "m4-term1-physics", label: "ม.4 เทอม 1 — ฟิสิกส์" },
  { courseId: "m4-term1-chem",    label: "ม.4 เทอม 1 — เคมี" },
  { courseId: "m5-term1-math",    label: "ม.5 เทอม 1 — คณิตศาสตร์" },
  { courseId: "m5-term1-physics", label: "ม.5 เทอม 1 — ฟิสิกส์" },
  { courseId: "m5-term1-chem",    label: "ม.5 เทอม 1 — เคมี" },
  { courseId: "m6-term1-math",    label: "ม.6 เทอม 1 — คณิตศาสตร์" },
  { courseId: "m6-term1-physics", label: "ม.6 เทอม 1 — ฟิสิกส์" },
  { courseId: "m6-term1-chem",    label: "ม.6 เทอม 1 — เคมี" },
];