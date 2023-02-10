<template>
 <section>
    <div class="hero"></div>


<div class="container | default-margin-block">
    

        <h2 class="rd-heading">{{ filteredRecipe.title }}</h2>
        <p class="rd-description">Easy and delicious, you’ll love making these sirloin tacos using Fiambres Luvianka’s quality Pork Loin cuts. The wonderful texture of the pork mixed with soft tortilla and flavorful spices creates a wonderful dish to remember. Perfect for a casual dinner or special occasions. </p>


        <div class="rd-main | alternative-margin-block">
            <div class="ingredients-container flow">
                <h3 class="ingredients-heading">Ingredientes</h3>
                <ul class="ingredients-list">
                    <li>solomillo de cerdo.</li>     
                    <li>1 hoja de laurel o 1 ramita de tomillo o 1 ramita de romero.</li>
                    <li>1 lata de cerveza, puede ser rubia o negra ¡quedan súper!.</li>
                    <li>Sal.</li>
                    <li>1/2 taza de salsa de soja.</li>
                    <li> cebollas medianas.</li>
                    <li>hoja de laurel o 1 ramita de tomillo o 1 ramita de romero.</li>
                    <li>1 hoja de laurel o 1 ramita de tomillo o 1 ramita de romero.</li>
                    <li>1 hoja de laurel o 1 ramita de tomillo o 1 ramita de romero.</li>
                    <li>1 hoja de laurel o 1 ramita de tomillo o 1 ramita de romero.</li>
                </ul>
            </div>
            <div class="vl"></div>
            <div class="directions-container">
                <h3 class="directions-heading">Como prepararlo:</h3>
                
                    <div class="directions-list">
                        <div class="li">
                            <span>1</span> 
                            <p>Season both sides of the pork loin and cook according to package directions. Let meat rest.</p>
                          </div>
                          <div class="li">
                            <span>2</span> 
                            <p>Mix tomato, onion, and jalapeno in a bowl. Toss with lemon juice, salt, and pepper.</p>
                          </div>
                          <div class="li">
                            <span>3</span> 
                            <p>Heat tortillas and fill with pork and vegetable mixture. Enjoy!</p>
                          </div>
                    </div>
            
        </div>
        </div>

    <div class="random-images">
        
            <div class="recipe-card |  flow relative container" v-for="randomrecipe in randomRecipes">
                <img height="400" width="600" :src="randomrecipe.image" :alt="randomrecipe.title">
                <div class="recipe-card__text">
                        <h2>{{randomrecipe.title}}</h2>
                        <p>{{randomrecipe.description}}</p>
                    </div>
                </div>
    </div>
</div>

    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref, computed  } from 'vue'

export default {
    setup () {
        const route = useRoute();
        const recipeID = ref(route.params.id)
 
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

    // computed => filter object to display.
    const filteredRecipe = computed(() => recipes.value.filter( recipe => recipe.id == recipeID.value)) 

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

const randomRecipes = computed(() => getRandomRecipes(recipes.value)) ;

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
    text-align: center;
    @include mq (small) {
        font-size: $fs-700;
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
        list-style-image: url(../assets/svgs/circle.svg);
        list-style: inside;

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

.random-images {
    display: flex;
    @include mq (small){
        display: block;
    }
}

</style>