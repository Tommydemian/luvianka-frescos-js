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
export default {
    props: {
        lookForTitle: {
            type: String,
            default: 'Buscar Productos',
        }, 
        isOpen: {
            type: Boolean,
            required: true,
        },
        elements: {
            type: Array, 
            required: true,
        }
    },
    setup (props, {emit}) {

        const selectProduct = (selectedElement) => {
            emit('selected-element-changed', selectedElement)
        }
        

        return { selectProduct }
    }
}
</script>

<style lang="scss" scoped>

</style>