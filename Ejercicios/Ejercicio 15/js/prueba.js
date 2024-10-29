// Diccionario de traducción
const traducciones = {
    "casa": "house",
    "mesa": "table",
    "perro": "dog",
    "gato": "cat"
};

// Función para solicitar y traducir palabras
function traducirPalabra() {
    while (true) {
        // Pedimos al usuario que introduzca una palabra
        let palabra = prompt("Introduce una palabra (casa, mesa, perro, gato) o escribe 'salir' para salir:");

        // Convertimos la entrada a minúsculas para manejar diferentes casos
        palabra = palabra.toLowerCase();

        // Si el usuario escribe 'salir', salimos del ciclo
        if (palabra === "salir") {
            alert("Gracias por usar el traductor. ¡Hasta luego!");
            break;
        }

        // Buscamos la traducción en el diccionario
        if (traducciones.hasOwnProperty(palabra)) {
            // Mostramos la traducción
            document.write("La traducción de '" + palabra + "' es '" + traducciones[palabra] + "'.<br>");
        } else {
            // Mostramos un mensaje de error si la palabra no está en el diccionario
            document.write("Palabra no encontrada en el diccionario.<br>");
        }
    }
}

// Llamamos a la función para iniciar el proceso
traducirPalabra();