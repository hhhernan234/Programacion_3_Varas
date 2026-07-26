function mostrarAlerta(){
    alert('¡Hola desde el sistema de nóminas');
}

function agregarProducto(){
    const lista = document.getElementById('lista-productos1');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Empleado';
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener("click", function(){
    const lista2 = document.getElementById('lista-productos2');
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = 'Nuevo Empleado desde Evento Listener';
    lista2.appendChild(nuevoProducto);
})

function cambiarTexto(){
    const parrafo = document.getElementById('parrafo1');
    parrafo.textContent = "Nómina calculada";
}

function cambiarContenido(){
    const contenido = document.getElementById('contenido');
    contenido.textContent = "Nueva Nómina";
}

document.getElementById('campo')
    .addEventListener('input', () => {
    console.log('Valor del campo: ',
        document.getElementById('campo').value);
    });

document.getElementById('campo_actualizar_parrafo')
    .addEventListener('input', () => {
    const valorCampo =document
        .getElementById('campo_actualizar_parrafo').value;
    document.getElementById('parrafo')
        .textContent =
        `Valor actualizado: ${valorCampo}`;
    });
