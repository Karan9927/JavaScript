let alarmTime;

function set() {
  const hoursInput = document.getElementById("alarmHours");
  const alarmHour = parseInt(hoursInput.value, 10);

  const minutesInput = document.getElementById("alarmMinutes");
  const alarmMinutes = parseInt(minutesInput.value, 10);

  const alarmSeconds = 0;

  alarmTime = `${formatTime(alarmHour)}${formatTime(alarmMinutes)}${formatTime(
    alarmSeconds
  )}`;
  console.log("Alarm hour", alarmHour);
  if (alarmTime === "NaNNaN00") {
    const error = document.getElementById("error");
    error.style.display = "block";
  } else {
    const error = document.getElementById("error");
    error.innerText = "Your Alarm Is Set !";
    error.style.display = "block";

    error.style.color = "green";
    console.log("Alarm is set for :", alarmTime);
  }

  hoursInput.value = "";
  minutesInput.value = "";
}

function stopSound() {
  const soundEffect = document.getElementById("soundEffect");
  if (soundEffect) {
    soundEffect.pause();
    soundEffect.currentTime = 0;
  }
}

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

  const currentTime = `${formatTime(todayHours)}${formatTime(
    todayMinutes
  )}${formatTime(todaySeconds)}`;

  if (alarmTime === currentTime) {
    const soundEffect = document.getElementById("soundEffect");
    soundEffect.play();
  }
  displayHours.textContent = `${formatTime(todayHours)}:`;
  displayMinutes.textContent = `${formatTime(todayMinutes)}:`;
  displaySeconds.textContent = `${formatTime(todaySeconds)}`;
  displayMidnight.textContent = `${period}`;

  requestAnimationFrame(updateDisplay);
}

updateDisplay();
