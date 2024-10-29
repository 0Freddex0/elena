const intentosSpan = document.getElementById('intentos');
const numeroInput = document.getElementById('numeroInput');
const lanzarDadoBtn = document.getElementById('lanzarDado');
const reiniciarBtn = document.getElementById('reiniciar');
const images = document.querySelectorAll('#dado img');
let intentos = 0;
const maxIntentos = 6;

lanzarDadoBtn.addEventListener('click', () => {
    if (intentos < maxIntentos) {
        const numeroUsuario = parseInt(numeroInput.value);
        const numeroDado = Math.floor(Math.random() * 6) + 1;

        // Mostrar la imagen del dado
        images.forEach(img => img.style.display = 'none');
        images[numeroDado - 1].style.display = 'block';

        // Incrementar intentos
        intentos++;
        intentosSpan.textContent = intentos;

        // Verificar si el usuario ganó
        if (numeroUsuario === numeroDado) {
            alert('¡Ganaste! El número era: ' + numeroDado);
            reiniciarJuego();
        } else if (intentos === maxIntentos) {
            alert('Has agotado tus intentos. El número era: ' + numeroDado);
            reiniciarJuego();
        }
    }
});

function reiniciarJuego() {
    intentos = 0;
    intentosSpan.textContent = intentos;
    numeroInput.value = '';
    images.forEach(img => img.style.display = 'none');
    lanzarDadoBtn.style.display = 'none';
    reiniciarBtn.style.display = 'inline';
}

reiniciarBtn.addEventListener('click', () => {
    reiniciarJuego();
    lanzarDadoBtn.style.display = 'inline';
    reiniciarBtn.style.display = 'none';
});
