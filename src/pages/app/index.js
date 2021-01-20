import '@/assist/permission' // 权限控制
import 'sky-engine/pages/app/index'
import '@/assets/styles/index.scss' // global css
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

// import Vue from 'vue'

// 注册 Controller
// Vue.component('adDomainConfigController', () => import('@/views/adDomain/adMappingConfig/index.js'))
