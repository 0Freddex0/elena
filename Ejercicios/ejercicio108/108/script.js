// Obtener elementos del DOM
const destinatario = document.getElementById('destinatario');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');
const eliminarBtn = document.getElementById('eliminar');
const nubeBtn = document.getElementById('nube');
const listaMensajes = document.getElementById('lista-mensajes');
const noMensajes = document.getElementById('no-mensajes');

// Función para enviar un mensaje
enviarBtn.addEventListener('click', () => {
    // Verificar si hay destinatario y mensaje
    if (destinatario.value === "" || mensaje.value.trim() === "") {
        alert('Por favor, selecciona un destinatario y escribe un mensaje.');
        return;
    }

    // Crear un nuevo elemento de lista para el mensaje
    const nuevoMensaje = document.createElement('li');
    nuevoMensaje.textContent = `Destinatario: ${destinatario.options[destinatario.selectedIndex].text} - Mensaje: ${mensaje.value}`;
    
    // Añadir el mensaje a la lista
    listaMensajes.appendChild(nuevoMensaje);
    mensaje.value = ''; // Limpiar el área de texto

    // Ocultar el texto de "De momento...nada"
    noMensajes.style.display = 'none';
});

// Función para eliminar todos los mensajes
eliminarBtn.addEventListener('click', () => {
    listaMensajes.innerHTML = ''; // Vaciar la lista de mensajes
    noMensajes.style.display = 'block'; // Mostrar el mensaje de "De momento...nada"
});

// Función para simular la subida a la nube
nubeBtn.addEventListener('click', () => {
    if (listaMensajes.children.length > 0) {
        alert('¡Mensajes enviados a la nube con éxito!');
    } else {
        alert('No hay mensajes para enviar a la nube.');
    }
});
