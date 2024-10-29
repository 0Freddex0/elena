// Referencia al elemento caja
const caja = document.getElementById('caja');

// Variables para controlar la posición de la caja
let topPosition = caja.offsetTop;
let leftPosition = caja.offsetLeft;

// Distancia de desplazamiento
const step = 10;

// Función para manejar el evento de pulsación de tecla
function moverCaja(event) {
    switch(event.key) {
        case "ArrowUp":
        case "8": // NumPad Up
            topPosition -= step;
            break;
        case "ArrowDown":
        case "2": // NumPad Down
            topPosition += step;
            break;
        case "ArrowLeft":
        case "4": // NumPad Left
            leftPosition -= step;
            break;
        case "ArrowRight":
        case "6": // NumPad Right
            leftPosition += step;
            break;
    }

    // Aplicar los nuevos valores de posición a la caja
    caja.style.top = topPosition + 'px';
    caja.style.left = leftPosition + 'px';
}

// Asignar el evento 'keydown' a la ventana
window.addEventListener('keydown', moverCaja);
