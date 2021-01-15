/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var menuIcoon = document.querySelector('#menuIcoon');
var nav = document.querySelector('#menu');
var body = document.querySelector('body');
var menuSluiten = document.querySelector('#sluitIcoon');
var nav = document.querySelector('#menu');
var datum = new Date ("Jan 16, 2021").getTime(); //hier maak ik een var aan voor de datum dat de timer moet aflopen
var tijd = setInterval(function () { //om elke seconden de tijd up te daten
var nu = new Date().getTime();
var verschil = datum - nu; //het verschil tussen de datum en nu is de tijd die nog resterend is, dus die wordt hier berekend
var uren = Math.floor((verschil % (1000 * 60 * 60) / (1000 * 60)));//tijd berekenen voor de uren
var minuten = Math.floor(verschil % (1000 * 60 * 60) / (1000 * 60));//tijd berekenen voor de minuten
var seconden = Math.floor(verschil % (1000 * 60) / 1000);//tijd berekenen voor de seconden

function openMenu() {
    nav.classList.toggle('toonnav');
    body.classList.toggle('nietscrollen');
}
function sluitMenu() {
    nav.classList.toggle('navsluiten');
}

menuIcoon.addEventListener("click", openMenu);
sluitIcoon.addEventListener("click", sluitMenu);

document.getElementById("countdown").innerHTML =  + uren + "u " + minuten + "m " + seconden + "s ";
    if (verschil < 0){
        clearInterval(tijd);
        document.getElementById("countdown").innerHTML = "afgelopen";
    }
})




