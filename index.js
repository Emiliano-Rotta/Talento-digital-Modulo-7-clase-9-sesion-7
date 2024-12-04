// ¿Qué es ORM?

// ORM (Object-Relational Mapping) es una técnica de programación que permite interactuar con bases de datos relacionales utilizando objetos en lugar de escribir consultas SQL manuales. ORM abstrae las operaciones de bases de datos mediante un modelo de datos orientado a objetos.

//¿Qué es una clase?
// Una clase es una plantilla o molde que define las propiedades (atributos) y comportamientos (métodos) que los objetos creados a partir de ella tendrán.
// En programación orientada a objetos (POO), las clases permiten organizar y reutilizar el código, haciendo más sencillo modelar problemas del mundo real.



// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }
//     // metodoEjemplo(){

//     // }
// }

// const personaUno = new Persona('Carlos', 20)
// const personaDos = new Persona('Bernarda', 25)
// const personaTres = new Persona('Erick', 28)
// const personaCuatro = new Persona('Lorena', 30)

// console.log(personaUno)
// console.log(personaDos)
// console.log(personaTres)
// console.log(personaCuatro)

//------------------------------
// Qué son get y set
// get:
// Es un método accesor, utilizado para obtener el valor de una propiedad.
// Se define con la palabra clave get y se llama como si fuera una propiedad (sin paréntesis).
// Útil cuando queremos realizar operaciones antes de devolver un valor, o simplemente exponerlo de manera controlada.
// set:
// Es un método mutador, utilizado para modificar el valor de una propiedad.
// Se define con la palabra clave set y también se usa como si fuera una propiedad (sin paréntesis).
// Útil para validar o procesar los datos antes de asignarlos a la propiedad correspondiente.

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre
//         this.precio = precio
//     }
//     //metodo get:
//     get obtenerPrecioConImpuesto(){
//         const impuesto = 0.19; 
//         let resultado = this.precio *(1 + impuesto)
//         return resultado
//     }
//     //metodo set:
//     set modificarPrecio(nuevoPrecio){
//         if(nuevoPrecio > 0){
//             this.precio = nuevoPrecio
//         } else{
//             console.error('El precio debe ser positivo')
//         }
        
//     }
// }

// const productoUno = new Producto('Computadora', 1500)
// console.log(productoUno.obtenerPrecioConImpuesto)
// productoUno.precio = 200
// console.log(productoUno.obtenerPrecioConImpuesto)

//------------------------------------------------------------
// Métodos Personalizados

// class Rectangulo{
//     constructor(ancho, alto){
//         this.ancho = ancho;
//         this.alto = alto;
//     }
//     calcularArea(){
//         const resultado = this.ancho * this.alto
//         return resultado
//     }
// }

// const rectanguloUno = new Rectangulo(10,1)
// const rectanguloDos = new Rectangulo(10,2)
// const rectanguloTres = new Rectangulo(10,3)
// const rectanguloCuatro = new Rectangulo(10,4)

// console.log(rectanguloUno.calcularArea())//10
// console.log(rectanguloDos.calcularArea())//20
// console.log(rectanguloTres.calcularArea())//30
// console.log(rectanguloCuatro.calcularArea())//40

//-----------------------------------------------
// class Auto {
//     constructor(marca, modelo, velocidad) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.velocidad = velocidad
//     }
//     get obtenerVelocidad(){
//         return this.velocidad
//     }
//     set modificarVelocidad(nuevaVelocidad){
//         if (nuevaVelocidad <= 130){
//             this.velocidad = nuevaVelocidad;
//         } else {
//             console.error('Limite de velocidad superada')
//         }        
//     }
// }

// const autoUno = new Auto('Toyota', 'Corolla', 60);
// const autoDos = new Auto('Renault', 'Clio', 60);


// console.log('Corolla ' + autoUno.obtenerVelocidad)
// console.log('Clio ' + autoDos.obtenerVelocidad)

// autoUno.modificarVelocidad = 150
// autoDos.modificarVelocidad = 110

// console.log('Corolla ' + autoUno.obtenerVelocidad)
// console.log('Clio ' + autoDos.obtenerVelocidad)


//------------------------------------------
// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }
//     saludar(){
//         console.log(`Hola ${this.nombre} felices ${this.edad} años.`)
//     }
// }

// const persona = new Persona('Rodolfo', 25);
// persona.saludar()

//----------------------------------------

// class Triangulo {
//     constructor(base, altura) {
//         this.base = base;
//         this.altura = altura;
//     }

//     calcularArea() {
//         return (this.base * this.altura) / 2;
//     }
// }
// const triangulo = new Triangulo(10, 5);
// console.log(triangulo.calcularArea()); // 25


//--------------------------------------------------

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
