//统一管理项目用户相关接口
import request from "../../../utils/request.ts";
import type {loginForm,loginResponse,userResponse} from "./type.ts";

enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"

}
//登录接口方法
export const reqLogin = (data:loginForm) => request.post<any,loginResponse>(API.LOGIN_URL,data);
//获取用户信息
export const reqUserInfo = () => request.get<any,userResponse>(API.USERINFO_URL)