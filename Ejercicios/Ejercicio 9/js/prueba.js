// Contraseña almacenada (puedes cambiarla)
var contrasenaCorrecta = "miContrasenaSegura";

// Función para pedir y validar la contraseña
function pedirContrasena() {
    var contrasena;
    do {
        // Pedimos la contraseña al usuario
        contrasena = prompt("Introduce la contraseña de acceso:");

        // Comprobamos si la contraseña es correcta
        if (contrasena === contrasenaCorrecta) {
            alert("Bienvenido, acceso concedido.");
            break; // Si la contraseña es correcta, salimos del bucle
        } else {
            alert("Contraseña incorrecta, inténtalo de nuevo.");
        }

    } while (true); // Sigue pidiendo hasta que sea la contraseña correcta
}

// Llamamos a la función para iniciar el proceso
pedirContrasena();
