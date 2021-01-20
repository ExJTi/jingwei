import Element from 'element-ui'

import Cookies from 'js-cookie'

import SkUI, { SkIconStatus, SkIcon, SkWaves, SkDialog, SkButton, SkTable, SkTableToolbar, SkEltable } from 'sk-ui'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'

import 'sk-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.use(SkIconStatus)
Vue.use(SkIcon)
Vue.use(SkWaves)
Vue.use(SkDialog)
Vue.use(SkButton)
Vue.use(SkTable)
Vue.use(SkTableToolbar)
Vue.use(SkEltable)

Vue.use(SkUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
