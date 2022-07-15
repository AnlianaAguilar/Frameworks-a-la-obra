import Vue from 'vue'
import VueRouter from 'vue-router'
import TableView from '@/views/TableView.vue'
import CharacterSearchView from '@/views/CharacterSearchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/CharacterSearch',
    name:'CharacterSearch',
    component: CharacterSearchView
  },
  {
    path: '/table',
    name:'table',
    component: TableView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
