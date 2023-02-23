<template>
    <section id="hero2" class="hero2 | default-margin-block">

      <Modal 
    :showModal="showModal"
     @close-modal="closeModal"
      ref="modalRef"
       />

        <div class="container | hero2-content">
        <h2 class="uppercase">sin añadidos de grasas trans, sabores artificiales o colorantes.</h2>
        <p>En Luvianka, confiamos en la fuente de nuestra carne y la controlamos rigurosamente para asegurar su frescura y calidad. Al ser nuestros propios proveedores, podemos ofrecerle la calidad que se merece. ¿Por qué no permitirnos hacerlo?</p>
        <button @click="openModal" data-type="inverted" class="button">Catálogo</button>
        </div>
    </section>
</template>

<script setup>
import { useModal } from '../assets/composables/useModal';

import Modal from './Modal.vue';

// modal 
const { closeModal, modalRef, openModal, showModal } = useModal()
</script>

<style lang="scss" scoped>
 @import '../scss/variables';
 @import '../scss/utility';
 @import '../scss/mixins';

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
    @include mq (medium){
      padding-block: 19em;
    }
  
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

</style>