import { changePassword } from "@/api/user";
import { Button, Card, Form, Input } from "antd";
import { useEffect } from "react";

type changePassword = {
  username: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

// 用户信息页面
const UserView = () => {
  const [form] = Form.useForm();


  const onFinish = async (values: changePassword) => {
    console.log(values);
    const res = await changePassword({
        password: values.password,
        newPassword: values.newPassword,
    });
    if (res.code === 0) {
        form.resetFields();
        form.setFieldsValue({
            username: "admin",
        });
    }
  }


  useEffect(() => {
    form.setFieldsValue({
      username: "admin",
    });
  });

  return (
    <Card size="small" title="系统密码修改" className="w-3/12">
      <Form form={form} labelCol={{span: 6}} onFinish={onFinish}>
        <Form.Item<changePassword>
          label="用户名"
          name={"username"}
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input placeholder="请输入用户名" disabled />
        </Form.Item>
        <Form.Item<changePassword>
          label="旧密码"
          name={"password"}
          rules={[
            {
              required: true,
              message: "请输入旧密码",
            },
          ]}
        >
          <Input.Password placeholder="请输入旧密码" />
        </Form.Item>
        <Form.Item<changePassword>
          label="新密码"
          name={"newPassword"}
          rules={[
            {
              required: true,
              message: "请输入新密码",
            },
          ]}
        >
          <Input.Password placeholder="请输入新密码" />
        </Form.Item>
        <Form.Item<changePassword>
          label="确认密码"
          name={"confirmPassword"}
          rules={[
            {
              required: true,
              message: "请再次输入新密码",
            },
            {
              validator: (rule, value, callback) => {
                if (value !== form.getFieldValue("newPassword")) {
                  callback("两次输入的密码不一致");
                }
                callback();
              },
            },
          ]}
        >
          <Input.Password placeholder="请再次输入新密码" />
        </Form.Item>
        <Form.Item<changePassword>>
          <div className="w-full flex items-center">
            <Button type="primary" htmlType="submit" className="ml-auto">
              修改密码
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserView;
