<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Recetas</h1>
            <p> Descubre las infinitas posibilidades que ofrecen nuestros productos. Desde carnes de alta calidad hasta platos deliciosos, garantizamos una experiencia satisfactoria.</p>
        </div>
        </div>

        <div style="margin-block:2em" class="product-card-grid | snaps-inline container-alternate default-margin-block">
          <RecipeCard :recipes="recipes" />        
        </div>

        <HeroBannerWithText />
    </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';

import RecipeCard from '../components/RecipeCard.vue';
import HeroBannerWithText from '../components/HeroBannerWithText.vue';

export default {
  components: {
    RecipeCard, 
    HeroBannerWithText, 
  },
  setup(){

const store = useStore()
return { recipes: computed(() => store.state.recipes) }
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
    background-image: url('../assets/images/recipesPage/hero/recipesHero.png');
    padding-block: 10em;
    background-position: 10% 70%;
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

.product-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1em;

  @include mq (medium){
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (max-width: 50em) {
    &{
        display: grid;
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: 87%;
        overflow-x: scroll;
        overscroll-behavior-inline: contain; // containing the scrolling behaviour if it reaches the end
        justify-content: flex-start;
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