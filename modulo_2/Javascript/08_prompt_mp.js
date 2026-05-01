// Importación de la librería (debe estar instalada vía npm)
const prompt = require("prompt-sync")();

console.log("--- MÓDULO DE VALIDACIÓN DE PERSONAL ---");

// Captura de datos del colaborador
const nombre = prompt("Ingrese el nombre del empleado: ");
if (nombre) {
    console.log(`Verificando registros para: ${nombre.toUpperCase()}`);
}

// Captura y conversión de edad o años de servicio
const edadTexto = prompt("Ingrese la edad del colaborador: ");
const edad = parseInt(edadTexto, 10);

// Validación de tipo de dato (Type Casting)
if (isNaN(edad)) {
    console.log("Error: El valor ingresado no es un número válido.");
} else {
    // Uso de Template Literals para confirmar el registro
    console.log(`Registro actualizado: ${edad} años de edad.`); 
    
    // Lógica adicional: Verificación de mayoría de edad para contrato legal
    console.log(`Estado legal: ${edad >= 18 ? "Apto para contrato" : "Requiere tutor"}`);
}