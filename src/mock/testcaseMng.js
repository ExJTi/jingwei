export default {
  loginByUsername: config => {
    return {
      status: 'SUCCESS',
      content: {
        id: 'jsjsjsjsj'
      },
      msg: ''
    }
  },

  checkGroupNameDuplication: groupInfo => {
    console.log(groupInfo)
    var data = {
      content: {
        hasDuplication: false
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
    return data
  },
  editGroup: groupInfo => {
    console.log(groupInfo)
    //req: {url: "./jingwei/testcaseMng/testcaseLib/group/edit", type: "POST", body: "{"groupName":"升级","id":"111"}"}
    var data = {
      content: {},
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
    return data
  },
  groupDetail: data => {
    console.log(data)
    const body = JSON.parse(data.body)
    if (body.groupId === 'f3957b70-f1ec-4a0f-bfbb-071a74ee8cc7') {
      return {
        content: { enableAdd: true },
        message: null,
        msgArgArr: null,
        msgKey: null,
        status: 'SUCCESS'
      }
    } else {
      return {
        content: { enableAdd: false },
        message: null,
        msgArgArr: null,
        msgKey: null,
        status: 'SUCCESS'
      }
    }
  },

  checkCaseNumberDuplication: param => {
    console.log(param)
    var data = {
      content: {
        hasDuplication: false
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
    return data
  },
  // createGroup: newGroupInfo => {
  //   console.log(newGroupInfo)
  //   //
  //   return {
  //     status: 'SUCCESS',
  //     content: {
  //       id: 'jsjsjsjsj'
  //     },
  //     msg: ''
  //   }
  // },

  getTestCaseForBasic: caseNumber => {
    console.log(caseNumber)
    var data = {
      status: 'SUCCESS',
      content: {
        caseNumber: '用例编号',
        caseTitle: '用例标题',
        priority: '优先级',
        category: '分类',
        tag: '标签',
        createTime: '创建时间',
        preconditions:
          '前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件前置i套件v',
        testSteps: '1.测试步骤惺惺惜惺惺惺惺惜惺惺想惺惺惜惺惺想\r\n 2.测试布偶组照算',
        serverModel: '1234',
        terminalModel: 'terminalModel'
      }
    }
    return data
  },
  getTestCase: caseNumber => {
    console.log(caseNumber)
    var data = {
      status: 'SUCCESS',
      content: {
        caseNumber: '用例编号',
        caseTitle: '用例标题',
        priority: '3',
        testSteps: '12321',
        category: 'functionality',
        tag: '标签',
        createTime: '创建时间',
        preconditions: '前置i套件',
        serverModel: 'WIN_XP_SP3',
        terminalModel: 'RG-CT5530S(256)'
      }
    }
    console.log('detail', data)
    return data
  },
  saveTestCase: testCase => {
    console.log(testCase)
    // 读取其中的req参数并调用新建窗口
    return new {
      status: 'SUCCESS'
    }()
  },
  editTestCase: testCase => {
    console.log(testCase)
    // 读取其中的req参数并调用新建窗口
    return new {
      status: 'SUCCESS'
    }()
  },
  getTestcaseList: groupId => {
    console.log(groupId)
    // if (
    //   groupId.body &&
    //   groupId.body.exactMatchArr &&
    //   groupId.body.exactMatchArr.length > 0 &&
    //   groupId.body.exactMatchArr[0].valueArr[0] === '111'
    // ) {
    //   return {
    //     status: 'SUCCESS',
    //     content: {
    //       itemArr: [
    //         {
    //           id: '1',
    //           caseNumber: '用例编号1',
    //           caseTitle: '用例标题1',
    //           priority: '优先级1',
    //           category: '分类1',
    //           label: '标签1',
    //           createTime: '创建时间1'
    //         }
    //       ],
    //       total: 1
    //     }
    //   }
    // }
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            id: '1',
            caseNumber: '用例编号1',
            caseTitle: '用例标题1',
            priority: '优先级1',
            category: '分类1',
            label: '标签1',
            createTime: '创建时间1'
          },
          {
            id: '2',
            caseNumber: '用例编号2',
            caseTitle: '用例标题2',
            priority: '优先级2',
            category: '分类2',
            label: '标签2',
            createTime: '创建时间2'
          },
          {
            id: '3',
            caseNumber: '用例编号3',
            caseTitle: '用例标题2',
            priority: '优先级2',
            category: '分类2',
            label: '标签2',
            createTime: '创建时间2'
          }
        ],
        total: 3
      }
    }
    console.log('list', data)

    return data
  },
  getRunHistoryList: () => {
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            id: '1',
            caseNumber: '用例编号1',
            caseTitle: '用例标题1',
            priority: '优先级1',
            category: '分类1',
            tag: '标签1',
            createTime: '创建时间1'
          },
          {
            id: '2',
            caseNumber: '用例编号2',
            caseTitle: '用例标题2',
            priority: '优先级2',
            category: '分类2',
            label: '标签2',
            createTime: '创建时间2'
          }
        ]
      }
    }
    return data
  },
  getTestcaseLibList: () => {
    // 由于只有末级分组才会有用例关联，所以整个树结构不会有很多节点，采用一次性返回所有数据
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            label: '云课堂',
            id: '1',
            groupType: 'SYSTEM',
            enableAdd: true,
            children: [
              {
                label: 'CMR',
                id: '11',
                enableAdd: true,
                children: [
                  {
                    label: '升级',
                    id: 'f3957b70-f1ec-4a0f-bfbb-071a74ee8cc7'
                  }
                ]
              }
            ]
          },
          {
            label: '云办公',
            enableAdd: true,
            id: '2',
            groupType: 'SYSTEM',
            children: [
              {
                label: '5.2',
                enableAdd: true,
                id: '21',
                children: [
                  {
                    label: '黄金镜像',
                    enableAdd: true,
                    id: '211'
                  }
                ]
              },
              {
                label: '5.3',
                id: '22',
                enableAdd: true,
                children: [
                  {
                    id: '221',
                    label: 'GPU管理',
                    enableAdd: true
                  }
                ]
              }
            ]
          },
          {
            label: '平台项目',
            id: '3',
            groupType: 'SYSTEM',
            enableAdd: true,
            children: [
              {
                label: '10.1',
                id: '31',
                enableAdd: true,
                children: [
                  {
                    label: 'RDP',
                    enableAdd: true,
                    id: '311'
                  }
                ]
              },
              {
                label: '10.2',
                id: '32',
                enableAdd: true,
                children: [
                  {
                    label: 'SK-CI',
                    enableAdd: true,
                    id: '321'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
    return data
  },
  getUserInfo: config => {
    var data = {
      status: 'SUCCESS',
      content: {
        id: 'jsjsjsjsj',
        roleArr: [
          {
            id: 'b2162e5e-82bf-4a95-9414-434c498cc766',
            label: '默认角色'
          },
          {
            id: '33673447-301a-4278-90c6-f2a0564c844e',
            label: 'userGroup'
          }
        ],
        // SUPER_ADMIN超级管理员，NORMAL_ADMIN普通管理员
        userName: 'admin' // 登录用户名
      }
    }
    var flag = true
    return flag ? data : `<html> <script>window.top.location.href = "main.html?action=logout"; </script></html>`
  },
  validateAdminPwd: config => {
    return {
      status: 'ERROR',
      content: null,
      msg: '密码验证出错'
    }
  },
  logout: () => {
    return {
      code: 0
    }
  },
  createGroup: config => {
    console.log(config)
    return {
      status: 'SUCCESS',
      content: {
        id: 'jsjsjsjsj'
      },
      msg: ''
    }
  },
  getImportFields: () => {
    console.log(123)
    return {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            label: '用例名称',
            value: 'caseName'
          },
          {
            label: '用例编号',
            value: 'caseNumber'
          },
          {
            label: 'RCD 6000 V2',
            value: 'RCD-6000-V2'
          },
          {
            label: 'RCD 6000 V3',
            value: 'RCD-6000-V3'
          },
          {
            label: 'RCD 6000 V4',
            value: 'RCD-6000-V4'
          },
          {
            label: 'RCD 4500 V1',
            value: 'RCD-4500-V1'
          },
          {
            label: 'RCD 4500 V2',
            value: 'RCD-4500-V2'
          },
          {
            label: 'RCD 4500 V3',
            value: 'RCD-4500-V3'
          },
          {
            label: 'RCD 4500 V4',
            value: 'RCD-4500-V4'
          },
          {
            label: 'RCD 3000 V1',
            value: 'RCD-3000-V1'
          },
          {
            label: 'RCD 3000 V2',
            value: 'RCD-3000-V2'
          },
          {
            label: 'RCD 3000 V3',
            value: 'RCD-3000-V3'
          },
          {
            label: 'RCD 3000 V4',
            value: 'RCD-3000-V4'
          },
          {
            label: 'RCD 1500 V4',
            value: 'RCD-1500-V4'
          },
          {
            label: '海光服务器',
            value: 'HAIGUANG'
          },
          {
            label: '所有服务器',
            value: 'ALL'
          },
          {
            label: '与服务器型号无关',
            value: 'NA'
          }
        ]
      }
    }
  }
}
