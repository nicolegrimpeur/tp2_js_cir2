let lanceComponent = function () {
    if (verifieContent('components')) {
        createComponents();
    }
    else {
        let currentDiv = document.getElementById('components');
        let child;
        while (!verifieContent('components')) {
            child = currentDiv.lastElementChild;
            currentDiv.removeChild(child);
        }
        createComponents();
    }
}

let createComponents = function () {
    let affichage;
    for (let array of components_data) {
        // Nom - Type - Composants - Prix - Achetable en vrac - Utilisation du produit (en %) - Besoin d'un réipient
        affichage = [array["name"], array["type"], array["price"]];
        affichage.push(Number(array["buyInBulk"]) ? "Oui" : "Non", String(Number(array["percentUsed"]) * 100), Number(array["needRecipe"]) ? "Oui" : "Non");

        addList(affichage, 'components');
    }
}