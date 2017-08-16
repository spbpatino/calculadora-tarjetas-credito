import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Registro from '@/components/Registro'
import LogIn from '@/components/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
    	path: '/registro',
    	name: 'registro',
    	component: Registro,
    },
    {
    	path: '/login',
    	name: 'iniciar_sesion',
    	component: LogIn,
    }
  ]
})
