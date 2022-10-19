// Code para el segundos canvas
window.onload = function() {
    // Animaciones en el canvas:
    let canvas = document.getElementById('canvas_dos');
    let context = canvas.getContext("2d");
    let x = 0;
    let y = 100;
    let test = Date.now();
    // Mover un objeto a 100px por segundo:
    let speed = 100;
    // Direccion del momvimiento para el objeto:
    let direct = 1;

    function draw() {
        let timePassed = (Date.now() - test) / 1000;
        test = Date.now(); 
        let fps = Math.round(1 / timePassed);
    
        // Limpiar el canvas cuando se termina la animacion
        context.clearRect(0, 0, 600, 400);
        
        context.beginPath();
        context.font = '42px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + fps, 0, 30);
        context.fillText("Time Passed: " + timePassed, 195, 30);
        context.fill();

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        // x += 10;
        // x += (speed * timePassed);
        // Direccion del objeto:
        x += direct * (speed * timePassed);
        
        if (x >= 600 - 100 || x <= 0) {
            // speed = 0;
            direct *= -1;
        }

        // if (x >= 600) {
        //     x = -100;
        // }

        window.requestAnimationFrame(draw);
      }

    draw();
}