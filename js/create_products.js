let lanceProducts = function () {
    if (verifieContent('products')) {
        createProducts();
    }
    else {
        let currentDiv = document.getElementById('products');
        let child;
        while (!verifieContent('products')) {
            child = currentDiv.lastElementChild;
            currentDiv.removeChild(child);
        }
        createProducts();
    }
}

let createProducts = function () {
    let affichage;
    for (let array of products_data) {
        // Nom - Temps de préparation - Composants - Prix total - Nombre de récipients - Uniquement avec du vrac
        affichage = [array["name"], array["time"]];
        calculComponents(array["components"]).forEach(value => affichage.push(value));
        addList(affichage, 'products');
    }
}

let calculComponents = function (arrayComponents) {
    let tabNoms = [];
    let prix = 0;
    let nb = 0;
    let vrac = true;

    for (let int of arrayComponents) {
        tabNoms.push("  " + components_data[int]["name"]);
        prix += Number(components_data[int]["price"]);
        nb += Number(components_data[int]["needRecipe"]);
        if (!Number(components_data[int]["buyInBulk"]) && vrac) vrac = false;
    }

    return [tabNoms, String(prix), String(nb), (vrac ? "Oui" : "Non")];
}