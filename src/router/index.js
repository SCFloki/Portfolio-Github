import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkView from '@/views/WorkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WorkView
  },
  {
    path: '/about',
    name: 'about',
    component: WorkView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router