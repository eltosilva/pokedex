import { PokeApi } from './poke-api.js'


function convertePokemonToLi(pokemon) {
  return `<li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
    <ol class="types">${pokemon.types.map(type => `<li class="type ${pokemon.type}">${type}</li>`).join('')}</ol>
    <img src="${pokemon.photo}" alt="${pokemon.name}">
  </div>
</li>`
}


const pokeApi = new PokeApi()
let offset = 0;
const limite = 10

function loadPookemons() {
  const ol = document.querySelector('.pokemons')
  pokeApi
    .getPokemons(offset, limite)
    .then(pokemons => ol.innerHTML = pokemons.map(convertePokemonToLi).join(''))
  offset += 10
}

loadPookemons()

const button = document.querySelector('.pagination button')
button.addEventListener('click', () => {
  loadPookemons()
  offset += 10
})