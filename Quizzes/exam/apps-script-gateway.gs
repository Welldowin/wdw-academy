/***************************************************************
 *  WDW Exam Gateway  (Plan C — Apps Script กลางตัวเดียว)
 *  ────────────────────────────────────────────────────────────
 *  วิธีติดตั้ง:
 *   1) เปิด Apps Script ที่ผูกกับชีต "WDW_Exam_Database" (ตัวเดิม)
 *   2) ลบโค้ดเดิมทั้งหมด แล้ววางไฟล์นี้ทับ
 *   3) แก้ค่าใน CONFIG ด้านล่างให้ตรง (รหัสผ่านแอดมิน + URL progress)
 *   4) Deploy > Manage deployments > แก้ deployment เดิม > Version: New
 *      → ได้ URL เดิม ใช้ต่อได้เลย (ไม่ต้องเปลี่ยนใน quiz-config.js)
 *
 *  รับ 1 ประตู ทำได้ 4 อย่าง (เลือกด้วย field "action"):
 *   - submitExam          : บันทึกผลสอบลง tab Scores
 *   - checkPrerequisites  : เช็คว่านักเรียนทำ quiz ที่กำหนดครบหรือยัง
 *   - getResults          : (แอดมิน) ดึงรายชื่อผู้สอบของชุดสอบหนึ่ง
 *   - getStudentDetail    : (แอดมิน) ดึงคำตอบ+เวลารายข้อของนักเรียนคนเดียว
 ***************************************************************/

// ============ CONFIG (แก้ตรงนี้) ============
var CONFIG = {
  SHEET_NAME: "Scores",                       // ชื่อ tab ที่เก็บผลสอบ
  ADMIN_PASSWORD: "142599",           // ต้องตรงกับ adminPassword ใน quiz-config.js
  // progress API เดิม (ใช้เช็ค prerequisites — อ่านชีต progress ให้เราอยู่แล้ว)
  PROGRESS_API_URL: "https://script.google.com/macros/s/AKfycbyDSjGx-TM8L0sZrv-IFyavH3H3Ag1smo-CEtoNrDiIL0oDpLKhrkvqShCq6bdmZQjy/exec",
};

// ============ Entry points ============
function doGet() {
  return json({ ok: true, message: "WDW Exam Gateway is running." });
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action || "submitExam";

    switch (action) {
      case "submitExam":         return saveScore(data);
      case "checkPrerequisites": return checkPrerequisites(data);
      case "getResults":         return getResults(data);
      case "getStudentDetail":   return getStudentDetail(data);
      default:                   return json({ ok: false, message: "unknown action: " + action });
    }
  } catch (err) {
    return json({ ok: false, message: String(err) });
  }
}

// ============ 1) บันทึกผลสอบ ============
//  รองรับทั้ง payload "ใหม่" (testKey/totalQuestions) และ "เก่า" (quizKey/chapters)
//  → หน้าสอบเดิมที่ยิงมา URL เดิมยังทำงานเหมือนเดิมทุกประการ
function saveScore(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);

  var subject = (data.testKey != null) ? data.testKey : data.quizKey;          // E (เก่า=quizKey)
  var chapterStats = (data.chapters != null)                                   // I
    ? data.chapters
    : ((data.skills && data.skills.details) || {});

  sheet.appendRow([
    new Date(),                                   // A Timestamp
    data.userId,                                  // B UserID
    data.displayName,                             // C DisplayName
    data.courseId,                                // D CourseID
    subject,                                       // E Subject (testKey หรือ quizKey)
    data.totalScore,                              // F TotalScore
    data.rank,                                     // G Rank
    JSON.stringify(data.skills || {}),            // H Skill_Stats
    JSON.stringify(chapterStats),                 // I Chapter_Stats
    JSON.stringify(data.timeSpent || {}),         // J Time_Spent
    JSON.stringify(data.answers || {}),           // K Answers
    data.totalQuestions || "",                    // L TotalQuestions
  ]);
  return json({ ok: true, status: "success" });
}

