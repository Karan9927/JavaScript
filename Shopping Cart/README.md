## Hosted Link
[Product Cart Link](https://karan9927.github.io/JavaScript/Shopping%20Cart/)

This document provides an overview of the JavaScript code used in the "Shopping Cart" web page.

### `itemList` Array

- `itemList` is an array that contains a list of products. Each product is represented as an object with properties:
  - `id`: Unique identifier for the product.
  - `product`: Name of the product.
  - `price`: Price of the product.

### `populateItems` Function

- The `populateItems` function populates the "Products" section on the web page with items from the `itemList` array. It dynamically generates HTML elements for each product, including the product name, price, and quantity controls.

### Cart Management

- The shopping cart functionality includes adding and removing items from the cart. The cart is displayed in the "Cart" section of the web page.

### `totalCartItemsArr` Array

- `totalCartItemsArr` is an array that keeps track of the items in the shopping cart. Each cart item is represented as an object with properties:
  - `id`: The product's unique identifier.
  - `product`: The product name.
  - `price`: The price of the product.
  - `count`: The quantity of the product in the cart.

### `isCartEmpty` Function

- The `isCartEmpty` function checks if the shopping cart is empty. If it is empty, a message is displayed in the cart section indicating that no products have been added to the cart.

### `updateCart` Function

- The `updateCart` function updates the display of the shopping cart on the web page. It iterates through the items in `totalCartItemsArr` and displays each cart item, including the product name, quantity, and total price.

### `isItemExist` Function

- The `isItemExist` function checks if an item with a given `id` already exists in the shopping cart (`totalCartItemsArr`). It returns the item if it exists.

### `totalPrice` Function

- The `totalPrice` function calculates and displays the total price of all items in the shopping cart.

### Event Listeners

- Event listeners are added to the "Decrease" and "Increase" buttons for each product. These event listeners handle the logic for decreasing and increasing the quantity of products in the cart, updating the cart, and recalculating the total price.
