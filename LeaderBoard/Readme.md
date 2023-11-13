## Hosted Link
[Link for Leader-board](https://karan9927.github.io/JavaScript/LeaderBoard/)
## Functions

### `onCtaContainerClick`

This function handles the click event on the buttons within the Call to Action (CTA) container. It checks the button text and performs different actions accordingly:
- If the button text is "+5" or "-5", it updates the player's score and then sorts the leaderboard.
- If the button text is "Delete", it removes the corresponding player score card and sorts the leaderboard.

### `updateScore`

This nested function updates the player's score by taking the current score element and the score change (+5 or -5). It parses the current score, adds the change, and updates the score element's text.

### `createCard`

This function creates a player score card with information such as first name, last name, country, and score. It also includes the date and time of card creation. The card is formatted as an HTML string and then converted into a DOM element. Event listeners for the CTA buttons are attached to the card, and the card is returned.

### `sortLeaderBoard`

This function sorts the leaderboard by querying all player score cards, converting them into an array, and then sorting them based on the player scores in descending order. The sorted cards are then appended back to the leaderboard container.

### Event Listener for Form Submission

An event listener is added to the form with the ID `addPlayerScoreForm`. It prevents the default form submission, retrieves input values, and creates a player score card using the `createCard` function. The card is appended to the leaderboard container, and the leaderboard is sorted.

## Usage

To use this code, include the JavaScript file in your HTML document and make sure to have the necessary HTML structure with containers for player score cards and the form for adding new scores.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <h1>Leadership Board</h1>
      <form id="addPlayerScoreForm">
        <input type="text" name="" id="" placeholder="First Name" />
        <input type="text" name="" id="" placeholder="Last Name" />
        <input type="text" name="" id="" placeholder="Country" />
        <input type="number" name="" id="" placeholder="Player Score" />
        <input type="submit" name="" id="submitBtn" value="Add Player" />
      </form>
      <p id="error-msg">All fields are required</p>
      <div class="scorecard-container" id="cardsContainer"></div>
    </main>
    <script src="script.js"></script>
  </body>
</html>

