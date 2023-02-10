<template>
    <div class="recipe-card | flow relative" v-for="recipe in recipes" :key="recipe.id">
        <router-link 
        :to="`recetas/${recipe.id}`"
        :props="{ recipes: recipe }">
        <img height="400" width="600" :src="recipe.image" :alt="recipe.title">
        <div class="recipe-card__text">
            <h2>{{recipe.title}}</h2>
            <p>{{recipe.description}}</p>
        </div>
    </router-link>
    <button @click="handleClick">view Recipe</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: {
        recipes:{
            type: Array,
            required: true
        }
    },
    setup () {

        
    const router = useRouter()

    const handleClick = () => {
    for (recipe of props.recipes){
        router.push({ name: 'recipe-details', params: { id: recipe.id }, props: { recipe: recipe } })
    }
    }

        

        return {handleClick}
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';

.flow * + * {
    margin-top: var(--flow-spacer, .5em);
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

</style>