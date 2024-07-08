import pokemonApi from "../api/pokemonApi/"

//TODO: add pagination
export const getPokemonNames = async () => {
  const params = {
    limit: 10,
    offset: 0,
  }

  const pokemon = await pokemonApi()
  pokemon.count = pokemon.count
  pokemon.next = pokemon.next
  return pokemon
}

//TODO: add pagination
const pokemonNames = await getPokemonNames()
console.log(pokemonNames)

export const getPokemonByName = async (pokemonName) => {
  const pokemon = await pokemonApi(pokemonName)
  return pokemon
}