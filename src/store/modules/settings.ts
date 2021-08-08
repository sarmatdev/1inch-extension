export interface SettingsState {
  selectedNetwork: number
  onboarded: boolean
}

const state: SettingsState = {
  selectedNetwork: 137,
  onboarded: false
}
const mutations = {
  setSelectedNetwork(state, id: number) {
    state.selectedNetwork = id
  },
  setOnboarding(state, onboarded) {
    state.onboarded = onboarded
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
