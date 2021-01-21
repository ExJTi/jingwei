import { PROJECTLIB_PROJECT } from '@/api/apiModules'

export default {
  viewType: 'detail',
  module: PROJECTLIB_PROJECT,
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
      viewMetaData: {
        viewType: 'form',
        params: null,
        module: PROJECTLIB_PROJECT,
        view: {
          labelWidth: '110px',
          content: [
            {
              $type: 'group',
              $id: 'base',
              title: 'overview',
              $items: [
                {
                  label: 'projectM.projectNumber',
                  $id: 'projectNumber'
                },
                {
                  $id: 'title',
                  label: 'projectM.title'
                },
                {
                  $id: 'projectLeader',
                  label: 'projectM.projectLeader'
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
          module: PROJECTLIB_PROJECT,
          params: null,
          view: {
            isSimple: false,
            labelWidth: '120px',
            header: {
              icon: 'sk-icon-baseinfo',
              $id: 'title',
              label: 'projectM.title'
            },
            content: [
              {
                isGroup: true,
                $type: 'group',
                $id: 'base',
                $items: [
                  {
                    $id: 'version',
                    label: 'projectM.version'
                  },
                  {
                    $id: 'description',
                    label: 'projectM.description'
                  },
                  {
                    $id: 'bugrate',
                    label: 'projectM.bugrate'
                  }
                  // timeprogress: '项目时间进度',
                  // projectprogress: '项目进度',
                ]
              }
            ]
          }
        }
      }
      // {
      //   label: 'PROJECTM.runHistory',
      //   viewMetaData: import('./relationRh')
      // }
      // {
      //   label: 'PROJECTM.modifyHistory',
      //   viewMetaData: import('./relationMh')
      // }
    ]
  }
}
