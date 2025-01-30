'use strict';
const fetch = require('node-fetch');

async function fetchData(url) {
 const response = await fetch(url);
 const data = await response.json();
 return data;

}
async function logPokemonAPIData() {

    try {
     // Call the function to fetch and log the data of the second Pokémon
        const pokemonList = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=2');
        const secondPokemon = pokemonList.result[1].name;
        console.log(`Second Pokemon Name: ${secondPokemon}`);

     // Call the function to fetch and log the favor of the Berry
        const firstBerry = await fetchData('https://pokeapi.co/api/v2/berry/1');
        const  berryFlavor = firstBerry.flavors[0]. flavor.name;
        console.log(`First Berry Flavor: ${berryFlavor}`);

    // fetch and log the name and effect of the fisrt Ability
       const firstAbility = await fetchData('https://pokeapi.co/api/v2/ability/1');
       const abilityName = firstAbility.name;
       const abilityEffect = firstAbility.effect_entries.find(entry=> entry.language.name==='en').effect;
      console.log(`First Ability Name: ${abilityName}, Effect: ${abilityEffect}`);

     } catch (error) {
        console.log('Error fetching data:', error);
   }
}

logPokemonAPIData();