/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Módulo: Control de Flujo con Switch
 * 
 * Este archivo utiliza la estructura 'switch' para gestionar estados de pago,
 * tipos de contrato y horarios administrativos de forma eficiente.
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DE NÓMINA ---
const SUELDO_BASE_EJEMPLO = 500;

console.log("=== SISTEMA VARAS: GESTIÓN POR CATEGORÍAS (SWITCH) ===");

// 1. ESTADO DEL PROCESAMIENTO DE PAGO
const estadoNomina = "procesando"; // "pendiente", "procesando", "pagado", "fallido"

switch (estadoNomina) {
    case "pendiente":
        console.log("📋 Nómina registrada. En espera de revisión de horas extra.");
        break;
    case "procesando":
        console.log("⚙️ Calculando aportes al IESS y retenciones de ley...");
        break;
    case "pagado":
        console.log("✅ Fondos transferidos. Comprobante enviado al colaborador.");
        break;
    case "fallido":
        console.log("❌ Error en la transferencia. Verifique la cuenta bancaria.");
        break;
    default:
        console.log(`⚠️ Estado "${estadoNomina}" no reconocido en el flujo de Varas.`);
}

// 2. GESTIÓN DE JORNADA LABORAL (Agrupación de Casos)
const diaSemana = parseInt(prompt("Ingrese número de día (1-7): ")) || 1;

switch (diaSemana) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Jornada Ordinaria — Horario: 08:00 a 17:00 (8 horas)");
        break;
    case 6:
        console.log("Jornada Extraordinaria — Sábado: Recargo del 50%");
        break;
    case 7:
        console.log("Día de Descanso Obligatorio — Domingo: Recargo del 100%");
        break;
    default:
        console.log("Día no válido. Ingrese un valor entre 1 (Lunes) y 7 (Domingo).");
}

// 3. TIPO DE CONTRATO Y BENEFICIOS (Lógica de Negocio)
const tipoContrato = "indefinido"; // "pasantia", "temporal", "indefinido"
let bonoAntiguedad;
let detalleContrato;

switch (tipoContrato) {
    case "pasantia":
        bonoAntiguedad = 0;
        detalleContrato = "Convenio de formación - Sin bono de antigüedad";
        break;
    case "temporal":
        bonoAntiguedad = 25.00;
        detalleContrato = "Contrato por obra - Bono fijo de $25.00";
        break;
    case "indefinido":
        bonoAntiguedad = 50.00;
        detalleContrato = "Contrato estable - Bono de estabilidad de $50.00";
        break;
    default:
        bonoAntiguedad = 0;
        detalleContrato = "Contrato general - Sin bonos específicos";
}

const totalAPagar = SUELDO_BASE_EJEMPLO + bonoAntiguedad;

console.log(`\nDetalle Contractual: ${tipoContrato.toUpperCase()}`);
console.log(`Descripción: ${detalleContrato}`);
console.log(`Total con beneficios: $${totalAPagar.toFixed(2)}`);

console.log("\n=== CIERRE DE MÓDULO SWITCH - VARAS ===");