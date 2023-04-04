class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    mostrarPropiedades() {
      console.log(`Alto: ${this.alto}`);
      console.log(`Ancho: ${this.ancho}`);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }

const rectangulo1 = new Rectangulo(5, 10);


rectangulo1.mostrarPropiedades(); 

rectangulo1.modificarAlto(7);


const perimetro = rectangulo1.calcularPerimetro();
console.log(`Perímetro: ${perimetro}`); 

const area = rectangulo1.calcularArea();
console.log(`Área: ${area}`); 
  