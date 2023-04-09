class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`ISBN: ${this.ISBN}`);
      console.log(`Número de páginas: ${this.numPaginas}`);
    }
  }

  const miLibro = new Libro("25311989", "La Guerra contra las mujeres", "Rita Segato", 935);
  miLibro.mostrarLibro();

  const segundoLibro = new Libro("353637", "¿Es posible conocer la realidad?", "Rosa Nassif", 780);
  segundoLibro.mostrarLibro();

  if (miLibro.numPaginas > segundoLibro.numPaginas) {
    console.log("El libro 1 tiene más páginas que el libro 2.");
  } else if (miLibro.numPaginas < segundoLibro.numPaginas) {
    console.log("El libro 2 tiene más páginas que el libro 1.");
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  
