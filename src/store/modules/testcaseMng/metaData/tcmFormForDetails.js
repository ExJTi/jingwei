export default {
  viewType: 'form',
  module: 'testcaseMng/testCaseLib/testcase',
  params: null,
  view: {
    // title: 'testcaseMng.testcaseCreate',
    content: [
      // {
      //   $id: 'caseNumber',
      //   $type: 'input',
      //   label: 'testcaseMng.caseNumber',
      //   rules: [{
      //     'notEmpty': 'testcaseMng.caseNumber'
      //   }, 'textShort', 'textName', {
      //     checkDuplication: {
      //       url: `tang/configurationWizard/host/checkHostNameDuplication`,
      //       duplicateParams: ['name', {
      //         hostId: null
      //       }],
      //       errorMessage: 'hostComputer.tips.rule.nameRepetitionExists'
      //     }
      //   }]
      // },
      // {
      //   $id: 'title',
      //   $type: 'input',
      //   label: 'testcaseMng.title'
      // },
      // {
      //   $id: 'category',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '功能测试',
      //   $options: DPLOY_MODE_OPIONS,
      //   label: 'testcaseMng.category'
      // },

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
        label: 'testcaseMng.testSteps'
      },
      {
        $id: 'expectedOutcomes',
        $type: 'input',
        $el: {
          type: 'textarea',
          rows: 5,
          readonly: true
        },
        label: 'testcaseMng.expectedOutcomes'
      }
      // {
      //   $id: 'priority',
      //   label: 'testcaseMng.priority',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '0级',
      //   $options: PRIORITY_OPTIONS,
      // },
      // {
      //   $id: 'testMethod',
      //   label: 'testcaseMng.testMethod',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '手工',
      //   $options: TEST_METHOD_OPTIONS,
      // },
      // {
      //   $id: 'scriptName',
      //   $type: 'input',
      //   label: 'testcaseMng.scriptName'
      // },
      // {
      //   $id: 'deployMode',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '与部署模式无关',
      //   $options: DPLOY_MODE_OPIONS,
      //   label: 'testcaseMng.deployMode'
      // },
      // {
      //   $id: 'vmOs',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '与系统无关',
      //   $options: SYSTEM_TYPE_OPTIONS,
      //   label: 'testcaseMng.vmOs'
      // },
      // {
      //   $id: 'terminalModel',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '与终端无关',
      //   $options: TERMINAL_MODEL_OPTIONS,
      //   label: 'testcaseMng.terminalModel'
      // },
      // {
      //   $id: 'serverModel',
      //   $type: 'select',
      //   $el: {
      //     disabled: false
      //   },
      //   $default: '与服务器类型无关',
      //   $options: SERVER_MODEL_OPTIONS,
      //   label: 'testcaseMng.serverModel'
      // }
    ]
  }
}
