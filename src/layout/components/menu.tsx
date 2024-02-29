import {Menu, MenuProps} from "antd";
import DashboardIcon from "@/icon/dashboard-icon";
import OptionIcon from "@/icon/option-icon";
import GamelineIcon from "@/icon/gameline-icon";
import SwitchlineIcon from "@/icon/switchline-icon";
import PetIcon from "@/icon/pet-icon";
import UsersIcon from "@/icon/users-icon";
import UserEditorIcon from "@/icon/usereditor-icon";
import router from "@/router/router.tsx";
import {useEffect, useState} from "react";

type MenuItem = Required<MenuProps>['items'][number];


const MenuView = () => {

    const menuItems:MenuItem[] = [
        {
            key: 'dashboard',
            icon: <DashboardIcon />,
            label: '控制台',
        },
        {
            key: 'system',
            icon: <OptionIcon />,
            label: '系统管理',
            children: [
                {
                    key: 'user',
                    label: '修改信息',
                    icon: <UserEditorIcon />,
                },
            ]
        },
        {
            key: 'server',
            icon: <SwitchlineIcon />,
            label: '服务器管理',
            children: [
                {
                    key: 'options',
                    label: '基本配置',
                    icon: <GamelineIcon />,
                },
                {
                    key: 'pal-options',
                    label: '帕鲁相关配置',
                    icon: <PetIcon />,
                },
                {
                    key: 'player-options',
                    label: '玩家相关配置',
                    icon: <UsersIcon />,
                }
            ]
        }
    ]

    const [openKeys, setOpenKeys] = useState('' as string)
    const [selectedKey, setSelectedKey] = useState('' as string)



    const HandleMenuClick:MenuProps['onSelect'] = (e) => {
        setSelectedKey(e.key)
        // router.navigate('/layout/'+e.key)
        // 倒序排列e.keyPath
        const path = e.keyPath.reverse().join('/')
        router.navigate('/layout/'+path)
    }

    useEffect(() => {
        // 根据当前路由选中菜单
        const path = window.location.pathname
        const selectedKeys = path.split('/').slice(2)
        // 倒序排列selectedKeys
        selectedKeys.reverse()
        setSelectedKey(selectedKeys[0])
        if (selectedKeys.length > 1) {
            setOpenKeys(selectedKeys[1])
        } else {
            setOpenKeys('')
        }
    },[])

    return (
        <div className={"h-full w-full"}>
            <Menu
                mode="inline"
                style={{ height: '100%' }}
                items={menuItems}
                onSelect={HandleMenuClick}
                onOpenChange={(openKeys) => setOpenKeys(openKeys[openKeys.length-1])}
                selectedKeys={[selectedKey]}
                openKeys={
                    [openKeys]
                }
            />
        </div>
    )
}

export default MenuView;