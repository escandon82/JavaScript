//Método
const personal = {
  nombre: "Isabel",
  presentarse(){
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};
console.log(personal.presentarse());