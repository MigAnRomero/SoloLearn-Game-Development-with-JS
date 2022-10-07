console.log("Start");

//Funciones
function hit(power) {
    console.log("Hit with "+power);
}

function hello() {
    console.log("hello world!");
}

let btn = document.getElementById("myButton");
btn.onclick = hello;