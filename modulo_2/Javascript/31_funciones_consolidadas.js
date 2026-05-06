const prompt = require("prompt-sync")();

// ✅ Función pura — mismo input, mismo output, sin efectos externos
const calcularIVA = (precio, tasa = 0.21) => precio * tasa;

console.log(calcularIVA(100));   // 21
console.log(calcularIVA(100));   // siempre 21

// ❌ Función con efecto secundario — modifica una variable externa
let total = 0;
function agregarAlTotal(valor) {
  total += valor;   // modifica una variable fuera de la función
  return total;
}

// El resultado depende del estado externo — difícil de predecir y probar
console.log(agregarAlTotal(10));  // 10
console.log(agregarAlTotal(10));  // 20  ← mismo argumento, resultado diferente

// calculadora.js
const prompt = require("prompt-sync")();

// Funciones puras para cada operación
const sumar       = (a, b) => a + b;
const restar      = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir     = (a, b) => {
  if (b === 0) return "Error: división por cero";
  return a / b;
};

// Función que agrupa todas las operaciones
function calcular(a, b, operacion) {
  const operaciones = { "+": sumar, "-": restar, "*": multiplicar, "/": dividir };
  const fn = operaciones[operacion];
  if (!fn) return `Operación "${operacion}" no reconocida`;
  return fn(a, b);
}

// Función para leer un número válido
function leerNumero(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

// Programa principal
console.log("=== Calculadora con funciones ===");

const a         = leerNumero("Primer número: ");
const b         = leerNumero("Segundo número: ");
const operacion = prompt("Operación (+, -, *, /): ");
const resultado = calcular(a, b, operacion);

console.log(`${a} ${operacion} ${b} = ${resultado}`);