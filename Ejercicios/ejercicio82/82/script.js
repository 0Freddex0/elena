function mostrarDatos() {
    // Capturamos los valores de los inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Mostramos los datos en el párrafo
    const output = document.getElementById('output');
    output.textContent = `Nombre de usuario: ${username}, Contraseña: ${password}`;
    
    // Añadimos la clase para mostrar el párrafo
    output.classList.add('show');
}
