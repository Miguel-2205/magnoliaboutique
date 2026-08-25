// --- VARIABLES GLOBALES PARA EL LIGHTBOX ---
let lightboxImgsArray = [];
let lightboxIndexActual = 0;

// --- 1. Función para mover el carrusel de categorías (PC) ---
function moverCarruselCat(boton, direccion) {
    const contenedorCat = boton.closest(".categoria-contenedor");
    if (!contenedorCat) return;
    const grid = contenedorCat.querySelector(".grid-productos");
    if (!grid) return;

    const desplazamiento = 350 * direccion;
    grid.scrollBy({
        left: desplazamiento,
        behavior: 'smooth'
    });
}

// --- 2. Función para cambiar de imagen en la tarjeta pequeña ---
function cambiarSlide(galeriaId, direccion) {
    const galeria = document.getElementById(galeriaId);
    if (!galeria) return;
    
    const slides = galeria.querySelectorAll(".img-slide");
    if (slides.length <= 1) return;

    let indexActual = Array.from(slides).findIndex(img => img.classList.contains("activa"));
    if (indexActual === -1) indexActual = 0;

    slides[indexActual].classList.remove("activa");

    let nuevoIndex = indexActual + direccion;
    if (nuevoIndex >= slides.length) {
        nuevoIndex = 0;
    } else if (nuevoIndex < 0) {
        nuevoIndex = slides.length - 1;
    }

    slides[nuevoIndex].classList.add("activa");
}

