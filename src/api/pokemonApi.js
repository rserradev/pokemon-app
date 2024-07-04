const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonApi = async(param) => {
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

export default pokemonApi;