import { post } from 'sk-axios'

import { ADMIN } from '@/api'

export function loginByUsername(userName, password) {
  const data = {
    userName,
    pwd: password,
    timestamp: new Date().getTime()
  }
  return post(`${ADMIN}/loginAdmin`, data)
}

export function logout() {
  return post(`${ADMIN}/logoutAdmin`)
}

export function getUserInfo() {
  return post(`${ADMIN}/getCurrentUserInfo`)
}
