// Array para almacenar los productos
let productos = [];

// Elementos del DOM
const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const productQuantityInput = document.getElementById('product-quantity');
const productCategorySelect = document.getElementById('product-category');
const productTableBody = document.querySelector('#product-table tbody');
const emptyInventoryMessage = document.getElementById('empty-inventory-message');

// Clave para localStorage
const LOCAL_STORAGE_KEY = 'inventario-productos';

/**
 * Carga los productos desde localStorage al iniciar la página.
 */
function cargarDesdeLocalStorage() {
    const productosJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (productosJSON) {
        productos = JSON.parse(productosJSON);
    }
    mostrarProductos(); // Mostrar los productos cargados
}

/**
 * Guarda el array de productos en localStorage.
 */
function guardarEnLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productos));
}

/**
 * Muestra los productos en la tabla HTML.
 */
function mostrarProductos() {
    productTableBody.innerHTML = ''; // Limpiar la tabla antes de renderizar
    if (productos.length === 0) {
        emptyInventoryMessage.classList.remove('hidden');
        productTableBody.classList.add('hidden'); // Ocultar tabla si no hay productos
    } else {
        emptyInventoryMessage.classList.add('hidden');
        productTableBody.classList.remove('hidden'); // Mostrar tabla si hay productos
        productos.forEach(producto => {
            const row = productTableBody.insertRow();
            row.dataset.id = producto.id; // Almacenar el ID en el dataset de la fila

            row.insertCell().textContent = producto.nombre;
            row.insertCell().textContent = producto.cantidad;
            row.insertCell().textContent = producto.categoria;

            const accionesCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-button');
            // Añadir el evento click al botón de eliminar
            deleteButton.onclick = () => eliminarProducto(producto.id);
            accionesCell.appendChild(deleteButton);
        });
    }
}

/**
 * Agrega un nuevo producto al inventario.
 * @param {Event} event - El evento de envío del formulario.
 */
function agregarProducto(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener valores y limpiar espacios en blanco
    const nombre = productNameInput.value.trim();
    const cantidad = parseInt(productQuantityInput.value);
    const categoria = productCategorySelect.value;

    // Validación básica de campos
    if (!nombre || isNaN(cantidad) || cantidad < 1 || !categoria) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Crear objeto producto con ID único y fecha
    const nuevoProducto = {
        id: Date.now(), // ID único basado en la marca de tiempo
        nombre: nombre,
        cantidad: cantidad,
        categoria: categoria,
        fecha: new Date().toISOString() // Fecha de adición
    };

    productos.push(nuevoProducto); // Agregar el nuevo producto al array
    guardarEnLocalStorage(); // Guardar en localStorage
    mostrarProductos(); // Actualizar la vista

    // Limpiar el formulario
    productForm.reset();
    productCategorySelect.value = ''; // Resetear select a opción vacía
    productNameInput.focus(); // Volver el foco al campo de nombre
}

/**
 * Elimina un producto del inventario por su ID.
 * @param {number} id - El ID único del producto a eliminar.
 */
function eliminarProducto(id) {
    // Filtrar el array para remover el producto con el ID dado
    productos = productos.filter(producto => producto.id !== id);
    guardarEnLocalStorage(); // Guardar cambios en localStorage
    mostrarProductos(); // Actualizar la vista
}

// Event Listeners
document.addEventListener('DOMContentLoaded', cargarDesdeLocalStorage); // Cargar productos al cargar la página
productForm.addEventListener('submit', agregarProducto); // Escuchar el envío del formulario