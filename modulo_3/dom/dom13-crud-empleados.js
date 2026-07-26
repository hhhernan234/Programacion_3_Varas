let empleados = [];

document.getElementById('btnAgregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const sueldo = parseFloat(document.getElementById('sueldo').value);

    // Validación de campos vacíos y sueldo positivo
    if (!nombre || !apellido || isNaN(sueldo) || sueldo <= 0) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Agregar empleado
    empleados.push({ nombre, apellido, sueldo });
    
    actualizarTabla();
    calcularPromedio();
    limpiarFormulario();
});

function actualizarTabla() {
    const tbody = document.getElementById('cuerpoTabla');
    tbody.innerHTML = '';
    empleados.forEach((emp, index) => {
        tbody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${emp.nombre}</td>
            <td>${emp.apellido}</td>
            <td>$${emp.sueldo.toFixed(2)}</td>
        </tr>`;
    });
}

function calcularPromedio() {
    if (empleados.length === 0) return;
    
    const total = empleados.reduce((sum, emp) => sum + emp.sueldo, 0);
    const promedio = total / empleados.length;
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}