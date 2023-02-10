<template>
<section class="container">
  <div class="hero">
    <div class="content">
      <h3>Elevá tu día</h3>
      <h2>Dejate sorprender por la excelencia en cada corte.</h2>
      <button v-if="onMobile" data-type="inverted" class="button">Catálogo</button>
    </div>
  </div>
</section>

<section class="featured-products | container default-margin-block">
  <h2 class="capitalize">Productos destacados</h2>
  <div class="feature-produts__cards">
    
    <ProductCard :products="products" />
    
  </div>
</section>

<!-- ttbuild Section -->

<section class="ttbuild | container default-margin-block">
 <div style="--flow-spacer:.3em" class="ttbuild-grid flow">
  <div class="ttbuild-text ">
    <h3 class="ttbuild-grid__h3">Elevá tu día</h3>
    <h2 class="ttbuild-grid__h2">Juntos para desarrollar mejores productos.</h2>
    <p class="ttbuild-grid__p">
      Trabajamos mano a mano con nuestros clientes para crear una experiencia gastronómica única y satisfactoria. Ofrecemos productos de cerdo de alta calidad que combinan calidad y sabor. Al elegir nuestros productos, nuestros clientes elevan su jornada culinaria a un nivel superior. Juntos, estamos construyendo algo realmente especial..
    </p>
    <button class="button">Catálogo</button>
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
  <button data-type="inverted" class="button">Catálogo</button>
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
    Mantenemos un alto estándar de calidad en la selección de los animales y en la elaboración de cada corte. Brindamos productos de máxima calidad y frescura a nuestros clientes. Mantenemos estándares éticos y de calidad reconociéndonos como una de las mejores empresas de cortes de cerdo en el mercado.
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
    En Frescoes Luvianka, ofrecemos productos de calidad superior a través de nuestro enfoque en la innovación. Nos aseguramos de que cada uno de nuestros productos sea único y satisfactorio, brindándole una experiencia culinaria inolvidable.
  </p>
</div>
</div>
</section>

<section class="social-media">
  <div class="container | social-media-icons">
    <a href="https://m.facebook.com/fiambresluvianka/">
      <Icon class="social-media-icon" icon="ri:facebook-fill" color="#af0808" />
    </a>
    <a href="https://www.instagram.com/fiambresluvianka/">
      <Icon class="social-media-icon" icon="mdi:instagram" color="#af0808" />
    </a>
    <a href="https://www.linkedin.com/company/fiambres-luvianka/">
      <Icon class="social-media-icon" icon="mdi:linkedin" color="#af0808" />
    </a>
    <a href="https://twitter.com/fluviankaok">
      <Icon class="social-media-icon" icon="mdi:twitter" color="#af0808" />
    </a>
  </div>
</section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import {ref, computed, onMounted} from 'vue'

import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon, 
    ProductCard
  },
  setup() {
    const screenWidth = ref(window.innerWidth);
    const onMobile = computed(() => screenWidth.value < 800);


    const products = ref([
      {
        id: 11,
        title: 'Cuadril de cerdo', 
        subtitle: 'Corte premium de cuadril de cerdo',
        subgroup: 'lomo',
        description: 'El cuadril de cerdo es un corte de carne que proviene del lomo o espalda del animal. Es un corte magro y tierno, y se puede cortar en filetes o en tiras. Es ideal para la parrilla, el asado o la cocción rápida en sartén. Es una parte de la carne versátil y popular en muchos países, y se utiliza en una variedad de platos, desde ensaladas hasta platos principales.',
        weight: '8kg Aprox',
        image: new URL('../assets/images/productsPage/productGallery/cuadril.png', import.meta.url).href,
        readmore: false
        },
        {
        id: 2,
        title: 'Bondiola de cerdo',
        subtitle: 'Corte tierno y versátil"',
        subgroup: 'hombro',
        description: 'La bondiola de cerdo es un corte de carne de cerdo que proviene de la parte trasera del animal, cerca del lomo. Es un corte marmorizado, con una combinación de carne magra y grasa, ideal para asar al horno o a la parrilla. También se puede utilizar para hacer guisos y estofados. Es un corte popular y se caracteriza por su sabor suave y jugoso.',
        weight: '5kg Aprox',
        image: new URL('../assets/images/productsPage/productGallery/bondiola.png', import.meta.url).href,
        readmore: false
    
      },
      {
        id: 7,
        title: 'Costillita de cerdo ',
        subtitle: 'La reina de la barbacoa',
        subgroup: 'costilla',
        description: 'Las costillitas de cerdo son cortes de carne de la espalda del animal, compuestos de la costilla y una porción de la carne adyacente. Son populares en la cocina de barbeque y se pueden asar, cocinar a la parrilla o hacer a la parrilla hasta que estén tiernas y doradas, con una textura suave y sabores intensos. Se pueden servir como plato principal o como aperitivo, y son una opción popular en la cocina estadounidense y sudamericana.',
        weight: '8kg Aprox',
        image: new URL('../assets/images/productsPage/productGallery/costillita.png', import.meta.url).href,
        readmore: false
        },
    ])
    onMounted(() => {
      window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth;
      });
    })

    return {
      products,
      onMobile

    }
  }
}





</script>


<style lang="scss" scoped>
@import '../scss/variables'; 
@import '../scss/utility'; 
@import '../scss/mixins'; 

.flow * + * {
  margin-top: var(--flow-spacer, .5em);
}

.hero {
  background-color: $bg-body-clr;
  background: url(../assets/images/hero/alternate.jpg);
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
     background-image: url(../assets/images/hero/quick.jpg);
      background-size: cover;
      background-position: 20% 10%;
    }
  }
}
  .content {
    margin-inline: auto;
    text-align: center;
    color: $neutral-clr-800;
    max-width: 70ch;
    background: rgba(245, 245, 245, 0.23);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
padding: 1em;
margin-left: 0;

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
      font-size: 1.6rem;
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
  font-weight: $fw-light;
  color: $neutral-clr-800;
  }
  @media (max-width:50em) {
    & .ttbuild-text p {
      font-size: $fs-500;
      font-weight: $fw-light;
      color: $neutral-clr-800;
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

.social-media {
  padding-block: 1em;
  background-color: $primary-clr-400;
  .social-media-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1em;
  }
  .social-media-icon {
    width: 2.5em;
    height: 2.5em;
    background-color: $neutral-clr-50;
    padding: .5em;
    border-radius: 100vw;
    cursor: pointer;
  }

}

</style>