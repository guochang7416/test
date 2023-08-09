import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:'home',
            component:Home
        },
        {
            path:'/chizi',
            name:'Zichan',
            component:()=>import('../pages/zichan/Chici.vue')
        }
    ]
})

export default router