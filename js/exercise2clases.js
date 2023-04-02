let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
      this.saldo += cantidad;
    },
    extraer: function(cantidad) {
      if (this.saldo >= cantidad) {
        this.saldo -= cantidad;
      } else {
        console.log("No hay suficiente saldo en la cuenta.");
      }
    },
    informar: function() {
      return "Titular: " + this.titular + "\nSaldo: " + this.saldo;
    }
  };
  
  // Ejemplo de uso:
  console.log(cuenta.informar()); // Titular: Alex, Saldo: 0
  cuenta.ingresar(100);
  console.log(cuenta.informar()); // Titular: Alex, Saldo: 100
  cuenta.extraer(50);
  console.log(cuenta.informar()); // Titular: Alex, Saldo: 50
  cuenta.extraer(100); // No hay suficiente saldo en la cuenta.
  