/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 14:08:10
 * @LastEditTime: 2023-04-29 22:37:11
 */
import React from 'react'
import LoginStore from './login.Store'

class RootStore {
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)
