<template>
    <div class="product-card | flow" v-for="product in products" :key="product.id">
        <img height="300" width="400" :src="product.image" :alt="product.title">
        <div class="product-card__text">
            <h2 class="uppercase">{{product.title}}</h2>
            <h3 class="uppercase" >{{product.subtitle}}</h3>          

                <p class="inline" v-if="!product.readmore" >{{ (product.description).slice(0, product.description.indexOf('.')) + '...'}}</p>
                <p class="inline" v-else>{{  product.description }}</p>
                <button class="inline seemore" @click="product.readmore = !product.readmore">Ver {{ product.readmore ? 'Menos' : 'Más' }}</button>

                
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array, 
            required: true
        }
    },
    setup (props) {
        return { 


            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';

.inline {
    display: inline;
}
.seemore {
  border: none;
  background-color: transparent;
  color: $primary-clr-400;
  font-style: italic;
  cursor: pointer;
  text-decoration: underline;
  padding-left: .5em;
}

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
            margin-block: 1.5em;
            max-width: 100%;
            justify-content: center;
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
        font-weight: $fw-regular;
        .seemore {
            font-style:italic;
            color: $primary-clr-400 !important;
        }
        @media (max-width: 50em) {
            &{
                font-size: $fs-300;
                font-weight: $fw-regular;
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