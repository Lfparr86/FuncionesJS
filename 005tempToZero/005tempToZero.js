
let numeroMinutos = + prompt("Dime cuantos minutos");

let numeroMinutosMilisegundos = numeroMinutos * 60000;

let numeroSegundos = + prompt("Dime cuantos segundos");

let numeroSegundosMilisegundos = numeroSegundos *1000;

let totalMilisegundos = numeroMinutosMilisegundos + numeroSegundosMilisegundos;

function temporizador() {

setInterval(contador, totalMilisegundos);
    
}

function contador() {
    console.log("ha pasado un segundo")
}