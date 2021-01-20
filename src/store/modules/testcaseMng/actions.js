// // import { setByPropPath, getParent } from 'sk-ui-sdk/lib/sk-web-framework/lib/utils'
// import { extend } from 'sk-ui/lib/utils/util.js'

// // import { action } from 'sky-engine/api/index'

// import exportToFile from './metaData/exportToFile'
// import groupForm from './metaData/groupForm'
// import importTemplate from './metaData/importTemplate'
// import relationCl from './metaData/relationCl'
// import relationClOfEdit from './metaData/relationClOfEdit'
// import relationGt from './metaData/relationGt'
// import tcmDetail from './metaData/tcmDetail'
// import tcmForm from './metaData/tcmForm'

// import tcmFormForBatchEdit from './metaData/tcmFormForBatchEdit'
// import tcmFormForEdit from './metaData/tcmFormForEdit'
// import tcmMovingToGroup from './metaData/tcmGroupMoving'

// // import { TESTCASELIB_TESTCASE } from '@/api/apiModules'

// export default {
//   //创建分组
//   CreateGroup({ commit }, params) {
//     console.log('createGroup' + params)
//     const groupFormCopy = extend(true, {}, groupForm)
//     groupFormCopy.params = {
//       parentId: params.rowId
//     }
//     this.dispatch('OpenFullDialog', {
//       metaData: groupFormCopy,
//       clone: false
//     })
//   },
//   // 编辑分组
//   EditGroup({ commit }, params) {
//     const props = {
//       // 给后端接口create、edit、detail接口传递参数
//       params: {
//         id: params.rowIds[0]
//       },
//       title: 'testcaseMng.editGroup',
//       groupName: params.rows[0].label
//     }
//     const groupFormCopy = extend(true, {}, groupForm)
//     // 给校验接口传递参数
//     // setByPropPath(groupFormCopy, 'view.content[0].rules[3].checkDuplication.duplicateParams[1].id', params.rowIds[0])
//     // this.dispatch('OpenFullDialog', {
//     //   metaData: groupFormCopy,
//     //   props,
//     //   clone: false
//     // })
//   },
//   // 删除分组
//   DeleteGroup({ commit }, params) {},

//   // 进入列表页面
//   ShowTestCaseList({ commit }, params) {
//     console.log(params)
//   },
//   // 进入创建用例页面
//   TestCaseCreate({ commit }, params) {
//     console.log('testCaseCreate')
//     console.log(params)
//     const tree = getParent.call(params.viewController, 'SkyTreeController').$refs['treeRef'].$refs['tree']
//     const checkedData = tree.getCurrentNode()
//     console.log(checkedData.id)
//     const props = {
//       groupId: checkedData.id,
//       params: {
//         groupId: checkedData.id
//       }
//     }
//     const tcmFormCopy = extend(true, {}, tcmForm)
//     this.dispatch('OpenFullDialog', {
//       metaData: tcmFormCopy,
//       props,
//       clone: false
//     })
//   },
//   SaveTestCaseCallBack({ commit }, params) {
//     console.log(params)
//     if (!params) {
//       return
//     }
//     const { rowIds = [], rows = [], requestDatas = {} } = params
//     const open = rowIds[0] || requestDatas.saveAndContinue
//     if (open) {
//       //打开新建页面
//       const caseNumber = (rows[0] && rows[0].caseNumber) || requestDatas.caseNumber
//       const title = (rows[0] && rows[0].title) || requestDatas.title
//       const preconditions = (rows[0] && rows[0].preconditions) || requestDatas.preconditions
//       // 能全部会填吗
//       const props = {
//         'view.content[0].$default': { id: '1', label: caseNumber },
//         title: title,
//         preconditions: preconditions
//       }

//       const tcmFormCopy = extend(true, {}, tcmForm)
//       this._vm.$nextTick(() => {
//         this.dispatch('OpenFullDialog', {
//           metaData: tcmFormCopy,
//           props,
//           clone: false
//         })
//       })
//     }
//   },

//   // 创建用例关联的模板
//   RelationCaseTemplate({ commit }, props) {
//     // 传递分组ID（从创建页面获取）和如果已经有值的话，则回填
//     // props.params = {
//     //   groupId: props.params.groupId
//     // }
//     this.dispatch('OpenRelationDialog', {
//       metaData: relationCl,
//       props,
//       clone: false
//     })
//   },
//   // 选择模板回填
//   CaseTepmplateFillBack({ commit }, { rootView, value }) {
//     // console.log(rootView)
//     // console.log(value)
//     // console.log('hello')
//     // // 回传的是什么值？如果信息不够，通过ajax查询详细信息，然后在赋值给其他字段
//     // const caseNum = {
//     //   caseNum: value.row.caseNumber
//     // }
//     // action(TESTCASELIB_TESTCASE, 'detail', {
//     //   caseNum
//     // }).then(result => {
//     //   console.log(result)
//     //   rootView.updateFormData(result.data.content)
//     // })
//     const data = {
//       caseNumber: '用例编号66666666',
//       caseTitle: '用例标题',
//       category: 'functionality',
//       createTime: '创建时间',
//       label: '标签',
//       preconditions: '前置i套件',
//       priority: '3',
//       serverModel: 'WIN_XP_SP3',
//       terminalModel: 'RG-CT5530S(256)',
//       testSteps: '12321'
//     }
//     rootView.updateFormData(data)
//   },
//   //单个用例编辑
//   TestCaseEdit({ commit }, params) {
//     const props = {
//       title: 'testcaseMng.testcaseEdit',
//       params: {
//         id: params.rowIds[0]
//       }
//     }

