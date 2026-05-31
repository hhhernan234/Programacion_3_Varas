// for básico
console.log("Ciclo for")
for(let i = 0; i < 5; i++){
    console.log(i);
}

// array de empleados
const empleados = ["Juan", "María", "Carlos"]
for(let i = 0; i < empleados.length; i++){
    console.log(empleados[i]);
}

for(let empleado of empleados){
    console.log(empleado)
}

// Reporte de nómina con alertas por posición
const nomina = [
    { codigo: "E01", nombre: "Juan Pérez",    salario: 450  },
    { codigo: "E02", nombre: "María López",   salario: 1200 },
    { codigo: "E03", nombre: "Carlos Ruiz",   salario: 380  },
    { codigo: "E04", nombre: "Ana Torres",    salario: 900  },
    { codigo: "E05", nombre: "Luis Mora",     salario: 420  },
];

const SALARIO_MINIMO = 460;

console.log("=== Reporte de nómina ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Empleado".padEnd(16)} Salario  Estado`);
console.log("─".repeat(52));

for(let i = 0; i < nomina.length; i++){
    const item   = nomina[i];
    const numero = String(i + 1).padStart(2, "0");

    let estado;
    if(item.salario < SALARIO_MINIMO * 0.8){
        estado = "🔴 CRÍTICO";
    } else if(item.salario < SALARIO_MINIMO){
        estado = "🟡 BAJO";
    } else {
        estado = "🟢 Normal";
    }

    console.log(
        `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(16)} ` +
        `$${String(item.salario).padStart(6)}   ${estado}`
    );
}

// Tabla de descuentos IESS
const salarioBase  = 1000;
const tasaIESS     = 0.0945;
const meses        = 5;
const descuento    = salarioBase * tasaIESS;

let saldoPendiente = salarioBase * meses;

console.log("=== Tabla de descuentos IESS ===");
console.log(`Salario: $${salarioBase} | IESS: ${tasaIESS * 100}% | Meses: ${meses}`);
console.log("─".repeat(55));
console.log("Mes    Salario     IESS       Neto        Acumulado");
console.log("─".repeat(55));

for(let mes = 1; mes <= meses; mes++){
    const iess   = salarioBase * tasaIESS;
    const neto   = salarioBase - iess;
    saldoPendiente -= salarioBase;

    const estado = saldoPendiente <= 0 ? " ← Último mes" : "";

    console.log(
        `  ${String(mes).padStart(2)}     ` +
        `$${salarioBase.toFixed(2).padStart(7)}  ` +
        `$${iess.toFixed(2).padStart(7)}  ` +
        `$${neto.toFixed(2).padStart(7)}  ` +
        `$${Math.max(0, saldoPendiente).toFixed(2).padStart(7)}${estado}`
    );
}

// Resumen de pagos por departamento
const pagos = [
    { empleado: "Juan",   monto: 800,  departamento: "Ventas" },
    { empleado: "María",  monto: 1200, departamento: "TI"     },
    { empleado: "Carlos", monto: 600,  departamento: "Ventas" },
    { empleado: "Ana",    monto: 1500, departamento: "TI"     },
    { empleado: "Luis",   monto: 500,  departamento: "RRHH"   },
];

const META_SALARIO = 800;
let totalNomina    = 0;
let empleadosEnMeta = 0;

console.log("=== Resumen de pagos ===");

for(const pago of pagos){
    totalNomina += pago.monto;

    const cumpleMeta = pago.monto >= META_SALARIO;
    if(cumpleMeta) empleadosEnMeta++;

    const indicador = cumpleMeta ? "✅" : "⚠️";
    console.log(
        `${indicador} ${pago.empleado.padEnd(8)} ` +
        `[${pago.departamento.padEnd(6)}]  ` +
        `$${pago.monto.toLocaleString()}`
    );
}

console.log("─".repeat(38));
console.log(`Total nómina:     $${totalNomina.toLocaleString()}`);
console.log(`Sobre meta (≥$${META_SALARIO}): ${empleadosEnMeta}/${pagos.length} empleados`);

// Análisis de texto: contar caracteres en nombre de empleado
const nombreEmpleado = "Juan Carlos Pérez";
const VOCALES        = new Set(["a","e","i","o","u","á","é","í","ó","ú"]);
let conteoVocales     = 0;
let conteoConsonantes = 0;
let conteoEspacios    = 0;

for(const caracter of nombreEmpleado.toLowerCase()){
    if(caracter === " "){
        conteoEspacios++;
    } else if(VOCALES.has(caracter)){
        conteoVocales++;
    } else if(caracter >= "a" && caracter <= "z"){
        conteoConsonantes++;
    }
}

console.log(`Empleado: "${nombreEmpleado}"`);
console.log(`Vocales:     ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios:    ${conteoEspacios}`);
console.log(`Total letras:${conteoVocales + conteoConsonantes}`);

// Ranking de empleados mejor pagados
const topEmpleados = ["Ana Torres", "María López", "Pedro Gómez", "Carlos Ruiz", "Luis Mora"];

console.log("=== Top 5 empleados mejor pagados ===");

for(const [posicion, empleado] of topEmpleados.entries()){
    const medalla =
        posicion === 0 ? "🥇" :
        posicion === 1 ? "🥈" :
        posicion === 2 ? "🥉" : `${posicion + 1}. `;

    console.log(`${medalla} ${empleado}`);
}

// Configuración del sistema de nómina
const configuracionNomina = {
    moneda:        "USD",
    zonaHoraria:   "America/Guayaquil",
    formatoFecha:  "DD/MM/YYYY",
    diasPago:      30,
    descuentoIESS: true
};

console.log("=== Configuración del sistema de nómina ===");

for(const clave in configuracionNomina){
    const valor = configuracionNomina[clave];
    const valorMostrado = typeof valor === "boolean"
        ? (valor ? "Activado" : "Desactivado")
        : valor;
    console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}

// break — primer empleado con salario crítico
const plantilla = [
    { nombre: "Juan",   salario: 900 },
    { nombre: "María",  salario: 350 },
    { nombre: "Carlos", salario: 280 }, // ← primero crítico
    { nombre: "Ana",    salario: 200 },
];

const SALARIO_CRITICO = 300;

for(const emp of plantilla){
    if(emp.salario <= SALARIO_CRITICO){
        console.log(`⚠️ Primer empleado crítico: ${emp.nombre} (salario: $${emp.salario})`);
        break;
    }
}

// continue — procesar solo empleados activos
const registros = [
    { id: "E001", salario: 800,  estado: "activo"   },
    { id: "E002", salario: 600,  estado: "inactivo" },
    { id: "E003", salario: 1200, estado: "activo"   },
    { id: "E004", salario: 450,  estado: "suspendido"},
    { id: "E005", salario: 950,  estado: "activo"   },
];

let totalActivos = 0;

console.log("=== Procesando nómina activa ===");

for(const reg of registros){
    if(reg.estado !== "activo"){
        console.log(`  ↩️  ${reg.id} omitido (${reg.estado})`);
        continue;
    }
    totalActivos += reg.salario;
    console.log(`  ✅ ${reg.id}: $${reg.salario}`);
}

console.log(`Total nómina activa: $${totalActivos}`);