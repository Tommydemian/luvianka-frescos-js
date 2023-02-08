<template>
    <footer class="primary-footer |flow">
        <div class="container">
          <div class="primary-footer-wrapper | footer-grid">
            <div class="footer-logos | flow">
              <div class="footer-logos__imgs">
                <img src="../../src/assets/images/logo/luvianka.png" alt="Luvinaka logo">
                <img src="../../src/assets/images/logo/logo_red-deer.png" alt="Red-deer logo">
              </div>
              <p style="padding-top: .5em">
                © Luvianka {{ year }} <br>
                Todos los derechos reservados..
              </p>
            </div>
            <div>
              <nav class="footer-nav">
                <ul role="list" class="flow footer-nav-list" aria-label="Footer">
                  <li><router-link class="footer-link" :to="{name:'products'}">Productos</router-link></li>
                  <li><router-link class="footer-link" :to="{name:'recipes'}">Recetas</router-link></li>
                  <li><router-link class="footer-link" to="#">Catálogo</router-link></li>
                  <li><router-link class="footer-link" :to="{name:'who-we-are'}">Nosotros</router-link></li>
                  <li><router-link class="footer-link" :to="{name:'where-to-buy'}">Donde Comprar</router-link></li>
                </ul>
              </nav>
            </div>
            <div class="footer-wtb">
              <div class="footer-wtb__heading">
                <p>Lafuente 740 - (1870) Avellaneda</p>
                <p>Buenos Aires, ARGENTINA</p>
              </div>
                
                <div class="footer-wtb__content">
                  <p>(011) 4204-5808</p>
                  <p>(011) 4265-1729</p>
                  <p>(011) 4205-3327</p>
                </div>

                <a class="footer-wtb__email" href="mailto:info@fiambresluvianka.com.ar">info@fiambresluvianka.com.ar</a>
            </div>
    
          </div>
        </div>
      </footer>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup(){
    let year = ref(0)
  
    function getCurrentYear() {
    const date = new Date();
    year.value = date.getFullYear();
    return year.value
  }
  onMounted(() => getCurrentYear());
    return {
      year
    }
  }
}



</script>

<style lang="scss" scoped>
@import '../scss/variables';

.flow * + * {
  margin-top: var(--flow-spacer, .5em);
}
  .primary-footer {
    background: $neutral-clr-100;
    color: $neutral-clr-300;
    /* text-align: center; */
  & > .container {
    padding-top: $size-500;
    padding-bottom: $size-900;
  }
  @media (max-width: 50em){
    & > .container {
      padding-top: $size-500;
      padding-bottom: $size-400;
    } 
  }
  & > .container .footer-grid > *{
    margin-inline: auto;
  }
}
  
.footer-grid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 1rem;

  @media (max-width: 50em) {
    & {
      display: block;
    }
  }
}

.footer-logos__imgs {
  display: flex;
  align-items: baseline;
  column-gap: 1em;

  img {
    height: 4em;
  }
  p {
    font-size: $fs-300;
  }
  @media (max-width: 50em) {
    p {
      font-size: $fs-200;
    } 
  }
}
.footer-nav {
  @media (max-width: 50em) {
    padding-block: 1em;
    text-align: left;
  }
.footer-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: $fw-semibold;
  font-size: $fs-500;
  color: $neutral-clr-800;

  @media (max-width: 50em) {
    & {
      font-size: $fs-300;
    }
  }
}
}

.footer-wtb {
  div {
    padding-block: .5em;
  }
  a {
    text-decoration: none;
    color: $primary-clr-400;
  }
  @media (max-width: 50em) {
    & {
      font-size: $fs-300 ;
    }
  }
}

</style>