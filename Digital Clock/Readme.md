## Hosted Link
[Hosted link for Digital Clock](https://karan9927.github.io/JavaScript/Digital%20Clock/)

# Time Display App

This JavaScript code snippet provides functionality for a simple time display app. It includes two functions: `formatTime` and `updateDisplay`. The app displays the current time in hours, minutes, and seconds, with an indication of whether it is AM or PM.

## Functions

### `formatTime(time)`

This function takes a time parameter and formats it to ensure that it always has two digits. If the time is less than 10, a leading "0" is added. The formatted time is then returned.

### `updateDisplay()`

The `updateDisplay` function is responsible for continuously updating the time display on the webpage. It utilizes the `requestAnimationFrame` method for smooth animations.

Inside the function:
- The current time is obtained using the `Date` object.
- The hours, minutes, and seconds are extracted from the time.
- The appropriate HTML elements (`displayHours`, `displayMinutes`, `displaySeconds`, `displayMidnight`) are selected for updating.
- The period (AM or PM) is determined based on the current hours.
- The hours are converted to a 12-hour format, and the formatted time is displayed in the respective HTML elements.
- The function calls itself recursively using `requestAnimationFrame` to create a smooth animation effect.

## Usage

To use this code, include it in your HTML document, and create corresponding HTML elements with the specified IDs (`hours`, `minutes`, `seconds`, `midnight`) to display the time.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="clock.png" type="image/png" />
    <title>Digital Clock</title>
  </head>
  <body>
    <main>
      <div id="display">
        <div class="display-date"></div>
        <div id="display-time">
          <div id="hours"></div>
          <div id="minutes"></div>
          <div id="seconds"></div>
          <div id="midnight"></div>
        </div>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>

