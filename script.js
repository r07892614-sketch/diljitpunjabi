// Countdown Timer
let timeLeft = 60;
const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "Time's Up!";
  }
}, 1000);

// Fade animation for Join button
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.7" : "1";
  fade = !fade;
}, 1000);

// Button redirect
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+kpM0z1d46q5kYzBl", "_blank");
});
