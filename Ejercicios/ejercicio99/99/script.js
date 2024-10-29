window.onload = function() {
    // Obtener todos los enlaces en la página
    const enlaces = document.getElementsByTagName('a');
    const numEnlaces = enlaces.length;

    // Obtener el penúltimo enlace
    const penultimoEnlace = numEnlaces > 1 ? enlaces[numEnlaces - 2].href : 'No hay enlaces suficientes';

    // Contar enlaces que apuntan a Google
    const numEnlacesGoogle = Array.from(enlaces).filter(enlace => enlace.href.includes('google')).length;

    // Contar enlaces en el tercer párrafo
    const tercerParrafo = document.getElementsByTagName('p')[2];
    const numEnlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;

    // Mostrar la información en el div
    const informDiv = document.getElementById('inform');
    informDiv.innerHTML = `
        <strong>Números de enlaces de la página:</strong> ${numEnlaces}<br>
        <strong>Dirección donde apunta el penúltimo enlace:</strong> ${penultimoEnlace}<br>
        <strong>Número de enlaces que apuntan a Google:</strong> ${numEnlacesGoogle}<br>
        <strong>Número de enlaces del tercer párrafo:</strong> ${numEnlacesTercerParrafo}
    `;
}
