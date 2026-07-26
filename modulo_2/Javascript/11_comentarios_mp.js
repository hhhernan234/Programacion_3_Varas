// 1. Comentario de una sola línea: Notas rápidas o recordatorios.
const TASA_IESS = 0.0945; // Tasa de aporte personal en Ecuador (9.45%)

/*
   2. Comentario de múltiples líneas:
   Este bloque se usa para explicar lógicas complejas, como el algoritmo
   de validación de la cédula ecuatoriana o el flujo de fondos de reserva.
*/

/**
 * 3. Comentario JSDoc: Documentación técnica profesional.
 * Ideal para que tus compañeros de grupo entiendan qué hace tu código.
 * 
 * @param {string} empleado - Nombre del colaborador.
 * @param {number} sueldo - Sueldo base para el cálculo.
 * @returns {string} Resumen del descuento de ley.
 */
function calcularAporteIESS(empleado, sueldo) {
    const descuento = sueldo * TASA_IESS;
    return `Empleado: ${empleado} | Descuento IESS: $${descuento.toFixed(2)}`;
}

// Ejemplo de uso con los datos del sistema
console.log(calcularAporteIESS("Hernán Varas", 1400));