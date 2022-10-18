window.onload = function() {
    // let test = Date.now();
    // console.log(test);
    let test;

    function draw() {
        let timePassed = (Date.now() - test) / 1000;
        let fps = Math.round(1 / timePassed);
        test = Date.now();
        console.log("Segundos: " + test);
        console.log("FPS: " + fps);
    }
    draw();
    draw();
}