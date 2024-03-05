import {Card, Form, Slider} from "antd";


export interface PlayerOptionsType {
    GuildPlayerMaxNum: number; // 公会最大人数
    PlayerDamageRateAttack: number; // 攻击伤害率
    PlayerDamageRateDefense: number; // 承受伤害率
    PlayerStomachDecreaceRate: number; // 饱食度降低率
    PlayerStaminaDecreaceRate: number; // 耐力降低率
    PlayerAutoHPRegeneRate: number; // 自动回血率
    PlayerAutoHpRegeneRateInSleep: number; // 睡眠中自动回血率
}

const OptionPlayer = () => {
    return (
        <Card size="small" title="玩家属性" className="w-full px-4">
            <Form.Item<PlayerOptionsType> label={"公会最大人数"} name={"GuildPlayerMaxNum"}>
                <Slider max={100} min={1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"攻击伤害率"} name={"PlayerDamageRateAttack"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"承受伤害率"} name={"PlayerDamageRateDefense"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"饱食度降低率"} name={"PlayerStomachDecreaceRate"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"耐力降低率"} name={"PlayerStaminaDecreaceRate"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"自动回血率"} name={"PlayerAutoHPRegeneRate"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<PlayerOptionsType> label={"睡眠中自动回血率"} name={"PlayerAutoHpRegeneRateInSleep"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
        </Card>
    )
}


export default OptionPlayer