import{createRouter,createWebHashHistory} from "vue-router";


const routes=[
    {
        path:"/",
        redirect:"/welcome"
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
        path:'/goRegister',//路径
        name:'goRegister',//名字
        component:()=>import('../views/goRegister.vue')
    },
    {
        path:'/welcome',//路径
        name:'welcome',//名字
        component:()=>import('../views/welcome.vue')
    },
    {
        path:'/check',//路径
        name:'check',//名字
        component:()=>import('../views/check.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router