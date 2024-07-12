import {getPokemonByName, getPokemonNames} from "./components/getPokemonName"

// Botones de búsqueda y limpieza
const btnSearch = document.querySelector('#btn-search')
const btnClean = document.querySelector('#btn-clean')

// Crear opciones para el select de Pokemon y cargarla en el DOM
document.addEventListener('DOMContentLoaded', async () => {
    const pokemonNames = await getPokemonNames()
    const selectPokemon = document.querySelector('#pokemon-list')
  
    pokemonNames.forEach(name => {
      const option = document.createElement('option')
      option.value = name
      option.text = name
      selectPokemon.appendChild(option)
    })
})


btnSearch.addEventListener('click', async () => {
  const pokemon =  await getPokemonByName(valueInputSearch)
  const pokemonList = document.querySelector('#pokemon-details')
  
  if (valueInputSearch === '' ) {
    return
  }

  const h1 = document.createElement('h1')
  const image = document.createElement('img')
  h1.textContent = pokemon.id + ' - ' + pokemon.name
  image.src = pokemon.sprites.front_default
  pokemonList.appendChild(h1)
  pokemonList.appendChild(image)

  
})

// Evento para limpiar la data de los Pokemon
btnClean.addEventListener('click', () => {
  const pokemonList = document.querySelector('#pokemon-details')
  pokemonList.innerHTML = ''
})

// TODO: Funcion para llenar la tabla con los datos del Pokemon
const createTable = async (pokemonName) => {
  const valueInputSearch = document.querySelector('#input-search').value.toLowerCase()
  const table = document.createElement('table')
  const divPokemonDetails = document.querySelector('#pokemon-details')
  
  const pokemon =  await getPokemonByName(pokemonName)
  const {id, name, types, abilities} = pokemon

  return types[0].type.name
}

const poke = await createTable('pikachu')
console.log(poke)