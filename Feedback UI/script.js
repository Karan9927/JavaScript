const ratingContainer = document.querySelector(".rating-container");
const ratingDivs = ratingContainer.querySelectorAll(".rating");
const btn = document.getElementById("btn");
const formContainer = document.getElementById("form-container");
const feedbackContainer = document.getElementById("feedback-container");
const feedback = document.getElementById("feedback");
const error = document.getElementById("error");
let selectedRating = "";

ratingDivs.forEach((ratingDiv) => {
  ratingDiv.addEventListener("click", () => {
    removeActive();
    selectedRating = ratingDiv.querySelector("p").textContent;
    ratingDiv.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (selectedRating !== "") {
    formContainer.style.display = "none";
    feedbackContainer.style.display = "block";
    feedback.textContent = selectedRating;
  } else {
    error.style.display = "block";
  }
});

function removeActive() {
  ratingDivs.forEach((ratingDiv) => {
    ratingDiv.classList.remove("active");
  });
}
