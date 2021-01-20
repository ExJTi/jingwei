import store from 'sky-engine/store'

import permission from './modules/permission'
import projectLib from './modules/projectM'
import testcaseLib from './modules/testcaseMng'
import user from './modules/user'

const modules = {
  permission,
  user,
  testcaseLib,
  projectLib
}

for (const key in modules) {
  // eslint-disable-next-line no-prototype-builtins
  if (modules.hasOwnProperty(key)) {
    store.registerModule(key, modules[key])
  }
}

export default store
