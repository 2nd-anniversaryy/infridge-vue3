import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Layout from '../components/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'index',
      children: [
        {path:'index', component: Index},
        {path:'member/fridges/list', component: ()=>import("../views/member/fridge/list/Index.vue")},
        {path:'member/fridges/detail', component: ()=>import("../views/member/fridge/detail/Index.vue")}
      ]
    },
  ]
})

export default router
