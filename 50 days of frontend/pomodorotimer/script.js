const timer = document.getElementById("timer");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const btn25 = document.getElementById("btn25");
const btn50 = document.getElementById("btn50");

let timeLeft = 25 * 60;
let interval = null;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (interval !== null) return;

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(interval);
      interval = null;
      alert("Time's up! 🍅");
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  timeLeft = 25 * 60;
  updateTimer();
});

btn25.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  timeLeft = 25 * 60;
  updateTimer();
});

btn50.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  timeLeft = 50 * 60;
  updateTimer();
});

updateTimer();
