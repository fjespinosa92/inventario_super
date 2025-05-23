// Array que contendrá los productos del hogar.
// Se inicializa con una lista predefinida basada en tu universo de compras.
// Cada producto ahora incluye:
// - id: Identificador único
// - nombre: Nombre del producto
// - categoria: Categoría a la que pertenece
// - necesitoComprar: Booleano que indica si se necesita comprar (true) o no (false)
// - ultimaCompra: Marca de tiempo de la última vez que se "desmarcó" (compró) el producto
let productos = [
    // Lácteos
    { id: 1, nombre: "Leche deslactosada", categoria: "Lácteos", necesitoComprar: false, ultimaCompra: null },
    { id: 2, nombre: "Jocoque", categoria: "Lácteos", necesitoComprar: false, ultimaCompra: null },
    { id: 3, nombre: "Queso oaxaca", categoria: "Lácteos", necesitoComprar: false, ultimaCompra: null },
    { id: 4, nombre: "Yogurt Griego", categoria: "Lácteos", necesitoComprar: false, ultimaCompra: null },

    // Carnes
    { id: 5, nombre: "Pechuga de pavo kirkland", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 6, nombre: "Salmón", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 7, nombre: "Pescado Blanco", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 8, nombre: "Pechuga de pavo sin sal", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 9, nombre: "Bistec", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 10, nombre: "Carne molida", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 11, nombre: "Pollo", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },
    { id: 12, nombre: "Milanesa de pechuga de pollo", categoria: "Carnes", necesitoComprar: false, ultimaCompra: null },

    // Frutas
    { id: 13, nombre: "Manzanas", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 14, nombre: "Piña", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 15, nombre: "Aguacate", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 16, nombre: "Naranja", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 17, nombre: "Durazno", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 18, nombre: "Limón", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 19, nombre: "Fruto del monje", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 20, nombre: "Dátil", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },
    { id: 21, nombre: "Manzana granny smith", categoria: "Frutas", necesitoComprar: false, ultimaCompra: null },

    // Verduras
    { id: 22, nombre: "Cebolla", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 23, nombre: "Edamames", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 24, nombre: "Arúgula", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 25, nombre: "Espinacas", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 26, nombre: "Jitómate Cherry", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 27, nombre: "Jitómate", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 28, nombre: "Champiñones", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 29, nombre: "Espárragos", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 30, nombre: "Pepino", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 31, nombre: "Nopales", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 32, nombre: "Calabacita", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 33, nombre: "Chile serrano", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 34, nombre: "Tomate verde sin cáscara", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 35, nombre: "Ajo", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 36, nombre: "Cilantro", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 37, nombre: "Calabaza japonesa", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },
    { id: 38, nombre: "Nopal cambray", categoria: "Verduras", necesitoComprar: false, ultimaCompra: null },

    // Panadería
    { id: 39, nombre: "Pan Integral", categoria: "Panadería", necesitoComprar: false, ultimaCompra: null },
    { id: 40, nombre: "Tortillas", categoria: "Panadería", necesitoComprar: false, ultimaCompra: null },
    { id: 41, nombre: "Pan de masa madre", categoria: "Panadería", necesitoComprar: false, ultimaCompra: null },
    { id: 42, nombre: "Tostadas de nopal", categoria: "Panadería", necesitoComprar: false, ultimaCompra: null },

    // Alacena
    { id: 43, nombre: "Quinoa", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 44, nombre: "Avena", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 45, nombre: "Salmas", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 46, nombre: "Tortillas de harina", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 47, nombre: "Honey Bran", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 48, nombre: "Almendra", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 49, nombre: "Crema de Cacahuate", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 50, nombre: "Crema de Almendra", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 51, nombre: "Granos ancestrales", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 52, nombre: "Galleta María", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 53, nombre: "Cápsulas de Nespresso", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 54, nombre: "Salsa Valentina", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 55, nombre: "Aceite de Oliva", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 56, nombre: "Sal de Mar", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 57, nombre: "Quinoa de estado natural", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 58, nombre: "Aceite de aguacate", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 59, nombre: "Fresas congeladas", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 60, nombre: "Pepita", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 61, nombre: "Barra de granola", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 62, nombre: "Vinagre", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 63, nombre: "Chocolate amargo turin", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 64, nombre: "Barritas de granola", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 65, nombre: "Botana de estado natural", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 66, nombre: "Kilo de granola", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },
    { id: 67, nombre: "Palomitas Slim Pop", categoria: "Alacena", necesitoComprar: false, ultimaCompra: null },

    // Limpieza
    { id: 68, nombre: "Limpiador refri", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 69, nombre: "Cloro", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 70, nombre: "Desodorante para casa", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 71, nombre: "Bolsas de basura", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 72, nombre: "Fabuloso", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 73, nombre: "Salvo", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 74, nombre: "Suavitel", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 75, nombre: "Salvo te salva", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 76, nombre: "Más Color", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 77, nombre: "Jabón Roma", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 78, nombre: "Jabón de Trastes", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 79, nombre: "Klines", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 80, nombre: "Papel de baño", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 81, nombre: "Esponja lavatrastes", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 82, nombre: "Toallitas cloro", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },
    { id: 83, nombre: "Vanish", categoria: "Limpieza", necesitoComprar: false, ultimaCompra: null },

    // Bebidas
    { id: 84, nombre: "Chelas", categoria: "Bebidas", necesitoComprar: false, ultimaCompra: null },

    // Otros (Cuidado Personal, Utensilios, Varios)
    { id: 85, nombre: "Pinzas cocina", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 86, nombre: "Algodón", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 87, nombre: "Desodorante para gimnasio", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 88, nombre: "Huevo", categoria: "Otros", necesitoComprar: false, ultimaCompra: null }, // Aunque es alimento, por su categoría original (desglosada) y a veces se agrupa diferente
    { id: 89, nombre: "Brintellix", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 90, nombre: "Proteína de Vainilla", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 91, nombre: "Filtro Pure-it", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 92, nombre: "Nespresso", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 93, nombre: "Yi", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 94, nombre: "Gel", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 95, nombre: "Cepillos de dientes", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 96, nombre: "Pasta de dientes", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 97, nombre: "Crema", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 98, nombre: "Cotonetes", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 99, nombre: "Crema de cuerpo", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 100, nombre: "Perillas", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 101, nombre: "Cepillos para lavar cacas", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 102, nombre: "Velas nuevas", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 103, nombre: "Foco de la cocina", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 104, nombre: "Tendedero", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 105, nombre: "Bloqueador", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 106, nombre: "Suero Cara", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 107, nombre: "Jabón para Cara", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 108, nombre: "Shampoo", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 109, nombre: "Tapetes desechables", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 110, nombre: "Gel xiomara", categoria: "Otros", necesitoComprar: false, ultimaCompra: null },
    { id: 111, nombre: "Banco de cocina", categoria: "Otros", necesitoComprar: false, ultimaCompra: null }
];


