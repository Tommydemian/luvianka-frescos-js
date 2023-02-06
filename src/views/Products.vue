<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Productos</h1>
            <p>At Fiambres Luvianka, we are dedicated to providing high-quality meat selections. Our products are 100% health certified and sourced from reputable local farms.</p>
        </div>
        </div>

        <!-- DropDown Filter -->

        <div class="dropdown-section | container alternative-margin-block">
            <div class="dropdown relative">
                <p class="lookfor">Buscar productos...</p>    
                <Icon v-if="!isOpen" @click="displayProducts" class="dropdown-icon" icon="material-symbols:keyboard-arrow-down-rounded" color="#777" />
                <Icon class="dropdown-icon" v-if="isOpen" 
                @click="displayProducts"
                icon="material-symbols:keyboard-arrow-up-rounded" color="#777" />
            </div>
            
            <div v-if="isOpen" class="dropdown-content | absolute">    
              <ul class="flow">
                  <li v-if="selected !== 'All'" @click="resetFilter">Todos</li>
                  <li v-for="product in products" :key="product.id" :class="{'selectedprod': selected == product.title}" @click="selectProduct(product.title)">
                    {{ product.title }}
                  </li>
                </ul>
              
            
                <!-- <div>
                    <h3>Especiales</h3>
                    <ul class="flow">
                        <li>Pechito de cerdo</li>
                        <li>Bondiola de cerdo</li>
                        <li>Costillita de cerdo</li>
                        <li>Solomillo de cerdo</li>
                    </ul>
                </div>
                <div>
                    <h3>Destacados</h3>
                    <ul class="flow">
                        <li>Matambrito de cerdo</li>
                        <li>Milanesas de cerdo</li>
                        <li>Carre Deshuesado</li>
                        <li>Cuadril de cerdo</li>
                    </ul>
                </div>
                <div>
                    <h3>Elite</h3>
                    <ul class="flow">
                        <li>Ribs de cerdo</li>
                        <li>Chuleta de paleta de cerdo</li> 
                        <li>Chuleta de pernil</li>
                        <li>Churrasquito de cerdo</li>
                    </ul>
                </div>
                <div>
                    <h3>Ganadores</h3>
                    <ul class="flow">
                        <li>Cortes de cerdo para milanesa</li>
                        <li>Centro de pechito</li> 
                        <li>Vacio</li>
                    </ul>
                </div> -->
            </div>
            <div class="sortby | relative">
              <div class="sortby-mobile-content">
                <Icon v-if="isMobile" class="arrowdown-icon" icon="ph:arrow-fat-lines-down-bold" color="#ae0908" />
              </div>
                <div v-if="!isMobile" class="sortby-desktop-content">
                  <p>Filtrar por: <span>Mas vendido</span></p>
                  <Icon @click="displayFilter" class="sortby-icon" icon="material-symbols:keyboard-arrow-down-rounded" color="#ae0908" />
                </div>
            </div>
            <div class="filters | absolute" v-if="filterOpen"><ul>
                <li>Mas relevante</li>
                <li>Mas caro</li>
                <li>Mas barato</li>
            </ul>
        </div>
        </div>

        <!-- filteredProducts cards -->

        <div class="product-card-grid | snaps-inline container alternative-margin-block" :class="{'filtered-products': filtered}">
            <div class="product-card | flow" v-for="product in filteredProducts" :key="product.id">
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
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue';
  const products = ref([
  {
    id: 1,
    title: 'Solomillo de cerdo',
    subtitle: 'corte del costado',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '5kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/Frame 5764@2x.png', import.meta.url).href
  },
  {
    id: 2,
    title: 'Bondiola de cerdo',
    subtitle: 'corte del costado',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '5kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/bondiola.png', import.meta.url).href
    
  },
  {
    id: 3,
    title: 'Churrasquito de cerdo',
    subtitle: 'corte del costado',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '5kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/churrasquito.png', import.meta.url).href
    },
    {
    id: 4,
    title: 'Vacio ',
    subtitle: 'corte del lomo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '8kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/vacio.png', import.meta.url).href
    },
    {
    id: 5,
    title: 'Ribs de Cerdo ',
    subtitle: 'corte del lomo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '8kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/ribs.png', import.meta.url).href
    },
    {
    id: 6,
    title: 'Pechito de cerdo ',
    subtitle: 'corte del lomo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    weight: '8kg Aprox',
    price: '$10.50',
    image: new URL('../assets/images/productsPage/productGallery/pechito.png', import.meta.url).href
    },
    ]);
    const isOpen = ref(false);
    const filterOpen = ref(false);

    const displayProducts = () => {
      isOpen.value = !isOpen.value;
    };
    const displayFilter = () => {
        filterOpen.value = !filterOpen.value;
    }

    const selected = ref('All');

    const selectProduct = productTitle => {
      selected.value = productTitle;
      isOpen.value = false;
    };

    const filteredProducts = computed(() => {
      return selected.value === 'All'
        ? products.value
        : products.value.filter(product => product.title === selected.value);
    });

    const filtered = computed(() => selected.value !== 'All'); // # a "All".

    const resetFilter = () => {
      selected.value = "All";
    }

// Desktop & mobile # renders.
const screenWidth = ref(window.innerWidth);
const isMobile = computed(() => screenWidth.value < 800);

onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
})

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

/*Dropdown 
/* Dropdown 
*/  
.dropdown-section {
    display: flex;
    justify-content: space-between;
    position: relative;
   .dropdown {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color:$neutral-clr-290;
        border-radius: 100vw;
        border: 1px solid $neutral-clr-260;
        flex-basis: 75%;
        padding-inline: 1em;
        padding-block: .5em;
        flex-shrink:2;
        margin-right: 1em;
        
     p {
        font-size: $fs-400;
    }
    .dropdown-icon {
            width: 1.5em;
            height: 1.5em;
            cursor: pointer;
    }  
  }

.dropdown-content{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-columns: 20%;
    column-gap: 1em;
    padding: 1em;
    top: calc(100%);
    background-color: $neutral-clr-200;
    border-radius: 1.875em;
    border: 1px solid #ABABAB;
    box-shadow: 0px 16px 16px 5px rgba(0, 0, 0, 0.3);

    @media (max-width:50em) {
      grid-template-columns: 1fr;
    }

    h3 {
        color: $primary-clr-400;
        font-size: $fs-500;
        font-weight: $fw-semibold;
        text-transform: uppercase;
        padding-bottom: .5em;
    }
    ul {
        list-style: none;
    }
    ul li {
      text-transform: capitalize;
      cursor: pointer;
      @media (max-width: 50em) {
        & {
          font-size: $fs-400;
        }
      }


    }
    div {
        max-width: 35ch;
    }
}

.selectedprod {
  color: $primary-clr-400;
}
  .sortby {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-clr-400;
    font-size: $fs-400;
    border: 1px solid $primary-clr-400;
    border-radius: 100vw;
    padding: .5em;
    flex-basis: 20em;
    flex-grow: 2;
    @media (max-width: 50em) {
      flex-basis: auto;
    }

    span {
      font-weight: $fw-semibold;
    }
    .sortby-icon {
      width: 1em;
      height: 1em ;
      cursor: pointer;
    }
  }
}

.filters {
  right: 5em;
  bottom: 0;
  ul {
    list-style: none;
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

      & .product-card__text {
        padding: 1em;
        
      }


    img {
        border-radius: $def-br; //20px
        aspect-ratio: 16/9;
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

.filtered-products {
  display: block;
  margin-inline: auto;
  padding-inline: $size-400;
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