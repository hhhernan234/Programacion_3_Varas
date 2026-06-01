// Números — Manejo de sueldos y aportaciones (enteros y decimales)
const sueldoBase = 1400;
const tasaIESS = 0.0945; // 9.45% de aporte personal
const limiteVivienda = 12_500.50; // Separador visual ES2021 para facilitar lectura
const descuentoNegativo = -50.25; // Ajustes contables

// String — Información del personal y sistema
var nombreEmpleado = "Hernán Varas"; // Identificado como estudiante de software
const departamento = 'Desarrollo';
const cargo = "Backend Developer";
const fichaTecnica = `Colaborador: ${nombreEmpleado}`; // Template literal para reportes

// Boolean — Estados de validación
const estaActivo = true;
const tieneFondoReserva = false;

// null y undefined — Manejo de datos faltantes en la base de datos
const observaciones = null; // Ausencia intencional (sin novedades este mes)
let fechaSalida; // undefined — Aún no asignada por ser empleado vigente

// BigInt — Para IDs de transacciones bancarias muy extensos
const idTransaccionEnorme = 9999999999999999999n; // Sufijo n para precisión arbitraria

// typeof — Verificación de tipos en procesos de validación
console.log(typeof sueldoBase);    // "number"
console.log(typeof nombreEmpleado); // "string"
console.log(typeof estaActivo);    // "boolean"
console.log(typeof observaciones); // "object" (Bug histórico: null reportado como objeto)