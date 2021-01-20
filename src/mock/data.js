import Mock from 'mockjs'
// import { param2Obj } from 'sky-engine/utils'

const List = []
const count = 100
let used = 43035572305
let total = 16000900661248

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      'id|1-2000': 1,
      'cloudDesktopState|1': [
        'creating',
        'running',
        'stopping',
        'deleting',
        'reverting',
        'changing',
        'starting',
        'rebooting',
        'sleeping',
        'wakeUping',
        'stop',
        'sleep'
      ],
      'cloudDesktopAction|1': ['online', 'offline', 'sleep'],
      number: '@increment',
      name: '@cname',
      userName: '@cname',
      userGroup: '@ctitle(1, 5)',
      'dtype|1': ['normal', 'custom'],
      'imageName|1': ['window7', 'windows10', 'windowXP'],
      'imageServer|1': ['ImageServer-Web'],
      'imageType|1': ['ISO'],
      'platform|1': ['Linux', 'Windows', 'WindowVirtio', 'Others'],
      'strategy|1': ['输入设备', '存储设备', '摄像设备', '办公设备', '音频设备', '手机'],
      image: '@ctitle(1, 20)',
      messageTitle: '@ctitle(1, 20)',
      messageContent: '@ctitle(1, 128)',
      ip: '@ip',
      mac: /[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/,
      terminal: '@ctitle(5, 10)',
      terminalGroup: '@ctitle(5, 10)',
      'ttype|1': ['VDI', 'IDV'],
      'status|1': ['NORMALLY', 'FAULT'],
      'storagePoolState|1': ['NORMALLY', 'FAULT'],
      'terminalState|1': ['online', 'offline'],
      // 'status|1': ['running', 'stopping', 'pause', 'fault_resuming', 'hibernated', 'unknown', 'error', 'recycling', 'rebooting'],
      display_time: '@datetime',
      fileName: '@ctitle(1, 10)',
      'fileType|1': ['iso', 'base'],
      lastTime: '@datetime',
      createTime: '@datetime',
      used: '@int(1,500)' + 'G',
      'totalCapacity|1': [100120, 200000],
      'usedCapacity|1': [11023, 22300],
      'auth|1': ['-rwxrwxrwx', '-rwxr--r--', '-rw-rw-r--'],
      'cloudDisk|1': ['5G', '10G', '15G', '20G', '未启用'],
      owner: '0 0',
      isoFileSize: '@float(0, 5, 2, 2)' + 'G',
      packageFileSize: '@float(10, 100, 1, 2)' + 'M',
      'treminalMode|1': ['单用户', '多用户'],
      'treminalImage|1': ['win7_64纯净', 'win10_64纯净'],
      disk: '@int(0, 100)',
      null: '',
      'companySign|1': ['0x8087', '0x138a', '0x7f61', '0x90a1'],
      'projectSign|1': ['0x0a2a', '0x1123', '0x9e31', '0x01f1'],
      'version|1': ['0x0001', '0x0002', '0x0003', '0x0004'],
      'company|1': ['Intel Corp.', 'Validity Sensors, Inc.'],
      normal: '正常',
      vdiCloudDesktopName: '@ctitle(1, 5)',
      idvCloudDesktopName: '@ctitle(1, 5)',
      source: '@ctitle(1, 5)',
      'vdiCloudTestTopUse|1': ['1/2', '2/3', '1/4'],
      'idvCloudTestTopUse|1': ['1/2', '2/3', '1/4'],
      'idvTerminalUse|1': ['1/2', '2/3', '1/4'],
      associateUser: '@ctitle(1, 3)',
      bindTerminal: '@ctitle(1, 5)',
      describe: '@ctitle(1, 10)',
      'dns|1': ['8.8.8.8', '114.114.114..114', '218.85.157.99'],
      'vlan|1': ['vlan1', 'vlan2', 'vlan3'],
      desktopName: '@ctitle(1, 5)',
      imageName: '',
      'systemType|1': ['win7', 'win10', 'linux'],
      'cloudDesktopType|1': ['restore', 'personalized'],
      'userGroupState|1': ['disabled', 'normal'],
      'imageTemplateState|1': ['disabled', 'normal'],
      'userType|1': ['local', 'thirdParty'],
      'terminalType|1': ['IDV', 'VDI'],
      'strategyType|1': ['IDV', 'VDI'],
      'systemDiskSize|1': ['40', '10', '15', '20'],
      'interStorage|1': ['2', '4', '8', '16'],
      'CPU|1': '@int(1, 8)',
      'usbName|1': ['存储设备', '摄像设备', '办公设备', '音频设备', '手机', '其他已归类设备'],
      'usbDescribe|1': [
        '除鼠标、键盘之外的输入设备，如手写板等，需要用户自行归类或添加。',
        'U盘、光驱、移动硬盘等存储类设备。',
        'USB摄像头、高拍仪等摄像类设备。',
        '其他未知类型设备，由用户自行归类或添加。',
        '自定义设备，需要用户自行归类或添加。',
        'USB耳机、USB麦克风等音频设备。'
      ],
      cdNumber: '@int(1, 5)',
      xeee: '@int(0, 100)',
      'vdi|1': ['Rain100 V2', 'RG-Rain100S V2', 'Rain200Pro-Exam'],
      'idv|1': ['Rain410W(128)', 'Rain310W(128)', 'Rain410W(128)', 'Rain310W V2', 'Rain320W V1.00'],
      percentage: '@int(0, 100)',
      'minConfig|1': ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
      taskName: '@ctitle(5, 10)',
      'taskType|1': ['cycle', 'time'],
      'cycleType|1': ['everyday', 'everyweek'],
      'displayStrategy|1': ['fastPattern', 'default'],
      taskTime: '@time',
      taskDescribe: '@ctitle(10, 20)',
      'applyName|1': ['YoukuNplayer.exe', 'mspaint.exe', 'photoshop.exe'],
      'operaControl|1': ['operaStrategy1', 'operaStrategy2', 'custom', 'default'],
      operaControlValue: '@int(1, 5)',
      // RCCP
      clusterName: '集群' + '@integer(1, 200)',
      computingClusterName: '计算集群' + '@integer(1, 200)',
      hostComputerName: '主机' + '@integer(1, 200)',
      'clusterState|1': ['ONLINE', 'OFFLINE'],
      storagePoolName: '@ctitle(5, 10)',
      storageVolumeName: '存储卷名称' + '@integer(1, 200)',
      'storagePoolType|1': ['localStorage', 'distributedStorage'],
      storagePoolSize: '@float(64, 1024, 0, 2)' + 'G',
      storageVolumeSize: '@float(64, 1024, 0, 2)' + 'G',
      'cluster|1': ['cluster1', 'cluster2'],
      'networkType|1': ['vxlan', 'vlan'],
      'networkName|1': ['集群1管理网', '集群1存储网'],
      'clusterNetworkType|1': ['manageProtocol', 'strorageNetwork'],
      'netcard|1': ['eth0', 'eth1', 'eth2', 'eth3', 'eth4'],
      'netCardType|1': ['电口', '光口'],
      hardDisk: '硬盘' + '@integer(1, 200)',
      hardDiskSize: '@float(64, 1024, 0, 2)' + 'G',
      'hardDiskType|1': ['HDD', 'SSD'],
      'virtualMachineState|1': ['RUNNING', 'STOP'],
      'virtualMachineName|1': '虚拟机' + '@integer(1, 200)',
      'templateName|1': '模板' + '@integer(1, 200)',
      'virtualSwitchName|1': 'net' + '@integer(1, 200)',
      phisicalIp: '@ip',
      snapshotSize: '@float(64, 512, 0, 2)' + 'G',
      'snapshotName|1': '快照' + '@integer(1, 200)',
      'readRate|1': ['1000Mb/s', '10000Mb/s'],
      writeRate: '@integer(1, 200)' + 'M/s',
      ipRange: '@ip',
      gateWay: '@ip',
      'eventType|1': ['correlated', 'uncorrelated'],
      'severity|1': ['warning', 'danger'],
      'informWay|1': ['phone', 'email', 'wechat'],
      'bondName|1': 'bond' + '@integer(1, 5)',
      'bondType|1': ['管理网', '存储网', '业务网'],
      'menuUrl|1': ['基础设施/计算集群', '计算资源/虚拟机', '存储资源/存储卷管理'],
      'ableState|1': ['enabled', 'disabled'],
      'authorityName|1': '权限' + '@integer(1, 5)',
      'roleName|1': ['超级管理员', '集群管理员'],
      monitoringObject: '对象' + '@integer(1, 200)',
      monitoringIndicators: '指标' + '@integer(1, 200)',
      'authorizationState|1': ['authorized', 'unauthorized'],
      'authorizationType|1': ['类型1', '类型2'],
      eventName: '事件' + '@integer(1, 200)',
      strategyName: '策略' + '@integer(1, 200)',
      netCardName: 'PCI-E' + '@integer(1, 200)',
      'hardDiskName|1': [
        'LSI MRROMB',
        'SUM ABBEE',
        'INTEL OOIMM',
        'MEI IILLLKI',
        'SONY DDABB',
        'ROSHIBA FFWW',
        'WEISTD EEEF'
      ],
      'driveInfo|1': ['驱动良好', '驱动异常'],
      iPPoolName: 'IP池' + '@integer(1, 200)',
      routerName: '路由器' + '@integer(1, 200)',
      securityGroupName: '安全组' + '@integer(1, 200)',
      content: '@ctitle(1, 20)',
      'level|1': ['SERIOUS', 'NORMALLY'],
      'isEnable|1': ['是', '否'],
      'alarmLevel|1': ['tips', 'serious'],
      'alarmType|1': ['storageType', 'networkType', 'diskType', 'hostType'],
      'frequency|1': '@int(1, 5)',
      'removeWay|1': ['manualDelete', 'autoDelete'],
      'alarmItem|1': ['CPU利用率', '服务器内存利用率', '存储利用率'],
      'isAlarm|1': ['是', '否'],
      adminAccount: 'admin' + '@integer(1, 200)',
      'isoFiles|1': ['ISO9000', 'ISO14000'],
      'application|1': ['软件1', '软件2'],
      numberNodes: '@int(5, 10)',
      storagePoolNumber: '@int(5, 10)',
      normalNumberNodes: '@int(1, 5)',
      faultNumberNodes: '@int(1,5)',
      'isUse|1': ['使用', '未使用'],
      'redundancyStrategy|1': ['RF2', 'RF3', 'EC-2D1P', 'EC-4D2P', 'EC-8D2P'],
      'capacity|1': [['@int(1,200)', '@int(300,500)']],
      'capacityUtilzation|1': [['@int(1,200)', '@int(300,500)']],
      virtualMachineTitle: '虚机' + '@int(1,10)',
      imageVolume: 'WIN7模板-卷' + '@int(1,10)',
      'purpose|1': ['缓存盘', '数据盘', 'UNUSED'],
      'vendor|3-8': /[A-Z]/,
      'interfaceType|1': ['SCSI', 'SATA'],
      'drive|1': ['/dev/sda', '/dev/sdb'],
      'storagePoolTitle|1': ['默认存储池', '重要数据存储池', '办公用存储池'],
      'maintainingState|1': ['NORMALLY', 'MAINTAINING'],
      'serialNumber|1': ['GN00001', 'GN00002', 'GN00003'],
      'cacheDiskNumber|1': ['1', '2'],
      usedCPU: '@int(20,50)' + 'G',
      reservedCPU: '@int(3,10)',
      memorytotal: '@int(200,500)' + 'G',
      usedMemory: '@int(30,100)' + 'G',
      reservedMemory: '@int(3,10)' + 'G',
      cputotal: '@int(100,200)',
      'type|1': ['电口', '光口'],
      vender: 'QEMU',
      model: 'QEMU',
      diskType: 'HDD',
      sn: '@id'
    })
  )
}

