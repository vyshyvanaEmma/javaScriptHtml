const btnEstrai = document.getElementById("estrai");
const btnClear = document.getElementById("clear");
const containerPost = document.getElementById("containerArticle");

async function getRandomArticle(){
    const randomResponse = await fetch("https://it.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&rnnamespace=0&format=json&origin=*");
    const randomData = await randomResponse.json();
    const pageId = randomData.query.random[0].id;
    
    const articleResponse = await fetch(`https://it.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext&exintro&format=json&origin=*&pageids=${pageId}`);
    const articleData = await articleResponse.json();
    const page = articleData.query.pages[pageId];

    return{
        title: page.title,
        content: page.extract
    };
}

function creaPostIt(title, content){
    const articolo = document.createElement("article");
    articolo.className = "post-it";

    articolo.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    `;
    containerPost.appendChild(articolo);
}

btnEstrai.addEventListener("click", async () => {
    const article = await getRandomArticle();
    creaPostIt(article.title, article.content);
});

btnClear.addEventListener("click", () => {
    containerPost.innerHTML = "";
});