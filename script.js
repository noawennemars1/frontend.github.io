var datum = new Date ("Jan 15, 2021").getTime(); //hier maak ik een var aan voor de datum dat de timer moet aflopen
var tijd = setInterval(function () { //om elke seconden de tijd up te daten
    var nu = new Date().getTime();
    var verschil = datum - nu; //het verschil tussen de datum en nu is de tijd die nog resterend is, dus die wordt hier berekend
    var dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));//tijd berekenen voor de dagen
    var uren = Math.floor((verschil % (1000 * 60 * 60) / (1000 * 60)));//tijd berekenen voor de uren
    var minuten = Math.floor(verschil % (1000 * 60 * 60) / (1000 * 60));//tijd berekenen voor de minuten
    var seconden = Math.floor(verschil % (1000 * 60) / 1000);//tijd berekenen voor de seconden

    document.getElementById("countdown").innerHTML = dagen + "d " + uren + "u " + minuten + "m " + seconden + "s ";
    if (verschil < 0){
        clearInterval(tijd);
        document.getElementById("countdown").innerHTML = "afgelopen";
    }
})

var menuIcoon = document.querySelector('#menuIcoon');
var nav = document.querySelector('#menu');

function openMenu() {
    nav.classList.toggle('toonnav');
}

menuIcoon.addEventListener("click", openMenu);


