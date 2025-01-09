const etichetta = document.getElementById("etichetta");
const btnConta = document.getElementById("conta");
let conta = 0;

etichetta.innerHTML = conta;

function contaClick(){
    conta++;
    etichetta.innerHTML = conta;
    localStorage.setItem("numClick", conta);
}

function initContatore(){
    let stringa = localStorage.getItem("numClick");
    if(stringa){
        conta = JSON.parse(stringa);
    }
    else{
        conta = 0;
    }
    etichetta.innerHTML = conta;
}

btnConta.addEventListener("click", contaClick);

initContatore();