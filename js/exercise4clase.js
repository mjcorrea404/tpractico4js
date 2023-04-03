class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
  }

  const productos = [
    new Producto("P001", "Producto 1", 300),
    new Producto("P002", "Producto 2", 500),
    new Producto("P003", "Producto 3", 1000)
  ];
  for (let producto of productos) {
    producto.imprimeDatos();
  }
    