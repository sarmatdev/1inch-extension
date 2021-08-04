import { computed, reactive, Ref, toRefs } from 'vue'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import getProvider from '@/lib/utils/provider'

export const Web3ProviderSymbol = Symbol('WEB3_PROVIDER')

export type Web3Plugin = {
  provider: Ref<Web3Provider | JsonRpcProvider>
  chainId: Ref<number>
}

type PluginState = {
  wallet: any
}

export default {
  install: async (app) => {
    const pluginState = reactive<PluginState>({
      wallet: null as any
    })

    // HACK Polygon network ID hardcode
    const chainId = computed(() => {
      return 137
    })

    const provider = computed(() => getProvider(chainId.value.toString()))

    const payload: Web3Plugin = {
      ...toRefs(pluginState),
      chainId,
      provider
    }

    app.provide(Web3ProviderSymbol, payload)
  }
}
