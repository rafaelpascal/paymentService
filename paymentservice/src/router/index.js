import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/Auth/SignIn'
import SignUp from '../components/Auth/SignUp'
import SelectService from '../components/services/SelectService'
import upploadCore from '../components/services/upploadCore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SelectService',
    name: 'SelectService',
    component: SelectService
  },
  {
    path: '/upploadCore',
    name: 'upploadCore',
    component: upploadCore
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
