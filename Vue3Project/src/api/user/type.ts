//登录接口需要携带参数ts类型
export  interface loginForm{
    username:string,
    password:string
}



interface dataType{
    token:string
}
//登录接口返回的数据类型
export interface  loginResponse {
    code:number,
    token:dataType
}

//定义服务器返回用户信息数据类型
interface user{
    checkUser:userInfo
}
interface userInfo{
    userId: number,
    avatar:string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
export interface userResponse{
    code:number,
    data:user

}