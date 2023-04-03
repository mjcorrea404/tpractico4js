let listaProductos = [
    {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
    },
    {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
    },
    {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
    ];

    dibujarTabla(listaProductos)

    function dibujarTabla(listaProductos) {
        // Obtener el elemento HTML donde se dibujará la tabla
        const contenedorTabla = document.getElementById('tabla');
      
        // Crear la tabla
        const tabla = document.createElement('table');
      
        // Crear la fila de encabezado
        const encabezado = document.createElement('tr');
      
        // Crear las celdas del encabezado
        const producto = document.createElement('th');
        producto.textContent = 'Producto';
      
        const categoria = document.createElement('th');
        categoria.textContent = 'Categoría';
      
        const precio = document.createElement('th');
        precio.textContent = 'Precio';
      
        // Agregar las celdas del encabezado a la fila de encabezado
        encabezado.appendChild(producto);
        encabezado.appendChild(categoria);
        encabezado.appendChild(precio);
      
        // Agregar la fila de encabezado a la tabla
        tabla.appendChild(encabezado);
      
        // Recorrer los datos para crear las filas de la tabla
        datos.forEach(dato => {
          // Crear la fila
          const fila = document.createElement('tr');
      
          // Crear las celdas de la fila
          const celdaProducto = document.createElement('td');
          celdaProducto.textContent = dato.producto;
      
          const celdaCategoria = document.createElement('td');
          celdaCategoria.textContent = dato.categoria;
      
          const celdaPrecio = document.createElement('td');
          celdaPrecio.textContent = dato.precio;
      
          // Agregar las celdas a la fila
          fila.appendChild(celdaProducto);
          fila.appendChild(celdaCategoria);
          fila.appendChild(celdaPrecio);
      
          // Agregar la fila a la tabla
          tabla.appendChild(fila);
        });
      
        // Agregar la tabla al contenedor
        contenedorTabla.appendChild(tabla);
      }
      