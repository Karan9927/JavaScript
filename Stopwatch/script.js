let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 10);
  }
  isRunning = true;
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  milliseconds = -1;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  const display = document.getElementById("display");
  display.innerText =
    formatTime(hours) +
    ":" +
    formatTime(minutes) +
    ":" +
    formatTime(seconds) +
    ":" +
    formatMilliseconds(milliseconds);
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function formatMilliseconds(milliseconds) {
  if (milliseconds < 10) {
    return "0" + milliseconds;
  } else {
    return milliseconds;
  }
}
