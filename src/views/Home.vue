<template>
<section class="container">
  <div class="hero">
    <div class="content">
      <h3>Elevá tu día</h3>
      <h2>Dejate sorprender por la excelencia en cada corte.</h2>
      <p>top quality, a grade 100% health certified frozen pork.</p>
      <button v-if="showButton" data-type="inverted" class="button">Catálogo</button>
    </div>
  </div>
</section>

<section class="featured-products | container default-margin-block">
  <h2 class="capitalize">Productos destacados</h2>
  <div class="feature-produts__cards">
    <div class="fp-card | flow">
    <img src="../assets/images/featured-products/bondiola.png" alt="producto-destacado-1">
      <div class="card-text">
        <h3 class="capitalize | cards-title">solomillo de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
      </div>
      <div class="fp-card__gold-medal">
    </div>
    </div>
    <div class="fp-card | flow">
      <img src="../assets/images/featured-products/solomillo.png" alt="producto-destacado-2">
      <div class="card-text">
        <h3 class="capitalize | cards-title">bondiola de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
      </div>
      <div class="fp-card__gold-medal">
    </div>
    </div>
    <div class="fp-card | flow">
      <img src="../assets/images/featured-products/vacio.png" alt="producto-destacado-3">
      <div class="card-text">
        <h3 class="capitalize | cards-title">churrasquitos de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
      </div>
      <div class="fp-card__gold-medal">
    </div>
    </div>
  </div>
</section>

<!-- ttbuild Section -->

<section class="ttbuild | container default-margin-block">
 <div style="--flow-spacer:.3em" class="ttbuild-grid flow">
  <div class="ttbuild-text ">
    <h3 class="ttbuild-grid__h3">Elevá tu día</h3>
    <h2 class="ttbuild-grid__h2">Juntos para desarrollar mejores productos.</h2>
    <p class="ttbuild-grid__p">
      juntos con nuestros clientes estamos construyendo una experiencia culinaria única y satisfactoria. Estamos trabajando juntos para crear una comida excepcional, que ofrece calidad y sabor incomparables. Al elegir nuestros productos de carne de cerdo de alta calidad, nuestros clientes están contribuyendo a elevar su experiencia culinaria a un nivel superior. Juntos, estamos construyendo algo realmente especial..
    </p>
    <button class="button">Catalogo</button>
  </div>
  <div class="ttbuild-image-container">
    <img class="ttbuild-image"  src="../assets/images/ttbuild/sean-stone-0hOHNA3M6Ds-unsplash.jpg" alt="food-image">
  </div>
 </div>
</section>

<!-- hero2 section -->

<section class="hero2 | default-margin-block">
  <div class="container | hero2-content">
  <h2 class="uppercase">sin añadidos de grasas trans, sabores artificiales o colorantes.</h2>
  <p>En Luvianka, confiamos en la fuente de nuestra carne y la controlamos rigurosamente para asegurar su frescura y calidad. Al ser nuestros propios proveedores, podemos ofrecerle la calidad que se merece. ¿Por qué no permitirnos hacerlo?</p>
  <button data-type="inverted" class="button">Catalogo</button>
  </div>
</section>

<!-- why-us Section -->

<section class="why-us | container default-margin-block">
<div class="why-us-heading">
  <h2>Por qué elegir Luvianka:</h2>
  <p class="whyus-subheading">Nuestro compromiso es ofrecerle productos frescos y de calidad, elaborados con materias primas cuidadosamente seleccionadas. Al ser nuestros propios proveedores, garantizamos la máxima calidad en cada corte.</p>
</div>
<div class="why-us-grid flow">
<div class="text-center">
    <Icon class="why-us__icon" icon="mdi:medal-outline" color="white" />

  <h3>Calidad</h3>
  <p>
     Nos enorgullece ser nuestros propios proveedores de materias primas. Si la calidad es fundamentalmente el resultado de la materia prima que se utiliza, mo hay dduda de que al elegirnos esta recibiendo productos que cumplen con los mas altos estandares de calidad en el mercado.
  </p>
