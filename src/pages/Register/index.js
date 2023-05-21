/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 21:04:53
 * @LastEditTime: 2023-05-13 19:56:57
 */
import { useNavigate } from 'react-router-dom'
import { Card, Form, Input, Button, message } from 'antd'
import './index.scss'
import { useStore } from '@/store'

function Register() {
  const navigate = useNavigate()
  const { registerStore } = useStore()
  const onFinish = async (values) => {
    const { username, password } = values

    try {
      console.log(username, password)
      await registerStore.register({ name: username, password })
      navigate('/login')
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }
  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <h1 className="title">注册页面</h1>
        {/* 登录表单 */}
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          style={{
            maxWidth: 600
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
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
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Register
