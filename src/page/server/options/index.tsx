import {Button, Divider, Form, Switch} from "antd";
import OptionsBasic from "@/page/server/options/basic";
import {GameOptions} from "@/global/type/gameOptions.ts";
import OptionPal from "@/page/server/options/pal";
import {useEffect, useState} from "react";
import useServerStore from "@/store/useServerStore.ts";
import {checkUnlockTo20, getPalOptions, setPalOptions, unlockTo20} from "@/api/palOptions.ts";
import {CloudSyncOutlined, CloudUploadOutlined} from "@ant-design/icons";
import OptionPlayer from "@/page/server/options/player";
import OptionOther from "@/page/server/options/other";
import UnlockIcon from "@/icon/unlock-icon";
import OptionAdvance from "./advance";


const ServerBasicView = () => {

    const options = useServerStore((state) => state.gameOptions)
    const setOptions = useServerStore((state) => state.setGameOptions)
    const [lock, setLock] = useState(false)
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

    const checkUnlock = async () => {
        const res = await checkUnlockTo20()
        if (res.code === 0) {
            setLock(res.data)
        }
    }

    const setLockData = async (lock: boolean) => {
        setTimeout(async () => {
            const res = await unlockTo20({isUnlock: lock})
            if (res.code === 0) {
                const isUnlock = await checkUnlockTo20()
                if (isUnlock.code === 0) {
                    setLock(isUnlock.data)
                }
            }
        }, 1000)
    }

    useEffect(() => {
        getOptions()
        checkUnlock()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Form form={form} autoComplete="off" onFinish={handleFinish} initialValues={options}>
            <div className={"grid grid-cols-3 gap-x-4 gap-y-7"}>
                {OptionsBasic()}
                {OptionPal()}
                {OptionPlayer()}
                {OptionOther()}
                {OptionAdvance()}
            </div>

                <Form.Item className={"mt-2"} labelCol={{offset:12}}>
                    <div className={"w-full flex flex-col bg-white"}>
                        <Divider />
                        <div className="flex w-full h-full items-center">
                            <UnlockIcon className="w-5 mr-1" />
                            <span className=" text-sm text-center mr-2 text-gray-600 font-bold">解锁据点上限为20</span>
                            <Switch value={lock} onChange={(checked) => {
                                setLockData(checked)
                            }} />
                            <div className={"ml-auto flex gap-3"}>
                                <Button loading={loading} className={"ml-auto"} icon={<CloudSyncOutlined />} onClick={getOptions}>刷新数据</Button>
                                <Button loading={loading} className={"ml-auto"} type="primary" htmlType="submit" icon={<CloudUploadOutlined />}>
                                    提交修改
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form.Item>


        </Form>
    )
}

export default ServerBasicView;