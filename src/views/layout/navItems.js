export default {
  methods: {
    handleMouseEnter(item) {
      item.show = !item.show
    },
    handleMouseLeave(item) {
      item.show = !item.show
    },
    operate(item) {
      this[item.action] && this[item.action](item)
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        // location.reload() // 为了重新实例化vue-router对象 避免bugq
        this.$router.push({
          path: '/login'
        })
      })
    },
    customerService() {
      window.open('https://ocs.ruijie.com.cn/?p=rcd')
    }
  }
}
