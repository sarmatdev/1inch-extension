import { useStore } from 'vuex'

export default function useRefreshApi() {
  const store = useStore()

  store.dispatch('swap/fetchTokens')
  store.dispatch('swap/fetchAllowancesAndBalances')
}
