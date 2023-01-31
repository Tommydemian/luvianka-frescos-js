

      <template>
        <swiper :modules="[Autoplay, Pagination, Navigation]"
        :slides-per-view="1" 
        :space-between="20"
        :breakpoints="{
            640: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            }
        }"
        :grab-cursor="true"
        :loop="true"
        :pagination="{clickable:true}"
        :autoplay="{
            delay: 2000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true,

        }"
        >
            <swiper-slide>
                <img src="../assets/images/ourproducts-home/ourproductshome1.jpg" alt="">
                <p>Solomillo de Cerdo</p>
            </swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome2.jpg" alt="">
                <p>Solomillo de Cerdo</p>
            </swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome3.jpg" alt="">
                <p>Solomillo de Cerdo</p>
            </swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome4.jpg" alt="">
                <p>Solomillo de Cerdo</p>
            </swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/products1retry.jpg" alt="">
                <p>Solomillo de Cerdo</p>
            </swiper-slide>
          ...
        </swiper>
      </template>
      <script>
        import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
        import { Swiper, SwiperSlide } from 'swiper/vue';
      
        import 'swiper/css';
        import 'swiper/css/effect-fade';
        import 'swiper/css/pagination';
        import 'swiper/css/navigation';
      
        export default {
          components: {
            Swiper,
            SwiperSlide,
          },
          setup() {
            return {
              Autoplay,
              Pagination,
              Navigation,
              EffectFade
            };
          },
        };
</script>

<style lang="scss" scoped>
@import '../../src/scss/variables';

.swiper {
    height: 600px;
    

    img {
        height: 550px;
        width: 400px;
        border-radius: .5em;
        position: relative;
        margin-inline: auto ;
        
    }
    img::after {
        content:'';
        position: absolute;
        inset: 0;
        background: $neutral-clr-900;
        opacity: 0.8;
    }
    p {
        position: absolute;
        background-color: $neutral-clr-100;
        font-weight: $fw-semibold;
        bottom: 10%;
        padding: 1em;
        text-align: center;
        text-transform: uppercase;
        color: $primary-clr-400;
        border-top-right-radius: .3em;
        border-bottom-right-radius: .3em;
    }

    @media (max-width: 50em) {
        & {
            height: 400px;
            
            img {
                height: 400px;
            }
        }
    }
}



  
</style>