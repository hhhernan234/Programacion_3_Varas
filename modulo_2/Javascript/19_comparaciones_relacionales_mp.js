// Variables de control de nómina
const sueldoBase = 1400;
const sueldoMinimo = 460;
const limiteHorasExtra = 40;

// Comparaciones numéricas (Sueldos y Jornadas)
console.log(sueldoBase > sueldoMinimo);   // true  — El sueldo cumple con el mínimo legal
console.log(sueldoBase < 1000);           // false — El sueldo está por encima del rango básico
console.log(limiteHorasExtra >= 40);       // true  — Alcanzó el límite máximo de horas extra permitidas
console.log(sueldoBase <= 460);            // false — El sueldo no es menor o igual al básico

// Comparación con Strings (Nombres de Colaboradores)
// Útil para ordenar alfabéticamente a Roberto Rocha y Christian Cañar
console.log("Christian" < "Roberto");     // true  — Orden lexicográfico correcto
console.log("Varas" < "varas");           // true  — Las mayúsculas tienen menor valor en Unicode