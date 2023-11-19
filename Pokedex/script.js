const reset = () => {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";
  fetchPokemon();
};
const filterbytype = async () => {
  const filter = document.getElementById("FilterByTypes");
  const selectedType = filter.value;
  const cardsContainer = document.getElementById("cards");
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${selectedType}/`
    );
    const typeData = await response.json();

    // Assuming typeData.pokemon is an array of Pokemon associated with the selected type
    const pokemonArray = typeData.pokemon;

    // Clear previous cards
    cardsContainer.innerHTML = "";

    // Create cards for each Pokemon in the array
    pokemonArray.forEach(async (pokemon) => {
      try {
        const pokemonResponse = await fetch(pokemon.pokemon.url);
        const pokemonData = await pokemonResponse.json();
        const card = createCard(pokemonData);
        cardsContainer.appendChild(card);
      } catch (err) {
        console.error(err);
      }
    });
  } catch (error) {
    console.error("Error fetching Pokemon data by type:", error);
  }
};

const search = document.getElementById("search");
const cardsContainer = document.getElementById("cards");
let currentSearchTerm = "";
let fetchInProgress = false;

search.addEventListener("keyup", async function () {
  const searchPokemon = search.value.toLowerCase();

  if (searchPokemon !== currentSearchTerm && !fetchInProgress) {
    currentSearchTerm = searchPokemon;
    fetchInProgress = true;

    cardsContainer.innerHTML = "";

    for (let i = 1; i <= 150; i++) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonData = await response.json();

        if (pokemonData.name.toLowerCase().includes(searchPokemon)) {
          const card = createCard(pokemonData);
          cardsContainer.appendChild(card);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchInProgress = false;
  }
});
const getColorFromCSS = (colorName) => {
  // Map color names to CSS color values
  const colorMap = {
    grass: "#9bcc50",
    bug: "#729f3f",
    fire: "#fd7d24",
    water: "#4592c4",
    ice: "#51c4e7",
    electric: "#eed535",
    psychic: "#f366b9",
    fairy: "#fdb9e9",
    ghost: "#7b62a3",
    ground: "#f7de3f",
    poison: "#b97fc9",
    normal: "#a4acaf",
    dragon: "goldenrod",
    fighting: "#d56723",
    rock: "#a38c21",
    steel: "#C0C0C0",
    flying: "#99BADD",
    dark: "#9867c5",
    shadow: "#808080",
    unknown: "#6495ED",
    // Add more colors as needed
  };

  // Return the corresponding CSS color value or a default color
  return colorMap[colorName] || "#FFFFFF";
};

const createCard = (pokemon) => {
  const card = document.createElement("div");
  card.classList.add("card-container");

  // Get the primary type of the Pokemon
  const primaryType = pokemon.types[0].type.name.toLowerCase();

  // Set background color using CSS color
  frontColor = getColorFromCSS(primaryType);
  backColor = getColorFromCSS(primaryType);

  card.innerHTML = `
    <div id="card-inner" class="card-inner">
      <div class="card-front" style="background-color:${frontColor}">
        <p class="id">#${pokemon.id}</p>
        <img src="${pokemon.sprites.front_default}" alt="" />
        <h3 class="name">${pokemon.name}</h3>
        <h4 class="type">${pokemon.types[0].type.name}</h4>
      </div>
      <div class="card-back" style="background-color:${backColor}">
        <p class="id">#${pokemon.id}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <h3 class="name">${pokemon.name}</h3>
        <p class="ability">${pokemon.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}</p>
      </div>
    </div>
  `;

  return card;
};

const fetchPokemonCategory = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const pokemonTypes = await response.json();
    const pokemonCategory = pokemonTypes.results.map(
      (category) => category.name
    );

    // Get the select element
    const selectElement = document.getElementById("FilterByTypes");

    // Populate the select options
    pokemonCategory.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      selectElement.backgroundColor = getColorFromCSS(category);
      option.style.backgroundColor = getColorFromCSS(category);
      selectElement.appendChild(option);
    });
  } catch (err) {
    console.error(err);
    alert("Something went wrong, please try again after sometime!");
  }
};

// Call the function to fetch and populate the select options
fetchPokemonCategory();

const fetchPokemon = async () => {
  const cardsContainer = document.getElementById("cards");
  for (let i = 0; i <= 150; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemonData = await response.json();
      const card = await createCard(pokemonData);

      // Check if the card is a valid Node before appending
      if (card instanceof Node) {
        cardsContainer.appendChild(card);
      } else {
        console.error("Invalid card:", card);
      }
    } catch (err) {
      console.error(err);
    }
  }
};

fetchPokemon();
