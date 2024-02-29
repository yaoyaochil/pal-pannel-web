import {Layout} from "antd";
import {Outlet} from "oh-router-react";
import MenuView from "@/layout/components/menu.tsx";
import UserInfoView from "@/layout/components/userInfo.tsx";
import LogoView from "@/layout/components/logo.tsx";


const LayoutView = () => {

    const { Sider,Content,Header } = Layout

    return (
        <div className={"w-full h-full"}>
            <Layout className={"w-full h-full"}>
                <Header style={{background: '#fff'}}>
                    <div className={"w-full h-full flex items-center"}>
                        <LogoView />
                        <div className={"ml-auto"}>
                            <UserInfoView />
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        <MenuView />
                    </Sider>
                    <Content>
                        <div className={"p-4 w-full h-full"}>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutView