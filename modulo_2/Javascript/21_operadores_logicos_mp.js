/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Motor de Lógica con Operadores de Cortocircuito y Booleano
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN TÉCNICA ---
const TASA_IESS = 0.0945; 
const SUELDO_MINIMO = 460;

console.log("=== PROCESAMIENTO DE ROL DE PAGOS ===");

// 1. USO DE || (VALOR POR DEFECTO)
// Si el nombre es "" o null (falsy), toma "Invitado"
const admin = prompt("Nombre del Administrador: ") || "Invitado";

// Si el sueldo es 0, "", o null (falsy), toma el SUELDO_MINIMO
const sueldoBase = parseFloat(prompt("Ingrese Sueldo Base: ")) || SUELDO_MINIMO;

// 2. USO DE !! (CONVERSIÓN A BOOLEANO REAL)
// Verifica si existen datos en las variables
const tieneNombre = !!admin;
const tieneSueldo = !!sueldoBase;

// 3. USO DE && (EJECUCIÓN CONDICIONAL Y ACCESO SEGURO)
// La validación de dígitos y longitud se puede hacer en la misma línea usando 'and'
const esValido = tieneNombre && tieneSueldo && sueldoBase >= SUELDO_MINIMO;

// Simulación de objeto de empleado para acceso seguro
const empleado = {
    datos: {
        cargo: "Desarrollador de Software"
    }
};

if (esValido) {
    // Cálculo con operadores de asignación
    let neto = sueldoBase;
    const descuento = +(sueldoBase * TASA_IESS).toFixed(2);
    neto -= descuento;

    // && para mostrar mensajes solo si la condición es truthy
    (neto > 1000) && console.log(">>> Alerta: Sueldo de alta categoría detectado.");

    // Acceso seguro a propiedades anidadas con &&
    const cargo = empleado.datos && empleado.datos.cargo;

    // REPORTE FINAL
    const reporte = [
        { Concepto: "Administrador", Valor: admin },
        { Concepto: "Cargo Detectado", Valor: cargo || "No asignado" },
        { Concepto: "Sueldo Bruto", Valor: sueldoBase },
        { Concepto: "Descuento IESS", Valor: descuento },
        { Concepto: "Líquido Recibir", Valor: neto.toFixed(2) }
    ];

    console.table(reporte);
} else {
    // ! para negar el estado de validez
    !esValido && console.error("ERROR: No se puede procesar la nómina. Datos insuficientes.");
}