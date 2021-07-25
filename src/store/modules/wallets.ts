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
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
