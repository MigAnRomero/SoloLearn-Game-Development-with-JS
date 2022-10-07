//Funciones
function hit() {
    health = health / 2;
    if(health <= 1) {
        alert("Game over!");
    }
    else {
        console.log(health);
    }
}

function hello() {
    console.log("hello world!");
}

console.log("Start");

window.onload = function() {
    let btn = document.getElementById("myButton");
    btn.onclick = hello;
}

window.onload = function() {
    let btn = document.getElementsByClassName(".myButton");
    btn.onclick = hit;
};

let health = 100;