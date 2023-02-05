<template>
    <section>
        <div class="hero">
            <div class="hero-content | container">
            </div>
            </div>

            <div class="aboutus-grid container default-margin-block flow">
            <div class="aboutus-text">
                <h2>Sobre Nosotros</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet, quos explicabo, asperiores illo rerum iste ut fugit commodi aut neque! Eligendi eaque exercitationem quos necessitatibus explicabo ab hic soluta.</p>
            </div>
                <img src="../assets/images/whowearePage/luviankaworkers.jpg" alt="trabajadores en la fabrica">
            </div>
            <div class="ourmission-grid container default-margin-block flow">
                <img src="../assets/images/whowearePage/luviankaworkers2.png" alt="trabajador en la fabrica cargando cortes">
            <div class="ourmission-text">
                <h2>Nuestra mision</h2>
                <p>The main mission is to provide a product that meets the needs of our customers, without neglecting the commitment to food safety. To achieve this, we work with quality and safety tools such as:
                    • HACCP System (Hazard Analysis and Critical Control Points)
                    • BPM
                    • POES
                    • MIP
                    We carry out controls on raw materials, water, the manufacturing process, and finished products. and supplier audits.</p>
            </div>
            </div>

            <div class="whereweat container default-margin-block flow">
                <h2>Donde Estamos</h2>
                <div class="img-grid">
                    <div ref="mapDiv" style="width:100%; height:50vh"></div>
            
                    
                </div>
            </div>
    </section>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'
import { ref, onMounted } from 'vue';

export default {
  setup(){
    const mapDiv = ref(null);
const luviankaLocation = ref({ lat: -34.639103, lng: -58.464193 });


const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
})

onMounted(async() => {
  await loader.load()
  const map = new google.maps.Map(mapDiv.value, {
    center: luviankaLocation.value,
    zoom: 19
  })
  new google.maps.Marker({
     position: luviankaLocation.value,
     map: map,
   });
});
return  {
  mapDiv,
  
}
}
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_utility.scss';
@import '../scss/_mixins.scss';

.flow * + * {
    margin-top: var(--flow-spacer, .5em);
  }
.hero {
    background-image: url('../assets/images/whowearePage/company.png');
    padding-block: 15em;
    background-position: 10% 100%;
    background-repeat: no-repeat;
    background-size:cover;
    margin-bottom: 5em;

    @media (max-width: 50em) {
        & {
            padding-block: 10em;
            background-position: 40% 50%;
            margin-bottom: 0em;
        }
    }
}

.hero-content {
  color: $neutral-clr-50;
  h1 {
    font-size: $fs-950;
    font-weight: $fw-bold;

    @include mq(small){
        & {
            font-size: $fs-650;
            color: red;
        }
    }
  }// termina el h1
  p {
    font-size: $fs-600;
    max-width: 45ch;

    @media (max-width: 50em) {
       font-size: $fs-400;
  }
}
}

// about us section
.aboutus-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1em;

  @include mq(small){
    & {
        grid-template-columns: 1fr;
    }
  }
  .aboutus-text {
    max-width: 60ch;
  }

  h2 {
    color: $primary-clr-400;
    font-weight: $fw-semibold;
    font-size: 2.5rem; // 40px
  }
  p{
    font-size: $fs-500;
  }
  img {
    border-radius: 2.1875em;
  }
}
// our mission section
.ourmission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 1em;

  @include mq(small){
    & {
        grid-template-columns: 1fr;
    }
  }
  .ourmission-text {
    max-width: 60ch;
    order: 2;
    @include mq(small){
        & {
            order: 1;
        }
      }

  }

  h2 {
    color: $primary-clr-400;
    font-weight: $fw-semibold;
    font-size: 2.5rem; // 40px
  }
  p{
    font-size: $fs-500;
  }
  img {
    border-radius: 2.1875em;
    order: 1;
    @include mq(small){
        & {
            order: 2;
        }
      }
  }
}
</style>