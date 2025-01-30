'use strict';

const fetch = require('node-fetch');

async function fetchData(url) {
    const response = await fetch(url);
    return response.json()
}
async function LogPokemonAPIData() {
    try {
        //fetch and log item data
        const item = await fetchData('https://pokeapi.co/api/v2/item/1');
        console.log(`Item Name: ${item.name}, Item Categoryt: ${item.cost}`);

        //fetch and log type data
        const type = await fetchData('https://pokeapi.co/v2/type/1');
        console.log(`Type Name: ${type.name}, 
            Damage Immunities: ${type.damage_relations.double_damage_to.map(t => t.name)}`);

        //fetch and log nature data

        const nature = await fetchData('https://pokeapi.co/v2/nature/1');
        console.log(`Nature Name: ${nature.name}, Increased Stat: ${nature.increased_stat?.name || 'None'}`);
        console.log(`Decreased Stat: ${nature.decreased_stat?.name || 'None'}`);
    } catch (error) {
        console.log('Error fetching data:', error);


    }
}

LogPokemonAPIData();