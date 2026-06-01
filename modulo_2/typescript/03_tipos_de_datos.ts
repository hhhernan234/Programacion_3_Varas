// === tipos-string.ts ===
// Cambiamos 'nombre' por 'primerNombre' para evitar el error TS2451
const primerNombre: string = "Ana García"; 
const saludo: string = `Hola, ${primerNombre}`;
const vacia: string = "";
const comillas: string = 'También con comillas simples';

console.log(primerNombre);
console.log(saludo);

// === tipos-number.ts ===
const entero: number = 42;
const decimal: number = 3.14;
// Cambiamos 'resultado' por 'resultadoOp' para evitar el error TS2451
const resultadoOp: number = 10 / 3; 

console.log(resultadoOp);
console.log(resultadoOp.toFixed(2));

// === null-undefined.ts ===
// IMPORTANTE: Aquí intentaste usar 'let nombre' pero ya existía 'const nombre' arriba.
// Cambiamos el nombre a 'nombreVariable' para que sea único.
let nombreVariable: string | null = null; 

nombreVariable = "Ana"; // Ahora sí permite asignar porque es 'let'
console.log(nombreVariable);
nombreVariable = null;
console.log(nombreVariable);

// === tipo-void.ts ===
function duplicar(n: number): number {
  return n * 2;
}

// Cambiamos este 'resultado' por 'resultadoFinal'
const resultadoFinal = duplicar(5); 
console.log(resultadoFinal);