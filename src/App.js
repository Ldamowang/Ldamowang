/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-18 22:14:31
 * @LastEditors: liyi
 * @LastEditTime: 2023-05-04 20:58:00
 * @FilePath: /myproject/src/App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import './App.css'
import './style/reset.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { AuthComponent } from '@/components/AuthCompt'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
