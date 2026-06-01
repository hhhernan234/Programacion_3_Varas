// type-alias-nomina.ts

type Empleado = {
    nombre:      string;
    salario:     number;
    departamento: string;
};

function mostrarEmpleado(e: Empleado): void {
    console.log(`${e.nombre} — $${e.salario} — ${e.departamento}`);
}

function validarEmpleado(e: Empleado): boolean {
    return e.nombre.length > 0 && e.salario >= 460;
}

const empleadoAna: Empleado = {
    nombre:       "Ana García",
    salario:      1200,
    departamento: "TI"
};

mostrarEmpleado(empleadoAna);
console.log(`¿Válido? ${validarEmpleado(empleadoAna)}`);

// Alias primitivos
type NombreEmpleado = string;
type Salario        = number;
type EstadoLaboral  = boolean;

// Union types
type Cargo          = "gerente" | "analista" | "asistente";
type EstadoNomina   = "activo" | "inactivo" | "suspendido";
type ResultadoPago  = number | string | null;

// Arrays
type ListaEmpleados = string[];
type ListaSalarios  = number[];

const miCargo: Cargo  = "analista";
const estadoLaboral: EstadoNomina = "activo";
console.log(`Cargo: ${miCargo} — Estado: ${estadoLaboral}`);

function puedeAprobarNomina(cargo: Cargo): boolean {
    return cargo === "gerente";
}

console.log(puedeAprobarNomina("gerente"));   // true
console.log(puedeAprobarNomina("analista"));  // false

// Interface
interface RegistroEmpleado {
    id:           number;
    nombre:       string;
    salario:      number;
    horasTrabajadas: number;
    departamento: string;
}

function mostrarRegistro(r: RegistroEmpleado): void {
    console.log(`[${r.id}] ${r.nombre} — $${r.salario} (${r.horasTrabajadas}h)`);
}

function calcularPagoRegistro(r: RegistroEmpleado): boolean {
    return r.horasTrabajadas >= 160;
}

const registroJuan: RegistroEmpleado = {
    id:              1,
    nombre:          "Juan Pérez",
    salario:         800,
    horasTrabajadas: 160,
    departamento:    "Ventas"
};

mostrarRegistro(registroJuan);
console.log(`¿Pago completo? ${calcularPagoRegistro(registroJuan)}`);

// Propiedades especiales
interface FichaEmpleado {
    readonly id:    number;
    nombre:         string;
    email:          string;
    departamento:   string;
    telefono?:      string;
    salario?:       number;
}

const fichaAna: FichaEmpleado = {
    id:          1,
    nombre:      "Ana García",
    email:       "ana@empresa.com",
    departamento:"TI"
};

const fichaLuis: FichaEmpleado = {
    id:          2,
    nombre:      "Luis Pérez",
    email:       "luis@empresa.com",
    departamento:"Ventas",
    telefono:    "0991234567",
    salario:     1200
};

console.log(`${fichaAna.nombre} — tel: ${fichaAna.telefono ?? "no registrado"}`);
console.log(`${fichaLuis.nombre} — tel: ${fichaLuis.telefono ?? "no registrado"}`);

function mostrarSalarioFicha(e: FichaEmpleado): void {
    if(e.salario !== undefined){
        console.log(`${e.nombre}: $${e.salario}/mes`);
    } else {
        console.log(`${e.nombre}: salario no registrado`);
    }
}

mostrarSalarioFicha(fichaAna);
mostrarSalarioFicha(fichaLuis);

// Extender interfaces
interface PersonalBase {
    nombre: string;
    cedula: string;
}

interface EmpleadoFijo extends PersonalBase {
    salarioMensual: number;
    fechaIngreso:   string;
}

interface EmpleadoTemporal extends PersonalBase {
    valorHora:    number;
    horasContrato: number;
}

const empleadoFijo: EmpleadoFijo = {
    nombre:         "Carlos Ruiz",
    cedula:         "1234567890",
    salarioMensual: 950,
    fechaIngreso:   "2023-01-15"
};

const empleadoTemp: EmpleadoTemporal = {
    nombre:        "María Torres",
    cedula:        "0987654321",
    valorHora:     4.50,
    horasContrato: 80
};

function mostrarPersonal(p: PersonalBase): void {
    console.log(`${p.nombre} — CI: ${p.cedula}`);
}

mostrarPersonal(empleadoFijo);
mostrarPersonal(empleadoTemp);

function mostrarEmpleadoFijo(e: EmpleadoFijo): void {
    console.log(`${e.nombre} — $${e.salarioMensual}/mes — Ingreso: ${e.fechaIngreso}`);
}

mostrarEmpleadoFijo(empleadoFijo);