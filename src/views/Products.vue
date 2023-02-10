<template>
    <section class="product-gallery-section">
        <div class="hero">
        <div class="hero-content | container">
            <h1>Productos</h1>
            <p>En Fiambres Luvianka, nos dedicamos a ofrecer selecciones de carnes de alta calidad. Nuestros productos están 100% certificados en cuanto a salud y nos aseguramos de elegir cuidadosamente la materia prima.</p>
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
                  <li v-for="group in groups" :key="group.name" :class="{'selectedprod': selected == group.name}" @click="selectProduct(group.name)">
                    {{ group.name }}
                  </li>
                </ul>
            </div>
            <!-- <div class="sortby | relative">
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
            </ul> -->
        <!-- </div> -->
        </div>

        <!-- filteredProducts cards -->

        
        <div v-for="group in filteredGroups" class="snaps-inline container alternative-margin-block" :class="{'filtered-products': filtered}">
          <h2 class="products-subgroups" :key="group.name" >{{group.name}}</h2>
        <div class="product-card-grid">
          <ProductCard :products="group.products" />
        </div>
        </div>

        <section class="hero2 | alternative-margin-block">
          <div class="container | hero2-content">
            <h2 class="uppercase">sin añadidos de grasas trans, sabores artificiales o colorantes.</h2>
  <p>En Luvianka, confiamos en la fuente de nuestra carne y la controlamos rigurosamente para asegurar su frescura y calidad. Al ser nuestros propios proveedores, podemos ofrecerle la calidad que se merece. ¿Por qué no permitirnos hacerlo?</p>
          <button data-type="inverted" class="button">Catálogo</button>
          </div>
        </section>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue';
