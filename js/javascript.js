
    
//variabelen
var largeEeveeBG = document.querySelector(".pokemonContainer");
var naamEeveelution = document.querySelector("InfoContainer section h1");


 
// All eevee buttons at the bottom
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

//Shiny button
var shiny = document.getElementById("pokemonContainer")

var shinyButton = document.getElementById("shinyButton");
shinyButton.addEventListener("click", makeShiny);

function makeShiny() {
shiny.classList.toggle('shinyEevee');
console.log('yes')
};

//old code to click the pokeball to start
// var menuEeveesItem1 = document.querySelector("div.pokemonContainer");
// menuEeveesItem1.addEventListener("click", functieNaamEevee);

var audioFile = {};

var pokemonNaam = document.getElementById("naam")


//All function that change the images inside pokemonContainer
function functieNaamEevee() {
    largeEeveeBG.dataset.theevee = 'eevee';
    audioFile = '0';

    pokemonNaam.dataset.h1kleur = 'kleurEevee';

    pokemonNaam.innerHTML = names[0];
    document.getElementById("number").innerHTML = "National Number:	#" + number[0]
    document.getElementById("type").innerHTML = "Type: " + types[0]
    document.getElementById("species").innerHTML = "Species: " + species[0] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[0]

    document.getElementById("info").innerHTML = info[0]
    document.getElementById("moreInfo").innerHTML = moreInfo[0]
    document.getElementById("evolution").innerHTML = evolution[0]
};

function functieNaamVaporeon() {
    largeEeveeBG.dataset.theevee = 'vaporeon';
    audioFile = '1';

    pokemonNaam.dataset.h1kleur = 'kleurVaporeon';

    document.getElementById("naam").innerHTML = names[1];
    document.getElementById("number").innerHTML = "National Number:	#" + number[1]
    document.getElementById("type").innerHTML = "Type: " + types[1]
    document.getElementById("species").innerHTML = "Species: " + species[1] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[1]

    document.getElementById("info").innerHTML = info[1]
    document.getElementById("moreInfo").innerHTML = moreInfo[1]
    document.getElementById("evolution").innerHTML = evolution[1]
};

function functieNaamJolteon() {
    largeEeveeBG.dataset.theevee = 'jolteon';
    audioFile = '2';

    pokemonNaam.dataset.h1kleur = 'kleurJolteon';

    document.getElementById("naam").innerHTML = names[2];
    document.getElementById("number").innerHTML = "National Number:	#" + number[2]
    document.getElementById("type").innerHTML = "Type: " + types[2]
    document.getElementById("species").innerHTML = "Species: " + species[2] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[2]

    document.getElementById("info").innerHTML = info[2]
    document.getElementById("moreInfo").innerHTML = moreInfo[2]
    document.getElementById("evolution").innerHTML = evolution[2]
};

function functieNaamFlareon() {
    largeEeveeBG.dataset.theevee = 'flareon';
    audioFile = '3';

    pokemonNaam.dataset.h1kleur = 'kleurFlareon';

    document.getElementById("naam").innerHTML = names[3];
    document.getElementById("number").innerHTML = "National Number:	#" + number[3]
    document.getElementById("type").innerHTML = "Type: " + types[3]
    document.getElementById("species").innerHTML = "Species: " + species[3] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[3]

    document.getElementById("info").innerHTML = info[3]
    document.getElementById("moreInfo").innerHTML = moreInfo[3]
    document.getElementById("evolution").innerHTML = evolution[3]
};

function functieNaamEspeon() {
    largeEeveeBG.dataset.theevee = 'espeon';
    audioFile = '4';

    pokemonNaam.dataset.h1kleur = 'kleurEspeon';

    document.getElementById("naam").innerHTML = names[4];
    document.getElementById("number").innerHTML = "National Number:	#" + number[4]
    document.getElementById("type").innerHTML = "Type: " + types[4]
    document.getElementById("species").innerHTML = "Species: " + species[4] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[4]

    document.getElementById("info").innerHTML = info[4]
    document.getElementById("moreInfo").innerHTML = moreInfo[4]
    document.getElementById("evolution").innerHTML = evolution[4]
};

