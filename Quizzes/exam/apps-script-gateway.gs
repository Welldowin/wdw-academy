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
  HELD_SHEET_NAME: "Held",                    // tab ที่เก็บผลสอบที่ถูกถือไว้ (สร้างให้อัตโนมัติ)
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
      case "getHoldStatus":      return getHoldStatus(data);   // นักเรียนเช็คว่าผลถูกปล่อยหรือยัง
      case "getHeld":            return getHeld(data);         // (แอดมิน) รายการที่ถูกถือไว้
      case "decideHeld":         return decideHeld(data);      // (แอดมิน) อนุมัติ/ไม่อนุมัติ
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
  // Anti-cheat: คำนวณคะแนนความเสี่ยงซ้ำจาก signals (ไม่เชื่อค่า score/level ที่หน้าเว็บส่งมา)
  var risk = evalRisk(data.ac);
  if (risk.level === "hold") return holdScore(data, risk);

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
    data.ac ? risk.score : "",                    // M RiskScore (ว่าง = หน้าสอบเก่าที่ไม่มี anti-cheat)
    data.ac ? risk.level : "",                    // N RiskLevel: ok | flag
  ]);
  return json({ ok: true, status: "success", risk: risk.level });
}

// ============ Anti-cheat ============
//  ⚠️ น้ำหนัก/เกณฑ์ต้องตรงกับ RISK ใน shared/anti-cheat.js
var RISK = {
  flagAt: 30, holdAt: 60,
  switchEach: 10, switchCap: 50, awayPer10s: 1, awayCap: 30,
  fastEach: 5, fastCap: 30, uniform: 15, fastHigh: 20,
  clipEach: 5, clipCap: 25, multiTab: 15, quickEach: 10, quickCap: 20,
};

function evalRisk(ac) {
  var sg = ac && ac.signals;
  if (!sg) return { score: 0, level: "ok" };
  var R = RISK, score = 0;
  score += Math.min(R.switchCap, (sg.switches || 0) * R.switchEach);
  score += Math.min(R.awayCap, Math.floor((sg.awaySec || 0) / 10) * R.awayPer10s);
  score += Math.min(R.fastCap, (sg.fastAnswers || 0) * R.fastEach);
  if (sg.uniform) score += R.uniform;
  if (sg.fastHigh) score += R.fastHigh;
  score += Math.min(R.clipCap, (sg.clip || 0) * R.clipEach);
  if (sg.multiTab) score += R.multiTab;
  score += Math.min(R.quickCap, (sg.quick || 0) * R.quickEach);
  score = Math.min(100, score);
  return { score: score, level: score >= R.holdAt ? "hold" : (score >= R.flagAt ? "flag" : "ok") };
}

var HELD_HEADER = ["Timestamp", "UserID", "DisplayName", "CourseID", "TestKey", "TotalScore", "Rank",
  "Skill_Stats", "Chapter_Stats", "Time_Spent", "Answers", "TotalQuestions",
  "RiskScore", "RiskDetail", "Status", "DecidedAt", "HoldId"];

function getHeldSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(CONFIG.HELD_SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(CONFIG.HELD_SHEET_NAME);
    sh.appendRow(HELD_HEADER);
  }
  return sh;
}

// เก็บผลที่เสี่ยงสูงไว้ใน tab Held แทน Scores (leaderboard/ความคืบหน้าจะยังไม่เห็น)
function holdScore(data, risk) {
  var sh = getHeldSheet();
  var holdId = Utilities.getUuid();
  var subject = (data.testKey != null) ? data.testKey : data.quizKey;
  var chapterStats = (data.chapters != null) ? data.chapters : ((data.skills && data.skills.details) || {});
  sh.appendRow([
    new Date(), data.userId, data.displayName, data.courseId, subject,
    data.totalScore, data.rank,
    JSON.stringify(data.skills || {}), JSON.stringify(chapterStats),
    JSON.stringify(data.timeSpent || {}), JSON.stringify(data.answers || {}),
    data.totalQuestions || "",
    risk.score, JSON.stringify(data.ac || {}), "held", "", holdId,
  ]);
  return json({ ok: true, status: "held", holdId: holdId });
}

