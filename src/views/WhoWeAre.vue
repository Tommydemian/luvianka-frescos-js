<template>
    <section>
        <div class="hero">
            <div class="hero-content | container">
            </div>
            </div>

            <div class="aboutus-grid container default-margin-block flow">
            <div class="aboutus-text">
                <h2>Sobre Nosotros</h2>
                <p>Red Deer SRL es una empresa 100% argentina ubicada en la provincia de Buenos Aires, que se dedica a la elaboración de productos cárnicos de alta calidad. Con más de 10 años de experiencia en el mercado, la empresa se ha consolidado como un referente en la producción de salazones y chacinados.
                  <br>
                  <br>
                  En Red Deer SRL, nos esforzamos por ofrecer productos de la máxima calidad a nuestros clientes. Para ello, contamos con equipos de alta tecnología y un personal altamente capacitado y experimentado. Todos nuestros productos son elaborados con materias primas de primera calidad y se someten a rigurosos controles de calidad en cada etapa de producción.
                  <br>
                  <br>
                  En Red Deer SRL estamos comprometidos con la producción de productos cárnicos de alta calidad. Nos esforzamos por ofrecer a nuestros clientes productos deliciosos y confiables. Estamos en constante evolución y trabajamos arduamente para mejorar y asegurarnos de que nuestros productos cumplan con los estándares de calidad más altos.</p>
            </div>
                <img class="srcset-img" height="600" width="560" src="../assets/images/whowearePage/Rectangle115desktop.png"
                srcset="../assets/images/whowearePage/Rectangle115desktop.png 560w,
                  ../assets/images/whowearePage/Rectangle117mobile.png 355w
                "   
                
                
                alt="trabajadores en la fabrica">
            </div>
            <div class="ourmission-grid container default-margin-block flow">
                <img class="srcset-img" height="600" width="560" src="../assets/images/whowearePage/Rectangle116desktop.png"
                 srcset="../assets/images/whowearePage/Rectangle116desktop.png 560w,
                ../assets/images/whowearePage/Rectangle118mobile.png 365w
                 "
                 alt="trabajador en la fabrica cargando cortes">
                 
            <div class="ourmission-text">
                <h2>Nuestra mision</h2>
                <p>En Red Deer SRL, nuestra misión es ofrecer productos cárnicos de alta calidad a nuestros clientes. Para lograr este objetivo, nos enfocamos en los siguientes puntos clave:
                  <br>


                  <ul role="list" class="ourmission-list">
                    <li>Trabajar con los mejores proveedores: Nos aseguramos de seleccionar cuidadosamente a nuestros proveedores para garantizar que solo utilicemos materias primas de la máxima calidad.</li>
                    
                    <li>Utilizar tecnología de vanguardia: Contamos con equipos de alta tecnología para asegurarnos de que nuestros productos cumplan con los estándares de calidad más altos.</li>
                    
                    <li>Contar con un equipo altamente capacitado y comprometido: Nuestro equipo está compuesto por profesionales altamente capacitados y experimentados que están comprometidos con la producción de productos de alta calidad.</li>
                    
                    <li>Ser reconocidos como una empresa líder en la elaboración de salazones y chacinados: Nos esforzamos por ser reconocidos como una empresa líder en la industria de la elaboración de salazones y chacinados.</li>
                    
                  </ul>
                  </p>
            </div>
            </div>

            <div class="whereweat container | default-margin-block">
                <h2 class="whereweat-heading">Donde Estamos</h2>
                <div class="img-grid">
                    <div class="map-container">
                      <div class="map" ref="mapDiv1" style="width:100%; height:50vh"></div>  
                        <div class="map-text">
                          <h4>Planta Avellaneda</h4>
                          <p>Tte. Cnel. Lafuente 740</p>
                        </div>
                    </div>
                    <br>
                    <div class="map-container">
                      <div class="map" ref="mapDiv2" style="width:100%; height:50vh"></div>
                      <div class="map-text">
                        <h4>Planta Florencio Varela</h4>
                          <p>Gabriela Mistral 2235</p>
                      </div>
                    </div>
                    <br>      
                    <div class="map-container">
                      <div class="map" ref="mapDiv3" style="width:100%; height:50vh"></div>
                      <div class="map-text">
                        <h4>Depósito</h4>
                          <p>Velez Sarfield 1545</p>
                      </div>
                    </div>      
                </div>
            </div>
    </section>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'
import { ref, onMounted } from 'vue';

export default {
  setup(){
    const mapDiv1 = ref(null);
    const mapDiv2 = ref(null);
    const mapDiv3 = ref(null);

const luviankaLocation = ref({ lat: -34.678290436422586, lng: -58.37197683068231 });
const luvianFlorencioVarelaLocation = ref({ lat: -34.792578786734005, lng: -58.266577773103926 });
const luvianDepositLocation = ref({ lat: -34.67993446435894, lng: -58.37595125397654 });

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
})

onMounted(async() => {
  await loader.load()
  const map = new google.maps.Map(mapDiv1.value, {
    center: luviankaLocation.value,
    zoom: 17
  })
  new google.maps.Marker({
     position: luviankaLocation.value,
     map: map,
   });

  const map2 = new google.maps.Map(mapDiv2.value, {
        center: luvianFlorencioVarelaLocation.value,
        zoom: 15
  })

  new google.maps.Marker({
    position: luvianFlorencioVarelaLocation.value,
    map: map2
  })

  const map3 = new google.maps.Map(mapDiv3.value, {
        center: luvianDepositLocation.value,
        zoom: 15
  })

  new google.maps.Marker({
    position: luvianDepositLocation.value,
    map: map3
  })

});
return  {
  mapDiv1,
  mapDiv2,
  mapDiv3,
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
    @include mq(small) {
      font-size: $fs-650;
    }
  }
  p{
    font-size: $fs-500;
    font-weight: $fw-light;
    @include mq(small) {
      font-size: $fs-300;
    }
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
    font-weight: $fw-light;
    order: 2;
    margin-left: auto;
    @include mq(small){
        & {
            order: 1;
            margin-left: 0;
        }
      }

  }

  h2 {
    color: $primary-clr-400;
    font-weight: $fw-semibold;
    font-size: 2.5rem; // 40px
    @include mq(small) {
      font-size: $fs-650;
    }
  }
  p{
    font-size: $fs-500;
    @include mq(small) {
      font-size: $fs-300;
    }
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

.ourmission-list {
  list-style: inside;
}

.whereweat-heading {
  color: $primary-clr-400;
  font-weight: $fw-semibold;
  font-size: 2.5rem; // 40px
  text-align: center;
  padding-block: 1em;

  @include mq(small) {
    font-size: $fs-650;
  }
}

.img-grid {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
}

.img-grid div {
  width: calc(90% / 3);
  min-width: 300px;
}

.map-text {
  width: auto !important;
  background-color: $primary-clr-400;
  color: $neutral-clr-50;
  border-radius: 5px;
  padding-left: $size-600;
  padding-block: $size-200;
  & h4 {
    font-size: $fs-650 ;
    font-weight: $fw-medium;
    @include mq(small) {
      font-size: $fs-500;
    }
  }
  & p {
    font-size: $fs-400;
    font-weight: $fw-regular;
    @include mq(small) {
      font-size: $fs-200;
    }
  }
}

.srcset-img {
  max-width: 1560px;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

@media (max-width: 640px) {
  .srcset-img {
    width: 90%;
    height: auto;
  }
}



</style>