function functieNaamUmbreon() {
    largeEeveeBG.dataset.theevee = 'umbreon';
    audioFile = '5';

    pokemonNaam.dataset.h1kleur = 'kleurUmbreon';

    document.getElementById("naam").innerHTML = names[5];
    document.getElementById("number").innerHTML = "National Number:	#" + number[5]
    document.getElementById("type").innerHTML = "Type: " + types[5]
    document.getElementById("species").innerHTML = "Species: " + species[5] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[5]

    document.getElementById("info").innerHTML = info[5]
    document.getElementById("moreInfo").innerHTML = moreInfo[5]
    document.getElementById("evolution").innerHTML = evolution[5]
};

function functieNaamLeafeon() {
    largeEeveeBG.dataset.theevee = 'leafeon';
    audioFile = '6';

    pokemonNaam.dataset.h1kleur = 'kleurLeafeon';

    document.getElementById("naam").innerHTML = names[6];
    document.getElementById("number").innerHTML = "National Number:	#" + number[6]
    document.getElementById("type").innerHTML = "Type: " + types[6]
    document.getElementById("species").innerHTML = "Species: " + species[6] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[6]

    document.getElementById("info").innerHTML = info[6]
    document.getElementById("moreInfo").innerHTML = moreInfo[6]
    document.getElementById("evolution").innerHTML = evolution[6]
};

function functieNaamGlaceon() {
    largeEeveeBG.dataset.theevee = 'glaceon';
    audioFile = '7';

    pokemonNaam.dataset.h1kleur = 'kleurGlaceon';

    document.getElementById("naam").innerHTML = names[7];
    document.getElementById("number").innerHTML = "National Number:	#" + number[7]
    document.getElementById("type").innerHTML = "Type: " + types[7]
    document.getElementById("species").innerHTML = "Species: " + species[7] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[7]

    document.getElementById("info").innerHTML = info[7]
    document.getElementById("moreInfo").innerHTML = moreInfo[7]
    document.getElementById("evolution").innerHTML = evolution[7]
};

