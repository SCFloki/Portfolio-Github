import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// plugins
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
