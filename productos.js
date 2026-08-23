const listaProductos = [
    // --- DESTACADOS (puedes marcar con true los que quieras que resalten) ---
    {
        categoria: "accesorios",
        nombre: "Cintos",
        talles: "Varios Modelos",
        precio: "$12.000",
        destacado: false,
        imagenes: ["img/accesorios/cinto/1.JPG",]
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
            "img/buzos/cierre/2.jpeg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Buzo Estampados",
        talles: "Talle Unico",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/buzos/cali/1.JPG",
            "img/buzos/cali/2.JPG",
            "img/buzos/cali/3.JPG"
        ]
    },
     {
        categoria: "calsas",
        nombre: "Calsa Deportiva",
        talles: "1, 2, 3",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/default.jpeg"]
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
            "img/camperas/puffer/1.png",
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
            "img/chaleco/scarlet/1.png",
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
        categoria: "conjuntos",
        nombre: "Conjunto Urbano",
        talles: "S, M",
        precio: "$45.000",
        destacado: false,
        imagenes: ["img/default.jpeg"]
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
            "img/jeans/semirecto-hom/2.png",
            "img/jeans/semirecto-hom/3.jpeg",
            "img/jeans/semirecto-hom/4.jpeg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin Azul de Hombre",
        talles: "40, 42, 44, 46, 48",
        precio: "$32.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-hom/1.png",
            "img/jeans/chupin-hom/2.png",
            "img/jeans/chupin-hom/3.jpeg",
            "img/jeans/chupin-hom/4.jpeg"
        ]
    },
    {
        categoria: "jogging",
        nombre: "Joger Urbano",
        talles: "T3, T5, T6",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/pantalones/joger.jpeg"]
    },
    {
        categoria: "musculosas",
        nombre: "Musculosa Básica",
        talles: "T4, T6, T10",
        precio: "$6.000",
        destacado: false,
        imagenes: ["img/remeras/musculosa.jpeg"]
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
        imagenes: ["img/remeras/basica-larga/2.png",
            "img/remeras/basica-larga/1.png",
            "img/remeras/basica-larga/3.png",
            "img/remeras/basica-larga/4.png",
            "img/remeras/basica-larga/5.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Manga Princesa",
        talles: "T3, T6",
        precio: "$12.000",
        destacado: false,
        imagenes: ["img/remeras/manga-princesa/1.png",
            "img/remeras/manga-princesa/2.png",
            "img/remeras/manga-princesa/3.png",
            "img/remeras/manga-princesa/4.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Body con Cierre",
        talles: "Talle Unico",
        precio: "$14.00",
        destacado: false,
        imagenes: ["img/remeras/polera-termica/1.png",
            "img/remeras/polera-termica/2.png",
            "img/remeras/polera-termica/3.png",
            "img/remeras/polera-termica/4.jpeg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Polera termica",
        talles: "Talle Unico",
        precio: "$8.500",
        destacado: false,
        imagenes: ["img/remeras/body-cierre/frente.png",
            "img/remeras/body-cierre/perfil.png",
            "img/remeras/body-cierre/espalda.png"
        ]
    },
    {
        categoria: "vestido",
        nombre: "Milan",
        talles: "Talle Unico",
        precio: "$25.000",
        destacado: false,
        imagenes: ["img/vestidos/milan/1.png",
            "img/vestidos/milan/2.jpeg"
        ]
    }
];