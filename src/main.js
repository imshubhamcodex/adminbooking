import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import VueRouter from 'vue-router'
import Routes from './router/index.js'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js'
import VueCarousel from '@chenfengyuan/vue-carousel';
import checkbox from 'vue-material-checkbox'
import store from './vuex/store'
Vue.use(checkbox)


Vue.use(VueCarousel);
window.user_profile = false;
window.invoiceNumber = "unknown";



Vue.config.productionTip = false
Vue.use(VueRouter);

const router= new VueRouter({
    routes:Routes,
    mode: 'history',
  
  
});



new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