//     this.dispatch('OpenFullDialog', {
//       metaData: tcmFormForEdit,
//       props,
//       clone: false
//     })
//   },
//   //批量编辑用例
//   TestCaseBatchEdit({ commit }, params) {
//     console.log(params)
//     const { rowIds = [], rows = [], requestDatas = {} } = params
//     let caseNumArr = []
//     for (let index = 0; index < rowIds.length; index++) {
//       caseNumArr.push({ id: rowIds[index], label: rows[index].caseNumber })
//     }
//     const props = {
//       'view.content[0].$default': caseNumArr,
//       title: 'testcaseMng.testcaseEdit',
//       params: {
//         id: rowIds[0]
//       }
//     }

//     this.dispatch('OpenFullDialog', {
//       metaData: tcmFormForBatchEdit,
//       props,
//       clone: false
//     })
//   },
//   // 创建用例关联的模板
//   RelationCaseTemplateForBatchEdit({ commit }, props) {
//     // 传递分组ID（从创建页面获取）和如果已经有值的话，则回填
//     // props.params = {
//     //   groupId: props.params.groupId
//     // }

//     this.dispatch('OpenRelationDialog', {
//       metaData: relationClOfEdit,
//       props,
//       clone: false
//     })
//   },
//   CaseForBatchEditFillBack({ commit }, props) {},

//   TcMovingToGroup({ commit }, params) {
//     console.log(params)
//     const { rowIds = [], rows = [], requestDatas = {} } = params
//     let caseNumArr = []
//     for (let index = 0; index < rowIds.length; index++) {
//       caseNumArr.push({ id: rowIds[index], label: rows[index].caseNumber })
//     }
//     console.log('caseNumArr', caseNumArr)
//     const props = {
//       'view.content[1].$default': caseNumArr,
//       title: 'testcaseMng.testcaseEdit',
//       params: {
//         id: rowIds[0]
//       }
//     }
//     this.dispatch('OpenFullDialog', {
//       metaData: tcmMovingToGroup,
//       props,
//       clone: false
//     })
//   },
//   //
//   TcmRelationTestCaseGroupInMoveToGroup({ commit }, props) {
//     this.dispatch('OpenRelationDialog', {
//       metaData: relationGt,
//       props,
//       clone: false
//     })
//   },
//   //
//   TcmRelationTestCaseGroupInMoveToInnerGroup({ commit }, props) {
//     this.dispatch('OpenRelationDialog', {
//       metaData: relationCl,
//       props,
//       clone: false
//     })
//   },
//   // 查看用例详情
//   ShowTestcaseDetail({ commit }, row) {
//     const props = {
//       params: {
//         id: row.id
//       },
//       'view.tabs[0].viewMetaData.params': {
//         hostId: row.id
//       },
//       'view.tabs[1].viewMetaData.params': {
//         hostId: row.id
//       }
//     }
//     this.dispatch('OpenFullDialog', {
//       metaData: tcmDetail,
//       props
//     })
//   },
//   TcTemplateImport({ commit }, params) {
//     this.dispatch('OpenFullDialog', {
//       metaData: importTemplate
//     })
//   },
//   TcTemplateExport({ commit }, params) {
//     // 传递用例列表 or 组
//     debugger
//     console.log(params)
//     const { rowIds = [], rows = [] } = params
//     let caseNumArr = []
//     for (let index = 0; index < rowIds.length; index++) {
//       caseNumArr.push({ id: rowIds[index], label: rows[index].caseNumber })
//     }
//     const exportToFileCopy = extend(true, {}, exportToFile)
//     // 移除第2个item
//     exportToFileCopy.view.content.splice(1, 1)
//     const props = {
//       'view.content[0].$default': caseNumArr
//     }

//     this.dispatch('OpenFullDialog', {
//       metaData: exportToFileCopy,
//       props,
//       clone: false
//     })
//   },
//   TcTemplateExportForGroupLevel({ commit }, params) {
//     // 传递用例列表 or 组
//     debugger
//     console.log(params)
//     const { rowIds = [], rows = [] } = params
//     const groupName = rows[0].label
//     const exportToFileCopy = extend(true, {}, exportToFile)
//     // 移除第一个item
//     exportToFileCopy.view.content.splice(0, 1)
//     const props = {
//       'view.content[0].$default': groupName
//     }

//     this.dispatch('OpenFullDialog', {
//       metaData: exportToFileCopy,
//       props,
//       clone: false
//     })
//   }
// }
