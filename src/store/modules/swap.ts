import { getTokens } from '@/api/tokens.api'
import { getAllowancesAndBalances } from '@/api/balances/balances.api'
import { IToken } from '@/types/tokens'
import BN from 'bignumber.js'

export interface SwapState {
  tokens: Array<IToken>
  balances: []
}

const state: SwapState = {
  tokens: [],
  balances: []
}
const mutations = {
  setTokens(state: SwapState, tokens: Array<IToken>) {
    state.tokens = Object.values(tokens)
  },
  setAllowancesAndBalances(state: SwapState, payload) {
    state.balances = payload
  }
}
const actions = {
  async fetchTokens({ commit }) {
    const tokens = await getTokens()
    commit('setTokens', tokens.data.tokens)
  },
  async fetchAllowancesAndBalances({ commit, rootState }) {
    const balances = await getAllowancesAndBalances(
      rootState.wallets.selectedWallet.address
    )
    commit('setAllowancesAndBalances', balances.data)
  }
}
const getters = {
  tokens: (s: SwapState) => s.tokens,
  balances: (s: SwapState) => (token) => {
    const balances = s.balances[token.value.address]

    return {
      // @ts-ignore
      balance: new BN(balances.balance)
        .div(`1e${token.value.decimals}`)
        .toNumber(),
      // @ts-ignore
      allowance: new BN(balances.allowance)
        .div(`1e${token.value.decimals}`)
        .toNumber()
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
