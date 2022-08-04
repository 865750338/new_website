import React, { FC, useState } from 'react'
import https from '../../https'
import './login.css'
import { message } from 'antd'
interface Props {
  history: any
}
const Login: FC<any> = (props: Props) => {
  const { history } = props
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwords, setPasswords] = useState<string>('')
  const [type, setType] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const printValues = (e) => {
    e.preventDefault()
  }
  const loginInfo = async () => {
    if (type === 1 && password !== passwords) {
      setError('两次输入密码不一致')
      return
    }
    if (!password || !username) {
      setError('账号或密码不能为空')
      return
    }
    const res: any = await https('post', '/api/user/dtLogin', {
      // loginName: username,
      // passWord: password
      loginName: 'admin',
      passWord: 6543210
    })
    const { status, data } = res
    if (status === 200) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      message.info('登录成功')
      setTimeout(() => {
        history.push('/')
      }, 1000)
    } else {
      setError(res.message)
    }
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
                      onChange={(event) => setPasswords(event.target.value)}
                      name="password"
                      type="password"
                      placeholder="请重复输入密码"
                    />
                  ) : (
                    ''
                  )}
                  <br />
                  <button onClick={loginInfo}>{type === 0 ? '登录' : '注册'}</button>
                  {error ? (
                    <span style={{ color: '#f00', width: '100%', textAlign: 'center', display: 'block' }}>
                      错误:{error}
                    </span>
                  ) : (
                    ''
                  )}
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
