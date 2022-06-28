import { createRouter, createWebHistory } from 'vue-router'
import VueTop from "../views/VueTop.vue"
import VueSns from "../views/VueSns.vue"
import VueActivity from "../views/VueActivity.vue"

const routes = [
  {path:'/',name:'top',component:VueTop},
  {path:'/sns',name:'sns',component:VueSns},
  {path:'/activity',name:'activity',component:VueActivity},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
