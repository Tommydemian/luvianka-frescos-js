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
          <button data-type="inverted" class="button">Catálogo</button>
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
    title: 'Lomo de Cerdo con Salsa de Miel y Mostaza',
    description: 'Una receta clásica con solo 6 ingredientes y 4 pasos. Lomo de cerdo adobado con una salsa dulce y picante.',
    ingredientes: [
      'Lomo de cerdo',
      'Mostaza Dijon',
      'Miel',
      'Ajo',
      'Sal y pimienta'
    ],
    steps: [
      'Mezclar mostaza, miel, ajo, sal y pimienta en un tazón pequeño.',
      'Adobar el lomo de cerdo con la mezcla de la salsa.',
      'Cocinar en una sartén hasta que esté dorado por ambos lados.',
      'Verter la salsa sobre el lomo de cerdo y continuar cocinando hasta que esté completamente cocido.'
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/lomo-de-cerdo-recetas-miel-mostaza.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: "Cerdo en Adobo",
    description: "Este platillo mexicano requiere 8 ingredientes y solo 4 pasos para una carne de cerdo suave y sabrosa.",
    ingredientes: [
      "Carne de cerdo",
      "Ajo",
      "Comino",
      "Oregano",
      "Vinagre blanco",
      "Agua",
      "Sal",
      "Pimienta negra"
    ],
    steps: [
      "Mezclar los ingredientes de adobo en un tazón grande.",
      "Añadir la carne de cerdo y marinar por un mínimo de 2 horas.",
      "Cocinar la carne de cerdo en una sartén hasta que esté dorada por ambos lados.",
      "Verter el adobo sobre la carne y continuar cocinando hasta que esté suave y tierno."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/cerdoadobo.jpg', import.meta.url).href
  },
  { id: 3,
    title: "Cerdo Ahumado con Papas",
    description: "Una cena fácil de hacer en solo 9 ingredientes y 4 pasos. La carne de cerdo ahumada se cocina junto con papas para una comida completa.",
    ingredientes: [
      "Papas",
      "Carne de cerdo ahumada",
      "Cebolla",
      "Ajo",
      "Aceite de oliva",
      "Tomates cherry",
      "Sal y pimienta",
      "Tomillo",
      "Orégano"
    ],
    steps: [
      "Precalentar el horno a 200 grados Celsius.",
      "Cortar las papas en cubos y mezclarlas con cebolla, ajo, aceite de oliva, tomates cherry, sal, pimienta, tomillo y orégano.",
      "Colocar la mezcla de papas en una bandeja para hornear.",
      "Añadir la carne de cerdo ahumada y hornear por 25 minutos o hasta que estén doradas."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/cerdoahumadopapas.jpg', import.meta.url).href
  },
  {
    id: 4,
    title: "Cerdo en Salsa de Naranja",
    description: "Una combinación dulce y picante de 7 ingredientes y 4 pasos para una carne de cerdo tierna y sabrosa.",
    ingredientes: [
      "Carne de cerdo",
      "Jugo de naranja",
      "Miel",
      "Soja",
      "Ajo",
      "Gengibre",
      "Cebolla"
    ],
    steps: [
      "Mezclar el jugo de naranja, miel, soja, ajo, gengibre y cebolla en un tazón pequeño.",
      "Cortar la carne de cerdo en tiras y marinar en la salsa por un mínimo de 1 hora.",
      "Cocinar la carne de cerdo en una sartén hasta que esté dorada por ambos lados.",
      "Verter la salsa sobre la carne y continuar cocinando hasta que esté completamente cocida."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/cerdonaranja.webp', import.meta.url).href
  },
  {
    id: 5,
    title: "Chuletas de Cerdo con Salsa de Manzana",
    description: "Un platillo clásico con 7 ingredientes y 4 pasos para una carne de cerdo tierna y sabrosa con un toque dulce de manzana.",
    "ingredientes": [
    "Chuletas de cerdo",
    "Manzana",
    "Cebolla",
    "Ajo",
    "Vinagre balsámico",
    "Miel",
    "Sal y pimienta"
    ],
    steps: [
    "Cortar la manzana y la cebolla en cubos pequeños.",
    "Mezclar ajo, vinagre balsámico, miel, sal y pimienta en un tazón pequeño para crear la salsa.",
    "Cocinar las chuletas de cerdo en una sartén hasta que estén doradas por ambos lados.",
    "Añadir la manzana y la cebolla a la sartén con las chuletas y verter la salsa sobre ellas. Cocinar hasta que la manzana esté suave y la salsa se haya espesado."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/cerdomanzana.jpg', import.meta.url).href
    },
    {
    id: 6,
    title: "Costillas de Cerdo al Horno con BBQ",
    description: "Un platillo fácil de hacer con 7 ingredientes y 4 pasos para costillas de cerdo tiernas y con un sabor ahumado a barbacoa.",
    "ingredientes": [
    "Costillas de cerdo",
    "Ketchup",
    "Miel",
    "Vinagre de manzana",
    "Mostaza dijon",
    "Ajo",
    "Sal y pimienta"
    ],
    steps: [
    "Mezclar ketchup, miel, vinagre de manzana, mostaza dijon, ajo, sal y pimienta en un tazón pequeño para crear la salsa de barbacoa.",
    "Cubrir las costillas de cerdo con la salsa de barbacoa y dejar marinar por un mínimo de 2 horas.",
    "Precalentar el horno a 220 grados Celsius.",
    "Colocar las costillas en una bandeja para hornear y hornear por 45 minutos o hasta que estén tiernas y doradas. Servir con más salsa de barbacoa al gusto."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/costillas-de-cerdo-en-salsa-barbicue.jpg', import.meta.url).href
    },
    {
    id: 7,
    title: " Solomillo de cerdo con salsa de cerezas",
    description: "El cerdo y las frutas se complementan a la perfección de manera sencilla y elegante y en esta meravillosa receta.",
    "ingredientes": 
    ["2 solomillos de cerdo",
    "2 naranjas",
    "1 limón",
    "200g de cerezas",
    "4 cucharadas de miel",
    "un poco de whisky",
    "sal y pimienta"]
    ,
    steps: [
        "Mezclar zumo de naranja y limón con miel y agua. Pintar solomillos con esta mezcla y dejar marinar por unas horas.",
        "Cocinar las cerezas con zumo de naranja y limón, whisky y miel en una cazuela a fuego lento.",
        "Reducir la salsa hasta que quede espesa.",
        "Cocinar los solomillos marinados hasta que estén listos. Servir con la salsa de cerezas por encima."
    ],
    image: new URL('../assets/images/recipesPage/recipeGallery/cerezaycerdo.jpg', import.meta.url).href
    }
    ])
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
        grid-auto-columns: 87%;
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