const tabella = document.getElementById("tab");

const persone = [
    {nome: "Mario",cognome: "Rossi", eta: 15, classe: "2AIA"},
    {nome: "Francesco",cognome: "Perrotta", eta: 17, classe: "4AIA"},
    {nome: "Asia",cognome: "Pro", eta: 18, classe: "5AIA"},
    {nome: "Giuseppe",cognome: "Veri", eta: 16, classe: "3AEL"},
    {nome: "Petro",cognome: "Dio", eta: 14, classe: "1ATL"}
]

persone.forEach(persona => {
    const riga = document.createElement("tr");  
    const nomeCella = document.createElement("td");  
    nomeCella.textContent = persona.nome;  
    riga.appendChild(nomeCella); 
    
    const cognomeCella = document.createElement("td"); 
    cognomeCella.textContent = persona.cognome;  
    riga.appendChild(cognomeCella);  
    
    const etaCella = document.createElement("td");  
    etaCella.textContent = persona.eta; 
    riga.appendChild(etaCella);  
    
    const classeCella = document.createElement("td");  
    classeCella.textContent = persona.classe;  
    riga.appendChild(classeCella);  

    tabella.appendChild(riga);
});

/*
for(let i = 0; i < persone.length; i++){

    const p = persone[i];
    const riga = document.createElement("tr");  

    for(let x in p){

        const cella = document.createElement("td");  
        cella.innerHTML = p[x];
        riga.appendChild(cella); 

    }
    tabella.appendChild(riga);
}
*/