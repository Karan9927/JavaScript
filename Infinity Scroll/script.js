const apikey = "tMW5OD0pCGCapMs0COGebdO3p5vZ-PLeyrJ4kF7cjIE";
const apiUrl = "https://api.unsplash.com/photos/";
let page = 1;

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

async function getImages() {
  try {
    const response = await fetch(`${apiUrl}?page=${page}&client_id=${apikey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function displayImages(images) {
  images.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const imgElement = document.createElement("img");
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description;

    imageCard.appendChild(imgElement);
    imageContainer.appendChild(imageCard);
  });
}

async function loadMoreImages() {
  page++;
  const newImages = await getImages();
  displayImages(newImages);
}

// Initial load
getImages().then(displayImages);

// Infinite scroll
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadMoreImages();
  }
});

setTimeout(() => {
  loader.style.display = "none";
  imageContainer.style.display = "block"; // Set to "flex" if it's a flex container
}, 2000);
