// 📄 quiz-config.js
// ─────────────────────────────────────────────────────────────
//  ไฟล์กลางของระบบสอบ (Exam Engine) — แอดมินแก้ได้ที่ไฟล์นี้ไฟล์เดียว
//
//  หน้าที่:
//   1) เก็บ URL ของ Apps Script กลาง (Plan C) + รหัสผ่านแอดมิน
//   2) นิยาม "ทักษะ" (skill) และเกณฑ์ Rank ที่ใช้ร่วมกันทุกวิชา
//   3) ทะเบียนข้อสอบ (tests) — บอกว่าแต่ละชุดอยู่คอร์สไหน
//      และต้องทำ quiz อะไรมาก่อนถึงจะเข้าสอบได้
//   4) เก็บข้อมูลสัตว์ 16 ตัว (persona) ที่ใช้ร่วมกันทุกวิชา
//
//  ⚠️ "หัวข้อหลัก (chapter)" และ "หัวข้อย่อย (subtopic)" ไม่ได้อยู่ที่นี่
//     แต่ละชุดข้อสอบจะประกาศเองในไฟล์คำถาม (ดู schema ท้ายไฟล์)
//     ไฟล์นี้แค่ทำหน้าที่ "รับคำสั่ง" แล้วไปเรียกไฟล์คำถามของคอร์สนั้นมาประเมิน
// ─────────────────────────────────────────────────────────────

