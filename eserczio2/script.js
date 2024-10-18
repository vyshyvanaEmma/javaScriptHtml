const button = document.getElementById("button");
button.addEventListener("click", esegui);

const cancella = document.getElementById("cancella");
cancella.addEventListener("click", cancellaLista);

function esegui(){
    const lista = document.getElementById("lista");
    const task = document.getElementById("task");

    const item = document.createElement("li");
    item.innerHTML = task.value;
    task.value = "";
    lista.append(item);

}

function cancellaLista(){
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
}