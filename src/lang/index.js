import { extend } from 'sk-ui/lib/utils/util.js'
import i18n from 'sky-engine/lang'

import enLocale from './en/index.js' // 项目英文库
import zhLocale from './zh/index.js' // 项目中文库

const allZhLocale = {
  ...extend(true, i18n.getLocaleMessage('zh'), zhLocale)
}

const allEnLocale = {
  ...extend(true, i18n.getLocaleMessage('en'), enLocale)
}

i18n.mergeLocaleMessage('zh', allZhLocale)
i18n.mergeLocaleMessage('en', allEnLocale)

export default i18n
