
const numberInput = document.getElementById('numberInput'); 
const divisorsList = document.getElementById('divisorsList'); 

function calcolaDivisori() {
    const number = parseInt(numberInput.value); 
    const divisors = []; 

    if (!isNaN(number) && number > 0) {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisors.push(i); 
            }
        }
        mostraDivisori(divisors); 
    } else {
        alert("Inserisci un numero valido maggiore di zero."); 
    }
}

function mostraDivisori(divisors) {
    divisorsList.innerHTML = '';

    let listItems = '';

    for (let i = 0; i < divisors.length; i++) {
        listItems += '<li class="list-group-item">' + divisors[i] + '</li>';
    }
    divisorsList.innerHTML = listItems;
}