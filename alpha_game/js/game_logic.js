window.onload = function() {
    // Animaciones en el canvas:
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let x = 0;
    let y = 100;

    function draw() {
        // Limpiar el canvas cuando se termina la animacion
        context.clearRect(0, 0, 600, 400);
        
        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        x += 5;
        if (x >= 500) {
            // start drawing another cube to the beginning when its right x position reaches the end of canvas
            context.beginPath();
            context.rect(x-600, y, 100, 100)
            context.fillStyle="blue";
            context.fill();
            // when it reaches fully
            // you reset it
            if (x>=600){
                x = 0;
            }
        }
      }
      /*
      Se puede reemplazar setInterval() con window.requestAnimationFrame() para evitar que, el navegador
      del usuario, se vaya a bloquear en el redibujado, tomando en cuenta los recursos del sistema
      para realizar el "game loop".
       */
    //   setInterval(draw, 30);
    window.requestAnimationFrame(draw);
}