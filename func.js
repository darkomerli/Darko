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

function closeTheCookies(){
    var popupCookie = document.getElementById("popupCookie");
    if(popupCookie.style.display == "none"){
        popupCookie.style.display = "block";
    } else {
        popupCookie.style.display = "none";
    }
}

var popup = document.getElementById("popup");
popup.addEventListener("click", closeTheCookies);