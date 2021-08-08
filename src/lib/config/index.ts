import ethereum from './ethereum.json'
import binance from './binance.json'
import polygon from './polygon.json'

export interface Config {
  key: string
  chainId: number
  chainName: string
  name: string
  shortName: string
  network: string
  unknown: boolean
  rpc: string
  publicRpc?: string
  ws: string
  explorer: string
  nativeAsset: {
    name: string
    address: string
    symbol: string
    decimals: number
    deeplinkId: string
    logoURI: string
  }
}

const config: Record<string, Config> = {
  '1': ethereum,
  '56': binance,
  '137': polygon
}

export default config
