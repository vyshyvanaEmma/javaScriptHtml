const pockemonContainer = document.getElementById("pockemon-container");
const listaPokemonInserito = document.getElementById("listaPokemonInserito");
const inputPokemon = document.getElementById("nomePokemon");

let listaCompleta = []; 

async function stampaPokemon() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    const listaPokemon = data.results;
    
    listaCompleta = []; 

    for (const pokemon of listaPokemon) {
      const dettagliResponse = await fetch(pokemon.url);
      const pokemonData = await dettagliResponse.json();
      listaCompleta.push(pokemonData);
    }

    mostraListaCompleta(); 

}

function mostraListaCompleta() {
  pockemonContainer.innerHTML = ''; 
  listaCompleta.forEach((pokemon, index) => {
    mostraPokemon(pokemon, index + 1, pockemonContainer);
  });
}


function mostraPokemon(pokemon, id, container) {
  const card = document.createElement('div');
  card.className = 'col mb-4'; 

  let tipiPokemon = '';
  for (let i = 0; i < pokemon.types.length; i++) {
    const tipo = pokemon.types[i].type.name;
    tipiPokemon += `<span class="badge bg-${tipo} me-1">${tipo}</span>`;
  }

  const nomeFormattato = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const imgUrl = pokemon.sprites.front_default || 'https://via.placeholder.com/120';

  card.innerHTML = `
    <div class="card h-100">
      <img src="${imgUrl}" alt="${pokemon.name}" 
           class="pokemon-img card-img-top mx-auto mt-3">
      <div class="card-body text-center">
        <h5 class="card-title">#${id} - ${nomeFormattato}</h5>
        <div class="pokemon-types">${tipiPokemon}</div>
      </div>
    </div>
  `;

  container.appendChild(card);
}


async function cercaPokemon() {
  const nomePokemon = inputPokemon.value.toLowerCase().trim();

  if (!nomePokemon) {
    mostraListaCompleta(); 
    return;
  }


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
  if (!response.ok) throw new Error('Pokemon non trovato');

  const pokemon = await response.json();

  pockemonContainer.innerHTML = ''; 
  listaPokemonInserito.innerHTML = '';

  mostraPokemon(pokemon, pokemon.id, listaPokemonInserito);
  
}

async function caricaTipiPokemon() {

  const response = await fetch("https://pokeapi.co/api/v2/type");
  const data = await response.json();
    
  const tipoSelect = document.getElementById("tipoPokemon");

  data.results.forEach(tipo => {
    const option = document.createElement("option");
    option.value = tipo.name;
    option.textContent = tipo.name.charAt(0).toUpperCase() + tipo.name.slice(1);
    tipoSelect.appendChild(option);
  });

}

function mostraListaCompleta() {
  const tipoSelezionato = document.getElementById("tipoPokemon").value;
  pockemonContainer.innerHTML = ''; 

  listaCompleta.forEach((pokemon, index) => {
    if (tipoSelezionato === "all" || pokemon.types.some(tipo => tipo.type.name === tipoSelezionato)) {
      mostraPokemon(pokemon, index + 1, pockemonContainer);
    }
  });
}

document.getElementById("tipoPokemon").addEventListener("change", mostraListaCompleta);
window.onload = function () {
  stampaPokemon(); 
  caricaTipiPokemon(); 
};
