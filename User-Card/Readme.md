## Hosted Link
[Link for User-Card](https://karan9927.github.io/JavaScript/User-Card/)
# User Information Display

This simple HTML and JavaScript code collects user information through a series of prompts and then displays it in an HTML container. Additionally, it includes a function to set the theme of the page.

## Usage

1. When the HTML file is opened in a browser, a series of prompts will appear, asking the user to enter their first name, last name, country, phone number, state, city, and village.

2. The entered information is then displayed in a user card format on the web page.

3. The user card includes an image container with a default user icon, and each piece of entered information is displayed with corresponding labels.

## Code Explanation

- The user is prompted to enter various details using the `prompt` function, and the entered values are stored in corresponding variables (`firstName`, `lastName`, `country`, `number`, `state`, `city`, `village`).

- The user card container is accessed using `getElementById`, and its inner HTML is set to include the entered user information. The entered values are displayed dynamically using template literals.

- The `setTheme` function is defined but not used in the provided code snippet. It allows changing the theme of the page by updating the body's class. You can implement a theme switcher that calls this function with different themes.

## Additional Notes

- Ensure that the HTML file includes the necessary structure and a container with the id "user-card" to display the user information.

- Customize the image source (`src`) and other styling elements as needed.

- The code is simple and serves as a basic example. Depending on your application, you might want to add validation, error handling, or further enhancements.
