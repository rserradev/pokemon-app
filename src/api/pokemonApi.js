const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const pokemonApi = async(id = "/") => {
    // Obtener los datos del API
    try {
        const response = await fetch(baseUrl+id)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return error
    }
}

export default pokemonApi;