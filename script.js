const produits = [
    { id: 1, nom: 'waffles', prix: 10.00, image: 'waffles.jpg' },
    { id: 2, nom: 'brownies', prix: 5.00, image: 'brownies.jpg' },
    { id: 3, nom: 'gaufrettes', prix: 25.00, image: 'gauffretes.jpg' },
    { id: 4, nom: 'apple pie', prix: 25.00, image: 'apple-pie.jpg' },
    { id: 5, nom: 'barres de crumble', prix: 25.00, image: 'barres-de-crumble.jpg' },
    { id: 6, nom: 'carrot-cake', prix: 25.00, image: 'carrot-cake.jpg' },
    { id: 7, nom: 'cheesecake', prix: 25.00, image: 'cheesecake.jpg' },
    { id: 8, nom: 'flan coco', prix: 25.00, image: 'flan-coco.jpg' },
    { id: 9, nom: 'mug cake', prix: 25.00, image: 'mug-cake.jpg' },
    { id: 10, nom: 'pudding chocolat', prix: 25.00, image: 'pudding-chocolat.jpg' },
];

let panier = [];

function afficherProduits() {
    const produitsSection = document.getElementById('produits');

    // Create a table element
    const table = document.createElement('div');
    table.classList.add('table-container');

    // Loop through products and create cards
    produits.forEach(produit => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imageProduit = document.createElement('img');
        imageProduit.src = produit.image;
        imageProduit.alt = produit.nom;
        card.appendChild(imageProduit);

        const nomProduit = document.createElement('h3');
        nomProduit.textContent = produit.nom;

        const prixProduit = document.createElement('p');
        prixProduit.textContent = `${produit.prix.toFixed(2)} dt/5 pièces`;

        const boutonAjouter = document.createElement('button');
        boutonAjouter.textContent = 'Ajouter au panier';
        boutonAjouter.addEventListener('click', () => ajouterAuPanier(produit));

        card.appendChild(nomProduit);
        card.appendChild(prixProduit);
        card.appendChild(boutonAjouter);

        table.appendChild(card);
    });

    // Append the table to the produitsSection
    produitsSection.appendChild(table);
}

function ajouterAuPanier(produit) {
    panier.push(produit);
    window.location.href = 'commande.html';
}

function closeBanner() {
    const banner = document.getElementById('announcementBanner');
    banner.style.display = 'none';
}

function showBanner() {
    const banner = document.getElementsById('announcementbanner');
    banner.style.display = 'block';
    let currentPosition = 0;
    const animationInterval = setInterval(function () {
        currentPosition -= 1;
        banner.style.transform = `translateX(${currentPosition}px)`;
    }, 10);

    setTimeout(function () {
        clearInterval(animationInterval);
        closeBanner();
        }, 5000);
}

window.onload = afficherProduits;
