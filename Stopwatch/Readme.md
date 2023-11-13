## Hosted Link
[Link for Stop-Watch](https://karan9927.github.io/JavaScript/Stopwatch/)
# Stopwatch App

This JavaScript code snippet implements a simple stopwatch app with functions for starting, stopping, resetting, and updating the display. The stopwatch displays elapsed time in hours, minutes, seconds, and milliseconds.

## Variables

- `timer`: A variable to store the interval timer for updating the display.
- `isRunning`: A boolean variable indicating whether the stopwatch is currently running.
- `milliseconds`, `seconds`, `minutes`, `hours`: Variables to keep track of the elapsed time components.

## Functions

### `start()`

This function starts the stopwatch by initiating an interval timer (`timer`) that calls the `updateDisplay` function every 10 milliseconds. It checks if the stopwatch is already running before starting.

### `stop()`

This function stops the stopwatch by clearing the interval timer (`timer`). It sets the `isRunning` flag to false.

### `reset()`

This function resets the stopwatch by clearing the interval timer, resetting the time variables, and updating the display to show "00:00:00:00".

### `updateDisplay()`

This function is called by the interval timer to update the display. It increments the milliseconds and updates the display with the formatted elapsed time.

### `formatTime(time)`

This function formats the time components (hours, minutes, seconds) to ensure they always have two digits. It adds a leading "0" if the time is less than 10.

### `formatMilliseconds(milliseconds)`

This function formats the milliseconds to ensure they always have two digits. It adds a leading "0" if the milliseconds are less than 10.

## Usage

To use this code, include it in your HTML document and create corresponding HTML elements with the specified IDs (`display`). You can also create buttons or other UI elements to interact with the stopwatch functions.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="chronometer.png" type="image/png" />
    <title>Stop-Watch</title>
  </head>
  <body>
    <div class="stopwatch">
      <div id="display">00:00:00:00</div>
    </div>
    <div class="Btns">
      <button id="startBtn" onclick="start()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="white"
          class="bi bi-play"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
          />
        </svg>
      </button>
      <button id="stopBtn" onclick="stop()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="white"
          class="bi bi-pause"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </button>
      <button id="resetBtn" onclick="reset()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="white"
          class="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
          />
        </svg>
      </button>
    </div>
    <script src="script.js"></script>
  </body>
</html>

