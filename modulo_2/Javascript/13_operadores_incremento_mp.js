// Contador de registros procesados
let empleadosProcesados = 0;

// Incremento: Útil para avanzar en el conteo de roles de pago
empleadosProcesados++;           // Se incrementa el total después de generar un PDF
++empleadosProcesados;           // Se incrementa antes de imprimir el siguiente reporte

// Decremento: Útil para gestionar cupos de vacaciones o días pendientes
let diasVacaciones = 15;
diasVacaciones--;                // Se descuenta un día tras la aprobación del formulario

// Ejemplo de diferencia de asignación en cálculos de nómina
let horasExtra = 10;
let reporteA = horasExtra++;     // reporteA = 10 (Se asigna y luego aumenta)
let reporteB = ++horasExtra;     // reporteB = 12 (Aumenta de 11 a 12 y luego se asigna)

console.log(`Estado final -> Horas: ${horasExtra}, Reporte A: ${reporteA}, Reporte B: ${reporteB}`);