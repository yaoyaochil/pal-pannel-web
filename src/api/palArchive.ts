import { PalArchive, SaveArchive } from "@/global/type/palArchiveType";
import { requestWithDetailed } from "@/global/type/request";
import { GlobalResponse, GlobalResponseWithDetailed } from "@/global/type/response";
import service from "@/utils/request";


/**
 * 获取归档列表
 * @param data // 请求参数
 * @param data.page // 页码
 * @param data.pageSize // 每页数量
 * @returns 
 */
export const getArchiveList = (param:requestWithDetailed):Promise<GlobalResponseWithDetailed<PalArchive>> => {
    return service.request({
        method: "get",
        url: "/archive/getArchiveList",
        params: param
    });
}

/**
 * 删除归档
 * @param data // 请求参数
 * @param data.ID // 归档ID
 * @returns 
 */
export const deleteArchive = (param:requestWithDetailed):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/archive/deleteArchive",
        data: param
    });
}


/**
 * 创建归档
 * @returns 
 */
export const createArchive = (data: SaveArchive):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/archive/saveArchive",
        data
    });
}

/**
 * 恢复存档
 * @param data // 请求参数
 * @param data.id // 归档ID
 */
export const restoreArchive = (data:{id:number}):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/archive/restoreArchive",
        data
    });
}

/**
 * 删除归档
 * @param data // 请求参数
 * @param data.id // 归档ID
 */
export const removeArchive = (data:{id:number}):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/archive/deleteArchive",
        data
    });
}