// Elementos del DOM
const productTableBody = document.querySelector('#product-table tbody');
const shoppingListTableBody = document.querySelector('#shopping-list-table tbody');
const emptyProductMessage = document.getElementById('empty-product-message');
const emptyShoppingListMessage = document.getElementById('empty-shopping-list-message');
const clearShoppingListBtn = document.getElementById('clear-shopping-list-btn');

// Clave para localStorage
const LOCAL_STORAGE_KEY = 'lista-compras-hogar';

/**
 * Carga los productos desde localStorage al iniciar la página.
 * Si no hay datos guardados, usa la lista predefinida.
 */
function cargarDesdeLocalStorage() {
    const productosJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (productosJSON) {
        // Si hay datos en localStorage, los parseamos
        productos = JSON.parse(productosJSON);
    } else {
        // Si no hay datos guardados, inicializamos localStorage con la lista predefinida
        guardarEnLocalStorage();
    }
    mostrarProductos(); // Mostrar todos los productos
    mostrarListaDeCompras(); // Mostrar la lista de compras actual
}

/**
 * Guarda el array de productos en localStorage.
 */
function guardarEnLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productos));
}

/**
 * Formatea un timestamp (marca de tiempo) a una fecha legible.
 * @param {number|null} timestamp - La marca de tiempo en milisegundos o null.
 * @returns {string} La fecha formateada o "Nunca".
 */
