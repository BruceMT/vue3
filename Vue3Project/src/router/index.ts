//通过vue-router 实现模板路由配置
import {createRouter,createWebHashHistory} from "vue-router";
import {constantRoute} from "./routes.ts";

//创建路由
 let router = createRouter({
     //路由模式hash模式
     history:createWebHashHistory(),
     routes:constantRoute,
     scrollBehavior(){
         return{
             left:0,
             top:0
         }
     }
 })
export default router;