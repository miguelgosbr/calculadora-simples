"use strict";
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
let num1 = 10;
let num2 = 5;
let resultadoSoma = somar(num1, num2);
let resultadoSubtrair = subtrair(num1, num2);
let resultadoMultiplicar = multiplicar(num1, num2);
let resultadoDividir = dividir(num1, num2);
console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtrair);
console.log("Multiplicação:", resultadoMultiplicar);
console.log("Divisão:", resultadoDividir);
