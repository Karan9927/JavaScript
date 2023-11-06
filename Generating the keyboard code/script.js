const keyboardDisplay = document.getElementById("keyboardDisplay");
const soundEffect = document.getElementById("soundEffect");
const keyid = document.getElementById("keyid");
const keyHistoryDiv = document.getElementById("keyHistory");
const keyHistory = [];

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const keyCode = event.keyCode;

  keyboardDisplay.innerHTML = `You pressed ${key}`;
  keyid.textContent = `${keyCode}`;
  keyid.style.display = "block";
  if (event.ctrlKey && key.toLowerCase() === "z") {
    soundEffect1.play();
  }
  if (event.altKey && key.toLowerCase() === "x") {
    soundEffect2.play();
  }
  if (event.ctrlKey && key.toLowerCase() === "c") {
    soundEffect3.play();
  }
  keyHistory.push(key);
  console.log(keyHistory);
  // keyHistoryDiv.textContent = "Key History: " + keyHistory.join(", ");
});
