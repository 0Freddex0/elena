let palabrasCas = ["Hola", "Adiós"];
let palabrasEusk = ["Kaixo", "Agur"];

console.log("Palabras cas: " + palabrasCas);
console.log("Palabras cas de una en una:");

for (let i = 0; i < palabrasCas.length; i++) {
    console.log(palabrasCas[i]);
}

console.log("Palabras cas de una en una otra forma:");

for (let index in palabrasCas) {
    console.log(palabrasCas[index]);
}

console.log("Palabras cas de una en una 3. otra forma:");

for (let palabra of palabrasCas) {
    console.log(palabra);
}

/* Pedimos a la persona usuaria una palabra en castellano */
/* Si está en nuestro array sacaremos su traducción al euskera */
/* Si no está, sacaremos un mensaje indicando que no está */

// Pedimos al usuario una palabra en castellano
let palabraInput = prompt("Introduce una palabra en castellano:");

let index = palabrasCas.indexOf(palabraInput); // Buscamos la palabra en el array

if (index !== -1) {
    // Si la palabra está en el array, mostramos su traducción
    console.log("La traducción de '" + palabraInput + "' al euskera es: " + palabrasEusk[index]);
} else {
    // Si la palabra no está, mostramos un mensaje
    console.log("La palabra '" + palabraInput + "' no está en nuestro diccionario.");
}

