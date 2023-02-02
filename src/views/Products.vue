<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Productos</h1>
            <p>At Fiambres Luvianka, we are dedicated to providing high-quality meat selections. Our products are 100% health certified and sourced from reputable local farms.</p>
        </div>
        </div>

        <div style="margin-block:2em" class="product-card-grid | container-alternate default-margin-block">
            <div class="product-card | flow" v-for="product in products" :key="product.id">
                <img height="300" width="400" :src="product.image" :alt="product.title">
                <div class="product-card__text">
                    <h2 class="uppercase">{{product.title}}</h2>
                    <h3 class="uppercase" >{{product.subtitle}}</h3>
                    <p>{{product.description}} <span class="seemore">ver mas...</span></p>
                    <div><p><span class="leftside">Weight:</span>: {{product.weight}}</p></div>
                    <div><p><span class="leftside">Price:</span>{{product.price}}</p></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
    const products = ref([
    {
        id: 1,
        title: 'Solomillo de cerdo',
        subtitle: 'corte del costado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        weight: '5kg Aprox',
        price: '$10.50',
        image: new URL('../assets/images/productsPage/productGallery/product1new.jpg', import.meta.url).href
        
    },
    {
        id: 2,
        title: 'Bondiola de cerdo',
        subtitle: 'corte del costado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        weight: '5kg Aprox',
        price: '$10.50',
        image: new URL('../assets/images/productsPage/productGallery/product2.jpg', import.meta.url).href
        
    },
    {
        id: 3,
        title: 'Churrasquito de cerdo',
        subtitle: 'corte del costado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        weight: '5kg Aprox',
        price: '$10.50',
        image: new URL('../assets/images/productsPage/productGallery/product3.jpg', import.meta.url).href
        
    },
    // {
    //     id: 4,
    //     title: 'Vacio ',
    //     subtitle: 'corte del lomo',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    //     weight: '8kg Aprox',
    //     price: '$10.50',
    //     image: new URL('../assets/images/productsPage/productGallery/product1.jpg', import.meta.url).href
        
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
        overscroll-behavior-inline: contain;
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

      & .product-card__text {
        padding: 1em;
        
      }


    img {
        border-radius: $def-br; //20px
    }
    h2 {
        color: $primary-clr-400;
        font-size: $fs-650;
        @media (max-width: 50em) {
            &{
                font-size: $fs-400;
            }
          }
    }
    h3 {
        color: $neutral-clr-275;
        font-size: $fs-500;
        @media (max-width: 50em) {
            &{
                font-size: $fs-200;
            }
          }
    }
    p {
        max-width: 40ch;
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
    .leftside {
      color: $neutral-clr-275;
      @media (max-width: 50em) {
        &{
            font-size: $fs-300 ;
        }
      }
    } 
}

</style>