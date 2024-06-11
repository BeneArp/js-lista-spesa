// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// prendo dal dom il riferimento al ul che conterra i li
const contenitoreLista = document.getElementById("lista-della-spesa");

// creo un array con gli alimenti da comprate
const listaSpesa = ["pane", "pasta", "pomodoro", "mozzarella", "mele", "melanzane"];


// creo un ciclo while che legga tutti gli elementi dell'arrey e li stampi in pagina

let i = 0;

while(i < listaSpesa.length){

    let alimentoLista = listaSpesa[i];
    // stampo in console tutto il contenuto dell'array
    console.log(alimentoLista);

    // creo una variabile con l'html da inserie nella ul del dom
    let elementoLista = `<li>${alimentoLista}</li>`

    i++;
}
