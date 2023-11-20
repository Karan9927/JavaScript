## Hosted Link
[Link for Movie Search](https://karan9927.github.io/JavaScript/Movie%20Search/)
# Movie Search

## Overview

This JavaScript code represents a simple movie search application that interacts with the OMDB API to fetch and display movie data based on user input. The code is well-organized and includes features such as debouncing user input, displaying paginated search results, and a dark mode toggle.

## HTML Elements

- **inputTag:** Represents the input element where the user can type a search query.
- **containerTag:** Represents a container where movie cards will be displayed.
- **paginationTag:** Represents a container for pagination controls.
- **loader:** Represents an element used to indicate that data is being loaded.

## Variables

- **timerId:** Stores the ID of the timer used for debouncing user input.
- **currentPage:** Keeps track of the current page of movie results.
- **totalResults:** Stores the total number of search results.
- **API_KEY:** Represents the API key used to authenticate requests to the OMDB API.
- **BASE_URL:** Represents the base URL for the OMDB API.

## Functions

- **fetchData(searchValue, pageNumber):** Asynchronously fetches movie data from the OMDB API based on the search query and page number.
- **displayMovies(movies):** Displays movie cards in the container element based on the provided movie data.
- **goToNextPage():** Increases the `currentPage` and fetches and displays the next page of movie results.
- **goToPrevPage():** Decreases the `currentPage` and fetches and displays the previous page of movie results.
- **displayPagination(totalPages):** Displays pagination controls with "Prev" and "Next" buttons and the current page number.

## Event Listeners

- **inputTag:** Listens for input events, debounces the input using a timer, and fetches new movie data when the user stops typing.
- **checkbox:** Listens for a change event on a checkbox (presumably for a dark mode toggle) and toggles the "dark" class on the body element.

