<template>
    <div class="product-card | flow" v-for="product in products" :key="product.id">
        <img height="300" width="400" :src="product.image" :alt="product.title">
        <div cFlass="product-card__text">
            <h2 class="uppercase">{{product.title}}</h2>
            <h3 class="uppercase" >{{product.subtitle}}</h3>           
                <!-- <p class="ellipsis-text" v-if="!showFullText">{{ (product.description) }}</p> {{ showFullText }} -->
                <p>{{ product.description }}</p>
                <!-- <button v-if="truncatedDescription !== product.description" @click="toggleFullText">See {{ showFullText ? 'Less' : 'More' }}</button> -->
            
            <div><p><span class="leftside">Weight:</span>{{product.weight}}</p></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        products: {
            type: Array, 
            required: true
        }
    },
    setup (props) {
    // const ellipsis = ref(false);

    // function iterateTroughDesc(description){
    //  const descWords = description.split(" ").length
    //  if (descWords > 30 ) ellipsis.value = true
    //  return description;
    // }
    const showFullText = ref(false);

    function truncateWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length <= maxWords) {
    return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
    }

    function toggleFullText() {
     showFullText.value = !showFullText.value;
    }
        

        return {
            truncateWords,
            toggleFullText,
            showFullText
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';

.ellipsis-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;   
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

</style>