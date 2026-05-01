// Conversión explícita — Recomendada para cálculos contables exactos
const inputSueldo = "1400.50";
const sueldoNumerico = Number(inputSueldo);          // 1400.5
const horasEnteras   = parseInt("8.75", 10);         // 8 (Se descartan los decimales)
const tasaIESS       = parseFloat("0.0945");         // 0.0945
const idTexto        = String(1720000000);           // "1720000000"
const esValido       = Boolean(1);                   // true

// Conversión implícita (coerción) — ¡Cuidado con los cálculos de nómina!
console.log("Sueldo: " + 1400);   // "Sueldo: 1400" ← El + concatena si hay un string
console.log("1000" - "200");      // 800           ← El - fuerza conversión a número
console.log("10" * 5);            // 50            ← El * fuerza conversión a número
console.log(true + 459);          // 460           ← true se comporta como 1 (Sueldo Básico)

// Manejo de valores "falsy" en validaciones de personal
// Si el nombre es "" o el cargo es null, la condición será false
let nombreColaborador = ""; 
if (!nombreColaborador) {
    console.log("Error: Nombre de empleado no definido.");
}

// Control de errores con NaN (Not a Number)
const calculoErroneo = Number("mil dolares"); 
if (isNaN(calculoErroneo)) {
    console.log("Alerta: El valor ingresado no es un número válido para la nómina."); // NaN
}

// Verificación de nulidad en el Sistema Varas
console.log(Number(null));      // 0 (Un valor nulo en bonos se suma como cero)
console.log(Number(undefined)); // NaN (Un valor no definido rompe el cálculo)