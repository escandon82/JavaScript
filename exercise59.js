//Get y Set
class Libro {
  constructor(autor) {
    this._autor = autor;
  }
  get autor() {
    return this._autor;
  }
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}
const libro = new Libro("an�nimo");
console.log(libro.autor);
libro.autor = "Gabriel Garc�a";
console.log(libro.autor);