document.addEventListener("DOMContentLoaded", obtenerSeleccion());
        
// Obtén los elementos de radio por su nombre de grupo
var radios = document.querySelectorAll('input[name="filtrar"]');

// Añade un event listener para el evento "change" a cada radio
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        obtenerSeleccion();
    });
});



function obtenerSeleccion() {
    var todos = document.getElementById("todos");
    var val2023 = document.getElementById("2023");
    var val2022 = document.getElementById("2022");
    var val2021 = document.getElementById("2021");

    // Obtén todas las secciones que deseas mostrar u ocultar
    var secciones = document.querySelectorAll('.seccion');

    // Oculta todas las secciones
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Verifica cuál de los radio buttons está seleccionado
    if (val2023.checked) {
        // Muestra las secciones con la clase 'seccion-2023'
        document.querySelectorAll('.val-2023').forEach(function(seccion) {
            seccion.style.display = 'flex';
        });
    } else if (val2022.checked) {
        // Muestra las secciones con la clase 'seccion-2022'
        document.querySelectorAll('.val-2022').forEach(function(seccion) {
            seccion.style.display = 'flex';
        });
    }else if (val2021.checked) {
        // Muestra las secciones con la clase 'seccion-2022'
        document.querySelectorAll('.val-2021').forEach(function(seccion) {
            seccion.style.display = 'flex';
        });
    } else if (todos.checked) {
        // Muestra todas las secciones
        secciones.forEach(function(seccion) {
            seccion.style.display = 'flex';
        });
    } else {
        // Si no se selecciona ninguna opción, oculta todas las secciones
        secciones.forEach(function(seccion) {
            seccion.style.display = 'none';
        });
    }
}
