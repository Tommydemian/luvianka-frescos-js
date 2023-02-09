<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Recetas</h1>
            <p>Explore the endless possibilities our products have to offer. From premium meat to delicious meals, we guarantee a satisfying experience.</p>
        </div>
        </div>

        <div style="margin-block:2em" class="product-card-grid | snaps-inline container-alternate default-margin-block">
          <RecipeCard :recipes="recipes" />
        </div>

        <section class="hero2 | alternative-margin-block">
          <div class="container | hero2-content">
            <h2 class="uppercase">sin añadidos de grasas trans, sabores artificiales o colorantes.</h2>
  <p>En Luvianka, confiamos en la fuente de nuestra carne y la controlamos rigurosamente para asegurar su frescura y calidad. Al ser nuestros propios proveedores, podemos ofrecerle la calidad que se merece. ¿Por qué no permitirnos hacerlo?</p>
          <button data-type="inverted" class="button">Catalogo</button>
          </div>
        </section>
    </section>
</template>

<script setup>
import RecipeCard from '../components/RecipeCard.vue';
import { ref } from 'vue'
    const recipes = ref([
    {
        id: 1,
        title: 'Solomillo de cerdo en salsa',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit tempor',
        image: new URL('../assets/images/recipesPage/recipe-gallery/receta1.jpg', import.meta.url).href
        
    },
    {
        id: 2,
        title: 'Cochinillo al horno',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit tempor',
        image: new URL('../assets/images/recipesPage/recipe-gallery/receta2.jpg', import.meta.url).href
        
    },
    {
        id: 3,
        title: 'costilla de cerdo al horno',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit tempor',
        image: new URL('../assets/images/recipesPage/recipe-gallery/receta3.jpg', import.meta.url).href
        
    },
    {
        id: 4,
        title: 'Pulled pork (sandwich)',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit tempor',
        image: new URL('../assets/images/recipesPage/recipe-gallery/receta4.jpg', import.meta.url).href
        
    },
    
    ]);
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';

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

  @media (max-width: 50em) {
    &{
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: 71%;
        overflow-x: scroll;
        overscroll-behavior-inline: contain; // containing the scrolling behaviour if it reaches the end
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

</style>