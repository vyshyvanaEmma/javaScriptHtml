const inputNum = document.getElementById("inserimento");
const button = document.getElementById("btn");
const mediaElement = document.getElementById("resultMedia");
const lista = document.getElementById("listaVoti");

const listaNum = [];

function esegui(){
    const input = parseFloat(inputNum.value);

    if(isNaN(input) || input < 0 || input > 10){
        alert("Inserisci un voto valido");
        return;
    }

    listaNum.push(input);

    stampaMedia();
    stampaLista();
    
    inputNum.value = "";
}
function stampaMedia(){
    let somma = 0;
    
    listaNum.forEach(function(voto){
        somma += voto;
    });

    const media = somma / listaNum.length;
    mediaElement.textContent = media.toFixed(2); 
}


function stampaLista(){
    lista.innerHTML = '';

    listaNum.forEach(function(voto){
        const elemento = document.createElement("li");
        elemento.textContent = voto;
        lista.appendChild(elemento);
    });
}


button.addEventListener("click", esegui);
