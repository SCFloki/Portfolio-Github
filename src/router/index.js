import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkView from '@/views/WorkView'
import ProjectsView from '@/views/ProjectsView'
import GameComponent from '@/components/game/GameComponent'

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
  {
    path: '/game',
    name: 'game',
    component: GameComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router