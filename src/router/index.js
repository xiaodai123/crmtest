import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Hello from '../components/Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
