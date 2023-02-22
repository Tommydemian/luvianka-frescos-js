<template>
  <header class="primary-header">
    <!-- The Modal is actually hiddden until it pops up out of the div="app" -->
    <Modal 
    :showModal="showModal"
     @close-modal="closeModal"
      ref="modalRef"
      title="Proximamente."
      message="Estamos trabajando para subirlo a la brevedad." />
    
    <div class="container">
        <div class="nav-wrapper">
          <router-link to="/">
            <img class="logo" src="../assets/images/logo/luvianka.png" alt="Logo">
          </router-link>
  
          <!-- hamburguer icon svg -->
          <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <Icon @click="displayMenu" v-if="!mobileMenuOpen" class="mobilemenu-icon" icon="mingcute:menu-fill" color="black" />
            <!-- close icon svg -->
            <Icon @click="displayMenu" v-if="mobileMenuOpen" class="mobilemenu-icon" icon="ep:close-bold" color="black" /> 
            <span class="visually-hidden">Menu</span>
          </button>

          <nav class="primary-navigation" id="primary-navigation" :class="{'opened': mobileMenuOpen}">
            <ul aria-label="Primary" role="list" class="nav-list" :class="{'listopened': mobileMenuOpen}">
              <li v-for="link in links" :key="link.linkto" class="margin-block-auto">
                <router-link @click="displayMenu" :class="{'mobileLink': mobileMenuOpen}" class="link" :to="{name: link.linkto}">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
        </nav>
        <button @click="openModal" class="button | hidde-in-mobile">Catálogo</button> 

        
    </div>
    </div>
    </header>  
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import { Icon } from '@iconify/vue';

const links = ref([
  {
    title: 'Productos',
    linkto: 'products',    
  },
  {
    title: 'Recetas',
    linkto: 'recipes',    
  },
  {
    title: 'Catálogo',
    linkto: 'catalog',    
  },
  {
    title: 'Nosotros',
    linkto: 'who-we-are',    
  }
])

// mobile menu logic
const mobileMenuOpen = ref(false);

const displayMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;  
}

// modal 
const modalRef = ref(null);
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}

</script>

<style lang="scss" scoped>
/* Dropdown menu */
@import '../scss/variables';
@import '../scss/mixins';
.primary-header {
  background-color: $bg-header-clr;
  padding-block: .5em;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    .logo {
      width: 9.75em;
      height: auto;
  }
}
.primary-navigation {
  font-size: $fs-nav-links;
  color: $neutral-clr-900;
  .nav-list {
    display: flex ;
    justify-content: space-around;
    align-items: center;
    column-gap: 6.3125em;
    @include mq (medium){
      justify-content: center;
      column-gap: 3em;
    }
  }
}
  .nav-list button {
    button {
      display: inline-flex;
      border: none;
      background: none;
      font-size: $fs-nav-links;
      font-weight: $fw-semibold;
      cursor: pointer;
    
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
      border-radius: 100vw;
      padding: .5em 1em;
      transition: color 500ms ease-out; 
  
    }
  }
.link {
  text-decoration: none;
  color: $neutral-clr-800;
  transition: color 200ms ease-in-out;
  &:hover {
    color: $primary-clr-400;
  }
}
  @media (max-width: 50em) {
    .primary-navigation {
      display: none;
      position: absolute;
      z-index: 999;
      inset: 7rem  auto;
      background-color: $neutral-clr-100;
      max-width: 25rem;
      margin-left: auto;
      //border-radius: $size-100;
      box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.125);
    }
  
    .primary-header[data-overlay]::before {
      content: '';
      position: fixed;
      top: 5.71875em ;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 998;
      background-image:linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.8))
    }

    .mobilemenu-icon {
      width: 2.5em;
      height: 2.5em;
      color: $neutral-clr-800 !important;
    }
  
    .nav-list {
      //padding: $size-700;
      display: grid;
      //gap: $size-400;
      text-align: center;
      font-weight: $fw-bold;
      color: $neutral-clr-900;
  
      li {
      transition: color 500ms ease-out;
    }
  }
    
    .nav-list li:hover,
    .nav-list li:focus {
      color: $primary-clr-400;
      cursor: pointer;
    }
  
    .primary-navigation[data-visible] {
      display: block;
    }
    .mobile-nav-toggle {
      display: block;
      cursor: pointer;
      background: transparent;
      border: 0;
      padding: 0.5em;
       .icon-close {
        display: none;
      }
  }
}

@media (max-width: 50em) {
  .opened {
    display: block;
    position: absolute;
    inset: 7rem $size-400 auto;
    border-radius: $def-br;
    padding: 1em;
    z-index: 999;
    box-shadow: 0px 61px 111px 92px rgba(0,0,0,0.75);

    .listopened {
      background-color: $neutral-clr-100;
      display: grid;
      gap: 1em;
  
      .mobileLink{
        font-size: $fs-600;
        font-weight: $fw-semibold;
      }
    }
  }
}
  


</style>
