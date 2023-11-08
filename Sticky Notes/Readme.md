## Hosted Link
[Link for Sticky Notes](https://karan9927.github.io/JavaScript/Sticky%20Notes/)
# HTML Tags Used
- `<!DOCTYPE html`: Specifies the document type and version.
- `<html lang="en>`: Defines the root HTML element with the language set to English.
- `<head>`: Contains metadata and links to external resources.
  - `<meta charset="UTF-8">: Sets the character encoding to UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">: Specifies the viewport settings for responsive design.
  - `<link rel="stylesheet" href="style.css">: Links an external CSS stylesheet.
  - `<title>`: Sets the title of the document.
- `<body>`: Contains the main content of the web page.
  - `<main>`: Represents the main content of the page.
  - `<div id="form-container">`: A container for the feedback form.
    - `<p class="heading">`: A heading for the feedback form.
    - `<div class="rating-container">`: Container for rating options.
      - `<div class="rating">`: Individual rating option.
        - `<img>`: Image representing the rating option.
        - `<p id="unhappy">`: Text label for the rating.
      - (Similar `<div class="rating">` elements for other rating options).
    - `<button id="btn" class="btn">`: Button to submit the feedback.
    - `<p id="error">`: Error message for missing feedback sentiment.
  - `<div id="feedback-container">`: Container for displaying feedback.
    - `<p class="thank">`: A thank-you message.
    - `<p class="fdbk">`: Display of the user's feedback.
    - `<p class="message">`: A message.

# JavaScript Functions

The JavaScript code in this project includes the following functions:

- `let notes = []`: Initializes an array to store user feedback notes.
- `function readInput() { ... }`: Reads user input, validates it, and adds it to the `notes` array.
- `function removeNote(index) { ... }`: Removes a note from the `notes` array.
- `function renderList() { ... }`: Renders the list of notes on the web page, including text and color.

These functions are used to manage and display user feedback on the page.
