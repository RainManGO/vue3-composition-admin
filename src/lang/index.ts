/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-18 15:23:57
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 14:28:26
 */
import { createI18n } from 'vue-i18n' // import from runtime only

import { getLanguage } from '@/utils/cookies'

// antdv built-in lang
import antdEnLocale from 'ant-design-vue/es/locale/en_US'
import antdZhLocale from 'ant-design-vue/es/locale/zh_CN'

// User defined lang
// import enLocale from './en.json'
// import zhLocale from './zh.json'

const messages = {
  en: {
    // ...enLocale,
    ...antdEnLocale
  },
  zh: {
    // ...zhLocale,
    ...antdZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return 'en'
}

const i18n = createI18n({
  locale: getLocale()
  // messages: messages
})

export default i18n
