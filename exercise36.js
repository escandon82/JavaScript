//Switch
function ordinal(valor) {
  var mensaje;
  switch (valor) {
    case 1:
      mensaje = "primero";
      break;
    case 2:
      mensaje = "segundo";
      break;
    case 3:
      mensaje = "tercero";
      break;
    default:
      mensaje = "no se sabe"
      break;
  }
  return mensaje;
}
console.log(ordinal(3));