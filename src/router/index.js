import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/:id',
    name: 'Product',
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/salesrep',
    name: 'salesrep',
    component: () => import('@/views/Salesrep.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
