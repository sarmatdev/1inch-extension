import { utils } from 'ethers'

export function isAddress(address: string): boolean {
  return utils.isAddress(address)
}

export function toHex(value: string) {
  return `0x${Number(value).toString(16)}`
}
