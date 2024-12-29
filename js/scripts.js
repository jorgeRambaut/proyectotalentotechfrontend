const carrito = [];

const botonesAgregar = document.querySelectorAll('.agregar-al-carrito');

botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = {
      id: boton.dataset.producto,
      nombre: boton.closest('.producto').querySelector('h3').textContent,
     precio: parseFloat(boton.closest('.producto').querySelector('.precio').textContent.replace('Precio: $', '')),
      //precio: parseFloat(boton.parentElement.querySelector('.precio').value),
      cantidad: parseInt(boton.parentElement.querySelector('.cantidad').value)
    };

    carrito.push(producto);
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';

  let total = 0;
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}`;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar');
    li.appendChild(botonEliminar);

    listaCarrito.appendChild(li);

    botonEliminar.addEventListener('click', () => {
      const indice = carrito.indexOf(producto);
      carrito.splice(indice, 1);
      actualizarCarrito();
    });

    total += producto.precio * producto.cantidad;
  });

  const elementoTotal = document.getElementById('total');
  elementoTotal.textContent = total;
}

function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || mensaje === '') {
    console.error('Por favor, completa todos los campos del formulario.');
  } else {
    console.log('Formulario enviado correctamente.');
  }
}

// Array de objetos que representan los productos 
const productos1 = [
  { nombre: 'Dubujo 1', precio: 19.99, cantidad:1  },
  { nombre: 'Dubujo 2', precio: 19.99, cantidad:5  },
  { nombre: 'Dubujo 3', precio: 19.99, cantidad:3  },
];

// Función para generar la lista de productos
function generarListaProductos() {
  productos1.forEach(producto => {
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Cantidad: ${producto.cantidad}`);

    console.log('------------------');
  });
}
// Llamar a la función para generar la lista
generarListaProductos();
//boton ver mas 
const productos = document.querySelectorAll('.producto');
productos.forEach(producto => {
  const boton = producto.querySelector('.mostrar-descripcion');
  const descripcion = producto.querySelector('.descripcion'); 

  boton.addEventListener('click', () => {
    const descripcionTexto = producto.dataset.descripcion;
    descripcion.textContent = descripcionTexto;
    descripcion.style.display = 'block';
  });

  // Crear el elemento de descripción y agregarlo al producto
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.classList.add('descripcion');
  producto.appendChild(nuevoParrafo);
});

// Arreglo de productos 
const productosLista = [
  { nombre: 'Imagen 1', precio: 19.99, imagen: "messi.jpeg"},
  { nombre: 'Imagen 2', precio: 29.99, imagen: 'messi 2.jpeg' },
  { nombre: 'Imagen 3', precio: 59.99, imagen: 'messi3.jpeg' }
];
// Función para crear la lista de productos
function crearListaProductos(productos) {
  const listaProductos = document.getElementById("lista-productos"); // Selecciona el elemento donde se mostrará la lista

  // Limpia la lista antes de agregar nuevos elementos
  listaProductos.innerHTML = '';

  // Recorre el arreglo de productos y crea un elemento li por cada uno
  productosLista.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `
          <img src="media/${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
      `;
      listaProductos.appendChild(li);
  });
}

// Llama a la función para crear la lista
crearListaProductos(productos);
