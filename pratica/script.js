const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");
const tabella = document.querySelector("#bodyTab");
const aggiungi = document.getElementById("aggiungi");

let persone = [];

function salvaLocalStorage(){
    localStorage.setItem("persone", JSON.stringify(persone));
}

function caricaLocalStorage(){
    const datiS = localStorage.getItem("persone");
    if(datiS){
        persone = JSON.parse(datiS);
    }
}

function inserimentoTabella(){
    if (!nome.value || !cognome.value || !eta.value){
        alert("Tutti i campi devono essere compilati");
        return;
    }
    const etaValue = parseInt(eta.value);
    if (isNaN(etaValue) || etaValue < 0 || etaValue > 100) {
        alert("L'età deve essere un numero compreso tra 0 e 100.");
        return;
    }

    const personaNew = {
        nome: nome.value,
        cognome: cognome.value,
        eta: eta.value
    }
    persone.push(personaNew);
    salvaLocalStorage();
    stampa();
    nome.value = "";
    cognome.value = "";
    eta.value = "";
}

function stampa(){
    tabella.innerHTML = "";

    for(i = 0; i < persone.length; i++){
        const riga = document.createElement("tr");
        const persona = persone[i];
        for(let key in persona){
            const cella = document.createElement("td")
            cella.textContent = persona[key];
            riga.append(cella);
        }
        tabella.append(riga);
    }
}

aggiungi.addEventListener("click", inserimentoTabella);
caricaLocalStorage();
stampa();

