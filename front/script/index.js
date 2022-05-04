main();

function main() {
    const dataApi = fetch("http://localhost:3000/api/products").then(async (res) => {
        buildProducts(await res.json());
    });
}

//Insertion des données dans la page index.html
function buildProducts(res) {
    // SUPPRESION DES DONNEES DU PRODUIT DANS LE DOM
    var section = document.querySelector("#items");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    for (var i = 0 ; i < res.length; i++){
        const productLink = document.createElement("a");
        section.appendChild(productLink);
        productLink.href= `product.html?id=${res[i]._id}`;

        const productObject = document.createElement("article");
        productLink.appendChild(productObject);

        const productImg = document.createElement("img");
        productObject.appendChild(productImg);
        productImg.src = res[i].imageUrl;
        productImg.alt = res[i].altTxt;

        const productTitle = document.createElement("h3");
        productObject.appendChild(productTitle);
        productTitle.innerHTML = res[i].name;

        const productPrice = document.createElement("div");
        productObject.appendChild(productPrice);
        productPrice.innerHTML = res[i].price + " €";

        const productDescription = document.createElement("p");
        productObject.appendChild(productDescription);
        productDescription.innerHTML = res[i].description;
    }
}


