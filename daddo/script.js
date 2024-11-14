const inizio = document.getElementById("inizio");
const fine = document.getElementById("fine");
const dadi = document.getElementById("dadi");
const lancia= document.getElementById("lancia");

let timer;
let indice;

const latiDaddo = [
    "./images/cinque.png",
    "./images/due.jpg",
    "./images/quattro.jpg",
    "./images/sei.jpg",
    "./images/tre.jpg",
    "./images/uno.jpg",
];

function lanciaDadi(){
    dadi.src = latiDaddo[indice];
}

function startLancioDaddi(){
    timer = setInterval(function() {
        indice = (indice + 1) % latiDaddo.length;  
        lanciaDadi();
    }, 2000)
}

function fineLancioDaddi(){
    clearInterval(timer);
}

lancia.addEventListener("click", lanciaDaddi);
inizio.addEventListener("click", startLancioDaddi);
fine.addEventListener("click", fineLancioDaddi);