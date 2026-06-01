/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Módulo: Operadores Ternarios y Plantillas de Texto
 * 
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DE NÓMINA ---
const SUELDO_MINIMO = 460;
const UMBRAL_BONO = 500;

console.log("=== SISTEMA VARAS: REPORTES RÁPIDOS (TERNARIOS) ===");

// 1. VALIDACIÓN DE ESTADO LABORAL
const diasLaborados = parseInt(prompt("Días laborados: ")) || 0;
// Uso del operador ternario para definir el estado
const estadoAsistencia = diasLaborados >= 20 ? "Completa" : "Incompleta";
console.log(`Estado de asistencia: ${estadoAsistencia}`);

// 2. TERNARIOS DENTRO DE TEMPLATE LITERALS (Muy útil para reportes)
const sueldoBase = parseFloat(prompt("Ingrese sueldo base: ")) || 0;
const horasExtra = parseInt(prompt("Horas extra realizadas: ")) || 0;

console.log(`\n--- RESUMEN DE PAGO ---`);
console.log(`Colaborador: Hernán Varas`);
console.log(`Sueldo Base: $${sueldoBase.toFixed(2)}`);
// Decisión rápida: si tiene horas extra, muestra "Sí", de lo contrario "No"
console.log(`Aplica Horas Extra: ${horasExtra > 0 ? "Sí ✅" : "No ❌"}`);

// 3. ASIGNACIÓN DE ALERTAS FINANCIERAS
// Determinamos si el sueldo cumple con el mínimo legal
const cumpleMinimo = sueldoBase >= SUELDO_MINIMO ? "CUMPLE" : "REVISAR";
const colorAlerta = sueldoBase >= SUELDO_MINIMO ? "VERDE" : "ROJO";

console.log(`[${colorAlerta}] Validación Legal: ${cumpleMinimo}`);

// 4. COMPARACIÓN: TERNARIO VS IF/ELSE IF
/**
 * Aunque el ternario es potente, para la lógica de escalafón salarial 
 * de la Nómina Varas, seguimos prefiriendo if/else if por claridad.
 */

let rangoSalarial;
// ❌ No anidar ternarios como este:
// const rango = sueldoBase > 1000 ? "Alto" : sueldoBase >= 500 ? "Medio" : "Bajo";

// ✅ Mejor usar la estructura clara que ya manejamos:
if (sueldoBase > 1000) {
    rangoSalarial = "Alto";
} else if (sueldoBase >= 500) {
    rangoSalarial = "Medio";
} else {
    rangoSalarial = "Bajo";
}

console.log(`Rango asignado: ${rangoSalarial}`);

// 5. CÁLCULO DE BONO DE TRANSPORTE
// Si el sueldo es bajo, se asigna bono automáticamente
const bonoTransporte = sueldoBase < UMBRAL_BONO ? 45.00 : 0.00;
console.log(`Bono transporte: $${bonoTransporte.toFixed(2)}`);

console.log("\n=== FIN DEL REPORTE TERNARIO ===");