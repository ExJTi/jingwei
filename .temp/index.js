 
import Vue from 'vue'
import '@/pages/app/index.js'

const requireComponent = require.context('@/components', true, /[a-z0-9]+.(jsx?|vue)$/i)
requireComponent.keys().forEach(fileName => {
  if (fileName.lastIndexOf('/') === 1) {
    const componentConfig = requireComponent(fileName)
    Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
  }
})
