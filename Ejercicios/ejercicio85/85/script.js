function cambiarEstilo() {
    const parrafo = document.getElementById('miParrafo');
    parrafo.style.color = 'blue'; // Cambiar el color del texto
    parrafo.style.fontSize = '24px'; // Cambiar el tamaño de la letra
    
    // Efecto de confeti con más partículas
    confetti({
        particleCount: 800, // Aumentar el número de partículas
        spread: 800,
        origin: { y: 0.6 }
    });
}

function restablecerEstilo() {
    const parrafo = document.getElementById('miParrafo');
    parrafo.style.color = 'black'; // Restablecer el color del texto
    parrafo.style.fontSize = '16px'; // Restablecer el tamaño de la letra
}
