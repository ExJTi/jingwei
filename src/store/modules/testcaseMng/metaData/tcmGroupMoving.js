import { TESTCASELIB_TESTCASE } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: TESTCASELIB_TESTCASE,
  okAction: 'modifyCaseGroup',
  formatData: function(data) {
    const _data = {}
    _data.idArr = data.idArr.map(item => {
      return item.id
    })
    _data.groupId = data.groupId.id
    return _data
  },
  view: {
    title: 'testcaseMng.movingToGroup',
    content: [
      {
        $id: 'movingType',
        $type: 'radio-group',
        $default: 'EXTERNAL',
        $options: [
          {
            label: 'testcaseMng.external',
            value: 'EXTERNAL'
          },
          {
            label: 'testcaseMng.inner',
            value: 'INNER'
          }
        ],
        actions: {
          on: {
            change: 'userTypeChange'
          }
        }
      },
      {
        $id: 'idArr',
        $type: 'sky-relation-option',
        label: 'testcaseMng.movingCaseName',
        rules: ['notEmpty'],
        $el: {
          // disabled: true,
          multiple: true
        },
        actions: {
          nativeOn: {
            click: 'RelationCaseTemplateForBatchEdit'
          }
        }
      },
      {
        $id: 'groupId',
        $type: 'sky-relation-option',
        label: 'testcaseMng.targetGroupName',
        $enableWhen: {
          movingType: 'EXTERNAL'
        },
        actions: {
          nativeOn: {
            click: 'TcmRelationTestCaseGroupInMoveToGroup'
          }
        },
        rules: [
          {
            notEmpty: {
              message: 'userManage.userGroupNotEmpty'
            }
          }
        ]
      },
      {
        $id: 'targetPosition',
        $type: 'sky-relation-option',
        label: 'testcaseMng.targetPosition',
        $enableWhen: {
          movingType: 'INNER'
        },
        actions: {
          nativeOn: {
            click: 'TcmRelationTestCaseGroupInMoveToInnerGroup'
          }
        },
        rules: [
          {
            notEmpty: {
              message: 'userManage.userGroupNotEmpty'
            }
          }
        ]
      },
      {
        $id: 'relativePosition',
        $type: 'radio-group',
        $default: 'BEHIND',
        label: '相对位置',
        $options: [
          {
            label: 'testcaseMng.behindOfTarget',
            value: 'BEHIND'
          },
          {
            label: 'testcaseMng.frontOfTarget',
            value: 'FRONT'
          }
        ]
      }
    ]
  }
}
