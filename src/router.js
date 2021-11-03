import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import AllCountries from '@/pages/AllCountries'
import Country from '@/pages/Country'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/countries/all',
      name: 'all_countries',
      component: AllCountries
    },
    {
      path: '/countries/:country',
      name: 'country',
      component: Country
    }
    
  ]
})