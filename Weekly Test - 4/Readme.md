## Hosted Link
[Link for Weekly-test 4](https://karan9927.github.io/JavaScript/Weekly%20Test%20-%204/)

# Phone Catalog Web App

This is a simple web app that allows users to search for and view details of various phones using the Programming Hero API.

## Features

### 1. Show Phone Details

The `showDetails` function is responsible for fetching detailed information about a specific phone and displaying it in a modal. The modal includes the phone's image, name, brand, storage, chipset, memory, and sensors.

### 2. Close Modal

The `closeModal` function closes the modal when the user clicks on the close button, restoring the normal scrolling behavior.

### 3. Search Functionality

The `clickHandler` function handles the search functionality. It fetches phones based on the user's input, filters the results, and displays relevant phone cards. It also includes a loading spinner during the API request.

### 4. Create Phone Cards

The `createCard` function dynamically creates HTML elements for each phone retrieved from the API search. Each card includes an image, phone name, sample text, and a "SHOW DETAILS" button.

### 5. Load Default Phones

The `loadPhones` function fetches and displays a default set of phones (in this case, Apple phones) when the page loads.

## Usage

1. Open the `index.html` file in a web browser.
2. The default Apple phones will be loaded.
3. Use the search bar to search for specific phones.
4. Click on the "SHOW DETAILS" button on a card to view detailed information.

## API

The app uses the Programming Hero API (https://openapi.programming-hero.com) to retrieve phone data.

## Dependencies

- The app relies on the Fetch API for making asynchronous requests.
