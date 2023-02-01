<template>
<section class="container">
  <div class="hero relative">
    <div class="content absolute">
      <h3>Elevate your everyday</h3>
      <h2>Fill <span>every moment</span> with flavor</h2>
      <p>top quality, a grade 100% health certified frozen pork prompt delivery & discount prices</p>
      <button v-if="showButton" data-type="inverted" class="button">Catálogo</button>
    </div>
  </div>
</section>

<section class="featured-products | container default-margin-block">
  <h2 class="capitalize">Productos destacados</h2>
  <div class="feature-produts__cards">
    <div class="flow">
    <img src="../assets/images/featured-products/featuredproductstesting1.jpg" alt="producto-destacado-1">
      <div class="card-text">
        <h3 class="capitalize | cards-title">solomillo de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
        <div class="stars">
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
      </div>
      </div>
    </div>
    <div class="flow">
      <img src="../assets/images/featured-products/featuredproductstesting2.jpg" alt="producto-destacado-2">
      <div class="card-text">
        <h3 class="capitalize | cards-title">bondiola de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
        <div class="stars">
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
      </div>
      </div>
    </div>
    <div class="flow">
      <img src="../assets/images/featured-products/productosdestacadostesting4.jpg" alt="producto-destacado-3">
      <div class="card-text">
        <h3 class="capitalize | cards-title">churrasquitos de cerdo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea obcaecati iste minus veniam.</p>
        <div class="stars">
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
          <Icon class="star-icon" icon="material-symbols:star" color="black" />
      </div>
      </div>
    </div>
  </div>
</section>

<!-- ttbuild Section -->

<section class="ttbuild | container default-margin-block">
 <div style="--flow-spacer:.3em" class="ttbuild-grid flow">
  <div class="ttbuild-text ">
    <h3 class="ttbuild-grid__h3">fuel your today</h3>
    <h2 class="ttbuild-grid__h2">Togueter to build better products</h2>
    <p class="ttbuild-grid__p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est animi molestiae dolorum delectus sunt aperiam iure recusandae earum corporis nesciunt magni, modi ut similique.
    </p>
    <button class="button">Catalogo</button>
  </div>
  <div class="ttbuild-image-container">
    <img class="ttbuild-image"  src="../assets/images/ttbuild/ttbuild.jpg" alt="food-image">
  </div>
 </div>
</section>

<!-- hero2 section -->

<section class="hero2 | default-margin-block">
  <div class="container | hero2-content">
  <h2 class="uppercase">NOT ADDED TRANS FAT, MSG, ARTIFICIAL FLAVORS, OR COLORS</h2>
  <p>Find out how deli should be done. Discover the world of wonderful porkmeat  from fiambres luvianka</p>
  <button data-type="inverted" class="button">Catalogo</button>
  </div>
</section>

<!-- why-us Section -->

<section class="why-us | container default-margin-block">
<div class="why-us-heading">
  <h2>Why Luvianka</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolore nesciunt laboriosam earum</p>
</div>
<div class="why-us-grid flow">
<div class="text-center">
    <Icon class="why-us__icon" icon="mdi:medal-outline" color="white" />

  <h3>Calidad</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolore nesciunt laboriosam earum
  </p>
</div>
<div class="text-center flow">
  <Icon class="why-us__icon" icon="uil:technology" color="white" />
  <h3>Tecnologia</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolore nesciunt laboriosam earum
  </p>
</div>
<div class="text-center flow">
  <Icon class="why-us__icon" icon="academicons:ideas-repec" color="white" />
  <h3>Innovacion</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolore nesciunt laboriosam earum
  </p>
</div>
</div>
</section>

<!-- our Products section -->

<section class="container" style="margin-block: 5em;" >
  
<!-- <Carousel></Carousel> -->
<CardCarrousel></CardCarrousel>
  
</section>

</template>

<script setup lang="ts">
import Carousel from '../components/Carousel.vue';
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
  background: url(../assets/images/hero/hero.jpg);
  background-position: center 50%;
  background-repeat: no-repeat;
  padding-block: 20em;
  background-size: cover;
  border-radius: $size-600;
  width: 100%;

  &::after{
      box-shadow: inset 0px 50px 50px 30px #000000;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      border-radius: $size-600;
    }


  @media (max-width: 50em) {
    & {
     padding-block: calc( 16.53125em); // - content height 
     
    }
  }
}

  .content {
    margin-inline: auto;
    text-align: center;
    color: $neutral-clr-100;
    max-width: 70ch;
    top: 50%;  
    left: 50%; 
    z-index: 3;

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
  }
}

  .feature-produts__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: $size-500;

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
    padding-inline: $size-500
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
    max-width: 50ch;
  }

  & .ttbuild-text h3 {
    color: $primary-clr-400;
    font-size: $fs-650;
    font-weight: $fw-medium;
    text-transform: uppercase;
  }
  & .ttbuild-text h2 {
    font-size: $fs-800;
    font-weight: $fw-bold;
    line-height: 1.3;
  }
  & .ttbuild-text p {
  font-size: $fs-500;
  margin-bottom: $size-400;
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
    text-transform: capitalize;
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
    font-size: $fs-600;
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