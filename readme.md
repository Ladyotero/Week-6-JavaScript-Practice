
# Pokemon Data Fetching

## fetchPokemonData(pokemon) Function

This is an asynchronous function that takes the name of a Pokémon (e.g., 'jigglypuff') as an argument.
It uses the fetch API to make an HTTP GET request to the PokéAPI endpoint:
 ``https://pokeapi.co/api/v2/pokemon/<pokemon-name>.``

-After getting a response from the API:
The await keyword pauses execution until the response is returned. The .json() method is called to parse the response into a JavaScript object.
The parsed data is returned.

## logPokemonData() Function

This is another asynchronous function that makes use of fetchPokemonData() to fetch Pokémon data for 'jigglypuff', 'meowth', and 'eevee'.
-Try-Catch Block: The try block ensures that the code runs normally if there are no errors. If an error occurs during the fetch (e.g., network issues, invalid Pokémon name), the catch block will log the error to the console using console.error.

## Fetching Data for Individual Pokémon select 3

**Jigglypuff**
Calls fetchPokemonData('jigglypuff') to get its data.
Logs its name and weight to the console:
 console.log(`Name: ${jigglypuff.name}, Weight: ${jigglypuff.weight}`);

**Meowth**
Fetches data for 'meowth'.
Logs its name, height, and weight:
 console.log(`Name: ${meowth.name}, Height: ${meowth.height}, Weight: ${meowth.weight}`);

**Eevee**
Fetches data for 'eevee'.
Logs its name and abilities:
 console.log(`Name: ${eevee.name}, Abilities: ${eevee.abilities.map(a => a.ability.name).join(', ')}`);

## Function Execution

The ``logPokemonData()`` function is called at the end:
 ``logPokemonData();``

Note:
Since it’s asynchronous, it fetches and logs the Pokémon data sequentially.
Asynchronous Programming:

-Both functions use ``async`` and ``await`` to handle asynchronous operations, ensuring the program waits for the API responses before proceeding.
Error Handling:

-The ``try-catch`` block ensures any potential errors are caught and logged gracefully.
Dynamic API Fetching:

-By passing different Pokémon names as arguments to ``fetchPokemonData(),`` the code dynamically fetches data for any Pokémon.
Data Parsing:

-The ``.json()`` method is used to parse the response into a usable JavaScript object.

## Output Example

when the code is run this will populated.
Name: jigglypuff, Weight: 55
Name: meowth, Height: 4, Weight: 42
Name: eevee, Abilities: run-away, adaptability, anticipation

### Miscellaneous API Calls

1.Importing node-fetch
const fetch = require('node-fetch');

node-fetch is a package that allows us to make HTTP requests in Node.js (similar to fetch in the browser).
Since fetch is not built into Node.js by default, we need to install it:
 npm install node-fetch require('node-fetch') imports the package so it can be used in the script.

2.fetchData(url) Function (Reusable API Fetcher)
``async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}``

This asynchronous function takes a url and fetches data from it.
Step-by-step execution:
Calls fetch(url), which makes an HTTP request to the provided url.
Uses await to pause execution until the response is received.
Converts the response into a JavaScript object using .json().
Returns the parsed data.

3.logPokemonAPIData() Function
This function fetches and logs specific Pokémon-related data.
Try-Catch Block
`try {`

-The try block contains the main logic of the function.
If an error occurs (e.g., a failed API request), execution jumps to the catch block.

## Step 1: Fetch and Log the Name of the Second Pokémon

-Fetches the first two Pokémon from the API using
[https://pokeapi.co/api/v2/pokemon?limit=2]

-The response looks like this:
``
{
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }
  ]
}
``
-Logs:
 Second Pokémon Name: ivysaur

## Fetch and Log the Flavor of the First Berry

-Fetches the first Berry’s data from [https://pokeapi.co/api/v2/berry/1]

The API response includes:
 {
  "flavors": [
    { "flavor": { "name": "spicy" }, "potency": 10 },
    { "flavor": { "name": "dry" }, "potency": 5 }
  ]
}

-Extracts the `first flavor from firstBerry.flavors[0].flavor.name (spicy)`
Logs:
 First Berry Flavor: spicy

## Fetch and Log the Name and Effect of the First Ability

Fetches the first Ability’s data from: [https://pokeapi.co/api/v2/ability/1]

The API response includes multiple language versions:
 {
  "name": "stench",
  "effect_entries": [
    {
      "effect": "Has a chance of causing the target to flinch.",
      "language": { "name": "en" }
    },
    {
      "effect": "Otra descripción en otro idioma.",
      "language": { "name": "es" }
    }
  ]
}

Extracts the ability name *(stench)*

-Filters the effect_entries array to find the effect description in English:
 `firstAbility.effect_entries.find(entry => entry.language.name === 'en').effect`

_Finds the object where "language.name" is "en" and extracts "effect"

-Logs:
 First Ability Name: stench
First Ability Effect: Has a chance of causing the target to flinch.

_Error Handling
If any of the API requests fail, the catch block will log the error.

_Call the function to Executes the function to fetch and log Pokémon-related data

### Final Output Example

*Second Pokémon Name: ivysaur
*First Berry Flavor: spicy
*First Ability Name: stench
*First Ability Effect: Has a chance of causing the target to flinch.

### Advance API Calls by ID

_Summary of What Happens in the Code
*fetchData(url) fetches and returns data from the given URL.

*logPokemonAPIData():
   *Fetches and logs information about an item, type, and nature using their respective API endpoints.

   *The data is processed and logged to the console, including attributes like name, category, damage relations, and increased/decreased stats.

_Error handling ensures the program doesn't crash when something goes wrong.

_The function is called at the end to trigger the fetches and log the data

**Final Output Example**
*Item Name: master-ball
*Item Category:
standard-balls
*Type Name: normal
*Double Damage To: fighting
*Double Damage From: ghost
*Nature Name: hardy
*Increased Stat: attack
*Decreased Stat: defense
