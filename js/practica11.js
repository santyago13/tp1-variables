//todo
// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
// (sólo hay que comprobar si lo es por uno de los cuatro).

//Añadir al ejercicio anterior que el programa también nos diga por cuál o cuáles
//  de los cuatro números es divisible (es decir, debe mostrar todos los divisores
//  correspondientes si hay más de uno).

const numero = parseInt(prompt("Introduce un número:"));
if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
}

document.writeln("El numero " + numero + " es divisible por: ");

if (numero % 2 === 0) {
    document.writeln(" 2")
}

if (numero % 3 === 0) {
    document.writeln(" 3")
}

if (numero % 5 === 0) {
    document.writeln(" 5")
}

if (numero % 7 === 0) {
    document.writeln(" 7")
}
