const mathQuestionPool = [
  // ปีทาโกรัส
  { question: "สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 3 และ 4 ด้านตรงข้ามมุมฉากยาวเท่าใด?", choices: ["5", "6", "7"], answer: "5" },
  { question: "สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 5 และ 12 ด้านตรงข้ามมุมฉากยาวเท่าใด?", choices: ["13", "14", "15"], answer: "13" },
  { question: "สามเหลี่ยมมุมฉากมีด้านตรงข้ามยาว 10 ด้านประกอบมุมฉากด้านหนึ่งยาว 6 อีกด้านยาวเท่าใด?", choices: ["8", "7", "9"], answer: "8" },
  { question: "สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 8 และ 15 ด้านตรงข้ามมุมฉากยาวเท่าใด?", choices: ["17", "16", "18"], answer: "17" },
  { question: "สามเหลี่ยมมุมฉากมีด้านตรงข้ามยาว 13 ด้านประกอบมุมฉากด้านหนึ่งยาว 5 อีกด้านยาวเท่าใด?", choices: ["12", "11", "10"], answer: "12" },

  // ตรีโกณมิติ มุม 0, 30, 45, 60, 90
  { question: "sin(30°) มีค่าเท่ากับเท่าใด?", choices: ["1/2", "√3/2", "1"], answer: "1/2" },
  { question: "cos(60°) มีค่าเท่ากับเท่าใด?", choices: ["1/2", "√3/2", "0"], answer: "1/2" },
  { question: "tan(45°) มีค่าเท่ากับเท่าใด?", choices: ["1", "0", "หาค่าไม่ได้"], answer: "1" },
  { question: "sin(45°) มีค่าเท่ากับเท่าใด?", choices: ["√2/2", "1/2", "1"], answer: "√2/2" },
  { question: "cos(30°) มีค่าเท่ากับเท่าใด?", choices: ["√3/2", "1/2", "√2/2"], answer: "√3/2" },
  { question: "tan(60°) มีค่าเท่ากับเท่าใด?", choices: ["√3", "1/√3", "1"], answer: "√3" },
  { question: "sin(90°) มีค่าเท่ากับเท่าใด?", choices: ["1", "0", "-1"], answer: "1" },
  { question: "cos(0°) มีค่าเท่ากับเท่าใด?", choices: ["1", "0", "-1"], answer: "1" },
  { question: "tan(30°) มีค่าเท่ากับเท่าใด?", choices: ["1/√3", "√3", "1"], answer: "1/√3" },
  { question: "cos(90°) มีค่าเท่ากับเท่าใด?", choices: ["0", "1", "1/2"], answer: "0" },
  { question: "sin(0°) มีค่าเท่ากับเท่าใด?", choices: ["0", "1", "1/2"], answer: "0" },

  // ตรีโกณมิติ มุม 37 และ 53
  { question: "sin(37°) มีค่าประมาณเท่าใด?", choices: ["3/5", "4/5", "3/4"], answer: "3/5" },
  { question: "cos(37°) มีค่าประมาณเท่าใด?", choices: ["4/5", "3/5", "4/3"], answer: "4/5" },
  { question: "tan(37°) มีค่าประมาณเท่าใด?", choices: ["3/4", "4/3", "3/5"], answer: "3/4" },
  { question: "sin(53°) มีค่าประมาณเท่าใด?", choices: ["4/5", "3/5", "4/3"], answer: "4/5" },
  { question: "cos(53°) มีค่าประมาณเท่าใด?", choices: ["3/5", "4/5", "3/4"], answer: "3/5" },
  { question: "tan(53°) มีค่าประมาณเท่าใด?", choices: ["4/3", "3/4", "4/5"], answer: "4/3" }
];

let remainingMathQuestions = [...mathQuestionPool];

function shuffleArray(arr) {
  const copied = [...arr];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function getRandomMathQuestion() {
  if (remainingMathQuestions.length === 0) {
    remainingMathQuestions = [...mathQuestionPool];
  }

  const randomIndex = Math.floor(Math.random() * remainingMathQuestions.length);
  const q = remainingMathQuestions.splice(randomIndex, 1)[0];

  return {
    question: q.question,
    choices: shuffleArray(q.choices),
    answer: q.answer
  };
}