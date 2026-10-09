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
        nombre: "Buzo Corto - A07",
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
        nombre: "Buzo con Cierre - A34",
        talles: "T1, T2, T3",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/buzos/cierre/1.JPG",
            "img/buzos/cierre/2.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Buzo Estampados - A08",
        talles: "Talle Unico",
        precio: "$26.000",
        destacado: false,
        imagenes: ["img/buzos/cali/1.jpg",
            "img/buzos/cali/2.jpg",
            "img/buzos/cali/3.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Buzo Bordados - A03",
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
        nombre: "Darlon - A27",
        talles: "M, L, XL, XXL, XXXL",
        precio: "$24.000",
        destacado: false,
        imagenes: ["img/buzos/darlon-hom/1.jpg"
        ]
    },

    {
        categoria: "buzos",
        nombre: "Sweater Rayado Largo - A20",
        talles: "Talle Unico",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/buzos/rayado-largo/1.jpg",
            "img/buzos/rayado-largo/2.jpg"
        ]
    },
    {
        categoria: "buzos",
        nombre: "Sweater con Brillo - A16",
        talles: "Talle Unico",
        precio: "$32.000",
        destacado: false,
        imagenes: ["img/buzos/brillo/1.jpg",
            "img/buzos/brillo/2.jpg",
            "img/buzos/brillo/3.jpg"
        ]
    },
     {
        categoria: "calzas",
        nombre: "Calza Oxford - A2007",
        talles: "1, 2, 3, 5",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/calzas/oxford/1.jpg",
            "img/calzas/oxford/2.jpg"
        ]
    },
     {
        categoria: "calzas",
        nombre: "Calza Chupin - A2008",
        talles: "1, 2, 3, 4, 5, 6",
        precio: "$13.500",
        destacado: false,
        imagenes: ["img/calzas/lisas/1.jpg",
            "img/calzas/lisas/2.jpg"
        ]
    },
     {
        categoria: "calzas",
        nombre: "Calza Biker - A2078",
        talles: "3, 4, 5, 6",
        precio: "$8.000",
        destacado: false,
        imagenes: ["img/calzas/biker/1.jpg",
            "img/calzas/biker/2.jpg"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Campera Algodon Rustico - A534",
        talles: "Talle del 1 al 5 - Disponible en varios colores",
        precio: "$31.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/rustico/1.jpg",
            "img/camperas/rustico/2.jpg"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Campera de Cuero - A535",
        talles: "TM - TL - TXL - TXXL - TXXXL",
        precio: "$25.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/ecocuero/1.jpg",
            "img/camperas/ecocuero/2.jpg"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Jean Negra - A533",
        talles: "T1 - T2 - T3 - T4",
        precio: "$30.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/camperas/jean-negra/1.jpg"
        ]
    },
    {
        categoria: "camperas",
        nombre: "Campera Plush - A501",
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
        nombre: "Jeans con Tachas - A507",
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
        nombre: "Puffer con piel - A503",
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
        nombre: "Chaleco de Lana - A38",
        talles: "Talle Unico",
        precio: "$21.000",
        destacado: false, // <-- Esto indica que es destacado
        imagenes: [
            "img/chaleco/lana/1.jpg",
            "img/chaleco/lana/2.jpg"
        ]
    },
    {
        categoria: "chaleco",
        nombre: "Scarlet - A1003",
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
        nombre: "Chaleco Puffer - A1001",
        talles: "TM, TL, XL",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/chaleco/puffer/1.JPG",
            "img/chaleco/puffer/2.JPG"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin con Brillo - A2012",
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
        nombre: "Short Pollera - A2120",
        talles: "Del 34 al 44",
        precio: "$30.000",
        destacado: true, // <-- Esto indica que es destacado
        imagenes: [
            "img/jeans/pollera/1.jpg",
            "img/jeans/pollera/2.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Oxford Oxido - A2116",
        talles: "Del 36 al 46",
        precio: "$29.000",
        destacado: true, // <-- Esto indica que es destacado
        imagenes: [
            "img/jeans/oxford/2.jpg",
            "img/jeans/oxford/1.jpg"
        ]
    },
       {
        categoria: "jeans",
        nombre: "Oxford Nevado - A2117",
        talles: "Del 36 al 46",
        precio: "$29.000",
        destacado: true, // <-- Esto indica que es destacado
        imagenes: [
            "img/jeans/oxford-nevado/2.jpg",
            "img/jeans/oxford-nevado/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Baggi Oxido - A2124",
        talles: "Del 36 al 46",
        precio: "$42.000",
        destacado: true, // <-- Esto indica que es destacado
        imagenes: [
            "img/jeans/baggi-oxido/1.jpg",
            "img/jeans/baggi-oxido/2.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Cargo - A2121",
        talles: "40 - 42 - 44 - 46 - 48",
        precio: "$35.000",
        destacado: false,
        imagenes: ["img/jeans/cargo-hom/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Semi Recto de Hombre - A2109",
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
        nombre: "Chupin Azul de Hombre - A2115",
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
        nombre: "Baggi Nevado - A2007",
        talles: "36, 40, 42, 44, 46",
        precio: "$38.000",
        destacado: false,
        imagenes: ["img/jeans/baggi-nevado/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Chupin Gris Nevado - A2070",
        talles: "36, 40, 42, 44, 46",
        precio: "$26.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-gris/1.jpg"
        ]
    },
      {
        categoria: "jeans",
        nombre: "chupin Negro - A2023",
        talles: "36, 40, 42, 44, 46",
        precio: "$28.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-negro/1.jpg"
        ]
    },
      {
        categoria: "jeans",
        nombre: "chupin Azul - A2018",
        talles: "36, 40, 42, 44, 46",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jeans/chupin-azul/1.jpg"
        ]
    },
    {
        categoria: "jeans",
        nombre: "Wide Leg Semi Eslatizado - A2118",
        talles: "36, 40, 42, 44, 46",
        precio: "$41.000",
        destacado: false,
        imagenes: ["img/jeans/widleg-sem/1.jpg",
            "img/jeans/widleg-sem/2.jpg"
        ]
    },
     {
        categoria: "jogging",
        nombre: "Wide Leg - A2123",
        talles: "Talle del 2 al 5 - Disponible en gris, negro y chocolate",
        precio: "$21.000",
        destacado: false,
        imagenes: ["img/jogging/wideleg/1.jpg",
            "img/jogging/wideleg/2.jpg"
        ]
    },
    {
        categoria: "jogging",
        nombre: "Joger con Puño de Mujer - A2059",
        talles: "T2, T3, T5",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jogging/puno-muj/1.jpg",
            "img/jogging/puno-muj/2.jpg",
            "img/jogging/puno-muj/3.jpg"]
    },
     {
        categoria: "jogging",
        nombre: "Joger Baggi de Mujer - A2057",
        talles: "T2, T3",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/jogging/baggi-muj/1.jpg",
            "img/jogging/baggi-muj/2.jpg",
            "img/jogging/baggi-muj/3.jpg"]
    },
    {
        categoria: "jogging",
        nombre: "Joger 2 Lineas - A2076",
        talles: "T2, T4",
        precio: "$20.000",
        destacado: false,
        imagenes: ["img/jogging/2-lineas/1.jpg"]
    },
    {
        categoria: "jogging",
        nombre: "Joger Recto - A2108",
        talles: "TM - TL - TXL - TXXL",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/jogging/recto-hom/1.jpg",
            "img/jogging/recto-hom/2.jpg",
        ]
    },
    {
        categoria: "jogging",
        nombre: "Joger C/ Puño - A2107",
        talles: "TM - TL - TXL - TXXL",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/jogging/puno-hom/1.jpg",
            "img/jogging/puno-hom/2.jpg",
        ]
    },
    {
        categoria: "musculosas",
        nombre: "Musculosa Brodery - A2573",
        talles: "Talle 2,3 y 5",
        precio: "$9.000",
        destacado: false,
        imagenes: ["img/musculosas/brodery/1.jpg",
            "img/musculosas/brodery/2.jpg"
        ]
    },
     {
        categoria: "musculosas",
        nombre: "Bremer - A2540",
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
        nombre: "Palazo de Crep - A2125",
        talles: "Talle del 2 al 6 - Disponible en negro y beige",
        precio: "$30.000",
        destacado: false,
        imagenes: ["img/pantalones/crep/1.jpg",
            "img/pantalones/crep/2.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Remera Bordada New York - A2534",
        talles: "Talle Unico - Disponible en varios colores",
        precio: "$13.000",
        destacado: false,
        imagenes: ["img/remeras/newyork/1.jpg",
            "img/remeras/newyork/2.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Kimono - A2571",
        talles: "Talle Unico - Disponible tostado, verde agua y beige",
        precio: "$15.000",
        destacado: false,
        imagenes: ["img/remeras/kimono/1.jpg",
            "img/remeras/kimono/2.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Remera Calada - A2578",
        talles: "Talle Unico - Disponible en beige, negro y blanco",
        precio: "$11.000",
        destacado: false,
        imagenes: ["img/remeras/calada/1.jpg",
            "img/remeras/calada/2.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Strass - A2574",
        talles: "Talle 2 y 4 - Disponible en gris, choco, tostado, negro y blanco",
        precio: "$15.000",
        destacado: false,
        imagenes: ["img/remeras/strass/1.jpg",
            "img/remeras/strass/2.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Remera Cala Bordada - A2551",
        talles: "Talle del M al XXXL - Disponible en varios colores",
        precio: "$17.000",
        destacado: false,
        imagenes: ["img/remeras/cala/1.jpg",
            "img/remeras/cala/2.jpg"
        ]
    },
      {
        categoria: "remeras",
        nombre: "Tachas - A2566",
        talles: "Talle Unico",
        precio: "$15.000",
        destacado: false,
        imagenes: ["img/remeras/tachas/1.jpg",
            "img/remeras/tachas/2.jpg",
            "img/remeras/tachas/3.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Rmera Pili - A2576",
        talles: "Talle Unico - Disponible en choco, tostado, negro y blanco",
        precio: "$10.000",
        destacado: false,
        imagenes: ["img/remeras/pili/1.jpg",
            "img/remeras/pili/2.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Pupera Panal - A2559",
        talles: "Talle Unico",
        precio: "$8.000",
        destacado: false,
        imagenes: ["img/remeras/pupera-panal/1.jpg",
            "img/remeras/pupera-panal/2.jpg",
        ]
    },
    {
        categoria: "remeras",
        nombre: "Pupera Panal - A2559",
        talles: "Talle Unico",
        precio: "$8.000",
        destacado: false,
        imagenes: ["img/remeras/pupera-panal/1.jpg",
            "img/remeras/pupera-panal/2.jpg",
        ]
    },
     {
        categoria: "remeras",
        nombre: "Estampada - A2561",
        talles: "T2 - T3 - T4 - T5",
        precio: "$17.000",
        destacado: false,
        imagenes: ["img/remeras/estampada/1.jpg"
        ]
    },
     {
        categoria: "remeras",
        nombre: "Chomba - A2555",
        talles: "T1 - T3 - T6",
        precio: "$26.000",
        destacado: false,
        imagenes: ["img/remeras/chomba-hom/1.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Remeron Nevado - A2563",
        talles: "Talle Unico",
        precio: "$17.000",
        destacado: false,
        imagenes: ["img/remeras/remeron-nevado/1.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Manga Larga - A2509",
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
        nombre: "Manga Princesa - A2525",
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
        nombre: "Body con Cierre - A2547",
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
        nombre: "Polera termica - A2532",
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
        nombre: "Body Morley - A2548",
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
        nombre: "Media Polera - A2544",
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
        nombre: "Alo - A2527",
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
        nombre: "Gina - 2554",
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
        categoria: "remeras",
        nombre: "Remera de Rayas - A2557",
        talles: "Talle Unico",
        precio: "$9.000",
        destacado: false,
        imagenes: ["img/remeras/rayas/1.jpg",
            "img/remeras/rayas/2.jpg",
            "img/remeras/rayas/3.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Body Fiore - A2564",
        talles: "Talle 2 y 4",
        precio: "$13.000",
        destacado: false,
        imagenes: ["img/remeras/body-fiore/1.jpg",
            "img/remeras/body-fiore/2.jpg"
        ]
    },
    {
        categoria: "remeras",
        nombre: "Pupera Neveda - A2556",
        talles: "Talle Unico",
        precio: "$11.000",
        destacado: false,
        imagenes: ["img/remeras/pupera/1.jpg"
        ]
    },{
        categoria: "remeras",
        nombre: "Morley con Cierre - A2549",
        talles: "Talle Unico",
        precio: "$11.000",
        destacado: false,
        imagenes: ["img/remeras/luna/1.jpg",
            "img/remeras/luna/2.jpg",
            "img/remeras/luna/3.jpg",
            "img/remeras/luna/4.jpg"
        ]
    },
     {
        categoria: "vestido",
        nombre: "Roma - A3009",
        talles: "Talle Unico",
        precio: "$16.000",
        destacado: false,
        imagenes: ["img/vestidos/roma/1.jpg",
            "img/vestidos/roma/2.jpg"
        ]
    },
    {
        categoria: "vestido",
        nombre: "Olivia - A3010",
        talles: "Talle Unico - Disponible en choco, negro y gris",
        precio: "$18.000",
        destacado: false,
        imagenes: ["img/vestidos/olivia/1.jpg",
            "img/vestidos/olivia/2.jpg"
        ]
    },
    {
        categoria: "vestido",
        nombre: "Milan - A3003",
        talles: "Talle Unico",
        precio: "$25.000",
        destacado: false,
        imagenes: ["img/vestidos/milan/1.jpg",
            "img/vestidos/milan/2.jpg"
        ]
    },
     {
        categoria: "vestido",
        nombre: "Sol - A3004",
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
        nombre: "Paris - A3005",
        talles: "Talle Unico",
        precio: "$21.000",
        destacado: false,
        imagenes: ["img/vestidos/paris/1.jpg",
            "img/vestidos/paris/2.jpg",
            "img/vestidos/paris/3.jpg",
            "img/vestidos/paris/4.jpg"
        ]
    },
     {
        categoria: "vestido",
        nombre: "Desire - A3008",
        talles: "Talle Unico",
        precio: "$17.000",
        destacado: false,
        imagenes: ["img/vestidos/desire/1.jpg",
            "img/vestidos/desire/2.jpg"
        ]
    }
];