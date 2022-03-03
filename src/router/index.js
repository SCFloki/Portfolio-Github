import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkView from '@/views/WorkView'
import ProjectsView from '@/views/ProjectsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WorkView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router