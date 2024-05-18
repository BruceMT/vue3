import { createApp } from 'vue'
import 'virtual:svg-icons-register'
//import SvgIcon  from "./components/SvgIcon/index.vue"
import App from './App.vue'
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-message.css";
//引入路由注册
import router from "./router";

/*//第一种单个注册全局组件方法
app.component('SvgIcon',SvgIcon);*/
//第二种统一注册全局组件方法
import globalComponent from './components'

const app = createApp(App)
app.use(globalComponent)
//引入模板全局样式
import "./styles/index.scss"
/*//测试mock接口
import axios  from 'axios';
axios({
    url: '/api/user/login',
    method: 'post',
    data: {
        username: 'admin',
        password: '1233456',
    }
}).then(r  =>  '200')*/

app.use(router)

app.mount('#app')
