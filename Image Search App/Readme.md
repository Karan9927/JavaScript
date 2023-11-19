## Hosted Link
[Link for Image Search App](https://karan9927.github.io/JavaScript/Image%20Search%20App/)

# Image Search and Display App

This web application utilizes the Unsplash API to enable users to search for images based on a query. The main components of the application include:

## Functionality

1. **Search Images**: Users can enter a search query in the input field and click the "Search" button. The application fetches image data from Unsplash based on the query.

2. **Display Images**: The fetched images are dynamically displayed on the page, showing a thumbnail of each image along with a "Download" button.

3. **Download Image**: Users can download the full-sized version of an image by clicking the "Download" button associated with each image.

4. **Load More**: If the initial search yields more than 10 images, a "Load More" button is displayed. Clicking this button fetches additional images for the current search query.

## Code Structure

- **HTML (`index.html`)**: Defines the structure of the web page.
- **CSS (`style.css`)**: Provides styles for the layout and appearance of the page.
- **JavaScript (`script.js`)**: Implements the logic for interacting with the Unsplash API, displaying images, and handling user interactions.

## Usage

1. Clone the repository.
2. Open `index.html` in a web browser.
3. Enter a search query, click "Search," and view the results.
4. Optionally, download full-sized images or load more results.

## Dependencies

- [Unsplash API](https://unsplash.com/developers): Requires a valid API key (replace `accessKey` in `script.js`).
- Web browser for running the application.
