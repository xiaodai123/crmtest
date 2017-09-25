// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
// store
import store from './store/index'
import Vuex from 'vuex'
import router from './router'

import 'font-awesome/css/font-awesome.min.css'

Vue.config.debug = true
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: {
  //   App
  // }
  render: h => h(App)
}).$mount('#app')
