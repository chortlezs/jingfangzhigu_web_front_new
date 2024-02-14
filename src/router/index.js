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
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('../components/settings/setting.vue'),
        children: [
          {
            path: '/user',
            name: 'user',
            component: () => import('../components/settings/UserSetting.vue'),
          },
          {
            path: '/customization',
            name: 'customization',
            component: () => import('../components/settings/Customization.vue'),
          },
          {
            path: '/notification',
            name: 'notification',
            component: () => import('../components/settings/Notification.vue'),
          },
          {
            path: '/data',
            name: 'data',
            component: () => import('../components/settings/Data.vue'),
          },
        ],
    },
    {
      path:'/index',//路径
      name:'index',//名字
      component:()=>import('@/components/index/index.vue')
      },
      {
        path: '/personal',
        name: '/personal',
        component:() => import('../components/settings/personal.vue')
      }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router