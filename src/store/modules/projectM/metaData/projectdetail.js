import { PROJECTLIB_PROJECT } from '@/api/apiModules'

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
      label: 'PROJECTMng.baseInfo',
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
