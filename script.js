const produits = [
    { id: 1, nom: 'waffles', prix: 10.00 ,image: 'waffles.jpg' },
    { id: 2, nom: 'brownies', prix: 5.00,image: 'brownies.jpg' },
    { id: 3, nom: 'gaufrettes', prix: 25.00,image: 'gauffretes.jpg' },
];
let panier = [];
function afficherProduits() {
    const produitsSection = document.getElementById('produits');

    produits.forEach(produit => {
        const card = document.createElement('div');
        card.classList.add('card');
        const imageProduit = document.createElement('img');
        imageProduit.src = produit.image;
        imageProduit.alt = produit.nom;
        imageProduit.style.width = '100%';
        card.appendChild(imageProduit);

        const nomProduit = document.createElement('h3');
        nomProduit.textContent = produit.nom;

        const prixProduit = document.createElement('p');
        prixProduit.textContent = `${produit.prix.toFixed(2)}dt/5 pièces`;

        const boutonAjouter = document.createElement('button');
        boutonAjouter.textContent = 'Ajouter au panier';
        boutonAjouter.addEventListener('click', () => ajouterAuPanier(produit));

        card.appendChild(nomProduit);
        card.appendChild(prixProduit);
        card.appendChild(boutonAjouter);

        produitsSection.appendChild(card);
    });
}
function ajouterAuPanier(produit) {
    panier.push(produit);
    
    window.location.href = 'commande.html';
}
window.onload = afficherProduits;