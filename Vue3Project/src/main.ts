import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import SvgIcon  from "./components/SvgIcon/index.vue"
import App from './App.vue'

const app = createApp(App)
/*//第一种单个注册全局组件方法
app.component('SvgIcon',SvgIcon);*/
//第二种统一注册全局组件方法
import globalComponent from './components'
app.use(globalComponent)

import "./styles/index.scss"

app.mount('#app')
