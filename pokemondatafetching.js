'use strict'
const axios = require('axios');
async function fetchPokemonData(pokemon) {
    const URL = `https://pokeapi.co/api/v2/pokemon`;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    return response.data;
}
async function logPokemonData() {
    try {
        const jigglypuff = await fetchPokemonData('jigglypuff');
        console.log(`Name: ${jigglypuff.name}, Weight: ${jigglypuff.weight}`);

        const meowth = await fetchPokemonData('meowth');
        console.log(`Name: ${meowth.name}, Height: ${meowth.height}, Weight: ${meowth.weight}`);

        const eevee = await fetchPokemonData('eevee');
        console.log(`Name: ${eevee.name}, Abiities: ${eevee.abilities.map(a => a.ability.name).join(',')}`);
    } catch (error) {
        console.error('Error fetching Pokemon data', error);
    }
}
logPokemonData();