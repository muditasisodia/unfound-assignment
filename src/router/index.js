import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import cardPage from '@/components/cardPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/newsDetails',
      name: 'cardPage',
      component: cardPage
    }
  ]
})
