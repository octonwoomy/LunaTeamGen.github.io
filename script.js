async function getAllPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1010');
  const data = await response.json();
  const selectedPokemon = [];
  const maxIndex = Math.min(data.results.length, 6);
  for (let i = 0; i < maxIndex; i++) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomPokemon = data.results[randomIndex];
    const response = await fetch(randomPokemon.url);
    const pokemonData = await response.json();
    const pokemon = {
      name: pokemonData.name,
      image: pokemonData.sprites.front_default
    };
    selectedPokemon.push(pokemon);
  }
  return selectedPokemon;
}
function displayPokemon(pokemonList) {
  const team_container = document.getElementById('team_container');
  team_container.innerHTML = '';
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    const img = document.createElement('img');
    img.src = pokemon.image;
    img.alt = pokemon.name;
    img.title = pokemon.name;
    team_container.appendChild(img);
  }
}