## Hosted Link
[Link for Filter and search the table](https://karan9927.github.io/JavaScript/Filter%20and%20Search%20the%20table/)
## HTML Tags Used
- `<body>`
- `<h2>`
- `<input>`
- `<table>`
- `<tr>`
- `<th>`
- `<td>`
- `<script>`

## JavaScript Functionality

The JavaScript function `myFunction` provides live search functionality for customer names in the table. Here's a brief overview:

- **Function Purpose:**
  - Enables live search as the user types into the input field.
- **Functionality:**
  - Retrieves the input element and filter value.
  - Iterates through the table rows.
  - Compares the customer name in each row to the filter value.
  - Adjusts the display property of each row based on the search result.
    - If the customer name contains the search query, the row is displayed.
    - Otherwise, the row is hidden.
- **Event Trigger:**
  - The function is triggered by the `onkeyup` event of the input field.

## Notes
- The HTML structure includes a table displaying customer information with columns for "Name" and "Country."
- Additional customer rows can be added as needed.
