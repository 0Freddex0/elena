let preguntas = [
    { 
        pregunta: "1. ¿Qué sabe hacer un desarrollador front?",
        opciones: ["Solo Front-end", "Solo Back-end", "Ambos", "Ninguno"],
        correcta: 0 // Índice de la respuesta correcta
    },
    { 
        pregunta: "2. ¿Qué lenguaje sirve para hacer front?",
        opciones: ["Javascript", "PHP", "CSS3", "HTML5"],
        correcta: 0 
    },
    { 
        pregunta: "3. ¿Qué lenguaje es interpretado por el navegador?",
        opciones: ["Java", "Javascript", "PHP", "Cobol"],
        correcta: 1 
    },
    { 
        pregunta: "4. ¿Cómo se llama la forma de programar que cuida que tu código sea legible y entendible?",
        opciones: ["Clean Code", "Good Code", "Top Code", "Easy Code"],
        correcta: 0 
    },
    { 
        pregunta: "5. ¿Por qué nombre se conoce el último estándar de Javascript?",
        opciones: ["ES6, ES2015", "ES6", "Ni ES6 ni ES2015", "ES2015"],
        correcta: 0 
    }
];

let intento = 0;
let resultados = []; // Array para almacenar los resultados de los intentos

function iniciar() {
    // Ocultar secciones al iniciar
    document.getElementById("test").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("correctAnswersContainer").style.display = "none";
}

function empezar() {
    // Reinicia y oculta el contenedor de respuestas correctas
    document.getElementById("correctAnswersContainer").style.display = "none";

    const testSection = document.getElementById("test");
    testSection.style.display = "block";
    document.getElementById("controls").style.display = "block";

    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = "";
    intento++; // Incrementa el contador de intentos al comenzar un nuevo intento

    preguntas.forEach((preguntaObj, index) => {
        const opcionesHTML = preguntaObj.opciones.map((opcion, i) => `
            <div>
                <input type="radio" id="respuesta${index}${i}" name="respuesta${index}" value="${i}">
                <label for="respuesta${index}${i}">${opcion}</label>
            </div>
        `).join('');

        questionsContainer.innerHTML += `
            <div>
                <label>${preguntaObj.pregunta}</label><br>
                ${opcionesHTML}
            </div>
        `;
    });
}

function comprobar() {
    let correctas = 0;
    let respuestasValidas = true;

    preguntas.forEach((preguntaObj, index) => {
        const respuesta = document.querySelector(`input[name="respuesta${index}"]:checked`);
        if (respuesta) {
            if (respuesta.value == preguntaObj.correcta) {
                correctas++;
            }
        } else {
            respuestasValidas = false; // No se ha seleccionado respuesta
        }
    });

    if (!respuestasValidas) {
        alert("Por favor, selecciona una respuesta para cada pregunta.");
        return; // Salir de la función si hay respuestas no seleccionadas
    }

    // Guarda el resultado del intento en el array
    resultados.push(correctas);
    
    // Actualiza la tabla con el resultado del intento
    const resultsBody = document.getElementById("resultsBody");
    resultsBody.innerHTML += `
        <tr>
            <td>${intento}</td>
            <td>${correctas}/${preguntas.length}</td>
        </tr>
    `;

    // Verifica si es el mejor resultado
    const mejorResultado = document.getElementById("bestResult");
    if (!mejorResultado.innerText || correctas > parseInt(mejorResultado.innerText.split('/')[0])) {
        mejorResultado.innerText = `${correctas}/${preguntas.length}`;
    }

    alert(`Has respondido correctamente ${correctas} de ${preguntas.length} preguntas.`);

    // Verifica si se lograron 5 aciertos
    if (correctas === preguntas.length) {
        lanzarConfeti(); // Llama a la función para mostrar confeti (defínela según tu necesidad)
    }
}

function reintentar() {
    iniciar(); // Reinicia el cuestionario
    document.getElementById("startButton").click(); // Vuelve a iniciar
}

// Funciones para el cronómetro
const timer = new Timer();
document.querySelector('#chronoExample .startButton').addEventListener('click', () => {
    timer.start();
});

document.querySelector('#chronoExample .pauseButton').addEventListener('click', () => {
    timer.pause();
});

document.querySelector('#chronoExample .stopButton').addEventListener('click', () => {
    timer.stop();
});

document.querySelector('#chronoExample .resetButton').addEventListener('click', () => {
    timer.reset();
});

timer.addEventListener('secondsUpdated', () => {
    document.querySelector('#chronoExample .values').innerHTML = timer.getTimeValues().toString();
});

timer.addEventListener('started', () => {
    document.querySelector('#chronoExample .values').innerHTML = timer.getTimeValues().toString();
});

timer.addEventListener('reset', () => {
    document.querySelector('#chronoExample .values').innerHTML = timer.getTimeValues().toString();
});

function rendirse() {
    // Mostrar una alerta de confirmación antes de mostrar las respuestas correctas
    if (confirm("¿Estás seguro de que te quieres rendir?")) {
        // Si el usuario confirma que quiere rendirse, mostrar una alerta motivacional
        alert("OHHHHHHHHHHHH!!!!!!!!!!!!! Bueno, la próxima te saldrá mejor seguro.");

        // Marcar las respuestas correctas en verde
        preguntas.forEach((preguntaObj, index) => {
            const correctAnswerLabel = document.querySelector(`input[name="respuesta${index}"][value="${preguntaObj.correcta}"] + label`);
            if (correctAnswerLabel) {
                correctAnswerLabel.style.color = 'green'; // Cambiamos el color a verde
                correctAnswerLabel.style.fontWeight = 'bold'; // Hacemos la fuente en negrita
            }
        });
    } else {
        // Si el usuario cancela la acción de rendirse, muestra la alerta motivacional
        alert("¡Así me gusta! Nunca gana quien no lo intenta.");
    }
}

function lanzarConfeti() {
    // Aquí puedes implementar la lógica para mostrar confeti si lo deseas.
    alert("¡Felicidades! Has respondido todas las preguntas correctamente.");
}

// Establece un tiempo para el cronómetro (opcional)
var end = Date.now() + (15 * 1000);
var colors = ['#bb0000', '#ffffff'];
