import { createRouter, createWebHistory } from 'vue-router'
import VueTop from "../views/VueTop.vue"
import VueSns from "../views/VueSns.vue"
import VueActivity from "../views/VueActivity.vue"

const routes = [
  {path:'/',name:'top',Comment:VueTop},
  {path:'/sns',name:'sns',Comment:VueSns},
  {path:'/activity',name:'activity',Comment:VueActivity},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
