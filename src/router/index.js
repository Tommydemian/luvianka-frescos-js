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
        // meta: { requiresAuth: false }
      },
      {
        path: '/productos',
        name: 'products',
        component: () => import('../views/Products.vue'),
        // meta: { requiresAuth: false }
      },
      {
        path: '/recetas',
        name: 'recipes',
        component: () => import('../views/Recipes.vue'),
        // meta: { requiresAuth: false }
      },
      {
        path: '/donde-comprar',
        name: 'where-to-buy',
        component: () => import('../views/WhereToBuy.vue'),
        // meta: { requiresAuth: false }
      },
      {
        path: '/nosotros',
        name: 'who-we-are',
        component: () => import('../views/WhoWeAre.vue')
        // meta: { requiresAuth: false }
      },
    ]}
]
});

export default router;