let scores = [];

// LOGIN
function login() {
  window.location = "dashboard.html";
}

// SIGNUP
function signup() {
  alert("Signup successful");
}

// ADD SCORE
function addScore() {
  const score = parseInt(document.getElementById("score").value);
  const date = document.getElementById("date").value;

  if (!score || !date) {
    alert("Fill all fields");
    return;
  }

  if (score < 1 || score > 45) {
    alert("Score must be between 1-45");
    return;
  }

  // Prevent duplicate date
  if (scores.some(s => s.date === date)) {
    alert("Score already exists for this date");
    return;
  }

  // Keep only 5 scores
  if (scores.length >= 5) {
    scores.shift();
  }

  scores.push({ score, date });
  loadScores();
}

// DISPLAY SCORES
function loadScores() {
  const list = document.getElementById("scoreList");
  list.innerHTML = "";

  scores.slice().reverse().forEach(s => {
    list.innerHTML += `<li>${s.score} (${s.date})</li>`;
  });
}

// SAVE CHARITY
function saveCharity() {
  const c = document.getElementById("charity").value;
  alert("Charity saved: " + c);
}

// ADMIN DRAW
function runDraw() {
  let draw = [];
  for (let i = 0; i < 5; i++) {
    draw.push(Math.floor(Math.random() * 45) + 1);
  }
  document.getElementById("drawResult").innerText =
    "Draw Numbers: " + draw.join(", ");
}

loadScores();

const supabase = window.supabase.createClient(
  "https://supabase.com/dashboard/project/qrhdzyjnstzniwmbpyrh/settings/api-keys",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyaGR6eWpuc3R6bml3bWJweXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MjczOTQsImV4cCI6MjA5MjUwMzM5NH0.GpPsumI_TgTr1EYrp2pF-VSE-5Z3XpD8mNOet-JR5RI"
);
