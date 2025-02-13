const nome = document.getElementById("nome");
const voto = document.getElementById("voto");
const eta = document.getElementById("eta");
const aggiungi = document.getElementById("aggiungi");
const container = document.getElementById("student-container");
const cercainput = document.querySelector("#cerca"); 
document.getElementById("voto24").addEventListener('click', () => filterByVoto(24));

const studenti = [
  { nome: "Marco", voto: 28, eta: 22, sesso: 'm' },
  { nome: "Laura", voto: 18, eta: 20, sesso: 'f' },
  { nome: "Giulia", voto: 22, eta: 21, sesso: 'f' },
  { nome: "Alessandro", voto: 30, eta: 23, sesso: 'm' },
  { nome: "Sofia", voto: 24, eta: 19, sesso: 'f' },
  { nome: "Matteo", voto: 26, eta: 24, sesso: 'm' },
  { nome: "Elisa", voto: 29, eta: 20, sesso: 'f' },
  { nome: "Francesco", voto: 21, eta: 22, sesso: 'm' },
  { nome: "Chiara", voto: 25, eta: 21, sesso: 'f' },
  { nome: "Federico", voto: 19, eta: 20, sesso: 'm' }
];

const form = document.getElementById("student-form");

studenti.forEach(createCard);

aggiungi.addEventListener("click", addS);

document.getElementById("tutti").addEventListener('click', () => filterByGender(null)); 
document.getElementById("maschi").addEventListener('click', () => filterByGender('m')); 
document.getElementById("femmine").addEventListener('click', () => filterByGender('f')); 

cercainput.addEventListener('input', () => cercaStudenti(cercainput.value));

function addS() {
  const nome = document.getElementById("nome").value;
  const eta = parseInt(document.getElementById("eta").value);
  const voto = parseInt(document.getElementById("voto").value);
  const sesso = document.getElementById("sesso").value;

  const nuovoStudente = { nome, eta, voto, sesso };
  createCard(nuovoStudente);
}

function createCard(studente) {
  const card = document.createElement("div");
  card.classList.add("col-md-4");

  const imgSrc = studente.sesso === 'm' ? "./images/male.png" : "./images/female.png";

  card.innerHTML = `
      <div class="card">
          <img src="${imgSrc}" class="card-img-top" alt="${studente.nome}">
          <div class="card-body">
              <h5 class="card-title">${studente.nome}</h5>
              <p class="card-text">Età: ${studente.eta}</p>
              <p class="card-text">Voto: ${studente.voto}</p>
          </div>
      </div>
  `;

  container.appendChild(card);
}

function filterByGender(gender) {
  container.innerHTML = '';

  const filteredStudents = gender ? studenti.filter(student => student.sesso === gender) : studenti;
  
  filteredStudents.forEach(createCard);  
}


function cercaStudenti(cercaTesto) {
  container.innerHTML = '';

  const filteredStudents = studenti.filter(student => 
    student.nome.toLowerCase().includes(cercaTesto.toLowerCase())
  );
  
  filteredStudents.forEach(createCard);
}

function filterByVoto(minVoto) {
  container.innerHTML = '';

  const filteredStudents = studenti.filter(student => student.voto > minVoto);
  
  filteredStudents.forEach(createCard);
}