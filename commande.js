function afficherPanier() {
    const panierSection = document.getElementById('panier');

    panier.forEach(produit => {
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
        prixProduit.textContent = `$${produit.prix.toFixed(2)}`;

        card.appendChild(nomProduit);
        card.appendChild(prixProduit);

        panierSection.appendChild(card);
    });
}
window.onload = afficherPanier;