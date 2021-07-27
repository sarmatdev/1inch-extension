/* eslint-disable no-empty-pattern */
import { setStorageItem } from '@/services/storage'

interface Account {
  name: string
  address: string
}

export interface WalletsState {
  accounts: Array<Account>
}

const state = {
  accounts: []
}
const mutations = {
  setWallet(state: WalletsState, account: Account): void {
    state.accounts.push(account)
  }
}
const actions = {
  storeWallet({ commit }, wallet) {
    console.log('wallet', wallet)
    return setStorageItem(wallet.name, wallet)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
