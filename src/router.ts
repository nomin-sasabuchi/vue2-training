import Demo from 'page/demo/index.vue'
import DemoDetail from 'page/demo/_id.vue'
import Home from 'page/Home.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/demo', component: Demo },
    { path: '/demo/:id', component: DemoDetail, props: true },
  ],
})
