const breedSelect = document.getElementById('breed-select');
const imagesContainer = document.getElementById('dog-images-container');

async function fetchBreeds() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = data.message;

        for (let breed in breeds) {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            breedSelect.appendChild(option);
        }
    } catch (error) {
        console.error('Errore ', error);
    }
}

async function fetchImagesPerBreed(breed) {
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

breedSelect.addEventListener('change', function() {
    const breed = this.value; 
    if (breed) {
        fetchImagesPerBreed(breed); 
    } else {
        imagesContainer.innerHTML = ''; 
    }
});

window.onload = fetchBreeds;
