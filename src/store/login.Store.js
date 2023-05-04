/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 22:32:06
 * @LastEditTime: 2023-04-29 22:36:07
 */
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  login = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
  }
}

export default LoginStore
