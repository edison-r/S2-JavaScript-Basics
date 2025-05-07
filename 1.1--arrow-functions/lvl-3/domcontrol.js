document.addEventListener("DOMContentLoaded", function() {
    const verSolucion = document.getElementById("soluciones");
    const soluciones = document.querySelectorAll(".caja");
    let visible = false;

    verSolucion.addEventListener("click", function() {
        visible = !visible;
        soluciones.forEach((solucion) => {
            solucion.style.display = visible ? "block" : "none";
        });
    });

});