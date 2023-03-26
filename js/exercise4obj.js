const calculadora = {
    valorA: 0,
    valorB: 0,
    
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
  
  
  calculadora.valorA = 5;
  calculadora.valorB = 3;
  console.log(calculadora.sumar()); 
  console.log(calculadora.restar()); 
  console.log(calculadora.multiplicar()); 
  console.log(calculadora.dividir()); 
  
  calculadora.valorA = 10;
  calculadora.valorB = 2;
  console.log(calculadora.sumar()); 
  console.log(calculadora.restar()); 
  console.log(calculadora.multiplicar()); 
  console.log(calculadora.dividir()); 
  