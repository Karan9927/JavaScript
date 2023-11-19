## Hosted Link
[Link for pokedex](https://karan9927.github.io/JavaScript/Pokedex/)

# Pokémon Card Viewer

This web application allows users to view Pokémon cards based on different criteria such as type and search terms. It fetches data from the [PokéAPI](https://pokeapi.co/) to dynamically generate Pokémon cards.

## Getting Started

To use the Pokémon Card Viewer, simply open the `index.html` file in a web browser. The application will fetch data from the PokéAPI and display Pokémon cards accordingly.

## Features

1. **View All Pokémon**: The application initially fetches and displays the first 150 Pokémon cards.

2. **Filter by Type**: Users can select a Pokémon type from the dropdown menu to filter and view Pokémon of that specific type.

3. **Search by Name**: Users can enter a Pokémon name in the search bar, and the application will dynamically filter and display Pokémon cards matching the search term.

## How it Works

The code consists of several functions:

- **reset()**: Clears the existing cards and fetches all Pokémon to reset the display.

- **filterbytype()**: Fetches Pokémon based on the selected type from the dropdown menu and displays the corresponding cards.

- **search()**: Listens for keyup events in the search bar and dynamically fetches and displays Pokémon cards based on the entered search term.

- **getColorFromCSS(colorName)**: Returns the color associated with a Pokémon type for card styling.

- **createCard(pokemon)**: Dynamically creates and returns an HTML element for a Pokémon card.

- **fetchPokemonCategory()**: Fetches Pokémon types and populates the type filter dropdown menu.

- **fetchPokemon()**: Fetches and displays the first 150 Pokémon cards.

## Color Legend

Each Pokémon card has a front and back with different colors based on the primary type of the Pokémon. Here is the color legend:

- Grass: #9bcc50
- Bug: #729f3f
- Fire: #fd7d24
- Water: #4592c4
- Ice: #51c4e7
- Electric: #eed535
- Psychic: #f366b9
- Fairy: #fdb9e9
- Ghost: #7b62a3
- Ground: #f7de3f
- Poison: #b97fc9
- Normal: #a4acaf
- Dragon: goldenrod
- Fighting: #d56723
- Rock: #a38c21
- Steel: #C0C0C0
- Flying: #99BADD
- Dark: #9867c5
- Shadow: #808080
- Unknown: #6495ED

## Dependencies

- This application relies on the [PokéAPI](https://pokeapi.co/) for Pokémon data.
