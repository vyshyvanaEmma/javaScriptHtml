const ordina = document.getElementById("ordina");
const inserisci = document.getElementById("inserisci");
const lista = document.getElementById("lista");
const nome = document.getElementById("nome");
const cancella = document.getElementById("cancella");

let nomi = [];

function inserimento(){
    const item = document.createElement("li");
    item.innerHTML = nome.value;
    nomi.push(nome.value);
    nome.value = "";
    lista.append(item);
}

function ordinaLista(){
    nomi.sort();
    lista.innerHTML = "";

    for(let i=0; i < nomi.length; i++){
        const elemento = document.createElement("li");
        elemento.innerHTML = nomi[i];
        lista.append(elemento);
    }
}


function cancellaLista(){
    lista.innerHTML = "";
}

cancella.addEventListener("click", cancellaLista);
inserisci.addEventListener("click", inserimento);
ordina.addEventListener("click", ordinaLista);
