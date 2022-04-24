
    
//variabelen
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

//old code to click the pokeball to start
// var menuEeveesItem1 = document.querySelector("div.pokemonContainer");
// menuEeveesItem1.addEventListener("click", functieNaamEevee);

//All function that change the images inside pokemonContainer
function functieNaamEevee() {
    largeEeveeBG.dataset.theevee = 'eevee';
    document.getElementById("naam").innerHTML = names[0];
    document.getElementById("number").innerHTML = "National Number:	#" + number[0]
    document.getElementById("type").innerHTML = "Type: " + types[0]
    document.getElementById("species").innerHTML = "Species: " + species[0] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[0]

    document.getElementById("info").innerHTML = info[0]
    document.getElementById("evolution").innerHTML = evolution[0]
    document.getElementById("notsureyet").innerHTML = notsureyet[0]
    
};

function functieNaamVaporeon() {
    largeEeveeBG.dataset.theevee = 'vaporeon';
    document.getElementById("naam").innerHTML = names[1];
    document.getElementById("number").innerHTML = "National Number:	#" + number[1]
    document.getElementById("type").innerHTML = "Type: " + types[1]
    document.getElementById("species").innerHTML = "Species: " + species[1] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[1]

    document.getElementById("info").innerHTML = info[1]
    document.getElementById("evolution").innerHTML = evolution[1]
    document.getElementById("notsureyet").innerHTML = notsureyet[1]
};

function functieNaamJolteon() {
    largeEeveeBG.dataset.theevee = 'jolteon';
    document.getElementById("naam").innerHTML = names[2];
    document.getElementById("number").innerHTML = "National Number:	#" + number[2]
    document.getElementById("type").innerHTML = "Type: " + types[2]
    document.getElementById("species").innerHTML = "Species: " + species[2] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[2]

    document.getElementById("info").innerHTML = info[2]
    document.getElementById("evolution").innerHTML = evolution[2]
    document.getElementById("notsureyet").innerHTML = notsureyet[2]
};

function functieNaamFlareon() {
    largeEeveeBG.dataset.theevee = 'flareon';
    cryOut.dataset.cries = 'flareon';
    document.getElementById("naam").innerHTML = names[3];
    document.getElementById("number").innerHTML = "National Number:	#" + number[3]
    document.getElementById("type").innerHTML = "Type: " + types[3]
    document.getElementById("species").innerHTML = "Species: " + species[3] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[3]

    document.getElementById("info").innerHTML = info[3]
    document.getElementById("evolution").innerHTML = evolution[3]
    document.getElementById("notsureyet").innerHTML = notsureyet[3]
};

function functieNaamEspeon() {
    largeEeveeBG.dataset.theevee = 'espeon';
    document.getElementById("naam").innerHTML = names[4];
    document.getElementById("number").innerHTML = "National Number:	#" + number[4]
    document.getElementById("type").innerHTML = "Type: " + types[4]
    document.getElementById("species").innerHTML = "Species: " + species[4] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[4]

    document.getElementById("info").innerHTML = info[4]
    document.getElementById("evolution").innerHTML = evolution[4]
    document.getElementById("notsureyet").innerHTML = notsureyet[4]
};

function functieNaamUmbreon() {
    largeEeveeBG.dataset.theevee = 'umbreon';
    document.getElementById("naam").innerHTML = names[5];
    document.getElementById("number").innerHTML = "National Number:	#" + number[5]
    document.getElementById("type").innerHTML = "Type: " + types[5]
    document.getElementById("species").innerHTML = "Species: " + species[5] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[5]

    document.getElementById("info").innerHTML = info[5]
    document.getElementById("evolution").innerHTML = evolution[5]
    document.getElementById("notsureyet").innerHTML = notsureyet[5]
};

function functieNaamLeafeon() {
    largeEeveeBG.dataset.theevee = 'leafeon';
    document.getElementById("naam").innerHTML = names[6];
    document.getElementById("number").innerHTML = "National Number:	#" + number[6]
    document.getElementById("type").innerHTML = "Type: " + types[6]
    document.getElementById("species").innerHTML = "Species: " + species[6] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[6]

    document.getElementById("info").innerHTML = info[6]
    document.getElementById("evolution").innerHTML = evolution[6]
    document.getElementById("notsureyet").innerHTML = notsureyet[6]
};

