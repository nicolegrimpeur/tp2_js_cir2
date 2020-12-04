// module contenant toutes les fonctions relatives à la lecture et l'affichage des produits
let moduleProducts = (function() {
    return {
        // vérifie que des lignes sont pas déjà ajoutés au tableau avant d'afficher une liste des produits
        lanceProducts: () => {
            if (formulaire.verifieContent('products')) {
                moduleProducts.createProducts();
            }
            else {
                let currentDiv = document.getElementById('products');
                let child;
                while (!formulaire.verifieContent('products')) {
                    child = currentDiv.lastElementChild;
                    currentDiv.removeChild(child);
                }
                moduleProducts.createProducts();
            }
        },

        // lance l'affichage de chaque produit un par un
        createProducts: () => {
            let affichage;
            for (let array of products_data) {
                // Nom - Temps de préparation - Composants - Prix total - Nombre de récipients - Uniquement avec du vrac
                affichage = [array["name"], array["time"]];
                moduleProducts.calculComponents(array["components"]).forEach(value => affichage.push(value));
                formulaire.addList(affichage, 'products');
            }
        },

        // calcul tous les attributs à afficher d'un produit
        calculComponents: arrayComponents => {
            let tabNoms = [];
            let prix = 0;
            let nb = 0;
            let vrac = true;

            for (let int of arrayComponents) {
                // vérifie que le composant demandé existe
                if (int < components_data.length) {
                    tabNoms.push("  " + components_data[int]["name"]);
                    prix += Number(components_data[int]["price"]) * 100 * (components_data[int]["percentUsed"] !== "0") ? Number(components_data[int]["percentUsed"]) : 1;
                    nb += Number(components_data[int]["needRecipe"]);
                    if (!Number(components_data[int]["buyInBulk"]) && vrac) vrac = false;
                }
            }

            return [tabNoms, formulaire.arrondiSTR(String(prix)), String(nb), (vrac ? "Oui" : "Non")];
        }
    }
})();