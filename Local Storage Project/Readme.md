## Hosted Link
[Hosted Link for Local Storage Project](https://karan9927.github.io/JavaScript/Local%20Storage%20Project)

# Auto Saver Webpage

This webpage allows users to write and automatically save their text in the browser's local storage. Additionally, it includes a theme selector to switch between light and dark modes.

## Usage

1. Open the `index.html` file in your web browser.
2. Use the textarea to write your text.
3. The text is automatically saved to the local storage, so if you close the page and revisit it, your text will be restored.

## Theme Selector

The webpage includes a theme selector with two buttons:

- Light Mode: Click on the sun icon to switch to light mode.
- Dark Mode: Click on the full moon icon to switch to dark mode.

## JavaScript Functions

### `setTheme(theme)`

This function is called when a theme button is clicked. It sets the body's class to the specified theme, updating the page's color scheme.

Example:
```javascript
function setTheme(theme) {
  document.body.className = theme + "-mode";
}
