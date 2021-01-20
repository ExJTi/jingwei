<template>
  <div style="width:100%;height:100%">
    <div class="sky-login">
      <div class="sky-login__header" />
      <div class="sky-login__main">
        <div class="sky-login__form-content">
          <el-form ref="loginForm" :model="loginForm" class="sky-login__form">
            <div class="sky-login__form-header">
              <el-form-item class="sky-login__form-item">
                <div>
                  <img width="350" height="50" src="@/assets/images/login/logo_blue.svg" />
                </div>
              </el-form-item>
            </div>
            <div class="sky-login__form-body">
              <el-form-item :rules="userNameRules" prop="userName" class="sky-login__form-item" verify ellipsis-message>
                <el-input
                  v-model="loginForm.userName"
                  :placeholder="$t('login.adminName')"
                  name="userName"
                  prefix-icon="sk-icon-username"
                />
              </el-form-item>
              <el-form-item :rules="passwordRules" prop="password" class="sky-login__form-item" verify>
                <el-input
                  v-model="loginForm.password"
                  :placeholder="$t('pwd')"
                  type="password"
                  name="password"
                  prefix-icon="sk-icon-password"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="loading"
                  type="primary"
                  class="sky-login__button"
                  @click.native.prevent="handleLogin"
                  >{{ $t('login.login') }}</el-button
                >
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>

      <div class="sky-login__bottom">
        <div class="sky-login__about">
          <div class="sky-login__about-left">
            <a target="_blank" class="sky-login__about-txt" href="https://ocs.ruijie.com.cn/?p=rcd">{{
              $t('login.online')
            }}</a>
            <span class="sky-login__about-txt">{{ $t('login.hotline') }}</span>
            <span class="sky-login__about-txt">{{ $t('login.rj') }}©2020</span>
          </div>
          <div class="sky-login__about-right" />
        </div>
      </div>
      `
    </div>
  </div>
</template>

<script>
import { Form, Input, Button } from 'element-ui'
import { on, off } from 'sk-ui/lib/utils/util'

export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Input.name]: Input,
    [Button.name]: Button
  },
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loading: false,
      userNameRules: [{ notEmpty: this.$t('login.adminName') }, 'textName', 'textShort'],
      passwordRules: [{ notEmpty: this.$t('pwd') }]
    }
  },
  mounted() {
    this.$store.dispatch('CloseAllNotification')
    on(document, 'keydown', this.handleKeydown)
  },
  beforeDestroy() {
    off(document, 'keydown', this.handleKeydown)
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/dashboard' })
            })
            .catch(e => {
              this.loading = false
              throw e
            })
        }
      })
    },
    handleKeydown(e) {
      const keyCode = e.keyCode
      if (keyCode === 13 && !this.loading) {
        this.handleLogin()
      }
    }
  }
}
</script>
