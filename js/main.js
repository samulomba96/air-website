
//SCROLL
//variabile con cui si può definire la quantità di pixel di scroll che si vuole applicare quando un utente clicca su un pulsante.


function scroll(){
    const scrollAmount = 420;
    const scrollContainersUl = document.querySelectorAll("#ul-scroll-laterale1, #ul-scroll-laterale2, #ul-scroll-laterale3");
    const avanti = document.querySelectorAll("#next1, #next2, #next3");
    const indietro = document.querySelectorAll("#prev1, #prev2, #prev3");

    //le variabili avanti & indietro sono NodeList
    scrollContainersUl.forEach( (container, index) => {
        avanti[index].addEventListener('click', function() {
            container.scrollLeft += scrollAmount;
        });
        indietro[index].addEventListener('click', function() {
            container.scrollLeft -= scrollAmount;
        });
    });

}

scroll();

//IMMAGINI DEL PRODOTTO DINAMICHE
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery

let slideIndex = 1;

//vedi prev e next nell'html
function cambiaImmagine(n) {
  visualizzaImmagine(slideIndex += n);
}

function immagineCorrente(n) {
  visualizzaImmagine(slideIndex = n);
}

function visualizzaImmagine(n) {
  let i;
  let immagineProdotto = document.getElementsByClassName("mySlides");
  let thumbnails = document.getElementsByClassName("thumbnails");

  if(n > immagineProdotto.length){ 
    slideIndex = 1;
  }

  if(n < 1){ 
    slideIndex = immagineProdotto.length;
  }

  for(i = 0; i < immagineProdotto.length; i++){
    immagineProdotto[i].style.display = "none";

    // Pausa il video se non è la diapositiva attiva
    //let video = immagineProdotto[i].querySelector("video");
    // if (video) {
    //   video.pause(); // Pausa il video se esiste e non è attivo
    // }
  }

  for(i = 0; i < thumbnails.length; i++){
   thumbnails[i].className = thumbnails[i].className.replace(" attiva", "");
  }

  immagineProdotto[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " attiva";

  // let videoAttivo = immagineProdotto[slideIndex - 1].querySelector("video");
  // if (videoAttivo) {
  //   //avvia il video quando è selezionato
  //   videoAttivo.play(); 
  // }
}

visualizzaImmagine(slideIndex);

//GRAFICA E FUNZIONALITA DELLA SELEZIONE DEL NUMERO DI SCARPE

let numero = document.querySelectorAll(".numero-di-scarpe");
let paginaScura = document.querySelector("#pagina-scura");
let menuTendinaCarrello = document.querySelector("#menu-tendina-carrello");
let misuraScarpeNellaTendina = document.querySelector("#misura-scarpe");
let numeroSalvato;
let bordoRosso = document.querySelector("#div-bordo-rosso");

numero.forEach(function(numero) {
  numero.addEventListener('click', function(event) {
      selezionareilNumero(event.target);  // Passi l'elemento cliccato alla funzione
  });
});

function selezionareilNumero() {
  event.target.parentElement.style.borderColor = "black"; //forse qua ci vuole un if per fare andare via la selezione
  numeroSalvato = event.target.parentElement.getAttribute('value');
  bordoRosso.style.borderColor = "#ffffff00";
  misuraScarpe = numeroSalvato ;
}

let btnCarrello = document.querySelector("#aggiungi-al-carrello").addEventListener('click', function(){
  aggiungiAlCarrello();
});

function aggiungiAlCarrello(){
  if(numeroSalvato == undefined){
    bordoRosso.style.borderColor = "red";
  }else{
    paginaScura.style.display = "block";
    menuTendinaCarrello.style.display = "block";
    misuraScarpeNellaTendina.innerHTML = "Taglia/Misura EU " + numeroSalvato;
  }
}

let btnChiudiTendaCarrello = document.querySelector("#esci-dal-carrello").addEventListener('click', function(event) {
  chiudiLaTendaDelCarrello();
});

function chiudiLaTendaDelCarrello(){
  paginaScura.style.display = "none";
  menuTendinaCarrello.style.display = "none";
}

//SALVO LE INFORMAZIONI DEL PRODOTTO

// let nomeProdotto = document.getElementById('nome-prodotto').innerText;
// let tipoDiProdotto = document.getElementById('tipo-di-prodotto').innerText;
// let misuraScarpe;
// let prezzo = document.getElementById('prezzo').innerText;
// class Prodotto {
//   constructor(nomeProdotto, tipoDiProdotto, misuraScarpe, prezzo) {
//     this.nomeProdotto = nomeProdotto;
//     this.tipoDiProdotto = tipoDiProdotto;
//     this.misuraScarpe = misuraScarpe;
//     this.prezzo = prezzo;
//   }
// }
// let prodottoSelezionato = new Prodotto(nomeProdotto, tipoDiProdotto, misuraScarpe, prezzo);
//RENDERIZZA NEL CARRELLO LA CLASSE
// function renderizzaCardNellaPaginaDelCarrello(array) {
//   let str = '';
//   array.forEach(element => {
//       str += `
//       <div class='card'>
//           <h3>${element.nomeProdotto}</h3>
//           <h3>${element.tipoDiProdotto}</h3>
//           <h3>${element.misuraScarpe}</h3>
//           <h3>${element.prezzo}</h3>
//           </div>
//       `
//   })
//   //document.querySelector('.container').innerHTML = str
// }
