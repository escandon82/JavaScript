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
const libro = new Libro("anónimo");
console.log(libro.autor);
libro.autor = "Gabriel García";
console.log(libro.autor);