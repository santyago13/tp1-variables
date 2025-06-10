// Escribe un programa que pida un número y diga si es divisible por 2 

const numero = parseInt(prompt("Introduce un número:"));
if (numero % 2 === 0 ) {
    document.writeln("El numero " + numero + " es divisible por 2 "); 
} else {
    document.writeln("El numero " + numero + " no es divisible por 2 ")
}