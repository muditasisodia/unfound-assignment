import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import router from './router'
/*import homePage from './components/homePage.vue'
import cardPage from './components/cardPage.vue'*/


Vue.config.productionTip = false

/*const routes=[
  { path: '/cardDetails', componenet: cardPage},
  { path: '/', component: homePage},
];

  const router= new VueRouter({
    routes: routes
  });*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
