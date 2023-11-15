function setTheme(theme) {
  document.body.className = theme + "-mode";
}
var textarea = document.getElementById("myTextarea");

if (localStorage.getItem("savedText")) {
  textarea.value = localStorage.getItem("savedText");
}
textarea.addEventListener("input", function () {
  localStorage.setItem("savedText", textarea.value);
});
