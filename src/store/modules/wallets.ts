import { setStorageItem } from '@/services/storage'
import { encryptString } from '@/services/crypto'
import { v4 as uuidv4 } from 'uuid'

interface Account {
  name: string
  address: string
}

export interface WalletsState {
  address: ''
  accounts: Array<Account>
}

const state = {
  address: '',
  accounts: []
}
const mutations = {
  setWallet(state: WalletsState, account: Account): void {
    state.accounts.push(account)
  }
}
const actions = {
  storeWallet({ commit }, wallet) {
    const salt = uuidv4().replace(/-/g, '')
    const encryptedWallet = {
      ...wallet,
      privateKey: encryptString(wallet.privateKey, salt),
      salt
    }

    commit('setWallet', encryptedWallet)
    setStorageItem(wallet.name, encryptedWallet)
  }
}
const getters = {
  accounts: (s: WalletsState) => s.accounts,
  accountsNum: (s: WalletsState) => s.accounts.length
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
