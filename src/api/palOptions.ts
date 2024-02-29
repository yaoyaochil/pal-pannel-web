import service from "@/utils/request.ts";
import {GlobalResponse} from "@/global/type/response";
import {GameOptions} from "@/global/type/gameOptions.ts";


export const getPalOptions = ():Promise<GlobalResponse<GameOptions>> => {
    return service.request({
        method: "get",
        url: "/server/getOptions",
    });
}

export const setPalOptions = (data: GameOptions):Promise<GlobalResponse<{}>> => {
    return service.request({
        method: "post",
        url: "/server/updateOptions",
        data,
    });
}