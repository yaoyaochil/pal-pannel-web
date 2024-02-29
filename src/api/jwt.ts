import { GlobalResponse } from "@/global/type/response";
import service from "@/utils/request";


/**
 * 注销登录jwt
 * @param {object} data token
 * @param {string} data.token token
 * @returns GlobalResponse<{}>
 */
export const jwtBlackList = (data: { token: string }):Promise<GlobalResponse<null>> => {
  return service.request({
    method: "post",
    url: "/jwt/jwtInBlacklist",
    data,
  });
};