function readHeldRows() {
  var sh = getHeldSheet();
  var values = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < values.length; i++) {
    var v = values[i];
    out.push({
      row: i + 1, timestamp: v[0], userId: v[1], displayName: v[2], courseId: v[3], testKey: v[4],
      totalScore: v[5], rank: v[6], skillsRaw: v[7], chapterRaw: v[8], timeSpentRaw: v[9],
      answersRaw: v[10], totalQuestions: v[11], riskScore: v[12], riskRaw: v[13],
      status: v[14], decidedAt: v[15], holdId: v[16],
    });
  }
  return out;
}

// (นักเรียน) เช็คสถานะผลที่ถูกถือไว้ — แถวล่าสุดของ user + ชุดสอบ
function getHoldStatus(data) {
  var latest = null;
  readHeldRows().forEach(function (r) {
    if (String(r.userId) !== String(data.userId)) return;
    if (String(r.courseId) !== String(data.courseId)) return;
    if (data.quizKey && String(r.testKey) !== String(data.quizKey)) return;
    if (!latest || new Date(r.timestamp) > new Date(latest.timestamp)) latest = r;
  });
  if (!latest) return json({ ok: true, status: "none" });
  if (latest.status === "released")
    return json({ ok: true, status: "released", totalScore: latest.totalScore, rank: latest.rank, skills: safeParse(latest.skillsRaw) });
  return json({ ok: true, status: latest.status });   // held | rejected
}

// (แอดมิน) รายการที่ถูกถือไว้ — data.status = held (ค่าเริ่มต้น) | released | rejected | all
function getHeld(data) {
  if (!isAdmin(data)) return json({ ok: false, message: "unauthorized" });
  var want = data.status || "held";
  var rows = readHeldRows().filter(function (r) {
    if (want !== "all" && r.status !== want) return false;
    if (data.courseId && String(r.courseId) !== String(data.courseId)) return false;
    return true;
  }).map(function (r) {
    return {
      holdId: r.holdId, timestamp: r.timestamp, userId: r.userId, displayName: r.displayName,
      courseId: r.courseId, testKey: r.testKey, totalScore: r.totalScore, totalQuestions: r.totalQuestions,
      rank: r.rank, riskScore: r.riskScore, status: r.status, decidedAt: r.decidedAt,
      ac: safeParse(r.riskRaw), timeSpent: safeParse(r.timeSpentRaw),
    };
  });
  return json({ ok: true, rows: rows });
}

// (แอดมิน) decision = approve → เขียนลง Scores + ปล่อยผลให้นักเรียน | reject → ไม่ปล่อย
function decideHeld(data) {
  if (!isAdmin(data)) return json({ ok: false, message: "unauthorized" });
  var sh = getHeldSheet();
  var found = null;
  readHeldRows().forEach(function (r) { if (String(r.holdId) === String(data.holdId)) found = r; });
  if (!found) return json({ ok: false, message: "not found" });
  if (found.status !== "held") return json({ ok: false, message: "already " + found.status });

  if (data.decision === "approve") {
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME).appendRow([
      new Date(), found.userId, found.displayName, found.courseId, found.testKey,
      found.totalScore, found.rank, found.skillsRaw, found.chapterRaw, found.timeSpentRaw,
      found.answersRaw, found.totalQuestions, found.riskScore, "approved",
    ]);
    sh.getRange(found.row, 15, 1, 2).setValues([["released", new Date()]]);
  } else if (data.decision === "reject") {
    sh.getRange(found.row, 15, 1, 2).setValues([["rejected", new Date()]]);
  } else {
    return json({ ok: false, message: "decision must be approve|reject" });
  }
  return json({ ok: true });
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
