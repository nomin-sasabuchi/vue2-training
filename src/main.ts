import VueCompositionApi from '@vue/composition-api' // ★追加
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.use(VueCompositionApi) // ★追加
// Vue のログと警告を抑制
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
