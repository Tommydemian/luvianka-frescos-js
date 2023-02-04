<template>
    <header class="primary-header">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/">
            <img class="logo" src="../assets/images/logo/luvianka.png" alt="Logo">
          </router-link>
  
          <!-- hamburguer icon svg -->
          <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <Icon @click="displayMenu" class="mobilemenu-icon" icon="mingcute:menu-fill" color="black" />
            <!-- close icon svg -->
            <!-- <Icon @click="displayMenu" v-if="!mobileMenuClosed" class="mobilemenu-icon" icon="ep:close-bold" color="black" /> -->
            <span class="visually-hidden">Menu</span>
          </button>
          <nav class="primary-navigation" id="primary-navigation" :class="{'opened': mobileMenuOpen}">
            <ul aria-label="Primary" role="list" class="nav-list" :class="{'listopened': mobileMenuOpen}">
              <li class="margin-block-auto"><router-link @click="displayMenu" class="link" :to="{name: 'products'}">Productos</router-link></li>
              <li class="margin-block-auto"><router-link @click="displayMenu" class="link" :to="{name: 'recipes'}">Recetas</router-link></li>
              <li class="margin-block-auto"><router-link @click="displayMenu" class="link" to="#">Catálogo</router-link></li>
              <li class="margin-block-auto"><router-link @click="displayMenu" class="link" :to="{name: 'who-we-are'}">Nosotros</router-link></li>
              <li class="margin-block-auto"><router-link @click="displayMenu" class="link" :to="{name:'where-to-buy'}">Donde Comprar</router-link></li>
            </ul>
            <!-- no se si empresa y nosotros es similar? -->
        </nav>
        <button class="button | hidde-in-mobile">Catálogo</button>
    </div>
    </div>
    </header>  
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref} from 'vue'

const mobileMenuOpen = ref(false);

const displayMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;  
}

</script>

<style lang="scss" scoped>
/* Dropdown menu */
@import '../scss/variables';
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
  
    .listopened {
      background-color: $neutral-clr-100;
      display: grid;
      gap: 1em;
  
      li {
        font-weight: $fw-bold;
      }
    }
  }
  
  .display-block {
    display: block;
  }
  .display-none {
    display: none;
  }  
}


</style>
