import { getTokens } from '@/api/tokens.api'
import{TokenList} from '@/types/tokens'


const state = {
  selectedNetwork: 1,
  tokens: [],
  InputTokenAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  OutTokenAddress: "0x111111111117dc0aa78b770fa6a738034120c302",
  InputTokenAmount: "10000000000000000",
  OutTokenAmount: ""
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
  setTokens(state, tokens: TokenList) {
    state.tokens = tokens
  }
}
const actions = {
  async fetchTokens({ commit }) {
    const tokens = await getTokens()
    commit('setTokens', tokens.data.tokens)
  }
}
const getters = {
  InputTokenAddress: (s) => s.InputTokenAddress,
  InputTokenAmount: (s) => s.InputTokenAmount,
  OutTokenAmount: (s) => s.OutTokenAmount,
  OutTokenAddress: (s) => s.OutTokenAddress,
  selectedNetwork: (s) => s.selectedNetwork,
  tokens: (s) => Object.values(s.tokens)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
