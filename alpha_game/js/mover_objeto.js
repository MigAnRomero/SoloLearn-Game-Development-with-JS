window.onload = function() {
    const canvas = document.getElementById("lienzo");
    const context = canvas.getContext("2d");
    let objeto = [];
    let objetoActual = null;
    // Agregar objetos de prueba
    objeto.push({
        x: 0, y: 0, width: 100, height: 200, color: '#00f'
    });

    objeto.push({
        x: 300, y: 150, width: 50, height: 100, color: '#f00'
    });

    // Mostrar los objetos en el canvas
    function draw() {
        context.fillStyle = '#f0f0f0';
        context.fillRect(0, 0, 600, 400);
        for(let i = 0; i < objeto.length; i++) {
            context.fillStyle = objeto[i].color;
            context.fillRect(objeto[i].x, objeto[i].y, objeto[i].width, objeto[i].height);
        }
    }

    draw();

    // Definir los eventos del mouse
    canvas.onmousedown = function(event) {
        for(let i = 0; i < objeto.length; i++) {
            if(objeto[i].x < event.clientX 
                && (objeto[i].width + objeto[i].x > event.clientX)) {
                    objetoActual = objeto[i];
                    break;
                }
        }
    };

    canvas.onmousemove = function(event) {
        if(objetoActual != null) {
            objetoActual.x = event.clientX;
            objetoActual.y = event.clientY;
        }
        draw();
    };
};