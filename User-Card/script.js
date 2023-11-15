let firstName = prompt("Enter your First Name:");
let lastName = prompt("Enter your Last Name:");
let country = prompt("Enter your Country:");
let number = prompt("Enter your number:");
let state = prompt("Enter your State:");
let city = prompt("Enter your City:");
let village = prompt("Enter your Village:");

const userCardContainer = document.getElementById("user-card");
userCardContainer.innerHTML = ` <h2>User Information</h2>
<div class="image-container">
  <img class="user-image" src="user-icon.png" alt="" />
</div>
<div>
  <p class="bold">First Name:</p>
  <p>${firstName}</p>
</div>
<div>
  <p class="bold">Last Name:</p>
  <p>${lastName}</p>
</div>
<div>
  <p class="bold">Country:</p>
  <p>${country}</p>
</div>
<div>
  <p class="bold">Phone Number:</p>
  <p>${number}</p>
</div>
<div>
  <p class="bold">State:</p>
  <p>${state}</p>
</div>
<div>
  <p class="bold">City:</p>
  <p>${city}</p>
</div>
<div>
  <p class="bold">Village:</p>
  <p>${village}</p>
</div>`;

function setTheme(theme) {
  document.body.className = theme + "-mode";
}
