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
    // context.rect(50, 50, 200, 150);
    // context.stroke();

    // Dibujar un circulo:
    // context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);
    // context.arc(300, 200, 100, 0, 2 * Math.PI);
    // context.stroke();

    // Triangulo con lineas de color rojo
    // context.rect(50, 50, 200, 150);
    // context.fillStyle = "greenyellow";
    // context.fill();
    // context.lineWidth = 10;
    // context.strokeStyle = "red";
    // context.stroke();
    
    // Dibujar otra figura
    // context.rect(50, 220, 200, 150);
    // context.fillStyle = "#5e9860";
    // context.fill();
    // context.lineWidth = 10;
    // context.strokeStyle = "#af1f1f";
    // context.stroke();

    // Circulo
    // context.arc(300, 200, 100, 0, 2 * Math.PI);
    // context.fillStyle = "#de4646";
    // context.fill();
    // context.lineWidth = 6;
    // context.strokeStyle = "#505050";
    // context.stroke();

    // Dibujar multiples figuras
    // context.beginPath();
    // context.rect(50, 50, 300, 200);
    // context.fillStyle = "#1775b7";
    // context.fill();

    // context.beginPath();
    // context.arc(300, 200, 100, 0, 2 * Math.PI);
    // context.fillStyle = "#de4646";
    // context.fill();

    // Colocando letras al canvas
    context.beginPath();
    context.font = '42px Arial';
    context.fillStyle = 'red';
    context.strokeStyle = "grey";
    context.fillText("A", 0, 30);
    context.fillText("B", 10, 200);
    context.fillText("C", 200, 30);
    context.strokeText("Hello world", 200, 100);
}