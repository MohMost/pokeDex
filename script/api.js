const container = document.querySelector(".pokeList");
const containers = document.querySelectorAll(".pokeList .card");
const arrow = document.querySelector(".scroll");
const boxes = document.querySelectorAll(".container");
const search = document.querySelector(".searchBar .search");
const addForm = document.querySelector(".add");
const styles = document.querySelector(".theme");
const icon = document.querySelector(".mode");
const drop = document.querySelectorAll("div .down");
const logo = document.querySelector(".logo img");
const card = document.querySelectorAll(".pokeList.card");
const tables = document.querySelectorAll(".searchBar .filters .container .sub");
const toggle = document.querySelector(".searchBar");
const base = `https://pokeapi.co/api/v2/pokemon/`

const fetchPokemon = async () => {
  for (let i = 1; i <= 905; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const byId = base + `${id}`;
  const pokemonData = await fetch(byId);
  const pokemon = await pokemonData.json();
  creatCard(pokemon)
  
};

fetchPokemon();

function creatCard(pokemon) {
  
  const main = document.querySelector("main");
  const element = document.createElement("div");
  
  const buttons = `
     <div class="buttons">
      <a class="viewDetails" href="#">
        <img src="img/glass-solid.svg" width="15px">
        <p>View Details</p>
        <img style="opacity:0;" src="img/glass-solid.svg" width="15px">
      </a>
      <a class="addToTeam" href="#">
        <img src="img/plus-solid.svg" width="15px">
        <p>Add to a team</p>
        <img style="opacity:0;" src="img/plus-solid.svg" width="15px">
      </a>
     </div>
  `;
  element.setAttribute("data-tilt", "");
  element.classList.add(`card`);
  element.classList.add(`${pokemon.types[0].type.name}`);

  main.addEventListener("click", (e) => {
    if (element.classList.contains("effect")) {
      element.classList.remove("effect");
      element.innerHTML = html;
    }
    e.stopPropagation();
  });
  element.addEventListener("click", (e) => {
    if (!element.classList.contains("effect")) {
      element.classList.add("effect");
      element.innerHTML = html + buttons;
    } else {
      element.classList.remove("effect");
      element.innerHTML = html;
    }
    e.stopPropagation();
  });
  const name = pokemon.name
  const id = pokemon.id
  const type1 = pokemon.types[0].type.name
  const html = `
  <div class="cardHead" >
    <img width="220px" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="">
    <div class="index"><p>#${id}</p></div>
  </div>
  <div class="cardDetail">
    <div>
      <p>${name}</p>
      <img src="img/eng/${type1}.png" alt="">
    </div>
    <div class="stats">
      <p></p>
      <ul class="stats1">
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATK: ${pokemon.stats[1].base_stat}</li>
        <li>DEF: ${pokemon.stats[2].base_stat}</li>
      </ul>
  
      <ul class="stats2">
        <li>SP.ATK: ${pokemon.stats[3].base_stat}</li>
        <li>SP.DEF: ${pokemon.stats[4].base_stat}</li>
        <li>SPD: ${pokemon.stats[5].base_stat}</li>
      </ul>
      <p></p>
    </div>
  </div>
  
  `;
  
    element.innerHTML = html;
    container.append(element);
}


