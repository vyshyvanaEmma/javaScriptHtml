const inizio = document.getElementById("inizio");
const fine = document.getElementById("fine");
const lancia= document.getElementById("lancia");
const dadi = document.getElementById("dadi");

let timer;
let indice;

const latiDaddo = [
    "./images/cinque.png",
    "./images/due.png",
    "./images/quattro.png",
    "./images/sei.png",
    "./images/tre.png",
    "./images/uno.png",
];

function lanciaDadi(){
    const indice = Math.floor(Math.random() * latiDaddo.length);
    const nuovaImmagine = document.createElement("img");
    nuovaImmagine.src = latiDaddo[indice]; 
    nuovaImmagine.width = 250; 
    nuovaImmagine.className = "me-2"; 

    dadi.appendChild(nuovaImmagine);
}

function startLancioDaddi(){
    timer = setInterval(function() {
        lanciaDadi();
    }, 2000)
}

function fineLancioDaddi(){
    clearInterval(timer);
}

lancia.addEventListener("click", lanciaDadi);
inizio.addEventListener("click", startLancioDaddi);
fine.addEventListener("click", fineLancioDaddi);