// ============ 2) เช็ค prerequisites (เรียกต่อ progress API เดิม) ============
function checkPrerequisites(data) {
  var required = data.quizKeys || [];
  if (!required.length) return json({ ok: true, missing: [] });

  var resp = UrlFetchApp.fetch(CONFIG.PROGRESS_API_URL, {
    method: "post",
    contentType: "text/plain;charset=utf-8",
    payload: JSON.stringify({ action: "getCourseProgress", courseId: data.courseId }),
    muteHttpExceptions: true,
  });
  var result = JSON.parse(resp.getContentText());
  var rows = result.rows || [];

  var me = null;
  for (var i = 0; i < rows.length; i++) {
    if (String(rows[i].userId) === String(data.userId)) { me = rows[i]; break; }
  }
  var status = (me && me.status) || {};

  var missing = [];
  required.forEach(function (qk) {
    if (status[qk] !== true) missing.push({ quizKey: qk, title: qk });
  });
  return json({ ok: true, missing: missing });
}

// ============ ตรวจรหัสแอดมิน (ทนทานต่อชนิดตัวเลข/เว้นวรรค) ============
//  แปลงเป็น string + trim ทั้งสองฝั่ง กันเคส ADMIN_PASSWORD ถูกใส่เป็นตัวเลข
//  หรือมีช่องว่างติดมา ซึ่งทำให้ !== แบบเดิม fail แล้วขึ้น "unauthorized"
function isAdmin(data) {
  return String(data && data.adminPassword).trim() === String(CONFIG.ADMIN_PASSWORD).trim();
}

// ============ 3) (แอดมิน) รายชื่อผู้สอบของชุดสอบ ============
function getResults(data) {
  if (!isAdmin(data))
    return json({ ok: false, message: "unauthorized" });

  var rows = readScoreRows(data.courseId, data.testKey);
  var out = rows.map(function (r) {
    var timeTotal = sumTime(r.timeSpentRaw);
    return {
      rowId:       r.userId,
      userId:      r.userId,
      displayName: r.displayName,
      totalScore:  r.totalScore,
      totalQuestions: r.totalQuestions,
      rank:        r.rank,
      timeTotal:   timeTotal,
      timestamp:   r.timestamp,
    };
  });
  return json({ ok: true, rows: out });
}

// ============ 4) (แอดมิน) รายละเอียดรายคน ============
function getStudentDetail(data) {
  if (!isAdmin(data))
    return json({ ok: false, message: "unauthorized" });

  var rows = readScoreRows(data.courseId, data.testKey);
  // เอาแถวล่าสุดของ userId นี้
  var latest = null;
  rows.forEach(function (r) {
    if (String(r.userId) === String(data.userId)) {
      if (!latest || new Date(r.timestamp) > new Date(latest.timestamp)) latest = r;
    }
  });
  if (!latest) return json({ ok: false, message: "not found" });

  return json({
    ok: true,
    detail: {
      userId:      latest.userId,
      displayName: latest.displayName,
      totalScore:  latest.totalScore,
      totalQuestions: latest.totalQuestions,
      rank:        latest.rank,
      timestamp:   latest.timestamp,
      skills:      safeParse(latest.skillsRaw),
      timeSpent:   safeParse(latest.timeSpentRaw),
      answers:     safeParse(latest.answersRaw),
    },
  });
}

// ============ helpers ============
function readScoreRows(courseId, testKey) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  var values = sheet.getDataRange().getValues();
  var out = [];
  // แถว 0 = header → เริ่ม 1
  for (var i = 1; i < values.length; i++) {
    var v = values[i];
    if (String(v[3]) !== String(courseId)) continue;     // D CourseID
    if (testKey && String(v[4]) !== String(testKey)) continue; // E Subject/testKey
    out.push({
      timestamp:      v[0],
      userId:         v[1],
      displayName:    v[2],
      courseId:       v[3],
      testKey:        v[4],
      totalScore:     v[5],
      rank:           v[6],
      skillsRaw:      v[7],
      chapterRaw:     v[8],
      timeSpentRaw:   v[9],
      answersRaw:     v[10],
      totalQuestions: v[11],
    });
  }
  return out;
}

function sumTime(raw) {
  var o = safeParse(raw) || {};
  var t = 0;
  for (var k in o) t += Number(o[k]) || 0;
  return t;
}

function safeParse(s) {
  try { return JSON.parse(s); } catch (e) { return null; }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
