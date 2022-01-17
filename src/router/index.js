import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Analytics from '../components/Analytics'
import Models from '../components/Models'
import Makeo from '../components/Makeo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modelo',
    name: 'Models',
    component: Models,
    props: true
  },
  {
    path: '/makeo',
    name: 'Makeo',
    component: Makeo,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
