import {Avatar, Button, Divider, Popconfirm, Popover} from "antd";
import {useEffect} from "react";
import useUserStore from "@/store/userStore.ts";


const UserInfoView = () => {
    const userInfo = useUserStore((state) => state.userInfo)
    const loginOut = useUserStore((state) => state.loginOut)
    useEffect(() => {
        // fetch user info
    },[])

    const PopoverView = () => {
        return (
            <div>
                <div className={"flex gap-2 my-5"}>
                    <Avatar size={48} src={userInfo.headerImg} />
                    <div>
                        <div className={"text-16"}>{userInfo.nickName}</div>
                        <div className={"text-12"}>管理员</div>
                    </div>
                </div>
                <Divider />
                <div className={"flex"}>
                    <Button type={"text"}>修改密码</Button>
                    <Button type={"text"}>系统设置</Button>
                </div>
                <Divider />
                <div className={"flex"}>
                    <Popconfirm title={"确定要退出吗？"} okText={"确定"} cancelText={"取消"} onConfirm={loginOut}>
                        <Button className={"ml-auto"} type={"primary"} danger={true}>退出登录</Button>
                    </Popconfirm>
                </div>
            </div>
        )
    }


    return (
        <div className={"flex gap-0.5 justify-center items-center"}>
            <Popover content={PopoverView} placement="bottomRight" arrow={false} trigger={"click"}>
                <div className={"h-full"}>
                    <Avatar className={"cursor-pointer"} size={38} src={userInfo.headerImg} />
                </div>
            </Popover>
        </div>
    )
}

export default UserInfoView;