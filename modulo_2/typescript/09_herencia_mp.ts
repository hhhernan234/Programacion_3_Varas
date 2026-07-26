// herencia-nomina

class PersonalEmpresa {
    protected nombrePersonal: string;
    protected cedulaPersonal: string;

    constructor(nombre: string, cedula: string){
        this.nombrePersonal = nombre;
        this.cedulaPersonal = cedula;
    }

    firmarContrato(): void {
        console.log(`  ${this.nombrePersonal} firmó contrato.`);
    }

    toString(): string {
        return `${this.nombrePersonal} (CI: ${this.cedulaPersonal})`;
    }
}

class EmpleadoPermanente extends PersonalEmpresa {
    private salarioPermanente: number;

    constructor(nombre: string, cedula: string, salario: number){
        super(nombre, cedula);
        this.salarioPermanente = salario;
    }

    recibirBeneficio(): void {
        console.log(`  ${this.nombrePersonal}: recibe beneficios de ley.`);
    }

    toString(): string {
        return `${super.toString()} — Fijo: $${this.salarioPermanente}`;
    }
}

class EmpleadoPorHoras extends PersonalEmpresa {
    private valorPorHora: number;

    constructor(nombre: string, cedula: string, valorPorHora: number){
        super(nombre, cedula);
        this.valorPorHora = valorPorHora;
    }

    calcularPagoHoras(horas: number): void {
        console.log(`  ${this.nombrePersonal}: $${(horas * this.valorPorHora).toFixed(2)} por ${horas}h`);
    }

    toString(): string {
        return `${super.toString()} — Por hora: $${this.valorPorHora}`;
    }
}

console.log("=== HERENCIA NÓMINA ===\n");

const empFijo = new EmpleadoPermanente("Juan Pérez", "1234567890", 1200);
const empHora = new EmpleadoPorHoras("María López", "0987654321", 4.50);

empFijo.firmarContrato();
empHora.firmarContrato();

empFijo.recibirBeneficio();
empHora.calcularPagoHoras(80);

console.log(`\nFijo: ${empFijo.toString()}`);
console.log(`Hora: ${empHora.toString()}`);

console.log(`\n¿empFijo es EmpleadoPermanente? ${empFijo instanceof EmpleadoPermanente}`);
console.log(`\n¿empFijo es PersonalEmpresa?    ${empFijo instanceof PersonalEmpresa}`);
console.log(`\n¿empFijo es EmpleadoPorHoras?   ${empFijo instanceof EmpleadoPorHoras}`);