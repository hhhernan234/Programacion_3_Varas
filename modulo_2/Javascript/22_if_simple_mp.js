/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Lógica de Decisiones y Control de Acceso
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DE NEGOCIO ---
const SUELDO_MINIMO = 460;
const UMBRAL_FALTAS = 70;
const LIMITE_VELOCIDAD = 90;
const PORCENTAJE_DESCUENTO = 0.10;

console.log("=== SISTEMA VARAS: MÓDULO DE CONTROL ===");

// 1. GESTIÓN DE COMPRAS Y DESCUENTOS (Lógica Truthy/Falsy)
const entradaCompra = prompt("Monto de compra: ");
const totalCompra = parseFloat(entradaCompra) || 0;

// Cortocircuito para aplicar lógica de descuento
const aplicaDescuento = totalCompra > 100;
aplicaDescuento && console.log(`Aplica descuento del ${PORCENTAJE_DESCUENTO * 100}%`);

let totalFinal = totalCompra;
if (aplicaDescuento) {
    const descuento = totalCompra * PORCENTAJE_DESCUENTO;
    totalFinal -= descuento;
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}
console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);


// 2. CONTROL DE VELOCIDAD (Seguridad de Activos)
const velocidadVehiculo = parseFloat(prompt("Velocidad del vehículo: ")) || 0;
console.log(`Velocidad registrada: ${velocidadVehiculo} km/h`);

// Uso de ! para lógica de advertencia
if (!(velocidadVehiculo <= LIMITE_VELOCIDAD)) {
    console.log("⚠️ ALERTA: Exceso de velocidad detectado.");
}


// 3. REGISTRO ACADÉMICO / ASISTENCIAS (Estructura If-Else)
const totalAsistencias = parseInt(prompt("Ingrese el total de asistencias: ")) || 0;

if (totalAsistencias < UMBRAL_FALTAS) {
    console.error("Estado: Pierde la materia por faltas.");
} else {
    console.log("Estado: Asistencias suficientes.");
}


// 4. VALIDACIÓN DE EDAD PARA REGISTRO (Lógica Booleana)
const edadUsuario = parseInt(prompt("Edad del colaborador: ")) || 0;
const EDAD_MINIMA = 18;

// La validación de dígitos y longitud se puede hacer en la misma línea usando 'and'
if (!!edadUsuario && edadUsuario < EDAD_MINIMA) {
    console.log("Acceso denegado: El colaborador debe ser mayor de edad.");
} else {
    const registroCompleto = !!edadUsuario;
    registroCompleto && console.log("Registro de colaborador finalizado correctamente.");
}

// 5. MONITOREO DE RECURSOS (Stock Bajo)
const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

// Uso de operadores relacionales para control de inventario
if (stockDisponible <= UMBRAL_STOCK_BAJO) {
    console.warn(`⚠️ Stock bajo en bodega: quedan ${stockDisponible} unidades.`);
}