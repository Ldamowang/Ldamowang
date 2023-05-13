/*
 * @Author: liyi
 * @LastEditors: liyi 991230629@qq.com
 * @Date: 2023-04-29 21:04:53
 * @LastEditTime: 2023-05-11 22:30:44
 */
import { Card, Form, Input, Checkbox, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useStore } from '@/store'
// import LoginStore from '@/store/login.Store'
function Login() {
  const navigate = useNavigate();
  const { loginStore } = useStore()
  const onFinish = async(values) => {
    console.log(values);
    message.success("登录成功");
    const { username, password } = values
    try {
      console.log(username,password);
      await loginStore.login({name:username, password} )
      navigate("/");
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  };
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Login;
