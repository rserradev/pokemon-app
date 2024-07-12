import pokemonApi from "../api/pokemonApi/"

// Get Pokemon Names
export const getPokemonNames = async () => {
  const params = {
    offset: 0,
    limit: 20
  }

  const pokemonNames = []

  for (let i = 0; i < params.limit; i++) {
    const pokemon = await pokemonApi(`/?limit=${params.limit}&offset=${params.offset}`)
    const {count, next, previous, results} = pokemon
    const pokemonName = results.map(pokemon => pokemon.name)
    pokemonNames.push(...pokemonName)
    params.offset += 20
    if (next === null) {
      break
    }
  }

  return pokemonNames
}

// const pokemonNames = await getPokemonNames()
// console.log(pokemonNames)

// Get Pokemon by Name
export const getPokemonByName = async (pokemonName) => {
  const pokemon = await pokemonApi(pokemonName)
  return pokemon
}
