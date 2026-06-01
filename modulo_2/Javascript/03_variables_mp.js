// const — Valores que no cambian en el periodo (equivalente a final en Java)
const nombreEmpleado = "Hernán Varas";      // tipo inferido: string
const cedulaValida = "172XXXXXXX";           // tipo inferido: string
const tasaIESS = 0.0945;                     // tipo inferido: number (9.45%)

// let — Valores que se calculan o acumulan
let sueldoBase = 1200;
let bonoExtra = 0;
let totalIngresos = 0;

// Reasignación permitida con let
bonoExtra = 150; 
totalIngresos = sueldoBase + bonoExtra; // permitido

// nombreEmpleado = "Luis"; // Generaría TypeError: Assignment to constant variable.

// Uso de Template Literals para reportes
console.log(`El colaborador ${nombreEmpleado} percibirá un total de $${totalIngresos}`); 
console.log(`Descuento IESS proyectado: $${totalIngresos * tasaIESS}`);

// var — Evitar en el Sistema Varas por problemas de "hoisting"
var versionLegacy = "v1.0_2025"; // Evitar en código moderno