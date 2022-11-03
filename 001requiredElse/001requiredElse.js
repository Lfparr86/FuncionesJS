
let age = + prompt("Dime tu edad?");

function checkAge(age) {
    if (age > 18) {
      return true;
    }// else {
      // ...
      //return confirm('¿Tus padres te permitieron?');
    //}
  }

  checkAge();

  /*
  ¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en 
  el comportamiento de estas dos variantes?
  Si se borra el else no tenemos ninguna variación-
  No tenemos ninguna diferencia.
  */
