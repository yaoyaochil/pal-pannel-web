import {Button, Divider, Form} from "antd";
import OptionsBasic from "@/page/server/options/basic";
import {GameOptions} from "@/global/type/gameOptions.ts";
import OptionPal from "@/page/server/options/pal";
import {useEffect, useState} from "react";
import useServerStore from "@/store/useServerStore.ts";
import {getPalOptions, setPalOptions} from "@/api/palOptions.ts";
import {CloudSyncOutlined, CloudUploadOutlined} from "@ant-design/icons";


const ServerBasicView = () => {

    const options = useServerStore((state) => state.gameOptions)
    const setOptions = useServerStore((state) => state.setGameOptions)
    const [form] = Form.useForm()

    const [loading, setLoading] = useState(false)
    const handleFinish = (values: GameOptions) => {
        console.log(values)
        setOption(values)
    }

    const getOptions = () => {
        setLoading(true)
        setTimeout(async () => {
            const res = await getPalOptions()
            if (res.code === 0) {
                setOptions(res.data)
                form.setFieldsValue(res.data)
                setLoading(false)
            }
        }, 1000)
    }

    const setOption = (data:GameOptions) => {
        setLoading(true)
        setTimeout(async () => {
            const res = await getPalOptions()
            if (res.code === 0) {
                const setRes = await setPalOptions({...res.data, ...data})
                if (setRes.code === 0) {
                    getOptions()
                }
            }
        }, 1000)
    }

    useEffect(() => {
        getOptions()
    },[])

    return (
        <Form form={form} autoComplete="off" onFinish={handleFinish} initialValues={options}>
            <div className={"flex gap-3.5"}>
                {OptionsBasic()}
                {OptionPal()}
            </div>
            <Form.Item className={"mt-2"} labelCol={{offset:12}}>
                <Divider />
                <div className={"w-full flex"}>
                    <div className={"ml-auto flex gap-3"}>
                        <Button loading={loading} className={"ml-auto"} icon={<CloudSyncOutlined />} onClick={getOptions}>刷新数据</Button>
                        <Button loading={loading} className={"ml-auto"} type="primary" htmlType="submit" icon={<CloudUploadOutlined />}>
                            提交修改
                        </Button>
                    </div>
                </div>
            </Form.Item>
        </Form>
    )
}

export default ServerBasicView;