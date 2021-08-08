import { JsonRpcProvider } from '@ethersproject/providers'

export default function getProvider(network: string) {
  return new JsonRpcProvider(network)
}
