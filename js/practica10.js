// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 
// 7 (sólo hay que comprobar si lo es por uno de los cuatro) 

let numero = parseInt(prompt("Introduce un número:")); 
if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    if (numero % 2 === 0) {
        document.writeln("El número " + numero + " es divisible por 2.");
    }
else if (numero % 3 === 0) {
        document.writeln("El número " + numero + " es divisible por 3.");
    }
    else if (numero % 5 === 0) {
        document.writeln("El número " + numero + " es divisible por 5.");
    }
    else if (numero % 7 === 0) {
        document.writeln("El número " + numero + " es divisible por 7.");
    } else {
        document.writeln("El número " + numero + " no es divisible por 2, 3, 5 ni 7.");
    }
}