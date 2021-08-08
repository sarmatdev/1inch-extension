import { computed, inject, ref } from 'vue'
import { useStore } from 'vuex'
import ConfigService from '@/services/config/config.service'
import { decryptString } from '@/services/crypto'
import { rpcProviderService } from '@/services/rpc-provider/rpc-provider.service'
import { Web3Plugin, Web3ProviderSymbol } from './web3.plugin'
import { Web3Provider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'

/** STATE */
const blockNumber = ref(0)

/** MUTATIONS */
function setBlockNumber(n: number): void {
  blockNumber.value = n
}

// Block listener
rpcProviderService.initBlockListener(setBlockNumber)

export default function useWeb3() {
  const store = useStore()

  const { chainId, provider } = inject(Web3ProviderSymbol) as Web3Plugin
  const configService = new ConfigService()
  const appNetworkConfig = configService.network

  const userNetworkConfig = computed(() => {
    return configService.getNetworkConfig(String(chainId.value))
  })

  const selectedWallet = computed(() => store.getters['wallets/selectedWallet'])
  const isEthereum = computed(() => appNetworkConfig.chainId === 1)
  const isBinance = computed(() => appNetworkConfig.chainId === 1)
  const isPolygon = computed(() => appNetworkConfig.chainId === 137)
  const explorerLinks = {
    txLink: (txHash: string) =>
      `${configService.network.explorer}/tx/${txHash}`,
    addressLink: (address: string) =>
      `${configService.network.explorer}/address/${address}`,
    tokenLink: (address: string) =>
      `${configService.network.explorer}/token/${address}`
  }

  const wallet = computed(() => {
    const privateKey = decryptString(
      selectedWallet.value.privateKey,
      selectedWallet.value.salt
    )
    return new Wallet(privateKey, provider.value)
  })

  // METHODS
  const getProvider = () => new Web3Provider(provider.value as any)
  const getSigner = () => getProvider().getSigner()

  return {
    wallet,
    provider,
    userNetworkConfig,
    appNetworkConfig,
    explorerLinks,
    blockNumber,
    isEthereum,
    isBinance,
    isPolygon,
    selectedWallet,
    getProvider,
    getSigner,
    setBlockNumber
  }
}
