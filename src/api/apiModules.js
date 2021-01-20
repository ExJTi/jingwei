// 按服务端模块制定前缀
const PREFIX = ''
// 接口迁移，所有的接口模块由该文件统一对外导出
// 命名不包含前缀‘{PREFIX}’和最后一个‘/’后面的字符
// 使用全大写，使用‘_’替换‘/’，如'rco/clouddesktop/deskNetwork/list'对外的模块名‘CLOUDDESKTOP_DESKNETWORK’

const TESTCASELIB_GROUP = 'testcaseMng/testcaseLib/group'
const TESTCASELIB_TESTCASE = 'testcaseMng/testcaseLib/testcase'

const TESTCASEVIEW_GROUP = 'testcaseMng/testcaseView/group'
const TESTCASEVIEW_TESTCASE = 'testcaseMng/testcaseView/testcase'

const PROJECTLIB_GROUP = 'projectM/projectLib/group'
const PROJECTLIB_PROJECT = 'projectM/projectLib/project'

export {
  PREFIX,
  TESTCASELIB_GROUP,
  TESTCASELIB_TESTCASE,
  TESTCASEVIEW_GROUP,
  TESTCASEVIEW_TESTCASE,
  PROJECTLIB_GROUP,
  PROJECTLIB_PROJECT
}
