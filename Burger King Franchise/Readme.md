## Hosted Link
[Link for Burger King Franchise](https://karan9927.github.io/JavaScript/Burger%20King%20Franchise/)
## Usage
To use the food ordering system, follow these steps:

1. Open the `index.html` file in a web browser.
2. Select one or more food items by checking the corresponding checkboxes.
3. Click the "Place Order" button.
4. Wait for the simulated food preparation time.
5. Receive a unique order ID, view a random food image, and hear a sound effect upon order completion.

## Files

- `index.html`: The main HTML file containing the structure of the food ordering system.
- `styles.css`: The CSS file for styling the user interface.
- `script.js`: The JavaScript file with functions for handling the ordering process.
- `brg-1.jpg`, `brg-2.jpg`, `brg-3.jpg`, `brg-4.jpg`: Random food images for display.
- `sound-effect.mp3`: Sound effect for order completion.

## Functions

### `placeOrder()`

This function is triggered when the user clicks the "Place Order" button. It performs the following steps:

- Retrieves selected food items.
- Displays an alert if no items are selected.
- Logs selected items to the console.
- Appends selected items to the order summary.
- Hides certain elements and disables the order button during processing.
- Simulates food preparation time with a promise.
- Displays order result, including a random food image and a unique order ID.
- Plays a sound effect upon order completion.

### `generateOrderID()`

This function generates a random order ID for simplicity.
