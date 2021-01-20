<template>
  <div style="width:100%;height:100%">
    <sky-rabbit />
    <div id="hiddenMask" class="hidden-mask" />
    <el-popover ref="rabbitPopper" placement="bottom" trigger="manual" popper-class="sky-rabbit__popover">
      <sk-icon-status :content="$t('rabbit.after_hidden_text')" type="normal" />
    </el-popover>
    <div v-popover:rabbitPopper :style="rabbitPopperStyle" />
    <sk-layout
      ref="layout"
      :class="[{ 'sky-layout-configWizard': configurationWizardVisible }]"
      :items="items"
      :permission-routers="permission_routers"
      :sidebar="sidebar"
      :show-hamburger="!configurationWizardVisible"
      :show-breadcrumb="!configurationWizardVisible"
      :show-sidebar="!configurationWizardVisible"
      menu-transition-name="el-zoom-in-custom-left"
      @click-navitem="handleClickNavItem"
      @change-route="handleChangeRoute"
      @toggle-sidebar="handleToggleSidebar"
    >
      <sky-progress-box v-if="!configurationWizardVisible" />
      <div slot="icon" style="display:flex;padding:12px">
        <img v-show="sidebar.opened" src="@/assets/images/login/logo_white.svg" width="100%" />
        <img v-show="!sidebar.opened" src="@/assets/images/login/cloud_logo_white.svg" width="100%" />
      </div>
    </sk-layout>
  </div>
</template>
<script>
import { Popover, Notification, Message } from 'element-ui'
import { SkLayout, SkIconStatus, SkDrawer, SkDialog } from 'sk-ui'
import Locale from 'sk-ui/lib/mixins/locale'
import { action } from 'sky-engine/api'
import progressBox from 'sky-engine/components/progressBox'
import { mapGetters } from 'vuex'

import navItems from './navItems'

const TYPE_MAP = {
  USER: {
    route: 'userManage',
    label: 'sk.route.userManage'
  },
  TERMINAL: {
    route: 'vdiTerminal',
    label: 'sk.route.vdiTerminal'
  },
  DESKTOP: {
    route: 'cloudDesktopManage',
    label: 'sk.route.cloudDesktopManage'
  }
}

export default {
  components: {
    [SkLayout.name]: SkLayout,
    [progressBox.name]: progressBox,
    [Popover.name]: Popover,
    [SkIconStatus.name]: SkIconStatus
  },

  mixins: [navItems, Locale],
  data() {
    return {
      items: [
        {
          label: 'welcome',
          icon: 'user',
          label1: '',
          show: false
        },
        {
          label: 'more',
          icon: 'more',
          show: false,
          menus: [
            {
              label: 'customerService',
              icon: 'customer-service',
              action: 'customerService'
            },
            {
              label: 'logout',
              icon: 'power',
              action: 'logout'
            }
          ]
        }
      ],
      refreshInterval: true,
      offTop: 0,
      offLeft: 0,
      showRabbitPopper: false,
      rabbitPopperStyle: {
        top: '0px',
        left: '0px',
        position: 'absolute',
        zIndex: 1003
      }
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'permission_routers', 'hasFirstTimeLoggedIn', 'configurationWizardVisible'])
  },
  mounted() {
    this.items[0].label1 = this.name
  },
  beforeDestroy() {
    SkDrawer.closeAll()
    SkDialog.instanceMethod.removeAll()
    Notification.closeAll()
    Message.closeAll()
  },
  methods: {
    handleClickNavItem(item) {
      this.operate(item)
    },
    handleToggleSidebar() {
      this.$store.dispatch('toggleSideBar')
    },
    showTaskInfo() {},
    load(keyword) {
      return action('rco/home', 'search', { keyword, limit: 500, page: 0 })
    },
    handleChangeRoute() {
      this.$store.dispatch('SetRelationSearchKeyword', null)
    },
    serverProtocol() {
      window.open('#/server-protocol')
    },
    handleSearchSelect(item) {
      this.$router.push({
        name: TYPE_MAP[item.type || item.module].route
      })
      setTimeout(() => {
        if (item.isGroup) {
          this.$store.dispatch('SetRelationSearchKeyword', item.keyword)
        } else {
          const params = {
            id: item.id
          }
          this.$store.dispatch('SetRelationSearchKeyword', params)
        }
      }, 100)
    },
    updateOffset(offTop, offLeft) {
      this.rabbitPopperStyle.top = offTop + 36 + 'px'
      this.rabbitPopperStyle.left = offLeft + 10 + 'px'
      const me = this
      me.$refs.rabbitPopper.doShow()
      setTimeout(() => {
        me.$refs.rabbitPopper.doClose()
      }, 3000)
    }
  }
}
</script>
<style lang="scss">
@import '~sky-engine/assets/styles/common/var.scss';
@import '~sky-engine/assets/styles/mixin/mixin.scss';

@include b(layout-configWizard) {
  & .sk-navbar__items {
    box-shadow: none;
  }

  & .sk-app__header {
    box-shadow: $--box-shadow-light;
  }

  & .sk-navbar__logo {
    background: transparent;
  }

  &.is-hideSidebar .sk-app__main {
    margin-left: 0;
  }
  & .sk-app__main {
    margin-left: 0;
  }
  & .sk-app__main {
    background-color: #eef0f5;
  }

  & .sk-app__inner {
    background: transparent;
    height: 100%;
    // padding: 0 $--padding-size-base !important;

    & .sky-ip-pool__item {
      padding: 0;
    }
  }
}

@include b(rabbit) {
  @include e(popover) {
    &.el-popper {
      color: $--fill-base;
      background-color: $--color-success-lighter;
      border-color: $--color-success-lighter;
    }
    &.el-popper[x-placement^='bottom'] .popper__arrow::after {
      border-bottom-color: $--color-success-lighter;
    }
  }
}
</style>
