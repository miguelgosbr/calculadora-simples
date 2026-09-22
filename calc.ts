function somar(a: number, b: number): number {
    return a + b;
}

function subtrair(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    return a / b;
}

let num1: number = 10;
let num2: number = 5;

let resultadoSoma: number = somar(num1, num2);
let resultadoSubtrair: number = subtrair(num1, num2);
let resultadoMultiplicar: number = multiplicar(num1, num2);
let resultadoDividir: number = dividir(num1, num2);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtrair);
console.log("Multiplicação:", resultadoMultiplicar);
console.log("Divisão:", resultadoDividir);