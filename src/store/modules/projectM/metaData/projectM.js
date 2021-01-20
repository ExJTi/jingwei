import { action } from 'sky-engine/api/index'

import { PROJECTLIB_GROUP, PROJECTLIB_PROJECT } from '@/api/apiModules'
export default {
  viewType: 'tree',
  relationId: 'groupId', // 传给右侧关联表格的参数名
  view: {
    trees: {
      deviceRoot: true,
      title: 'projectM.projectLib',
      module: PROJECTLIB_GROUP,
      btns: [],
      treeNodeBtns: [
        {
          command: 'CreateGroup',
          icon: 'el-icon-plus',
          label: 'projectM.createGroup',
          // 如果该分组有下一级分组或者当前分组下没有关联用例则可以创建

          expression: function(data) {
            // data 是该节点数据
            return !data.enableCreate // 返回 true 表示禁用，false 表示启用
          },
          tip: 'tips.operation.projectM.createGroup'
        },
        {
          command: 'EditGroup',
          icon: 'el-icon-edit',
          label: 'edit',
          expression: function(data) {
            // data 是该节点数据
            return data.groupType == 'SYSTEM' // 返回 true 表示禁用，false 表示启用
          },
          tip: 'tips.operation.projectM.editGroup'
        },
        {
          command: 'GroupDelete',
          icon: 'el-icon-delete',
          label: 'delete',
          expression: function(data) {
            return !data.enableDelete
          },
          confirm: {
            msg: 'tips.confirm.projectM.deleteGroup'
          },
          tip: 'tips.operation.projectM.deleteGroup'
        }
      ]
    },
    table: {
      refreshInterval: false,
      module: PROJECTLIB_PROJECT,
      relationSearch: true,
      cb: function() {
        console.log(this)
        // 获取组的信息（是否允许创建）this.listQuery.exactMatchArr[0].valueArr[0]
        console.log(this.listQuery.exactMatchArr[0].valueArr[0])
        const groupId = this.listQuery.exactMatchArr[0].valueArr[0]
        action(PROJECTLIB_GROUP, 'detail', {
          groupId: groupId
        }).then(result => {
          if (result.data.content.enableAddCase) {
            this.toolbar.items[0].props.disabled = false
          } else {
            this.toolbar.items[0].props.disabled = true
          }
        })
      },
      allowStatus: {
        new: { desktopState: ['RUNNING'] },
        stop: { desktopState: ['RUNNING'] },
        delete: { desktopState: ['CLOSE'] },
        revert: { desktopState: ['CLOSE'], desktopType: ['PERSONAL', 'APP_LAYER'] },
        remote: { desktopState: ['RUNNING'] },
        editStrategy: { desktopState: ['CLOSE'], userType: ['NORMAL', 'AD'] },
        editNetwork: { desktopState: ['CLOSE'], userType: ['NORMAL', 'AD'] },
        errorRecover: { desktopState: ['ERROR'] }
      },
      toolbar: {
        searchPlaceholder: 'projectM.search',
        moreBtnWidth: 160,
        searchWidth: 350,
        items: [
          {
            slot: 'refresh-rigtht',
            label: 'projectM.new',
            name: 'new',
            props: {
              icon: 'sk-icon-add'
            },
            // action: 'Pmnew',
            command: 'Pmnew'
            // tip: 'tips.operation.projectM.new',
            // confirm: {
            //   msg: 'tips.confirm.projectM.batchnewMsg'
            // }
          }
        ],
        moreBtns: {
          items: [
            {
              icon: 'sk-icon-refresh',
              label: 'projectM.revert',
              name: 'revert',
              command: 'CdReset'
              // disabled: true,
              //   tip: 'tips.operation.projectM.revert',
              // confirm: {
              //   grade: 1,
              //   msg: 'tips.confirm.projectM.batchRevertMsg'
              // }
            },
            // {
            //   command: 'CdErrorRecover',
            //   label: 'strategy.errorRecover',
            //   disabled: true,
            //   icon: 'sk-icon-reset',
            //   tip: 'tips.operation.projectM.errorRecover',
            //   name: 'errorRecover'
            // },
            {
              command: 'CdDelete',
              label: 'projectM.delete',
              disabled: true,
              name: 'delete',
              //   tip: 'tips.operation.projectM.close',
              icon: 'el-icon-delete',
              confirm: {
                grade: 1,
                msg: 'tips.confirm.projectM.batchDeleteMsg',
                subMsg: 'tips.confirm.projectM.deleteSubMsg'
              }
            }
          ]
        }
      },
      view: {
        columns: [
          {
            props: {
              type: 'selection', // 包括 selection、radio、index等类型
              width: 50
            }
          },
          {
            props: {
              label: 'projectM.projectNumber', // 显示的标题
              prop: 'projectNumber', // 对应列内容的字段名
              sortable: 'custom', // 后端排序，需要配置成自定以排序字段,
              sortField: 'projectNumber', // 后端排序字段
              width: 130
            },
            dataType: 'link'
          },
          {
            props: {
              label: 'projectM.title', // 显示的标题
              prop: 'title', // 对应列内容的字段名
              sortable: 'custom', // 后端排序，需要配置成自定以排序字段,
              sortField: 'title', // 后端排序字段
              width: 130
            },
            dataType: 'link',
            action: 'CdShowCloudDesktopDetail'
          },
          {
            props: {
              label: 'projectM.projectLeader',
              prop: 'projectLeader',
              width: 120
            }
          },
          {
            props: {
              label: 'projectM.LeaderType',
              prop: 'LeaderType',
              width: 120
            },
            dataType: 'enum'
          },
          {
            props: {
              label: 'projectM.projectState',
              prop: 'projectState',
              width: 130
            },
            dataType: 'state',
            dictionaryPath: 'projectState.normal',
            filter: true
          },
          {
            props: {
              label: 'projectM.projectprogress',
              width: 230,
              resizable: false
            },
            dataType: 'projectprogress'
          },
          {
            props: {
              label: 'projectM.productType',
              prop: 'productType',
              width: 110
            },
            dataType: 'enum',
            filter: true
          },
          {
            props: {
              label: 'projectM.projecttime',
              prop: 'projectstarttime',
              sortable: 'custom',
              sortField: 'projecttime',
              width: 130
            }
          },
          {
            props: {
              label: 'projectM.timeprogress',
              prop: 'timeprogress',
              sortable: 'custom',
              sortField: 'timeprogress',
              width: 130
            },
            dataType: 'date'
          }
        ],
        menus: [
          {
            icon: 'sk-icon-power',
            label: 'projectM.stop',
            name: 'stop',
            command: 'CdStop',
            disabled: true,
            tip: 'tips.operation.projectM.stop',
            confirm: {
              msg: 'tips.confirm.projectM.stopMsg'
            }
          },
          {
            icon: 'sk-icon-remote',
            label: 'projectM.remote',
            // tip: 'tips.operation.projectM.remote',
            name: 'remote',
            command: 'CdOrigin'
          },
          {
            icon: 'sk-icon-refresh',
            label: 'projectM.revert',
            name: 'revert',
            command: 'CdReset'
            // tip: 'tips.operation.projectM.revert',
            // confirm: {
            //   grade: 1,
            //   msg: 'tips.confirm.projectM.revertMsg'
            // }
          },
          {
            command: 'CdEditStrategy',
            label: 'strategy.editCloudDesktop',
            icon: 'el-icon-edit',
            // tip: 'tips.operation.projectM.editStrategy',
            name: 'editStrategy'
          },
          {
            command: 'CdEditNetwork',
            label: 'strategy.editNetwork',
            icon: 'el-icon-edit',
            // tip: 'tips.operation.projectM.editStrategy',
            name: 'editNetwork'
          },
          {
            command: 'CdErrorRecover',
            label: 'strategy.errorRecover',
            icon: 'sk-icon-reset',
            // tip: 'tips.operation.projectM.errorRecover',
            name: 'errorRecover'
          },
          {
            command: 'CdDelete',
            label: 'projectM.delete',
            disabled: true,
            name: 'delete',
            // tip: 'tips.operation.projectM.close',
            // confirm: {
            //   grade: 1,
            //   msg: 'tips.confirm.projectM.deleteMsg',
            //   subMsg: 'tips.confirm.projectM.deleteSubMsg'
            // },
            icon: 'el-icon-delete'
          }
        ]
      }
    }
  }
}
