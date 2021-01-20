// // import { setByPropPath, getParent } from 'sk-ui-sdk/lib/sk-web-framework/lib/utils'
// import { extend } from 'sk-ui/lib/utils/util.js'
import projectdetail from './metaData/projectdetail'
import projectM from './metaData/projectM'
import projectNew from './metaData/projectNew'
// import { action } from 'sky-engine/api/index'
export default {
  // 进入创建项目页面
  Pmnew({ commit }, params) {
    this.dispatch('OpenFullDialog', {
      metaData: projectNew
    })
  },
  CdReset({ commit }, params) {
    this.dispatch('OpenFullDialog', {
      metaData: projectdetail
    })
  },
  BaseRemoveDialog() {
    this.dispatch('OpenFullDialog', {
      metaData: projectM
    })
  }
}
