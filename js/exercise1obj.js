const auto = {
  color: "Negro",
  marca: "Toyota",
  modelo: "Yaris",
  encendido: false,

  encender: function () {
    if ((this.encendido = alert("Quiere encender el auto?"))) {
      this.encendido = true;
      console.log("El auto está encendido.");
    } else {
      console.log("El auto ya está encendido.");
    }
  },

  apagar: function () {
    if ((this.encendido = alert("Quiere apagar el auto?"))) {
      this.encendido = false;
      console.log("El auto está apagado.");
    } else {
      console.log("El auto ya está apagado.");
    }
  },
};

auto.encender();
document.write("Auto encendido");
auto.apagar();
document.write("Auto Apagado");
