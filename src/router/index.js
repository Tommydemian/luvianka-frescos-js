import {createRouter, createWebHistory} from 'vue-router'

import MainLayout from '../layouts/Main.vue';
import Home from '../views/Home.vue';

const router = createRouter({
history: createWebHistory(import.meta.env.VITE_BASE_URL), 
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
        path: '/catálogo',
        name: 'catalog',
        component: () => import('../views/Catalog.vue'),
      },
      {
        path: '/recetas',
        name: 'recipes',
        component: () => import('../views/Recipes.vue'),
      },
      {
        path: '/recetas/:id',
        name: 'recipe-details',
        component: () => import('../views/RecipeDetails.vue'),
        props: true
      },
      {
        path: '/nosotros',
        name: 'who-we-are',
        component: () => import('../views/WhoWeAre.vue')
      },
    ]}
], 
scrollBehavior (to, from, savedPosition) {
  // return desired position\
  return { top: 0 }
}

});

export default router;