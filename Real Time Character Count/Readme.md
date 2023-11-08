## Hosted Link
[Link for Real-time Character Count](https://karan9927.github.io/JavaScript/Real%20Time%20Character%20Count/)
# HTML Tags Used

- `<!DOCTYPE html>`: Specifies the document type and version.
- `<html lang="en>`: Defines the root HTML element with the language set to English.
- `<head>`: Contains metadata and links to external resources.
- `<body>`: Contains the main content of the web page.
  - `<section>`: Represents a section of the page.
    - `<div id="container" class="container">`: A container for the character counter.
      - `<p class="heading">`: A heading for the character counter.
      - `<textarea name="textarea" placeholder="..." id="textarea" cols="50" rows="10" maxlength="50"></textarea>`: Text area for user input.
      - `<div class="counter-container">`: Container for character count information.
        - `<p>Total Characters: <span id="totalch">0</span></p>`: Display of the total character count.
        - `<p>Remaining: <span id="remainingch">50</span></p>`: Display of remaining characters.

# JavaScript Function

The JavaScript code in this project includes the following function:

- `function updateCounter() { ... }`: Updates the character counter in real-time based on the user's input in the text area. It calculates and displays the total characters entered and the remaining characters allowed.

This function is used to provide a real-time character count as the user types in the text area.
