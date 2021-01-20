<script>
import viewController from 'sky-engine/views/viewController'

import TestCaseTranfer from './TestCaseTranfer'

// import '@/assets/styles/components/adDomainController.scss'

const skyTcTransferController = {
  name: 'SkyAdDomainConfigController', // Controller 必须命名为 SkyxxxxxController
  extends: viewController, // 必须继承 SK-UI-WEB 的 controller 入口文件
  components: {
    TestCaseTranfer // 业务组件
  },
  props: {
    views: {
      type: Object
    }
  },
  data() {
    return {
      hideBottomToolbar: true,
      steps: [
        {
          title: this.t('authManage.adServerConfig'),
          name: 'sky-ad-server'
        },
        {
          title: this.t('authManage.adMappingConfig'),
          name: 'sky-ad-mapping'
        }
      ]
    }
  },
  methods: {
    renderContent(h) {
      const steps = h('render-steps-page', {
        props: Object.assign(this._props.views.view, {
          height: this.availableHeight,
          steps: this.steps
        })
      })
      return steps
    }
  }
}
export default skyTcTransferController
</script>
