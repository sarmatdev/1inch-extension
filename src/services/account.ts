/* eslint-disable @typescript-eslint/no-unused-vars */
import { Wallet } from 'ethers'
import { isAddress } from '@/utils/eth-utils'

export function createRandom(): Wallet {
  return Wallet.createRandom()
}

export function createFromMnemonic(mnemonic): Wallet {
  return Wallet.fromMnemonic(mnemonic)
}

export function validateMnemonic(phrase): Wallet {
  let account
  try {
    account = Wallet.fromMnemonic(phrase)
  } catch (_) {
    return Wallet.createRandom()
  }

  return account
}

export function validatePrivateKey(privateKey: string): boolean {
  try {
    const { address } = new Wallet(privateKey)
    return isAddress(address)
  } catch (e) {
    return false
  }
}

export function createFromPrivateKey(privateKey: string): Wallet {
  return new Wallet(privateKey)
}