export default {
  fetch: config => {
    const params = JSON.parse(config.body)
    const { importance, type, title, limit = 20, sort, filterBy, filterStr } = params

    // const { importance, type, title, page = 1, limit = 20, sort, filterBy, filterStr } = JSON.parse(config.body)
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      if (filterBy && item[filterBy].indexOf(filterStr) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    let page = params.page
    page = page + 1
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      content: {
        total: mockList.length,
        items: pageList
      },
      status: 'SUCCESS'
    }
  },
  create: config => {
    const data = JSON.parse(config.body)
    console.log(data)
    const result = {
      data: 'success',
      code: 0,
      msg: 'create is success'
    }
    return result
  },
  getInfo: config => {
    return {
      content: List[0]
    }
  },
  configWizard: config => {
    return {
      content: {
        customDataArr: [{ key: 'userIndex', value: 1 }],
        index: 5,
        isJoinUserExperiencePlan: false,
        show: false
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
  },

  getEthernetList: () => {
    return {
      content: {
        itemArr: [
          {
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: '429f62ef-c5aa-47bd-af19-f99cb8a95327',
            mac: '56:6f:c4:5e:01:55',
            model: '',
            name: 'eth0',
            nicType: null,
            speed: '0',
            status: 'UP'
          },
          {
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'bf0522d5-6a03-4a9b-a429-682b706fd6f5',
            mac: '56:6f:c4:5e:01:56',
            model: '',
            name: 'eth1',
            nicType: null,
            speed: '0',
            status: 'UP'
          },
          {
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'bf0522d5-6a03-4a9b-a429-682b706fd895',
            mac: '56:6f:c4:5e:01:56',
            model: '',
            name: 'eth2',
            nicType: null,
            speed: '0',
            status: 'DOWN'
          },
          {
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'bf0522d5-6a03-4a9b-a429-682b706fddds5',
            mac: '56:6f:c4:5e:01:56',
            model: '',
            name: 'eth3',
            nicType: null,
            speed: '0',
            status: 'DOWN'
          }
        ],
        total: 2
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
  },
  getHostDiskList: () => {
    return {
      content: {
        itemArr: [
          {
            capacity: 128849018880,
            devPath: '/dev/sda',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: '3f8cfe68-6413-4b2d-83c4-59db521327e6',
            interfaceType: 'SCSI',
            isSystemDisk: true,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'd02669a3-3ca5-4f4c-8f77-c862a8e76a2a',
            vender: 'QEMU'
          },
          {
            capacity: 322122547200,
            devPath: '/dev/sdb',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: '358d4162-5b29-4ea6-973b-4b24db98f81d',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'b2db6c46-319f-4169-82ea-10de671dfb02',
            vender: 'QEMU'
          },
          {
            capacity: 214748364800,
            devPath: '/dev/sdc',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'e134eb33-6f84-4c46-aea1-c4449b2bf724',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: '0bdd6aeb-789b-46a4-9844-071f2f13049c',
            vender: 'QEMU'
          },
          {
            capacity: 107374182400,
            devPath: '/dev/sdd',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'd7950ff0-40b5-4d10-a09f-7114e57733e7',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'da45ff0c-ad04-4f69-bcfd-322397ab3453',
            vender: 'QEMU'
          },
          {
            capacity: 107374182400,
            devPath: '/dev/sdd',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'd7950ff0-40b5-4d10-a09f-74e57733e7',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'da45ff0c-ad04-4f69-bcfd-322397ab3453',
            vender: 'QEMU'
          },
          {
            capacity: 107374182400,
            devPath: '/dev/sdd',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'd7950ff0-40b5-4d10-a09f-711457733e7',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'da45ff0c-ad04-4f69-bcfd-322397ab3453',
            vender: 'QEMU'
          },
          {
            capacity: 107374182400,
            devPath: '/dev/sdd',
            diskType: 'HDD',
            family: 'Unknown',
            hostId: '2c0fe2ef-594f-55f2-a02b-35119e9f3e05',
            id: 'd7950ff0-40b5-4d10-a09f-7114e5773e7',
            interfaceType: 'SCSI',
            isSystemDisk: false,
            model: 'QEMU HARDDISK',
            rotationRate: 0,
            sn: 'da45ff0c-ad04-4f69-bcfd-322397ab3453',
            vender: 'QEMU'
          }
        ],
        total: 4
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
  },
  upload: config => {
    console.log(111)
  },
  getPv: () => ({
    pvData: [
      { key: 'PC网站', pv: 1024 },
      { key: 'mobile网站', pv: 1024 },
      { key: 'ios', pv: 1024 },
      {
        key: 'android',
        pv: 1024
      }
    ]
  }),
  getArticle: () => ({
    id: 120000000001,
    author: { key: 'mockPan' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '全球' }],
    comment_disabled: true,
    content:
      '<p>我是测试数据我是测试数据</p><p><images class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
    content_short: '我是测试数据',
    display_time: +new Date(),
    image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/PanJiaChen/vue-element-admin',
    status: 'published',
    tags: [],
    title: 'vue-element-admin',
    code: 0
  }),

  getCloudDesktopDetail: () => ({
    code: 0,
    data: {
      cloudDesktopType: 'personalized'
    }
  }),
  createArticle: () => ({
    data: 'success',
    code: 0,
    msg: 'create is success'
  }),
  updateArticle: () => ({
    data: 'success',
    code: 0,
    msg: 'update is success'
  }),
  emailValidator: () => ({
    data: null,
    code: 0,
    msg: ''
  }),
  deleteArticle: () => ({
    data: null,
    code: 0,
    msg: 'delete success'
  }),
  getImages: () => {
    return {
      data: [
        { label: 'win7', value: '1' },
        { label: 'win10', value: '2' },
        { label: 'linux', value: '3' }
      ],
      code: 0
    }
  },
  getCloudDesktopStrategy: config => {
    const data = JSON.parse(config.body)
    const imageName = parseInt(data.imageName)
    return {
      data: [
        { label: `云桌面${imageName}`, value: `${imageName}` },
        { label: `云桌面${imageName * 2}`, value: `${imageName * 2}` },
        { label: `云桌面${imageName * 3}`, value: `${imageName * 3}` }
      ],
      code: 0
    }
  },
  getHostList: () => {
    return {
      content: [
        {
          id: 'af5d15e2-7f8a-4af7-b723-a37ee23a0496',
          name: '主机-01',
          hostIdentify: 'asdbsdfdf-7f8a-4af7-b723-a37ee23a0496',
          ip: '172.21.129.18',
          description: 'hi host',
          manageState: 'NORMAL',
          connectState: 'CONNECTED',
          authState: 'AUTH',
          createTime: 1723421123,
          config_status: 'FINISH'
        }
      ],
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
  },
  getStoragePoolList: () => {
    used += 1000000000
    total += 10000000000
    // total = total > 0 ? 0 : 10000000000;
    return {
      content: {
        itemArr: [
          {
            allocationCapacity: null,
            canOverweight: null,
            clusterId: '00000000-0000-0000-0000-000000000000',
            createTime: 1586756404,
            description: null,
            diskType: null,
            id: '00000000-0000-0000-0000-000000000000',
            name: 'test',
            redundancyStrategy: 'CARBON_2B',
            storagePoolState: 'HEALTH',
            totalCapacity: total,
            usedCapacity: used
          }
        ],
        total: 1
      },
      message: null,
      msgArgArr: null,
      msgKey: null,
      status: 'SUCCESS'
    }
  }
}
