## Hosted link
[Link for Emoji search project](https://karan9927.github.io/JavaScript/emoji/)

## HTML Tags Used

- `<body>`: Document body
- `<div>`: Division/container
- `<h1>`: Heading level 1
- `<br>`: Line break
- `<hr>`: Horizontal rule
- `<form>`: Form container
- `<input>`: Input field
- `<table>`: Table container
- `<tbody>`: Table body
- `<script>`: Script inclusion

# JavaScript File Overview
## Functions
### `searchEmoji`
- Handles form submission for emoji search.
- Prevents the default form submission behavior.
- Retrieves the input value from the search field and logs it to the console.
- Calls the `displaySearchResults` function with the input value.
- Returns `false` to prevent page refresh.

### `autoSearch`
- Manages automatic search as the user types.
- Retrieves the input value from the search field and logs it to the console.
- Calls the `displaySearchResults` function with the input value.

### `displaySearchResults`
- Filters and displays search results based on the provided search query.
- Clears the content of the search result container.
- Creates and appends new table rows with emoji details to the container.

## Event Listeners

- Listens for the form submission event on the search form and calls the `searchEmoji` function.
- Listens for the keyup event on the search field and calls the `autoSearch` function.

## Window Load

- Calls the `displaySearchResults` function when the window loads.

## Notes
- There is a typo in the code: `document.getElementById("serach_field").value;` should be `document.getElementById("search_field").value;` to correctly select the search field.
- The code assumes the existence of an `emojiList` array, presumably containing objects with emoji details such as `emoji`, `aliases`, and `description`.
- Emoji search is performed by matching the search query with the emoji description, aliases, and tags.
- The displayed search results include emoji, aliases, and description in a table format.
