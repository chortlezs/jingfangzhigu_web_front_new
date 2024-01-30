import{createRouter,createWebHashHistory} from "vue-router";

const routes=[
    {
        path:'/',//路径
        name:'Home',//名字
        component:()=>import('')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router