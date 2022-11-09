<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center(data-aos="flip-down")
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen')  
      .col-lg-7
        p(data-aos="fade-down") En el módulo formativo el aprendiz podrá adquirir conocimientos relacionados con las fuentes de abastecimiento, la importancia de elegir estratégicamente cada una de ellas para el correcto desarrollo y funcionamiento de las empresas. Por otra parte, apropiará conocimientos acerca de los productos sustitutos, tipos y características; aprenderá sobre las bases de datos, estructura, tipos de captura de datos, ficha técnica de un producto, su elaboración y diligenciamiento.

        p Estos conocimientos van a permitir que los colaboradores estén preparados cuando en su ámbito laboral o en sus emprendimientos tengan que seleccionar sus fuentes de abastecimiento, y así lo puedan realizar estratégicamente. Ahora, en caso de que deseen sacar un producto al mercado, sabrán que este puede llegar a ser un producto sustituto y así saber cómo planificar para que su artículo contenga un valor agregado que permita que los clientes puedan llegar a elegirlo. Además de ello podrá elaborar su ficha técnica para que sus clientes puedan obtener la información adecuada que permita un buen uso del producto.

        .cajonAmarillo.bgr-tarjeta-tema1.p-4
            p(data-aos="fade-down") Lo invitamos a que visualice el video introductorio que se encuentra a continuación, donde podrá conocer de manera general todos los temas que serán desarrollados en este componente. #[b ¡Muchos éxitos!]
  

    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
                   
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
