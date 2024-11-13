//CHIAMATA FETCH DA JSON
//  //Ci prepariamo l'array vuoto di studenti
// let prodotti = [];
// //prendo i dati dal backend
// function ottieniDati() {
//     fetch('../assets/data/data.json').then((resp) => resp.json()).then((response) => {
//         prodotti = response;
//         //Richiammiamo la funzione mappa passandogli come parametro l'array di studenti 
//         console.log(prodotti)
//         mappa(prodotti)
//     })
// }

// //Mappiamo l'array prendendo solo 3 proprietà dei nostri oggetti
// function mappa(array) {
//     // let prodottiMappati = array.map((element) => {
//     //     return {
//     //         nome: element.nome,
//     //         tipo: element.tipo,
//     //         misura: element.misura,
//     //         prezzo: element.prezzo
//     //     }
//     // })
//     let prodottiFiltrati = prodottiMappati.filter((element) => {
//         return element
//     })
//     renderizza(prodottiFiltrati)
// }

// //Renderizziamo a schermo
// function renderizza(array) {
//     let str = '';
//     array.forEach((product) => {
//         str += `
//         <div class="card">
//         <h1>nome: <em style='color:blue'>${product.nome}</em></h1>
//         <h3>tipo: <em style='color:blue'>${product.tipo}</em></h3>
//         <h3>misura: <em style='color:blue'>${product.misura}</em></h3>  
//         <p>prezzo: <em style='color:blue'>${product.prezzo}</em></p>
//         </div>
//         `
//     })
//     document.querySelector('#test').innerHTML = str
// }
//ottieniDati()

//QUANTITA CARRELLO E CALCOLO

let span1Iniziale = document.querySelector("#prezzo1");
let selettore1 = document.querySelector("#selettore1");
span1Iniziale.innerHTML = "119 €";
let numeroConvertito1 = parseInt(span1Iniziale.innerHTML);
let risultato1;
let cardProdotto1 = document.querySelector("#primo-prodotto");
let barra1 = document.querySelector("#barra1");
let buttonTrash1 = document.querySelector("#button-trash1");

let span2Iniziale = document.querySelector("#prezzo2");
let selettore2 = document.querySelector("#selettore2");
span2Iniziale.innerHTML = "129 €";
let numeroConvertito2 = parseInt(span2Iniziale.innerHTML);
let risultato2;
let cardProdotto2 = document.querySelector("#secondo-prodotto");
let buttonTrash2 = document.querySelector("#button-trash2");

let totale = document.querySelector("#prezzo-totale");
let subTotale = document.querySelector("#subtotale");
let sommaTotale;


const aggiornaTotale = function() {
    // Calcolo del risultato 1 e 2
    risultato1 = selettore1.value * numeroConvertito1;
    risultato2 = selettore2.value * numeroConvertito2;

    // Somma totale e aggiornamento HTML
    sommaTotale = risultato1 + risultato2;
    totale.innerHTML = sommaTotale + " €";
    subTotale.innerHTML = sommaTotale + " €";

};

selettore1.addEventListener("change", function() {
    span1Iniziale.innerHTML = selettore1.value * numeroConvertito1 + " €";
    aggiornaTotale();
    if(selettore1.value == 0){
        cardProdotto1.style.display = "none";
        barra1.style.display = "none";

    }
});

selettore2.addEventListener("change", function() {
    span2Iniziale.innerHTML = selettore2.value * numeroConvertito2 + " €";
    aggiornaTotale();
    if(selettore2.value == 0){
        cardProdotto2.style.display = "none";
        barra1.style.display = "none";
    }
});

aggiornaTotale();

buttonTrash1.addEventListener("click", function() {
    cardProdotto1.style.display = "none";
    barra1.style.display = "none";
    totale.innerHTML = sommaTotale - risultato1 + " €";
    numeroConvertito1 = 0;
    aggiornaTotale()
});

buttonTrash2.addEventListener("click", function() {
    cardProdotto2.style.display = "none";
    barra1.style.display = "none";
    totale.innerHTML = sommaTotale - risultato2 + " €";
    numeroConvertito2 = 0;
    aggiornaTotale()
});