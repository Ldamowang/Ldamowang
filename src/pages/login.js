/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-18 22:23:27
 * @LastEditors: liyi
 * @LastEditTime: 2023-04-21 21:43:24
 * @FilePath: /myproject/src/pages/login.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import SubmitForm from './submit'
// import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default class login extends Component {
  routeTo() {
    this.props.history.replace('/Home')
  }
  render() {
    return (
      <div className="login">
        <Link to="/Home">home</Link>
        <Button type="primary" onClick={() => this.routeTo()}>
          Primary Button
        </Button>
        <SubmitForm></SubmitForm>
      </div>
    )
  }
}
