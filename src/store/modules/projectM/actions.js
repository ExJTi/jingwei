// // import { setByPropPath, getParent } from 'sk-ui-sdk/lib/sk-web-framework/lib/utils'
// import { extend } from 'sk-ui/lib/utils/util.js'
import projectdetail from './metaData/projectdetail'
import projectEdit from './metaData/projectEdit'
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
  BaseRemoveDialog() {
    this.dispatch('OpenFullDialog', {
      metaData: projectM
    })
  },
  // 查看项目详情 ({ commit },params)
  ShowProjectDetail({ commit }, row) {
    const props = {
      params: {
        id: row.id
      },
      'view.tabs[0].viewMetaData.params': {
        hostId: row.id
      },
      'view.tabs[1].viewMetaData.params': {
        hostId: row.id
      }
    }
    this.dispatch('OpenFullDialog', {
      metaData: projectdetail,
      props
    })
    // const props = {
    //   params: {
    //     id: params.rowIds[0]
    //   }
    // }

    // this.dispatch('OpenFullDialog', {
    //   metaData: projectdetail,
    //   props,
    //   clone: false
    // })
  },
  //单个用例编辑
  ProJectEdit({ commit }, params) {
    const props = {
      params: {
        id: params.rowIds[0]
      }
    }

    this.dispatch('OpenFullDialog', {
      metaData: projectEdit,
      props,
      clone: false
    })
  }
}
