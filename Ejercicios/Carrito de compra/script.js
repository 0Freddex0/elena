// Función para actualizar el precio de un producto según la cantidad seleccionada
function actualizarProducto(button) {
    let productContainer = button.parentElement; // Contenedor del producto
    let precioElemento = productContainer.querySelector('.precio'); // Elemento del precio base
    let cantidadElemento = productContainer.querySelector('input[name="cantidad"]'); // Elemento de la cantidad
    let precioActualizadoElemento = productContainer.querySelector('.precioActualizado'); // Elemento para el precio actualizado

    let precioBase = parseFloat(precioElemento.textContent);
    let cantidad = parseInt(cantidadElemento.value);

    let precioActualizado = precioBase * cantidad;
    precioActualizadoElemento.textContent = precioActualizado; // Actualizar el precio en la interfaz

    // Mostrar alerta indicando que el precio del producto se ha actualizado
    alert(`Precio de ${productContainer.querySelector('.nombreProducto').textContent} actualizado a ${precioActualizado}€`);
}

// Función para eliminar productos seleccionados del carrito
function eliminarSeleccionados() {
    let productos = document.querySelectorAll('#Productos p');
    productos.forEach(producto => {
        let checkbox = producto.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            producto.remove(); // Eliminar el producto si está seleccionado
        }
    });

    // Actualizar el total
    actualizarTotal();
}

// Función para calcular y actualizar el total a pagar en el carrito
function actualizarTotal() {
    let total = 0;
    let preciosActualizados = document.querySelectorAll('.precioActualizado');

    preciosActualizados.forEach(precioElemento => {
        total += parseFloat(precioElemento.textContent);
    });

    // Actualizar el total en el elemento correspondiente del HTML
    document.getElementById('TotalAPagar').textContent = total;

    // Mostrar una alerta indicando que el precio total ha sido actualizado
    alert('Precio total actualizado');
}

// Función para vaciar el carrito, eliminando todos los productos
function vaciarCarrito() {
    let productos = document.querySelector('#Productos');
    productos.innerHTML = ''; // Eliminar todos los productos del contenedor

    // Actualizar el total a 0
    actualizarTotal();
}
