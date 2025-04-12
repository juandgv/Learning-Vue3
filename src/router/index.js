import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/miContador',
      name: 'Contador',
      component: () => import('../components/MiContador.vue'),
    }, 
    {
      path: '/TaskList',
      name: 'TaskList',
      component: () => import('../components/TaskList.vue'),
    }
  ],
})

export default router
