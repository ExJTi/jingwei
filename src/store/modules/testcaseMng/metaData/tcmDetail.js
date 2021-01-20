import { TESTCASELIB_TESTCASE } from '@/api/apiModules'

export default {
  viewType: 'detail',
  toolbar: {
    hasRefresh: true,
    items: [
      {
        slot: 'left',
        label: 'sk.back',
        action: 'BaseRemoveDialog'
      }
    ]
  },
  view: {
    description: {
      label: 'testcaseMng.baseInfo',
      viewMetaData: {
        viewType: 'form',
        params: null,
        module: TESTCASELIB_TESTCASE,
        view: {
          labelWidth: '110px',
          content: [
            {
              $type: 'group',
              $id: 'base',
              title: 'overview',
              $items: [
                {
                  label: 'testcaseMng.caseNumber',
                  $id: 'caseNumber'
                },
                {
                  $id: 'ip',
                  label: 'testcaseMng.title'
                },
                {
                  $id: 'connectState',
                  label: 'testcaseMng.priority',
                  dataType: 'state'
                },
                {
                  $id: 'authState',
                  label: 'testcaseMng.category',
                  dataType: 'state'
                },
                // 暂未使用，先注释
                {
                  label: 'testcaseMng.testMethod',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.scriptName',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  $id: 'createTime',
                  label: 'createTime',
                  dataType: 'date'
                },
                {
                  $id: 'enableRootLogin',
                  label: 'testcaseMng.label',
                  dataType: 'enum'
                },
                {
                  $id: 'enableReverseShell',
                  label: 'testcaseMng.author',
                  dataType: 'enum'
                },
                {
                  $id: 'description',
                  label: 'testcaseMng.updateTime'
                },
                {
                  label: 'testcaseMng.vmOs',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.deployMode',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.terminalModel',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.serverModel',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.firstImportVersion',
                  $id: 'manageState',
                  dataType: 'state'
                },
                {
                  label: 'testcaseMng.requirementName',
                  $id: 'manageState',
                  dataType: 'state'
                }
              ]
            }
          ]
        }
      }
    },
    tabs: [
      {
        label: 'baseInfo',
        viewMetaData: {
          viewType: 'form',
          module: TESTCASELIB_TESTCASE,
          params: null,
          view: {
            isSimple: false,
            labelWidth: '120px',
            header: {
              icon: 'sk-icon-computer',
              $id: 'desktopName'
              // desktopState: null,
              // dictionaryPath: 'desktopState.normal'
            },
            content: [
              {
                isGroup: true,
                $type: 'group',
                $id: 'base',
                title: 'overview',
                icon: 'sk-icon-overview',
                $items: [
                  {
                    $id: 'preconditions',
                    label: 'testcaseMng.preconditions'
                  },
                  {
                    $id: 'testSteps',
                    label: 'testcaseMng.testSteps'
                  },
                  {
                    $id: 'expectedOutcomes',
                    label: 'testcaseMng.expectedOutcomes'
                  }
                ]
              }
            ]
          }
        }
      },
      {
        label: 'testcaseMng.runHistory',
        viewMetaData: import('./relationRh')
      },
      {
        label: 'testcaseMng.runHistory',
        viewMetaData: import('./relationRh')
      },
      {
        label: 'testcaseMng.modifyHistory',
        viewMetaData: import('./relationMh')
      }
    ]
  }
}
