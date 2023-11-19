const accessKey = "CNCsH11Nv_qMXbqyXi-10AKBYIlrXFSRpCiAAz9Fa04";
const searchInput = document.getElementById("search-input");
const imageResults = document.getElementById("imageResults");
const main = document.getElementById("main");
let page = 1;

function searchImages() {
  const query = searchInput.value;
  page = 1;
  imageResults.innerHTML = "";

  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      displayImages(data.results);
      searchInput.value = "";
    })
    .catch((error) => console.log("Error loading image", error));
}

function displayImages(images) {
  console.log("Displaying images:", images);

  images.forEach((image) => {
    const imageElement = document.createElement("img");
    imageElement.src = image.urls.small;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageResult");

    const downloadContainer = document.createElement("div");
    downloadContainer.classList.add("download-container");

    const downloadLink = document.createElement("a");
    downloadLink.href = image.urls.full;
    downloadLink.download = "downloaded_image.jpg";

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download";

    downloadLink.appendChild(downloadButton);
    downloadContainer.appendChild(downloadLink);

    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(downloadContainer);

    imageResults.appendChild(imageContainer);
  });

  page++;
  removeloadmore();

  if (images.length >= 10) {
    loadmore();
  }
}

function loadmore() {
  const loadmorebtn = document.createElement("button");
  loadmorebtn.textContent = "Load More";
  loadmorebtn.onclick = searchImages;
  loadmorebtn.classList.add("loadmore");

  main.appendChild(loadmorebtn);
}

function removeloadmore() {
  const loadmorebtn = document.querySelector(".loadmore");
  if (loadmorebtn) {
    loadmorebtn.remove();
  }
}
