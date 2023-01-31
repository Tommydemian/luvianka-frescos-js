<template>
    <div
      ref="main"
      class="main-layout"
    >
      <div class="main">
        <Header :class="hideHeader ? 'hideHeader' : 'showHeader'" />
        <main>
          <div>
            <router-view
              :style="{ height: getScreenHeight }"
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
  
  import Header from '../components/TheHeader.vue'
  import Footer from '../components/TheFooter.vue'
  
  export default defineComponent({
    components: {
      Footer,
      Header
    },
    setup() {
      const getScreenHeight = computed((): string => {
        return `${innerHeight}`
      })
  
      // Scroll logic:
      const lastScroll = ref<number>(0)
      const main = ref<HTMLElement | null>(null)
      const hideHeader = ref(false)
  
      onMounted(() => {
        if (!main.value) return
  
        main.value.addEventListener('scroll', event => {
          const target = event.target as HTMLElement
          const currentScroll = target.scrollTop
  
          if (currentScroll <= 60 || currentScroll < lastScroll.value) {
            hideHeader.value = false
          } else if (currentScroll > lastScroll.value) {
            hideHeader.value = true
          }
  
          lastScroll.value = currentScroll
        })
      })
  
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', () => null)
      })
  
      return {
        getScreenHeight,
        main,
        hideHeader
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  @import '../scss/variables';
  .hideHeader {
    transform: translate3d(0, -100%, 0);
    transition: transform 300ms ease-in;
  }
  .showHeader {
    filter: drop-shadow(0 -10px 20px rgb(170, 170, 170));
  }

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
  