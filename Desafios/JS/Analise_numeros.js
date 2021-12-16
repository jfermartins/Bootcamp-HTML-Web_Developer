numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);

positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);

console.log(pares.length + " par(es)");
console.log(impares.length + " impar(es)");

console.log(positivos.length + " positivo(s)");
console.log(negativos.length + " negativo(s)");