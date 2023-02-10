<template>
    <div
      ref="main"
      class="main-layout"
    >
      <div class="main">
        <Header />
        <main>
          <div>
            <router-view
              :key="$route.path"
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  import Header from '../components/TheHeader.vue'
  import Footer from '../components/TheFooter.vue'
  
  export default {
    components: {
      Footer,
      Header
    },
    setup() {
  
      const main = ref(null)

      return {
        main
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../scss/variables';
  .overflow-x-hidden {
    overflow-x: hidden;
  }

  .main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $bg-body-clr;
    font-weight: $fw-medium;
    overflow-y:hidden;
  }
  .main-layout {
    width: 100%;
    scroll-behavior: smooth;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
  </style>
  