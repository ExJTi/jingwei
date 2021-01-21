export default {
  loginByUsername: config => {
    return {
      status: 'SUCCESS',
      content: {
        id: '123'
      },
      msg: ''
    }
  },
  checkProjectNumberDuplication: param => {
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
                label: '云课堂项目1',
                id: '11',
                enableAdd: true,
                children: [
                  {
                    label: '云课堂项目11',
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
                label: '云办公项目1',
                enableAdd: true,
                id: '21',
                children: [
                  {
                    label: '云办公项目11',
                    enableAdd: true,
                    id: '211'
                  }
                ]
              },
              {
                label: '云办公项目2',
                id: '22',
                enableAdd: true,
                children: [
                  {
                    id: '221',
                    label: '云办公项目22',
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
                label: '云平台项目1',
                id: '31',
                enableAdd: true,
                children: [
                  {
                    label: '云平台项目11',
                    enableAdd: true,
                    id: '311'
                  }
                ]
              },
              {
                label: '云平台项目2',
                id: '32',
                enableAdd: true,
                children: [
                  {
                    label: '云平台项目22',
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
  // 项目表
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
              projectNumber: '项目编号111',
              title: '项目标题111',
              projectLeader: '负责人111',
              // LeaderType: '类型111',
              // projectState: '项目状态111',
              // projectprogress: '项目进度111',
              // productType: '产品类型111',
              // projecttime: '项目期限111',
              timeprogress: '项目时间进度111'
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
            id: '111',
            projectNumber: '项目编号1',
            title: '项目名称1',
            projectLeader: '负责人1',
            LeaderType: 'SE',
            projectState: '停用',
            // projectprogress: '项目进度1',
            productType: '产品类型1',
            projecttime: '项目期限1',
            timeprogress: '项目时间进度1'
          }
          // {
          //   id: '2',
          //   projectNumber: '项目编号2',
          //   title: '项目名称2',
          //   projectLeader: '负责人2',
          //   // LeaderType: 'PM',
          //   // projectState: '项目状态2',
          //   // projectprogress: '项目进度2',
          //   // productType: '产品类型2',
          //   // projecttime: '项目期限2',
          //   timeprogress: '项目时间进度2'
          // }
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
        title: '项目名称1',
        projectLeader: '负责人1',
        version: '基线版本1',
        bugrate: '千行bug率1',
        LeaderType: 'SE',
        description: '项目描述12',
        projecttime: '项目期限1'
      }
    }
    console.log('detail', data)
    return data
  },
  getProJectForBasic: projectNumber => {
    console.log(projectNumber)
    var data = {
      status: 'SUCCESS',
      content: {
        projectNumber: '编号1',
        title: '项目名称1',
        projectLeader: '负责人1',
        version: '基线版本1',
        bugrate: '千行bug率1',
        LeaderType: 'SE',
        description:
          '项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1项目描述1',
        percentage: '10'
      }
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
  editProject: project => {
    console.log(project)
    // 读取其中的req参数并调用新建窗口
    return new {
      status: 'SUCCESS'
    }()
  }
}