function functieNaamSylveon() {
    largeEeveeBG.dataset.theevee = 'sylveon';
    audioFile = '8';

    pokemonNaam.dataset.h1kleur = 'kleurSylveon';
    
    document.getElementById("naam").innerHTML = names[8];
    document.getElementById("number").innerHTML = "National Number:	#" + number[8]
    document.getElementById("type").innerHTML = "Type: " + types[8]
    document.getElementById("species").innerHTML = "Species: " + species[8] + " pokémon"
    document.getElementById("color").innerHTML = "Pokédexcolor: " + color[8]

    document.getElementById("info").innerHTML = info[8]
    document.getElementById("moreInfo").innerHTML = moreInfo[8]
    document.getElementById("evolution").innerHTML = evolution[8]
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
      "Eevee (イーブイ, Iibui) is a Normal-type Pokémon introduced in Generation I. It's well known for being the Pokémon with the highest number of evolution possibilities (8), due to its unstable genetic makeup.",
      "Vaporeon (Japanese: シャワーズ Showers) is a Water-type Pokémon introduced in Generation I.",
      "Jolteon (Japanese: サンダース Thunders) is an Electric-type Pokémon introduced in Generation I.",
      "Flareon (Japanese: ブースター Booster) is a Fire-type Pokémon introduced in Generation I.",
      "Espeon (Japanese: エーフィ Eifie) is a Psychic-type Pokémon introduced in Generation II.",
      "Umbreon (Japanese: ブラッキー Blacky) is a Dark-type Pokémon introduced in Generation II.",
      "Leafeon (Japanese: リーフィア Leafia) is a Grass-type Pokémon introduced in Generation IV.",
      "Glaceon (Japanese: グレイシア Glacia) is an Ice-type Pokémon introduced in Generation IV.",
      "Sylveon (Japanese: ニンフィア Nymphia) is a Fairy-type Pokémon introduced in Generation VI."
  ]

  const moreInfo = [
    "Eevee is a small, fox-like creature with bushy, brown fur. Its muzzle is very catlike, with a small, black and triangular nose. It has a fluffy cream-colored ruff around its neck and a short, bushy and fox-like tail with a creamy tip. Eevee has round, deep-brown eyes, long rabbit-like ears, and pink paw pads on its little feet. Its paws are small with three toes and no visible claws. A shiny Eevee has white fur with the ruff on its neck being silver in color.",
    "Vaporeon shares physical traits with aquatic animals and land creatures in appearance. Its body is light-blue with a white ruff around its neck. Vaporeon has cream-yellowish ears-like fins made of webbing on both sides of its head along with a third on the top. Vaporeon has blue ridges that run down the length of its spine and on to its tail-fin. The tail resembles that of a dolphin or whale.",
    "Jolteon is a quadruped mammalian Pokémon, covered in spiny bright yellow fur. It has long ears resembling a rabbit, deep purple almond-shaped eyes, and a blunt catlike muzzle with a small black triangular nose. It has a spiky white mane encircling its neck. Its legs and paws are slender, with three toes on each and no visible claws. Jolteon has a spiny fringe of fur covering its backside, and it has a small short spike-like tail that is not often visible (but seen in games such as Pokémon Stadium). Its back legs seems to be powerfully-built, allowing it to run at high speeds like a cheetah.",
    "Flareon is a quadruped mammalian Pokémon. It has vivid flame-orange fur with a bushy yellow mane, a wide, fluffy flame-shaped long tail, and a tuft of yellow fur atop its head, in a fireball shape. It has a short catlike muzzle, wide black almond-shaped eyes, and a small black triangular nose. Its ears are long and rabbit-like, with flare-like tips. It has large, bulky paws with no visible claws. Its body is generally bulkier than most of the Eeveelutions. Of all the Eeveelutions, Flareon resembles Eevee the most.",
    "Espeon is a quadruped mammalian Pokémon with catlike features. It has sleek and lilac purple fur covers its body. It has a red jewel attached to its forehead. Its face is distinctly catlike with a short, blunt muzzle and a tiny, triangular nose. It has long pointed ears almost similar to a fennec fox, and whisker-like tufts of fur protruding from each side of its face just below its ears. Its eyes are deep purple and almond-shaped with white pupils. It has a slender tail that tapers into two ends.",
    "Umbreon is a quadruped mammalian Pokémon that resembles a black cat, a black rabbit, or a canine. Umbreon has mainly sleek black fur with luminescent yellow rings encircling its ears and tail and round yellow circular patterns on its forehead and on each of its legs. Its physical characteristics resemble a feline, with a short muzzle and a small triangular nose, but its large ears are reminiscent to a hare or a rabbit. It has red eyes, and unlike the rest of the Eeveelutions, it also has visible black-colored oval-shaped pupils that often appear slit, as well as patches of black fur of a darker shade around its eyes. Umbreon has a slightly bushy black tail with a single yellow ring encircling its thickest part; the tail thins out at the tip. Umbreon has small sharp fangs, and can be seen when it opens its mouth.",
    "Leafeon is a quadruped mammalian whose most distinguishing features are its lithe body structure and vegetation protruding from its body. Its tail and ears are stylized to resemble torn and tattered leaves. Besides the leaf-like ears and tail, there are a multitude of smaller leaves growing from its body; leaves grow out from the knee joint areas on the forelegs and hind legs, its chest and its back. A larger, curled leaf grows from the middle of its forehead and is the same, soft-green color of all the other leaves. Leafeon's body is tan-colored, while its feet are brown colored. The cellular build of Leafeon's body is more closer to that of a plant rather than an animal.",
    "Glaceon is a quadruped mammalian Pokémon that bears a resemblance to an Arctic animal. Its fur is a light-blue color, with diamond-shaped patterns on its back, tail, and ears in a darker shade of blue. Glaceon has a cerulean blue cap-like feature on its forehead with two long blue strips dangling from either side. It has a short feline muzzle with a small triangular nose along with long pointed ears. Glaceon's tail is long with a pointed dark blue diamond-shaped tip. It has small dainty paws and feet that are dark blue in color.",
    "Sylveon is a quadruped mammalian Pokémon with white colored fur covering most of its slender body. The top of its head is a vibrant shade of pink, and it has long pink rabbit‐like ears with dark blue insides. Sylveon has a short, blunt catlike muzzle and a small black nose. Sylveon's skin is arranged to form pink and white bows on its right ear and around its neck. Attached to the bowlike skin are ribbonlike feelers with pink and blue tips that curl around Sylveon's body. It has four slender legs, small dainty pink‐tipped paws, and feet with three visible toes on each. Sylveon has two large blue eyes with white pupils and two pointed teeth on its upper jaw, seen when its mouth is open. It has a fluffy pink tail that curves inward slightly to form a crescent shape, possibly a reference to the moon phase."
]

  const evolution = [
      "Eevee can evolve into one of eight different forms with different types.",
      "Vaporeon is one of Eevee's evolutions that is caused by being exposed to a Water Stone.",
      "Jolteon is one of the evolutions of Eevee that is caused by being exposed to a Thunderstone.",
      "Flareon is one of the evolutions of Eevee that is caused by being exposed to a Fire Stone.",
      "Eevee evolves into Espeon by leveling up with high friendship during the day.",
      "Umbreon evolves from Eevee if it levels up at night with high friendship.",
      "Eevee evolves into Leafeon at any given level, when leveled up in Eterna Forest, Pinwheel Forest, Route 20, Petalburg Woods or the Lush Jungle near the moss covered rock. In Pokémon Sword and Shield, Eevee now evolves into Leafeon when a Leaf Stone is used.",
      "Glaceon is the evolved form of Eevee. Eevee evolves into Glaceon when leveled up on Route 217 near the Ice Rock in Platinum or Pokémon Diamond and Pearl. In Pokémon Black and White, this evolution happens when Eevee levels up near the ice-covered rock in Twist Mountain. In Pokémon X and Y, this happens in Frost Cavern near the ice rock. In Pokémon Omega Ruby and Alpha Sapphire, Eevee evolves when leveled up in Shoal Cave during the low tide, inside the ice chamber. In Pokémon Sun and Moon, you can evolve it near the exit to the cavern near the Ice boulder on Mount Lanakila. In Pokémon Sword and Shield, Eevee evolves into Glaceon when using an Ice Stone.",
      "Eevee evolves into Sylveon when leveled up knowing a Fairy‐type move and gaining at least two Affection hearts in Pokémon‐Amie or Pokémon Refresh. Starting from Generation VIII, it evolves upon level up with high friendship with and a Fairy‐type move."
  ]

  const cries = [
      "ttps://liljiggly.github.io../cries/eevee.mp3",
      "ttps://liljiggly.github.io./cries/vaporeon.mp3",
      "ttps://liljiggly.github.io/cries/jolteon.mp3",
      "https://liljiggly.github.io/interface-en-interactie/cries/flareon.mp3",
      "../cries/espeon.mp3",
      "../cries/umbreon.mp3",
      "../cries/leafeon.mp3",
      "../cries/glaceon.mp3",
      "../cries/sylveon.mp3"
  ]


// test voor geluid
var cryOut = document.getElementById("cryPlay");
cryOut.addEventListener("click", cry);

function cry() {
    var audio = new Audio(cries[audioFile]);
    
// document.getElementById("cryPlay").innerHTML = cries[8]
 console.log("yo")
 audio.play()
}




//switch tabs
var infoTab = document.getElementById("infoButton");
infoTab.addEventListener("click", switchTabs);

var evoTab = document.getElementById("evolutionButton");
evoTab.addEventListener("click", switchTabs);

var textInTab = document.getElementById("article")
var nextTab = document.querySelector("ol.evolution")

function switchTabs(){
    textInTab.classList.toggle('hide')
    nextTab.classList.toggle('hidden')
    
    infoTab.classList.toggle('infoActive')
    evoTab.classList.toggle('evoActive')
}





