<template>
  <el-form :model="userForm" :rules="userRule" ref="userForm" label-position="left" label-width="60px" class="demo-ruleForm login-container">
    <h3 class="title">系統登录</h3>
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="userForm.userName" placeholder="请填写用户名" type="text" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="userForm.password" placeholder="请填写密码" type="password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="userLogin" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  data () {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      // logining: false,
      userRule: {
        userName: [
          { validator: checkUserName, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      logining: state => state.loginModule.logining,
      userForm: state => state.loginModule.userForm
    }),
    ...mapGetters({
      getLoginParams: 'getLoginParams'
    })
  },
  methods: {
    userLogin (ev) {
      var _this = this
      _this.$refs.userForm.validate((valid) => {
        if (valid) {
          _this.logining = true
          var loginParams = _this.getLoginParams
          _this.$store.dispatch('requestLogin', loginParams).then(data => {
            _this.logining = false
            let { code, msg, user } = data[1]// 解构赋值
            if (code !== 200) {
              _this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              _this.$router.push({ path: '/hello' })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>