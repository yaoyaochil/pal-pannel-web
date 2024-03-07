import { GlobalResponse } from "@/global/type/response";
import { loginResponse, userInfoType } from "@/global/type/user";
import service from "@/utils/request";
import {loginRequest} from "@/store/userStore.ts";




/**
 * 登录
 * @param {object} data 用户名
 * @param {string} data.username 用户名
 * @param {string} data.password 密码
 * @returns GlobalResponse<loginResponse>
 */
export const login = (data: loginRequest):Promise<GlobalResponse<loginResponse>> => {
  return service.request({
    method: "post",
    url: "/base/login",
    data,
  });
};

/**
 * 退出登录
 * @param {object} data token
 */
export const logout = (data: {token:string}):Promise<GlobalResponse<object>> => {
  return service.request({
    method: "post",
    url: "/logout",
    data,
  })
}


/**
 * 获取用户信息
 * @returns GlobalResponse<userInfoType>
 */
export const getUserInfo = ():Promise<GlobalResponse<userInfoType>> => {
  return service.request({
    method: "get",
    url: "/user/getUserInfo",
  });
}

/**
 * 修改系统密码
 * return GlobalResponse<{}>
 */
export const changePassword = (data: {password:string, newPassword:string}):Promise<GlobalResponse<object>> => {
  return service.request({
    method: "post",
    url: "/user/changePassword",
    data,
  });
}