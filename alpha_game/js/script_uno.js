//Funciones
function hit(power) {
    console.log("Hit with "+power);
}

function hello() {
    console.log("hello world!");
}

console.log("Start");

window.onload = function() {
    let btn = document.getElementById("myButton");
    btn.onclick = hello;
}

window.onload = function() {
    let btn = document.getElementsByClassName(".myButton");
    btn.onclick = hit;
};

let health = 100;