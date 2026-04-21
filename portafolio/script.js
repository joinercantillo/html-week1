// TASK 5: JavaScript - Agregando interactividad - Función para mostrar mensaje de bienvenida al cargar la página
function mostrarBienvenida() {
    alert("¡Bienvenido a mi portafolio! Soy Joiner Cantillo, futuro desarrollador.");
}

// TASK 5: JavaScript - Agregando interactividad - Función para cambiar el texto de un párrafo al hacer clic en un botón
function cambiarTexto() {
    const parrafo = document.getElementById('parrafo-cambiar');
    if (parrafo) {
        parrafo.textContent = "¡El texto ha cambiado! Gracias por hacer clic.";
    }
}

// TASK 5: JavaScript - Agregando interactividad - Función para mostrar/ocultar contenido con un efecto dinámico
function toggleContenido() {
    const contenido = document.getElementById('contenido-oculto');
    if (contenido) {
        contenido.classList.toggle('hidden');
    }
}

// TASK 5: JavaScript - Agregando interactividad - Agregar event listeners cuando el DOM esté cargado para reaccionar a acciones del usuario
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar bienvenida al cargar la página
    mostrarBienvenida();

    // Botón para cambiar texto
    const botonCambiar = document.getElementById('boton-cambiar');
    if (botonCambiar) {
        botonCambiar.addEventListener('click', cambiarTexto);
    }

    // Botón para toggle contenido
    const botonToggle = document.getElementById('boton-toggle');
    if (botonToggle) {
        botonToggle.addEventListener('click', toggleContenido);
    }
});