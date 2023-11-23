## Hosted Link
[Link for Book App](https://karan9927.github.io/JavaScript/Book/)
# Bookstore Website Readme

This is the readme file for the Bookstore website code. The code is written in HTML, CSS, and JavaScript. It creates a simple bookstore website with features such as displaying book categories, fetching top books, a modal for detailed book information, and user authentication.

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
  - [createCategoriesList](#createcategorieslist)
  - [fetchBooksbyCategories](#fetchbooksbycategories)
  - [displayCategoty](#displaycategoty)
  - [truncate](#truncate)
  - [closeModal](#closemodal)
  - [displayModal](#displaymodal)
  - [createCard](#createcard)
  - [fetchBooks](#fetchbooks)
  - [topFunction](#topfunction)
  - [scrollFunction](#scrollfunction)
  - [signup](#signup)
  - [login](#login)
  - [toggleMode](#togglemode)

## Overview

The code sets up a bookstore website with a responsive design. It fetches book categories and top books from a backend API and displays them on the page. Users can click on a book to view more details in a modal. The website also includes a user authentication system with a signup and login feature.

## Functions

### createCategoriesList

This function takes an array of book categories and dynamically creates a list of categories in the HTML. Each category is clickable, and when clicked, it fetches and displays books of that category.

### fetchBooksbyCategories

This function is intended to fetch books based on the selected category. However, its implementation is incomplete in the provided code.

### displayCategoty

This function fetches book categories from the backend API, then calls `createCategoriesList` to display the categories on the webpage.

### truncate

A utility function that truncates a given paragraph to a specified length, appending "..." if necessary.

### closeModal

Hides the modal by setting its display style to "none".

### displayModal

Displays a modal with detailed information about a selected book. It dynamically generates HTML for the modal content.

### createCard

Creates a card for each book category, displaying the category name and a list of books within that category.

### fetchBooks

Fetches top books from the backend API and calls `createCard` to display them on the webpage.

### topFunction

Scrolls to the top of the page when called.

### scrollFunction

Handles the display of a "scroll to top" button based on the user's scroll position.

### signup

Handles the user signup functionality. It retrieves the entered username and password, stores them in local storage, and switches the view to the login screen.

### login

Handles the user login functionality. It compares the entered username and password with the stored credentials in local storage and displays a greeting if the login is successful.

### toggleMode

Toggles between dark and light modes for the website.

## Usage

- Open the `index.html` file in a web browser to view the bookstore website.
- Explore different book categories and top books.
- Use the signup and login features to access personalized content.
- Toggle between dark and light modes using the mode switch.

