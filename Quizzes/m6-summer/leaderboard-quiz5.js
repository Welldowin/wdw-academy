const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6di6lq-HYIUPFuXRuy0rzg5n3Xw4IsqkvcTbTp3AAzakhXfijGx7XwcTT4IWr-h_3oQ/exec";
const COURSE_ID = "m6-summer";
const QUIZ_KEY = "quiz5";

function formatTime(sec) {
  sec = Number(sec || 0);
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function medalByRank(rank) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "-";
}

function launchFirework(type) {
  if (typeof confetti === 'undefined') return;
  if (type === "gold") {
    confetti({ particleCount: 180, spread: 90, origin: { y: 0.6 }, colors: ["#FFD700", "#FFEC80", "#FFF4B0"] });
  } else if (type === "silver") {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ["#C0C0C0", "#E5E7EB", "#9CA3AF"] });
  } else if (type === "bronze") {
    confetti({ particleCount: 130, spread: 75, origin: { y: 0.6 }, colors: ["#CD7F32", "#B45309", "#F59E0B"] });
  }
}

async function postJSON(payload) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

async function getLeaderboard() {
  return postJSON({ action: "getLeaderboard", courseId: COURSE_ID, quizKey: QUIZ_KEY });
}

function renderMySummary(params) {
  const score = params.get("score") || "-";
  const diamonds = params.get("diamonds") || "-";
  const timeSec = params.get("timeSec") || "0";

  document.getElementById("mySummary").innerHTML = `
    <div class="pill">คะแนน: ${score}/30</div>
    <div class="pill">Diamonds: ${diamonds}</div>
    <div class="pill">เวลา: ${formatTime(timeSec)}</div>
  `;
}

function renderLeaderboard(rows, currentUserId) {
  const tbody = document.getElementById("leaderboardBody");

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="5">ยังไม่มีข้อมูลคะแนน</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map((row, idx) => {
    const rank = idx + 1;
    const isMe = currentUserId && row.userId === currentUserId;
    return `
      <tr class="${isMe ? "rank-me" : ""}">
        <td><strong>${rank}</strong></td>
        <td style="font-size:1.35rem;">${medalByRank(rank)}</td>
        <td>${row.displayName || row.userId}</td>
        <td><strong>${row.score}</strong></td>
        <td>${formatTime(row.timeSec)}</td>
      </tr>
    `;
  }).join("");
}

const params = new URLSearchParams(window.location.search);
renderMySummary(params);

const firework = params.get("firework");
if (firework && firework !== "none") {
  setTimeout(() => launchFirework(firework), 500);
}

if (window.firebaseOnAuthStateChanged && window.firebaseAuth) {
  window.firebaseOnAuthStateChanged(window.firebaseAuth, async (user) => {
    try {
      const result = await getLeaderboard();
      if (!result.ok) throw new Error(result.message || "โหลด leaderboard ไม่สำเร็จ");
      renderLeaderboard(result.rows || [], user?.uid || "");
    } catch (error) {
      console.error(error);
      document.getElementById("leaderboardBody").innerHTML = `<tr><td colspan="5">โหลดข้อมูลไม่สำเร็จ</td></tr>`;
    }
  });
} else {
  getLeaderboard().then(result => {
    if (result.ok) renderLeaderboard(result.rows || [], null);
    else document.getElementById("leaderboardBody").innerHTML = `<tr><td colspan="5">โหลดข้อมูลไม่สำเร็จ</td></tr>`;
  }).catch(err => {
    document.getElementById("leaderboardBody").innerHTML = `<tr><td colspan="5">โหลดข้อมูลไม่สำเร็จ</td></tr>`;
  });
}