<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Recetas</h1>
            <p>Explore the endless possibilities our products have to offer. From premium meat to delicious meals, we guarantee a satisfying experience.</p>
        </div>
        </div>

        <div style="margin-block:2em" class="product-card-grid | snaps-inline container-alternate default-margin-block">
            <div class="product-card | flow relative" v-for="product in products" :key="product.id">
                <img height="500" width="400" :src="product.image" :alt="product.title">
                <div class="product-card__text">
                    <h2>{{product.title}}</h2>
                    <p>{{product.description}}</p>
                </div>
            </div>
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
import { ref } from 'vue'
    const products = ref([
    {
        id: 1,
        title: 'Sirloin Tacos',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit tempor',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        image: new URL('../assets/images/recipesPage/recipe-gallery/recipes1.jpg', import.meta.url).href
        
    },
    // {
    //     id: 2,
    //     title: 'Bondiola de cerdo',
    //     subtitle: 'corte del costado',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    //     weight: '5kg Aprox',
    //     price: '$10.50',
    //     image: new URL('../assets/images/productsPage/productGallery/product2.jpg', import.meta.url).href
        
    // },
    // {
    //     id: 3,
    //     title: 'Churrasquito de cerdo',
    //     subtitle: 'corte del costado',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    //     weight: '5kg Aprox',
    //     price: '$10.50',
    //     image: new URL('../assets/images/productsPage/productGallery/product3.jpg', import.meta.url).href
        
    // },
    // {
    //     id: 4,
    //     title: 'Vacio ',
    //     subtitle: 'corte del lomo',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    //     weight: '8kg Aprox',
    //     price: '$10.50',
    //     image: new URL('../assets/images/productsPage/productGallery/product4.jpg', import.meta.url).href
        
    // },
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
.product-card {
    border-radius: $def-br; //20px
    color: $neutral-clr-800;
    background-color: $neutral-clr-50;
    width: 25em;

    @media (max-width: 50em) {
        &{
            width: 100%;
            margin-block: 1.5em;
        }
      }
      
      
      
      img {
          border-radius: $def-br; //20px
          aspect-ratio: 16/9;
          position: relative;
          
        }
        & .product-card__text {
        padding: 1em;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom-left-radius: $def-br;
        border-bottom-right-radius: $def-br;
        background: rgba(0, 0, 0, 0.6); 
        backdrop-filter: blur(2px);
        color: $neutral-clr-50;



        
      }
    h2 {
        font-size: $fs-600;
        font-weight: $fw-medium;
        @media (max-width: 50em) {
            &{
                font-size: $fs-400;
            }
          }
    }
    p {
        max-width: 40ch;
        font-size: $fs-400;
        font-weight: $fw-light;

        .seemore {
            font-style:italic;
            color: $primary-clr-400 !important;
        }
        @media (max-width: 50em) {
            &{
                font-size: $fs-300;
            }
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