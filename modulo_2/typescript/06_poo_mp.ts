// clase-nomina.ts

class EmpleadoNomina {
    nombre: string;
    salario: number;

    constructor(nombre: string, salario: number){
        this.nombre  = nombre;
        this.salario = salario;
    }

    obtenerInfo(): string {
        return `Empleado: ${this.nombre}, Salario: $${this.salario}`;
    }

    aplicarAumento(): void {
        this.salario *= 1.10;
        console.log(`Aumento aplicado. Nuevo salario de ${this.nombre}: $${this.salario.toFixed(2)}`);
    }
}

const empleado1 = new EmpleadoNomina("Ana García", 1200);
const empleado2 = new EmpleadoNomina("Luis Pérez", 800);

console.log(empleado1.obtenerInfo());
console.log(empleado2.obtenerInfo());
empleado1.aplicarAumento();
console.log(empleado1.obtenerInfo());