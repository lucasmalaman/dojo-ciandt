// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://localhost:8010'

/* eslint-disable no-new */


const router = new VueRouter({
  mode: 'history',
  routes
})

import InternalPage from '@/app/core/components/InternalPage'

Vue.component('internal-page', InternalPage)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
