window.onload = function() {
    // Animaciones en el canvas:
    let canvas_two = document.getElementById('canvas_two');
    let contexto = canvas_two.getContext("2d");
    let x = 0;
    let y = 100;

    function draw() {
        // Limpiar el canvas cuando se termina la animacion
        contexto.clearReact(0, 0, 600, 400);

        contexto.beginPath();
        contexto.rect(x, y, 100, 100);
        contexto.fillStyle="red";
        contexto.fill();

        x += 10;
        if (x >= 600) {
            x = -100;
        }
      }    
    //   draw();
    setInterval(draw, 50);
}