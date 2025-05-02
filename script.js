// Ajoute un gestionnaire d'événements à tous les blocs
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const url = box.getAttribute('data-url'); // Récupère l'URL depuis l'attribut data-url
        if (url) {
            window.location.href = url; // Redirige vers l'URL
        }
    });
});

console.log("Script chargé avec succès !");