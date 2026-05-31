// Crear objeto empleado
const empleado = {
    nombre:      "Juan Pérez",
    salario:     1000,
    activo:      true
};

console.log(empleado.nombre);    // "Juan Pérez"
console.log(empleado.salario);   // 1000
console.log(empleado["nombre"]); // "Juan Pérez"
const campo = "salario";
console.log(empleado[campo]);    // 1000
console.log(empleado.telefono);  // undefined

empleado.departamento = "TI";
console.log(empleado.departamento); // "TI"
delete empleado.activo;
console.log(empleado.activo);       // undefined

// Métodos en objeto nómina
const sistemaDeNomina = {
    calcularIESS: function(salario){
        return salario * 0.0945;
    },
    calcularNeto(salario){
        return salario - this.calcularIESS(salario);
    },
    calcularHorasExtra: (horasExtra, valorHora) => horasExtra * valorHora * 1.5
};

console.log(sistemaDeNomina.calcularIESS(1000));        // 94.5
console.log(sistemaDeNomina.calcularNeto(1000));         // 905.5
console.log(sistemaDeNomina.calcularHorasExtra(10, 5));  // 75

// this en métodos
const empleadoNomina = {
    nombre:  "Ana Torres",
    salario: 1200,

    obtenerInfo(){
        return `Empleado: ${this.nombre}, Salario: $${this.salario}`;
    },
    aplicarAumento(){
        this.salario *= 1.10;
        return `¡Aumento aplicado! Nuevo salario de ${this.nombre}: $${this.salario.toFixed(2)}`;
    },
    infoArrow: () => {
        return `Empleado: ${this.nombre}`; // undefined
    }
};

console.log(empleadoNomina.obtenerInfo());    // "Empleado: Ana Torres, Salario: $1200"
console.log(empleadoNomina.aplicarAumento()); // "¡Aumento aplicado! Nuevo salario de Ana Torres: $1320.00"
console.log(empleadoNomina.infoArrow());      // "Empleado: undefined"

// Shorthand
const nombre      = "Carlos Ruiz";
const salarioBase = 800;
const cargo       = "Analista";

const empleado1 = { nombre: nombre, salarioBase: salarioBase, cargo: cargo };
const empleado2 = { nombre, salarioBase, cargo };

console.log(empleado2);
// { nombre: 'Carlos Ruiz', salarioBase: 800, cargo: 'Analista' }