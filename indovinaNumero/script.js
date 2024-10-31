const messaggio = document.getElementById("messaggio");
const tentativoInput = document.getElementById("tentativo");
const risultato = document.getElementById("risultato");

let numeroGenerato; 

function generaNumero() {
    numeroGenerato = Math.floor(Math.random() * 100) + 1;
    messaggio.textContent = "Numero generato!";
}

function prova() {
    if(numeroGenerato){
        const tentativo = parseInt(tentativoInput.value);

        if (tentativo > numeroGenerato) {
            risultato.textContent = "Il numero è troppo alto!";
        } else if (tentativo < numeroGenerato) {
            risultato.textContent = "Il numero è troppo basso!";
        } else {
            risultato.textContent = "Hai indovinato!";
            numeroGenerato = undefined;
            messaggio.textContent = "";
        }
    }else{
        alert("Il numero non è stato generato");
    }

}