window.QUIZ_CONFIG = {

  // ===========================================================
  // 1) Backend (Apps Script)
  // ===========================================================
  //  examApiUrl = Apps Script "กลาง" ตัวใหม่ (Plan C)
  //  ทำได้ทั้ง: บันทึกผลสอบ / อ่านผลสอบ(แอดมิน) / เช็ค prerequisites
  //  *** หลัง Deploy Apps Script กลางแล้ว เอา URL มาวางทับบรรทัดนี้ ***
  examApiUrl: "https://script.google.com/macros/s/AKfycby2yvvJ17viUPF-UHBqPhudJVH4HDfYlyDHTOSaIELFEFRhucdrILUzNI5RhOZeh0vh/exec",

  // URL ระบบ progress เดิม (เผื่อใช้เป็น fallback ตอนเช็ค prerequisites)
  progressApiUrl: "https://script.google.com/macros/s/AKfycbyDSjGx-TM8L0sZrv-IFyavH3H3Ag1smo-CEtoNrDiIL0oDpLKhrkvqShCq6bdmZQjy/exec",

  // ===========================================================
  // 2) แอดมิน
  // ===========================================================
  //  รหัสผ่านเข้าหน้า admin.html (เปลี่ยนได้ตามต้องการ)
  adminPassword: "142599",

  // ===========================================================
  // 3) ทักษะ (skill) — ใช้ร่วมกันทุกวิชา
  // ===========================================================
  skills: {
    theory: { label: "ทฤษฎี",    icon: "📖" },
    calc:   { label: "คำนวณ",     icon: "🔢" },
    apply:  { label: "ประยุกต์",  icon: "🔧" },
  },

  // ===========================================================
  // 4) เกณฑ์ Rank (เรียงจากสูงไปต่ำ — ระบบจะหยิบตัวแรกที่ผ่าน min)
  // ===========================================================
  rankThresholds: [
    { min: 85, rank: "S", color: "#8b5cf6" },
    { min: 70, rank: "A", color: "#22c55e" },
    { min: 50, rank: "B", color: "#f59e0b" },
    { min: 0,  rank: "C", color: "#ef4444" },
  ],

  // ===========================================================
  // 5) ทะเบียนข้อสอบ  ←★ แอดมินเพิ่ม/แก้ข้อสอบที่นี่ ★
  // ===========================================================
  //  key = "<courseId>__<testKey>"
  //  ไฟล์คำถามจะถูกเรียกอัตโนมัติจาก:
  //      ../courses/<courseId>/tests/<testKey>.js
  //  (ไม่ต้องพิมพ์ path เอง — ระบบเติมให้ตามคอนเวนชัน)
  //
  //  prerequisiteQuizzes = รายชื่อ quizKey ที่ต้องทำให้ครบก่อนเข้าสอบ
  //  ถ้าเว้น [] = เข้าสอบได้เลยไม่ต้องเช็ค
  tests: {

    "m4-term1-chem__test01": {
      courseId: "m4-term1-chem",
      testKey:  "test01",
      title:    "ข้อสอบ : เคมี ม.4 เทอม 1 — โครงสร้างอะตอม (30 ข้อ)",
      prerequisiteQuizzes: ["quiz1", "quiz2", "quiz3", "quiz4"],
      timeLimitSec: 3600,
    },

    "m5-term1-chem__test01": {
      courseId: "m5-term1-chem",
      testKey:  "test01",
      title:    "ข้อสอบ : เคมี ม.5 เทอม 1 — แก๊สและสมบัติของแก๊ส (30 ข้อ)",
      prerequisiteQuizzes: ["quiz1", "quiz2", "quiz3", "quiz4"],
      timeLimitSec: 3600,
    },

    "m5-summer__test01": {
      courseId: "m5-summer",
      testKey:  "test01",
      title:    "Final Test : ฟิสิกส์ ม.5 (SHM, คลื่นกล, แสงเชิงคลื่น)",
      prerequisiteQuizzes: ["quiz1", "quiz2", "quiz3", "quiz4"],
      timeLimitSec: 3600,
    },

    // ── ตัวอย่างการเพิ่มชุดสอบในอนาคต ───────────────────────────
    // "m4-term1-math__test01": {
    //   courseId: "m4-term1-math",
    //   testKey:  "test01",
    //   title:    "Midterm Test : คณิต ม.4 (เซต)",
    //   prerequisiteQuizzes: ["quiz1", "quiz2", "quiz3", "quiz4"],
    //   timeLimitSec: 3600,
    // },
    // "m4-term1-math__test02": {
    //   courseId: "m4-term1-math",
    //   testKey:  "test02",
    //   title:    "Final Test : คณิต ม.4",
    //   prerequisiteQuizzes: ["quiz5", "quiz6", "quiz7"],
    //   timeLimitSec: 3600,
    // },
  },

  // โฟลเดอร์รูป (relative กับ exam/) — รูปสัตว์ + รูปประกอบโจทย์ที่ใช้ร่วม
  imageBase: "images/",

  // ===========================================================
  // 6) สัตว์ 16 ตัว (persona) — ใช้ร่วมกันทุกวิชา
  //    ตัดสินจาก "ทักษะ" (theory/calc/apply) + คะแนนรวม + เวลาเฉลี่ย
  //    ซึ่งเป็นค่ากลางที่ทุกวิชามีเหมือนกัน (ไม่ผูกกับบทเรียนวิชาใดวิชาหนึ่ง)
  // ===========================================================
  personas: [
    { id: "eagle",    name: "🦅 อินทรี (Eagle)",            img: "images/eagle.png",    desc: "ความเป็นเลิศที่รอบด้าน มองทะลุทุกปัญหา",          strength: "คะแนนสูงทุกมิติ แม่นยำทั้งทฤษฎีและคำนวณ",        weakness: "ไม่มีจุดอ่อนเด่นชัด รักษาระดับนี้ไว้ให้ได้!" },
    { id: "dragon",   name: "🐉 มังกร (Dragon)",            img: "images/dragon.png",   desc: "ทรงพลังในบทที่ยากที่สุดและซับซ้อน",              strength: "ทำข้อสอบคำนวณและโจทย์ประยุกต์ลึกๆ ได้ดีเยี่ยม",  weakness: "ระวังความมั่นใจเกินไปจนพลาดทฤษฎีพื้นฐาน" },
    { id: "owl",      name: "🦉 นกฮูก (Owl)",               img: "images/owl.png",      desc: "นักปราชญ์ผู้แม่นยำในนิยามและทฤษฎี",            strength: "จำกฎและนิยามได้แม่นยำ โดนหลอกยาก",            weakness: "ความเร็วในการคิดเลขและการแก้สมการหลายชั้น" },
    { id: "bear",     name: "🐻 หมี (Bear)",                img: "images/bear.png",     desc: "พื้นฐานมั่นคง หนักแน่น ค่อยๆ คิดอย่างรอบคอบ",     strength: "พื้นฐานทฤษฎีแน่นปึ้ก เข้าใจลึกซึ้ง",            weakness: "ปฏิกิริยาต่อโจทย์แนวใหม่ยังช้า ต้องฝึกโจทย์พลิกแพลง" },
    { id: "parrot",   name: "🦜 นกแก้ว (Parrot)",           img: "images/parrot.png",   desc: "ความจำดีเลิศ จำสูตรได้เป๊ะทุกตัว",              strength: "ท่องจำเนื้อหาและสูตรเก่งมาก ไม่ลืมเนื้อหา",      weakness: "การนำสูตรที่ท่องไปประยุกต์ใช้ในสถานการณ์จริง" },
    { id: "cheetah",  name: "🐆 เสือชีตาห์ (Cheetah)",      img: "images/cheetah.png",  desc: "นักทำข้อสอบสายสปีด รวดเร็วปานสายฟ้า",           strength: "ทำข้อสอบไว บริหารเวลาดีเยี่ยม ไม่เคยทำไม่ทัน",   weakness: "มักตกม้าตายเพราะความรีบเร่ง ไม่อ่านโจทย์ให้ละเอียด" },
    { id: "monkey",   name: "🐒 ลิง (Monkey)",              img: "images/monkey.png",   desc: "คล่องแคล่วว่องไว พลิกแพลงสมการเก่ง",            strength: "ย้ายข้างสมการและจัดการตัวเลขได้ไวมาก",        weakness: "ลืมใส่หน่วย หรือพลาดในขั้นตอนการคิดเลขขั้นสุดท้าย" },
    { id: "shark",    name: "🦈 ฉลาม (Shark)",              img: "images/shark.png",    desc: "ดุดัน ไม่กลัวข้อสอบคำนวณที่โหดหิน",             strength: "พุ่งชนโจทย์คำนวณยากๆ ได้ดีเยี่ยม",            weakness: "โจทย์เชิงบรรยายและการวิเคราะห์กราฟ/รูปภาพ" },
    { id: "dolphin",  name: "🐬 โลมา (Dolphin)",            img: "images/dolphin.png",  desc: "มีไหวพริบยอดเยี่ยม ประยุกต์เก่ง",               strength: "เชื่อมโยงเนื้อหาและประยุกต์สูตรเก่งมาก",       weakness: "ความแม่นยำในการคิดเลขซ้ำซ้อน" },
    { id: "fox",      name: "🦊 สุนัขจิ้งจอก (Fox)",         img: "images/fox.png",      desc: "จอมวางแผน รู้ว่าข้อไหนควรข้าม ข้อไหนควรเก็บ",   strength: "บริหารความเสี่ยงเก่ง ทำข้อที่ได้ชัวร์ๆ ก่อน",   weakness: "ชอบทิ้งดิ่งบางบทที่ตัวเองไม่ถนัด ทำให้เสียคะแนนรวม" },
    { id: "spider",   name: "🕷️ แมงมุม (Spider)",           img: "images/spider.png",   desc: "มองทุกอย่างเป็นโครงข่าย เชื่อมโยงได้ทุกบท",      strength: "คะแนนสมดุลทุกบทเรียน ไม่มีบทไหนตกเป็นพิเศษ",    weakness: "ยังขาดความลึกในแต่ละบท ต้องเจาะลึกเฉพาะทาง" },
    { id: "elephant", name: "🐘 ช้าง (Elephant)",           img: "images/elephant.png", desc: "รอบคอบสูงสุด ทำข้อไหนรับประกันว่าถูก",          strength: "ความแม่นยำสูงมาก แทบไม่พลาดข้อที่ทำ",          weakness: "ใช้เวลาตรวจสอบนานเกินไปจนอาจทำข้อสอบไม่ทัน" },
    { id: "tortoise", name: "🐢 เต่า (Tortoise)",           img: "images/tortoise.png", desc: "ช้าแต่มั่นคง ค่อยๆ เป็นค่อยๆ ไป",               strength: "มีความอดทนในการทำความเข้าใจโจทย์",           weakness: "สปีดการทำข้อสอบ ต้องเร่งความเร็วในการวิเคราะห์" },
    { id: "cat",      name: "🐈 แมว (Cat)",                 img: "images/cat.png",      desc: "อินดี้ มีสไตล์ เก่งเฉพาะเรื่องที่ชอบ",          strength: "เทพมากในบทใดบทหนึ่งเป็นพิเศษ",               weakness: "ทิ้งบทที่ไม่ชอบอย่างเห็นได้ชัด ต้องปรับสมดุล" },
    { id: "bee",      name: "🐝 ผึ้ง (Bee)",                img: "images/bee.png",      desc: "ขยันขันแข็ง เก็บรายละเอียดได้ดี",               strength: "มีความพยายามสูง ไม่ปล่อยว่างข้อสอบ",          weakness: "มักจะลนลานเมื่อเจอโจทย์ผสมที่ยากเกินไป" },
    { id: "ant",      name: "🐜 มด (Ant)",                  img: "images/ant.png",      desc: "พลังมดตัวน้อยที่กำลังสะสมความรู้",              strength: "พยายามทำจนครบทุกข้อและมีพื้นฐานเบื้องต้น",     weakness: "ต้องกลับไปทบทวนพื้นฐานทุกบทอย่างเร่งด่วน!" },
  ],
};

