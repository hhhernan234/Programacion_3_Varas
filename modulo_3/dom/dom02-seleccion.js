document.addEventListener("DOMContentLoaded",
    function() {
    const titulo = document.getElementById("titulo");
    console.log("Titulo:",titulo);

    const notas = document.getElementById("nota");
    console.log("Notas:",notas);
    
    const items = document.getElementById("li");
    console.log("Items:",items);

    const primerItem = document.getElementById("item");
    console.log("Primer item:",primerItem);

    const todosLosItems = document.getElementById(".item");
    console.log("Todos los items:",todosLosItems);

    Array.from(todosLosItems).forEach(element => {
        console.log("Item", element);
    })

});