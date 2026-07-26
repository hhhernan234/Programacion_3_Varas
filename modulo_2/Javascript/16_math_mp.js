// Valores de ejemplo para el sistema
const aporteIESS = 113.4145;
const bonosVarios = [150, 45, 200, 10];

// Redondeo contable y gestión de sueldos
console.log(Math.round(aporteIESS));    // 113 — Redondeo estándar para reportes rápidos
console.log(Math.floor(aporteIESS));    // 113 — Útil para cálculos de cuotas mínimas
console.log(Math.ceil(aporteIESS));     // 114 — Redondeo al inmediato superior (útil en provisiones)
console.log(Math.trunc(aporteIESS));    // 113 — Extrae la parte entera para separar dólares de centavos

// Valores absolutos y extremos en la nómina
console.log(Math.abs(-50.25));          // 50.25 — Convierte ajustes negativos en valores positivos para reportes
console.log(Math.max(...bonosVarios));  // 200 — Identifica el bono más alto del mes
console.log(Math.min(...bonosVarios));  // 10 — Identifica el bono más bajo otorgado

// Potencias y Raíces (Cálculos actuariales o estadísticos)
console.log(Math.pow(1.05, 12));        // Proyección de costos operativos (equivalente a 1.05 ** 12)
console.log(Math.sqrt(144));            // 12 — Raíz cuadrada (ej. para cálculos de varianza en sueldos)

// Generación de Tokens de Seguridad para el Sistema Varas
// Función adaptada para generar un PIN temporal de acceso para empleados
function generarPinAcceso(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`PIN temporal generado: ${generarPinAcceso(1000, 9999)}`);