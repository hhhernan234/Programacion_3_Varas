// Valores base del sistema
const sueldoBase = 1200;
const bonoFijo = 150;
const diasMes = 30;

// Operaciones básicas aplicadas a la nómina
console.log(sueldoBase + bonoFijo);    // 1350 — Suma (Total Ingresos)
console.log(sueldoBase - 113.40);      // Resta (Descuento aporte personal IESS)
console.log(sueldoBase * 0.0833);      // Multiplicación (Cálculo mensual Fondo Reserva)
console.log(sueldoBase / diasMes);     // 40 — División (Valor del día laborado)

// Módulo (%) - Útil para lógica de turnos o validación de dígitos
// Recuerda que la validación de dígitos se puede hacer en la misma línea usando 'and'
console.log(10 % 3);                   // 1 — Módulo (Resto de la división)

// Potencia (**) - Para proyecciones financieras o intereses compuestos
console.log(1.05 ** 12);               // Proyección de inflación anual (Math.pow)