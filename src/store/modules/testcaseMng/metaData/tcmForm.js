import { CATEGORY_OPTIONS } from './categoryOptions'
import { DPLOY_MODE_OPIONS } from './deployMode'
import { PRIORITY_OPTIONS } from './priorityOptions'
import { SERVER_MODEL_OPTIONS } from './serverModel'
import { TERMINAL_MODEL_OPTIONS } from './terminalModel'
import { TEST_METHOD_OPTIONS } from './testMehodType'
import { SYSTEM_TYPE_OPTIONS } from './vmOsType'

import { TESTCASELIB_TESTCASE } from '@/api/apiModules'
import lang from '@/lang'
export default {
  viewType: 'form',
  module: TESTCASELIB_TESTCASE,
  params: null,
  callBackAction: 'SaveTestCaseCallBack',
  needFetchFillInfo: false,
  view: {
    title: 'testcaseMng.testcaseCreate',
    content: [
      {
        $id: 'caseTemplate',
        $type: 'sky-relation-option',
        label: 'testcaseMng.caseTemplate',
        tip: {
          description: ['tips.description.testcaseMng.caseTemplateDescription']
        },
        actions: {
          nativeOn: {
            click: 'RelationCaseTemplate'
          },
          on: {
            updateValue: 'CaseTepmplateFillBack'
          }
        }
      },
      {
        $id: 'caseNumber',
        $type: 'input',
        label: 'testcaseMng.caseNumber',
        rules: [
          {
            notEmpty: 'testcaseMng.caseNumber'
          },
          'textShort',
          'textName',
          {
            checkDuplication: {
              url: `${TESTCASELIB_TESTCASE}/checkCaseNumberDuplication`,
              duplicateParams: [
                'caseNumber',
                {
                  groupId: null
                }
              ],
              errorMessage: 'testcaseMng.caseNumberRepetitionExists'
            }
          }
        ]
      },
      {
        $id: 'caseTitle',
        $type: 'input',
        label: 'testcaseMng.title',
        rules: [
          {
            notEmpty: 'testcaseMng.caseTitle'
          },
          'textShort',
          'textName'
        ]
      },
      {
        $id: 'caseCategory',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: 'FUNCTIONALITY',
        $options: CATEGORY_OPTIONS,
        label: 'testcaseMng.category'
      },

      {
        $id: 'preconditions',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5
        },
        label: 'testcaseMng.preconditions'
      },
      {
        $id: 'testSteps',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5
        },
        label: 'testcaseMng.testSteps',
        rules: [
          {
            notEmpty: 'testcaseMng.testSteps'
          },
          'textShort',
          'textName'
        ]
      },
      {
        $id: 'expectedOutcomes',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5
        },
        label: 'testcaseMng.expectedOutcomes',
        rules: [
          {
            notEmpty: 'testcaseMng.testSteps'
          }
        ]
      },
      {
        $id: 'priority',
        label: 'testcaseMng.priority',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: '0',
        $options: PRIORITY_OPTIONS,
        rules: [
          {
            notEmpty: 'testcaseMng.testSteps'
          }
        ]
      },
      {
        $id: 'executeMethod',
        label: 'testcaseMng.testMethod',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: 'MANUL',
        $options: TEST_METHOD_OPTIONS,
        rules: [
          {
            notEmpty: 'testcaseMng.testSteps'
          }
        ]
      },
      {
        $id: 'scriptName',
        $type: 'input',
        label: 'testcaseMng.scriptName'
      },
      {
        $id: 'deployMode',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: '与部署模式无关',
        $options: DPLOY_MODE_OPIONS,
        label: 'testcaseMng.deployMode'
      },
      {
        $id: 'vmOs',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: '与系统无关',
        $options: SYSTEM_TYPE_OPTIONS,
        label: 'testcaseMng.vmOs'
      },
      {
        $id: 'terminalModel',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: '与终端无关',
        $options: TERMINAL_MODEL_OPTIONS,
        label: 'testcaseMng.terminalModel'
      },
      {
        $id: 'serverModel',
        $type: 'select',
        $el: {
          disabled: false
        },
        $default: 'NA',
        $options: SERVER_MODEL_OPTIONS,
        label: 'testcaseMng.serverModel'
      },
      {
        $id: 'saveAndContinue',
        $type: 'checkbox',
        $default: true,
        $el: {
          label: lang.t('testcaseMng.saveAndContinue')
        }
      }
    ]
  }
}
