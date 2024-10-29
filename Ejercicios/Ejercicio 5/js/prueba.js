// Pedimos la edad al usuario
var edad = prompt("Por favor, introduce tu edad:");

// Convertimos la entrada a número
edad = Number(edad);

// Comprobamos si la edad es válida y mostramos el mensaje correspondiente
if (edad < 18) {
    console.log("Eres menor de edad, porque tienes " + edad + " años.");
} else {
    console.log("Eres mayor de edad, porque tienes " + edad + " años.");
}
