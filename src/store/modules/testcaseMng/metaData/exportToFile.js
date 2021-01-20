// 导出用例： 可以选择导出字段，后端要返回字段列表
// 哪些用例：如果是组导出则显示组的名称，如果是组内的导出则显示用例列表
// 点击导出按钮，页面自动下载
import _ from 'lodash'

import { TESTCASELIB_TESTCASE } from '@/api/apiModules'
export default {
  viewType: 'form',
  module: TESTCASELIB_TESTCASE,
  params: null,
  callBackAction: 'SaveTestCaseCallBack',
  toolbar: {
    items: [
      {
        slot: 'left',
        label: 'testcaseMng.startToExport',
        name: 'startToExport',
        props: {
          // disabled: true,
          type: 'primary'
          // icon: 'sk-icon-download'
        },
        action: 'CdStop',
        tip: 'tips.operation.cloudDesktopManage.stop',
        confirm: {
          msg: 'tips.confirm.cloudDesktopManage.batchStopMsg'
        }
      }
      // {
      //   slot: 'left',
      //   label: '取消',
      //   name: 'cancel',
      //   props: {
      //     // disabled: true,
      //     // type: 'primary'
      //     // icon: 'sk-icon-download'
      //   },
      //   action: 'BaseRemoveDialog',
      //   tip: 'tips.operation.cloudDesktopManage.stop',
      //   confirm: {
      //     msg: 'tips.confirm.cloudDesktopManage.batchStopMsg'
      //   }
      // }
    ]
  },
  view: {
    showOkBtn: false,
    // showCancelBtn: false,
    // title: 'testcaseMng.testcaseCreate',
    content: [
      {
        $id: 'caseTemplate',
        $type: 'sky-relation-option',
        label: 'testcaseMng.choosedCaseList',
        tip: {
          description: ['tips.description.testcaseMng.caseTemplateDescription']
        },
        $el: {
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
        $type: 'input',
        label: 'testcaseMng.groupName',
        $el: {
          disabled: true
        }
      },

      {
        $id: 'exportFieldArr',
        $type: 'checkbox-group',
        label: 'testcaseMng.exportFieldArr',
        $default: [],
        $options: `${TESTCASELIB_TESTCASE}/getImportFields`,
        dataType: 'asyn',
        $el: {
          'overflow-tooltip': true
        },
        format: function(meta, value) {
          if (value && value.length <= 0) {
            return (
              _.isArray(meta.$options) &&
              meta.$options.map(option => {
                return option.value
              })
            )
          } else {
            return value || []
          }
        }
      }
    ]
  }
}
