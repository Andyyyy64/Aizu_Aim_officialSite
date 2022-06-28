import { createRouter, createWebHistory } from 'vue-router'
import VueTop from "../views/VueTop.vue"
import VueMember from "../views/VueMember.vue"
import VueActivity from "../views/VueActivity.vue"
import VueAndy from "../memberpages/VueAndy.vue"
import VueJura from "../memberpages/VueJura.vue"
import VueSora from "../memberpages/VueSora.vue"
import VueTuchiya from "../memberpages/VueTuchiya.vue"
import VueMori from "../memberpages/VueMori.vue"
import VueAyato from "../memberpages/VueAyato.vue"

const routes = [
  {path:'/',name:'top',component:VueTop},
  {path:'/member',name:'sns',component:VueMember},
  {path:'/activity',name:'activity',component:VueActivity},
  {path:'/andy',name:'andy',component:VueAndy},
  {path:'/jura',name:'jura',component:VueJura},
  {path:'/sora',name:'sora',component:VueSora},
  {path:'/tuchiya',name:'tuchiya',component:VueTuchiya},
  {path:'/mori',name:'mori',component:VueMori},
  {path:'/ayato',name:'ayato',component:VueAyato},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
