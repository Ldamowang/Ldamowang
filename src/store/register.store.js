/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-05-13 12:52:19
 * @LastEditTime: 2023-05-13 17:44:05
 */
// http://112.124.27.151:8081/user/register
import { message } from 'antd'
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class RegisterStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  register = async ({ name, password }) => {
    const res = await http.post('/user/register', { name, password })
    console.log(res)
    if (res.data.code === '0' && res.data.data) {
      message.success('注册成功')
    } else {
      message.error(res.data.msg || '注册失败')
    }
  }
}

export default RegisterStore
