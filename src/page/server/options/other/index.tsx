import {Card,Form,Slider,Switch,Select} from "antd";


export interface OtherOptionsType {
    DayTimeSpeedRate: number; // 白天流逝速度
    NightTimeSpeedRate: number; // 夜晚流逝速度
    ExpRate: number; // 经验值倍率
    BuildObjectDamageRate: number; // 对建筑物伤害倍率
    DropItemMaxNum: number; // 掉落物品最大存在数量
    BuildObjectDeteriorationDamageRate: number; // 非基地圈内建筑物的劣化率
    CollectionDropRate: number; // 道具采集量倍率
    CollectionObjectHpRate: number; // 可采集物品生命值倍率
    CollectionObjectRespawnSpeedRate: number; // 可采集物品刷新速度
    EnemyDropItemRate: number; // 道具掉落物品率
    PalEggDefaultHatchingTime: number; // 宠物蛋默认孵化时间（小时）
    bEnableInvaderEnemy: boolean; // 启用袭击事件
    DeathPenalty: string; // 死亡惩罚 None Item ItemAndEquipment All 分别是 无 损失物品 损失物品和装备 全部
}

const OptionOther = () => {
    return (
        <Card size="small" title="其他属性" style={{width: 300}}>
            <Form.Item<OtherOptionsType> label={"白天流逝速度"} name={"DayTimeSpeedRate"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"夜晚流逝速度"} name={"NightTimeSpeedRate"}>
                <Slider max={5} min={0.1} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"经验值倍率"} name={"ExpRate"}>
                <Slider max={20} min={0} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"对建筑物伤害倍率"} name={"BuildObjectDamageRate"}>
                <Slider max={3} min={0.5} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"掉落物品最大存在数量"} name={"DropItemMaxNum"}>
                <Slider max={10000} min={0} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"非基地圈内建筑物的劣化率"} name={"BuildObjectDeteriorationDamageRate"}>
                <Slider max={10} min={0} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"道具采集量倍率"} name={"CollectionDropRate"}>
                <Slider max={5} min={0.5} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"可采集物品生命值倍率"} name={"CollectionObjectHpRate"}>
                <Slider max={3} min={0.5} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"可采集物品刷新速度"} name={"CollectionObjectRespawnSpeedRate"}>
                <Slider max={5} min={0.5} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"道具掉落物品率"} name={"EnemyDropItemRate"}>
                <Slider max={5} min={0.5} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"宠物蛋默认孵化时间（小时）"} name={"PalEggDefaultHatchingTime"}>
                <Slider max={240} min={0} step={0.1}/>
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"启用袭击事件"} name={"bEnableInvaderEnemy"}>
                <Switch />
            </Form.Item>
            <Form.Item<OtherOptionsType> label={"死亡惩罚"} name={"DeathPenalty"}>
                <Select>
                    <Select.Option value="None">无</Select.Option>
                    <Select.Option value="Item">损失物品</Select.Option>
                    <Select.Option value="ItemAndEquipment">损失物品和装备</Select.Option>
                    <Select.Option value="All">全部</Select.Option>
                </Select>
            </Form.Item>
        </Card>
    )
}

export default OptionOther