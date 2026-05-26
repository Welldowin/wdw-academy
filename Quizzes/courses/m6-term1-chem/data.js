window.COURSE_DATA = {
  // ข้อมูลของ quiz1
  "quiz1": {
    meta: {
    courseId: "m6-term1-chem",
    quizKey: "quiz1",
    title: "Quiz 1 : สารประกอบไฮโดรคาร์บอน (แอลเคน ไซโคลแอลเคน แอลคีน) (30 ข้อ)",
    enableTimer: true,
    timeLimitSec: 3600
  },
  data: [
    {
      id: "q1",
      prompt: `โครงสารประกอบในภาพ มีชื่อเรียกตามระบบ IUPAC ว่าอย่างไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/003.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "2-methylbutane" },
        { key: "B", text: "3-methylbutane" },
        { key: "C", text: "pentane" },
        { key: "D", text: "2,2-dimethylpropane" }
      ],
      answer: "A"
    },
    {
      id: "q2",
      prompt: `สารในภาพข้อที่ 1 (2-methylbutane) มีจุดเดือดแตกต่างจากเพนเทน ($n$-pentane) อย่างไร เพราะเหตุใด?`,
      choices: [
        { key: "A", text: "สูงกว่า เพราะมีมวลโมเลกุลมากกว่า" },
        { key: "B", text: "สูงกว่า เพราะโครงสร้างแบบกิ่งมีความหนาแน่นมากกว่า" },
        { key: "C", text: "ต่ำกว่า เพราะมีมวลโมเลกุลน้อยกว่า" },
        { key: "D", text: "ต่ำกว่า เพราะโครงสร้างแบบกิ่งทำให้พื้นที่ผิวสัมผัสระหว่างโมเลกุลลดลง" }
      ],
      answer: "D"
    },
    {
      id: "q3",
      prompt: `จากโครงสร้างแบบเส้นและมุมในภาพ สารประกอบนี้มีชื่อ IUPAC คือข้อใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/004.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "3,6-dimethylheptane" },
        { key: "B", text: "2,5-dimethylheptane" },
        { key: "C", text: "2-ethyl-5-methylhexane" },
        { key: "D", text: "2,5-dimethylhexane" }
      ],
      answer: "B"
    },
    {
      id: "q4",
      prompt: `สารประกอบในภาพข้อที่ 3 ($C_9H_{20}$) ควรมีสถานะใดที่อุณหภูมิห้อง และละลายน้ำได้หรือไม่?`,
      choices: [
        { key: "A", text: "แก๊ส, ไม่ละลายน้ำ" },
        { key: "B", text: "ของเหลว, ไม่ละลายน้ำ" },
        { key: "C", text: "ของเหลว, ละลายน้ำได้ดี" },
        { key: "D", text: "ของแข็ง, ไม่ละลายน้ำ" }
      ],
      answer: "B"
    },
    {
      id: "q5",
      prompt: `จากภาพคือโครงสร้างของสารใด และมีสูตรโมเลกุลเป็นอย่างไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/002.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "Cyclopentane, $C_5H_{10}$" },
        { key: "B", text: "Butane, $C_4H_{10}$" },
        { key: "C", text: "Cyclobutane, $C_4H_8$" },
        { key: "D", text: "Butene, $C_4H_8$" }
      ],
      answer: "C"
    },
    {
      id: "q6",
      prompt: `สารในภาพข้อที่ 5 (Cyclobutane) เป็นไอโซเมอร์โครงสร้าง (Structural isomer) กับสารในข้อใด?`,
      choices: [
        { key: "A", text: "Butane" },
        { key: "B", text: "1-Butene" },
        { key: "C", text: "2-Methylpropane" },
        { key: "D", text: "Cyclopentane" }
      ],
      answer: "B"
    },
    {
      id: "q7",
      prompt: `ข้อใดอธิบายสมบัติความเป็นขั้วของ แอลเคน ไซโคลแอลเคน และแอลคีน ได้ถูกต้องที่สุด?`,
      choices: [
        { key: "A", text: "เป็นโมเลกุลมีขั้วทั้งหมด จึงละลายน้ำได้ดี" },
        { key: "B", text: "แอลเคนไม่มีขั้ว แต่แอลคีนมีขั้วสูงมาก" },
        { key: "C", text: "เป็นโมเลกุลไม่มีขั้วทั้งหมด อาศัยแรงยึดเหนี่ยวแวนเดอร์วาลส์แบบลอนดอน" },
        { key: "D", text: "ไซโคลแอลเคนมีขั้วเพราะเป็นวงปิด ส่วนแอลเคนแบบโซ่เปิดไม่มีขั้ว" }
      ],
      answer: "C"
    },
    {
      id: "q8",
      prompt: `สารประกอบในภาพคือสารใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/001.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "1-butene" },
        { key: "B", text: "2-butene" },
        { key: "C", text: "butane" },
        { key: "D", text: "1-butyne" }
      ],
      answer: "A"
    },
    {
      id: "q9",
      prompt: `เมื่อนำสารในภาพ 001 (1-butene) ไปเผาไหม้ในบรรยากาศที่มีออกซิเจนจำกัด จะเกิดผลลัพธ์ต่างจากบิวเทน (butane) อย่างไร?`,
      choices: [
        { key: "A", text: "1-butene จะเกิดเขม่ามากกว่า เนื่องจากมีสัดส่วนของคาร์บอนต่อไฮโดรเจนสูงกว่า" },
        { key: "B", text: "butane จะเกิดเขม่ามากกว่า เนื่องจากมีจำนวนไฮโดรเจนมากกว่า" },
        { key: "C", text: "เกิดเขม่าเท่ากัน เพราะมีจำนวนคาร์บอน 4 อะตอมเท่ากัน" },
        { key: "D", text: "1-butene จะไม่ติดไฟเลยในสภาวะออกซิเจนจำกัด" }
      ],
      answer: "A"
    },
    {
      id: "q10",
      prompt: `หากมีสารละลายใสไม่มีสี 2 หลอด หลอดหนึ่งคือ Cyclobutane (ภาพ 002) และอีกหลอดคือ 1-butene (ภาพ 001) วิธีการทดสอบในข้อใดเหมาะสมที่สุดในการแยกสารทั้งสองชนิดนี้?`,
      choices: [
        { key: "A", text: "การละลายน้ำ" },
        { key: "B", text: "การหยดสารละลายโบรมีน ($Br_2$) ในที่มืด" },
        { key: "C", text: "การวัดจุดเดือด" },
        { key: "D", text: "การหยดสารละลายกรดไฮโดรคลอริก ($HCl$)" }
      ],
      answer: "B"
    },
    {
      id: "q11",
      prompt: `ปฏิกิริยาระหว่างแอลเคน กับ สารละลายโบรมีน ($Br_2$) จัดเป็นปฏิกิริยาประเภทใด และต้องอาศัยปัจจัยใดในการเกิดปฏิกิริยา?`,
      choices: [
        { key: "A", text: "ปฏิกิริยาการเติม (Addition) / ต้องใช้ตัวเร่งปฏิกิริยาโลหะ" },
        { key: "B", text: "ปฏิกิริยาการแทนที่ (Substitution) / ต้องใช้แสงสว่าง (UV)" },
        { key: "C", text: "ปฏิกิริยาออกซิเดชัน (Oxidation) / เกิดได้ในที่มืด" },
        { key: "D", text: "ปฏิกิริยาการแทนที่ (Substitution) / ต้องต้มให้เดือด" }
      ],
      answer: "B"
    },
    {
      id: "q12",
      prompt: `ข้อใดคือผลิตภัณฑ์พลอยได้ (By-product) ที่เกิดขึ้นเมื่อแอลเคนเกิดปฏิกิริยาการแทนที่ด้วยแก๊สคลอรีน ($Cl_2$) ในที่มีแสง?`,
      choices: [
        { key: "A", text: "$H_2O$" },
        { key: "B", text: "$CO_2$" },
        { key: "C", text: "$HCl$" },
        { key: "D", text: "$H_2$" }
      ],
      answer: "C"
    },
    {
      id: "q13",
      prompt: `โครงสร้างในภาพมีชื่อเรียกตามหลัก IUPAC ว่าอย่างไร?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/005.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "2-methyl-4-pentene" },
        { key: "B", text: "4-methyl-1-pentene" },
        { key: "C", text: "4-methylpentane" },
        { key: "D", text: "2-methyl-5-hexene" }
      ],
      answer: "B"
    },
    {
      id: "q14",
      prompt: `เมื่อสารประกอบในภาพข้อที่ 13 (4-methyl-1-pentene) ทำปฏิกิริยาการเติมกับกรดไฮโดรเจนคลอไรด์ ($HCl$) ผลิตภัณฑ์หลัก (Major product) ที่เกิดขึ้นคือสารใด?`,
      choices: [
        { key: "A", text: "1-chloro-4-methylpentane" },
        { key: "B", text: "2-chloro-4-methylpentane" },
        { key: "C", text: "3-chloro-4-methylpentane" },
        { key: "D", text: "2-chloro-2-methylpentane" }
      ],
      answer: "B"
    },
    {
      id: "q15",
      prompt: `ผลลัพธ์ในข้อ 14 ที่อะตอมไฮโดรเจน (H) จาก $HCl$ เลือกเข้าไปเกาะที่คาร์บอนตำแหน่งพันธะคู่ที่มีจำนวนไฮโดรเจนเกาะอยู่มากกว่า เป็นไปตามกฎของใคร?`,
      choices: [
        { key: "A", text: "กฎของมาร์คอฟนิคอฟ (Markovnikov's rule)" },
        { key: "B", text: "กฎของเซตเซฟ (Zaitsev's rule)" },
        { key: "C", text: "กฎของฮุก (Hooke's law)" },
        { key: "D", text: "กฎของบอยล์ (Boyle's law)" }
      ],
      answer: "A"
    },
    {
      id: "q16",
      prompt: `การเกิดปฏิกิริยาออกซิเดชันของแอลคีนด้วยสารละลายโพแทสเซียมเปอร์แมงกาเนต ($KMnO_4$) จะสังเกตเห็นการเปลี่ยนแปลงทางกายภาพตามข้อใด?`,
      choices: [
        { key: "A", text: "สีม่วงของ $KMnO_4$ เปลี่ยนเป็นใสไม่มีสี และเกิดแก๊สผุดขึ้น" },
        { key: "B", text: "สีม่วงของ $KMnO_4$ หายไป และมีตะกอนสีน้ำตาลดำของ $MnO_2$ เกิดขึ้น" },
        { key: "C", text: "สารละลายเปลี่ยนจากสีส้มเป็นสีเขียว" },
        { key: "D", text: "ไม่เกิดการเปลี่ยนแปลงใดๆ สารละลายยังคงสีม่วง" }
      ],
      answer: "B"
    },
    {
      id: "q17",
      prompt: `จากภาพ 001 (1-butene) หากทำปฏิกิริยากับสารละลาย $KMnO_4$ ในสภาวะที่เป็นกลางหรือเบสอ่อน ผลิตภัณฑ์อินทรีย์ที่เกิดขึ้นคือสารกลุ่มใด?`,
      choices: [
        { key: "A", text: "แอลกอฮอล์ชนิดมีหมู่ -OH 1 หมู่ (Monohydric alcohol)" },
        { key: "B", text: "กรดคาร์บอกซิลิก (Carboxylic acid)" },
        { key: "C", text: "ไกลคอล หรือ ไดออล (Diol) ซึ่งมีหมู่ -OH 2 หมู่เกาะติดกัน" },
        { key: "D", text: "คีโตน (Ketone)" }
      ],
      answer: "C"
    },
    {
      id: "q18",
      prompt: `สารในภาพมีชื่อ IUPAC ตรงกับข้อใด?<br><br>
      <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:center; border: 1px dashed #ccc;">
         <img src="images/006.jpg" alt="รูปประกอบข้อสอบ" style="max-width:100%; border-radius:4px;">
      </div><br>`,
      choices: [
        { key: "A", text: "4-bromo-2-chloro-3-methylhex-1-ene" },
        { key: "B", text: "3-bromo-5-chloro-4-methylhex-5-ene" },
        { key: "C", text: "2-chloro-4-bromo-3-methylhex-1-ene" },
        { key: "D", text: "4-bromo-2-chloro-3-methylhept-1-ene" }
      ],
      answer: "A"
    },
    {
      id: "q19",
      prompt: `เมื่อเปรียบเทียบสารที่มีจำนวนคาร์บอนเท่ากัน ข้อใดเรียงลำดับปริมาณเขม่าจากการเผาไหม้จากมากไปน้อยได้ถูกต้อง?`,
      choices: [
        { key: "A", text: "แอลเคน > แอลคีน > ไซโคลแอลเคน" },
        { key: "B", text: "แอลคีน > ไซโคลแอลเคน > แอลเคน" },
        { key: "C", text: "ไซโคลแอลเคน > แอลเคน > แอลคีน" },
        { key: "D", text: "แอลคีน > แอลเคน > ไซโคลแอลเคน" }
      ],
      answer: "B"
    },
    {
      id: "q20",
      prompt: `นักเรียนทดสอบสารประกอบไฮโดรคาร์บอน A พบว่ามีสถานะเป็นของเหลว ไม่ละลายน้ำ ไม่ฟอกสีสารละลาย $KMnO_4$ แต่สามารถฟอกสีสารละลาย $Br_2$ ได้ช้าๆ เมื่อมีแสงสว่าง สาร A ควรเป็นสารใด?`,
      choices: [
        { key: "A", text: "1-Hexene" },
        { key: "B", text: "Hexane" },
        { key: "C", text: "Benzene" },
        { key: "D", text: "Cyclohexene" }
      ],
      answer: "B"
    },
    {
      id: "q21",
      prompt: `เหตุใดสารประกอบกลุ่มแอลเคนและแอลคีนจึงไม่ละลายในน้ำ?`,
      choices: [
        { key: "A", text: "เพราะน้ำเป็นโมเลกุลไม่มีขั้ว" },
        { key: "B", text: "เพราะแอลเคนมีความหนาแน่นมากกว่าน้ำ" },
        { key: "C", text: "เพราะแอลเคนและแอลคีนเป็นโมเลกุลไม่มีขั้ว จึงไม่สามารถสร้างพันธะไฮโดรเจนกับน้ำที่เป็นโมเลกุลมีขั้วได้" },
        { key: "D", text: "เพราะแอลเคนมีจุดเดือดต่ำเกินไป" }
      ],
      answer: "C"
    },
    {
      id: "q22",
      prompt: `ปฏิกิริยาการเติมแก๊สไฮโดรเจน ($H_2$) ลงในแอลคีนเพื่อเปลี่ยนพันธะคู่ให้กลายเป็นพันธะเดี่ยว (แอลเคน) จำเป็นต้องอาศัยสิ่งใดเป็นตัวเร่งปฏิกิริยา?`,
      choices: [
        { key: "A", text: "แสงสว่าง (UV)" },
        { key: "B", text: "สารละลายกรดแก่ เช่น $H_2SO_4$" },
        { key: "C", text: "โลหะทรานซิชัน เช่น Pt, Pd หรือ Ni" },
        { key: "D", text: "ความดันสูงมากเพียงอย่างเดียวโดยไม่ต้องใช้ตัวเร่ง" }
      ],
      answer: "C"
    },
    {
      id: "q23",
      prompt: `ปฏิกิริยาเคมีในข้อใด <b>ไม่สามารถ</b> เกิดขึ้นได้จริง?`,
      choices: [
        { key: "A", text: "ไซโคลแอลเคน + $O_2$ $\\rightarrow$ $CO_2$ + $H_2O$" },
        { key: "B", text: "แอลเคน + $Br_2$ (ในที่มืด) $\\rightarrow$ เกิดการฟอกสี" },
        { key: "C", text: "แอลคีน + $H_2O$ (มีกรดเป็นตัวเร่ง) $\\rightarrow$ แอลกอฮอล์" },
        { key: "D", text: "แอลคีน + $Br_2$ (ในที่มืด) $\\rightarrow$ เกิดการฟอกสี" }
      ],
      answer: "B"
    },
    {
      id: "q24",
      prompt: `สารประกอบที่มีสูตรโมเลกุล $C_5H_{12}$ ข้อใดที่มีจุดเดือด <b>ต่ำที่สุด</b>?`,
      choices: [
        { key: "A", text: "n-pentane" },
        { key: "B", text: "2-methylbutane" },
        { key: "C", text: "2,2-dimethylpropane" },
        { key: "D", text: "cyclopentane" }
      ],
      answer: "C"
    },
    {
      id: "q25",
      prompt: `การทดสอบในข้อใด <b>ไม่สามารถ</b> นำมาใช้แยกแยะระหว่าง Cyclohexane กับ 1-Hexene ได้?`,
      choices: [
        { key: "A", text: "การละลายน้ำ" },
        { key: "B", text: "การหยดสารละลาย $Br_2$ ในที่มืด" },
        { key: "C", text: "การหยดสารละลาย $KMnO_4$" },
        { key: "D", text: "การสังเกตปริมาณเขม่าจากการเผาไหม้" }
      ],
      answer: "A"
    },
    {
      id: "q26",
      prompt: `แก๊สพิษใดที่เกิดจากการเผาไหม้ที่ไม่สมบูรณ์ของแอลเคน ซึ่งสามารถจับกับฮีโมโกลบินในเลือดได้ดีกว่าออกซิเจน?`,
      choices: [
        { key: "A", text: "คาร์บอนไดออกไซด์ ($CO_2$)" },
        { key: "B", text: "คาร์บอนมอนอกไซด์ ($CO$)" },
        { key: "C", text: "ซัลเฟอร์ไดออกไซด์ ($SO_2$)" },
        { key: "D", text: "ไฮโดรเจนซัลไฟด์ ($H_2S$)" }
      ],
      answer: "B"
    },
    {
      id: "q27",
      prompt: `เหตุผลหลักที่ทำให้แอลคีนมีความว่องไวในการเกิดปฏิกิริยาเคมี (Reactivity) สูงกว่าแอลเคนคืออะไร?`,
      choices: [
        { key: "A", text: "เพราะแอลคีนมีโครงสร้างแบบเส้นตรงเสมอ" },
        { key: "B", text: "เพราะมีพันธะไพ ($\\pi$-bond) ในพันธะคู่ ซึ่งสามารถแตกออกเพื่อเกิดปฏิกิริยาการเติมได้ง่าย" },
        { key: "C", text: "เพราะแอลคีนมีมวลโมเลกุลน้อยกว่าเมื่อเทียบที่จำนวนคาร์บอนเท่ากัน" },
        { key: "D", text: "เพราะแอลคีนเป็นโมเลกุลมีขั้วสูง" }
      ],
      answer: "B"
    },
    {
      id: "q28",
      prompt: `สาร 2-methylbutane (ภาพ 003) สามารถเกิดปฏิกิริยาการแทนที่กับธาตุแฮโลเจนได้ดี กลไกการเกิดปฏิกิริยาดังกล่าวจัดเป็นแบบใด?`,
      choices: [
        { key: "A", text: "ปฏิกิริยาการแทนที่ด้วยนิวคลีโอไฟล์ (Nucleophilic substitution)" },
        { key: "B", text: "ปฏิกิริยาการแทนที่ด้วยอิเล็กโทรไฟล์ (Electrophilic substitution)" },
        { key: "C", text: "ปฏิกิริยาการแทนที่แบบอนุมูลอิสระ (Free radical substitution)" },
        { key: "D", text: "ปฏิกิริยาการกำจัด (Elimination reaction)" }
      ],
      answer: "C"
    },
    {
      id: "q29",
      prompt: `แอลคีนขนาดเล็กเช่น เอทิลีน (Ethene) หรือ โพรพิลีน (Propene) มักถูกนำมาใช้เป็นสารตั้งต้น (Monomer) ในอุตสาหกรรมใด?`,
      choices: [
        { key: "A", text: "การผลิตสบู่และสารซักฟอก" },
        { key: "B", text: "การผลิตพลาสติกและพอลิเมอร์แบบเติม (Addition polymerization)" },
        { key: "C", text: "การผลิตน้ำมันดีเซลชีวภาพ" },
        { key: "D", text: "การผลิตน้ำหอมและสารปรุงแต่งรส" }
      ],
      answer: "B"
    },
    {
      id: "q30",
      prompt: `ข้อใดเรียงลำดับ <b>สูตรทั่วไป (General formula)</b> ของแอลเคนวงเปิด, ไซโคลแอลเคน และแอลคีนวงเปิด ได้ถูกต้องตามลำดับ?`,
      choices: [
        { key: "A", text: "$C_nH_{2n+2}$ , $C_nH_{2n-2}$ , $C_nH_{2n}$" },
        { key: "B", text: "$C_nH_{2n+2}$ , $C_nH_{2n}$ , $C_nH_{2n}$" },
        { key: "C", text: "$C_nH_{2n}$ , $C_nH_{2n+2}$ , $C_nH_{2n-2}$" },
        { key: "D", text: "$C_nH_{2n}$ , $C_nH_{2n}$ , $C_nH_{2n+2}$" }
      ],
      answer: "B"
      }
    ]
  }
};
