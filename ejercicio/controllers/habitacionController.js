const Habitacion = require('../models/Habitacion');

function crearHabitaciones() {
    return [
        new Habitacion(101, 2, 50),
        new Habitacion(102, 4, 100),
        new Habitacion(103, 3, 75),
        new Habitacion(104, 1, 40),
        new Habitacion(105, 2, 60),
    ];
}

function mostrarHabitacionesDisponibles(habitaciones) {
    habitaciones.forEach((habitacion) => {
        if (habitacion.verificarDisponibilidad) {
            console.log(`Habitación ${habitacion.numero} - Capacidad: ${habitacion.capacidad} personas - Precio: $${habitacion.precio}`);
        }
    });
}

function actualizarEstadoYPrecio(habitacion, nuevoPrecio) {
    habitacion.cambiarDisponibilidad();
    habitacion.modificarPrecio = nuevoPrecio;
    console.log(`Estado actualizado: Disponible - ${habitacion.verificarDisponibilidad}, Precio: $${habitacion.precio}`);
}

module.exports = { crearHabitaciones, mostrarHabitacionesDisponibles, actualizarEstadoYPrecio };

