// Definir objeto calculadora
const calculadora = {
    // Propiedades
    valorA: 0,
    valorB: 0,
    
    // Métodos
    sumar: function() {
      return this.valorA + this.valorB;
    },
    restar: function() {
      return this.valorA - this.valorB;
    },
    multiplicar: function() {
      return this.valorA * this.valorB;
    },
    dividir: function() {
      if (this.valorB === 0) {
        return "Error: División por cero";
      }
      return this.valorA / this.valorB;
    }
  };
  
  // Ejemplos de uso
  calculadora.valorA = 5;
  calculadora.valorB = 3;
  console.log(calculadora.sumar()); // 8
  console.log(calculadora.restar()); // 2
  console.log(calculadora.multiplicar()); // 15
  console.log(calculadora.dividir()); // 1.6666666666666667
  
  calculadora.valorA = 10;
  calculadora.valorB = 2;
  console.log(calculadora.sumar()); // 12
  console.log(calculadora.restar()); // 8
  console.log(calculadora.multiplicar()); // 20
  console.log(calculadora.dividir()); // 5
  