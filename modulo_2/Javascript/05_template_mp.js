const nombre   = "Hernán";
const apellido = "Varas";
const sueldo   = 1400;

// Variable simple: Saludo al administrador del sistema
console.log(`Hola, ${nombre}`);

// Expresión dentro de ${ }: Formato corporativo y cálculos rápidos
console.log(`Colaborador: ${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
console.log(`Proyección de sueldo con bono (10%): $${sueldo * 1.10}`);
console.log(`Estado de aportación IESS: ${sueldo >= 460 ? "Obligatoria" : "Exenta"}`);

// String multilínea — Ideal para generar la vista previa de un Rol de Pago
const rolPagoSimplificado = `
  --- REPORTE DE NÓMINA ---
  Empleado: ${nombre} ${apellido}
  Ingreso Base: $${sueldo}
  Departamento: Desarrollo de Software
  Acceso a Fondos: ${sueldo > 1000 ? "Habilitado" : "Pendiente"}
  -------------------------
`;

console.log(rolPagoSimplificado);