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
      path: '/my-counter',
      name: 'myCounter',
      component: () => import('../modules/Counter/Components/MiContador.vue'),
    },
    {
      path: '/task-list',
      name: 'taskList',
      component: () => import('../modules/TaskList/components/TaskList.vue'),
    },
    {
      path: '/user-register',
      name: 'userRegister',
      component: () => import('../modules/Register/views/RegisterView.vue'),
    },
  ],
})

export default router