</div>
<div class="text-center flow">
  <Icon class="why-us__icon" icon="uil:technology" color="white" />
  <h3>Tecnología</h3>
  <p>
    Nuestra tecnología de producción de vanguardia nos permite elaborar cada corte con cuidado y minimizar su manipulación, creando una experiencia única y auténtica en cada bocado. Confíe en nosotros para brindarle productos de excepcionales que hablan por sí solos.
  </p>
</div>
<div class="text-center flow">
  <Icon class="why-us__icon" icon="academicons:ideas-repec" color="white" />
  <h3>Innovación</h3>
  <p>
    En Frescoes Luvianka, ofrecemos productos de calidad superior a través de nuestro enfoque en la innovación. Nos aseguramos de que cada uno de nuestros productos sea único y satisfactorio, brindándole una experiencia culinaria inolvidable
  </p>
</div>
</div>
</section>

<!-- our Products section -->

<section class="container" style="margin-block: 5em;" >
  
<!-- <Carousel></Carousel> -->
<!-- <CardCarrousel></CardCarrousel>
   -->
</section>

</template>

<script setup >
import CardCarrousel from '../components/CardCarrousel.vue';

import { Icon } from '@iconify/vue';

import {ref, computed, onMounted} from 'vue'

const screenWidth = ref(window.innerWidth);
const showButton = computed(() => screenWidth.value < 800);

onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
})

</script>


<style lang="scss" scoped>
@import '../scss/variables'; 
@import '../scss/utility'; 

.flow * + * {
  margin-top: var(--flow-spacer, .5em);
}

.hero {
  background-color: $bg-body-clr;
  background: url(../assets/images/hero/raw-pork-chop-steak-dark-wooden-surface.jpg);
  background-position: center 10%;
  background-repeat: no-repeat;
  padding-block: 15em;
  background-size: cover;
  border-radius: $size-600;
  width: 100%;
  margin-top: 5em;
  &::after{
      box-shadow: inset 0px 50px 50px 30px #000000;
      content: '';
      display: block;
      height: 100%;
      top: 0;
      width: 100%;
      border-radius: $size-600;
    }
  @media (max-width: 50em) {
    & {
     padding-block: calc( 10em); // - content height 
     margin-top: 2em;
    }
  }
}
  .content {
    margin-inline: auto;
    text-align: center;
    color: $neutral-clr-800;
    max-width: 70ch;
    transform: translate(-50%, -50%);    
    & h3 {
      font-size: $fs-675;
      text-transform: capitalize;
    }
    & h2 {
      font-size: $fs-950;
      font-weight: $fw-bold;
      text-transform: capitalize;
    }
    & h2 > span {
      position: relative;
      color: $primary-clr-400;
      padding: .1em;
    }
    & h2 > span::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: white;
      border-radius: .3em;
      z-index: -1;
    }
    & p {
      font-size: $fs-500;
      max-width: 45ch;
      margin: auto;
  }
  @media (max-width: 50em){
    & {
      top: 3em;
      left: 0; 

    transform: translate(0, 0);
    }
    & h3 {
      font-size: $fs-500;
    }
    & h2 {
      font-size: $fs-670;
    }
    & p {
      font-size: $fs-300;
      max-width: 30ch;    
  }
  }
}

/*
/ Featured Products section
*/
.featured-products{

  h2 {
    color: $primary-clr-400;
    font-size: $fs-700;
    font-weight:$fw-semibold;
    text-align: center;
    padding-bottom: $size-400;
  }
  @media (max-width: 50em) {
    h2{
      font-size: $fs-600;
      padding-bottom: 0;
    }
  }
}

  .feature-produts__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: $size-500;

    & .fp-card {
      position: relative;
    }

    & .fp-card__gold-medal {
      background-color: transparent;
      position: absolute;
      top: 0;
    }

    & .gold-medal {
      width: 5em;
      height: 5em;
    }


  @media (max-width: 50em) {
    & {
      display: block;
    }
  }
   
  & img {
    border-top-left-radius: $size-500;
    border-top-right-radius: $size-500;
  }  
  
  & div {
    border-radius: $size-500;
    color: $neutral-clr-800;
    background-color: $neutral-clr-250;
  }

  @media (max-width: 50em) {
    & div {margin-block: 2em};
  }

  & .card-text {
    padding-inline: $size-500;
    position: relative;
  }

  & > div > .card-text > h3 {
    font-size: $fs-600;
    font-weight: $fw-medium;
    margin-block: $size-400;
  }
  & > div > .card-text > p {
    font-size: $fs-400; 
    max-width: 50ch;  
  }
}
.stars {
  display: flex;
  align-items: center;
.star-icon {
  width: 2em;
  height: 2em;
}
}

