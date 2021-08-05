export interface SettingsState {
  selectedNetwork: number
}

const state: SettingsState = {
  selectedNetwork: 137
}
const mutations = {
  setSelectedNetwork(state, id: number) {
    state.selectedNetwork = id
  }
}
const actions = {}
const getters = {
  selectedNetwork: (s: SettingsState) => s.selectedNetwork
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
