// JavaScript para interactividad básica

// Función para mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido a mi portafolio! Soy Joiner Cantillo, futuro desarrollador.");
}

// Función para cambiar el texto de un párrafo
function cambiarTexto() {
    const parrafo = document.getElementById('parrafo-cambiar');
    if (parrafo) {
        parrafo.textContent = "¡El texto ha cambiado! Gracias por hacer clic.";
    }
}

// Función para mostrar/ocultar contenido
function toggleContenido() {
    const contenido = document.getElementById('contenido-oculto');
    if (contenido) {
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block';
        } else {
            contenido.style.display = 'none';
        }
    }
}

// Agregar event listeners cuando el DOM esté cargado
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