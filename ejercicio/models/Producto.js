class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    calcularDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje) / 100;
    }

    get obtenerPrecio() {
        return this.precio;
    }

    get obtenerStock() {
        return this.stock;
    }

    set actualizarStock(cantidad) {
        if (cantidad >= 0) {
            this.stock = cantidad;
        } else {
            console.error('El stock no puede ser negativo.');
        }
    }
}

module.exports = Producto;
