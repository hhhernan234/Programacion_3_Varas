document.addEventListener("DOMContentLoaded",
    function() {
    const titulo = document.getElementById("titulo");
    console.log("Titulo:",titulo);

    const notas = document.getElementById("nota");
    console.log("Nominas:",notas);
    
    const items = document.getElementById("li");
    console.log("Empleados:",items);

    const primerItem = document.getElementById("item");
    console.log("Primer empleado:",primerItem);

    const todosLosItems = document.getElementById(".item");
    console.log("Todos los empleados:",todosLosItems);

    Array.from(todosLosItems).forEach(element => {
        console.log("Empleado", element);
    })

});
