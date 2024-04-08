//Operador Spread (descompone un arreglo)
const numeros = [1, 2, 3];
function sumare(x, y, z) {
return x + y + z;
}
console.log(sumare(...numeros));