import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Exercicio2 from '@/components/Exercicio2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Exercicio2',
      name: 'Exercicio2',
      component: Exercicio2
    }
  ]
})