import ProductCard from '../components/ProductCard.vue';
const groups = ref([
  {
    'name': 'cortes del lomo',
    products: [
      {
    id: 1,
    title: 'Solomillo de cerdo',
    subtitle: 'El corte premium de la espalda del cerdo',
    subgroup: 'lomo',
    description: 'El solomillo de cerdo es un corte de carne de cerdo del lomo que se conoce por su sabor y suavidad. Es una pieza magra y tierna, ideal para asar, saltear o cocinar al horno.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/Frame 5764@2x.png', import.meta.url).href,
    readmore: false
  },
  {
    id: 3,
    title: 'Churrasquito de cerdo',
    subtitle: 'Corte tierno y versátil',
    subgroup: 'lomo',
    description: 'El churrasquito de cerdo es un corte de carne de cerdo que se obtiene de la parte superior del lomo. Se trata de un corte magro y tierno que se puede cocinar de varias formas y es ideal para platos asados.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/churrasquito.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 4,
    title: 'Vacio ',
    subtitle: 'El corte de lomo infaltable',
    subgroup: 'lomo',
    description: 'El vacío de cerdo es un corte magro y tierno de la parte trasera del animal, ideal para asado y parrilla. Es una parte rica en proteínas y baja en grasas, haciéndolo una opción saludable para dietas equilibradas. Se encuentra cerca de la cola y se puede cortar en filetes o tiras, es común en la cocina argentina y uruguaya.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/vacio.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 9,
    title: 'Carre deshuesado', 
    subtitle: 'Corte de carne sin hueso para asado o a la parrilla',
    subgroup: 'lomo',
    description: 'El carré deshuesado es un corte de cerdo que proviene de la parte trasera del animal, cerca de la espalda. Es un corte ancho y plano, que se caracteriza por tener un hueso retirado, lo que lo hace fácil de cortar y servir. Se puede cocinar a la parrilla, al horno o en la sartén y es ideal para asados y guisos. Es un corte muy versátil y tierno, con una textura suave y un sabor delicioso.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/carredeshuesado.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 10,
    title: 'Milanesa de cerdo', 
    subtitle: 'Filete de Lomo de Cerdo Adobado',
    subgroup: 'lomo',
    description: 'Las milanesas de cerdo son filetes de cerdo ligeramente marinados y luego panados y fritos hasta dorarse. Son un plato típico de la cocina argentina y sudamericana y se pueden servir como plato principal o como guarnición. Son populares por su sabor y textura crujiente, y se pueden rellenar con queso, jamón o verduras para agregar un toque extra de sabor.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/milanesa.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 11,
    title: 'Cuadril de cerdo', 
    subtitle: 'Corte premium de cuadril de cerdo',
    subgroup: 'lomo',
    description: 'El cuadril de cerdo es un corte de carne que proviene del lomo o espalda del animal. Es un corte magro y tierno, y se puede cortar en filetes o en tiras. Es ideal para la parrilla, el asado o la cocción rápida en sartén. Es una parte de la carne versátil y popular en muchos países, y se utiliza en una variedad de platos, desde ensaladas hasta platos principales.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/cuadril.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 14,
    title: 'Cortes para milanesa', 
    subtitle: 'corte ideal para empanados',
    subgroup: 'lomo',
    description: 'Los cortes de cerdo más comunes para hacer milanesas son el lomo, el filete y el cuadril. Estos cortes son magros y tiernos, lo que los hace ideales para la preparación de milanesas. Sin embargo, es fundamental que el corte sea uniforme y delgado para asegurar una buena textura y cocción en la milanesa. Además, algunas personas prefieren usar carne picada en lugar de cortes enteros para hacer milanesas, pero esto depende del gusto personal...',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/cortesparamilanesa.png', import.meta.url).href,
    readmore: false
    }
    ],
  },
  {
    name: 'Cortes del hombro',
    products: [
      {
    id: 2,
    title: 'Bondiola de cerdo',
    subtitle: 'Corte tierno y versátil',
    subgroup: 'hombro',
    description: 'La bondiola de cerdo es un corte de carne de cerdo que proviene de la parte trasera del animal, cerca del lomo. Es un corte marmorizado, con una combinación de carne magra y grasa, ideal para asar al horno o a la parrilla. También se puede utilizar para hacer guisos y estofados. Es un corte popular y se caracteriza por su sabor suave y jugoso.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/bondiola.png', import.meta.url).href,
    readmore: false

  },
  {
    id: 6,
    title: 'Pechito de cerdo ',
    subtitle: 'Delicioso corte de la pechuga',
    subgroup: 'hombro',
    description: 'El pechito de cerdo es un corte de carne magro y tierno que proviene del pecho del cerdo. Es un corte versátil que se puede cocinar de varias maneras, como asado, parrilla, a la plancha o a la parrilla. Se puede cortar en filetes o en tiras para hacer platos como lomitos o cordero a la parrilla. Es una opción saludable debido a su bajo contenido de grasa y alto contenido de proteínas.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/pechito.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 8,
    title: 'Matambrito de cerdo ',
    subtitle: 'Corte Tierno y Suave',
    subgroup: 'hombro',
    description: 'El matambrito de cerdo es un corte de carne de la parte del pecho del animal. Es un corte magro y tierno que se suele utilizar para hacer asados o para milanesas. A menudo se considera una opción saludable debido a su bajo contenido de grasa y su alto contenido de proteínas.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/matambrito.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 12,
    title: 'Chuleta de paleta', 
    subtitle: 'Hueso en T para cocinar a la parrilla',
    subgroup: 'hombro',
    description: 'La chuleta de paleta de cerdo es un corte de carne de la parte superior del hombro del animal. Es un corte tierno y con poca grasa, por lo que es ideal para cocinar a la parrilla o al horno. Se puede cortar en filetes gruesos o en tiras finas, y se utiliza comúnmente en la cocina argentina y uruguaya.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/chuletadepaleta.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 13,
    title: 'Chuleta de pernil', 
    subtitle: 'Corte suculento de pernil de cerdo',
    subgroup: 'hombro',
    description: 'La chuleta de pernil es un corte de carne de cerdo que proviene de la parte trasera del animal, cerca de la cola. Es un corte fácil de preparar y se puede cocinar a la parrilla, al horno o en una sartén. Es una parte de la carne magra y tierna, por lo que es una opción saludable para aquellos que siguen una dieta equilibrada. Además, su sabor es suave y versátil, por lo que se puede combinar con diferentes sabores y es una opción popular para cenas familiares.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/chuletadepernil.png', import.meta.url).href,
    readmore: false
    }
  ]
  },
  {
    name: 'Cortes de la Costilla',
    products: [
      {
    id: 5,
    title: 'Ribs de Cerdo ',
    subtitle: 'Deliciosas y tiernas costillas',
    subgroup: 'costilla',
    description: 'Las ribs o costillas de cerdo son un corte de carne de la parte posterior del animal. Se caracterizan por tener una capa de grasa y una capa de carne, lo que las hace muy sabrosas. Se pueden asar o ahumar para conseguir un sabor ahumado y tierno, y se utilizan comúnmente en platos como el barbecue o el asado.',
    weight: '7/8kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/ribs.png', import.meta.url).href,
    readmore: false
    },
    {
    id: 7,
    title: 'Costillita de cerdo ',
    subtitle: 'La reina de la barbacoa',
    subgroup: 'costilla',
    description: 'Las costillitas de cerdo son cortes de carne de la espalda del animal, compuestos de la costilla y una porción de la carne adyacente. Son populares en la cocina de barbeque y se pueden asar, cocinar a la parrilla o hacer a la parrilla hasta que estén tiernas y doradas, con una textura suave y sabores intensos. Se pueden servir como plato principal o como aperitivo, y son una opción popular en la cocina estadounidense y sudamericana.',
    weight: '5kg Aprox',
    image: new URL('../assets/images/productsPage/productGallery/costillita.png', import.meta.url).href,
    readmore: false
    },
    ]
  }
])
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

    const filteredGroups = computed(() => {
      return selected.value === 'All'
        ? groups.value
        : groups.value.filter(group => group.name === selected.value);
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
        flex-basis: 100%;
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
  @include mq (medium) {
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