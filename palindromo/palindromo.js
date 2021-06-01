function palindrome(str) {
  // Uso match para filtrar texto eliminar _()/\||... como me va a devolver un arreglo lo joineo
  // hago un lower or un upper para evitar errores(l != L)...
  str = str.match(/[A-Za-z0-9]/gi).join("").toLowerCase();
  //recorro el string hasta encontrar un desigualdad...
  //Ej eye [0:e] !== [2:e]...
  for(var i = 0; i < Math.floor(str.length/2); i++){
    if(str.charAt(i) !== str.charAt(str.length-i-1))
      return false;
    }
      return true;
  }
// otra forma seria dar vuelta la palabra y preguntar si es igual
function palindrome2(str) {
  str = str.match(/[A-Za-z0-9]/gi).join("").toLowerCase();
  var polindromo = str.split('').reverse().join('');
  return polindromo === str;
}
