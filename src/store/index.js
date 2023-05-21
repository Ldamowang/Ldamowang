/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 14:08:10
 * @LastEditTime: 2023-05-13 13:20:01
 */
import React from 'react'
import LoginStore from './login.Store'
import RegisterStore from './register.store'

class RootStore {
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
    this.registerStore = new RegisterStore()
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)
