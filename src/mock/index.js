import Mock from 'mockjs'

import data from './data'
import loginAPI from './login'
import projectMAPI from './projectM'
import testcaseMngAPI from './testcaseMng'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/jingwei\/base\/admin\/loginAdmin/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/jingwei\/base\/admin\/logoutAdmin/, 'post', loginAPI.logout)
Mock.mock(/\/jingwei\/base\/admin\/validateAdminPwd/, 'post', loginAPI.validateAdminPwd)
Mock.mock(/\/jingwei\/base\/admin\/getCurrentUserInfo/, 'post', loginAPI.getUserInfo)

// 用例库相关

// 分组列表:不同分组获取不同的用例列表
Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/group\/list/, 'post', testcaseMngAPI.getTestcaseLibList)
// 删除分组
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/group\/delete/, 'post', testcaseMngAPI.deleteGroup)
// 创建分组
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/group\/create/, 'post', testcaseMngAPI.createGroup)
// 获取分组详情
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/group\/detail/, 'post', testcaseMngAPI.groupDetail)
//编辑分组()
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/group\/edit/, 'post', testcaseMngAPI.editGroup)
// 分组名称重复性校验
Mock.mock(
  /\/jingwei\/testcaseMng\/testcaseLib\/group\/checkGroupNameDuplication/,
  'post',
  testcaseMngAPI.checkGroupNameDuplication
)

// // 用例列表
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/list/, 'post', testcaseMngAPI.getTestcaseList)

Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/getInfo/, 'post', testcaseMngAPI.getTestCaseForBasic)
//用例编号重复检验
Mock.mock(
  /\/jingwei\/testcaseMng\/testcaseLib\/testcase\/checkCaseNumberDuplication/,
  'post',
  testcaseMngAPI.checkCaseNumberDuplication
)

// 保存用例
// Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/create/, 'post', testcaseMngAPI.getTestcaseList)

// // 用例详情
Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/detail/, 'post', testcaseMngAPI.getTestCase)

Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/edit/, 'post', testcaseMngAPI.getTestCase)

Mock.mock(/\/jingwei\/testcaseMng\/testcaseLib\/testcase\/getImportFields/, 'post', testcaseMngAPI.getImportFields)

// Mock.mock(/\/jingwei\/testcaseMng\/testcase\/runHistory\/list/, 'post', testcaseMngAPI.getRunHistoryList)
// Mock.mock(/\/jingwei\/testcaseMng\/testcase\/modifyHistory\/list/, 'post', testcaseMngAPI.getRunHistoryList)

// Mock.mock(/\/jingwei\/testcaseMng\/testcase\/indeed\/getInfo/, 'post', testcaseMngAPI.getTestCaseForBasic)

// Mock.mock(/\/jingwei\/testcaseMng\/testcase\/getInfo/, 'post', testcaseMngAPI.getTestCaseForBasic)

// // 项目详情
Mock.mock(/\/jingwei\/projectM\/projectLib\/project\/detail/, 'post', projectMAPI.getProJect)

Mock.mock(/\/jingwei\/projectM\/projectLib\/project\/edit/, 'post', projectMAPI.getProJect)

// 项目列表
Mock.mock(/\/jingwei\/projectM\/projectLib\/project\/list/, 'post', projectMAPI.getProjectList)

// 获取分组详情
Mock.mock(/\/jingwei\/projectM\/projectLib\/group\/detail/, 'post', projectMAPI.groupDetail)

// 分组列表:不同分组获取不同的项目列表
Mock.mock(/\/jingwei\/projectM\/projectLib\/group\/list/, 'post', projectMAPI.getProjectLibList)

//项目编号重复检验
Mock.mock(
  /\/jingwei\/projectM\/projectLib\/project\/checkCaseNumberDuplication/,
  'post',
  projectMAPI.checkCaseNumberDuplication
)
// 通用
Mock.mock(/\/all/, 'post', data.fetch)

export default Mock
