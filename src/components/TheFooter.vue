<template>
    <footer class="primary-footer |flow">
        <div class="container">
          <div class="primary-footer-wrapper | footer-grid">
            <div class="footer-logos | flow">
              <div class="footer-logos__imgs">
                <img src="../../src/assets/images/logo/luvianka.png" alt="Luvinaka logo">
                <img src="../../src/assets/images/logo/logo_red-deer.png" alt="Red-deer logo">
              </div>
              <p>
                Luvianka is an Argentine company dedicated to the production of salted meats and cured meats, located in the province of Buenos Aires.
              </p>
              <!-- <h3 class="fs-terciary-heading uppercase social-header">social media</h3>
    
              <ul class="social-list" role="none" aria-label="social media links">
                <li><a aria-label="facebook" href="#">
                    <svg class="social-icon">
                      <use xlink:href="../assets/svgs/socialsites.svg#facebook"></use>
                    </svg>
                  </a></li>
                <li><a aria-label="instagram" href="#">
                    <svg class="social-icon">
                      <use xlink:href="../assets/svgs/socialsites.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li><a aria-label="linkedin" href="#">
                    <svg class="social-icon">
                      <use xlink:href="../assets/svgs/socialsites.svg#icon-twitter"></use>
                    </svg>
                  </a></li>
                <li><a aria-label="twitter" href="#">
                    <svg class="social-icon">
                      <use xlink:href="../assets/svgs/socialsites.svg#icon-youtube"></use>
                    </svg>
                  </a></li>
              </ul> -->
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

                <a class="footer-wtb__email" href="#">info@fiambresluvianka.com.ar</a>
            </div>
    
          </div>
        </div>
      </footer>
</template>

<script setup lang="ts">

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
    gap: 1rem;

  @media (min-width: 50em) {
    & {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
}

.footer-logos__imgs {
  display: flex;
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