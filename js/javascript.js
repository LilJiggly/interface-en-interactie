
 // largeEevee.classList.toggle("eevee");
 // largeEeveeBG.classList.toggle("eevee");
    

// var largeEevee = document.querySelector(".pokemonImage");

var largeEeveeBG = document.querySelector(".pokemonContainer");

var naamEeveelution = document.querySelector("InfoContainer section h1");


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
};

function functieNaamSylveon() {
    largeEeveeBG.dataset.theevee = 'sylveon';
};



var sylveon = document.querySelector(".menuEevees ul li:nth-of-type(9)");
menuEeveesItem1.addEventListener("click", functieInfoText9);

function functieInfoText9() {
    document.getElementById("naam").innerHTML = "Sylveon";
    document.getElementById("number").innerHTML = "700";
    document.getElementById("type").innerHTML = "Fairy"
};


// var glaceon = document.querySelector(".menuEevees ul li:nth-of-type(8)");
// menuEeveesItem1.addEventListener("click", functieInfoText8);


// function functieInfoText8() {

//     let glaceon1 = "glaceon"

//     document.getElementById("naam").innerHTML = glaceon1;
//     document.getElementById("number").innerHTML = "471";
//     document.getElementById("type").innerHTML = "Ice"
// };
