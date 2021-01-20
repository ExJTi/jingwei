import { TESTCASELIB_GROUP } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: TESTCASELIB_GROUP,
  needFetchFillInfo: false,
  params: null,
  formatData: function(data) {
    if (data.parent && data.parent.id === 'root') {
      data.parent = null
    }
    return data
  },
  view: {
    title: 'testcaseMng.createGroup',
    content: [
      {
        $id: 'groupName',
        $type: 'input',
        label: 'testcaseMng.groupName',
        rules: [
          {
            notEmpty: 'testcaseMng.groupName'
          },
          'textName',
          'textShort',
          {
            checkDuplication: {
              // 异步后端重复性验证
              url: `${TESTCASELIB_GROUP}/checkGroupNameDuplication`,
              duplicateParams: [
                'groupName',
                {
                  dependenceParams: {
                    parent: 'parent.id'
                  },
                  id: null // 编辑用户组时传后端ID标识
                }
              ],
              formatDuplicateParams(duplicateParams) {
                if (duplicateParams.parent === 'root') {
                  duplicateParams.parent = null
                }
                return duplicateParams
              },
              errorMessage: 'testcaseMng.userGroupNameRepetitionExists'
            }
          }
        ]
      }
    ]
  }
}
