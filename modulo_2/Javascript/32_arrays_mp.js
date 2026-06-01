// Crear arrays
const empleados   = ["Juan", "María", "Carlos"];
const salarios    = [800, 1200, 950, 1500, 600];
const mixto       = [1, "Juan", true, null];
const vacio       = [];

console.log(empleados[0]);   // "Juan"
console.log(empleados[2]);   // "Carlos"
console.log(empleados[9]);   // undefined
console.log(empleados[-1]);  // undefined
console.log(empleados.at(-1)); // "Carlos"
console.log(empleados.length); // 3

empleados[1] = "María José";
console.log(empleados);

// Métodos de array
const plantilla = [800, 1200, 950];
plantilla.push(1500);
plantilla.push(600, 700);
console.log(plantilla);

const ultimoSalario = plantilla.pop();
console.log(ultimoSalario);
console.log(plantilla);

plantilla.unshift(500);
console.log(plantilla);

const primerSalario = plantilla.shift();
console.log(primerSalario);
console.log(plantilla);

const departamentos = ["Ventas", "TI", "Produccion", "RRHH"];
departamentos.splice(2, 0, "Finanzas");
console.log(departamentos);

const eliminados = departamentos.splice(1, 2);
console.log(eliminados);
console.log(departamentos);

// Búsqueda
const sueldos = [800, 1200, 950, 1200, 1500];
console.log(sueldos.indexOf(1200));
console.log(sueldos.indexOf(9999));
console.log(sueldos.lastIndexOf(1200));
console.log(sueldos.includes(950));
console.log(sueldos.includes(9999));

const registros = ["E01", "E02", "E03", "E04", "E05"];
console.log(registros.slice(1, 3));
console.log(registros.slice(2));
console.log(registros.slice(-2));
console.log(registros);

const turnoManana = ["Juan", "María"];
const turnoTarde  = ["Carlos", "Ana"];
console.log(turnoManana.concat(turnoTarde));
console.log([...turnoManana, ...turnoTarde]);

const codigosEmpleados = ["E01", "E02", "E03"];
console.log(codigosEmpleados.join(" - "));
console.log(codigosEmpleados.join(", "));
console.log(codigosEmpleados.join(""));

const rankingSalarios = [800, 1200, 950, 600, 1500];
rankingSalarios.reverse();
console.log(rankingSalarios);

const salariosDesordenados = [1000, 600, 1500, 800];
salariosDesordenados.sort((a, b) => a - b);
console.log(salariosDesordenados);

// forEach
const nombresEmpleados = ["Juan", "María", "Carlos"];
nombresEmpleados.forEach((nombre, indice) => {
    console.log(`${indice}: ${nombre}`);
});

// map
const sueldosBrutos = [800, 1200, 950, 1500, 600];
const sueldosNetos  = sueldosBrutos.map(s => s - (s * 0.0945));
console.log(sueldosNetos);
console.log(sueldosBrutos);

const listaEmpleados = [
    { nombre: "Ana",    salario: 1200 },
    { nombre: "Luis",   salario: 800  },
    { nombre: "Marta",  salario: 950  }
];

const soloNombres = listaEmpleados.map(e => e.nombre);
console.log(soloNombres);

const resumenEmpleados = listaEmpleados.map(e => ({
    nombre:       e.nombre,
    sobreSalarioMinimo: e.salario >= 460
}));
console.log(resumenEmpleados);

// filter
const todosSalarios = [400, 800, 1200, 350, 950, 1500, 280];
const sobreMinimo   = todosSalarios.filter(s => s >= 460);
console.log(sobreMinimo);

const altosIngresos = todosSalarios.filter(s => s > 1000);
console.log(altosIngresos);

const personalActivo = [
    { nombre: "Ana",    salario: 1200, activo: true  },
    { nombre: "Luis",   salario: 380,  activo: true  },
    { nombre: "Marta",  salario: 950,  activo: false },
    { nombre: "Pedro",  salario: 800,  activo: true  }
];

const activosSobreMinimo = personalActivo.filter(e => e.salario >= 460 && e.activo);
console.log(activosSobreMinimo.map(e => e.nombre));

// reduce
const sueldosMensuales = [800, 1200, 950, 1500, 600];

const totalPlanilla = sueldosMensuales.reduce((acum, s) => acum + s, 0);
console.log(totalPlanilla);

const totalDescuentos = sueldosMensuales.reduce((acum, s) => acum + (s * 0.0945), 0);
console.log(totalDescuentos);

const salarioMaximo = sueldosMensuales.reduce((max, s) => s > max ? s : max, -Infinity);
console.log(salarioMaximo);

const empleadosPorDept = ["Ventas", "TI", "Ventas", "RRHH", "TI", "Ventas"];
const conteoPorDept    = empleadosPorDept.reduce((acum, dept) => {
    acum[dept] = (acum[dept] ?? 0) + 1;
    return acum;
}, {});
console.log(conteoPorDept);

const semanas  = [[800, 900], [750, 850], [1000, 950]];
const todosPagos = semanas.reduce((acum, arr) => [...acum, ...arr], []);
console.log(todosPagos);

// Encadenamiento
const sueldosRegistrados = [350, 800, 1200, 420, 950, 1500, 300];
const netosActivos = sueldosRegistrados
    .filter(s => s >= 460)
    .map(s => s - (s * 0.0945));
console.log(netosActivos);