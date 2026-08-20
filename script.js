document.addEventListener("DOMContentLoaded", () => {
    // Apenas carga la página, mostramos todos los productos
    renderizarProductos(listaProductos);
});

// Función principal que dibuja las tarjetas en el HTML
function renderizarProductos(productosAMostrar) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    if (productosAMostrar.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; padding: 40px; font-size: 18px; color: #666;">No hay productos en esta categoría actualmente.</p>`;
        return;
    }

    // Agrupamos los productos que vamos a mostrar por su categoría
    const categoriasDisponibles = [...new Set(productosAMostrar.map(p => p.categoria))];
    
    let htmlContenido = "";

    categoriasDisponibles.forEach(catKey => {
        const productosDeCat = productosAMostrar.filter(p => p.categoria === catKey);
        const nombreCatFormateado = catKey.charAt(0).toUpperCase() + catKey.slice(1);

        htmlContenido += `
            <section class="seccion-catalogo">
                <div class="titulo-container">
                    <h2>${nombreCatFormateado}</h2>
                    <div class="linea-decorativa"></div>
                </div>
                <div class="grid-productos">
        `;

        productosDeCat.forEach((prod, index) => {
            const galeriaId = `galeria-${catKey}-${index}`;
            
            let imagenesHTML = "";
            const listaImgs = prod.imagenes || [prod.imagen];
            
            listaImgs.forEach((imgSrc, imgIndex) => {
                const claseActiva = imgIndex === 0 ? "img-slide activa" : "img-slide";
                imagenesHTML += `<img src="${imgSrc}" alt="${prod.nombre}" class="${claseActiva}">`;
            });

            htmlContenido += `
                <div class="producto-card">
                    <div class="galeria-manual" id="${galeriaId}">
                        <div class="imagenes-container">
                            ${imagenesHTML}
                        </div>
                        <button class="flecha-galeria izquierda" onclick="cambiarSlide('${galeriaId}', -1)"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="flecha-galeria derecha" onclick="cambiarSlide('${galeriaId}', 1)"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div class="producto-info">
                        <h3>${prod.nombre}</h3>
                        <p class="talles">TALLES DISPONIBLES: ${prod.talles.toUpperCase()}</p>
                        <p class="precio">${prod.precio}</p>
                        <a href="https://wa.me/message/SSYMOC5HJM5QI1" target="_blank" class="btn-lo-quiero">LO QUIERO</a>
                    </div>
                </div>
            `;
        });

        htmlContenido += `</div></section>`;
    });

    contenedor.innerHTML = htmlContenido;
}

// Función que se ejecuta cuando haces clic en los botones del menú superior
function filtrarProductos(categoria) {
    if (categoria === 'todos') {
        // Muestra absolutamente todo el catálogo ordenado por categorías
        renderizarProductos(listaProductos);
    } else if (categoria === 'destacados') {
        // Muestra únicamente los productos que tengan destacado: true
        const destacados = listaProductos.filter(p => p.destacado === true);
        renderizarProductos(destacados);
    } else {
        // Filtra por una categoría normal (ej: camperas, jeans, etc.)
        const filtrados = listaProductos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
        renderizarProductos(filtrados);
    }
}

// Función para mover las fotos con las flechas de la galería
function cambiarSlide(galeriaId, direccion) {
    const galeria = document.getElementById(galeriaId);
    if (!galeria) return;
    
    const slides = galeria.querySelectorAll('.img-slide');
    if (slides.length === 0) return;

    let indexActual = Array.from(slides).findIndex(slide => slide.classList.contains('activa'));
    
    slides[indexActual].classList.remove('activa');
    indexActual += direccion;
    
    if (indexActual >= slides.length) {
        indexActual = 0; 
    } else if (indexActual < 0) {
        indexActual = slides.length - 1; 
    }
    
    slides[indexActual].classList.add('activa');
}