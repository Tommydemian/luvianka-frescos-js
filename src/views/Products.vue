<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Productos</h1>
            <p>En Fiambres Luvianka, nos dedicamos a ofrecer selecciones de carnes de alta calidad. Nuestros productos están 100% certificados en cuanto a salud y nos aseguramos de elegir cuidadosamente la materia prima.</p>
        </div>
        </div>

        <!-- DropDown Filter -->
        <DropdownFilter
          :elements="productGroups"
          :selected="selected"
          @update:selected="updateSelected"
        />
        
        <div v-for="group in filteredGroups" class="snaps-inline container alternative-margin-block" :class="{'filtered-products': filtered}">
          <h2 class="products-subgroups" :key="group.name" >{{group.name}}</h2>
        <div class="product-card-grid">
          <ProductCard :products="group.products" />
        </div>
        </div>

        <!-- Hero 2 Section -->
        <HeroBannerWithText />

    </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import ProductCard from '../components/ProductCard.vue';
import HeroBannerWithText from '../components/HeroBannerWithText.vue';
import DropdownFilter from '../components/DropdownFilter.vue';

export default {
  components: {
    ProductCard,
    HeroBannerWithText,
    DropdownFilter
  }, 
  setup(){
    const store = useStore()

    const productGroups = computed(() => store.state.productGroups)

    const selected = ref('All');

    const updateSelected = productTitle => {
            selected.value = productTitle;
        };

    const filteredGroups = computed(() => {
      return selected.value === 'All'
        ? productGroups.value
        : productGroups.value.filter(group => group.name === selected.value);
    });

    const filtered = computed(() => selected.value !== 'All'); // # a "All".
    
    return {
      selected, 
      updateSelected, 
      filteredGroups,
      filtered,
      productGroups: computed(() => store.state.productGroups )
    }
}
}


</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';
@import '../scss/mixins.scss';

.flow * + * {
    margin-top: var(--flow-spacer, .5em);
  }
.hero {
    background-image: url('../assets/images/productsPage/hero2.png');
    padding-block: 10em;
    background-position: 10% 100%;
    background-repeat: no-repeat;
    background-size:cover;
    margin-bottom: 5em;

    @media (max-width: 50em) {
        & {
            padding-block: 7.5em;
            background-position: 60% 50%;
            margin-bottom: 0em;
        }
    }
}

.hero-content {
  color: $neutral-clr-50;
  h1 {
    font-size: $fs-950;
    font-weight: $fw-bold;

    @media (max-width:50em) {
        & {
            font-size: $fs-650;
        }
    }
  }// termina el h1
  p {
    font-size: $fs-600;
    max-width: 45ch;

    @media (max-width: 50em) {
       font-size: $fs-400;
  }
}
}

.products-subgroups {
  font-size: 2rem;
  color: $primary-clr-400;
  font-weight: $fw-semibold;
  margin-block: 1em;
  text-align: center;
  text-transform: capitalize;
}


.product-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1em;
  @include mq (medium){
    display: flex;
    justify-content: space-evenly;
    row-gap: 2em;
    flex-wrap: wrap;
  }

  @media (max-width: 50em) {
    &{
        display: grid;
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: 71%;
        overflow-x: scroll;
        overscroll-behavior-inline: contain; // containing the scrolling behaviour if it reaches the end
        justify-content: flex-start;
      }
  }
}


.filtered-products {
  display: block;
  margin-inline: auto;
  padding-inline: $size-400;

  @include mq(small){
    & {
      padding-inline:0;
    }
  }
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: .25em;
}

.snaps-inline > * {
  scroll-snap-align: start;
}

::-webkit-scrollbar {
  height: .75em;
}
::-webkit-scrollbar-track {
  background: $neutral-clr-275;
  margin-inline: .5em;
  border-radius: 100vw;
}
::-webkit-scrollbar-thumb {
  background: $neutral-clr-250;
  border-radius: 100vw;
  border: .25em solid $neutral-clr-275 ;
}
</style>