
let numeroMinutos = + prompt("Dime cuantos minutos");

let numeroMinutosMilisegundos = numeroMinutos * 60000;

let numeroSegundos = + prompt("Dime cuantos segundos");

let numeroSegundosMilisegundos = numeroSegundos *1000;

let totalMilisegundos = numeroMinutosMilisegundos + numeroSegundosMilisegundos;

temporizador(numeroSegundos);

function temporizador(sec) {

let myInterval = setInterval(mostrarMensaje, 1000, sec);
if (sec == 0) {
      
    clearInterval(myInterval);

}
}

function mostrarMensaje(sec) {
    console.log(sec);
    pararTemporizador();
    sec--;
}