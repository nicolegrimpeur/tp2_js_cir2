let verifieContent = function (idDiv) {
    let currentDiv = document.getElementById(idDiv);
    return currentDiv.childElementCount === 1;
}

let addList = function (array, idDiv) {
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

    for (let value in array) {
        th = document.createElement("th");
        tr.appendChild(th);

        if (typeof (array[value]) == "string") {
            if (!isNaN(Number(array[value]))) th.setAttribute('class', 'col-1');
            else th.setAttribute('class', 'col-2');
            th.appendChild(document.createTextNode(array[value]));
        }
        else {
            th.setAttribute('class', 'col-5');
            th.appendChild(document.createTextNode(array[value]));
        }
    }
}