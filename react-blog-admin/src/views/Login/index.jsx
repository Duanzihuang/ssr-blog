import React, { useState } from 'react'
import { Card, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import MD5 from 'crypto-js/md5'
import axios from '../../utils/http'
import { setToken } from '../../utils/token'

function Login({ history }) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loginText, setLoginText] = useState('登 录')

  const login = async () => {
    setLoading(true)
    setLoginText('登录中...')

    const result = await axios.post('user', {
      username: username,
      password: MD5(password + '!@#qwe112233').toString()
    })

    setLoading(false)
    setLoginText('登 录')
    if (result.data.status === 0) {
      setToken(result.data.token)

      message.success(result.data.message, 1, () => {
        history.push('/')
      })
    } else {
      message.error(result.data.message, 1)
    }
  }

  return (
    <Card
      title="博客管理系统登录"
      style={{ width: 400 }}
      className={styles.card}
    >
      <p>
        <Input
          value={username}
          onChange={e => setUserName(e.target.value)}
          size="large"
          placeholder="请输入用户名"
          prefix={<UserOutlined />}
        />
      </p>
      <p>
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
          size="large"
          placeholder="请输入密码"
          prefix={<LockOutlined />}
        />
      </p>
      <p>
        <Button block type="primary" loading={loading} onClick={login}>
          {loginText}
        </Button>
      </p>
    </Card>
  )
}

export default Login
