//Condicion IF ELSEIF
function clasificar(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2");
} else if (valor % 3 == 0) {
    console.log("Divisible entre 3");
} else {
    console.log("No es divisible entre las opciones");
  } 
}

clasificar(5);