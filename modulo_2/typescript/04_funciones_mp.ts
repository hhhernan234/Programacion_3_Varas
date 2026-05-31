// funciones-nomina.ts

// Sin tipos — acepta cualquier cosa
function calcularPagoSinTipo(hora, valorH) {
    return hora * valorH;
}
console.log(calcularPagoSinTipo(160, 3.75));    // 600 ✅
console.log(calcularPagoSinTipo("160", 3.75));  // "1603.75" 😕

// Con tipos — TypeScript valida
function calcularPago(horas: number, valorHora: number): number {
    return horas * valorHora;
}
console.log(calcularPago(160, 3.75));  // 600 ✅

// Funciones básicas
function calcularIESS(salario: number): number {
    return salario * 0.0945;
}

function obtenerNombreEmpleado(nombre: string): string {
    return `Empleado: ${nombre}`;
}

function tieneSalarioMinimo(salario: number): boolean {
    return salario >= 460;
}

function mostrarPago(mensaje: string): void {
    console.log(`[NÓMINA] ${mensaje}`);
}

console.log(calcularIESS(1000));
console.log(obtenerNombreEmpleado("Juan"));
console.log(tieneSalarioMinimo(800));
mostrarPago("Pago procesado");

// Parámetros opcionales
function generarReporteEmpleado(
    nombre: string,
    salario?: number,
    departamento?: string
): string {
    let reporte = `Empleado: ${nombre}`;
    if(salario !== undefined){
        reporte += `, Salario: $${salario}`;
    }
    if(departamento !== undefined){
        reporte += `, Depto: ${departamento}`;
    }
    reporte += ".";
    return reporte;
}

console.log(generarReporteEmpleado("Ana"));
console.log(generarReporteEmpleado("Ana", 1200));
console.log(generarReporteEmpleado("Ana", 1200, "TI"));

// Buscar empleado por nombre
function buscarEmpleado(
    empleados: string[],
    busqueda: string,
    exacto?: boolean
): string | null {
    for(const empleado of empleados){
        if(exacto){
            if(empleado === busqueda) return empleado;
        } else {
            if(empleado.toLowerCase().includes(busqueda.toLowerCase())) return empleado;
        }
    }
    return null;
}

const plantilla1 = ["Juan Pérez", "María López", "Carlos Ruiz", "Ana Torres"];
console.log(buscarEmpleado(plantilla1, "maría"));
console.log(buscarEmpleado(plantilla1, "maría", true));
console.log(buscarEmpleado(plantilla1, "María López", true));

// Parámetros por defecto
function calcularDescuentoNomina(
    salario: number,
    porcentajeIESS: number = 9.45,
    aplicarImpuesto: boolean = true
): number {
    let salarioFinal = salario * (1 - porcentajeIESS / 100);
    if(aplicarImpuesto){
        salarioFinal *= 0.95;
    }
    return salarioFinal;
}

const sueldoBruto = 1000;
console.log(calcularDescuentoNomina(sueldoBruto));
console.log(calcularDescuentoNomina(sueldoBruto, 9.45));
console.log(calcularDescuentoNomina(sueldoBruto, 9.45, false));

function notificarPago(empleado: string, veces: number = 3): void {
    for(let i = 1; i <= veces; i++){
        console.log(`[${i}/${veces}] Pago notificado a ${empleado}`);
    }
}

notificarPago("Juan");
notificarPago("María", 2);

// Rest params
function calcularEstadisticasNomina(...salarios: number[]): {
    min:   number;
    max:   number;
    total: number;
    media: number;
} {
    if(salarios.length === 0) return { min: 0, max: 0, total: 0, media: 0 };

    let minSalario = salarios[0];
    let maxSalario = salarios[0];
    let totalSalarios = 0;

    for(const salario of salarios){
        if(salario < minSalario) minSalario = salario;
        if(salario > maxSalario) maxSalario = salario;
        totalSalarios += salario;
    }

    return {
        min:   minSalario,
        max:   maxSalario,
        total: totalSalarios,
        media: totalSalarios / salarios.length
    };
}

const statsNomina = calcularEstadisticasNomina(800, 1200, 950, 600, 1500);
console.log(`Mínimo: $${statsNomina.min}`);
console.log(`Máximo: $${statsNomina.max}`);
console.log(`Total:  $${statsNomina.total}`);
console.log(`Media:  $${statsNomina.media.toFixed(2)}`);

function salariosSobreMinimo(...salarios: number[]): number[] {
    const resultado: number[] = [];
    for(const salario of salarios){
        if(salario >= 460) resultado.push(salario);
    }
    return resultado;
}

console.log(salariosSobreMinimo(300, 800, 400, 1200, 350, 950));