let totalAPagar = 1000; // Salario base inicial

// Asignaciones aplicadas al rol de pagos
totalAPagar += 200;    // totalAPagar = totalAPagar + 200 (Bono por eficiencia) -> 1200
totalAPagar -= 113.40; // totalAPagar = totalAPagar - 113.40 (Aporte personal IESS) -> 1086.60
totalAPagar *= 1.05;   // totalAPagar = totalAPagar * 1.05 (Incremento del 5% por antigüedad) -> 1140.93
totalAPagar /= 2;      // totalAPagar = totalAPagar / 2 (Adelanto de quincena) -> 570.46
totalAPagar %= 100;    // totalAPagar = totalAPagar % 100 (Cálculo de excedentes para reportes) -> 70.46
totalAPagar **= 2;     // totalAPagar = totalAPagar ** 2 (Proyecciones estadísticas de costos)

console.log(`El saldo final procesado en el Sistema Varas es: $${totalAPagar.toFixed(2)}`);