// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. 

const primerNumero = parseInt(prompt("Introduce el primer número:"));
const segundoNumero = parseInt(prompt("Introduce el segundo número:"));
if (primerNumero > segundoNumero) {
    document.writeln("El primero numero es mayor")
} else {
    document.writeln("El segundo numero es mayor")
}