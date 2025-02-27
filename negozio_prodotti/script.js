const prodotti = [
    { categoria: "Smartphone", modello: "Xiaomi Note 11S", taglia: ["64GB", "128GB"], prezzo: 148, url: "https://m.media-amazon.com/images/I/512A4pEqXaL._AC_UL640_QL65_.jpg" },
    { categoria: "Smartphone", modello: "Samsung Galaxy A14", taglia: ["64GB", "128GB"], prezzo: 129.90, url: "https://m.media-amazon.com/images/I/81aqEBIKEnL._AC_UL640_QL65_.jpg" },
    { categoria: "Tablet", modello: "Lenovo Tab M10 Plus", taglia: ["32GB", "64GB"], prezzo: 199, url: "https://m.media-amazon.com/images/I/61O-VuVpywL._AC_UL640_QL65_.jpg" },
    { categoria: "Mouse", modello: "Logitech M90", taglia: [], prezzo: 6.49, url: "https://m.media-amazon.com/images/I/81+Rjb6LJ2L._AC_UL640_QL65_.jpg" },
    { categoria: "Tastiera", modello: "Logitech K120", taglia: [], prezzo: 12.99, url: "https://m.media-amazon.com/images/I/61xFRHrfVJL._AC_UL640_QL65_.jpg" },
    { categoria: "Notebook", modello: "HP 250 G9", taglia: ["128GB", "256GB"], prezzo: 148, url: "https://m.media-amazon.com/images/I/81nkSdV+0wL._AC_UL640_QL65_.jpg" }
];

function mostraProdotti(lista) {
    const container = document.getElementById("lista-prodotti");
    container.innerHTML = "";
    lista.forEach(prodotto => {
        container.innerHTML += `
            <div class="col-md-4 mb-4 d-flex align-items-stretch">
                <div class="card shadow-sm w-100">
                    <a href="${prodotto.url}" target="_blank" class="stretched-link"></a>
                    <img src="${prodotto.url}" class="product-img card-img-top" alt="${prodotto.modello}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${prodotto.modello}</h5>
                        <p class="card-text">Prezzo: €${prodotto.prezzo.toFixed(2)}</p>
                        <p class="card-text">${prodotto.taglia.length ? `Taglie: ${prodotto.taglia.join(', ')}` : ""}</p>
                        <div class="mt-auto text-center">
                            <a href="${prodotto.url}" target="_blank" class="btn btn-primary">Acquista</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}


function filtraProdotti(categoria) {
    let prodottiFiltrati;

    if (categoria) { 
        prodottiFiltrati = prodotti.filter(function(p) {
            return p.categoria === categoria;
        });
    } else {
        prodottiFiltrati = prodotti; 
    }

    mostraProdotti(prodottiFiltrati);
}

document.addEventListener("DOMContentLoaded", () => filtraProdotti(""));
