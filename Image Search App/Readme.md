## Hosted Link
[Link for Image Search App](https://karan9927.github.io/JavaScript/Image%20Search%20App/)
# Unsplash Image Search

This repository contains a simple web page that allows users to search for images on Unsplash using their API. The search functionality includes displaying image results, providing a download option for each image, and implementing a "Load More" feature.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter a search query in the provided input field.
3. Click the "Search" button to fetch and display image results.
4. Download any image by clicking the "Download" button.
5. To load more images, click the "Load More" button at the bottom of the page.

## Files

- `index.html`: The main HTML file containing the structure of the image search page.
- `styles.css`: The CSS file for styling the user interface.
- `script.js`: The JavaScript file with functions for searching and displaying images.

## Functions

### `searchImages()`

This function is triggered when the user clicks the "Search" button. It fetches image results from the Unsplash API based on the user's search query. The results are then displayed on the page, and the search input is cleared.

### `displayImages(images)`

This function takes an array of images and displays them on the page. Each image is presented in a container that includes the image itself and a "Download" button. The page is updated to show more images as the user continues to search.

### `loadmore()`

This function creates a "Load More" button that, when clicked, triggers the `searchImages` function to fetch additional images. The button is appended to the main section of the page.

### `removeloadmore()`

This function removes the "Load More" button from the page, preventing duplication.

Feel free to explore and modify this simple image search application for educational purposes or as a foundation for more advanced projects.
