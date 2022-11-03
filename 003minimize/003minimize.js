

let comprobarNumeroA = + prompt("Dime el primer numero");

let comprobarNumeroB = + prompt("Dime el segundo numero");

function comprobarNumeros(comprobarNumeroA,comprobarNumeroB) {

    if (comprobarNumeroA < comprobarNumeroB) {
        alert ("El numero:"+comprobarNumeroA+"es menor que "+comprobarNumeroB);
    }else{
        alert ("El numero:"+comprobarNumeroB+"es menor que "+comprobarNumeroA);
    }
    
}
comprobarNumeros();