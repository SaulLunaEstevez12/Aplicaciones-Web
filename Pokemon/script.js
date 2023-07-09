const pokemonButton = document.getElementById('pokemon-button');
const pokemonList = document.getElementById('pokemon-data');

pokemonButton.addEventListener('click', () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>res.json())
    .then(res=>{
        for(let i of res.results){ 

            fetch(i.url)
                .then(x=>x.json())
                .then(x=>{
                    pokemonList.innerHTML += `<div class="card">
                                                <p>${x.name}</p>
                                            </div>`; 
            }); 
        };

    }); 
});
