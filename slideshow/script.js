const avanti = document.getElementById("avanti");
const indietro = document.getElementById("indietro");
const imagine = document.getElementById("imagine");
const inizio = document.getElementById("start");  
const fine = document.getElementById("stop");  
let timer;

const immagini = [
    "./images/amin.jpg",
    "./images/dimitri.jpg",
    "./images/grace.jpg",
    "./images/levi.jpg",
    "./images/mahdi.jpg",
    "./images/michiel.jpg",
    "./images/mono.jpg",
    "./images/nicolai.jpg",
    "./images/sarah.jpg"
];


let indice = 0;

function cambiaPagine() {
    imagine.src = immagini[indice];
}

function startSlideshow() {
    timer = setInterval(function() {
        indice = (indice + 1) % immagini.length;  
        cambiaPagine();
    }, 3000);
}

function stopSlideshow() {
    clearInterval(timer);
}

function avantiFunzione() {
    indice = (indice + 1) % immagini.length;  
    cambiaPagine();
}

function indietroFunzione() {
    indice = (indice - 1 + immagini.length) % immagini.length;  
    cambiaPagine();
}


inizio.addEventListener("click", startSlideshow);
fine.addEventListener("click", stopSlideshow);
avanti.addEventListener("click", avantiFunzione);
indietro.addEventListener("click", indietroFunzione);
