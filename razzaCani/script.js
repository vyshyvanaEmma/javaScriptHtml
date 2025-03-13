const razzeSelect = document.getElementById('razze-select');
const imagesContainer = document.getElementById('dog-images-container');

async function fetchRazze() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const razze = data.message;

        for (let razza in razze) {
            const option = document.createElement('option');
            option.value = razza;
            option.textContent = razza.charAt(0).toUpperCase() + razza.slice(1);
            razzeSelect.appendChild(option);
        }
    } catch (error) {
        console.error('Errore ', error);
    }
}

async function fetchImgPerRazza(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();

        imagesContainer.innerHTML = '';

        if (data.message.length > 0) {
            data.message.forEach(imgUrl => {
                const card = document.createElement('div');
                card.classList.add('card');

                const img = document.createElement('img');
                img.src = imgUrl;
                img.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                card.appendChild(img);
                card.appendChild(cardBody);
                imagesContainer.appendChild(card);
            });
        } else {
            // se non c'e' img
            const noImagesMessage = document.createElement('p');
            noImagesMessage.textContent = `Niente img per ${breed}.`;
            imagesContainer.appendChild(noImagesMessage);
        }
    } catch (error) {
        console.error('Errore ', error);
    }
}

razzeSelect.addEventListener('change', function() {
    const razza = this.value; 
    if (razza) {
        fetchImgPerRazza(razza); 
    } else {
        imagesContainer.innerHTML = ''; 
    }
});

window.onload = fetchRazze;
