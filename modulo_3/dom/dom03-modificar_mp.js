document.addEventListener("DOMContentLoaded", function(){
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent= ("Nómina calculada correctamente :");
    console.log("mensaje:", mensaje);

    const link = document.getElementById("link");
    link.textContent = "www.iess.gob.ec";
    link.href = "http://www.iess.gob.ec";
    link.classList.add("boton");
    console.log("link:", link);


});