// --- 3. Funciones del Lightbox (Pantalla completa con carrusel y zoom) ---
function abrirLightbox(imagenesList, indiceInicial, elementoImg) {
    lightboxImgsArray = imagenesList;
    
    // Buscamos exactamente el índice de la imagen en la que se hizo clic
    if (elementoImg) {
        const galeriaCard = elementoImg.closest('.galeria-manual');
        if (galeriaCard) {
            const slides = Array.from(galeriaCard.querySelectorAll('.img-slide'));
            const indexReal = slides.indexOf(elementoImg);
            if (indexReal !== -1) {
                lightboxIndexActual = indexReal;
            } else {
                lightboxIndexActual = indiceInicial;
            }
        } else {
            lightboxIndexActual = indiceInicial;
        }
    } else {
        lightboxIndexActual = indiceInicial;
    }

    let modal = document.getElementById("lightboxModal");
    if (!modal) {
        const modalHTML = `
            <div id="lightboxModal" class="lightbox-modal" onclick="cerrarLightboxFuera(event)">
                <button class="lightbox-cerrar" onclick="cerrarLightbox()">&times;</button>
                <div class="lightbox-container-interno">
                    <button class="lightbox-flecha izquierda" id="lbBtnIzq" onclick="cambiarSlideLightbox(-1)">&#10094;</button>
                    <img class="lightbox-content" id="lightboxImg" onclick="toggleZoom(this)">
                    <button class="lightbox-flecha derecha" id="lbBtnDer" onclick="cambiarSlideLightbox(1)">&#10095;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById("lightboxModal");
    }

    actualizarImagenLightbox();
    modal.classList.add("activo");
}

function actualizarImagenLightbox() {
    const imgModal = document.getElementById("lightboxImg");
    const btnIzq = document.getElementById("lbBtnIzq");
    const btnDer = document.getElementById("lbBtnDer");

    if (!imgModal) return;

    imgModal.src = lightboxImgsArray[lightboxIndexActual];
    imgModal.classList.remove("zoom"); // Resetear zoom al cambiar de foto

    if (lightboxImgsArray.length <= 1) {
        btnIzq.classList.add("oculta");
        btnDer.classList.add("oculta");
    } else {
        btnIzq.classList.remove("oculta");
        btnDer.classList.remove("oculta");
    }
}

function cambiarSlideLightbox(direccion) {
    lightboxIndexActual += direccion;
    if (lightboxIndexActual >= lightboxImgsArray.length) {
        lightboxIndexActual = 0;
    } else if (lightboxIndexActual < 0) {
        lightboxIndexActual = lightboxImgsArray.length - 1;
    }
    actualizarImagenLightbox();
}

function cerrarLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.classList.remove("activo");
    }
}

function cerrarLightboxFuera(event) {
    if (event.target.id === "lightboxModal") {
        cerrarLightbox();
    }
}

function toggleZoom(img) {
    img.classList.toggle("zoom");
}

// --- 4. Función principal que dibuja las tarjetas agrupadas por categorías ---
function renderizarProductos(productosAMostrar) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    if (!productosAMostrar || productosAMostrar.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; padding: 40px; font-size: 18px; color: #666;">No hay productos en esta categoría actualmente.</p>`;
        return;
    }

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
                
                <div class="categoria-contenedor">
                    <button class="flecha-slider-cat izquierda" onclick="moverCarruselCat(this, -1)">&#10094;</button>
                    
                    <div class="grid-productos" onscroll="actualizarFlechas(this)">
        `;

        productosDeCat.forEach((prod, index) => {
            const galeriaId = `galeria-${catKey}-${index}`;
            let imagenesHTML = "";
            const listaImgs = prod.imagenes || [prod.imagen];
            const tieneMultiplesImgs = listaImgs.length > 1;
            
            const imgsJsonString = JSON.stringify(listaImgs).replace(/"/g, '&quot;');

            listaImgs.forEach((imgSrc, imgIndex) => {
                const claseActiva = imgIndex === 0 ? "img-slide activa" : "img-slide";
                // AQUÍ ESTÁ EL CAMBIO CLAVE: Enviamos 'this' para que detecte exactamente la foto tocada
                imagenesHTML += `<img src="${imgSrc}" alt="${prod.nombre}" class="${claseActiva}" onclick="abrirLightbox(${imgsJsonString}, ${imgIndex}, this)">`;
            });

            const estiloFlechas = tieneMultiplesImgs ? "" : "style='display: none;'";
            const textoWp = `Hola! Me interesa la prenda "${prod.nombre}" (Talles: ${prod.talles}) que vi en la tienda a ${prod.precio}. ¿Tendrán stock?`;
            const linkWp = `https://api.whatsapp.com/send?phone=${CONFIG.telefonoWhatsApp}&text=${encodeURIComponent(textoWp)}`;

            htmlContenido += `
                <div class="producto-card">
                    <div class="galeria-manual" id="${galeriaId}">
                        <div class="imagenes-container">
                            ${imagenesHTML}
                        </div>
                        <button class="flecha-galeria izquierda" ${estiloFlechas} onclick="cambiarSlide('${galeriaId}', -1)"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="flecha-galeria derecha" ${estiloFlechas} onclick="cambiarSlide('${galeriaId}', 1)"><i class="fa-solid fa-chevron-right"></i></button>
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

        htmlContenido += `
                    </div>
                    <button class="flecha-slider-cat derecha" onclick="moverCarruselCat(this, 1)">&#10095;</button>
                </div>
            </section>
        `;
    });

    contenedor.innerHTML = htmlContenido;
    
    setTimeout(() => {
        verificarFlechasCarrusel();
    }, 50);
}

// --- 5. Función para filtrar productos desde los botones del menú ---
function filtrarProductos(categoria) {
    const fuente = typeof listaProductos !== 'undefined' ? listaProductos : (typeof productos !== 'undefined' ? productos : []);
    if (fuente.length === 0) return;
    
    if (categoria === 'todos') {
        renderizarProductos(fuente);
    } else if (categoria === 'destacados') {
        const destacados = fuente.filter(p => p.destacado === true);
        renderizarProductos(destacados);
    } else {
        const filtrados = fuente.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
        renderizarProductos(filtrados);
    }
}

// --- 6. Control inteligente de flechas laterales (PC) ---
function verificarFlechasCarrusel() {
    if (window.innerWidth <= 768) return;

    const contenedoresGrid = document.querySelectorAll(".grid-productos");
    contenedoresGrid.forEach(grid => {
        const contenedorCat = grid.closest(".categoria-contenedor");
        if (!contenedorCat) return;

        const flechaIzq = contenedorCat.querySelector(".flecha-slider-cat.izquierda");
        const flechaDer = contenedorCat.querySelector(".flecha-slider-cat.derecha");

        const tieneDesborde = grid.scrollWidth > grid.clientWidth;

        if (tieneDesborde) {
            if (grid.scrollLeft > 5) {
                if (flechaIzq) flechaIzq.classList.add("activa");
            } else {
                if (flechaIzq) flechaIzq.classList.remove("activa");
            }

            const maxScrollLeft = grid.scrollWidth - grid.clientWidth - 5;
            if (grid.scrollLeft < maxScrollLeft) {
                if (flechaDer) flechaDer.classList.add("activa");
            } else {
                if (flechaDer) flechaDer.classList.remove("activa");
            }
        } else {
            if (flechaIzq) flechaIzq.classList.remove("activa");
            if (flechaDer) flechaDer.classList.remove("activa");
        }
    });
}

function actualizarFlechas(grid) {
    verificarFlechasCarrusel();
}

window.addEventListener("resize", () => {
    verificarFlechasCarrusel();
});

// --- 7. Carga inicial automática al abrir la página ---
document.addEventListener("DOMContentLoaded", () => {
    const datosACargar = typeof listaProductos !== 'undefined' ? listaProductos : (typeof productos !== 'undefined' ? productos : null);

    if (datosACargar) {
        renderizarProductos(datosACargar);
    } else {
        console.error("No se encontró ninguna lista de productos cargada.");
    }
});

// --- CONTROL DE OPACIDAD PARA EL CARRUSEL EN CELULARES ---
function actualizarTarjetaActivaCelular() {
    if (window.innerWidth > 768) return;

    const grids = document.querySelectorAll(".grid-productos");
    grids.forEach(grid => {
        const tarjetas = grid.querySelectorAll(".producto-card");
        if (tarjetas.length === 0) return;

        const gridRect = grid.getBoundingClientRect();
        const centroGrid = gridRect.left + gridRect.width / 2;

        let tarjetaCercana = null;
        let menorDistancia = Infinity;

        tarjetas.forEach(tarjeta => {
            const tarjetaRect = tarjeta.getBoundingClientRect();
            const centroTarjeta = tarjetaRect.left + tarjetaRect.width / 2;
            const distancia = Math.abs(centroGrid - centroTarjeta);

            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                tarjetaCercana = tarjeta;
            }
        });

        tarjetas.forEach(tarjeta => tarjeta.classList.remove("activa-centro"));
        if (tarjetaCercana) {
            tarjetaCercana.classList.add("activa-centro");
        }
    });
}

// Escuchamos el scroll en los carruseles y la carga inicial
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(actualizarTarjetaActivaCelular, 100);
    const grids = document.querySelectorAll(".grid-productos");
    grids.forEach(grid => {
        grid.addEventListener("scroll", actualizarTarjetaActivaCelular);
    });
});

window.addEventListener("resize", actualizarTarjetaActivaCelular);