function formatearFecha(timestamp) {
    if (!timestamp) {
        return "Nunca";
    }
    const date = new Date(timestamp);
    // Formato: DD/MM/YYYY
    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses son de 0-11
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    // Formato más amigable (ej: 22 de mayo de 2025)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

/**
 * Muestra todos los productos habituales en la tabla principal.
 */
function mostrarProductos() {
    productTableBody.innerHTML = ''; // Limpiar la tabla antes de renderizar

    if (productos.length === 0) {
        emptyProductMessage.classList.remove('hidden');
        productTableBody.classList.add('hidden');
        return;
    } else {
        emptyProductMessage.classList.add('hidden');
        productTableBody.classList.remove('hidden');
    }

    // Ordenar productos alfabéticamente por categoría y luego por nombre
    const productosOrdenados = [...productos].sort((a, b) => {
        if (a.categoria < b.categoria) return -1;
        if (a.categoria > b.categoria) return 1;
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });


    productosOrdenados.forEach(producto => {
        const row = productTableBody.insertRow();
        row.dataset.id = producto.id; // Almacenar el ID en el dataset de la fila

        // Añadir clase para resaltar si el producto necesita ser comprado
        if (producto.necesitoComprar) {
            row.classList.add('needs-buying');
        }

        row.insertCell().textContent = producto.nombre;
        row.insertCell().textContent = producto.categoria;

        // Celda para el checkbox "¿Necesito Comprar?"
        const checkboxCell = row.insertCell();
        checkboxCell.classList.add('text-center'); // Centrar el contenido
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('buy-checkbox-container');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('buy-checkbox');
        checkbox.checked = producto.necesitoComprar; // Establecer el estado del checkbox
        checkbox.onchange = () => toggleNecesitoComprar(producto.id); // Evento al cambiar
        checkboxContainer.appendChild(checkbox);
        checkboxCell.appendChild(checkboxContainer);

        // Celda para "Última Compra"
        row.insertCell().textContent = formatearFecha(producto.ultimaCompra);
    });
}

/**
 * Muestra los productos que se necesitan comprar en la tabla de la lista de compras.
 */
function mostrarListaDeCompras() {
    shoppingListTableBody.innerHTML = ''; // Limpiar la tabla antes de renderizar
    const productosPorComprar = productos.filter(p => p.necesitoComprar);

    if (productosPorComprar.length === 0) {
        emptyShoppingListMessage.classList.remove('hidden');
        shoppingListTableBody.classList.add('hidden');
        clearShoppingListBtn.classList.add('hidden'); // Ocultar botón si la lista está vacía
    } else {
        emptyShoppingListMessage.classList.add('hidden');
        shoppingListTableBody.classList.remove('hidden');
        clearShoppingListBtn.classList.remove('hidden'); // Mostrar botón si hay productos

        // Ordenar productos por comprar alfabéticamente por categoría y luego por nombre
        const productosOrdenados = [...productosPorComprar].sort((a, b) => {
            if (a.categoria < b.categoria) return -1;
            if (a.categoria > b.categoria) return 1;
            if (a.nombre < b.nombre) return -1;
            if (a.nombre > b.nombre) return 1;
            return 0;
        });

        productosOrdenados.forEach(producto => {
            const row = shoppingListTableBody.insertRow();
            row.dataset.id = producto.id; // Almacenar el ID en el dataset de la fila

            row.insertCell().textContent = producto.nombre;
            row.insertCell().textContent = producto.categoria;

            // Celda para el checkbox "¿Ya Comprado?"
            const checkboxCell = row.insertCell();
            checkboxCell.classList.add('text-center'); // Centrar el contenido
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('buy-checkbox-container');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('buy-checkbox');
            checkbox.checked = true; // Siempre marcado en esta tabla porque significa "por comprar"
            checkbox.onchange = () => toggleNecesitoComprar(producto.id); // Evento al cambiar
            checkboxContainer.appendChild(checkbox);
            checkboxCell.appendChild(checkboxContainer);
        });
    }
}

/**
 * Cambia el estado 'necesitoComprar' de un producto y actualiza su 'ultimaCompra' si se desmarca.
 * @param {number} id - El ID del producto.
 */
function toggleNecesitoComprar(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto.necesitoComprar = !producto.necesitoComprar; // Cambiar el estado

        // Si se desmarca (es decir, ya se compró), actualizar ultimaCompra
        if (!producto.necesitoComprar) {
            producto.ultimaCompra = Date.now(); // Establecer la fecha actual
        }
        guardarEnLocalStorage();    // Guardar los cambios
        mostrarProductos();         // Actualizar la tabla principal
        mostrarListaDeCompras();    // Actualizar la lista de compras
    }
}

/**
 * Desmarca todos los productos de la lista de compras actual y actualiza su última compra.
 */
function clearShoppingList() {
    if (confirm('¿Estás seguro de que quieres marcar todos los productos como comprados? Esto vaciará tu lista de compras actual.')) {
        productos.forEach(p => {
            if (p.necesitoComprar) {
                p.necesitoComprar = false;
                p.ultimaCompra = Date.now(); // Actualizar la fecha de compra
            }
        });
        guardarEnLocalStorage();
        mostrarProductos();
        mostrarListaDeCompras();
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', cargarDesdeLocalStorage); // Cargar productos al cargar la página
clearShoppingListBtn.addEventListener('click', clearShoppingList); // Evento para el botón de limpiar lista