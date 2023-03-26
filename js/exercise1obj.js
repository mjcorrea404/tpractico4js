let auto = {
  color: "negro",
  marca: "Toyota",
  modelo: "yaris",
  encendido: false,

  
  encender: function () {
    this.encendido = true;
    console.log("El auto está encendido.");
  },

  
  apagar: function () {
    this.encendido = false;
    console.log("El auto está apagado.");
  },
};


console.log(auto.color); 
console.log(auto.encendido); 

auto.encender(); 
console.log(auto.encendido); 

auto.apagar(); 
console.log(auto.encendido); 
