const express = require('express')
const cors = require('cors')

const app = express()

// 为所有请求配置解决跨域方案
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const path = req.path
  res.send(`你请求的路径为： ${path}`)
  res.send('hello express')
})

app.get('/api/login', (req, res) => {
  console.log(req.method)
  res.set('Content-type', 'text/html')
  res.send({
    falg: true,
    meg: 'hello'
  })
})

// 登录处理
app.post('/api/login', (req, res) => {
  const data = req.body
  res.set('Content-type', 'application/json')
  if (data.username === 'zhangsan' && data.password === '123456') {
    res.send({
      success: true,
      msg: '登录成功',
      user: {
        username: data.username,
        token: `41019`,
      }
    })
  } else {
    res.send({
      success: false,
      msg: '用户名或者密码错误',
      user: {
        username: '',
        token: ''
      }
    })
  }
})

app.listen('5000', () => {
  console.log('the server was listened on http://127.0.0.1:5000')
})