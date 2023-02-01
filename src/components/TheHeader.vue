<template>
    <header class="primary-header">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#">
            <img class="logo" src="../assets/images/logo/luvianka.png" alt="Logo">
          </a>
  
          <!-- hamburguer icon svg -->
          <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <svg class="icon-hamburguer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
  
            <!-- close icon svg -->
            <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
  
  
            <span class="visually-hidden">Menu</span>
          </button>
          <nav class="primary-navigation" id="primary-navigation">
            <ul aria-label="Primary" role="list" class="nav-list">
              <li class="margin-block-auto"><router-link class="link" :to="{name: 'products'}">Productos</router-link></li>
              <li class="margin-block-auto"><router-link class="link" :to="{name: 'recipes'}">Recetas</router-link></li>
              <li class="margin-block-auto"><router-link class="link" to="#">Catálogo</router-link></li>
              <li class="margin-block-auto"><router-link class="link" :to="{name: 'who-we-are'}">Nosotros</router-link></li>
              <li class="margin-block-auto"><router-link class="link" :to="{name:'where-to-buy'}">Donde Comprar</router-link></li>
            </ul>
            <!-- no se si empresa y nosotros es similar? -->
        </nav>
        <button class="button | hidde-in-mobile">Catálogo</button>
    </div>
    </div>
    </header>  
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
/* Dropdown menu */
@import '../scss/variables';
.primary-header {
  background-color: $bg-header-clr;
  margin-bottom: $size-600;
  padding-block: .5em;
  margin-bottom: $size-600;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    .logo {
      width: 9.75em;
      height: auto;
  }
  & {
    @media (max-width: 50em) {
      margin-bottom: 0.8125em;
    }
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
</style>
