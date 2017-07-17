<template lang="html">
  <div class="wrapper">
    <div class="login-wrapper">
      <el-form :model="form" ref="form" :rules="rules" class="login-form">
        <div class="login-title">系统登陆</div>
        <el-form-item prop="loginName">
          <el-input v-model="form.loginName" placeholder="账号" @keyup.enter.native="doLogin"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码" v-on:keyup.enter.native="doLogin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="doLogin">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script scoped>

  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    computed: {
      ...mapState({
        httpUrl: 'httpUrl'
      })
    },
    data() {
      return {
        form: {
          loginName: '',
          password: '',
        },
        rules: {
          loginName: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      doLogin() {
        var form = this.form;

        if (form.loginName == '' || form.password == '') {
          this.$message({
            type: 'info',
            message: '请输入用户名或密码'
          });
          return false;
        }

        this.httpPost(this.httpUrl.url.loginUrl, form, (response) => {
          console.log(response)
          //保存cookie
          this.$cookie.set('userInfo', JSON.stringify(data), { expires: '1D' });
          //跳转到adminView

          this.$router.push({
            path: 'admin'
          })
        })


      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #324057;
    display: flex;
    justify-content: center;
  }

  .login-form {
    width: 350px;
    padding: 35px 35px 15px;
    background-color: #ffffff;
    border-radius: 6px;
    transform: translateY(50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 0px 8px #dad1c7;
  }

  .login-title {
    font-size: 20px !important;
    margin-bottom: 15px;
  }
</style>
