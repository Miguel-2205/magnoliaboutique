// --- VARIABLES GLOBALES PARA EL LIGHTBOX Y EL CARRITO ---
let lightboxImgsArray = [];
let lightboxIndexActual = 0;
let carrito = [];

// --- FUNCIONES DEL CARRITO DE COMPRAS CON CÁLCULO DE TOTAL ---

function agregarAlCarrito(nombre, precio, talleSeleccionado) {
    carrito.push({
        nombre: nombre,
        precioTexto: precio, // Guardamos el texto original para mostrar
        precioNumerico: limpiarPrecio(precio), // Convertimos a número para sumar
        talle: talleSeleccionado
    });
    
    actualizarContadorCarrito();
    actualizarVistaCarrito();
    
    // Efecto de latido / pulso profesional en el botón superior
    const btnCarrito = document.getElementById("btn-flotante-carrito");
    if (btnCarrito) {
        btnCarrito.classList.add("animar-latido");
        setTimeout(() => {
            btnCarrito.classList.remove("animar-latido");
        }, 400);
    }
}

function actualizarContadorCarrito() {
    const contador = document.getElementById("contador-carrito");
    const btnCarrito = document.getElementById("btn-flotante-carrito");
    
    if (contador) {
        contador.innerText = carrito.length;
    }

    // Cambia al estilo con color/activo si tiene productos, o vuelve a la normalidad si está vacío
    if (btnCarrito) {
        if (carrito.length > 0) {
            btnCarrito.classList.add("tiene-productos");
        } else {
            btnCarrito.classList.remove("tiene-productos");
        }
    }
}

// Función auxiliar para transformar "$28.000" o "$18.500" en un número real (28000)
function limpiarPrecio(precioStr) {
    if (!precioStr) return 0;
    // Remueve el signo de pesos, puntos y espacios
    let limpio = precioStr.replace('$', '').replace(/\./g, '').trim();
    return parseFloat(limpio) || 0;
}

function actualizarVistaCarrito() {
    const contenedorItems = document.getElementById("carrito-items");
    const contenedorTotal = document.getElementById("carrito-total-container");
    if (!contenedorItems) return;

    if (carrito.length === 0) {
        contenedorItems.innerHTML = `<p style="text-align: center; color: #777; padding: 20px;">Tu carrito está vacío.</p>`;
        if (contenedorTotal) contenedorTotal.innerHTML = "";
        return;
    }

    let htmlItems = "";
    let totalGeneral = 0;

    carrito.forEach((item, index) => {
        totalGeneral += item.precioNumerico;
        htmlItems += `
            <div class="carrito-item" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f2f2f2;">
                <div style="padding-right: 10px;">
                    <strong style="font-size: 14px; display: block; color: #333;">${item.nombre}</strong>
                    <span style="font-size: 12px; color: #666;">Talle: ${item.talle.toUpperCase()} | ${item.precioTexto}</span>
                </div>
                <button onclick="eliminarDelCarrito(${index})" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 16px; padding: 5px;"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    contenedorItems.innerHTML = htmlItems;

    // Renderiza el total fijo abajo para que no se mueva con el scroll
    if (contenedorTotal) {
        let totalFormateado = totalGeneral.toLocaleString('es-AR');
        contenedorTotal.innerHTML = `
            <span>Total:</span>
            <span style="color: #e74c3c;">$${totalFormateado}</span>
        `;
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    actualizarVistaCarrito();
}

function abrirModalCarrito() {
    const modal = document.getElementById("modalCarrito");
    if (modal) {
        modal.classList.add("activo");
        modal.style.display = "flex"; // Forzamos la visualización
    }
    actualizarVistaCarrito(); // Dibuja la lista al abrir
}

function cerrarModalCarrito() {
    const modal = document.getElementById("modalCarrito");
    if (modal) {
        modal.classList.remove("activo");
        modal.style.display = "none";
    }
}

function finalizarCompraWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
    let totalGeneral = 0;

    carrito.forEach((item, index) => {
        totalGeneral += item.precioNumerico;
        mensaje += `${index + 1}. *${item.nombre}* - Talle: ${item.talle} - ${item.precioTexto}\n`;
    });

    let totalFormateado = totalGeneral.toLocaleString('es-AR');
    mensaje += `\n*TOTAL A PAGAR: $${totalFormateado}*\n`;
    mensaje += `\n¿Me confirman stock y datos para el pago por favor?`;

    const linkWp = `https://api.whatsapp.com/send?phone=${CONFIG.telefonoWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(linkWp, '_blank');
}

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
    
    if (elementoImg) {
        const galeriaCard = elementoImg.closest('.galeria-manual');
        if (galeriaCard) {
            const slides = Array.from(galeriaCard.querySelectorAll('.img-slide'));
            const indexActivoVisual = slides.findIndex(img => img.classList.contains('activa'));
            
            if (indexActivoVisual !== -1) {
                lightboxIndexActual = indexActivoVisual;
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
    imgModal.classList.remove("zoom");

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
    if (modal) modal.classList.remove("activo");
}

function cerrarLightboxFuera(event) {
    if (event.target.id === "lightboxModal") cerrarLightbox();
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
                imagenesHTML += `<img src="${imgSrc}" alt="${prod.nombre}" class="${claseActiva}" onclick="abrirLightbox(${imgsJsonString}, ${imgIndex}, this)">`;
            });

            const estiloFlechas = tieneMultiplesImgs ? "" : "style='display: none;'";

            // AQUÍ CAMBIAMOS EL BOTÓN DIRECTO POR EL DE AGREGAR AL CARRITO
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
                        <button class="btn-lo-quiero" onclick="agregarAlCarrito('${prod.nombre}', '${prod.precio}', '${prod.talles}')">AGREGAR AL CARRITO</button>
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
        actualizarTarjetaActivaCelular();
    }, 50);

    const grids = contenedor.querySelectorAll(".grid-productos");
    grids.forEach(grid => {
        grid.addEventListener("scroll", actualizarTarjetaActivaCelular);
    });
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
    actualizarTarjetaActivaCelular();
});

// --- CONTROL DE OPACIDAD Y ZOOM PARA EL CARRUSEL EN CELULARES ---
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

// --- 7. Carga inicial automática al abrir la página ---
document.addEventListener("DOMContentLoaded", () => {
    const datosACargar = typeof listaProductos !== 'undefined' ? listaProductos : (typeof productos !== 'undefined' ? productos : null);

    if (datosACargar) {
        renderizarProductos(datosACargar);
    } else {
        console.error("No se encontró ninguna lista de productos cargada.");
    }

    const grids = document.querySelectorAll(".grid-productos");
    grids.forEach(grid => {
        grid.addEventListener("scroll", actualizarTarjetaActivaCelular);
    });
});