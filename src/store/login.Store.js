/*
 * @Author: liyi
 * @LastEditors: liyi 991230629@qq.com
 * @Date: 2023-04-29 22:32:06
 * @LastEditTime: 2023-05-13 10:36:53
 */
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  login = async ({ name, password }) => {
    const res = await http.post('/user/login',{name,password})
    if(res.data.code==="0"&&res.data.data){
        localStorage.setItem("userInfo",JSON.stringify(res.data.data))
    }
  }
  // http://112.124.27.151:8081/user/register
  // register=async ({ name, password }) => {
  //   const res = await http.post(`/user/register?name=${name}&password=${password}`)
  //   this.token = res.data
  //   console.log(res);
  // }
}

export default LoginStore
