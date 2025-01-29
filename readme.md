
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
