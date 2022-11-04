
let numeroMinutos = + prompt("Dime cuantos minutos");

let numeroMinutosMilisegundos = numeroMinutos * 60000;

let numeroSegundos = + prompt("Dime cuantos segundos");

let numeroSegundosMilisegundos = numeroSegundos * 1000;

let totalMilisegundos = numeroMinutosMilisegundos + numeroSegundosMilisegundos;



function temporizador(segundos, minutos=0) {

    segundos = segundos + (minutos * 60);

    let intervalo = setInterval(() => {

        console.log(segundos);
        if (segundos == 0) {
            clearInterval(intervalo);
        }
        segundos--;
    }, 1000);

}

temporizador(numeroSegundos, numeroMinutos);