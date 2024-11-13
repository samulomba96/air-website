//primo controllo
let inputNome = document.querySelector("#nome");
let inputCognome = document.querySelector("#cognome");
let inputIndirizzo = document.querySelector("#indirizzo");
let inputCap = document.querySelector("#cap");
let inputCitta = document.querySelector("#citta");
let inputPaese = document.querySelector("#paese");
let inputEmail = document.querySelector("#mail");
let inputTelefono = document.querySelector("#telefono");
let form = document.querySelector("#container-sinistra-form");
let tutteLeForm = document.querySelectorAll(".input");

let regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,})+$/;
let regexTelefono = /^([+]39)?((38[{8,9}|0])|(34[{6-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;
let regexNome = /^[A-Za-zèùàòé][a-zA-Z'èùàòé ]*$/;
let regexCognome = /^[A-Za-zèùàòé][a-zA-Z'èùàòé ]*$/;
let regexIndirizzo = /^[A-Za-zÀ-ÿ0-9\s,.-]+ \d+[A-Za-z]?$/;
let regexCap = /^(IT)?\s*\d{5}$/;
let regexPaese = /^[A-Za-zÀ-ÿ\s'-.]+$/;
let regexCitta = /^[A-Za-zÀ-ÿ\s'-.]+$/;

//secondo controllo
let form2 = document.querySelector("#carta-credito")
let checkCartaCredito = document.querySelector("#carta-di-credito")
let checkPaypal = document.querySelector("#paypal")
let checkGooglePay = document.querySelector("#google-pay")
let inputNumeroCarta = document.querySelector("#numero-carta")
let inputMeseAnno = document.querySelector("#mese-anno")
let inputCvv = document.querySelector("#cvv")
let tutteLeForm2 = document.querySelectorAll(".input2")

let regexNumeroCarta = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
let regexMeseAnno = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
let regexCvv = /^[0-9]{3}$/;


//DA SISTEMARE LE REGEX

function check(regex, input){
    if(!regex.test(input.value)){
        input.style.border = "1px solid red";
    }else{
        input.style.border = "1px solid green";
    }
}

form.addEventListener("submit", function(event){
    //blocca l'evento submit
    event.preventDefault();
    check(regexEmail, inputEmail);
    check(regexTelefono, inputTelefono);
    check(regexNome, inputNome);
    check(regexCognome, inputCognome);
    check(regexCap, inputCap);
    check(regexIndirizzo, inputIndirizzo);
    check(regexCitta, inputCitta);
    check(regexPaese, inputPaese);
    vaiAllaCartaDiCredito()


}) 

function vaiPerdavvero(){
    
    form.style.display = "none";
    form2.style.display = "block"
    
}

function vaiAllaCartaDiCredito(){
    // controllo se sono vuote
    tutteLeForm.forEach(input => {

        console.log(input.value);

        if (!input.value == "") {
            
            vaiPerdavvero()
        } 
    });
}



//secondo controllo
form2.addEventListener("submit", function(event){
    //blocca l'evento submit
    event.preventDefault();
    checkCarta(regexNumeroCarta, inputNumeroCarta);
    checkCarta(regexMeseAnno, inputMeseAnno);
    checkCarta(regexCvv, inputCvv);
}) 

function checkCarta(regex, input){
    if(!regex.test(input.value)){
        input.style.border = "1px solid red";
    }else{
        input.style.border = "1px solid green";
        //submit()
        alert("acquisto completato! :)")
    }
}

function controlloFinale(){
    // controllo se sono vuote
    tutteLeForm2.forEach(input => {
        if (!input.value) {
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid green";
        }
    });
}
