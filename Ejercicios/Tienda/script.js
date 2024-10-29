// Variables globales
let carrito = [];
let nombreUsuario = "";

// Función que se ejecuta al cargar la página
function iniciar() {
    document.getElementById('mensaje').style.display = 'none';  // Ocultamos el mensaje de bienvenida
    document.getElementById('escaparate').style.display = 'none';  // Ocultamos el escaparate
}

// Función para validar el nombre y mostrar el escaparate
function entrar() {
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() !== "") {
        nombreUsuario = nombre;
        document.getElementById('mensaje').innerText = `¡Bienvenido, ${nombreUsuario}!`;
        document.getElementById('mensaje').style.display = 'block';  // Mostramos el mensaje de bienvenida
        document.getElementById('escaparate').style.display = 'block';  // Mostramos el escaparate
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para agregar productos al carrito
function comprar(boton) {
    const producto = boton.parentNode.querySelector('.nombreProducto').innerText;
    const cantidad = boton.parentNode.querySelector('input[type="number"]').value;
    carrito.push({ producto, cantidad });
    alert(`${cantidad} x ${producto} ha sido añadido al carrito.`);
}

// Función para ver el carrito
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let listaCarrito = "Productos en el carrito:\n";
        carrito.forEach(item => {
            listaCarrito += `${item.cantidad} x ${item.producto}\n`;
        });
        alert(listaCarrito);
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    alert("El carrito ha sido vaciado.");
}
