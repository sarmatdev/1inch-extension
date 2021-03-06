import { setStorageItem } from '@/services/storage'

export interface AuthState {
  isAuth: boolean
  password: string
}

const state = {
  isAuth: false,
  password: ''
}
const mutations = {
  setPassword(state: AuthState, password: string): void {
    state.password = password
    state.isAuth = true
  },
  setAuth(state: AuthState, auth: boolean): void {
    state.isAuth = auth
  }
}
const actions = {
  storePassword({ commit }, password: string): void {
    commit('setPassword', password)
    setStorageItem('password', password)
  }
}
const getters = {
  isAuth: (s): boolean => s.isAuth,
  hasPassword: (s): boolean => !!s.password
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
