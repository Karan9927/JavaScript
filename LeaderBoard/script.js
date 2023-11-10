const onCtaContainerClick = (e) => {
  const buttonText = e.target.innerText;
  const scoreElement =
    e.target.parentElement.parentElement.querySelector(".score");

  if (buttonText === "+5" || buttonText === "-5") {
    updateScore(scoreElement, buttonText === "+5" ? 5 : -5);
    sortLeaderBoard();
  } else if (buttonText === "Delete") {
    e.target.parentElement.parentElement.remove();
    sortLeaderBoard();
  }

  function updateScore(scoreElement, change) {
    let currentScore = parseInt(scoreElement.innerText);
    if (!isNaN(currentScore)) {
      currentScore += change;
      scoreElement.innerText = currentScore;
    }
  }
};

const createCard = (firstName, lastName, country, score) => {
  const cardContents = `
  <div>
  <p>${firstName} ${lastName}</p>
  <p></p>
</div>
<div class="country">${country}</div>
<div class="score">${score}</div>
<div class="cta-container">
  <button class="delete">Delete</button>
  <button class="add">+5</button>
  <button class="minus">-5</button>
</div>
    `;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = cardContents;
  card.children[3].addEventListener("click", onCtaContainerClick);
  return card;
};

const sortLeaderBoard = () => {
  //   const cardsArray = [];
  const cards = document.querySelectorAll(".card");
  const cardsArray = Array.from(cards);
  //   for (let i = 0; i < cards.length; i++) {
  //     cardsArray.push(cards[i]);
  //   }
  cardsArray.sort((card1, card2) => {
    const score1 = parseInt(card1.children[2].innerText);
    const score2 = parseInt(card2.children[2].innerText);
    if (score1 > score2) {
      return -1;
    } else if (score2 > score1) {
      return 1;
    } else {
      return 0;
    }
  });
  cardsArray.forEach((card) => {
    cardsContainer.append(card);
  });
};

const addPlayerScoreCard = document.getElementById("addPlayerScoreForm");
const errorMsg = document.getElementById("error-msg");
addPlayerScoreCard.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  const firstName = e.target.children[0].value;
  const lastName = e.target.children[1].value;
  const country = e.target.children[2].value;
  const score = e.target.children[3].value;
  if (!firstName || !lastName || !country || !score) {
    errorMsg.style.display = "block";
    return;
  }
  const card = createCard(firstName, lastName, country, score);
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.appendChild(card);
  console.log(firstName, lastName, country, score);

  e.target.reset();
  sortLeaderBoard();
});
