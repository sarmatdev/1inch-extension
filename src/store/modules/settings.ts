import { getTokens } from '@/api/tokens.api'

interface IToken {
  address: string
  decimals: number
  logoURI: string
  name: string
  symbol: string
}

export interface SettingsState {
  selectedNetwork: number
  tokens: Array<IToken>
}

const state: SettingsState = {
  selectedNetwork: 1,
  tokens: []
}
const mutations = {
  setSelectedNetwork(state: SettingsState, id: number) {
    state.selectedNetwork = id
  },
  setTokens(state: SettingsState, tokens: Array<IToken>) {
    state.tokens = tokens
  }
}
const actions = {
  async fetchTokens({ commit }) {
    const tokens = await getTokens()
    commit('setTokens', tokens.data.tokens)
    console.log('tokens', tokens.data.tokens)
  }
}
const getters = {
  selectedNetwork: (s: SettingsState) => s.selectedNetwork,
  tokens: (s: SettingsState) => s.tokens
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
