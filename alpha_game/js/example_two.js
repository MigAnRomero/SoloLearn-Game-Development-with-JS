window.onload = function() {
    // let test = Date.now();
    // console.log(test);
    // let test;

    // function draw() {
    //     let timePassed = (Date.now() - test) / 1000;
    //     let fps = Math.round(1 / timePassed);
    //     test = Date.now();
    //     console.log("Segundos: " + test);
    //     console.log("FPS: " + fps);
    // }
    // draw();
    // draw();

    // Animaciones en el canvas:
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let x = 0;
    let y = 100;
    let test = Date.now();
    // Mover un objeto a 100px por segundo:
    let speed = 100;

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
        x += (speed * timePassed);
        
        if (x >= 500) {
            // start drawing another cube to the beginning when its right x position reaches the end of canvas
            context.beginPath();
            context.rect(x-600, y, 100, 100)
            context.fillStyle="blue";
            context.fill();
            // when it reaches fully
            // you reset it
            if (x >= 600){
                x = 0;
            }
        }

        window.requestAnimationFrame(draw);
      }

    draw();
}