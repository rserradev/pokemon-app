import pokemonApi from '../api/pokemonApi';

const getPokemonNames = async () => {
    try {
        const data = await pokemonApi(); // Obtener datos de Pokémon
        const pokemonNames = data.results.map(pokemon => pokemon.name); // Extraer nombres de los Pokémon
        return pokemonNames;
    } catch (error) {
        console.error('Error al obtener nombres de Pokémon:', error);
        return []; // Retornar un array vacío en caso de error
    }
};

export default getPokemonNames;
