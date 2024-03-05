import service from "@/utils/request.ts";
import {GlobalResponse} from "@/global/type/response";
import {GameOptions, unlockRequest} from "@/global/type/gameOptions.ts";


export const getPalOptions = ():Promise<GlobalResponse<GameOptions>> => {
    return service.request({
        method: "get",
        url: "/server/getOptions",
    });
}

export const setPalOptions = (data: GameOptions):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/server/updateOptions",
        data,
    });
}


export const unlockTo20 = (data: unlockRequest):Promise<GlobalResponse<object>> => {
    return service.request({
        method: "post",
        url: "/server/unlockTo20",
        data,
    });
}

export const checkUnlockTo20 = ():Promise<GlobalResponse<boolean>> => {
    return service.request({
        method: "get",
        url: "/server/checkUnlockTo20",
    });
}