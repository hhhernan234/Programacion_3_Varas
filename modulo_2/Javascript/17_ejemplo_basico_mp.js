// Importación de la librería para entrada síncrona
const prompt = require("prompt-sync")();

console.log("=== SISTEMA VARAS: CALCULADORA DE INGRESOS ===");

// Captura de datos de nómina
const sueldoTexto = prompt("Ingrese el Sueldo Base: ");
const bonoTexto   = prompt("Ingrese el Bono de Eficiencia: ");

// Conversión explícita con respaldo (fallback) a 0
const sueldo = parseFloat(sueldoTexto) || 0;
const bono   = parseFloat(bonoTexto)   || 0;

// Lógica de cálculo usando operadores aritméticos
const totalIngresos = sueldo + bono;
const aporteIESS    = sueldo * 0.0945; // Tasa del 9.45%
const sueldoNeto    = totalIngresos - aporteIESS;

// Salida con formato profesional y Template Literals
console.log(`
--- RESUMEN DE PAGO ---
Sueldo Base:    $${sueldo.toFixed(2)}
Bono Aplicado:  $${bono.toFixed(2)}
-----------------------
Total Ingresos: $${totalIngresos.toFixed(2)}
Descuento IESS: $${aporteIESS.toFixed(2)}
-----------------------
Líquido a Recibir: $${sueldoNeto.toFixed(2)}
`);