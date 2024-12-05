// Consigna del ejercicio 1
// Título: Gestión de Productos con Clases en Node.js

// Crea una estructura de proyecto que contenga las carpetas:
// controllers/: Para la lógica de las clases.
// models/: Para los modelos o clases principales.
// utils/: Para utilidades como funciones auxiliares.
// index.js: Archivo principal para ejecutar el programa.

// Implementa una clase Producto con los siguientes atributos en el constructor:
// id (número).
// nombre (texto).
// precio (número).
// stock (número).

// La clase debe incluir:
// Un método personalizado que calcule un descuento basado en un porcentaje.

// Accesadores(get) para obtener el precio con descuento y el stock disponible.
// Mutadores(set) para actualizar el stock después de una venta.

// Desde el archivo principal, instancia al menos 3 productos y realiza las siguientes acciones:
// Muestra el detalle completo de los productos.
// Aplica un descuento a uno de los productos y muestra el nuevo precio.
// Simula la venta de un producto y actualiza su stock.





// const { crearProductos, mostrarProductos, venderProducto } = require('./controllers/productoController');
// const { aplicarDescuento } = require('./utils/utils');

// const productos = crearProductos();

// console.log('Productos iniciales:');
// mostrarProductos(productos);

// // Aplicar descuento al producto 1
// const descuento = aplicarDescuento(productos[0], 10);
// console.log(`Nuevo precio con descuento para ${productos[0].nombre}: $${descuento}`);

// // Vender 2 unidades del producto 2
// venderProducto(productos[1], 2);




//------------------------------------------------------------
// Consigna del ejercicio 2

// Título: Sistema de Reservas de Habitaciones
// Implementa la misma estructura modular descrita anteriormente.

// Crea una clase Habitacion con los siguientes atributos en su constructor:
// numero (número).
// capacidad (número).
// precio (número).
// disponible (booleano).

// La clase debe incluir:
// Un método personalizado que permita cambiar el estado de disponibilidad.
// Un accesador (get) para verificar la disponibilidad actual.
// Un mutador(set) para modificar el precio.

// Desde el archivo principal:
// Instancia al menos 5 habitaciones con distintos atributos.
// Muestra todas las habitaciones disponibles.
// Cambia el estado de disponibilidad de una habitación y actualiza su precio.
// Muestra el detalle de las habitaciones tras los cambios.

const { crearHabitaciones, mostrarHabitacionesDisponibles, actualizarEstadoYPrecio } = require('./controllers/habitacionController');

const habitaciones = crearHabitaciones();

console.log('Habitaciones disponibles:');
mostrarHabitacionesDisponibles(habitaciones);

// Actualizar la habitación 101
actualizarEstadoYPrecio(habitaciones[0], 55);



