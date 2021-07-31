import { getTokens } from "../../api/tokens.api";

export interface SettingsState {
  auth: true
}

const state = {
  auth: [],
  selectedNetwork: "",
  
}
const mutations = {
  setselectedNetwork(state, paylod) {
  state.selectedNetwork = paylod
  console.log('api send')
}
}
const actions = {
  
}
const getters = {
  selectedNetwork: (state) => state.selectedNetwork
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
