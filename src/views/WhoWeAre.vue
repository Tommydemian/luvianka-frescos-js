<template>
    <section>
        <div class="hero">
            <div class="hero-content | container">
            </div>
            </div>

            <div class="aboutus-grid container default-margin-block flow">
            <div class="aboutus-text">
                <h2>Sobre Nosotros</h2>
                <p>Red Deer SRL es una empresa argentina ubicada en la provincia de Buenos Aires, especializada en la elaboración de salazones y chacinados. Nuestro establecimiento cuenta con equipos de alta tecnología y un personal capacitado y experimentado.</p>
            </div>
                <img height="600" src="../assets/images/whowearePage/Rectangle115desktop.png" alt="trabajadores en la fabrica">
            </div>
            <div class="ourmission-grid container default-margin-block flow">
                <img height="600" src="../assets/images/whowearePage/Rectangle116desktop.png" alt="trabajador en la fabrica cargando cortes">
            <div class="ourmission-text">
                <h2>Nuestra mision</h2>
                <p>En Red Deer SRL, nuestra misión es ofrecer productos de la más alta calidad a nuestros clientes. Para lograr esto, nos aseguramos de trabajar con los mejores proveedores, utilizar tecnología de vanguardia, y contar con un equipo altamente capacitado y comprometido.

                  Nuestro objetivo es ser reconocidos como una empresa líder en la elaboración de salazones y chacinados, y seguir mejorando día a día para ofrecer un producto aún mejor a nuestros clientes.</p>
            </div>
            </div>

            <div class="whereweat container | default-margin-block flow">
                <h2>Donde Estamos</h2>
                <div class="img-grid">
                    <div>
                      <h4>Planta Avellaneda</h4>
                      <p>Tte. Cnel. Lafuente 740</p>
                      <div ref="mapDiv1" style="width:100%; height:50vh"></div>
                    </div>
                    <br>
                    <div>
                      <h4>Planta Florencio Varela</h4>
                        <p>Gabriela Mistral 2235</p>
                      <div ref="mapDiv2" style="width:100%; height:50vh"></div>
                    </div>
                    <br>      
                    <div>
                      <h4>Depósito</h4>
                        <p>Velez Sarfield 1545</p>
                      <div ref="mapDiv3" style="width:100%; height:50vh"></div>
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
  }
  p{
    font-size: $fs-500;
    font-weight: $fw-light;
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

.img-grid {
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 1em;
  flex-wrap: wrap;
}

.img-grid div {
  width: calc(90% / 3);
  min-width: 346px;
}

</style>