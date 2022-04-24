
 // largeEevee.classList.toggle("eevee");
 // largeEeveeBG.classList.toggle("eevee");
    

// var largeEevee = document.querySelector(".pokemonImage");

var largeEeveeBG = document.querySelector(".pokemonContainer");

var naamEeveelution = document.querySelector("InfoContainer section h1");

// All eevee button at the bottom
var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(1)");
menuEeveesItem1.addEventListener("click", functieNaamEevee);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(2)");
menuEeveesItem1.addEventListener("click", functieNaamVaporeon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(3)");
menuEeveesItem1.addEventListener("click", functieNaamJolteon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(4)");
menuEeveesItem1.addEventListener("click", functieNaamFlareon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(5)");
menuEeveesItem1.addEventListener("click", functieNaamEspeon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(6)");
menuEeveesItem1.addEventListener("click", functieNaamUmbreon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(7)");
menuEeveesItem1.addEventListener("click", functieNaamLeafeon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(8)");
menuEeveesItem1.addEventListener("click", functieNaamGlaceon);

var menuEeveesItem1 = document.querySelector(".menuEevees ul li:nth-of-type(9)");
menuEeveesItem1.addEventListener("click", functieNaamSylveon);

//All function that change the images inside pokemonContainer
function functieNaamEevee() {
    largeEeveeBG.dataset.theevee = 'eevee';
    
};

function functieNaamVaporeon() {
    largeEeveeBG.dataset.theevee = 'vaporeon';
};

function functieNaamJolteon() {
    largeEeveeBG.dataset.theevee = 'jolteon';
};

function functieNaamFlareon() {
    largeEeveeBG.dataset.theevee = 'flareon';
};

function functieNaamEspeon() {
    largeEeveeBG.dataset.theevee = 'espeon';
};

function functieNaamUmbreon() {
    largeEeveeBG.dataset.theevee = 'umbreon';
};

function functieNaamLeafeon() {
    largeEeveeBG.dataset.theevee = 'leafeon';
};

function functieNaamGlaceon() {
    largeEeveeBG.dataset.theevee = 'glaceon';
    document.getElementById("naam").innerHTML = names[7];
    document.getElementById("number").innerHTML = "National Number: #" + number[7] 
    document.getElementById("type").innerHTML = "Type: " + types[7]
    document.getElementById("species").innerHTML = "Species: " + species[7] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[7]
};

function functieNaamSylveon() {
    largeEeveeBG.dataset.theevee = 'sylveon';
    document.getElementById("naam").innerHTML = names[8];
    document.getElementById("number").innerHTML = "National Number:	#" + number[8]
    document.getElementById("type").innerHTML = "Type: " + types[8]
    document.getElementById("species").innerHTML = "Species: " + species[8] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[8]

    document.getElementById("about").innerHTML = about[8]
    document.getElementById("abilities").innerHTML = "It emits a soothing aura from its ribbon-shaped organs. It wraps these appendages around quarrelers to instantly restore calm to the situation."
    document.getElementById("evolution").innerHTML = "How to evolve: Eevee into Sylveon. Once your Eevee has at least two Affection hearts and knows a Fairy-type move, level it up. You can do this through random battles, fights with other trainers, candies and so on. Once your Eevee levels up, assuming the conditions above have been met, it should immediately evolve into Sylveon."
};

const names = [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ];

  const types = [
      "Normal",
      "Water",
      "Electric",
      "Fire",
      "Psychic",
      "Dark",
      "Grass",
      "Ice",
      "Fairy"
  ]

  const number = [
      "133",
      "134",
      "135",
      "136",
      "196",
      "197",
      "470",
      "471",
      "700"
  ]

  const species = [
      "Evolution",
      "Bubble Jet",
      "Lightning",
      "Flame",
      "Sun",
      "Moonlight",
      "Verdant",
      "Fresh Snow",
      "Intertwining",
  ]

  const color = [
      "Brown",
      "Blue",
      "Yellow",
      "Red",
      "Purple",
      "Black",
      "Green",
      "Blue",
      "Pink"
  ]

  const about = [
      "Eevee (Japanese: イーブイ Eievui) is a Normal-type Pokémon introduced in Generation I. It evolves into one of eight different Pokémon through various methods:",
      "Vaporeon (Japanese: シャワーズ Showers) is a Water-type Pokémon introduced in Generation I.",
      "Jolteon (Japanese: サンダース Thunders) is an Electric-type Pokémon introduced in Generation I.",
      "Flareon (Japanese: ブースター Booster) is a Fire-type Pokémon introduced in Generation I.",
      "Espeon (Japanese: エーフィ Eifie) is a Psychic-type Pokémon introduced in Generation II.",
      "Umbreon (Japanese: ブラッキー Blacky) is a Dark-type Pokémon introduced in Generation II.",
      "Leafeon (Japanese: リーフィア Leafia) is a Grass-type Pokémon introduced in Generation IV.",
      "Glaceon (Japanese: グレイシア Glacia) is an Ice-type Pokémon introduced in Generation IV. It evolves from Eevee when it is leveled up near an Ice Rock (from Generations IV to VII, Brilliant Diamond and Shining Pearl), when exposed to an Ice Stone (Sword and Shield), or either through exposure to an Ice Stone or the evolution being forced in proximity to an Ice Rock (Legends: Arceus). It is one of Eevee's final forms, the others being Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, and Sylveon." ,
      "Sylveon (Japanese: ニンフィア Nymphia) is a Fairy-type Pokémon introduced in Generation VI. It evolves from Eevee when leveled up knowing a Fairy-type move and having either at least two levels of Affection (in Generations VI and VII) or high friendship (Sword and Shield and Legends: Arceus). It is one of Eevee's final forms, the others being Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, and Glaceon."
  ]

  const cries = [
      "/cries/eevee.mp3",
      "/cries/vaporeon.mp3"

  ]


var audio = new Audio(cries[1]);

document.getElementById("cry").onclick = function() {
  audio.play();
}
