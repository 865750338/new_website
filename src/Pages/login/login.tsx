import React, { FC, useState } from 'react'

import './login.css'
const Login: FC<any> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState<number>(0)
  const printValues = (e) => {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <div>
      <div className="w3l-hotair-form">
        <h1>小美账号登录页</h1>
        <div className="containers">
          <div className="workinghny-form-grid">
            <div className="main-hotair">
              <div className="content-wthree">
                <h2>{type === 0 ? '登录' : '注册'}</h2>
                <p>{type === 0 ? '登录到您的账户' : '注册新账户'}</p>
                <form onSubmit={printValues}>
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    name="username"
                    type="text"
                    placeholder="请输入用户名"
                  />
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    name="password"
                    type="password"
                    placeholder="请输入密码"
                  />
                  {type === 1 ? (
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      name="password"
                      type="password"
                      placeholder="请重复输入密码"
                    />
                  ) : (
                    ''
                  )}
                  <br />
                  <button>{type === 0 ? '登录' : '注册'}</button>
                </form>

                {type === 1 ? (
                  <p className="account">
                    已有账号?
                    <span onClick={() => setType(0)}>立即登录</span>
                  </p>
                ) : (
                  <p className="account">
                    还没有账号?
                    <span onClick={() => setType(1)}>立即注册</span>
                  </p>
                )}
              </div>
              <div className="w3l_form align-self">
                <div className="left_grid_info"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p className="copy-footer-29">© 2022 XiaoMe Log In Form. All rights reserved</p>
      </div>
    </div>
  )
}
export default Login
