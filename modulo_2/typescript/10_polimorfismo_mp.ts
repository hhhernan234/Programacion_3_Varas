// polimorfismo-nomina

abstract class ConceptoNomina {
    protected nombreConcepto: string;

    constructor(nombreConcepto: string){
        this.nombreConcepto = nombreConcepto;
    }

    abstract calcularMonto(salario: number): number;
    abstract esDescuento(): boolean;

    describir(salario: number): string {
        const tipo = this.esDescuento() ? "Descuento" : "Beneficio";
        return `${tipo} — ${this.nombreConcepto}: $${this.calcularMonto(salario).toFixed(2)}`;
    }
}

class DescuentoIESS extends ConceptoNomina {
    constructor(){
        super("IESS Empleado");
    }
    calcularMonto(salario: number): number { return salario * 0.0945; }
    esDescuento(): boolean { return true; }
}

class DescuentoImpuesto extends ConceptoNomina {
    constructor(){
        super("Impuesto a la Renta");
    }
    calcularMonto(salario: number): number { return salario > 1000 ? salario * 0.05 : 0; }
    esDescuento(): boolean { return true; }
}

class BonificacionAntiguedad extends ConceptoNomina {
    constructor(){
        super("Bonificación Antigüedad");
    }
    calcularMonto(salario: number): number { return salario * 0.05; }
    esDescuento(): boolean { return false; }
}

console.log("=== POLIMORFISMO NÓMINA ===\n");

const conceptos: ConceptoNomina[] = [
    new DescuentoIESS(),
    new DescuentoImpuesto(),
    new BonificacionAntiguedad(),
];

const salarioBase = 1200;

for(const concepto of conceptos){
    console.log(`  ${concepto.describir(salarioBase)}`);
}

const totalDescuentos = conceptos
    .filter(c => c.esDescuento())
    .reduce((acc, c) => acc + c.calcularMonto(salarioBase), 0);

console.log(`\n  Total descuentos: $${totalDescuentos.toFixed(2)}`);
console.log(`  Salario neto:     $${(salarioBase - totalDescuentos).toFixed(2)}`);