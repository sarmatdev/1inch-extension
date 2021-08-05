import { getTokens } from '@/api/tokens.api'
import { IToken } from '@/types/tokens'

export interface SettingsState {
  selectedNetwork: number
  tokens: Array<IToken>
}

const state: SettingsState = {
  selectedNetwork: 137,
  tokens: []
}
const mutations = {
  setOutTokenAmount(state, OutAmount) {
    state.OutTokenAmount = OutAmount
  },
  setInputTokenAmount(state, InputAmount) {
    state.InputTokenAmount = InputAmount
  },
  setOutTokenAddress(state, InputAddress) {
    state.OutTokenAddress = InputAddress
  },
  setInputTokenAddress(state, OutAddress) {
    state.InputTokenAddress = OutAddress
  },
  setSelectedNetwork(state, id: number) {
    state.selectedNetwork = id
  },
  setTokens(state: SettingsState, tokens: Array<IToken>) {
    state.tokens = Object.values(tokens)
  }
}
const actions = {
  async fetchTokens({ commit }) {
    const tokens = await getTokens()
    commit('setTokens', tokens.data.tokens)
  }
}
const getters = {
  selectedNetwork: (s: SettingsState) => s.selectedNetwork,
  tokens: (s: SettingsState) => {
    return s.tokens.slice(0, 30)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
