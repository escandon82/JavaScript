//Constante (debe declararse en mayúscula)
function calcularArea(radio) {
  const VALOR_PI = 3.14;
  if (radio < 0){
    return undefined;
  }
  return VALOR_PI * (radio ** 2);
}
console.log(calcularArea(10));