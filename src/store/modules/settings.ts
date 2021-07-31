import { getTokens } from "../../api/tokens.api";

export interface SettingsState {
  auth: true
}

const state = {
  auth: [],
  selectedNetwork: "",
  tokens: {}
}
const mutations = {
  setselectedNetwork(state, paylod) {
  state.selectedNetwork = paylod
  console.log('api send')
},
setTokens(state, tokens) {
  state.tokens = tokens;
}
}
const actions = {
  async fetchTokens({ commit }) {
    try {
      const response = await getTokens();
      commit("setTokens", response.data.result);
    } catch (error) {
      console.log(error);
    }
  }
}
const getters = {
  selectedNetwork: (state) => state.selectedNetwork,
  tokens: (state) => state.tokens
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
