// Definición del array de letras para el cálculo
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
              'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
              'H', 'L', 'C', 'K', 'E', 'T'];

// Se almacenan el número de DNI y la letra proporcionada por el usuario
var numeroDNI = prompt("Introduce el número de DNI (sin la letra):");
var letraDNI = prompt("Introduce la letra del DNI:").toUpperCase();

// Convertimos el número introducido a un entero para evitar problemas de comparación
numeroDNI = parseInt(numeroDNI);

// Comprobamos si el número de DNI está fuera de los límites permitidos
if (numeroDNI < 0 || numeroDNI > 99999999) {
    console.log("El número proporcionado no es válido.");
} else {
    // Calculamos la letra correspondiente al número de DNI
    var letraCalculada = letras[numeroDNI % 23];

    // Comparamos la letra calculada con la letra proporcionada
    if (letraCalculada !== letraDNI) {
        console.log("La letra que has indicado no es correcta.");
    } else {
        console.log("El número y la letra de DNI son correctos.");
    }
}
