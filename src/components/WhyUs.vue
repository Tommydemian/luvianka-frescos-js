<template>
    <section class="why-us | container default-margin-block">
        <div class="why-us-heading">
          <h2>Por qué elegir Luvianka:</h2>
          <p class="whyus-subheading">Nuestro compromiso es ofrecerle productos frescos y de calidad, elaborados con materias primas cuidadosamente seleccionadas. Al ser nuestros propios proveedores, garantizamos la máxima calidad en cada corte.</p>
        </div>

        <div class="why-us-grid flow">
        <div class="why-us-content | text-center" v-for="el in whyusElements" :key="el.id">
            <Icon class="why-us__icon" :icon="el.icon" color="white" /> 
          <h3>{{el.title}}</h3>
          <p class="why-us-desc">
            {{ el.description }}
          </p>
        </div>
        </div>
        </section>
        
</template>

<script setup>
import { Icon } from '@iconify/vue'

const whyusElements = [
  {
    id: 1,
    icon: 'mdi:medal-outline',
    title: 'Calidad', 
    description: 'Ofrecemos calidad superior en la selección de animales y elaboración de cortes, brindando productos frescos y de máxima calidad a nuestros clientes. Somos reconocidos como una de las mejores empresas en el mercado con estándares éticos y de calidad.'
  },
  {
    id: 2,
    icon: 'uil:technology',
    title: 'Tecnología', 
    description: 'Nuestra tecnología de producción de vanguardia nos permite elaborar cada corte con cuidado y minimizar su manipulación, creando una experiencia única y auténtica en cada bocado. Confíe en nosotros para brindarle productos de excepcionales que hablan por sí solos.'
  },
  {
    id: 3,
    icon: 'academicons:ideas-repec',
    title: 'Innovación', 
    description: 'En Frescoes Luvianka, ofrecemos productos de calidad superior a través de nuestro enfoque en la innovación. Nos aseguramos de que cada uno de nuestros productos sea único y satisfactorio, brindándole una experiencia culinaria inolvidable.'
  },
]

</script>

<style lang="scss" scoped>
@import '../scss/variables'; 
@import '../scss/utility'; 
@import '../scss/mixins'; 
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

    .why-us-content {
      @include mq (small) {
        padding-inline: 1em;
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
      padding-block: 1em;
    }
    @media (max-width:50em) {
      & .why-us-grid p {
        font-size: $fs-200;
      }
    }
  }

</style>