import { Button, Card, Form, Input } from "antd";


// 用户信息页面
const UserView = () => {


    return (
        <Card size="small" title="系统密码修改" className="w-4/12">
            <Form>
                <Form.Item label="用户名">
                    <Input placeholder="请输入用户名"/>
                </Form.Item>
                <Form.Item label="旧密码">
                    <Input.Password placeholder="请输入旧密码"/>
                </Form.Item>
                <Form.Item label="新密码">
                    <Input.Password placeholder="请输入新密码"/>
                </Form.Item>
                <Form.Item label="确认密码">
                    <Input.Password placeholder="请再次输入新密码"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">修改密码</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default UserView;