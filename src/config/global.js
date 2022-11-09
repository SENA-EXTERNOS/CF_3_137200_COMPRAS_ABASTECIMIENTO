export default {
  global: {
    componenteFormativo: 'Políticas de compras y productos',
    descripcionCurso:
      'El componente formativo tiene como objetivo que el aprendiz adquiera conocimientos sobre fuentes de abastecimiento, productos sustitutos, bases de datos y su estructura, técnicas de uso, métodos para capturar los datos, conocer que es una ficha técnica de un producto y elementos que la componen, sus características y la forma de diligenciamiento. Todo esto con el fin de que elabore estrategias para la elección de las fuentes de abastecimiento y logre diseñar fichas técnicas de los productos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fuentes de abastecimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ubicación geográfica',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos sustitutos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de captura',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Conformación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Aplicación',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Técnicas de uso',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ficha técnica de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Clases',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Aplicaciones',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Técnicas de elaboración',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Diligenciamiento',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Administración de compras y abastecimiento',
      referencia:
        'Johnson, P. F., Leenders, M. R., & Flynn, A. E. (2012). <em>Administración de compras y abastecimiento</em>. McGraw Hill Educación.',
      tipo: 'Libro',
      link: 'http://up-rid2.up.ac.pa:8080/xmlui/handle/123456789/2062',
    },
    {
      tema: 'El sistema de abastecimiento y su aplicación',
      referencia:
        'Ibáñez Machicao, M.  (2001). <em>El sistema de abastecimiento y su aplicación</em>. Gestión en el tercer milenio, 4(8), 32-43.',
      tipo: 'Pdf',
      link:
        'https://revistasinvestigacion.unmsm.edu.pe/index.php/administrativas/article/download/10478/9227 ',
    },
    {
      tema: 'Estructura y organización de una base de datos',
      referencia:
        'Trentin, G. (1992). <em>Estructura y organización de una base de datos</em>. Comunicación, Lenguaje y Educación, 4(13), 81-88.',
      tipo: 'Pdf',
      link: 'https://dialnet.unirioja.es/descarga/articulo/126243.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'proceso mediante el cual los proveedores facilitan medios al resto de grupos económicos o individuos, los cuales consiguen un determinado nivel de satisfacción o utilidad. (Galán, Economipedia, 2018)',
    },
    {
      termino: 'Compras',
      significado:
        'acción mediante la que un agente (el comprador), adquiere un bien o un servicio de otro agente (el vendedor), a cambio de una contraprestación monetaria o en especie. (Morales, 2020)',
    },
    {
      termino: 'Datos',
      significado:
        'es la representación de una variable cualitativa o cuantitativa. Suele tener una base empírica, es decir, proviene de la realidad. En este sentido, puede utilizarse para el análisis de un hecho concreto. (Westreicher, 2020)',
    },
    {
      termino: 'Logística',
      significado:
        'son todas las operaciones llevadas a cabo para hacer posible que un producto llegue al consumidor desde el lugar donde se obtienen las materias primas, pasando por el lugar de su producción. (Arias, 2012)',
    },
    {
      termino: 'Política',
      significado:
        'es el conjunto de relaciones derivadas de la interacción de los seres humanos como consecuencia de vivir en sociedad. (García, 2021)',
    },
    {
      termino: 'Producto',
      significado:
        'es el resultado que se obtiene del proceso de producción dentro de una empresa. (Quiroa, 2020)',
    },
    {
      termino: 'Proveedor',
      significado:
        'es a aquella persona física o jurídica que provee o suministra profesionalmente de un determinado bien o servicio a otros individuos o sociedades, como forma de actividad económica y a cambio de una contra prestación. (Galán, Economipedia, 2018)',
    },
  ],
  referencias: [
    {
      referencia:
        'Coll, F. (19 de 05 de 2020). <em>Compra</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/compra.html',
    },
    {
      referencia:
        'Ibáñez Machicao, M. (2001). <em>El sistema de abastecimiento y su aplicación</em>. Gestión en el tercer milenio, 4(8), 32-43.',
      link: '',
    },
    {
      referencia:
        'Johnson, P. F., Leenders, M. R., & Flynn, A. E. (2012). <em>Administración de compras y abastecimiento</em>. McGraw Hill Educación.',
      link: '',
    },
    {
      referencia:
        'Marín, A. (09 de 02 de 2021). <em>Política</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/politica.html',
    },
    {
      referencia:
        'Marqués, M. (2011). <em>Bases de datos</em>. (pág. 2). Universitat Jaume I.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (s.f.). <em>Conceptos básicos sobre bases de datos</em>. Microsoft Soporte. Obtenido de ',
      link:
        'https://support.microsoft.com/es-es/office/conceptos-b%C3%A1sicos-sobre-bases-de-datos-a849ac16-07c7-4a31-9948-3c8c94a7c204',
    },
    {
      referencia:
        'Quiroa, M. (07 de 01 de 2020). <em>Producto</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/producto.html',
    },
    {
      referencia:
        'Sánchez, J. (17 de 07 de 2018). <em>Abastecimiento</em>. Economipedia. Obtenido de ',
      link: 'https://economipedia.com/definiciones/abastecimiento.html',
    },
    {
      referencia:
        'Sánchez, J. (05 de 11 de 2018). <em>Proveedor</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/proveedor.html',
    },
    {
      referencia:
        'Sevilla, A. (29 de 05 de 2012). <em>Logística</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/logistica.html',
    },
    {
      referencia:
        'Trentin, G. (1992). <em>Estructura y organización de una base de datos</em>. Comunicación, Lenguaje y Educación, 4(13), 81-88.',
      link: '',
    },
    {
      referencia:
        'Westreicher, G. (22 de 12 de 2020). <em>Dato</em>. Economipedia. Obtenido de',
      link: 'https://economipedia.com/definiciones/dato.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
