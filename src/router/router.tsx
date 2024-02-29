import {Router} from "oh-router";
import Dashboard from "@/page/dashboard";
import LoginView from "@/page/login";
import LayoutView from "@/layout";
import RouterHolderView from "@/page/routerHolder.tsx";
import UserView from "@/page/user";
import {ProgressMiddleware} from "@/router/middlewares/progress.ts";
import ServerBasicView from "@/page/server/options";
import ServerPalOptionsView from "@/page/server/pa-options";
import ServerPlayerOptionsView from "@/page/server/player-options";
import {AuthRouterMiddleware} from "@/router/middlewares/auth.ts";


export interface RouteMeta {
    title: string;
    icon: string;
    auth?: boolean;
}


const router = new Router<RouteMeta>({
    middlewares: [
        new AuthRouterMiddleware(),
        new ProgressMiddleware()
    ],
    routes: [
        {
            path: "/",
            redirect: "/layout/dashboard",
            meta: {
                title: "首页",
                icon: "home",
            }
        },
        {
            path: "/login",
            element: <LoginView/>,
            meta: {
                title: "登录",
                icon: "home",
            }
        },
        {
            path: "/layout",
            element: <LayoutView/>,
            meta: {
                title: "布局",
                icon: "home",
                auth: true
            },
            redirect: "/layout/dashboard",
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard/>,
                    meta: {
                        title: "首页",
                        icon: "home",
                        auth: true
                    }
                },
                {
                    path: "system",
                    element: <RouterHolderView />,
                    meta: {
                        title: "系统管理",
                        icon: "home",
                        auth: true
                    },
                    children: [
                        {
                            path: "user",
                            element: <UserView />,
                            meta: {
                                title: "用户管理",
                                icon: "home",
                                auth: true
                            }
                        },
                    ]
                },
                {
                    path: "server",
                    element: <RouterHolderView />,
                    meta: {
                        title: "服务器管理",
                        icon: "home",
                        auth: true
                    },
                    children: [
                        {
                            path: "options",
                            element: <ServerBasicView />,
                            meta: {
                                title: "基本配置",
                                icon: "home",
                                auth: true
                            }
                        },
                        {
                            path: "pal-options",
                            element: <ServerPalOptionsView />,
                            meta: {
                                title: "帕鲁相关配置",
                                icon: "home",
                                auth: true
                            }
                        },
                        {
                            path: "player-options",
                            element: <ServerPlayerOptionsView />,
                            meta: {
                                title: "玩家相关配置",
                                icon: "home",
                                auth: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

export default router;
