import { TESTCASELIB_TESTCASE } from '@/api/apiModules'

export default {
  viewType: 'table',
  refreshInterval: false,
  module: TESTCASELIB_TESTCASE,
  relationSearch: true,
  params: null,
  needFetchFillInfo: false,
  toolbar: {
    tips: {
      label: '默认展示当前分组下的用例列表，如果需要参考其他分组的用例可以通过输入用例ID进行搜索并匹配',
      type: 'warning'
    },
    moreBtnWidth: 160,
    searchPlaceholder: 'testcaseMng.searchPlaceholder',
    items: []
  },
  view: {
    columns: [
      {
        props: {
          type: 'radio',
          width: 55
        }
      },
      {
        props: {
          label: 'testcaseMng.caseNumber',
          prop: 'caseNumber',
          sortable: 'custom',
          sortField: 'caseNumber'
        }
      },
      {
        props: {
          label: 'testcaseMng.caseTitle',
          prop: 'caseTitle',
          sortable: 'custom',
          sortField: 'caseTitle'
        }
      },
      {
        props: {
          label: 'testcaseMng.priority',
          prop: 'priority',
          sortable: 'custom',
          sortField: 'priority'
        }
      }
    ]
  }
}
