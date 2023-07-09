let pokemonsList = document.getElementById("pokemons-list"); 
let links = document.getElementById("links"); 


// Llamamos a la API de pokemon con Fetch
fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>res.json())
    .then(res=>{
        // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
        for(let i of res.results){ 

            // Realizamos otra solicitud Fetch con la URL especifica del pokemon actual recorrido, para obtener datos mas especficos como la imagen
            fetch(i.url)
                .then(x=>x.json())
                .then(x=>{
                    // Vamos pintando o ingresando la imagen y nombre del pokemon actual que se esta evaluando 
                    pokemonsList.innerHTML += `<div class="card">
                                                <p>${x.name}</p>
                                            </div>`; 
            }); 
        };

    }); 