// Función pura
const prompt = require("prompt-sync")();

const calcularDescuentoIESS = (salario, tasa = 0.0945) => salario * tasa;

console.log(calcularDescuentoIESS(1000));  // 94.5
console.log(calcularDescuentoIESS(1000));  // siempre 94.5

// Función con efecto secundario
let totalNomina = 0;
function agregarNomina(salario){
    totalNomina += salario;
    return totalNomina;
}

console.log(agregarNomina(800));   // 800
console.log(agregarNomina(800));   // 1600

// Sistema de cálculo de nómina
const calcularBruto      = (horasTrabajadas, valorHora) => horasTrabajadas * valorHora;
const calcularIESS       = (salario) => salario * 0.0945;
const calcularImpuesto   = (salario) => salario > 1000 ? salario * 0.05 : 0;
const calcularNeto       = (salario) => {
    if(salario <= 0) return "Error: salario inválido";
    return salario - calcularIESS(salario) - calcularImpuesto(salario);
};

function procesarNomina(salario, concepto){
    const conceptos = {
        "bruto":    () => salario,
        "iess":     () => calcularIESS(salario),
        "impuesto": () => calcularImpuesto(salario),
        "neto":     () => calcularNeto(salario)
    };
    const fn = conceptos[concepto];
    if(!fn) return `Concepto "${concepto}" no reconocido`;
    return fn();
}

function leerNumero(mensaje){
    while(true){
        const entrada = prompt(mensaje);
        const numero  = parseFloat(entrada);
        if(!isNaN(numero)) return numero;
        console.log("Entrada no válida, intenta de nuevo.");
    }
}

console.log("=== Sistema de nómina ===");
const salario   = leerNumero("Salario bruto: ");
const concepto  = prompt("Concepto (bruto, iess, impuesto, neto): ");
const resultado = procesarNomina(salario, concepto);
console.log(`Resultado: $${resultado}`);