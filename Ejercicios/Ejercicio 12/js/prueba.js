// Función para calcular el factorial
function calcularFactorial(n) {
    if (n < 0) return "Error: El factorial no está definido para números negativos.";
    if (n === 0 || n === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función para pedir y validar el número
function pedirNumero() {
    let entrada = prompt("Introduce un número para calcular su factorial:");

    // Convertimos la entrada a número
    let numero = Number(entrada);

    // Verificamos si la entrada es un número válido
    if (isNaN(numero)) {
        document.write("Error: Introduce un valor numérico.");
    } else {
        // Calculamos el factorial y mostramos el resultado
        let resultado = calcularFactorial(numero);
        document.write("El factorial de " + numero + " es " + resultado + ".");
    }
}

// Llamamos a la función para iniciar el proceso
pedirNumero();