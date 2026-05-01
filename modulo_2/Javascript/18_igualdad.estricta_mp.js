// Datos extraídos del sistema (por ejemplo, desde un prompt o base de datos)
const idEmpleadoIngresado = "1"; // Tipo string
const idEmpleadoDB = 1;          // Tipo number

// Igualdad Estricta (Recomendada para IDs y Roles)
// Evita que un ID en texto se confunda con un ID numérico de la base de datos
console.log(idEmpleadoIngresado === idEmpleadoDB); // false (Distinto tipo)

// Igualdad Débil (Peligrosa en cálculos contables)
// Podría permitir el acceso a un registro por error de tipo
console.log(idEmpleadoIngresado == idEmpleadoDB);  // true (Coerción implícita)

// Validación de estados de pago
const estadoPago = "0"; // Imaginemos que '0' significa pendiente
const estaPagado = false;

console.log(estadoPago === estaPagado); // false (Validación segura)
console.log(estadoPago == estaPagado);  // true (PELIGRO: El sistema cree que está pagado)

// Desigualdad Estricta
// Útil para verificar si el usuario actual es distinto al administrador Hernán Varas
const usuarioActual = "Roberto Rocha";
console.log(usuarioActual !== "Hernán Varas"); // true