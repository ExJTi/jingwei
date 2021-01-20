export default {
  viewType: 'tree',
  relationId: 'groupId', // 传给右侧关联表格的参数名
  view: {
    trees: {
      title: 'form.common_user_group',
      module: 'testcaseMng/testcaseLib',
      btns: [
        {
          command: 'TestCaseGroupCreate',
          icon: 'el-icon-plus',
          label: 'testcaseMng.userGroupTitleCreate'
        },
        {
          command: 'autoRefresh',
          icon: 'el-icon-refresh',
          label: 'refresh'
        }
      ],
      treeNodeBtns: [
        {
          command: 'UmTreeGroupCreate',
          icon: 'el-icon-plus',
          label: 'userManage.userGroupTitleCreate',
          expression: function(data) {
            // data 是该节点数据
            return data.enableAd // 返回 true 表示禁用，false 表示启用
          },
          tip: 'tips.operation.userManage.treeCreate'
        },
        {
          command: 'UmTreeGroupEdit',
          icon: 'el-icon-edit',
          label: 'edit'
        },
        {
          command: 'UmEditAdUserGroupAuthority',
          icon: 'el-icon-edit',
          label: 'userManage.adUserGroupEditTitle',
          expression: function(data) {
            return !data.enableAd
          },
          tip: 'tips.operation.userManage.editAdUserGroup'
        },
        {
          command: 'UmTreeGroupDeleOfGroup',
          icon: 'el-icon-delete',
          label: 'delete',
          expression: function(data) {
            return !data.allowDelete
          },
          tip: 'tips.operation.userManage.treeDelete'
        },
        {
          command: 'UmTreeGroupMessageSending',
          icon: 'sk-icon-send',
          label: 'message.messageSending'
        },
        {
          command: 'UmTreeGroupApplyDesktopConfig',
          icon: 'sk-icon-share',
          confirm: {
            msg: 'tips.confirm.userManage.applyDesktopConfigMsg'
          },
          label: 'userManage.applyDesktopConfig'
        }
      ]
    },
    table: {
      refreshInterval: false,
      module: 'testcaseMng/testcaseLib/testcase',
      relationSearch: true,
      allowStatus: {
        umMessageSending: {
          userName: 'any'
        },
        umMovingToGroup: {
          userName: 'any',
          userType: ['NORMAL', 'VISITOR']
        },
        umDeleteUser: {
          expression: function(row) {
            return (
              row.canDelete === true &&
              (row.userType === 'VISITOR' ||
                row.userType === 'NORMAL' ||
                (row.userType === 'AD' && row.userState === 'DISABLE'))
            )
          }
        },
        umEdit: {
          userType: ['NORMAL', 'VISITOR']
        },
        umPasswordReset: {
          userType: ['NORMAL']
        },
        umRecycleBin: {
          expression: function(row) {
            return (
              row.hasRecycleBin === true &&
              ((row.userType === 'VISITOR' && row.desktopNum < 10) ||
                ((row.userType === 'NORMAL' || row.userType === 'AD') && row.desktopNum < 3))
            )
          }
        },
        umDesktopAdd: {
          expression: function(row) {
            return (
              (row.userType === 'VISITOR' && row.desktopNum < 10) ||
              ((row.userType === 'NORMAL' || row.userType === 'AD') && row.desktopNum < 3)
            )
          }
        },
        umEditAdUserAuthority: {
          expression: function(row) {
            return row.userType === 'AD'
          }
        }
      },

      toolbar: {
        moreBtnWidth: 160,
        searchPlaceholder: 'userManage.searchPlaceholder',
        items: [
          {
            slot: 'refresh-rigtht',
            label: 'userManage.userCreateTitle',
            props: {
              type: 'primary',
              icon: 'el-icon-plus'
            },
            action: 'UmCreateUser'
          }
        ],
        moreBtns: {
          items: [
            {
              icon: 'el-icon-time',
              command: 'UmMessageLog',
              name: 'messageLog',
              label: 'message.messageLog'
            },
            {
              icon: 'sk-icon-reset',
              label: 'passwordReset',
              command: 'UmPasswordReset',
              name: 'umPasswordReset',
              disabled: true,
              tip: 'tips.operation.userManage.passwordReset'
            },
            {
              icon: 'sk-icon-upload',
              command: 'UmTemplateImportOfGroup',
              label: 'fileImport.templateImport'
            },
            {
              icon: 'sk-icon-download',
              command: 'UmTemplateDownload',
              label: 'userManage.templateDownload'
            },
            {
              icon: 'el-icon-edit',
              command: 'UmMovingToGroup',
              label: 'userManage.movingToGroup',
              name: 'umMovingToGroup',
              disabled: true,
              tip: 'tips.operation.userManage.movingToGroup'
            },
            {
              icon: 'el-icon-edit',
              label: 'userManage.adUserEditTitle',
              name: 'umEditAdUserAuthority',
              command: 'UmEditAdUserAuthority',
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
            icon: 'sk-icon-send',
            label: 'message.messageSending',
            command: 'UmMessageSending'
          },
          {
            icon: 'sk-icon-reset',
            label: 'passwordReset',
            name: 'umPasswordReset',
            command: 'UmPasswordReset',
            tip: 'tips.operation.userManage.passwordReset'
          },
          {
            icon: 'el-icon-edit',
            label: 'userManage.userEditTitle',
            name: 'umEdit',
            command: 'UmEdit',
            tip: 'tips.operation.userManage.edit'
          },
          {
            icon: 'el-icon-edit',
            label: 'userManage.adUserEditTitle',
            name: 'umEditAdUserAuthority',
            command: 'UmEditAdUserAuthority',
            tip: 'tips.operation.userManage.editAdUser'
          },
          {
            icon: 'el-icon-plus',
            label: 'userManage.cloudDesktopAdd',
            name: 'umDesktopAdd',
            command: 'UmDesktopAdd',
            tip: 'tips.operation.userManage.desktopAdd'
          },
          {
            icon: 'sk-icon-reset',
            label: 'userManage.recycleBin',
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
}
