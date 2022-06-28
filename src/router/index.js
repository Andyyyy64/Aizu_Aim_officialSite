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
  {path:'/members',name:'sns',component:VueMember},
  {path:'/activity',name:'activity',component:VueActivity},
  {path:'/members/andy',name:'andy',component:VueAndy},
  {path:'/members/jura',name:'jura',component:VueJura},
  {path:'/members/sora',name:'sora',component:VueSora},
  {path:'/members/tuchiya',name:'tuchiya',component:VueTuchiya},
  {path:'/members/mori',name:'mori',component:VueMori},
  {path:'/members/ayato',name:'ayato',component:VueAyato},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
