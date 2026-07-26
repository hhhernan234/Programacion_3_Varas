// Casos reales en el Sistema Varas
let bonoAntigüedad = null; // Definido explícitamente como vacío
let descuentoIESS;         // undefined (aún no se ha calculado)

// 1. Igualdad Estricta (Recomendada para auditorías)
// Evita confundir un valor no calculado con uno que intencionalmente no existe
console.log(bonoAntigüedad === descuentoIESS); // false

// 2. Comportamiento en cálculos (Punto crítico)
// Recuerda que 'undefined' se convierte en NaN, invalidando todo el cálculo
console.log(descuentoIESS + 100); // NaN

// 'null' se comporta como 0 en operaciones aritméticas
console.log(bonoAntigüedad + 100); // 100