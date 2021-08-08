import { getTokens } from '@/api/tokens.api'
import { getMarkets } from '@/api/coinGecko/markets.api'
import { getAllowancesAndBalances } from '@/api/balances/balances.api'
import { IToken, IMarket } from '@/types/tokens'
import BN from 'bignumber.js'

export interface SwapState {
  tokens: Array<IToken>
  markets: Array<IMarket>
  balances: []
}

const state: SwapState = {
  tokens: [],
  markets: [],
  balances: []
}
const mutations = {
  setTokens(state: SwapState, tokens: Array<IToken>) {
    state.tokens = Object.values(tokens)
  },
  setMarkets(state: SwapState, markets: Array<IMarket>) {
    state.markets = markets
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
  async fetchMarkets({ commit }) {
    const markets = await getMarkets()
    commit('setMarkets', markets.data)
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
  markets: (s: SwapState) => s.markets,
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
