import getPokemonNames from "./getPokemon"

// Crear opciones para el select de Pokemon
export const pokemonOptionList = async () => {
  const pokemonNames = await getPokemonNames()
  const selectPokemon = document.querySelector('#select-pokemon')
  
  pokemonNames.forEach(name => {
    const option = document.createElement('option')
    option.value = name
    option.textContent = name
    selectPokemon.appendChild(option)
  })
}