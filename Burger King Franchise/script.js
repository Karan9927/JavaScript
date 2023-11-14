function placeOrder() {
  // Get the selected food items

  const selectedFoodItems = document.querySelectorAll(
    'input[name="foodItem"]:checked'
  );

  if (selectedFoodItems.length === 0) {
    alert("Please select at least one food item before placing the order.");
    return; // Stop execution if no checkbox is selected
  }

  // Log the selected food items to the console
  console.log("Ordered Food:");
  selectedFoodItems.forEach((item) => {
    console.log(item.value);
  });
  const selectedItems = document.getElementById("selectedItems");
  selectedFoodItems.forEach((item) => {
    const itemName = item.value;
    const itemElement = document.createElement("p");
    itemElement.textContent = itemName;
    selectedItems.appendChild(itemElement);
  });

  const main = document.getElementById("main");
  main.style.display = "none";
  const cards = document.getElementById("cards");
  cards.style.display = "none";
  const headings = document.getElementById("headings");
  headings.style.display = "none";

  // Disable the order button during processing
  document.getElementById("orderButton").disabled = true;
  document.getElementById("orderButton").style.display = "none";
  // Show loading message
  document.getElementById("loading").style.display = "block";

  // Simulate food preparation with a promise
  const orderPromise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Random time between 2 to 5 seconds
    setTimeout(() => {
      resolve();
    }, randomTime);
  });

  // After the promise is resolved
  orderPromise.then(() => {
    // Hide loading message
    document.getElementById("loading").style.display = "none";

    // Show order result
    const orderResult = document.getElementById("orderResult");
    orderResult.style.display = "block";

    // Display a random food image
    const foodImages = ["brg-1.jpg", "brg-2.jpg", "brg-3.jpg", "brg-4.jpg"];
    const randomImage =
      foodImages[Math.floor(Math.random() * foodImages.length)];
    document.getElementById("foodImage").src = randomImage;

    // Display a unique order ID
    const orderID = document.getElementById("orderID").querySelector("span");
    orderID.textContent = generateOrderID();

    //Sound Effect
    const soundEffect = document.getElementById("soundEffect");
    soundEffect.play();
  });
}

function generateOrderID() {
  // Generate a random order ID (for simplicity)
  return Math.floor(Math.random() * 1000000) + 1;
}
