//Retorno anticipado
function raizCuadrada(valor){
  if (valor < 0){
    return undefined;
  }
  return Math.sqrt(valor);
}
console.log(raizCuadrada(-25));