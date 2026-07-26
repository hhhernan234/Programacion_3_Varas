// Datos de los colaboradores para pruebas (Basado en tus compañeros de grupo)
const colaboradores = [
    { id: 1, nombre: "Hernán Varas", cargo: "Desarrollo Backend", sueldo: 1400 },
    { id: 2, nombre: "Roberto Rocha", cargo: "Seguridad de Redes", sueldo: 1350 },
    { id: 3, nombre: "Christian Cañar", cargo: "Infraestructura", sueldo: 1300 }
];

// 1. console.log — Confirmación de procesos generales
console.log("Iniciando Módulo de Nómina Varas...");
console.log("Usuario actual:", colaboradores[0].nombre);

// 2. console.table — Visualización profesional de la nómina
// Ideal para revisar toda la lista de un vistazo durante el desarrollo
console.log("Listado de Personal:");
console.table(colaboradores);

// 3. console.warn — Alertas preventivas
// Por ejemplo, si un sueldo es menor al básico o faltan datos opcionales
let horasExtra = 0;
if (horasExtra === 0) {
    console.warn("Atención: El colaborador no registra horas extra en este periodo.");
}

// 4. console.error — Fallos críticos en el sistema
// Úsalo para detectar errores que detendrían el pago
const cedulaIngresada = "1720"; // Cédula incompleta
if (cedulaIngresada.length < 10) {
    console.error("ERROR CRÍTICO: La cédula no cumple con la validación de 10 dígitos.");
}

// 5. console.log con formato (Template Literals)
// Para rastrear variables específicas en tiempo real
const totalNomina = colaboradores.reduce((acc, emp) => acc + emp.sueldo, 0);
console.log(`[DEBUG] Proceso terminado. Total a transferir: $${totalNomina}`);