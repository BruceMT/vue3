import SvgIcon  from "./SvgIcon/index.vue"
//全局对象
const allGlobalComponent ={ SvgIcon}
export default {
    install(app){
        //注册项目全部全局组件
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key,allGlobalComponent[key]);
        })

}

}