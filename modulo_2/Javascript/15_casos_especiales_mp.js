// 1. Manejo de indeterminaciones en cálculos de horas
const horasTrabajadas = 0;
const pagoPorHora = 1400 / horasTrabajadas; 

console.log(pagoPorHora); // Infinity — Ocurre si el divisor es 0; JS no detiene el programa.

// 2. Operaciones con datos corruptos (NaN)
const sueldoInvalido = Number("mil_dolares"); // Intento de conversión fallido.
const totalNomina = sueldoInvalido + 500; 

console.log(totalNomina); // NaN — Cualquier error en la cadena de cálculo invalida el total.

// 3. El problema del centavo (Precisión Decimal)
// En nómina, sumar 0.10c y 0.20c podría dar un error de precisión
const aporteA = 0.1;
const aporteB = 0.2;
const sumaAportes = aporteA + aporteB;

console.log(sumaAportes); // 0.30000000000000004.

// 4. Solución profesional para el Sistema Varas: Redondeo Contable
// toFixed(2) es vital para presentar valores monetarios en tus archivos HTML/CSS.
const sueldoFinal = (0.1 + 0.2).toFixed(2); 

console.log(`Total a pagar: $${sueldoFinal}`); // "0.30".
console.log(typeof sueldoFinal); // "string" — ¡Recuerda convertirlo a Number para seguir sumando!.