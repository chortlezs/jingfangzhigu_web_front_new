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
    },
    {
        path:'/setting',//路径
        name:'setting',//名字
        component:()=>import('../components/settings/setting.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router