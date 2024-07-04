import {getPokemonByName, getPokemonNames} from "./components/getPokemonName"

// Crear opciones para el select de Pokemon
export const pokemonOptionList = async () => {
  const pokemonNames = await getPokemonNames()
  const selectPokemon = document.querySelector('#select-pokemon')
  
  pokemonNames.forEach(name => {
    const option = document.createElement('option')
    option.value = name
    option.text = name
    selectPokemon.appendChild(option)
  })
}

const btnSearch = document.querySelector('#btn-search')
btnSearch.addEventListener('click', async () => {
  const valueInputSearch = document.querySelector('#input-search').value
  const pokemon =  await getPokemonByName(valueInputSearch)
  const pokemonList = document.querySelector('#pokemon-list')
  
  if (valueInputSearch === '' ) {
    return
  }

  const h1 = document.createElement('h1')
  const image = document.createElement('img')
  h1.textContent = pokemon.id + ' - ' + pokemon.name
  image.src = pokemon.sprites.front_default
  pokemonList.appendChild(h1)
  pokemonList.appendChild(image)

  console.log(valueInputSearch, pokemon.name, pokemonList)
})
