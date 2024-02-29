import {Middleware, MiddlewareContext} from "oh-router";
import router, {RouteMeta} from "@/router/router.tsx";
import useUserStore from "@/store/userStore.ts";


export class AuthRouterMiddleware extends Middleware<RouteMeta> {
    async handler(ctx: MiddlewareContext<RouteMeta>, next: () => Promise<RouteMeta>): Promise<void> {
        // 如果当前路由需要登录验证，则判断token是否存在
        if (ctx.to.meta.auth === true) {
            if (useUserStore.getState().token !== "") {
                await next();
            } else {
                router.navigate("/login");
            }
        } else {
            await next();
        }
    }
    register({to}: MiddlewareContext<RouteMeta>) {
        return to.meta.auth === true;
    }
}