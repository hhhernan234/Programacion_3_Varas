/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Módulo de Decisiones y Autenticación de Colaboradores
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DE SEGURIDAD Y NEGOCIO ---
const CONTRASENA_CORRECTA = "Segura123";
const PIN_SISTEMA = "1234";
const MAX_INTENTOS = 3;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4;
const UMBRAL_DESCUENTO_COMPRAS = 10;

console.log("=== SISTEMA VARAS: MÓDULO DE VALIDACIÓN ===");

// 1. GESTIÓN DE TURNOS POR HORARIO
const horaEntrada = prompt("Ingrese la hora (0-23): ");
const hora = parseInt(horaEntrada, 10);

// Validación de número y lógica de turnos
if (isNaN(hora) || hora < 0 || hora > 23) {
    console.log("Error: Formato de hora no válido.");
} else if (hora < 12) {
    console.log("Buenos días. Turno de mañana activo.");
} else {
    console.log("Buenas tardes/noches. Turno vespertino activo.");
}

// 2. AUTENTICACIÓN DE SEGURIDAD (Igualdad Estricta)
// CORRECCIÓN: El operador '=' es asignación, '===' es comparación.
const t_contrasena = prompt("Ingrese la contraseña del sistema: ");

if (t_contrasena === PIN_SISTEMA) {
    console.log("Acceso permitido al Sistema Varas.");
} else {
    console.log("Acceso denegado: Credenciales incorrectas.");
}

// 3. ANÁLISIS DE CRÉDITO PARA EMPLEADOS
const ingresoMensual = 800;
const deudaActual = 200;
const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
    console.log("Crédito aprobado para el colaborador.");
    console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
    console.log("Crédito denegado por políticas internas.");
    console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (Límite: 40%)`);
}

// 4. CONTROL DE FIDELIDAD Y COMPRAS
const total_compras_txt = prompt("Cantidad de compras realizadas: ");
const compras = parseInt(total_compras_txt, 10) || 0;

if (compras >= UMBRAL_DESCUENTO_COMPRAS) {
    console.log("Beneficio: Descuento de fidelidad aplicado.");
} else {
    // Uso de falsy/truthy para verificar si hay compras registradas
    !compras ? console.log("Sin registro de compras.") : console.log("Sin descuento (No alcanza el mínimo).");
}

// 5. VALIDACIÓN DE IDENTIDAD (Password Secundario)
const passIngresada = prompt("Valide su contraseña segura: ");
let intentosFallidos = 0;

if (passIngresada === CONTRASENA_CORRECTA) {
    console.log("Autenticación exitosa. Bienvenido, Hernán Varas.");
} else {
    intentosFallidos++;
    const intentosRestantes = MAX_INTENTOS - intentosFallidos;
    console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`);
}

console.log("\nProceso de validación finalizado.");