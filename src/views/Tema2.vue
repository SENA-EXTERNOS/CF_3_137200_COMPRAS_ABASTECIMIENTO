<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Productos sustitutos

    .row.justify-content-around.align-items-center
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')  
      .col-lg-7
        p(data-aos="fade-down") La teoría de las cinco fuerzas de Porter consiste en analizar unos sectores del entorno que están involucrados en el desarrollo y productividad de las organizaciones. Dentro de estos encontramos los competidores directos, clientes, proveedores, productos sustitutos y competidores potenciales. Cuando en la planeación se establece el análisis de estos actores se podrá evidenciar y evaluar que tan competitivos pueden llegar a ser en el mercado. Si no se realiza una correcta gestión de trabajo en equipo con los sectores anteriormente mencionados, teniendo en cuenta múltiples factores, muchos de ellos se pueden convertir en una amenaza para la compañía.

    .row.mt-5
      p(data-aos="fade-down") Los productos sustitutos son aquellos artículos o servicios que producen dos o más empresas los cuales tienen características similares y que satisfacen las mismas necesidades de sus compradores. Es allí donde tendrán las empresas que innovar y brindar un valor agregado a sus productos para lograr fidelizar a sus clientes ya que este tipo de amenazas puede hacer que la demanda disminuya gradualmente.


    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Tipos

    .row.justify-content-around.align-items-center
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')  
      .col-lg-4
        p Dentro de los productos sustitutos o sustitutivos podemos encontrar dos clasificaciones: directos e indirectos.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')  

    TabsC.color-primario
      .py-3.py-md-4(titulo="<b>Directos</b>").bacground_tap
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
              
          .col-md-6
            h4 Directos
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                | Son todos los productos que se pueden reemplazar fácilmente con otro que tiene características similares.
        
      .py-3.py-md-4(titulo="<b>Indirectos</b>").bacground_tap
        .row.justify-content-around.align-items-center
          .col-md-6
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            
            h4 Indirectos
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                | Dentro de este tipo se encuentran los productos, que si bien no tienen las mismas características o cualidades, si satisfacen una misma necesidad.
  
    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Características

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los productos sustitutos comprenden una serie de características que permitirán un análisis para llegar a clasificarlos y poder emplear estrategias que conduzcan a encontrar una solución a las amenazas que este tipo de artículos generan. Dentro de las características que son evidenciadas en estos tipos de productos, están los ‘sustitutos perfectos’ donde se tienen dos o más productos con características muy similares y que logran satisfacer las necesidades específicas de sus clientes, un ejemplo de estos pueden ser el ponqué Ramo y el Vigor; tienen las mismas características y sus clientes no tendrán mucho problema en reemplazar el uno con el otro.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')  
      .col-lg-7
        p Otra forma de identificarlos es según su ‘competencia’, la cual puede ser directa o indirecta. La directa sucede de la forma que la describimos en el ejemplo anterior y la manera indirecta es cuando se tiene una empresa que fabrica productos con características en cierto porcentaje similares y que quieren satisfacer ciertas necesidades. Un ejemplo de competencia indirecta se puede presentar cuando el cliente busca comprar un medio de transporte y va a un almacén donde le ofrecen una bicicleta eléctrica de marca X y una patineta eléctrica de marca Y. Lo que quiere decir que ambos productos o servicios van dirigidos a un mismo segmento de clientes; en este caso, personas que buscan un medio de transporte eléctrico.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4
            p En el mercado en muchas veces se encuentran productos casi idénticos, los cuales tienen los mismos componentes, satisfacen las mismas necesidades, pero tienen marcas diferentes y su precio varía en un buen porcentaje. A esta característica se le conoce como ‘monopólica’ y un ejemplo de ellos son los repuestos para motocicletas, los cuales puedes encontrarlos de manera original y genéricos.

</template>

<script>
export default {
  name: 'Tema2',
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
