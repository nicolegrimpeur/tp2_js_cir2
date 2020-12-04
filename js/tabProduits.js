// affiche les plats deux par deux
let addTab = function (array, idDiv, nomSousDiv) {
    moduleTab.debutTab(idDiv, nomSousDiv);
    for (let i = 0; i < array.length; i += 2) {
        moduleTab.Add_deux_plats(i, array, nomSousDiv);
    }
};

// module de gestion / création de la liste des recettes réalisables
let moduleTab = (function () {
    return {
        // instancie la div qui servira de repère où rajouter les recettes
        debutTab(idDiv, idTab) {
            let currentDiv = document.getElementById(idDiv);

            let div = document.createElement("div");
            currentDiv.appendChild(div);
            div.setAttribute("id", idTab);
        },

        // calcule le prix total nécessaire pour un produit
        prix: array => {
            let prixTotal = 0;
            if (array.hasOwnProperty("components"))
                for (let j of array["components"])
                    if (j < components_data.length)
                        if (!isNaN(Number(components_data[j]["price"])))
                            prixTotal += Number(components_data[j]["price"]);
            return prixTotal;
        },

        // permet de définir l'image qu'il faudra associer au produit
        image: image => {
            switch (image) {
                case "Métier à Tisser":
                    return 'metierATisser.jpg';
                case 'Bocal à Cookies':
                    return 'bocalCookies.jpg';
                case "Beaume à lèvres":
                    return 'beaumeLevres.jpg';
                case "Post-it maison":
                    return 'postIt.jpg';
                case "Eponge Tawashi":
                    return 'eponge.jpg';
                case "Liqueur":
                    return 'liqueur.jpg';
                case "Lessive":
                    return 'lessive.png';
                default:
                    return 'pasdimage.jpg';
            }
        },

        // permet d'afficher les deux recettes à la fois l'un à côté de l'autre
        Add_deux_plats(numero, array, idDiv) {
            // déclaration des variables pour chaque sous division
            let currentDiv, div, article, h5, textname, p, textingredient, prix_total, myImg, div2, listIngredients, a,
                nomImage;

            // recupère la division à laquelle sera ajouté tous les enfants
            currentDiv = document.getElementById(idDiv);

            div = document.createElement('div');
            currentDiv.appendChild(div);
            div.setAttribute('class', 'row');

            // permet de former deux colonnes
            for (let i = numero; i < numero + 2 && i < array.length; ++i) {
                article = document.createElement('article');
                div.appendChild(article);
                article.setAttribute('class', 'col-xs-12 col-sm-6 col-md-6 col-lg-6');

                div2 = document.createElement('div');
                article.appendChild(div2);
                div2.setAttribute('class', 'menu-post-img');

                // affichage de l'image
                nomImage = String(moduleTab.image(array[i].name));
                a = document.createElement('a');
                div2.appendChild(a);
                a.setAttribute('href', "assets/" + nomImage);
                a.setAttribute('title', nomImage);
                a.setAttribute('target', "_blank");

                myImg = new Image();
                myImg.src = nomImage;
                a.appendChild(myImg);
                myImg.setAttribute('width', '400');
                myImg.setAttribute('height', '400');
                myImg.setAttribute('src', "assets/" + nomImage);
                myImg.setAttribute('alt', nomImage);

                div2 = document.createElement('div');
                article.appendChild(div2);
                div2.setAttribute('class', 'menu-post-desc');

                h5 = document.createElement('h5');
                div2.appendChild(h5);
                h5.setAttribute('class', 'produits');

                // calcul le prix total du produit
                prix_total = moduleTab.prix(array[i]);

                // affiche le nom du produit ainsi que son prix
                textname = document.createTextNode(array[i]["name"] + " : " + prix_total + "€");
                h5.appendChild(textname);

                p = document.createElement('p');
                div2.appendChild(p);
                p.setAttribute('class', 'menu-text');

                // liste tous les ingrédients utiles au plat et les ajoute à listIngredients pour former une string contenant tous les ingrédients
                listIngredients = '';
                for (let j = 0; j < array[i]["components"].length; ++j) {
                    if (array[i]["components"][j] < components_data.length) {
                        if (j < array[i]["components"].length - 1) {
                            listIngredients += components_data[array[i]["components"][j]].name + ' / ';
                        } else {
                            listIngredients += components_data[array[i]["components"][j]].name;
                        }
                    }
                }
                // affiche les ingrédients
                textingredient = document.createTextNode(listIngredients);
                p.appendChild(textingredient);
            }
        }
    }
})();