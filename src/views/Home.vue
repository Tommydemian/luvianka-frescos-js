<template>
<section class="container">

  <Modal 
  :showModal="showModal"
   @close-modal="closeModal"
    ref="modalRef"
     />

  <div class="hero">
    <div class="content ">
      <h3>Elevá tu día</h3>
      <h2>Dejate sorprender por la excelencia en cada corte.</h2>
      <p>Cortes de cerdo de alta calidad</p>
      <button @click="openModal" v-if="onMobile" data-type="inverted" class="button">Catálogo</button>
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
<TTBuild />
<!-- hero2 Section -->
<HeroBannerWithText />
<!-- why-us Section -->
<WhyUs />
<!-- socialMedia Section -->
<SocialMedia />
</template>

<script>
import {ref, computed, onMounted} from 'vue'

import { useModal } from '../assets/composables/useModal';

import TTBuild from '../components/TTBuild.vue';
import ProductCard from '../components/ProductCard.vue';
import HeroBannerWithText from '../components/HeroBannerWithText.vue';
import WhyUs from '../components/WhyUs.vue'; 
import SocialMedia from '../components/SocialMedia.vue';

import Modal from '../components/Modal.vue';

import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon, 
    TTBuild,
    ProductCard,
    HeroBannerWithText,
    WhyUs,
    SocialMedia,
    Modal
  },
  setup() {
    const screenWidth = ref(window.innerWidth);
    const onMobile = computed(() => screenWidth.value < 800);
    
  // modal 
  const {closeModal, modalRef, openModal, showModal} = useModal()


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
      onMobile, 
      modalRef, 
      showModal, 
      openModal, 
      closeModal

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
  position: relative;
  background-color: $bg-body-clr;
  background: url(../assets/images/hero/AdobeStock_168473491.jpeg);
  background-position: center 10%;
  background-repeat: no-repeat;
  padding-block: 25em;
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
      position: static;
    }
  }
}
.content {
position: absolute;
bottom: 0;
margin-inline: auto;
text-align: center;
color: $neutral-clr-50;
max-width: 50ch;
background: hsla(0, 0, 0, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
padding: 1em;
margin: 1em;


@include mq (small) {
  position: static;
}


    & h3 {
      font-size: $fs-500;
      text-transform: capitalize;
    }
    & h2 {
      font-size: $fs-750;
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
    @include mq (medium) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

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
</style>