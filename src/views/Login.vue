<template>
  <div>
    <div class="bg"></div>
    <div class="login">
      <Tabs>
          <Tab-pane label="用户注册">
             <Row type='flex' justify='center' class="code-row-bg">
              <col span="18">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                  <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </Form-item><br>
                  <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </Form-item><br>
                  <Form-item prop="password2">
                    <Input type="password" v-model="formInline.password" placeholder="确认密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </Form-item><br>
                  <Form-item>
                      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                      <Button type="primary" @click="handleReset('formInline')">重置</Button>
                  </Form-item>
                </Form>
              </col>
            </Row>
          </Tab-pane>
          <Tab-pane label="登录">
            <Row type='flex' justify='center' class="code-row-bg">
              <col span="18">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <Form-item prop="user">
                      <Input type="text" v-model="formInline.user" placeholder="Username">
                          <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                    </Form-item><br>
                    <Form-item prop="password">
                      <Input type="password" v-model="formInline.password" placeholder="Password">
                          <Icon type="ios-lock-outline" slot="prepend"></Icon>
                      </Input>
                    </Form-item><br>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </Form-item>
                </Form>
              </col>
            </Row>
          </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          formInline: {
              user: '',
              password: ''
          },
          ruleInline: {
              user: [
                  { required: true, message: '请填写用户名', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '请填写密码', trigger: 'blur' },
                  { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
              ]
          }
      }
  },
  methods: {
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              this.checkUserAccount(this.formInline)
            } else {
                this.$Message.error('表单验证失败!');
            }
        })
    },
    checkUserAccount (account) {
      this.$axios.post('http://127.0.0.1:5000/api/login', {
        user: account
      })
        .then(res => {
          const data = res.data
          const token = data.token
          console.log(data)
          if (data.success) {
            this.$Message.success('登录 成功')
            this.$router.push('/')
          } else {
            this.$Message.error('登录失败')
          }
        })
        .catch(err => {
          console.log(err)
          this.$Message.error(err)
        })
      // if (account.user === 'zhangsan' && account.password === '123456') {
      //   this.$router.push('/')
      // } else {
      //   this.$Message.error('登陆失败')
      // }
    }
  }
}
</script>

<style scoped>
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-image: url(https://gtms01.alicdn.com/tps/i1/TB1GTCYLXXXXXcHXpXXcoeQ2VXX-2500-600.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}
.login{
  position: absolute;
  top: 120px;
  right: 120px;
  margin: 10px;
  width: 350px;
  padding: 20px;
  background-color: rgba(255,255,255,.9);
  border: 1px solid red
}
</style>