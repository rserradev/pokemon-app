import { fetchPokemonByName } from "../../api/pokemonApi"

// TODO: Funcion para traer el sprite de un pokemon
export const getSprite = async (pokemon) => {
  const pokemonData =  await fetchPokemonByName(pokemon)
  return pokemonData.sprites.front_default
}

