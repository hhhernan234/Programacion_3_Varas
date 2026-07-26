/**
 * SISTEMA DE GESTIÓN DE NÓMINA VARAS
 * Módulo de Estructuras Anidadas: Seguridad, Validación y Beneficios
 */

const prompt = require("prompt-sync")();

// --- CONFIGURACIÓN DEL SISTEMA ---
const MIN_PASS = 8;
const IVA_ELECTRONICA = 0.15;
const BONO_MIEMBRO = 0.05;

console.log("=== SISTEMA VARAS: CONTROL DE ACCESO Y NÓMINA ===");

// 1. CONTROL DE ACCESO MULTINIVEL (Nested If)
const usuarioAutenticado = true;
const rolUsuario = "editor"; // Roles: "admin", "editor", "visor"
const seccion = "configuracion";

if (usuarioAutenticado) {
  console.log(`Bienvenido. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido.");
    if (seccion === "configuracion") {
      console.log("Cargando panel de configuración del sistema...");
    }
  } else if (rolUsuario === "editor") {
    console.log("Acceso de edición concedido.");
    // Restricción específica para editores en áreas sensibles
    if (seccion === "configuracion") {
      console.log("⛔ Editores no tienen acceso a configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al administrador.");
  }
} else {
  console.log("Sesión no iniciada. Redirigiendo al login...");
}

// 2. VALIDACIÓN DE REGISTRO DE COLABORADORES
const nombre = prompt("Nombre del colaborador: ") || "";
const email = prompt("Email institucional: ") || "";
const password = prompt("Clave de acceso: ") || "";

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  // Validación de formato de correo
  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    // Validación de seguridad de contraseña
    if (password.length < MIN_PASS) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_PASS} caracteres.`);
      console.log(`   Caracteres actuales: ${password.length}`);
    } else {
      console.log("✅ Contraseña segura. Registro completado.");
    }
  }
}

// 3. CÁLCULO DE EQUIPAMIENTO Y BENEFICIOS (Lógica de Categorías)
const categoria = "electronica"; 
const esMiembro = true;
const precioBase = 200;

let precioFinal = precioBase;
let detalleCargo = "";

if (categoria === "electronica") {
  const impuesto = precioBase * IVA_ELECTRONICA;
  precioFinal = precioBase + impuesto;
  detalleCargo = `IVA ${IVA_ELECTRONICA * 100}% incluido`;

  if (esMiembro) {
    const bonificacion = precioFinal * BONO_MIEMBRO;
    precioFinal -= bonificacion;
    detalleCargo += ` + ${BONO_MIEMBRO * 100}% bonificación miembro`;
  }
} else if (categoria === "ropa") {
  // Lógica para uniformes
  if (esMiembro) {
    precioFinal = precioBase * 0.80; 
    detalleCargo = "20% descuento miembro";
  } else {
    precioFinal = precioBase * 0.90;
    detalleCargo = "10% descuento temporada";
  }
}

console.log(`\nResumen de Adquisición:`);
console.log(`Categoría: ${categoria} | Precio Final: $${precioFinal.toFixed(2)}`);
console.log(`Detalle: ${detalleCargo}`);

// 4. VALIDACIÓN DE PERFIL ESTUDIANTIL (Pasantías)
const edad = parseInt(prompt("Edad del aplicante: ")) || 0;
const estaEstudiando = prompt("¿Estás estudiando actualmente? (s/n): ").toLowerCase();

if (edad <= 18) {
  if (estaEstudiando === "s") {
    console.log("Perfil: Estudiante activo para pasantías.");
  } else {
    console.log("Perfil: Requiere validación de estudios.");
  }
} else {
  console.log("Perfil: Adulto / Profesional.");
}

// 5. CÁLCULO DE DESCUENTOS POR COMPRA (Corrección de Sintaxis)
const compra = parseFloat(prompt("Ingrese el total de compra: ")) || 0;
const miembro = prompt("¿Es miembro del sindicato? (S/N): ").toUpperCase();

if (compra > 50) {
  console.log("Aplica descuento de nómina.");
  // CORRECCIÓN: Se usa === para comparar, no =
  if (miembro === "S") {
    console.log("Beneficio: Descuento especial sindicato aplicado.");
  } else {
    console.log("Beneficio: Descuento normal aplicado.");
  }
} else {
  console.log("No aplica descuento para compras menores a $50.");
}