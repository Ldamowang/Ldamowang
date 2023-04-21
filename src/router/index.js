/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-18 22:22:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-19 21:31:24
 * @FilePath: /myproject/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { Component } from 'react'
// 导入所需组件
import Login from '../pages/login.js'
import Home from '../pages/home.js'
// 导入路由依赖
import { Route,BrowserRouter } from 'react-router-dom'
 
export default class index extends Component {
  render() {
    return (
        // 使用BrowserRouter包裹，配置路由
      <BrowserRouter>
         {/* 使用/配置路由默认页；exact严格匹配 */}
        <Route component={Login} path='/' exact></Route>
        <Route component={Login} path='/Login'></Route>
        <Route component={Home} path='/Home'></Route>
      </BrowserRouter>
    )
  }
}