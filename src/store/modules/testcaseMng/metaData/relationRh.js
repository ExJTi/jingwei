export default {
  refreshInterval: 3000,
  viewType: 'table',
  module: 'testcaseMng/runHistory',
  relationSearch: true,
  params: {
    isDelete: false
  },
  allowStatus: {
    stop: {
      desktopState: ['RUNNING']
    },
    delete: {
      desktopState: ['CLOSE']
    },
    revert: {
      desktopState: ['CLOSE'],
      desktopType: ['PERSONAL', 'APP_LAYER']
    },
    remote: {
      desktopState: ['RUNNING']
    },
    editStrategy: {
      desktopState: ['CLOSE'],
      userType: ['NORMAL', 'AD']
    },
    editNetwork: {
      desktopState: ['CLOSE'],
      userType: ['NORMAL', 'AD']
    },
    errorRecover: {
      desktopState: ['ERROR']
    }
  },
  toolbar: {
    searchPlaceholder: 'cloudDesktopManage.search',
    moreBtnWidth: 160,
    searchWidth: 350,
    items: [
      {
        slot: 'refresh-rigtht',
        label: 'cloudDesktopManage.stop',
        name: 'stop',
        props: {
          disabled: true,
          icon: 'sk-icon-power'
        },
        action: 'CdStop',
        tip: 'tips.operation.cloudDesktopManage.stop',
        confirm: {
          msg: 'tips.confirm.cloudDesktopManage.batchStopMsg'
        }
      }
    ],
    moreBtns: {
      items: [
        {
          icon: 'sk-icon-refresh',
          label: 'cloudDesktopManage.revert',
          name: 'revert',
          command: 'CdReset',
          disabled: true,
          tip: 'tips.operation.cloudDesktopManage.revert',
          confirm: {
            grade: 1,
            msg: 'tips.confirm.cloudDesktopManage.batchRevertMsg'
          }
        },
        {
          command: 'CdEditStrategy',
          label: 'strategy.editCloudDesktop',
          disabled: true,
          name: 'editStrategy',
          tip: 'tips.operation.cloudDesktopManage.editStrategy',
          icon: 'el-icon-edit'
        },
        {
          command: 'CdEditNetwork',
          label: 'strategy.editNetwork',
          disabled: true,
          name: 'editNetwork',
          tip: 'tips.operation.cloudDesktopManage.editStrategy',
          icon: 'el-icon-edit'
        },
        {
          command: 'CdErrorRecover',
          label: 'strategy.errorRecover',
          disabled: true,
          icon: 'sk-icon-reset',
          tip: 'tips.operation.cloudDesktopManage.errorRecover',
          name: 'errorRecover'
        },
        {
          command: 'CdDelete',
          label: 'cloudDesktopManage.delete',
          disabled: true,
          name: 'delete',
          tip: 'tips.operation.cloudDesktopManage.close',
          icon: 'el-icon-delete',
          confirm: {
            grade: 1,
            msg: 'tips.confirm.cloudDesktopManage.batchDeleteMsg',
            subMsg: 'tips.confirm.cloudDesktopManage.deleteSubMsg'
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
          width: 55
        }
      },
      {
        props: {
          label: 'testcaseMng.projectName', // 显示的标题
          prop: 'desktopName', // 对应列内容的字段名
          sortable: 'custom', // 后端排序，需要配置成自定以排序字段,
          sortField: 'desktopName' // 后端排序字段
        },
        dataType: 'link',
        action: 'CdShowCloudDesktopDetail'
      },
      {
        props: {
          label: 'testcaseMng.result',
          prop: 'userName'
        }
      },

      {
        props: {
          label: 'testcaseMng.createTime',
          prop: 'latestLoginTime',
          sortable: 'custom',
          sortField: 'latestLoginTime'
        },
        dataType: 'date'
      }
    ],
    menus: [
      {
        icon: 'sk-icon-power',
        label: 'cloudDesktopManage.stop',
        name: 'stop',
        command: 'CdStop',
        disabled: true,
        tip: 'tips.operation.cloudDesktopManage.stop',
        confirm: {
          msg: 'tips.confirm.cloudDesktopManage.stopMsg'
        }
      },
      {
        icon: 'sk-icon-remote',
        label: 'cloudDesktopManage.remote',
        tip: 'tips.operation.cloudDesktopManage.remote',
        name: 'remote',
        command: 'CdOrigin'
      },
      {
        icon: 'sk-icon-refresh',
        label: 'cloudDesktopManage.revert',
        name: 'revert',
        command: 'CdReset',
        tip: 'tips.operation.cloudDesktopManage.revert',
        confirm: {
          grade: 1,
          msg: 'tips.confirm.cloudDesktopManage.revertMsg'
        }
      },
      {
        command: 'CdEditStrategy',
        label: 'strategy.editCloudDesktop',
        icon: 'el-icon-edit',
        tip: 'tips.operation.cloudDesktopManage.editStrategy',
        name: 'editStrategy'
      },
      {
        command: 'CdEditNetwork',
        label: 'strategy.editNetwork',
        icon: 'el-icon-edit',
        tip: 'tips.operation.cloudDesktopManage.editStrategy',
        name: 'editNetwork'
      },
      {
        command: 'CdErrorRecover',
        label: 'strategy.errorRecover',
        icon: 'sk-icon-reset',
        tip: 'tips.operation.cloudDesktopManage.errorRecover',
        name: 'errorRecover'
      },
      {
        command: 'CdDelete',
        label: 'cloudDesktopManage.delete',
        disabled: true,
        name: 'delete',
        tip: 'tips.operation.cloudDesktopManage.close',
        confirm: {
          grade: 1,
          msg: 'tips.confirm.cloudDesktopManage.deleteMsg',
          subMsg: 'tips.confirm.cloudDesktopManage.deleteSubMsg'
        },
        icon: 'el-icon-delete'
      }
    ]
  }
}
