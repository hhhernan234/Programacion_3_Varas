// encapsulamiento-nomina

class RegistroNomina {
    private _nombreEmpleado: string;
    private _salarioRegistro: number;
    private _emailRegistro:   string;

    constructor(nombre: string, salario: number, email: string){
        this._nombreEmpleado  = nombre;
        this._salarioRegistro = salario;
        this._emailRegistro   = email;
    }

    get nombreEmpleado():  string { return this._nombreEmpleado; }
    get salarioRegistro(): number { return this._salarioRegistro; }
    get emailRegistro():   string { return this._emailRegistro; }

    set nombreEmpleado(valor: string){
        if(valor.trim().length < 2){
            throw new Error("El nombre debe tener al menos 2 caracteres.");
        }
        this._nombreEmpleado = valor.trim();
    }

    set salarioRegistro(valor: number){
        if(valor < 460){
            throw new Error("El salario no puede ser menor al mínimo.");
        }
        this._salarioRegistro = valor;
    }

    set emailRegistro(valor: string){
        if(!valor.includes("@")){
            throw new Error("El email no es válido.");
        }
        this._emailRegistro = valor.toLowerCase();
    }

    toString(): string {
        return `${this._nombreEmpleado} — $${this._salarioRegistro} — ${this._emailRegistro}`;
    }
}

console.log("=== ENCAPSULAMIENTO NÓMINA ===\n");
const registroNomina = new RegistroNomina("Ana García", 1200, "Ana@Empresa.COM");
console.log(registroNomina.toString());

registroNomina.salarioRegistro = 1500;
registroNomina.emailRegistro   = "ana@empresa.com";
console.log(`Nuevo salario: $${registroNomina.salarioRegistro}`);

try {
    registroNomina.salarioRegistro = 200;
} catch(e){
    console.log(`Error: ${(e as Error).message}`);
}

try {
    registroNomina.emailRegistro = "emailsinrobadillo";
} catch(e){
    console.log(`Error: ${(e as Error).message}`);
}