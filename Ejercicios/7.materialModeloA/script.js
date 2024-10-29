let selected = null;  // Aquí guardamos el icono seleccionado
let tries = 0;  // Contador de intentos
let correct = 0;  // Contador de coincidencias
const maxTries = 6;  // Máximo de intentos
const totalIcons = document.querySelectorAll('#iconos li').length;  // Total de iconos
const attemptsCounter = document.querySelector('footer span');  // Donde se muestra el número de intentos
const showSolutionBtn = document.getElementById('verSolucion');  // Botón para ver la solución

// Seleccionar iconos
const iconList = document.querySelectorAll('#iconos li');
for (let i = 0; i < iconList.length; i++) {
    iconList[i].addEventListener('click', function() {
        // Resaltar el icono seleccionado
        if (selected) {
            selected.classList.remove('selected');  // Quitar la selección del anterior
        }
        selected = this;  // Guardar el icono seleccionado
        selected.classList.add('selected');  // Marcarlo como seleccionado
    });
}

// Seleccionar palabras
const wordList = document.querySelectorAll('#palabras li');
for (let j = 0; j < wordList.length; j++) {
    wordList[j].addEventListener('click', function() {
        if (selected) {  // Solo si hay un icono seleccionado
            const wordSelected = this.getAttribute('data-palabra');  // Obtener la palabra seleccionada
            const iconWord = selected.querySelector('img').getAttribute('data-palabra');  // Obtener la palabra del icono

            // Comprobar si coinciden
            if (wordSelected === iconWord) {
                alert('¡Correcto!');  // Mensaje si es correcto
                correct++;  // Incrementar el contador de aciertos
                removeSelection(selected, this);  // Función para quitar la selección correcta (asumida)
            } else {
                alert('Incorrecto. Intenta otra vez.');  // Mensaje si no coincide
            }

            tries++;  // Aumentar el número de intentos
            attemptsCounter.textContent = tries;  // Actualizar el contador en pantalla

            // Limpiar selección
            selected.classList.remove('selected');  // Quitar el resalte del icono
            selected = null;  // Limpiar la variable de selección

            // Verificar si ganó
            if (correct === totalIcons) {
                alert('¡Felicidades, ganaste!');  // Mensaje de victoria
                resetGame();  // Reiniciar juego
            }

            // Comprobar si se acabaron los intentos
            if (tries >= maxTries) {
                alert('Se acabaron los intentos.');  // Mensaje de fin de intentos
                resetGame();  // Reiniciar juego
            }
        }
    });
}

// Botón para ver la solución
showSolutionBtn.addEventListener('click', function() {
    for (let k = 0; k < iconList.length; k++) {
        const iconWord = iconList[k].querySelector('img').getAttribute('data-palabra');  // Obtener la palabra del icono

        for (let l = 0; l < wordList.length; l++) {
            const wordText = wordList[l].getAttribute('data-palabra');  // Obtener la palabra de la lista
            if (iconWord === wordText) {
                const wordClone = wordList[l].cloneNode(true);  // Clonar la palabra
                wordList[l].remove();  // Borrar la palabra original
                iconList[k].appendChild(wordClone);  // Añadir la palabra al icono
            }
        }
    }

    disableClicks();  // Deshabilitar interacciones después de mostrar solución
});

// Deshabilitar interacciones
function disableClicks() {
    const allElements = document.querySelectorAll('#iconos li, #palabras li');
    for (let m = 0; m < allElements.length; m++) {
        allElements[m].style.pointerEvents = 'none';  // Deshabilitar clics
    }
    showSolutionBtn.disabled = true;  // Deshabilitar el botón
}

// Reiniciar el juego
function resetGame() {
    location.reload();  // Recargar la página
}
