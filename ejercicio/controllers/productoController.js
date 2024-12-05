const Producto = require("../models/Producto");


// Función para crear productos
function crearProductos() {
    return [
        new Producto(1, 'Laptop', 1500, 10),
        new Producto(2, 'Smartphone', 800, 20),
        new Producto(3, 'Tablet', 600, 15),
    ];
}

// Función para mostrar productos
function mostrarProductos(productos) {
    productos.forEach((producto) => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.obtenerPrecio}, Stock: ${producto.obtenerStock}`);
    });
}

// Función para simular la venta de un producto
function venderProducto(producto, cantidad) {
    if (producto.obtenerStock >= cantidad) {
        producto.actualizarStock = producto.obtenerStock - cantidad;
        console.log(`Venta realizada. Stock restante de ${producto.nombre}: ${producto.obtenerStock}`);
    } else {
        console.log('Stock insuficiente.');
    }
}

module.exports = { crearProductos, mostrarProductos, venderProducto };
