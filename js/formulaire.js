// module permettant l'affichage et la modification des tableaux des produits et des composants
let formulaire = (function () {
    return {
        // vérifie s'il existe déjà un élément au tableau demandé
        // un seul élément est censé se trouver, les titres du tableau
        verifieContent: idDiv => {
            let currentDiv = document.getElementById(idDiv);
            return currentDiv.childElementCount === 1;
        },

        // ajoute les éléments contenus dans array dans la div idDiv
        addList(array, idDiv) {
            // initialisation des éléments à ajouter dans la div
            let currentDiv = document.getElementById(idDiv);
            let div = document.createElement("div");
            let table = document.createElement("table");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let th;

            currentDiv.appendChild(div);
            div.appendChild(table);
            table.appendChild(tbody);
            tbody.appendChild(tr);

            div.setAttribute('class', 'list');
            tr.setAttribute('class', 'row');

            if (idDiv == "components") {
                th = document.createElement("th");
                tr.appendChild(th);
                th.setAttribute('class', 'col-1');
            }

            // parcours les éléments à afficher
            for (let value of array) {
                th = document.createElement("th");
                tr.appendChild(th);

                // si l'élément est un string
                // on vérifie que l'élément rentré n'est pas un nombre, si oui on alloue à cette élément 1 case
                // sinon c'est un string on lui alloue deux cases
                if (typeof (value) == "string") {
                    if (!isNaN(Number(value))) th.setAttribute('class', 'col-1');
                    else th.setAttribute('class', 'col-2');
                    th.appendChild(document.createTextNode(value));
                // sinon, il s'agit d'un tableau qui aura donc besoin de plus de case, ici 5 cases
                } else {
                    th.setAttribute('class', 'col-5');
                    th.appendChild(document.createTextNode(value));
                }
            }
        },

        // permet de calculer un arrondi à deux chiffres après la virgule d'un nombre rentré en string
        arrondiSTR: string => {
            return String(Math.round(Number(string) * 100) / 100);
        }
    }
})();



