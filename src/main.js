import { createApp } from 'vue'
import './scss/main.scss'

import App from './App.vue'
import router from './router'

import Carousel3d from 'vue-carousel-3d';


createApp(App).use(Carousel3d).use(router).mount('#app')
