<template>
    <footer class="primary-footer | bg-neutral-900 text-neutral-100 padding-block-700 flow">
        <div class="container">
          <div style="gap: 2em;" class="primary-footer-wrapper | even-columns">
            <div>
              <h3 class="fs-terciary-heading uppercase social-header">social media</h3>
    
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
              </ul>
            </div>
            <div>
              <nav class="footer-nav">
                <ul class="flow uppercase fw-bold footer-nav-list" aria-label="Footer" role="list">
                  <li><a href="#"></a>Productos</li>
                  <li><a href="#"></a>Recetas</li>
                  <li><a href="#"></a>Catálogo</li>
                  <li><a href="#"></a>Nosotros</li>
                  <li><a href="#"></a>Donde Comprar</li>
                </ul>
              </nav>
            </div>
            <div>
              Sobre Nosotros:<br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum aliquam vitae iusto
              assumenda, cupiditate similique nostrum porro nemo quam deleniti non, ex, harum veritatis! Dolorem vitae sed
              esse molestiae quo.
            </div>
    
          </div>
        </div>
      </footer>
      <!-- <section class="sub-footer bg-neutral-300 text-neutral-900 padding-block-700">
        <img class="footer-logo" src="assets/images/luvianka.png" alt="luvianka-logo">
        <img class="footer-logo" src="assets/images/logo_red-deer.png" alt="red-deer-logo">
        <p>© Luvianka 2023
          Todos los derechos reservados.</p>
      </section> -->
    
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import '../scss/variables';
  .primary-footer {
    background-image: linear-gradient(to bottom, rgba(31, 30, 30, 0.8), $neutral-clr-900);
    /* text-align: center; */
  }
  .primary-footer > .container .even-columns > *{
    margin-inline: auto;
  }
  
  /* social list */
  
  .social-header {
    border-bottom: 1px solid $neutral-clr-100;
    width: max-content;
  }
  
  
  .social-list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 1em;
    //gap: $size-400;

   li a {
      text-decoration: none;
  }
}
  
  .social-icon {
   //width: $size-600;
   fill: $neutral-clr-100;
   aspect-ratio: 1;
  }
  
  .social-list a:is(:hover, :focus-within) .social-icon {
    fill: $primary-clr-400;
  }
  
  @media (max-width: 50em){
  .social-icon {
   //width: $size-600;
   margin: auto;
  }
  }
  
  .sub-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer-logo {
    height: 10em;
  }
  
  .footer-nav ul {
    list-style: none !important;
  }
  
  .footer-nav-list li {
    cursor: pointer;
  }
</style>