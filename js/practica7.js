// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de 
// los tres. 

const primerNumero = parseInt(prompt("Introduce el primer número:"));
const segundoNumero = parseInt(prompt("Introduce el segundo número:"));
const tercerNumero = parseInt(prompt("Introduce el tercer número:"));

if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
    document.writeln("El primer número es el mayor: " + primerNumero);
} else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
    document.writeln("El segundo número es el mayor: " + segundoNumero);
} else {
    document.writeln("El tercer número es el mayor: " + tercerNumero);
}