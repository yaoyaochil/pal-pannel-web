import axios, {
    AxiosInstance,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";
import {emitter} from "@/utils/bus.ts";
import useUserStore, {UserInfoType} from "@/store/userStore.ts";
import router from "@/router/router.tsx";
import {message} from "antd";

// 创建axios实例
const service: AxiosInstance = axios.create({
    baseURL: "/api",
    timeout: 6666,
});


// 扩展axios请求配置
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    donNotShowLoading?: boolean;
}

// 扩展axios响应配置
interface CustomAxiosResponse extends AxiosResponse {
    donNotShowLoading?: boolean;
}


let activeAxios: number = 0; // 当前正在请求的数量
let timer: NodeJS.Timeout; // 定时器

// 打开loading
const openLoading = () => {
    activeAxios++;
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        if (activeAxios > 0) {
            emitter.emit("showLoading");
        }
    }, 1000);
};

// 关闭loading
const closeLoading = () => {
    activeAxios--;
    if (activeAxios <= 0) {
        clearTimeout(timer);
        emitter.emit("hideLoading");
    }
};


// 请求拦截器
const reqInterceptor: AxiosInterceptorManager<CustomAxiosRequestConfig> =
    service.interceptors.request;
reqInterceptor.use(
    (config: CustomAxiosRequestConfig) => {
        if (config) {
            if (!config.donNotShowLoading) {
                openLoading();
            }
            if (config.headers) {
                if (useUserStore.getState().token) { // 如果有token，则添加token 和用户id
                    config.headers["x-token"] = useUserStore.getState().token;
                    config.headers["Content-Type"] = "application/json";
                    config.headers["x-user-id"] = useUserStore.getState().userInfo?.id;
                }
            }
        }
        return config;
    },


    (error) => {
        // 关闭loading
        closeLoading();
        // TODO 消息提示
        message.error(error);

        return error;
    }
);


// 响应拦截器
const resInterceptor: AxiosInterceptorManager<CustomAxiosResponse> =
    service.interceptors.response;
resInterceptor.use(
    (response: CustomAxiosResponse) => {
        // 关闭loading
        closeLoading();
        if (response.headers["new-token"]) {
            useUserStore.getState().setToken(response.headers["new-token"]);
        }

        if (response.data.code === 0) {
            if (response.data.msg) {
                // TODO 消息提示
                message.success(response.data.msg);
            }
            return response.data;
        } else {
            // TODO 消息提示
            message.error(response.data.msg);
            if (response.data.data && response.data.data.reload) {
                // TODO 重新登录
                useUserStore.getState().setToken("");
                useUserStore.getState().setUserInfo({} as UserInfoType);
                localStorage.clear();
                router.navigate("/login")
            }
            return response.data.msg ? response.data : response;
        }
    },
    (error) => {
        // 关闭loading
        closeLoading();

        // TODO 消息提示
        if (!error.response) {
            message.error("网络错误");
            return;
        }

        switch (error.response.status) {
            case 401:
                useUserStore.getState().setToken("");
                useUserStore.getState().setUserInfo({} as UserInfoType);
                message.error("登录过期，请重新登录");
                router.navigate("/login")
                break;
            case 403:
                message.error("没有权限");
                break;
            case 404:
                message.error("请求的资源不存在");
                break;
            case 500:
                message.error("服务器错误");
                break;
            default:
                message.error("未知错误");
                break;
        }

        return error;
    }
);

export default service;