import {Card, Form, Input, Switch} from "antd";


export interface GameSettingsType {
    ServerName: string,
    ServerDescription: string,
    ServerPlayerMaxNum: number,
    Difficulty: string,
    AdminPassword: string,
    ServerPassword: string,
    Region: string,
    bUseAuth: boolean,
    BanListURL: string,
    RCONEnabled?: boolean,
    PublicIP?: string,
    RCONPort?: number,
}

const OptionsBasic = () => {
    return (
        <Card size="small" title="基础配置" style={{ width: 300 }}>
            <Form.Item<GameSettingsType> label="服务器名称" name="ServerName">
                <Input placeholder="请输入游戏名称"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="服务器描述" name="ServerDescription">
                <Input placeholder="请输入游戏描述"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="最大玩家数" name="ServerPlayerMaxNum">
                <Input placeholder="请输入最大玩家数"/>
            </Form.Item>
            {/*<Form.Item<GameSettingsType> label="游戏难度(没什么用)" name="Difficulty">*/}
            {/*    <Select placeholder="请选择游戏难度">*/}
            {/*        <Select.Option value="None">简单</Select.Option>*/}
            {/*        <Select.Option value="normal">普通</Select.Option>*/}
            {/*        <Select.Option value="hard">困难</Select.Option>*/}
            {/*    </Select>*/}
            {/*</Form.Item>*/}
            <Form.Item<GameSettingsType> label="Admin密码" name="AdminPassword">
                <Input.Password placeholder="服务器管理员密码"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="服务器密码" name="ServerPassword">
                <Input.Password placeholder="输入服务器密码"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="服务器地区" name="Region">
                <Input placeholder="请输入地区"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="是否开启授权" name="bUseAuth">
                <Switch />
            </Form.Item>
            <Form.Item<GameSettingsType> label="公共IP" name="PublicIP">
                <Input placeholder="请输入IP"/>
            </Form.Item>
            <Form.Item<GameSettingsType> label="黑名单(默认本地)" name="BanListURL">
                <Input placeholder="请输入名单地址"/>
            </Form.Item>
        </Card>

    )
}

export default OptionsBasic;