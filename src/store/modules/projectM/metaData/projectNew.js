import { CATEGORY_OPTIONS } from './categoryOptions'
// import { CATEGORY_USERS } from './Users'
import { CATEGORY_USERS } from './Users'
import { CATEGORY_VERSION } from './version'
// import { PROJECTLIB_PROJECT } from '@/api/apiModules'

export default {
  viewType: 'form',
  // module: PROJECTLIB_PROJECT,
  params: null,
  view: {
    title: 'projectM.projectNew',
    content: [
      {
        $id: 'projectNumber',
        $type: 'input',
        label: 'projectM.projectNumber',
        rules: [
          {
            notEmpty: 'projectM.projectNumber'
          },
          'textShort',
          'textName',
          {
            checkDuplication: {
              // url: `${PROJECTLIB_PROJECT}/checkCaseNumberDuplication`,
              duplicateParams: [
                'name',
                {
                  hostId: null
                }
              ],
              errorMessage: 'hostComputer.tips.rule.nameRepetitionExists'
            }
          }
        ]
      },
      {
        $id: 'title',
        $type: 'input',
        label: 'projectM.title',
        rules: [
          {
            notEmpty: 'projectM.title'
          },
          'textShort',
          'textName',
          {
            checkDuplication: {
              // url: `${PROJECTLIB_PROJECT}/checkCaseNumberDuplication`,
              duplicateParams: [
                'name',
                {
                  hostId: null
                }
              ],
              errorMessage: 'hostComputer.tips.rule.nameRepetitionExists'
            }
          }
        ]
      },
      {
        $id: 'projectLeader',
        $type: 'input',
        $el: {
          disabled: false
        },
        label: 'projectM.projectLeader'
      },
      {
        $id: 'LeaderType',
        $type: 'select',
        $el: {
          disabled: true
        },
        $default: 'PM',
        $options: CATEGORY_USERS,
        label: 'projectM.LeaderType'
      },
      {
        $id: 'category',
        $type: 'select',
        $el: {
          disabled: false
        },
        // $default: '产品类型',
        $options: CATEGORY_OPTIONS,
        label: 'projectM.category'
      },
      {
        $id: 'version',
        $type: 'select',
        $el: {
          disabled: false
        },
        // $default: '基线版本',
        $options: CATEGORY_VERSION,
        label: 'projectM.version'
      },
      {
        $id: 'description',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5
        },
        label: 'projectM.description'
      },
      {
        $id: 'bugrate',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 2
        },
        label: 'projectM.bugrate'
      },
      {
        $id: 'annex',
        $type: 'upload-file',
        label: 'projectM.annex'
        // rules: [
        //   {
        //     notEmpty: {
        //       message: 'sk.form.common_term_file_valid'
        //     }
        //   },
        //   'longLength',
        //   {
        //     fileSize: {
        //       min: 1
        //     }
        //   },
        //   {
        //     suffix: {
        //       includeSuffixes: ['xlsx'],
        //       errorMessage: 'projectM.uploadTemplateSuffix'
        //     }
        //   }
        // ]
      },
      {
        $id: 'time',
        $type: 'date-picker',
        label: 'projectM.projecttime',
        $el: {
          placeholder: 'r',
          type: 'daterange'
        },
        rules: {
          notEmpty: 'projectM.projecttime'
        }
      }
    ]
  }
}
