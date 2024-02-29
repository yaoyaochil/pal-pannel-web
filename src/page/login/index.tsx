
import bg from "./static/bg.png"
import {Button, Form, Input} from "antd";
import useUserStore, {loginRequest} from "@/store/userStore.ts";

const LoginBackground = () => {
    return (
        <div className="flex w-full h-full">
            <img src={bg} className="w-full h-full object-cover"/>
        </div>
    )
}


const LoginFormView = () => {

    const loginIn = useUserStore((state) => state.loginIn)

    const handleFinish = (values: loginRequest) => {
        loginIn({username: values.username, password: values.password})
    }

    return (
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} autoComplete="off"
            onFinish={handleFinish}
        >
            <Form.Item<loginRequest> label="账户" name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入账户!',
                    },
                ]}
            >
                <Input  />
            </Form.Item>
            <Form.Item<loginRequest> label="密码" name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            {/*<Form.Item<loginRequest>*/}
            {/*    name="remember"*/}
            {/*    valuePropName="checked"*/}
            {/*    wrapperCol={{ offset: 8, span: 16 }}*/}
            {/*>*/}
            {/*    <Checkbox>记住我</Checkbox>*/}
            {/*</Form.Item>*/}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登陆
                </Button>
            </Form.Item>
        </Form>
    )
}

const LoginView = () => {
    return (
        <div className={"w-full h-full flex items-center"}>
            <div className="flex w-2/3 h-full items-center justify-center">
                <LoginBackground />
            </div>
            <div className="flex flex-col w-1/3 h-full justify-center items-center">
                <div className="w-7/12">
                    <LoginFormView />
                </div>
            </div>
        </div>
    )
}

export default LoginView