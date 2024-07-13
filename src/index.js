import {getPokemonByName, getPokemonNames} from "./components/getPokemonName"
import { fetchPokemonByName } from "./api/pokemonApi"
import { getSprite } from "./components/render-image/render-image"

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
  const pokemonValue = document.querySelector('#input-search').value
  const pokemon = await getSprite(pokemonValue)

  // if (pokemonValue === '') {
  //   return
  // }

  const img = document.createElement('img')
  img.src = pokemon
  document.querySelector('#pokemon-image').appendChild(img)

  console.log(pokemonValue)
  console.log({pokemon})
  console.log(img)
  
})

// Evento para limpiar la data de los Pokemon
btnClean.addEventListener('click', () => {
  const pokemonList = document.querySelector('#pokemon-details')
  pokemonList.innerHTML = ''
})

var options = {
  chart: {
    type: 'radar'
  },
  series: [
    {
    name: 'Pikachu',
    data: [10,20,30,40,50]
    }
  ],
  dataLabels: {
      enabled: true
  },
  xaxis: {
      categories: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense'],
  },
  yaxis: {
    show: false
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();