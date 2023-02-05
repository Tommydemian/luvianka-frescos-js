import {createRouter, createWebHistory} from 'vue-router'

import MainLayout from '../layouts/Main.vue';
import Home from '../views/Home.vue';

const router = createRouter({
history: createWebHistory(), 
routes: [
    {path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/productos',
        name: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/recetas',
        name: 'recipes',
        component: () => import('../views/Recipes.vue'),
      },
      {
        path: '/donde-comprar',
        name: 'where-to-buy',
        component: () => import('../views/WhereToBuy.vue'),
      },
      {
        path: '/nosotros',
        name: 'who-we-are',
        component: () => import('../views/WhoWeAre.vue')
      },
    ]}
]
});

export default router;