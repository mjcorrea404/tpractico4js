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
  
  
  console.log(cuenta.informar()); 
  document.write("Alex, Saldo: 35000")
  cuenta.ingresar(100);
  alert("Saldo Disponible")
  console.log(cuenta.informar()); 
  cuenta.extraer(50);
  console.log(cuenta.informar()); 
  alert("Extraer")
  cuenta.extraer(100); // 
  document.write("No hay suficiente saldo en la cuenta")
  