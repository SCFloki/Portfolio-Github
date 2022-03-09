import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkView from '@/views/WorkView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio-github/',
    component: WorkView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router