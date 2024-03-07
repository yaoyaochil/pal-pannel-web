import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {getUserInfo, login} from "@/api/user.ts";
import router from "@/router/router.tsx";
import {jwtBlackList} from "@/api/jwt.ts";


/**
 * 用户store
 * @param userInfo 用户信息
 * @param token token
 * @param setUserInfo 设置用户信息
 * @param setToken 设置token
 * @param GetUserInfo 获取用户信息
 * @param loginIn 登录
 * @param loginOut 退出登录
 * @returns Store
 */
type Store = {
    userInfo: UserInfoType,
    token: string,
    setUserInfo: (userInfo: UserInfoType) => void,
    setToken: (token: string) => void,
    GetUserInfo: () => void,
    loginIn: (form: loginRequest) => void,
    loginOut: () => void
}


/**
 * 用户信息
 * @param id 用户ID
 * @param username 用户名
 * @param headerImg 用户头像
 * @param nickName 用户昵称
 * @param uuid 用户uuid
 */
export interface UserInfoType {
    id: number,
    username: string,
    headerImg: string,
    nickName: string,
    uuid: string
}


/**
 * 登录请求
 * @param username 用户名
 * @param password 密码
 */
export interface loginRequest {
    username: string,
    password: string,
    remember?: boolean
}


/**
 * 用户store
 * @param userInfo 用户信息
 * @param token token
 * @param setUserInfo 设置用户信息
 * @param setToken 设置token
 * @param GetUserInfo 获取用户信息
 * @param loginIn 登录
 * @param loginOut 退出登录
 * @returns Store
 */
const useUserStore = create(
    persist<Store>(
        (set) => ({
            userInfo: {} as UserInfoType,
            token: '' as string,
            setUserInfo: (userInfo: UserInfoType) => {
                set({userInfo})
            },
            setToken: (token: string) => {
                set({token})
            },
            GetUserInfo: async() => {
                // 获取用户信息
                try {
                    const res = await getUserInfo()
                    if (res) {
                        useUserStore.getState().setUserInfo(res.data)
                    } else {
                        console.log('获取用户信息失败')
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            loginIn: async(form: loginRequest) => { // 登录
                try {
                    const res = await login(form)
                    if (res) {
                        useUserStore.getState().setUserInfo(res.data.user)
                        useUserStore.getState().setToken(res.data.token)
                        router.navigate('/')
                    } else {
                        console.log('登录失败')
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            loginOut: async() => { // 退出登录
                try {
                    const res = await jwtBlackList({token: useUserStore.getState().token})
                    if (res) {
                        useUserStore.getState().setToken('')
                        useUserStore.getState().setUserInfo({} as UserInfoType)
                        localStorage.clear()
                        router.navigate('/login')
                    } else {
                        console.log('退出失败')
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useUserStore