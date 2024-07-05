// comment

let studentPrvi = {
    firstName: "Darko",
    surname: "Merli"
};

let studentDrugi = {
    firstName: "Bogdan",
    surname: "Milutinovic"
};

repeatEverySecond();

setTimeout(showPopUp, 1000);

let studenti = [studentPrvi, studentDrugi];

console.log(studenti);


function menuDisplay() {
    var meni = document.getElementById("meni");
    if (meni.style.display == "block") {
        meni.style.display = "none";
    } else {
        meni.style.display = "block";
    }
}

var klik = document.getElementById("klik");
klik.addEventListener("click", menuDisplay);

if (window.innerWidth >= 1700) {
    meni.style.display == "none";
}

function repeatEverySecond() {
    let intervalID = setInterval(checkWidth, 10);
}

function checkWidth() {
    var windowWidth = window.innerWidth;
    if (window.innerWidth >= 1700) {
        meni.style.display = "none";
    }
}
let provera = false;

function closeTheCookies(){
    provera = true;
    var divForPopup = document.getElementById("divForPopup");
    if(divForPopup.style.display == "none"){
        divForPopup.style.display = "block";
    } else {
        divForPopup.style.display = "none";
    }
    document.body.style.overflow = "auto";
}

function showPopUp(){
    divForPopup.style.display = "block";
    document.body.style.overflow = "hidden";
}

var popup = document.getElementById("popup");
popup.addEventListener("click", closeTheCookies);


// function switchMode(){
//     let drugi = document.getElementById("druga");
//     if(drugi.style.background == "black"){
//         drugi.style.background = "white";
//     } else {
//         drugi.style.background = "black";
//     }
// }



let darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", function(){
    let drugi = document.getElementById("druga");
    drugi.classList.toggle("white");
    let drugiParagrafi = document.getElementById("drugiParagrafi");
    drugiParagrafi.classList.toggle("blackLettersP");
    document.body.classList.toggle("white");
    document.body.classList.toggle("blackLettersP");
    let dryAged = document.getElementById("dryAged");
    dryAged.classList.toggle("blackLettersP");
    let AlteWutz = document.getElementById("AlteWutz");
    AlteWutz.classList.toggle("blackLettersP");
    let tekstoviDeo = document.getElementById("tekstoviDeo");
    tekstoviDeo.classList.toggle("blackLettersP");
    let teksstovi = document.getElementById("teksstovi");
    teksstovi.classList.toggle("blackLettersP");
    let najveciTekstovi = document.getElementById("najveciTekstovi");
    najveciTekstovi.classList.toggle("blackLettersP");
    let pod1tekst = document.getElementById("pod1tekst");
    pod1tekst.classList.toggle("blackLettersP");
    let pod2tekst = document.getElementById("pod2tekst");
    pod2tekst.classList.toggle("blackLettersP");
    let pod3tekst = document.getElementById("pod3tekst");
    pod3tekst.classList.toggle("blackLettersP");
    let pod4tekst = document.getElementById("pod4tekst");
    pod4tekst.classList.toggle("blackLettersP");
    let idtekst = document.getElementById("idtekstSlike");
    idtekst.classList.toggle("whiteTekstSlika");
    let idpar = document.getElementById("tekstSlikeNaslov");
    idpar.classList.toggle("blackLettersP");
    let tekstSPar = document.getElementById("tekstSlikeParagraf");
    tekstSPar.classList.toggle("blackLettersP");
    let grilkursDugme = document.getElementById("grilkursDugme");
    grilkursDugme.classList.toggle("blackDugme");
    darkModeButton.classList.toggle("whiteDugme");
});

