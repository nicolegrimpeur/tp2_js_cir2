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

        // affichage = [array["buyInBulk"], array["percentUsed"], array["needRecipe"]];
        calculVPR(array["buyInBulk"], array["percentUsed"], array["needRecipe"]).forEach(value => affichage.push(value));

        addList(affichage, 'components');
    }
}

let calculVPR = function (array) {
    let vrac = true;
    let percent;
    let recipe = true;

    for (let float of array) {
        if (!Number(components_data[float]["buyInBulk"]) && vrac) vrac = false;
        percent = Number(components_data[float]["percentUsed"]) * 100);
        if (!Number(components_data[float]["needRecipe"]) && recipe) recipe = false;
    }

    return [(vrac ? "Oui" : "Non"), percent, (recipe ? "Oui" : "Non")];
}