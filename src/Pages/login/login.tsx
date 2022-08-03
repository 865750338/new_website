import React, { FC, useState } from 'react'

import './login.css'
const Login: FC<any> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const printValues = (e) => {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <div>
      <div className="w3l-hotair-form">
        <h1>小美账号登录页</h1>
        <div className="container">
          <div className="workinghny-form-grid">
            <div className="main-hotair">
              <div className="content-wthree">
                <h2>登录</h2>
                <p>登录到您的账户</p>
                <form onSubmit={printValues}>
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    name="username"
                    type="text"
                    placeholder="User Name"
                  />
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    name="password"
                    type="password"
                    placeholder="User Password"
                  />
                  <br />
                  <button>登录</button>
                </form>

                <p className="account">
                  还没有账号? <a href="#signup">立即注册</a>
                </p>
              </div>
              <div className="w3l_form align-self">
                <div className="left_grid_info"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p className="copy-footer-29">
          © 2020 Hotair Log In Form. All rights reserved | Design by <a href="https://www.17sucai.com">17sucai</a>
        </p>
      </div>
    </div>
  )
}
export default Login
