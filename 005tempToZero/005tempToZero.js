
let numeroMinutos = + prompt("Dime cuantos minutos");

let numeroMinutosMilisegundos = numeroMinutos * 60000;

let numeroSegundos = + prompt("Dime cuantos segundos");

let numeroSegundosMilisegundos = numeroSegundos *1000;

let totalMilisegundos = numeroMinutosMilisegundos + numeroSegundosMilisegundos;

function temporizador() {

setInterval(mostrarMensaje, 1000);
    
}

function mostrarMensaje() {
    console.log("ha pasado un segundo");
}

function pararTemporizador() {

    if (totalMilisegundos == 0) {
      
        clearInterval(temporizador());

    }
    
}