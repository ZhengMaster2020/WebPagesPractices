<template>
  <div class="login">
    <Row type='flex' justify='center' class="login-header">
      <h2>欢迎登录</h2>
    </Row>
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
      if (account.user === 'zhangsan' && account.password === '123456') {
        this.$router.push('/')
      } else {
        this.$Message.error('登陆失败')
      }
    }
  }
}
</script>

<style scoped>
.login{
  margin: 10px;
}
.login-header{
  margin-bottom: 20px;
}
</style>