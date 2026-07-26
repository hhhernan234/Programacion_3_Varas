let index = 10;
while(index >= 0){
    console.log(index);
    index--;
}

// Cola de pagos pendientes
const pagosPendientes = [
    { id: "P001", prioridad: "alta",   empleado: "Juan Pérez" },
    { id: "P002", prioridad: "media",  empleado: "María López" },
    { id: "P003", prioridad: "baja",   empleado: "Carlos Ruiz" },
    { id: "P004", prioridad: "alta",   empleado: "Ana Torres" },
];

let indice = 0;

console.log("=== Procesando cola de pagos ===");

while(indice < pagosPendientes.length){
    const pago = pagosPendientes[indice];

    if(pago.prioridad === "alta"){
        console.log(`🔴 [URGENTE] ${pago.id}: ${pago.empleado}`);
    } else if(pago.prioridad === "media"){
        console.log(`🟡 [NORMAL]  ${pago.id}: ${pago.empleado}`);
    } else {
        console.log(`🟢 [BAJO]    ${pago.id}: ${pago.empleado}`);
    }

    indice++;
}

console.log(`Total procesados: ${pagosPendientes.length} pagos`);

// Acumulación de horas hasta completar contrato
const META_HORAS   = 160;
const horasSemana  = [38, 42, 35, 40, 38, 30];
let totalHoras     = 0;
let semanasTranscurridas = 0;

while(totalHoras < META_HORAS && semanasTranscurridas < horasSemana.length){
    const horasDelaSemana = horasSemana[semanasTranscurridas];
    totalHoras           += horasDelaSemana;
    semanasTranscurridas++;

    console.log(`Semana ${semanasTranscurridas}: +${horasDelaSemana}h → Acumulado: ${totalHoras}h`);

    if(totalHoras >= META_HORAS){
        console.log(`🎯 ¡Contrato completado en ${semanasTranscurridas} semana(s)!`);
    }
}

if(totalHoras < META_HORAS){
    const faltante = META_HORAS - totalHoras;
    console.log(`Contrato no completado. Faltan ${faltante} horas`);
}

// do-while — sistema de reintentos de pago
const MAX_REINTENTOS = 3;
let reintentos       = 0;
let pagoExitoso      = false;

do {
    reintentos++;
    console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: procesando pago...`);

    if(reintentos >= 3){
        pagoExitoso = true;
    }

    if(!pagoExitoso && reintentos < MAX_REINTENTOS){
        console.log(`  ⏳ Fallo. Reintentando...`);
    }

} while(!pagoExitoso && reintentos < MAX_REINTENTOS);

if(pagoExitoso){
    console.log("✅ Pago procesado correctamente.");
} else {
    console.log("❌ No se pudo procesar el pago.");
}