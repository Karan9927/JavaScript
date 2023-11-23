const modalScreen = document.getElementById("modal-screen");
modalScreen.style.display = "none";

let selectedCategory = "";

const createCategoriesList = (categories) => {
  const categoryList = document.getElementById("category-list");
  categories.forEach((category) => {
    const list = document.createElement("li");
    list.textContent = category.list_name;

    list.addEventListener("click", function () {
      selectedCategory = category.list_name;
      fetchBooksbyCategories(selectedCategory);
    });
    categoryList.appendChild(list);
  });
};

const fetchBooksbyCategories = () => {};

const displayCategoty = async () => {
  try {
    const response = await fetch(
      "https://books-backend.p.goit.global/books/category-list"
    );

    const categories = await response.json();
    createCategoriesList(categories);
  } catch (error) {
    console.error("Error fetching Data");
  }
};
displayCategoty();
const truncate = (paragraph, length) => {
  if (paragraph.length > length) {
    return paragraph.substring(0, length) + "...";
  } else {
    return paragraph;
  }
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modalScreen.style.display = "none";
};

const displayModal = (book) => {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  modalScreen.style.display = "flex";
  modal.innerHTML = `
  <div>
  <div class="close-div">
  <button class="closebtn"><img class="close" src="close.png" /></button>
  </div>
  <div class="modal-container">
  <img src=${book.book_image} alt="Book-Image" class="modal-image"/>
  <div class="text-container">
  <h1 class="book-name new">${book.title}</h1>
  <i class="author">${book.author}</i>
  <p class="description">${
    book.description ? book.description : "there is no description of this book"
  }</p>
  <div id="linkss" class="links">
  <img src="amazon.png" href="" />
  <img src="applebook.png" href="" />
  </div>
  </div>
  </div>
  <button class="addtocart">ADD TO SHOPPING LIST</button>
  </div>
  `;
  const close = document.querySelector(".closebtn");
  close.addEventListener("click", () => closeModal());
};

const createCard = (category) => {
  const cards = document.getElementById("book-cards");
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<h1 class="category-h1">${category.list_name}</h1>`;

  const booksContainer = document.createElement("div");
  booksContainer.classList.add("books-container");
  category.books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <img class="book-image" src="${book.book_image}" alt="Book-image" />
      <div class="quick-btn">
      <button class="modal-btn">QUICK VIEW</button>
      </div>
      <p class="book-name">${truncate(book.title, 16)}</p>
      <i class="author">${truncate(book.author, 19)}</i>
    `;

    const modalbtn = bookDiv.querySelector(".modal-btn");
    modalbtn.addEventListener("click", () => displayModal(book));

    booksContainer.appendChild(bookDiv);
  });

  card.appendChild(booksContainer);
  cards.appendChild(card);
};

const fetchBooks = async () => {
  try {
    const response = await fetch(
      "https://books-backend.p.goit.global/books/top-books"
    );
    const allBooks = await response.json();
    allBooks.forEach((category) => {
      createCard(category);
    });
  } catch (error) {
    console.error("Error fetching all books");
  }
};
fetchBooks();

const mybutton = document.getElementById("totop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const container = document.getElementById("swiper-container");
const scrollButton = document.getElementById("scroll");
const scrollAmount = 200; //

scrollButton.addEventListener("click", function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    container.scrollTop = 0;
    scrollButton.classList.remove("rotated");
  } else {
    container.scrollTop += scrollAmount;
  }
});

container.addEventListener("scroll", function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    scrollButton.classList.add("rotated");
  } else {
    scrollButton.classList.remove("rotated");
  }
});

const main = document.getElementById("main");
const signupScreen = document.getElementById("signUpScreen");
const loginScreen = document.getElementById("loginScreen");
const signUp = () => {
  main.style.display = "none";
  signupScreen.style.display = "flex";
  loginScreen.style.display = "none";
  document.body.style.backgroundColor = "#4f2ee8";
};

const closeSignup = () => {
  main.style.display = "";
  loginScreen.style.display = "none";
  document.body.style.backgroundColor = "";
  signupScreen.style.display = "none";
};

const openlogin = () => {
  main.style.display = "none";
  signupScreen.style.display = "none";
  loginScreen.style.display = "flex";
  document.body.style.backgroundColor = "#4f2ee8";
};
const closelogin = () => {
  main.style.display = "";
  loginScreen.style.display = "none";
  document.body.style.backgroundColor = "";
  signupScreen.style.display = "none";
};

function signup(event) {
  event.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful!");
    closeSignup();
    openlogin();
  } else {
    alert("Please fill in all fields.");
  }
}

function login(event) {
  event.preventDefault();
  const enteredUsername = document.getElementById("loginUsername").value;
  const enteredPassword = document.getElementById("loginPassword").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    closelogin();
    const greet = document.getElementById("greet");
    greet.innerText = `Hello, ${storedUsername}`;
  } else {
    alert("Invalid username or password.");
  }
}
document
  .getElementById("signup-btn")
  .addEventListener("click", function (event) {
    signup(event);
  });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    login(event);
  });
function toggleMode() {
  const body = document.body;
  const modeToggle = document.getElementById("modeToggle");

  if (modeToggle.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const modeToggle = document.getElementById("modeToggle");

  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    modeToggle.checked = true;
  } else {
    body.classList.add("light-mode");
    modeToggle.checked = false;
  }
});

const content = document.getElementById("content");
content.style.display = "none";
loader.style.display = "block";
setTimeout(() => {
  const loader = document.getElementById("loader");

  loader.style.display = "none";
  content.style.display = "block";
}, 2000);
