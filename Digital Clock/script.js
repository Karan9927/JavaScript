function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}
function updateDisplay() {
  const time = new Date();
  let todayHours = time.getHours();
  const todayMinutes = time.getMinutes();
  const todaySeconds = time.getSeconds();

  const displayHours = document.getElementById("hours");
  const displayMinutes = document.getElementById("minutes");
  const displaySeconds = document.getElementById("seconds");
  const displayMidnight = document.getElementById("midnight");
  let period;
  if (todayHours >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  todayHours = todayHours % 12 || 12;

  displayHours.textContent = `${formatTime(todayHours)}:`;
  displayMinutes.textContent = `${formatTime(todayMinutes)}:`;
  displaySeconds.textContent = `${formatTime(todaySeconds)}`;
  displayMidnight.textContent = `${period}`;

  requestAnimationFrame(updateDisplay);
}

updateDisplay();
