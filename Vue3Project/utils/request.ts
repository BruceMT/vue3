//axios  二次 封装
import axios  from  'axios'

import {ElMessage} from "element-plus";

let request =  axios.create({
   baseURL:import.meta.env.VITE_APP_BASE_API,
   timeout:5000,
});

//request 实例添加请求与响应拦截器
request.interceptors.request.use(  (config)=>{

   return config
})
//相应拦截器
request.interceptors.response.use((response)=>{
   //成功的回调
   return response.data
},(error)=>{
   //失败的回调:处理http  网络错误


})