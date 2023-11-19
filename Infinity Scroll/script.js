const apikey = "tMW5OD0pCGCapMs0COGebdO3p5vZ-PLeyrJ4kF7cjIE";
const apiUrl = "https://api.unsplash.com/photos/";
let page = 1;

const imageContainer = document.getElementById("image-container");
const container = document.getElementById("image-container");
const loader = document.getElementById("loader");
const phoneContainer = document.getElementById("phone-image");

async function getImages() {
  try {
    const response = await fetch(`${apiUrl}?page=${page}&client_id=${apikey}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch images. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw error;
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
  loader.style.display = "block"; // Show loader while fetching
  const newImages = await getImages();
  displayImages(newImages);
  loader.style.display = "none"; // Hide loader after fetching
}

getImages().then(displayImages);

imageContainer.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = imageContainer;
  const threshold = 50;

  if (scrollTop + clientHeight >= scrollHeight - threshold) {
    loadMoreImages();
  }
});

// Adjust the timeout duration based on your loading time
setTimeout(() => {
  loader.style.display = "none";
  container.style.display = "block"; // Set to "flex" if it's a flex container
}, 2000);
