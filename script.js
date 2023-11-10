
// function getActivity() {
    //if local fetch("./pokemon/data.json")
//     fetch("https://www.boredapi.com/api/activity")
//     .then((response) => response.json())
//     .then((data) => {
        // bordedCard.innerHTML = "";
        // const newActivuty = document.createElement("p");
        // newActivuty.innerText = data.activity;
        // bordedCard.appendChild(newActivuty);
//         console.log(data);
//     })
//     .catch((error) => console.log(error));
// }

// getActivity();

// const boredCard = document.querySelector(".bored_card");

// // fetches the data from the url and displays it in the browser
// function getActivity() {
//   fetch("https://www.boredapi.com/api/activity")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     // if there is an error, log it to the console
//     .catch((error) => console.log(error));
// }

// getActivity();

// function getActivity() {
//     fetch("https://jsonplaceholder.typicode.com/")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Fetch error:', error);
//     });
// }

// getActivity();
/*     <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p> */

    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .then(data => {
        const pokemonList = document.getElementById('pokemon-list');
        data.results.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            pokemonList.appendChild(option);
        });
    })
    .catch(error => console.error('Failed to fetch Pokémon list:', error));

// Function to fetch data for the selected Pokémon
function fetchSelectedPokemon() {
    const selectedPokemon = document.getElementById('pokemon-list').value;
    if (selectedPokemon) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`; // Added backticks around the URL

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the data to the console
                displayData(data); // Function to display the data on the webpage
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById('pokemon-info').innerText = 'Failed to fetch data. Please try again with a valid Pokémon name.';
            });
    } else {
        document.getElementById('pokemon-info').innerText = 'Please select a Pokémon from the list.'
    }
}
// Function to display the fetched data 
function displayData(data) {
    const pokemonImgInfo = document.getElementById('pokemon-info-img');
    pokemonImgInfo.innerHTML= `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
        <p>HP: ${data.stats[0].base_stat}</p>
        <p>Attack: ${data.stats[1].base_stat}</p>
        <p>Defense: ${data.stats[2].base_stat}</p>
        <p>Special Attack: ${data.stats[3].base_stat}</p>
        <p>Special Defense: ${data.stats[4].base_stat}</p>
        <p>Speed: ${data.stats[5].base_stat}</p>
    `;
}