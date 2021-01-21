// import { action } from 'sky-engine/api/index'

// import { TESTCASELIB_GROUP, TESTCASELIB_TESTCASE } from '@/api/apiModules'
export default {
  viewType: 'tree',
  relationId: 'groupId', // 传给右侧关联表格的参数名
  view: {
    trees: {
      deviceRoot: true,
      title: 'testcaseMng.testCaseLib',
      // module: TESTCASELIB_GROUP,
      btns: [],
      treeNodeBtns: [
        {
          command: 'CreateGroup',
          icon: 'el-icon-plus',
          label: 'testcaseMng.createGroup',
          // 如果该分组有下一级分组或者当前分组下没有关联用例则可以创建

          expression: function(data) {
            // data 是该节点数据
            return !data.enableCreate // 返回 true 表示禁用，false 表示启用
          },
          tip: 'tips.operation.testcaseMng.createGroup'
        },
        {
          command: 'EditGroup',
          icon: 'el-icon-edit',
          label: 'edit',
          expression: function(data) {
            // data 是该节点数据
            return data.groupType == 'SYSTEM' // 返回 true 表示禁用，false 表示启用
          },
          tip: 'tips.operation.testcaseMng.editGroup'
        },
        {
          command: 'GroupDelete',
          icon: 'el-icon-delete',
          label: 'delete',
          expression: function(data) {
            return !data.enableDelete
          },
          confirm: {
            msg: 'tips.confirm.testcaseMng.deleteGroup'
          },
          tip: 'tips.operation.testcaseMng.deleteGroup'
        },
        {
          command: 'TemplateImport',
          icon: 'sk-icon-send',
          label: 'testcaseMng.templateImport'
        },
        {
          command: 'TcTemplateExportForGroupLevel',
          icon: 'sk-icon-download',
          label: 'testcaseMng.exportToFile'
        }
      ]
    },
    table: {
      refreshInterval: false,
      // module: TESTCASELIB_TESTCASE,
      relationSearch: true,
      allowStatus: {}
      // cb: function() {
      //   console.log(this)
      //   // 获取组的信息（是否允许创建用例）this.listQuery.exactMatchArr[0].valueArr[0]
      //   console.log(this.listQuery.exactMatchArr[0].valueArr[0])
      //   const groupId = this.listQuery.exactMatchArr[0].valueArr[0]
      //   action(TESTCASELIB_GROUP, 'detail', {
      //     groupId: groupId
      //   }).then(result => {
      //     if (result.data.content.enableAddCase) {
      //       this.toolbar.items[0].props.disabled = false
      //     } else {
      //       this.toolbar.items[0].props.disabled = true
      //     }
      // })
    },
    toolbar: {
      moreBtnWidth: 160,
      searchPlaceholder: 'testcaseMng.searchPlaceholder',
      items: [
        {
          slot: 'refresh-rigtht',
          label: 'testcaseMng.testcaseCreate',
          props: {
            disabled: false,
            type: 'primary',
            icon: 'el-icon-plus'
          },
          expression: function(data) {
            return data.groupType == 'SYSTEM'
          },
          tip: 'tips.operation.testcaseMng.createTestCase',
          action: 'TestCaseCreate'
        }
      ],
      moreBtns: {
        items: [
          {
            icon: 'sk-icon-upload',
            command: 'TcTemplateImport',
            label: 'testcaseMng.templateImport'
          },
          {
            icon: 'sk-icon-download',
            command: 'TcTemplateExport',
            label: 'testcaseMng.templateExport'
          },
          {
            icon: 'sk-icon-download',
            command: 'TcMovingToGroup',
            label: 'testcaseMng.movingToGroup',
            name: 'umMovingToGroup',
            disabled: true,
            tip: 'tips.operation.userManage.movingToGroup'
          },
          {
            icon: 'el-icon-edit',
            label: 'testcaseMng.batchEdit',
            name: 'tcBatchEdit',
            command: 'TestCaseBatchEdit',
            disabled: true,
            tip: 'tips.operation.userManage.editAdUser'
          },
          {
            icon: 'el-icon-delete',
            command: 'UmDeleteUser',
            name: 'umDeleteUser',
            disabled: true,
            label: 'delete',
            tip: 'tips.operation.userManage.deletedMsg',
            confirm: {
              grade: 1,
              msg: 'tips.confirm.userManage.userBatchDeleteMsg'
            }
          }
        ]
      }
    },
    view: {
      columns: [
        {
          props: {
            type: 'selection',
            width: 55
          }
        },
        {
          props: {
            label: 'testcaseMng.caseNumber',
            prop: 'caseNumber',
            sortable: 'custom',
            sortField: 'caseNumber'
          },
          dataType: 'link',
          action: 'ShowTestcaseDetail'
        },
        {
          props: {
            label: 'testcaseMng.groupName',
            prop: 'groupName',
            sortable: 'custom',
            sortField: 'groupName'
          }
        },
        {
          props: {
            label: 'testcaseMng.caseTitle',
            prop: 'caseTitle',
            sortable: 'custom',
            sortField: 'caseTitle'
          }
        },
        {
          props: {
            label: 'testcaseMng.priority',
            prop: 'priority',
            sortable: 'custom',
            sortField: 'priority'
          }
        },
        {
          props: {
            label: 'testcaseMng.label',
            prop: 'label'
          },
          filter: true,
          dataType: 'state'
        },
        {
          props: {
            label: 'testcaseMng.createTime',
            prop: 'createTime',
            sortable: 'custom',
            sortField: 'createTime'
          },
          dataType: 'date'
        }
      ],
      menus: [
        {
          icon: 'el-icon-edit',
          label: 'testcaseMng.edit',
          name: 'tcEdit',
          command: 'TestCaseEdit',
          tip: 'tips.operation.userManage.edit'
        },
        {
          icon: 'sk-icon-reset',
          label: 'testcaseMng.movingToGroup',
          name: 'movingToGroup',
          command: 'UmPasswordReset',
          tip: 'tips.operation.userManage.passwordReset'
        },
        {
          icon: 'sk-icon-reset',
          label: 'testcaseMng.abord',
          name: 'umRecycleBin',
          command: 'UmRecycleBin',
          tip: 'tips.operation.userManage.recover'
        },
        {
          icon: 'el-icon-delete',
          label: 'delete',
          command: 'UmDeleteUser',
          name: 'umDeleteUser',
          tip: 'tips.operation.userManage.delete',
          confirm: {
            grade: 1,
            msg: 'tips.confirm.userManage.userDeleteMsg'
          }
        }
      ]
    }
  }
}
// }
