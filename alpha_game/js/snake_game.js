import {} from "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js";

window.onload = function() {
    const COLUMNAS = 40;
    const FILAS = 30;
    const LADO = 20;
    const ANCHO_CANVAS = COLUMNAS * LADO;
    const ALTO_CANVAS = FILAS * LADO;

    function setup() {
        createCanvas(ANCHO_CANVAS, ALTO_CANVAS);
    }

    function draw() {
        background("black");
    }
};