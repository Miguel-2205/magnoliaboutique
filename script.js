// --- 1. Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(listaProductos);
});

// --- 2. Función principal que dibuja las tarjetas en el HTML ---
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

            // Creamos el mensaje personalizado de WhatsApp usando el archivo centralizado config.js
            const textoWp = `Hola! Me interesa la prenda "${prod.nombre}" (Talles: ${prod.talles}) que vi en la tienda a ${prod.precio}. ¿Tendrán stock?`;
            const linkWp = `https://api.whatsapp.com/send?phone=${CONFIG.telefonoWhatsApp}&text=${encodeURIComponent(textoWp)}`;

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
                        <a href="${linkWp}" target="_blank" class="btn-lo-quiero">LO QUIERO</a>
                    </div>
                </div>
            `;
        });

        htmlContenido += `</div></section>`;
    });

    contenedor.innerHTML = htmlContenido;
}

// --- 3. Función de filtrado por categoría ---
function filtrarProductos(categoria) {
    if (categoria === 'todos') {
        renderizarProductos(listaProductos);
    } else if (categoria === 'destacados') {
        const destacados = listaProductos.filter(p => p.destacado === true);
        renderizarProductos(destacados);
    } else {
        const filtrados = listaProductos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
        renderizarProductos(filtrados);
    }
}

// --- 4. Función para mover las fotos con las flechas de la galería ---
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

document.addEventListener("DOMContentLoaded", () => {
    const grids = document.querySelectorAll(".grid-productos");

    grids.forEach(grid => {
        const tarjetas = grid.querySelectorAll(".producto-card");
        if (tarjetas.length === 0) return;

        const actualizarZoomFluido = () => {
            if (window.innerWidth > 768) return;

            const gridRect = grid.getBoundingClientRect();
            const centroGrid = gridRect.left + gridRect.width / 2;

            let tarjetaMasCercana = null;
            let menorDistancia = Infinity;

            tarjetas.forEach(tarjeta => {
                const tarjetaRect = tarjeta.getBoundingClientRect();
                const centroTarjeta = tarjetaRect.left + tarjetaRect.width / 2;
                const distancia = Math.abs(centroGrid - centroTarjeta);

                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    tarjetaMasCercana = tarjeta;
                }
            });

            // Asignamos la clase activa solo a la tarjeta que esté más cerca del centro exacto
            tarjetas.forEach(tarjeta => {
                if (tarjeta === tarjetaMasCercana) {
                    tarjeta.classList.add("activa-centro");
                } else {
                    tarjeta.classList.remove("activa-centro");
                }
            });
        };

        // Optimizamos el evento scroll para que no se trabe en dispositivos móviles
        let timeout;
        grid.addEventListener("scroll", () => {
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(() => {
                actualizarZoomFluido();
            });
        }, { passive: true });

        // Ejecutar al cargar la página
        actualizarZoomFluido();
    });
});