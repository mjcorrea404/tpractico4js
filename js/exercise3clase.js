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
// Crear un objeto "rectángulo" con alto de 5 y ancho de 10
const rectangulo1 = new Rectangulo(5, 10);

// Mostrar las propiedades del rectángulo
rectangulo1.mostrarPropiedades(); // Output: Alto: 5, Ancho: 10

// Modificar el alto del rectángulo a 7
rectangulo1.modificarAlto(7);

// Calcular y mostrar el perímetro del rectángulo
const perimetro = rectangulo1.calcularPerimetro();
console.log(`Perímetro: ${perimetro}`); // Output: Perímetro: 34

// Calcular y mostrar el área del rectángulo
const area = rectangulo1.calcularArea();
console.log(`Área: ${area}`); // Output: Área: 70
  