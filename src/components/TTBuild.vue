<template>
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
   
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables'; 
@import '../scss/utility'; 
@import '../scss/mixins'; 

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
  

</style>