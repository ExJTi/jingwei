export default {
  confirm: {
    testcaseMng: {
      deleteGroup: '删除分组({label})？'
    },
    projectM: {
      batchnewMsg: '新建项目吗?',
      batcheditMsg: '编辑项目吗?',
      stopMsg: '停止项目({label})？'
    }
  },
  operation: {
    // 按钮不可操作提示信息
    testcaseMng: {
      createGroup: '当前分组下已关联用例，无法新增分组',
      deleteGroup: '系统内置的和已关联用例的分组无法删除',
      editGroup: '系统内置分组无法编辑',
      editTestCase: ''
    },
    projectM: {
      new: '新建',
      edit: '编辑',
      stop: '停止',
      createGroup: '当前分组下已关联项目，无法新增分组',
      deleteGroup: '系统内置的和已关联项目的分组无法删除',
      editGroup: '系统内置分组无法编辑'
    },
    userManage: {
      deletedMsg: '请选择未创建云桌面或所有云桌面关闭的用户（注意：AD域和LDAP域用户需要禁用才能删除）',
      delete: '该用户是启用的AD域用户或启用的LDAP域用户或其云桌面处于非关闭状态，不可删除',
      recover: '回收站中无该用户云桌面或云桌面个数已达上限',
      desktopAdd: '云桌面个数已达上限，普通或AD域用户3个，访客10个',
      passwordReset: '请选择普通用户重置密码',
      edit: '请选择普通用户或访客用户编辑基本信息',
      adGroupCreate: 'AD域用户组下不能创建用户组',
      ldapGroupCreate: 'LDAP域用户组下不能创建用户组',
      adGroupDelete: '启用AD域对接时，AD域用户组不能删除',
      ldapGroupDelete: '启用LDAP域对接时，LDAP域用户组不能删除',
      movingToGroup: '请选择普通用户或访客移动分组',
      editAdUser: '请选择AD域用户编辑权限',
      editDesktopIDV: '请选择普通用户、AD域用户、LDAP域用户编辑IDV云桌面',
      editAdUserGroup: '请选择AD域用户组编辑权限',
      groupCreateMsg: '无权限创建用户组',
      editUserLoginIdentity: '访客用户不支持双网功能'
    },
    tree: {
      userGroupDelete: '请选择没有子分组的用户组进行删除',
      terminalDelete: '请选择没有子分组的终端组进行删除'
    },
    common: {
      batchDelete: '请至少选择一条可删除的数据'
    }
    // configServer: {
    //   delete: '请选择未配置服务器的机柜'
    // }
  },
  description: {
    testcaseMng: {
      caseTemplateDescription: '可以通过选择已有用例的数据作为模板完成关联用例的快速编写'
    }
  }
}
