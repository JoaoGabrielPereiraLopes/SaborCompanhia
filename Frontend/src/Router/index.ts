import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import PageNotFound from '../Pages/PageNotFound.vue'
import SignUp from '../Pages/SignUp.vue'
import Login from '../Pages/Login.vue'
import AdminTest from '../Pages/AdminRouteTest.vue'
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    },
    {
      path: '/SignUp',
      component: SignUp
    },
    {
      path:"/Login",
      component:Login
    },
    {
      path:"/Admin",
      component:AdminTest
    }
  ]
})

export default router