import Vue from 'vue'
import meta from 'vue-meta'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(meta);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
