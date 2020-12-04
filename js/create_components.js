// module contenant toutes les fonctions relatives à la lecture et l'affichage des composants
let moduleComponents = (function () {
    return {
        // vérifie que des lignes sont pas déjà ajoutés au tableau avant d'afficher une liste des produits
        lanceComponent: () => {
            if (formulaire.verifieContent('components')) {
                moduleComponents.createComponents();
            }
            else {
                let currentDiv = document.getElementById('components');
                let child;
                while (!formulaire.verifieContent('components')) {
                    child = currentDiv.lastElementChild;
                    currentDiv.removeChild(child);
                }
                moduleComponents.createComponents();
            }
        },

        // lance l'affichage de chaque produit un par un
        createComponents: () => {
            let affichage;
            for (let array of components_data) {
                // Nom - Type - Prix - Vrac - Utilisation produit - Besoin d'un récipient
                affichage = [
                    array["name"],
                    array["type"],
                    formulaire.arrondiSTR(array["price"]),
                    (Number(array["buyInBulk"]) ? "Oui" : "Non"),
                    String(Number(formulaire.arrondiSTR(array["percentUsed"]))*100),
                    (Number(array["needRecipe"]) ? "Oui" : "Non")];
                formulaire.addList(affichage, 'components');
            }
        }
    }
})();