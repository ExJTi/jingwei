import router from 'sky-engine/router'

const component = {
  render(h) {
    return h('router-view')
  }
}

/**
 * noAuth:true                    不受权限控制的
 * parentPath:'/app'              父级路由
 * hidden: true                   如果hidden:true ，在左侧菜单中不展示此项，非必须，模式是显示
 * redirect: noredirect           如果 `redirect:noredirect` 在面包屑导航中，不会高亮此项且不具备路由功能，非必须
 * name:'router-name'             <keep-alive>需要此配置，必须有 而且是唯一的
 * meta : {
    role: ['admin','editor']     权限控制，可以配置多个，如果什么都没有配，默认所有角色都可见的
    title: 'title'               在菜单,面包屑显示的名称
    icon: 'svg-name'             在菜单中显示的svg图标
    noCache: true                页面是否需要缓存，默认是false
  }
 **/
/** 不需要权限控制的菜单 */
export const constantMenuRouterMap = [
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'home',
      noCache: true
    }
  },
  {
    path: '/projectM',
    component: component,
    name: 'projectM',
    meta: {
      title: 'projectM',
      icon: 'home',
      noCache: true
    },
    children: [
      {
        path: '/projectLib',
        component: () => import('sky-engine/views/ViewManager'),
        name: 'projectLib',
        meta: {
          title: 'projectLib',
          icon: 'home',
          noCache: true
        }
      }
      // {
      //   path: '/projectNew',
      //   component: () => import('sky-engine/views/ViewManager'),
      //   name: 'projectNew',
      //   meta: {
      //     title: 'projectNew',
      //     icon: 'home',
      //     noCache: true
      //   }
      // }
    ]
  },
  {
    path: '/tcm',
    component: component,
    name: 'testcaseMng',
    meta: {
      title: 'testcaseMng',
      icon: 'home',
      noCache: true
    },
    children: [
      {
        path: '/testcaseLib',
        component: () => import('sky-engine/views/ViewManager'),
        name: 'testcaseLib',
        meta: {
          title: 'testcaseLib',
          icon: 'home',
          noCache: true
        }
      },
      {
        path: '/testcaseView',
        component: () => import('sky-engine/views/ViewManager'),
        name: 'testcaseView',
        meta: {
          title: 'testcaseView',
          icon: 'home',
          noCache: true
        }
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '*',
    name: '*',
    redirect: '/app',
    noAuth: true,
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    name: 'login'
  },
  {
    path: '/',
    redirect: 'app'
  },
  {
    path: '/app',
    component: () => import('../views/layout'),
    redirect: 'dashboard',
    children: constantMenuRouterMap
  }
]

router.addRoutes(constantRouterMap)

/** 需要权限控制的菜单*/
export const asyncMenuRouterMap = []
