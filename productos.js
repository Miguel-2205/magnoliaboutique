const productos = [
    // --- DESTACADOS (puedes marcar con true los que quieras que resalten) ---
    {
        categoria: "accesorios",
        nombre: "Cintos",
        talles: "Varios Modelos",
        precio: "$12.000",
        destacado: false,
        imagenes: ["img/accesorios/cinto/1.jpg",]
    },
     {
        categoria: "buzos",
        nombre: "Buzo Corto",
        talles: "Talle Unico",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/buzos/friz/1.webp",
            "img/buzos/friz/2.webp",
            "img/buzos/friz/3.webp",
            "img/buzos/friz/4.jpeg"
        ]
    },
      {
        categoria: "buzos",
        nombre: "Buzo con Cierre",
        talles: "T1, T2, T3",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/buzos/cierre/1.JPG",
            "img/buzos/cierre/2.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Buzo Estampados",
        talles: "Talle Unico",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/buzos/cali/1.jpg",
            "img/buzos/cali/2.jpg",
            "img/buzos/cali/3.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Buzo Bordados",
        talles: "Talle Unico - Consultar por mas colores",
        precio: "$28.000",
        destacado: false,
        imagenes: ["img/buzos/monaco/1.jpg",
            "img/buzos/monaco/2.jpg",
            "img/buzos/monaco/3.jpg",
            "img/buzos/monaco/4.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Darlon",
        talles: "M, L, XL, XXL, XXXL",
        precio: "$24.000",
        destacado: false,
        imagenes: ["img/buzos/darlon-hom/1.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Morles con Cierre",
        talles: "Talle Unico",
        precio: "$11.000",
        destacado: false,
        imagenes: ["img/buzos/luna/1.jpg",
            "img/buzos/luna/2.jpg",
            "img/buzos/luna/3.jpg",
            "img/buzos/luna/4.jpg"
        ]
    },
     {
        categoria: "calzas",
        nombre: "Calza Oxford",
        talles: "1, 2, 3, 5",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/calzas/oxford/1.jpg",
            "img/calzas/oxford/2.jpg"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Campera Plush",
        talles: "T3, T6",
        precio: "$20.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/plush/1.JPG",
            "img/camperas/plush/2.JPG",
            "img/camperas/plush/3.JPG",
            "img/camperas/plush/4.JPG"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Jeans con Tachas",
        talles: "T1, T3, T6",
        precio: "$30.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/tachas/1.JPG",
            "img/camperas/tachas/2.JPG"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Puffer con piel",
        talles: "TL, TXL, TXXL",
        precio: "$44.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/puffer/1.jpg",
            "img/camperas/puffer/2.jpeg",
            "img/camperas/puffer/3.jpeg"
        ]
    },
    {
        categoria: "chaleco",
        nombre: "Scarlet",
        talles: "T2, T3",
        precio: "$32.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/chaleco/scarlet/1.jpg",
            "img/chaleco/scarlet/2.jpg"
        ]
    },
    {
        categoria: "chaleco",
        nombre: "Chaleco Puffer",
        talles: "TM, TL, XL",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/chaleco/puffer/1.JPG",
            "img/chaleco/puffer/2.JPG"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin con Brillo",
        talles: "Del 38 al 50",
        precio: "$38.000",
        destacado: true, // <-- Esto indica que es destacado
        imagenes: [
            "img/jeans/chupin-brillo/frente.jpeg",
            "img/jeans/chupin-brillo/perfil.jpeg",
            "img/jeans/chupin-brillo/espalda.jpeg",
            "img/jeans/chupin-brillo/detalle.jpeg",
        ]
    },
    {
        categoria: "jeans",
        nombre: "Semi Recto de Hombre",
        talles: "38, 40, 42, 44, 46, 48",
        precio: "$32.000",
        destacado: false,
        imagenes: ["img/jeans/semirecto-hom/1.webp",
            "img/jeans/semirecto-hom/2.jpg",
            "img/jeans/semirecto-hom/3.jpg",
            "img/jeans/semirecto-hom/4.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin Azul de Hombre",
        talles: "40, 42, 44, 46, 48",
        precio: "$32.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-hom/1.jpg",
            "img/jeans/chupin-hom/2.jpg",
            "img/jeans/chupin-hom/3.jpg",
            "img/jeans/chupin-hom/4.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Baggi Nevado",
        talles: "36, 40, 42, 44, 46",
        precio: "$38.000",
        destacado: false,
        imagenes: ["img/jeans/baggi-nevado/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin Gris Nevado",
        talles: "36, 40, 42, 44, 46",
        precio: "$26.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-gris/1.jpg"
        ]
    },
      {
        categoria: "jeans",
        nombre: "chupin Negro",
        talles: "36, 40, 42, 44, 46",
        precio: "$28.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-negro/1.jpg"
        ]
    },
      {
        categoria: "jeans",
        nombre: "chupin Azul",
        talles: "36, 40, 42, 44, 46",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-azul/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Wide Leg Semi Eslatizado",
        talles: "36, 40, 42, 44, 46",
        precio: "$41.000",
        destacado: false,
        imagenes: ["img/jeans/widleg-sem/1.jpg",
            "img/jeans/widleg-sem/2.jpg"
        ]
    },
    {
        categoria: "jogging",
        nombre: "Joger con Puño - Mujer",
        talles: "T2, T3, T5",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jogging/baggi-muj/1.jpg",
            "img/jogging/baggi-muj/2.jpg",
            "img/jogging/baggi-muj/3.jpg"]
    },
     {
        categoria: "jogging",
        nombre: "Joger Baggi - Mujer",
        talles: "T2, T3",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/jogging/puno-muj/1.jpg",
            "img/jogging/puno-muj/2.jpg",
            "img/jogging/puno-muj/3.jpg"]
    },
    {
        categoria: "jogging",
        nombre: "Joger 2 Lineas",
        talles: "T2, T4",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jogging/2-lineas/1.jpg"]
    },
     {
        categoria: "musculosas",
        nombre: "Bremer",
        talles: "Talle Unico",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/musculosas/bremer/1.jpg",
            "img/musculosas/bremer/2.jpg",
            "img/musculosas/bremer/3.jpg"
        ]
    },
    {
        categoria: "pantalones",
        nombre: "Chupin Negro",
        talles: "38, 40, 42, 44",
        precio: "$28.000",
        destacado: false,
        imagenes: ["img/pantalones/chupin-negro.jpeg"]
    },
    {
        categoria: "remeras",
        nombre: "Manga Larga",
        talles: "L, 2XL",
        precio: "$8.000",
        destacado: false,
        imagenes: ["img/remeras/basica-larga/1.jpg",
            "img/remeras/basica-larga/2.jpg",
            "img/remeras/basica-larga/3.jpg",
            "img/remeras/basica-larga/4.jpg",
            "img/remeras/basica-larga/5.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Manga Princesa",
        talles: "T3, T6",
        precio: "$12.000",
        destacado: false,
        imagenes: ["img/remeras/manga-princesa/1.jpg",
            "img/remeras/manga-princesa/2.jpg",
            "img/remeras/manga-princesa/3.jpg",
            "img/remeras/manga-princesa/4.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Body con Cierre",
        talles: "Talle Unico",
        precio: "$17.0.00",
        destacado: false,
        imagenes: ["img/remeras/body-cierre/frente.jpg",
            "img/remeras/body-cierre/perfil.jpg",
            "img/remeras/body-cierre/espalda.jpg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Polera termica",
        talles: "Talle Unico",
        precio: "$14.000",
        destacado: false,
        imagenes: ["img/remeras/polera-termica/1.jpg",
            "img/remeras/polera-termica/2.jpg",
            "img/remeras/polera-termica/3.jpg",
            "img/remeras/polera-termica/4.jpg"
        ]
    },
       {
        categoria: "remeras",
        nombre: "Body Morley",
        talles: "Talle Unico",
        precio: "$17.000",
        destacado: false,
        imagenes: ["img/remeras/body-morley/1.jpg",
            "img/remeras/body-morley/2.jpg",
            "img/remeras/body-morley/3.jpg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Media Polera",
        talles: "Talle Unico",
        precio: "$11.000",
        destacado: false,
        imagenes: ["img/remeras/media-polera/1.jpg",
            "img/remeras/media-polera/2.jpg",
            "img/remeras/media-polera/3.jpg",
            "img/remeras/media-polera/4.jpg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Alo",
        talles: "Talle Unico",
        precio: "$7.000",
        destacado: false,
        imagenes: ["img/remeras/alo/1.jpg",
            "img/remeras/alo/2.jpg",
            "img/remeras/alo/3.jpg",
            "img/remeras/alo/4.jpg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Gina",
        talles: "Talle Unico",
        precio: "$10.000",
        destacado: false,
        imagenes: ["img/remeras/gina/1.jpg",
            "img/remeras/gina/2.jpg",
            "img/remeras/gina/3.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Siena",
        talles: "Talle Unico",
        precio: "$10.000",
        destacado: false,
        imagenes: ["img/remeras/siena/1.jpg",
            "img/remeras/siena/2.jpg"
        ]
    },
    {
        categoria: "vestido",
        nombre: "Milan",
        talles: "Talle Unico",
        precio: "$25.000",
        destacado: false,
        imagenes: ["img/vestidos/milan/1.jpg",
            "img/vestidos/milan/2.jpg"
        ]
    },
     {
        categoria: "vestido",
        nombre: "Sol",
        talles: "Talle Unico",
        precio: "$12.000",
        destacado: false,
        imagenes: ["img/vestidos/sol/1.jpg",
            "img/vestidos/sol/2.jpg",
            "img/vestidos/sol/3.jpg"
        ]
    },
     {
        categoria: "vestido",
        nombre: "Paris",
        talles: "Talle Unico",
        precio: "$15.000",
        destacado: false,
        imagenes: ["img/vestidos/paris/1.jpg",
            "img/vestidos/paris/2.jpg",
            "img/vestidos/paris/3.jpg",
            "img/vestidos/paris/4.jpg"
        ]
    }
];