const tabella = document.querySelector("#tab");
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");
const aggiungi = document.getElementById("aggiungi");

const persone = [
    
];


function stampa(){
    tabella.innerHTML = "";
    for(let i = 0; i < persone.length; i++){

        const riga = document.createElement("tr");
    
        const persona = persone[i];
    
        for(let key in persona){
            const cella = document.createElement("td");
            cella.textContent = persona[key];           //textContent = innerHTML
            riga.append(cella);
        }
    
        tabella.append(riga);
    }
}

function agg(){
    //controllo se sono inseriti nome, cognome e eta
    if (parseInt(eta.value) < 1) {
        alert("L'età deve essere maggiore o uguale a 1.");
        return;
    }
    //verifico se eta e' maggiore di 0
    if (parseInt(eta.value) < 1) {
        alert("L'età deve essere maggiore o uguale a 1.");
        return;
    }
    const newPersona = {
        nome: nome.value,
        cognome: cognome.value,
        eta: eta.value,
    }
    persone.push(newPersona);
    stampa();
    nome.value = "";
    cognome.value = "";
    eta.value = "";

}

aggiungi.addEventListener("click", agg);


stampa();
