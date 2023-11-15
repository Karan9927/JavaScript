const showDetails = async (phone) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${phone.slug}`
  );
  const phoneDetails = await response.json();
  const details = phoneDetails.data;
  const features = phoneDetails.data.mainFeatures;

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <img src="${details.image}" alt="Device-Image">
  <p class="bold name">${details.name}</p>
  <p class="brand">Brand: ${phone.brand}</p>
  <p class="storage">Storage: ${features.storage}</p>
  <p class="chipset">Chipset: ${features.chipSet}</p>
  <p class="memory">Memory: ${features.memory}</p>
  <p class="sensors">Sensors: ${features.sensors}</p>
`;
  const modal = document.getElementById("detailsModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  const modal = document.getElementById("detailsModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

const clickHandler = async () => {
  const search = document.getElementById("search");
  const searchedPhone = search.value.toLowerCase();
  const cards = document.getElementById("cards");
  const loader = document.getElementById("loader");
  cards.innerHTML = "";
  loader.style.display = "block";
  setTimeout(async () => {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchedPhone}`
    );
    const allphones = await response.json();
    const phones = allphones.data;
    loader.style.display = "none";

    phones.forEach((phone) => {
      const { phone_name, brand } = phone;
      if (
        phone_name.toLowerCase().includes(searchedPhone) ||
        brand.toLowerCase().includes(searchedPhone)
      ) {
        createCard(phone);
      } else {
        console.log("Nothing Found");
      }
    });
  }, 2000);
};

const createCard = (phone) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
<img class="phone-image" src="${phone.image}">
<p class="phone-name">${phone.phone_name}</p>
<p class="sampleText">There are many variations of passages of available, but the majority have suffered</p>
<button class="show-btn">SHOW DETAILS</button>
`;
  const cardContainer = document.getElementById("cards");
  cardContainer.appendChild(card);

  const showDetailsButton = card.querySelector(".show-btn");
  showDetailsButton.addEventListener("click", () => showDetails(phone));

  return card;
};
const loadPhones = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=apple"
  );
  const allphones = await response.json();
  const phones = allphones.data.slice(0, 6);
  phones.forEach((phones) => {
    createCard(phones);
  });
};
loadPhones();
