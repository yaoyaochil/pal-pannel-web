import {RouterView} from "oh-router-react";
import router from "@/router/router.tsx";
import {ConfigProvider, theme, type ThemeConfig} from "antd";
import {useEffect} from "react";
import zhCN from 'antd/locale/zh_CN';
function App() {

    // antd theme config
    const themeConfig: ThemeConfig = {
        algorithm: theme.defaultAlgorithm,
        token: {
            colorPrimary: "#f5c401",
        },
        components: {
            Divider: {
                marginLG: 10
            },
            Menu: {
                colorText: "#3f3d3d", //444242
                itemSelectedColor: "#73b7cc"
            },
            Button: {
                colorPrimaryBg: "#73b7cc",
            }
        }
    }

    useEffect(() => {
    },[])

    return (
        <ConfigProvider theme={themeConfig} locale={zhCN}>
            <RouterView router={router} />
        </ConfigProvider>
    )
}

export default App
