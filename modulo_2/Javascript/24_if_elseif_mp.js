/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Módulo: Lógica de Clasificación y Escalamiento (if - else if - else)
 * 
 * Este archivo utiliza estructuras condicionales para categorizar sueldos
 * y asignar beneficios basados en el rendimiento y antigüedad.
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DE PARÁMETROS ---
const SUELDO_MINIMO = 460; // Sueldo básico unificado en Ecuador
const UMBRAL_EXCELENCIA = 90;
const UMBRAL_ESTANDAR = 70;

console.log("=== SISTEMA VARAS: CLASIFICACIÓN DE NÓMINA ===");

// 1. CAPTURA DE DATOS
const nombreColaborador = prompt("Nombre del colaborador: ") || "Sin Nombre";
const sueldoBase = parseFloat(prompt("Ingrese el sueldo base: ")) || 0;

// 2. ESTRUCTURA IF - ELSE IF - ELSE (Categorización Salarial)
/**
 * Esta estructura evalúa de forma jerárquica el rango salarial.
 * Una vez que se cumple una condición, el resto no se ejecuta.
 */
let categoriaSalarial;

if (sueldoBase < SUELDO_MINIMO) {
    categoriaSalarial = "Rango A: Alerta (Sueldo menor al básico)";
} else if (sueldoBase <= 800) {
    categoriaSalarial = "Rango B: Nivel Operativo";
} else if (sueldoBase <= 1500) {
    categoriaSalarial = "Rango C: Nivel Administrativo/Técnico";
} else if (sueldoBase <= 3000) {
    categoriaSalarial = "Rango D: Nivel Ejecutivo";
} else {
    categoriaSalarial = "Rango E: Alta Gerencia";
}

// 3. EVALUACIÓN DE DESEMPEÑO PARA BONOS
const puntajeEvaluacion = parseInt(prompt("Puntaje de evaluación (0-100): ")) || 0;
let bonoDesempeño = 0;
let mensajeBono = "";

if (puntajeEvaluacion >= UMBRAL_EXCELENCIA) {
    bonoDesempeño = 100.00;
    mensajeBono = "Bono de Excelencia otorgado ✅";
} else if (puntajeEvaluacion >= UMBRAL_ESTANDAR) {
    bonoDesempeño = 40.00;
    mensajeBono = "Bono de Productividad otorgado 📈";
} else {
    bonoDesempeño = 0;
    mensajeBono = "Sin bonificaciones por desempeño ❌";
}

// 4. REPORTE FINAL CONSOLIDADO
const reporte = [
    { Detalle: "Colaborador", Valor: nombreColaborador },
    { Detalle: "Clasificación", Valor: categoriaSalarial },
    { Detalle: "Sueldo Base", Valor: `$${sueldoBase.toFixed(2)}` },
    { Detalle: "Bono Aplicado", Valor: `$${bonoDesempeño.toFixed(2)}` },
    { Detalle: "Estado de Bono", Valor: mensajeBono }
];

console.log(`\n--- RESULTADO DE CLASIFICACIÓN: NÓMINA VARAS ---`);
console.table(reporte);

// 5. CUMPLIMIENTO LEGAL (Validación de Seguridad)
const diasLaborados = parseInt(prompt("Días laborados en el mes: ")) || 0;

if (diasLaborados > 30) {
    console.warn("⚠️ ALERTA: Los días laborados exceden el mes comercial.");
} else if (diasLaborados === 30) {
    console.log("✅ Mes completo procesado.");
} else {
    console.log(`ℹ️ Proporcional calculado para ${diasLaborados} días.`);
}

console.log("\n=== FIN DEL PROCESO DE CATEGORIZACIÓN ===");