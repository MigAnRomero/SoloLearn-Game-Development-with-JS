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

    // Id: pruebaUno
    let canvasUno = document.getElementById('pruebaUno');
    let contextoUno = canvasUno.getContext('2d');

    // a. Forma abierta
    contextoUno.beginPath();
    contextoUno.moveTo(50,50);
    contextoUno.lineTo(50,150);
    contextoUno.lineTo(150,150);
    contextoUno.stroke();
    // b. Forma cerrada con  relleno
    contextoUno.beginPath();
    contextoUno.moveTo(200,50);
    contextoUno.lineTo(200,150);
    contextoUno.lineTo(300,150);
    contextoUno.fill();
     // c. Forma  cerrada sin relleno
    contextoUno.beginPath();
    contextoUno.moveTo(50,200);
    contextoUno.lineTo(50,300);
    contextoUno.lineTo(150,300);
    contextoUno.closePath();
    contextoUno.stroke();

    // Id: pruebaDos
    // Dibujar un rectangulo:
    let canvasDos = document.getElementById('pruebaDos');
    let contextDos = canvasDos.getContext('2d');

    // contextDos.rect(x, y, width, height);
    contextDos.rect(50, 50, 200, 150);
    contextDos.stroke();

    // Id: pruebaTres
    // Dibujar un circulo:
    let canvasTres = document.getElementById('pruebaTres');
    let contextTres = canvasTres.getContext('2d');
    // contextTres.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);
    contextTres.arc(300, 200, 100, 0, 2 * Math.PI);
    contextTres.stroke();

    // Id: pruebaCuatro
    // Triangulo con lineas de color rojo:
    let canvasCuatro = document.getElementById('pruebaCuatro');
    let contextCuatro = canvasCuatro.getContext('2d');
    
    contextCuatro.beginPath();
    contextCuatro.rect(50, 50, 200, 150);
    contextCuatro.fillStyle = "greenyellow";
    contextCuatro.fill();
    contextCuatro.lineWidth = 10;
    contextCuatro.strokeStyle = "red";
    contextCuatro.stroke();
    
    // Dibujar otra figura
    contextCuatro.beginPath();
    contextCuatro.rect(50, 220, 200, 150);
    contextCuatro.fillStyle = "#5e9860";
    contextCuatro.fill();
    contextCuatro.lineWidth = 10;
    contextCuatro.strokeStyle = "#af1f1f";
    contextCuatro.stroke();

    // Circulo
    contextCuatro.beginPath();
    contextCuatro.arc(300, 200, 100, 0, 2 * Math.PI);
    contextCuatro.fillStyle = "#de4646";
    contextCuatro.fill();
    contextCuatro.lineWidth = 6;
    contextCuatro.strokeStyle = "#505050";
    contextCuatro.stroke();

    // Dibujar multiples figuras
    // context.beginPath();
    // context.rect(50, 50, 300, 200);
    // context.fillStyle = "#1775b7";
    // context.fill();

    // context.beginPath();
    // context.arc(300, 200, 100, 0, 2 * Math.PI);
    // context.fillStyle = "#de4646";
    // context.fill();

    // Id: canvas
    // Colocando letras al canvas
    context.beginPath();
    context.font = '42px Arial';
    context.fillStyle = 'red';
    context.strokeStyle = "grey";
    context.fillText("A", 0, 30);
    context.fillText("B", 10, 200);
    context.fillText("C", 200, 30);
    context.strokeText("Hello world", 200, 100);

    context.beginPath();
    let img = new Image();
    img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg';
    // context.drawImage(img, x, y, width, height);
    /* La funcion drawImage debe estar dentro de un evento
       onload para mostrarse en el canvas.
    */
    img.onload = function() {
        context.drawImage(img, 50, 50, 100, 100); 
    };
    // context.imageSmoothingEnabled = false;
};