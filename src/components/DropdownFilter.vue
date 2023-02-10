<template>
    <!-- DropDown Filter -->

    <div class="dropdown-section | container alternative-margin-block">
        <div class="dropdown relative">
            <p class="lookfor">{{ lookForTitle }}</p>    
            <Icon v-if="!isOpen" @click="displayProducts" class="dropdown-icon" icon="material-symbols:keyboard-arrow-down-rounded" color="#777" />
            <Icon class="dropdown-icon" v-if="isOpen" 
            @click="displayProducts"
            icon="material-symbols:keyboard-arrow-up-rounded" color="#777" />
        </div>
        
        <div v-if="isOpen" class="dropdown-content | absolute">    
          <ul class="flow">
              <li v-if="selected !== 'All'" @click="resetFilter">Todos</li>
              <li v-for="element in elements" :key="element.id" :class="{'selectedprod': selected == element.name}" @click="selectProduct(element.name)">
                {{ element.name }}
              </li>
            </ul>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue' 

import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon
    },
    emits: ['update:selected'],
    props: {
        lookForTitle: {
            type: String,
            default: 'Buscar Productos',
        }, 
        elements: {
            type: Array, 
            required: true,
        },
        selected: {
            type: String, 
            required: true,
  }
    },
    setup (props, {emit}) {
    
        const isOpen = ref(false);

        const displayProducts = () => {
          isOpen.value = !isOpen.value;
        };


        const selectProduct = productTitle => {
            emit('update:selected', productTitle);
          isOpen.value = false;
        };

        const resetFilter = () => {
            emit('update:selected', 'All');
        }
        
        return { 
            isOpen, 
            displayProducts,
            selectProduct,
            resetFilter 
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';
@import '../scss/mixins.scss';

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

</style>