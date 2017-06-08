import Vue from 'vue'
import Router from 'vue-router'
import Pai from '@/components/Pai'
import Doutor from '@/components/Doutor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pai',
      component: Pai
    },
    {
      path: '/doutor',
      name: 'Doutor',
      component: Doutor
    }
  ]
})
