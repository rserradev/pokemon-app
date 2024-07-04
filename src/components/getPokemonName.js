import pokemonApi from "../api/pokemonApi/"

export const getPokemonNames = async () => {
  const pokemon = await pokemonApi()
  return pokemon.results.map(pokemon => pokemon.name)
}

export const getPokemonByName = async (pokemonName) => {
  const pokemon = await pokemonApi(pokemonName)
  return pokemon
}

const pokemonName = await getPokemonByName('/bulbasaur')
console.log(pokemonName)