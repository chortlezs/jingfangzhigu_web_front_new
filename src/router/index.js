import{createRouter,createWebHashHistory} from "vue-router";


const routes=[
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:'/login',//路径
        name:'login',//名字
        component:()=>import('../views/login.vue')
    },
    {
        path:'/goLogin',//路径
        name:'goLogin',//名字
        component:()=>import('../views/goLogin.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router