//axios  二次 封装
import axios  from  'axios'

import {ElMessage} from "element-plus";

let request =  axios.create({
   baseURL:import.meta.env.VITE_APP_BASE_API,
   timeout:5000,
});

//request 实例添加请求与响应拦截器
request.interceptors.request.use(  (config)=>{
//这里可以往 请求头里增加参数 例如 config.headers.token  = '123'
   return config
})
//相应拦截器
request.interceptors.response.use((response)=>{
   //成功的回调


   return response.data
},(error)=>{
   //失败的回调:处理http  网络错误
   let message  =  '';
   let status = error.response.status;
   switch (status) {
      case 401:
         message =  "TOKEN过期"
         break;
      case 403:
         message = "无权限访问"
         break;
      case 404:
         message = "地址错误"
         break;
      case 500:
         message = "服务器错误"
         break;
      default:
         message = "网络问题"
         break;
   }
   //提示错误信息
   ElMessage(
       {
          type:'error',
          message
       }
   );
   return Promise.reject(error);

})

//暴露
export default request;