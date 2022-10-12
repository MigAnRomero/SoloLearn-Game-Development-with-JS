window.onload = function() {
    // Animaciones en el canvas:
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let x = 0;
    let y = 100;

    function draw() {
        // Limpiar el canvas cuando se termina la animacion
        // context.clearReact(0, 0, 600, 400);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        x += 10;
        if (x >= 600) {
            x = -100;
        }
      }    
    //   draw();
    setInterval(draw, 50);
}