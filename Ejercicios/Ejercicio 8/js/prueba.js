// Función para pedir y validar un número
function pedirNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        // Validamos si el valor introducido es un número positivo o 0
        if (numero === null || numero.trim() === "") {
            alert("Por favor, introduce un valor.");
        } else if (isNaN(numero)) {
            alert("Por favor, introduce un número válido.");
        } else if (Number(numero) < 0) {
            alert("Por favor, introduce un número positivo o cero.");
        } else {
            return Number(numero);
        }
    } while (true);
}

// Pedimos los tres números al usuario
let num1 = pedirNumero("Introduce el primer número:");
let num2 = pedirNumero("Introduce el segundo número:");
let num3 = pedirNumero("Introduce el tercer número:");

// Calculamos el número mayor
let mayor = Math.max(num1, num2, num3);

// Mostramos el mensaje con el número mayor
document.write("El número mayor entre " + num1 + ", " + num2 + ", y " + num3 + " es el " + mayor + ".");