// ─────────────────────────────────────────────────────────────
//  helper — หา path ไฟล์คำถามจากคอนเวนชัน (ไม่ต้องแก้)
// ─────────────────────────────────────────────────────────────
window.QUIZ_CONFIG.getQuestionFile = function (courseId, testKey) {
  return `../courses/${courseId}/tests/${testKey}.js`;
};

window.QUIZ_CONFIG.getTest = function (courseId, testKey) {
  return window.QUIZ_CONFIG.tests[`${courseId}__${testKey}`] || null;
};

window.QUIZ_CONFIG.calcRank = function (percent) {
  const t = window.QUIZ_CONFIG.rankThresholds.find(r => percent >= r.min);
  return t || { rank: "-", color: "#9ca3af" };
};

/* ════════════════════════════════════════════════════════════
   📑 SCHEMA ของไฟล์คำถาม  (courses/<courseId>/tests/<testKey>.js)
   ────────────────────────────────────────────────────────────
   แต่ละชุดข้อสอบประกาศ "หัวข้อหลัก/ย่อย/แกนเรดาร์" ของตัวเอง:

   window.TEST_META = {
     courseId: "m5-summer",
     testKey:  "test01",
     title:    "Final Test : ฟิสิกส์ ม.5 ...",
     timeLimitSec: 3600,

     // หัวข้อหลัก (chapter) — key ต้องตรงกับ field "chapter" ในแต่ละข้อ
     chapters: {
       SHM:   { label: "SHM" },
       Wave:  { label: "คลื่นกล" },
       Light: { label: "แสงเชิงคลื่น" },
     },

     // แกนของ Radar Chart — ผสมทักษะ + หัวข้อหลักได้ตามต้องการ
     radarAxes: ["theory", "calc", "apply", "SHM", "Wave", "Light"],
   };

   window.TEST_DATA = [
     {
       id: "q1",
       chapter:  "SHM",                       // หัวข้อหลัก
       subtopic: "การกระจัด ความเร็ว ความเร่ง", // หัวข้อย่อย (ระบบรวมให้อัตโนมัติ)
       skill:    "theory",                    // theory | calc | apply
       image:    "",                          // ใส่ path รูป หรือเว้นว่างถ้าไม่มี
       prompt:   "…",
       choices:  [ { key: "1", text: "…" }, … ],
       answer:   "2",
     },
     …
   ];
   ════════════════════════════════════════════════════════════ */
