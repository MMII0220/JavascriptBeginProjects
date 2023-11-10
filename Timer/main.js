let timerInterval;
let timerRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const timerDisplay = document.getElementById('timer_display');
const timerContainer = document.getElementById('timer');

timerContainer.addEventListener('click', () => {
  if (timerRunning) {
    stopTimer();
  } else {
    startTimer();
  }
});

function startTimer() {
  timerRunning = true;
  timerInterval = setInterval(updateTimer, 10); // обновление каждые 10 миллисекунд
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
      }
    }
  }

  const formattedTime = formatTime(minutes, seconds, milliseconds);
  timerDisplay.textContent = formattedTime;
}

function formatTime(minutes, seconds, milliseconds) {
  return padZero(minutes) + ':' + padZero(seconds) + ':' + padZero(milliseconds);
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}
