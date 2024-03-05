import { Card, Form, Select, Slider, Switch } from "antd";


export interface AdvanceOptionsType {
    // 难度
    Difficulty: string;
    // 工作速率
    WorkSpeedRate: number;
    // 是否多人游戏
    bIsMultiplay: boolean;
    // 是否 PvP
    bIsPvP: boolean;
    // 是否捡取其他公会的死亡惩罚掉落
    bCanPickupOtherGuildDeathPenaltyDrop: boolean;
    // 启用超时未登录惩罚
    bEnableNonLoginPenalty: boolean;
    // 启用快速传送
    bEnableFastTravel: boolean;
    // 是否通过地图选择复活位置
    bIsStartLocationSelectByMap: boolean;
    // 登出后玩家人物是否存在
    bExistPlayerAfterLogout: boolean;
    // 启用据点内防御其他公会玩家
    bEnableDefenseOtherGuildPlayer: boolean;
    // 合作玩家最大数量
    CoopPlayerMaxNum: number;
    // 启用玩家列表显示
    bShowPlayerList: boolean;
    // 公开端口号
    PublicPort: number;
    // 是否启用 RCON
    RCONEnabled: boolean;
    // RCON 端口号
    RCONPort: number;
    DeathPenalty: string; // 死亡惩罚 None Item ItemAndEquipment All 分别是 无 丢失非装备物品 丢失物品和装备 丢失所有物品、装备、帕鲁（在背包中的）
}

const OptionAdvance = () => {
  return (
    <Card size="small" title="高级配置" className="w-full px-4">
        <Form.Item<AdvanceOptionsType> label={"工作速率"} name={"WorkSpeedRate"}>
            <Slider max={5} min={0.1} step={0.1}/>
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"是否多人游戏"} name={"bIsMultiplay"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"是否 PvP"} name={"bIsPvP"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"是否捡取其他公会的死亡惩罚掉落"} name={"bCanPickupOtherGuildDeathPenaltyDrop"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"启用超时未登录惩罚"} name={"bEnableNonLoginPenalty"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"启用快速传送"} name={"bEnableFastTravel"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"是否通过地图选择复活位置"} name={"bIsStartLocationSelectByMap"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"登出后玩家人物是否存在"} name={"bExistPlayerAfterLogout"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"启用据点内防御其他公会玩家"} name={"bEnableDefenseOtherGuildPlayer"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"合作玩家最大数量"} name={"CoopPlayerMaxNum"}>
            <Slider max={10} min={0} step={1}/>
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"启用玩家列表显示"} name={"bShowPlayerList"}>
            <Switch />
        </Form.Item>
        <Form.Item<AdvanceOptionsType> label={"死亡惩罚"} name={"DeathPenalty"}>
                <Select>
                    <Select.Option value="None">无</Select.Option>
                    <Select.Option value="Item">丢失非装备物品</Select.Option>
                    <Select.Option value="ItemAndEquipment">丢失物品和装备</Select.Option>
                    <Select.Option value="All">丢失所有物品、装备、帕鲁（在背包中的）</Select.Option>
                </Select>
        </Form.Item>
    </Card>
  )
};

export default OptionAdvance;
