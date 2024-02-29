import {Middleware, MiddlewareContext} from "oh-router";
import NProgress from 'nprogress'
import {RouteMeta} from "@/router/router.tsx";


// 用于路由切换时显示进度条的中间件
export class ProgressMiddleware extends Middleware<RouteMeta> {
    // 路由切换前 调用Nprogress.start()
    async handler(_ctx: MiddlewareContext<RouteMeta>, next: () => Promise<RouteMeta>): Promise<void> {
        NProgress.start()
        await next();
        NProgress.done();
    }

    register({ to }:MiddlewareContext<RouteMeta>) {
        // 如果 meta.role 存在的话则为当前路由注册该中间件
        return to.meta.title !== '404'
    }
}