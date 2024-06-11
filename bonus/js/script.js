// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// prendo dal dom il riferimento al ul che conterra i li
const contenitoreLista = document.getElementById("lista-della-spesa");

// creo un array con gli ingredienti
const listaSpesa = ["Formaggio di Finterra", "Pomodorini di Hyrule", "Grano di Colbacco", "Salgemma"];

// array con immagine da associare con ingredienti
const immaginiIngredienti = ["img/Item_Material-10.png", "img/Item_Fruit_M.png", "img/Item_Material-07.png", "img/Item_Ore_H.png" ]



// creo un ciclo while che legga tutti gli elementi dell'arrey e li stampi in pagina

let i = 0;
let j = 0;

while(i < listaSpesa.length && j < immaginiIngredienti.length){

    let alimentoLista = listaSpesa[i];
    // stampo in console tutto il contenuto dell'array
    console.log(alimentoLista);

    let immagineCorrente = immaginiIngredienti[i];
    console.log(immagineCorrente);

    i++;
    j++;
}


