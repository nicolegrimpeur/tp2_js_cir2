// redirige vers le module souhaité
let Add = function (id_list) {
    if (id_list === "products") moduleProducts.lanceProducts();
    else if (id_list === "components") moduleComponents.lanceComponent();
}