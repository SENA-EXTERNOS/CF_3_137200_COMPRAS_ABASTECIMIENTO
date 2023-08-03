<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Base de datos

    .row.justify-content-around.align-items-center
      .col-lg-7
       .bloque-texto-tema3.color-primario.p-4
          .bloque-texto-tema3__texto
            p(data-aos="fade-down") “Una base de datos se puede percibir como un gran almacén de datos que se define y se crea una sola vez, y que se utiliza al mismo tiempo por distintos usuarios. En una base de datos todos los datos se integran con una mínima cantidad de duplicidad. De este modo, la base de datos no pertenece a un solo departamento, sino que se comparte por toda la organización.” (Marqués, 2011) 

          p(data-aos="fade-down").mt-3 Este tipo de sistemas está diseñado específicamente y de manera especial para cada una de las organizaciones que lo requieran conforme a su actividad económica y al tipo de datos que deseen almacenar. Estas bases de datos van a estar disponibles todo el tiempo y para cualquier departamento de la empresa que desee adquirir información o por el contrario, alimentarla.

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img1.png', alt='')  
      
    h4.mt-5 Estructura

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img2.png', alt='')  
      .col-lg-9

        .cajonAmarillo.bgr-tarjeta-tema1.p-4
            p Las bases de datos para poder llegar a ejecutarse correctamente, deberán comprender todo un procedimiento y diseño estructural que va a permitir que el sistema se desarrolle de manera eficiente. Esta estructura integra una serie de elementos y formatos los cuales van a permitir el almacenamiento y suministro de la información de manera permanente y sin riesgo de perderlos.

        p.mt-3 Al momento de estructurar una base de datos, se realizan asociaciones entre áreas, las cuales pueden ser de dos tipos principalmente: ‘uno a muchos y muchos a muchos’. Un ejemplo de ‘uno a muchos’ es la relación del paciente y el consultorio clínico. Ya que muchos pacientes están asociados al mismo consultorio clínico, mientras que un paciente puede formar parte de un solo consultorio clínico. En el caso de ‘muchos a muchos’ es la asociación de un enfermero y la clínica. Ya que un enfermero puede laborar en varias áreas de la clínica y la clínica puede tener muchos enfermeros. Así mismo, estas estructuras comprenden una serie de conectores, tablas, gráficos, métodos y modelos que la hacen ser muy sólida. A continuación, se puede observar el ejemplo estructurado de los dos tipos de asociaciones entre áreas:

    .row.mt-5
      .col-lg-3
      .col-lg-6.mt-5
        .titulo-sexto.color-acento-contenido
          p <b>Figura 2</b> <br> <i> Tipos de asociaciones</i>
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='')  
      .col-lg-3
    
    h4.mt-5 Tipos de captura

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img4.png', alt='')  
      .col-lg-7.banner-tema-3
        p Se sabe que las bases de datos se alimentan con información de manera permanente y es allí donde se debe saber cómo suministrar este tipo de informes. Dentro de los tipos de capturas más utilizados se encuentran la captura manual, código de barras, captura de voz, IDR e ICR. El primero, la captura manual, hace referencia a la introducción de datos de forma tradicional a partir de un teclado, puede ser debido a que los documentos no pueden ser capturados con otros tipos de tecnologías, ya que muchas veces son datos escritos a mano o porque simplemente no cuentan con otros instrumentos para agregar la información.

        p El reconocimiento de códigos de barras es otro de lo más empleados para capturar datos, ya que permite adquirir gran cantidad de información sobre un producto o documento. Estos son bastante utilizados en las empresas que tienen por actividad la comercialización de bienes. Actualmente se encuentran en el mercado dispositivos que permiten convertir la voz a texto y con ello lograr crear informes, documentos, etc., para alimentar las bases de datos, este tipo se denomina captura de voz.

    .row.mt-5
      p Por otra parte, se tiene el reconocimiento inteligente de documento o IDR, este proceso se realiza mediante una aplicación, la cual identificará información relevante y la receptará buscando asociarla con otros datos allí almacenados para la realización de análisis o cálculos. Este tipo de sistemas se emplean para identificar datos de facturas, palabras clave, logotipos que permitan asociar información; por ejemplo, al realizar el reconocimiento del logotipo que aparece en la factura, inmediatamente va a asociar esa información con el proveedor al que le fue adquirida la mercancía. Y por último se tiene el reconocimiento de caracteres o ICR, que como su nombre lo dice, consiste en escanear los documentos ya sean impresos o escritos a mano y todos estos caracteres son arrojados a la base de datos.

    h4.mt-5 Conformación

    .row
      p Las bases de datos no integran solamente documentos de texto continuo, también se pueden insertar allí una serie de componentes los cuales contienen información de mucha importancia para la empresa como lo son:

    .row
      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          p <b>Figura 3</b> <br> <i> Componentes de una base de datos</i>
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img6.png', alt='')  

      .col-lg-2

    .row.mt-5
      .col-lg-4
        p Los formularios de las bases de datos son acciones donde un usuario puede ingresar y registrar su información, estos se pueden incluir para que el usuario deposite sus datos personales al momento de querer realizar una modificación en la base de datos y esta quede registrada para tener claridad de quien realizó esa variación. Por otra parte, se tienen tablas que pueden ser hojas de cálculo que contengan filas y columnas con la respectiva información.

        p Los informes son empleados para brindar un análisis de cierta información que requiera de ello, y así pasar un documento o exposición resumida con datos relevantes de la información allí contenida. Además de ello se tienen las consultas que nos sirven para buscar información requerida y realizarlo de manera más rápida y eficiente.

      .col-lg-3.mt-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img7.png', alt='')  
          
      .col-lg-5
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Las macros pueden considerarse un lenguaje de programación simplificado que puede usar para agregar funciones a la base de datos. Por ejemplo, puede adjuntar una macro a un botón de comando en un formulario para que la macro se ejecute cada vez que se hace clic en ese botón. Y los módulos, como las macros, son objetos que puede usar para agregar funciones a la base de datos. Un módulo puede ser un módulo de clase o un módulo estándar. Los módulos de clase se adjuntan a formularios o informes y, por lo general, contienen procedimientos que son específicos para el formulario o el informe al que están adjuntos.
            <br>
            p #[b (Microsoft, s.f.)]

            i.fas.fa-quote-right
            
    h4.mt-5 Aplicación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las bases de datos son una invención tecnológica de las más importantes para las empresas sin importar su tamaño. Todas las organizaciones que desean tener un orden en su información, deberán elaborar o adquirir un sistema de base de datos el cual les permitirá ser más óptimos en sus procesos y tener todos sus documentos, informes y tablas de manera segura, sin riesgo de que se lleguen a perder en determinado momento. Las bases de datos se pueden aplicar a nivel personal y empresarial, cualquier tipo de empresa sin importar su actividad o tamaño. Todas las compañías tienen información que debe ser almacenada y la implementación de estos sistemas hará que sea mucho más fácil y de manera organizada. Pero no bastará simplemente con tener esta base de datos, habrá que saber gestionarla y ser consiente de los beneficios que se pueden lograr si se emplea de manera eficiente.

    h4.mt-5 Técnicas de uso

    .row.justify-content-around.align-items-center

      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img9.png', alt='')  

      .col-lg-9
        p Cuando se tiene una base de datos bien estructurada en cuanto a componentes y acorde a la actividad de la empresa, esta será vital para el funcionamiento de la organización siempre y cuando sea bien gestionada. Cuando se hace referencia a una buena gestión, se quiere dar a entender que no simplemente es tener una base de datos, esta deberá ser alimentada con mucha información actualizada y segmentar los datos. Toda esta información deberá ser utilizada en determinado momento para realizar análisis y poder tomar decisiones acertadas para el desarrollo óptimo de la empresa.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4
            p Una de las técnicas empleadas para el análisis de datos es la inteligencia empresarial, la cual consiste en brindar una estructuración a la información almacenada, donde se buscará que esta logre estar acorde de la actividad empresarial y de los datos relevantes que se desean analizar para brindar un diagnóstico y posteriormente tomar decisiones acertadas. Otra de las técnicas es la minería de datos la cual permite hallar fallas dentro de la gran cantidad de información que allí se contiene, también permite extraer patrones y encontrar las relaciones que existen entre diferentes datos. Con esta técnica se logrará eliminar los datos repetidos, se podrá extraer información relevante y de valor que pueda ser analizada para trazar proyecciones que le permitan a la empresa un desarrollo progresivo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
