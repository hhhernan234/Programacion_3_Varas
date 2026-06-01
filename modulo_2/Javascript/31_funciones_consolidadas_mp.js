const prompt = require("prompt-sync")();

// ✅ Función pura — mismo input, mismo output, sin efectos externos
const calcularDescuento = (salario, tasa = 0.0945) => salario * tasa;

console.log(calcularDescuento(1000));  // 94.5
console.log(calcularDescuento(1000));  // siempre 94.5

// ❌ Función con efecto secundario — modifica una variable externa
let totalNomina = 0;
function agregarSalario(salario) {
  totalNomina += salario;
  return totalNomina;
}

// El resultado depende del estado externo — difícil de predecir y probar
console.log(agregarSalario(800));   // 800
console.log(agregarSalario(800));   // 1600  ← mismo argumento, resultado diferente

// nomina.js
// Funciones puras para cada cálculo
const calcularIESS        = (salario) => salario * 0.0945;
const calcularImpuesto    = (salario) => salario > 1000 ? salario * 0.05 : 0;
const calcularBonificacion = (salario) => salario * 0.10;
const calcularNeto        = (salario) => {
  if (salario <= 0) return "Error: salario inválido";
  return salario - calcularIESS(salario) - calcularImpuesto(salario);
};

// Función que agrupa todos los conceptos
function procesarConcepto(salario, concepto) {
  const conceptos = {
    "iess":         calcularIESS,
    "impuesto":     calcularImpuesto,
    "bonificacion": calcularBonificacion,
    "neto":         calcularNeto
  };
  const fn = conceptos[concepto];
  if (!fn) return `Concepto "${concepto}" no reconocido`;
  return fn(salario);
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
console.log("=== Sistema de nómina ===");

const salario  = leerNumero("Ingresa el salario: ");
const concepto = prompt("Concepto (iess, impuesto, bonificacion, neto): ");
const resultado = procesarConcepto(salario, concepto);

console.log(`Salario: $${salario} | ${concepto}: $${resultado}`);