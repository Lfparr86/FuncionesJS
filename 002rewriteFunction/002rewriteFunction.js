/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}
Reescríbela para realizar lo mismo, pero sin if, en una sola línea.
Haz dos variantes de checkAge:
- Usando un operador de signo de interrogación ?
- Usando OR ||
*/

let age = + prompt("Dime tu edad?");

let checkAge =(age >18) ? true :"¿Tienes permiso de tus padres?";//Usamos el ternario

//let checkAge = queda el or preguntar

alert(checkAge);