/* eslint-disable @typescript-eslint/no-unused-vars */
import { Wallet } from 'ethers'
import { isAddress } from '@/utils/eth-utils'

export function createRandom(): Wallet {
  return Wallet.createRandom()
}

export function validateMnemonic(phrase): boolean {
  let account
  try {
    account = Wallet.fromMnemonic(phrase)
  } catch (_) {
    return false
  }

  return true
}

export function validatePrivateKey(privateKey: string): boolean {
  try {
    const { address } = new Wallet(privateKey)
    return isAddress(address)
  } catch (e) {
    return false
  }
}
