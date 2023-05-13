/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 22:32:06
 * @LastEditTime: 2023-05-13 12:22:26
 */
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  login = async ({ name, password }) => {
    const res = await http.post('/user/login', { name, password })
    if (res.data.code === '0' && res.data.data) {
      localStorage.setItem('userInfo', JSON.stringify(res.data.data))
    }
  }
}

export default LoginStore
