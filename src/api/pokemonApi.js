const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Obtener los datos del API y aumentar el offset en 20 para obtener los siguientes datos
const pokemonApi = async(param = "/") => {
    // Obtener los datos del API
    try {
        const response = await fetch(baseUrl + param)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return error
    }
}

/**
 * Busca los datos de un pokemon en base a su nombre en el API
 * @param {String} name
 * @returns {Promise<Object>}
 */
export const fetchPokemonByName = async (name = "bulbasaur") => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    try {
        const response = await fetch(url) // Se hace la petición al API y se obtiene la respuesta (promise)
        const data = await response.json() // Transforma la respuesta (promise) en un objeto JSON
        return data // Devuelve el objeto JSON
    } catch (error) {
        console.error(error)
        return error
    }
}

/**
 *  Busca los nombres de todos los pokemon en el API en un rango de 1000 pokemons
 * @returns {Promise<Object>}
 */
export const fetchPokemonNames = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1000"
    try {
        const response = await fetch(url) // Se hace la petición al API y se obtiene la respuesta (promise)
        const data = await response.json() // Transforma la respuesta (promise) en un objeto JSON
        return data // Devuelve el objeto JSON
    } catch (error) {
        console.error(error)
        return error
    }
}

// const pokemonList = await fetchPokemonByName("bulbasaur")
// console.log(pokemonList)

export default pokemonApi;