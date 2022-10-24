window.onload = function() {
    const mainCanvas = document.getElementById("canvas_dos");
    const context = mainCanvas.getContext("2d");

    // Variables para las coordenadas del mouse
    let initial_X;
    let initial_Y;

    const dibujar = (cursor_X, cursor_Y) => {
        context.beginPath();
        context.moveTo(initial_X, initial_Y);
        // Grosor de la linea del pincel
        context.lineWidth = 10;
        context.strokeStyle = "#000";
        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineTo(cursor_X, cursor_Y);
        context.stroke();

        // Las coordenadas deben actualizarse por donde el cursor se mueva en el canvas
        initial_X = cursor_X;
        initial_Y = cursor_Y;
    };
    
    const mouseDown = (evt) => {
        initial_X = evt.offsetX;
        initial_Y = evt.offsetY;
        dibujar(initial_X, initial_Y);
        mainCanvas.addEventListener("mousemove", mouseMoving);
    };

    // funcion para mover el mouse en el canvas
    const mouseMoving = (evt) => {
        dibujar(evt.offsetX, evt.offsetY);
    };

    // funcion para dejar de dibujar en el canvas al soltar el clic
    const mouseUp = () => {
        mainCanvas.removeEventListener("mousemove", mouseMoving);
    };

    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
};