function functieNaamGlaceon() {
    largeEeveeBG.dataset.theevee = 'glaceon';
    document.getElementById("naam").innerHTML = names[7];
    document.getElementById("number").innerHTML = "National Number:	#" + number[7]
    document.getElementById("type").innerHTML = "Type: " + types[7]
    document.getElementById("species").innerHTML = "Species: " + species[7] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[7]

    document.getElementById("info").innerHTML = info[7]
    document.getElementById("evolution").innerHTML = evolution[7]
    document.getElementById("notsureyet").innerHTML = notsureyet[7]
};

function functieNaamSylveon() {
    largeEeveeBG.dataset.theevee = 'sylveon';
    document.getElementById("naam").innerHTML = names[8];
    document.getElementById("number").innerHTML = "National Number:	#" + number[8]
    document.getElementById("type").innerHTML = "Type: " + types[8]
    document.getElementById("species").innerHTML = "Species: " + species[8] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[8]

    document.getElementById("info").innerHTML = info[8]
    document.getElementById("evolution").innerHTML = evolution[8]
    document.getElementById("notsureyet").innerHTML = notsureyet[8]
};



//alle arrays met waardes
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

  const info = [
      "Eevee (Japanese: イーブイ Eievui) is a Normal-type Pokémon introduced in Generation I.",
      "Vaporeon (Japanese: シャワーズ Showers) is a Water-type Pokémon introduced in Generation I.",
      "Jolteon (Japanese: サンダース Thunders) is an Electric-type Pokémon introduced in Generation I.",
      "Flareon (Japanese: ブースター Booster) is a Fire-type Pokémon introduced in Generation I.",
      "Espeon (Japanese: エーフィ Eifie) is a Psychic-type Pokémon introduced in Generation II.",
      "Umbreon (Japanese: ブラッキー Blacky) is a Dark-type Pokémon introduced in Generation II.",
      "Leafeon (Japanese: リーフィア Leafia) is a Grass-type Pokémon introduced in Generation IV.",
      "Glaceon (Japanese: グレイシア Glacia) is an Ice-type Pokémon introduced in Generation IV.",
      "Sylveon (Japanese: ニンフィア Nymphia) is a Fairy-type Pokémon introduced in Generation VI."
  ]

  const evolution = [
      "It evolves into one of eight different Pokémon through various methods:",
      "Water stone",
      "Fire stone",
      "Thunder stone",
      "Max-friendship day",
      "Max-friendship night",
      "Damp rock",
      "Icy rock",
    "How to evolve: Eevee into Sylveon. Once your Eevee has at least two Affection hearts and knows a Fairy-type move, level it up. You can do this through random battles, fights with other trainers, candies and so on. Once your Eevee levels up, assuming the conditions above have been met, it should immediately evolve into Sylveon."
  ]

  const notsureyet = [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
  ]

  const cries = [
      "/cries/eevee.mp3",
      "/cries/vaporeon.mp3"

  ]


// test voor geluid
var cryOut = document.getElementById("cry");
cryOut.addEventListener("click", cry);

function cry() {
document.getElementById("cryPlay").innerHTML = cries[8]
 console.log("yo")
}



//switch tabs
var infoTab = document.getElementById("infoButton");
infoTab.addEventListener("click", switchTabs);

var textInTab = document.getElementById("article")
var nextTab = document.querySelector("ol.evolution")

function switchTabs(){
    textInTab.classList.toggle('hide')
    nextTab.classList.toggle('hidden')
}

var infoTab = document.getElementById("evolutionButton");
infoTab.addEventListener("click", switchTabs);

var textInTab = document.getElementById("article")
var nextTab = document.querySelector("ol.evolution")

function switchTabs(){
    textInTab.classList.toggle('hide')
    nextTab.classList.toggle('hidden')
}