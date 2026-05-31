// tipos-primitivos-nomina.ts

// string
const nombreCompleto: string = "Juan Pérez";
const saludoNomina: string = `Empleado: ${nombreCompleto}`;
const departamentoVacio: string = "";

console.log(nombreCompleto);
console.log(saludoNomina);

// number
const horasTrabajadas: number = 160;
const valorHora: number = 3.75;
const salarioBrutoCalc: number = horasTrabajadas * valorHora;

console.log(salarioBrutoCalc);
console.log(salarioBrutoCalc.toFixed(2));

// null | undefined
let empleadoActual: string | null = null;
empleadoActual = "María López";
console.log(empleadoActual);
empleadoActual = null;
console.log(empleadoActual);

// void
function calcularNeto(salario: number): number {
    return salario - (salario * 0.0945);
}

const salarioNeto = calcularNeto(1000);
console.log(salarioNeto);