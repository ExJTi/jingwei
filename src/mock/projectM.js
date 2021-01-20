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
  getRunHistoryList: () => {
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            id: '1',
            caseNumber: '项目编号1',
            caseTitle: '项目标题1',
            priority: '优先级1',
            category: '分类1',
            tag: '标签1',
            createTime: '创建时间1'
          },
          {
            id: '2',
            caseNumber: '项目编号2',
            caseTitle: '项目标题2',
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
  editProject: project => {
    console.log(project)
    // 读取其中的req参数并调用新建窗口
    return new {
      status: 'SUCCESS'
    }()
  },
  // 项目库列表
  getProjectLibList: () => {
    // 由于只有末级分组才会有项目关联，所以整个树结构不会有很多节点，采用一次性返回所有数据
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            label: '云课堂项目',
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
            label: '云办公项目',
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
            label: '云平台项目',
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
  getProjectList: groupId => {
    console.log(groupId)
    if (
      groupId.body &&
      groupId.body.exactMatchArr &&
      groupId.body.exactMatchArr.length > 0 &&
      groupId.body.exactMatchArr[0].valueArr[0] === '111'
    ) {
      return {
        status: 'SUCCESS',
        content: {
          itemArr: [
            {
              id: '1',
              projectNumber: '项目编号1',
              title: '项目标题1',
              projectLeader: '负责人1',
              LeaderType: '类型1',
              projectState: '项目状态1',
              projectprogress: '项目进度1',
              productType: '产品类型1',
              projecttime: '项目期限1',
              timeprogress: '项目时间进度1'
            }
          ],
          total: 1
        }
      }
    }
    var data = {
      status: 'SUCCESS',
      content: {
        itemArr: [
          {
            id: '1',
            projectNumber: '项目编号1',
            title: '项目标题1',
            projectLeader: '负责人1',
            LeaderType: '类型1',
            projectState: '项目状态1',
            projectprogress: '项目进度1',
            productType: '产品类型1',
            projecttime: '项目期限1',
            timeprogress: '项目时间进度1'
          },
          {
            id: '2',
            projectNumber: '项目编号2',
            title: '项目标题2',
            projectLeader: '负责人2',
            LeaderType: '类型2',
            projectState: '项目状态2',
            projectprogress: '项目进度2',
            productType: '产品类型2',
            projecttime: '项目期限2',
            timeprogress: '项目时间进度2'
          }
        ],
        total: 2
      }
    }
    console.log('list', data)

    return data
  },
  getProJect: projectNumber => {
    console.log(projectNumber)
    var data = {
      status: 'SUCCESS',
      content: {
        projectNumber: '项目编号1',
        title: '项目标题1',
        projectLeader: '负责人1',
        LeaderType: '类型1',
        projectState: '项目状态1',
        projectprogress: '项目进度1',
        productType: '产品类型1',
        time: '项目期限1',
        timeprogress: '项目时间进度1'
      }
    }
    console.log('detail', data)
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
  }
}
