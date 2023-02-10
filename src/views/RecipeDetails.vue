<template>
 <section>
    <div class="hero"></div>
<div class="container">
        <h2 class="rd-heading">{{ filteredRecipe.title }}</h2>
        <p class="rd-description">{{ filteredRecipe.description }}</p>
       

        <div class="rd-main | alternative-margin-block">
            <div class="ingredients-container flow">
                <h3 class="ingredients-heading">Ingredientes</h3>
                <ul class="ingredients-list">
                    <li v-for="ingredients in filteredRecipe.ingredientes " >{{ingredients}}</li>     
                </ul>
            </div>
            <div class="directions-container">
                <h3 class="directions-heading">Como prepararlo:</h3>
                
                    <div class="directions-list">
                        <div v-for="(steps, index) in filteredRecipe.steps" class="li">
                            <span>{{index + 1}}</span> 
                            <p>{{steps}}</p>
                          </div>
                    </div>
            
        </div>
        </div>

        <h2 class="discoverrecipes-heading">Descubra más recetas..</h2>
    <div class="random-images | alternative-margin-block">
                <RecipeCard :recipes="randomRecipes" />
    </div>
</div>

    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref, computed, watch  } from 'vue'
import RecipeCard from '../components/RecipeCard.vue';


export default {
    components: {
        RecipeCard
    },
    setup () {
        const route = useRoute();
        const recipeID = ref(route.params.id)

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
  
    
    // 3 random objects function.
  function getRandomRecipes(recipes) {
  let randomRecipes = [];
  let usedIndexes = [];
  
  while (randomRecipes.length < 3) {
      let randomIndex = Math.floor(Math.random() * recipes.length);
      
      if (!usedIndexes.includes(randomIndex)) {
          randomRecipes.push(recipes[randomIndex]);
          usedIndexes.push(randomIndex);
        }
    }
    
    return randomRecipes;
}


watch(
    () => recipeID.value, // first param, your object
    (params) => {
        console.log(params);
        changeValue(currValue); //changeValue is a function
        
    }
    )
    
    const randomRecipes = computed(() => getRandomRecipes(recipes.value)) ;
    
    // computed => filter object to display.
    const filteredRecipe = computed(() => recipes.value.filter( recipe => recipe.id == recipeID.value)) 
    return {
            recipeID,
             filteredRecipe: filteredRecipe.value[0],
             randomRecipes
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
    background-image: url('../assets/images/recipesPage/hero/louis-hansel-Sj8rgEu7jcM-unsplash.jpg');
    padding-block: 15em;
    background-position: 80% 40%;
    background-repeat: no-repeat;
    background-size:cover;
    margin-bottom: 5em;

    @media (max-width: 50em) {
        & {
            padding-block: 10em;
            background-position: 40% 50%;
            margin-bottom: 0em;
        }
    }
}

.rd-heading {
    color: $primary-clr-400;
    font-size: $fs-950;
    font-weight: $fw-bold;
    padding-bottom: .5em;
    text-align: center;
    @include mq (small) {
        font-size: $fs-700;
    }
}

.rd-subheading {
  display: flex;
  justify-content: flex-start;
  img {
    height: 300px;
  }
  p {
    max-width: 20ch;
  }
}

.rd-description {
    font-size: $fs-600;
    font-weight: $fw-regular;
    @include mq (small) {
        font-size: $fs-400;
    }
}

.rd-main {
    display: flex;
    justify-content: space-around;
    gap: 1em;
    background-color: $neutral-clr-50;
    border-radius: 2.5em;
    padding: 3em;
    @include mq (small ){
        flex-direction: column;
        padding: 1em;
    }

    .ingredients-container {
        padding-inline:1em ;
        border-right: 2px solid $primary-clr-400;
        flex-basis: 50%;
        @include mq (small ){
            border-right: none;
            border-bottom: 2px solid $primary-clr-400 ; 
            padding-inline: 0;
        }
        
        .ingredients-heading {
            color: $primary-clr-400;
            font-weight: $fw-semibold;
            font-size: $fs-750;
        }
        .ingredients-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        list-style: inside;
        list-style-image: url(../assets/svgs/circle.svg);

        li {
            padding-block: 1em;
            padding-right: 1em;
        }

        }
    }
    
    .directions-container {
        padding-inline:1em ;
        flex-basis: 50%;
        @include mq (small ){
            padding-inline: 0;
        }
        .directions-heading {
            color: $primary-clr-400;
            font-weight: $fw-semibold;
            font-size: $fs-750;
            text-align: left;
        }
        .directions-list {
            .li {
                margin-block:1em;
                display: flex;
            }
            div span {
                display:inline-flex;
                align-items:center;
                justify-content:center;
                width:25px;
                height:25px;
                border-radius:50%;
                background-color:$primary-clr-400;
                color: $neutral-clr-50;
                padding: .5em;
              }      
              p {
                max-width: 40ch;
                padding-left: 1em;
              }
        }
    }

}



.recipe-card {
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
          position: relative;
          
        }
        & .recipe-card__text {
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

.discoverrecipes-heading {
    color: $primary-clr-400;
    font-weight: $fw-semibold;
    font-size: $fs-750;
}
.random-images {
    display: flex;
    justify-content: space-between;
    @include mq (small){
        display: block;
    }
}

</style>


