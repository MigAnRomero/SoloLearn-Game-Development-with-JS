// Code para el segundos canvas
window.onload = function() {
    // Animaciones en el canvas:
    let canvas = document.getElementById('canvas_dos');
    let context = canvas.getContext("2d");
    let x = 300;
    let y = 200;
    let test = Date.now();
    // Mover un objeto a 100px por segundo:
    let speed = 100;
    // Direccion del momvimiento para el objeto:
    let direct;
    // Codigo para los botones:
    let btn_up = document.getElementById('up');
    let btn_left = document.getElementById('left');
    let btn_down = document.getElementById('down');
    let btn_right = document.getElementById('right');

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

        // Funciones para presionar los botones usando solo el MOUSE.
        // Funcion para btn up
        btn_up.onmousedown = function() {
            direct = 3;
        }
        btn_up.onmouseup = function() {
            direct = 0;
        }

        // Funcion para btn left
        btn_left.onmousedown = function() {
            direct = 2;
        }
        btn_left.onmouseup = function() {
            direct = 0;
        }

        // Funcion para btn down
        btn_down.onmousedown = function() {
            direct = 4;
        }
        btn_down.onmouseup = function() {
            direct = 0;
        }

        // Funcion para btn right
        btn_right.onmousedown = function() {
            direct = 1;
        }
        btn_right.onmouseup = function() {
            direct = 0;
        }

        // Funciones para presionar los botones en pantallas tactiles
        // Funcion para el btn up
        btn_up.ontouchstart = function() {
            direct = 3;
        }
        btn_up.ontouchend = function() {
            direct = 0;
        }

        // Funcion para el btn left
        btn_left.ontouchstart = function() {
            direct = 2;
        }
        btn_left.ontouchend = function() {
            direct = 0;
        }
        
        // Funcion para el btn down
        btn_down.ontouchstart = function() {
            direct = 4;
        }
        btn_down.ontouchend = function() {
            direct = 0;
        }

        // Funcion para el btn right
        btn_right.ontouchstart = function() {
            direct = 1;
        }
        btn_right.ontouchend = function() {
            direct = 0;
        }

        // Movimiento del objeto
        // btn_up
        if(direct == 3) {
            y -= (speed * timePassed);
        }
        // btn_left
        if(direct == 2) {
            x -= (speed * timePassed);
        }
        // btn_down
        if(direct == 4) {
            y += (speed * timePassed);
        }
        // btn_right
        if(direct == 1) {
            x += (speed * timePassed);
        }

        window.requestAnimationFrame(draw);
      }

    draw();
}