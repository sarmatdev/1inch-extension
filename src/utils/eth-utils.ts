import { utils } from 'ethers'

export function isAddress(address: string): boolean {
  return utils.isAddress(address)
}
