//对外暴露配置路由
export const constantRoute = [
    {
        path:"/login",
        component:()=>import('@/views/login/index.vue'),
        name:'login',
    },
    {
        path:"/",
        component:()=>import('@/views/home/index.vue'),
        name:'layout',
    },
    {
        path:"/404",
        component:()=>import('@/views/404/index.vue'),
        name:'404',
    },
    //任意路由，当所有不匹配时指向的路由
    {
        path:"/:pathMatch(.*)*",
        redirect:'/404',
        name:'any'
    },

]