const readline = require("readline");

// Configuración de la interfaz para entrada y salida estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Interacción para el Sistema de Nómina
rl.question("Ingrese el nombre del colaborador para el reporte: ", (nombre) => {
  // Uso de Template Literals para confirmar la acción
  console.log(`--- Iniciando proceso de nómina para: ${nombre.toUpperCase()} ---`);
  
  // Cerramos la interfaz para liberar la consola
  rl.close();
});