/*
/ ttbuild Section
*/

.ttbuild-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (max-width: 50em) {
    display: block;
  }

  & .ttbuild-text {
    margin-block: auto;
  }

  & .ttbuild-text h3 {
    color: $primary-clr-400;
    font-size: $fs-650;
    font-weight: $fw-medium;
    text-transform: uppercase;
  }
  @media (max-width:50em) {
    & .ttbuild-text h3 {
      font-size: $fs-650 ;
    } 
  }
  & .ttbuild-text h2 {
    font-size: $fs-800;
    font-weight: $fw-bold;
    line-height: 1.3;
  }
  @media (max-width:50em) {
    & .ttbuild-text h2 {
      font-size: 26px;
    } 
  }
  & .ttbuild-text p {
  font-size: $fs-500;
  margin-bottom: $size-400;
  max-width: 50ch;
  }
  @media (max-width:50em) {
    & .ttbuild-text p {
      font-size: $fs-500;
    } 
  }

  & .ttbuild-image {
    border-radius: 0.625em;
  }
}

/*
/ hero2 Section
*/

.hero2 {
  background: url('../assets/images/hero2/hero2.jpg');
  padding-block: 17.5em;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #000000;
    opacity: 0.4;
  }

  & .hero2-content {
    position: absolute;
    color: $neutral-clr-50;
    text-align: center;
    max-width: 105ch;
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%);
  }
  & .hero2-content > h2 {
    font-size: $fs-900;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media (max-width:50em) {
    & .hero2-content > h2 {
      font-size: $fs-650;
    }
  }
  & .hero2-content > p {
    font-size: $fs-650;
    font-weight: $fw-medium;
    padding-block: $size-400;
  }
  @media (max-width:50em) {
    & .hero2-content > p {
      font-size: $fs-300;
    }
  }
}

/*
/ why-us Section
*/

.why-us {
  background-color: $neutral-clr-900;
  padding: 4em;
  border-radius: 2.5em;

  @media (max-width: 50em) {
    padding: 1.5em;
  }
  & .why-us-heading {
    color: $neutral-clr-50;
    text-align: center;
    margin-bottom: 4em;
  }
  @media (max-width: 50em) {
    & .why-us-heading {
      margin-bottom: 1em;
    } 
  }
  & .why-us-heading h2 {
    font-size: $fs-750;
    font-weight: $fw-semibold;
  }
  @media (max-width:50em) {
    & .why-us-heading h2{
      font-size: $fs-650;
    }
  }
  & .why-us-heading p {
    display: block;
    font-size: $fs-600;
    font-style: italic;
    font-weight: $fw-medium;
    color: $primary-clr-400;
    margin-inline: auto;
    max-width: 60ch;
    padding-top: 1em;
    
  }
  @media (max-width:50em) {
    & .why-us-heading p{
      font-size: $fs-300;
      font-weight: $fw-light;
    }
  }
  & .why-us-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3em;
    color: $neutral-clr-50;
  }
  @media (max-width:50em) {
    & .why-us-grid  {
      display: block;
    }  
    & .why-us-grid div  {
      padding-block: 2em;
    } 
    @media (max-width:50em) {
      & .why-us-grid div  {
        padding-block: 1em;
      } 
    } 
  }

  .why-us__icon {
    width: 5em;
    height: 5em;
    padding: 1em;
    text-align: center;
    display: block;
    margin-inline: auto;
    background-color: $primary-clr-400;
    border-radius: 100vw;
    }
  
  & .why-us-grid h3 {
    font-size: 1.23rem;
    font-weight: $fw-semibold;
  }
  @media (max-width:50em) {
    & .why-us-grid h3 {
      font-size: $fs-500;
    }
  }
  
  & .why-us-grid p {
    font-size: $fs-600;
  }
  @media (max-width:50em) {
    & .why-us-grid p {
      font-size: $fs-200;
    }
  }
}

</style>