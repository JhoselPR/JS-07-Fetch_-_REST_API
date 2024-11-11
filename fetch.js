//*PokéAPI
const API_URL = 'https://pokeapi.co/api/v2/';

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${API_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// GET
document.getElementById('get-btn').addEventListener('click', async () => {
    const text = document.getElementById('poke-name').value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    localStorage.setItem('pokemonId', pokemon.id);
    console.log(pokemon.name);
})

// GET-PREV
document.getElementById('prev-btn').addEventListener('click', async () => {
    const currentPokemonId = localStorage.getItem('pokemonId');
    const newId = Math.max(1, currentPokemonId - 1);
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('pokemonId', pokemon.id);//Utiliza los nuevos id
    console.log(pokemon.id);
})

// GET-NEXT
document.getElementById('next-btn').addEventListener('click', async () => {
    const currentPokemonId = localStorage.getItem('pokemonId');
    const newId = Math.min(1025, parseInt(currentPokemonId) + 1);//Evita que se supere el número máximos de pokemon (1025)
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('pokemonId', pokemon.id);//Utiliza los nuevos id
    console.log(pokemon.id);
})