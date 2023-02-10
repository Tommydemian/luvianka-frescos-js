<template>
    <section class="social-media">
        <div class="container | social-media-icons">
          <a href="https://m.facebook.com/fiambresluvianka/">
            <Icon class="social-media-icon" icon="ri:facebook-fill" color="#af0808" />
          </a>
          <a href="https://www.instagram.com/fiambresluvianka/">
            <Icon class="social-media-icon" icon="mdi:instagram" color="#af0808" />
          </a>
          <a href="https://www.linkedin.com/company/fiambres-luvianka/">
            <Icon class="social-media-icon" icon="mdi:linkedin" color="#af0808" />
          </a>
          <a href="https://twitter.com/fluviankaok">
            <Icon class="social-media-icon" icon="mdi:twitter" color="#af0808" />
          </a>
        </div>
      </section>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
      Icon
  },
  setup () {
        

    return {}
}
}
</script>

<style lang="scss" scoped>
@import '../scss/variables'; 
@import '../scss/utility'; 
@import '../scss/mixins'; 

.social-media {
    padding-block: 1em;
    background-color: $primary-clr-400;
    .social-media-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1em;
    }
    .social-media-icon {
      width: 2.5em;
      height: 2.5em;
      background-color: $neutral-clr-50;
      padding: .5em;
      border-radius: 100vw;
      cursor: pointer;
    }
  
  }
  
</style>