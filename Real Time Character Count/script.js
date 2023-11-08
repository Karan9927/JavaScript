let textarea = document.getElementById("textarea");
let totalCount = document.getElementById("totalch");
let remainingCount = document.getElementById("remainingch");

textarea.addEventListener("input", () => {
  updateCounter();
});

function updateCounter() {
  totalCount.textContent = textarea.value.length;
  remainingCount.textContent = textarea.maxLength - textarea.value.length;
}
