// Generar y mostrar 10 números aleatorios entre 0 y 20
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 21); // Genera un número entre 0 y 20 (incluidos)
    console.log("Número aleatorio " + (i + 1) + ": " + numeroAleatorio);
}
