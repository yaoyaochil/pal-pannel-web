import {Card, Form, Slider} from "antd";


export interface PalOptionsType {
    PalCaptureRate: number;
    PalSpawnNumRate: number;// 刷出率
    PalDamageRateAttack: number;// 攻击伤害率
    PalDamageRateDefense: number;// 承受伤害率
    PalStomachDecreaceRate: number;// 饱食度降低率
    PalStaminaDecreaceRate: number;// 耐力降低率
    PalAutoHPRegeneRate: number;// 自动回血率
    PalAutoHpRegeneRateInSleep: number;// 睡眠中自动回血率
}


const OptionPal = () => {

    return (
        <Card size="small" title="帕鲁属性" className="w-full px-4">
            <Form.Item<PalOptionsType> label={"抓捕成功率"} name={"PalCaptureRate"}>
                <Slider max={5} min={0.5} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"刷出率"} name={"PalSpawnNumRate"}>
                <Slider max={5} min={0.5} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"攻击伤害率"} name={"PalDamageRateAttack"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"承受伤害率"} name={"PalDamageRateDefense"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"饱食度降低率"} name={"PalStomachDecreaceRate"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"耐力降低率"} name={"PalStaminaDecreaceRate"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"自动回血率"} name={"PalAutoHPRegeneRate"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
            <Form.Item<PalOptionsType> label={"睡眠中自动回血率"} name={"PalAutoHpRegeneRateInSleep"}>
                <Slider max={5} min={0.1} step={0.1} />
            </Form.Item>
        </Card>
    )
}

export default OptionPal