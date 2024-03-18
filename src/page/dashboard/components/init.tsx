import {Button, Input} from "antd";
import {useEffect, useState} from "react";
import {useWebSocketStore} from "@/store/useSocket.ts";


const PalServerInitView = () => {
    const [value, setValue] = useState('');

    const socket = useWebSocketStore((state) => state.socket); // 获取socket
    const [loading, setLoading] = useState(false) // 初始化按钮loading

    const [logs, setLogs] = useState([] as string[]); // 保存日志

    const initServer = () => {
        setLoading(true);
        // handleLogs();
        // setLogs('123123123')
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(value);
        } else {
            console.log('WebSocket connection is not open yet.');
        }
        setLoading(false);
    }

    useEffect(() => {
        const newSocket = new WebSocket(`ws://${location.host}/socket/websocket`);
        useWebSocketStore.setState({socket: newSocket});

        if (newSocket) {
            newSocket.onopen = () => {
                console.log('WebSocket connection opened.');
            }
            newSocket.onclose = () => {
                console.log('WebSocket connection closed.');
            }
            newSocket.onmessage = (event) => {
                console.log('WebSocket message received:', event.data);
                setLogs((logs) => [...logs, event.data]);
            }
        }

        // 组件销毁时关闭socket
        return () => {
            newSocket.close();
        }
    }, []);

    return (
        <div className="w-full h-full">
            <div className={"h-4/6 w-6/12 p-4 bg-white rounded-xl flex flex-col gap-y-3"}>
                <div className="flex w-full h-1/5">
                    <Input placeholder={"请输入消息"} className={"w-2/3 mr-2"} value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }}/>

                    <Button className={"flex-1 h-full"} type={"primary"} loading={loading}
                            onClick={initServer}>初始化</Button>
                </div>
                <div className="w-full h-4/5 border-2 border-amber-600 bg-green-500 rounded p-4">
                    <p className="flex flex-wrap gap-0.5 text-white">
                        {logs.map((log) => {
                            return log
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PalServerInitView;