import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contact from '@/components/Contact'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contact
    }
  ]
})
