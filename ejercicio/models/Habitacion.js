class Habitacion {
    constructor(numero, capacidad, precio, disponible = true) {
        this.numero = numero;
        this.capacidad = capacidad;
        this.precio = precio;
        this.disponible = disponible;
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
    }

    get verificarDisponibilidad() {
        return this.disponible;
    }

    set modificarPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
        } else {
            console.error('El precio debe ser positivo.');
        }
    }
}

module.exports = Habitacion;
