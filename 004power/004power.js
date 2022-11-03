
let elevarNumero = + prompt("Dime el primer numero");

let numeroPotencia = + prompt("Dime el segundo numero");

function potencia(elevarNumero,numeroPotencia) {
    
    let resultado =Math.pow(elevarNumero,numeroPotencia);

    alert(resultado);
}

potencia();