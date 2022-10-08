// Funciones
function hit() {
    health = health / 2;
    if(health <= 1) {
        alert("Game over!");
    }
    else {
        console.log(health);
    }
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
// Canvas
window.onload = function() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    // context.moveTo(50, 100);
    // context.lineTo(400, 200);
    // context.stroke();
    
    // context.moveTo(0, 0);
    // context.lineTo(600, 400);
    // context.stroke();

    // Dibujar un rectangulo:
    // context.rect(x, y, width, height);
    context.rect(50, 50, 200, 150);
    context.stroke();
}