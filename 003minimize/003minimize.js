

let comprobarNumeroA = + prompt("Dime el primer numero");

let comprobarNumeroB = + prompt("Dime el segundo numero");

function comprobarNumeros(comprobarNumeroA,comprobarNumeroB) {

    if (comprobarNumeroA < comprobarNumeroB) {
        alert ("El primer numero introducido:"+comprobarNumeroA+"es menor que el segundo numero introducido "+comprobarNumeroB);
    }else{
        alert ("El primer numero introducido:"+comprobarNumeroA+"es mayor que el segundo numero introducido "+comprobarNumeroB);
        
        
    }
    
}
comprobarNumeros(comprobarNumeroA,comprobarNumeroB);