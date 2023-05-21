/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-18 22:14:31
 * @LastEditors: liyi
 * @LastEditTime: 2023-05-21 12:03:57
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
import Register from '@/pages/Register'
import { AuthComponent } from '@/components/AuthCompt'
import Publish from '@/pages/Publish'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
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
          >
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
