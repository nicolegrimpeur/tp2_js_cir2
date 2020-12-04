// module gérant les événements liés à la barre du header
let event = (function () {
    return {
        // ajoute les différents événements nécessaires et affiche si besoin les raccourcis de la barre
        addEvent: () => {
            event.eventResize();

            window.addEventListener('scroll', event.eventScroll);
            window.addEventListener('resize', event.eventResize);
        },

        // événement liés au scroll de la page, noirci la bande si l'on descend
        eventScroll : () => {
            const nav = document.getElementsByTagName('nav');
            if (window.scrollY) {
                nav[0].setAttribute('class', 'black');
            } else {
                nav[0].removeAttribute('class');
            }
        },

        // supprime ou ajoute les éléments de la barre du header en fonction de la largeur de la page
        eventResize : () => {
            const ul = document.getElementsByTagName('ul');
            const logo = document.getElementsByClassName('logo');
            // teste la taille de la page pour savoir s'il est nécessaire de supprimer les raccourcis du header
            if (event.widthTel()) {
                if (ul[0].childElementCount === 3) {
                    for (let i = 0; i < 3; i++) {
                        ul[0].removeChild(ul[0].lastChild);
                    }
                }
                logo[0].setAttribute('style', 'text-align: center');
                logo[0].setAttribute('class', 'logo');
            } else {
                if (ul[0].childElementCount === 0) {
                    let div;
                    let li;
                    let a;
                    for (let i = 0; i < 3; i++) {
                        div = document.createElement('div');
                        div.setAttribute('class', 'col-md-4 col-lg-4 col-xl-4');
                        ul[0].appendChild(div);

                        li = document.createElement('li');
                        div.appendChild(li);

                        a = document.createElement('a');
                        a.setAttribute('href', ['#', '#produits', '#composants'][i]);
                        a.setAttribute('class', 'boutons');
                        a.innerHTML = ['Accueil', 'Produits', 'Composants'][i];
                        li.appendChild(a);
                    }
                    logo[0].setAttribute('style', 'text-align: left');
                    logo[0].setAttribute('class', 'logo col-6 mr-auto');
                }
            }
        },

        // définit lorsque la page est trop petite pour afficher les raccourcis du header
        widthTel: () => {
            return window.innerWidth <= 800;
        }
    }
})();



