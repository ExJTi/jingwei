// 移动分组相关的分组列表
import { TESTCASELIB_GROUP } from '@/api/apiModules'
export default {
  viewType: 'tree',
  // relationId: 'groupId', // 传给右侧关联表格的参数名
  view: {
    trees: {
      deviceRoot: true,
      title: 'form.common_user_group',
      module: TESTCASELIB_GROUP,
      btns: [],
      treeNodeBtns: []
    }
  }
}
