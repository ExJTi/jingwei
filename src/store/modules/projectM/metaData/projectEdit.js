// import { CATEGORY_OPTIONS } from './categoryOptions'
// import { CATEGORY_USERS } from './Users'
// import { CATEGORY_USERS } from './Users'
import { CATEGORY_VERSION } from './version'

import { PROJECTLIB_PROJECT } from '@/api/apiModules'

export default {
  viewType: 'form',
  module: PROJECTLIB_PROJECT,
  params: null,
  view: {
    title: 'projectM.projectEdit',
    content: [
      {
        $id: 'title',
        $type: 'input',
        label: 'projectM.title',
        $default: 'projectM.title',
        $el: {
          disabled: true
        }
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
        $id: 'bugrate',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 2
        },
        label: 'projectM.bugrate'
      },
      {
        $id: 'projectLeader',
        $type: 'input',
        $el: {
          disabled: true
        },
        label: 'projectM.projectLeader'
      },
      {
        $id: 'LeaderType',
        $type: 'select',
        $el: {
          disabled: true
        },
        $default: 'projectM.LeaderType',
        label: 'projectM.LeaderType'
      },
      {
        $id: 'description',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5,
          disabled: true
        },
        label: 'projectM.description'
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
          type: 'daterange'
          // start-placeholder: '1',
          // end-placeholder: '2'
        },
        rules: {
          notEmpty: 'projectM.projecttime'
        }
      }
    ]
  }
}
