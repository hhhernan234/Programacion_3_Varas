// abstraccion-nomina

class SistemaNomina {
    private totalPagado: number;
    private historialPagos: string[] = [];

    constructor(empresa: string, presupuesto: number){
        this.totalPagado = 0;
        this.historialPagos.push(`Sistema iniciado con presupuesto: $${presupuesto}`);
        console.log(`Sistema de nómina de ${empresa} iniciado.`);
    }

    procesarPago(empleado: string, monto: number): void {
        this.totalPagado += monto;
        this.registrarPago(`Pago a ${empleado}: $${monto}`);
        console.log(`  Pago procesado a ${empleado}: $${monto}`);
    }

    revertirPago(monto: number): void {
        if(monto > this.totalPagado){
            console.log("  Error: monto mayor al total pagado.");
            return;
        }
        this.totalPagado -= monto;
        this.registrarPago(`Reversión: -$${monto}`);
        console.log(`  Reversión aplicada: $${monto}`);
    }

    consultarTotalPagado(): number {
        return this.totalPagado;
    }

    verHistorial(): void {
        console.log("\n  Historial:");
        this.historialPagos.forEach(h => console.log(`    ${h}`));
    }

    private registrarPago(operacion: string): void {
        this.historialPagos.push(operacion);
    }
}

console.log("=== SISTEMA DE NÓMINA ===\n");
const sistemaNomina = new SistemaNomina("Empresa XYZ", 50000);

sistemaNomina.procesarPago("Ana García", 1200);
sistemaNomina.procesarPago("Luis Pérez", 800);
sistemaNomina.revertirPago(200);
sistemaNomina.revertirPago(9999);

console.log(`\nTotal pagado: $${sistemaNomina.consultarTotalPagado()}`);
sistemaNomina.verHistorial();