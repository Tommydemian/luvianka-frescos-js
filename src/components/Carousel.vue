

      <template>
        <swiper :modules="[EffectCube, Pagination]" effect="cube"
        :grab-cursor="true"
        :loop="true"
        :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }"
        :pagination="true"
        >
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/ourproductshome4.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/ourproducts-home/products1retry.jpg" alt=""></swiper-slide>
          ...
        </swiper>
      </template>
      <script>
        import { EffectCube, Pagination } from 'swiper';
        import { Swiper, SwiperSlide } from 'swiper/vue';
      
        import 'swiper/css';
        import 'swiper/css/effect-cube';
        import 'swiper/css/pagination';
      
        export default {
          components: {
            Swiper,
            SwiperSlide,
          },
          setup() {
            return {
              EffectCube,
              Pagination
            };
          },
        };
</script>

<style lang="css" scoped>
.swiper {
 width: 600px;
 height: 400px;
}
@media (max-width: 50em){
  .swiper {
   width: 100%;
   height: 100%;
  }
}
    

.swiper img {
  height: 420px;
  width: 420px;
  margin-inline: auto;
  border-radius: .5em;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    background-color: red;
}


  
</style>