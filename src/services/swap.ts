import { swap } from '@/api/swap.api'

export function swapTokens({
  fromTokenAddress,
  toTokenAddress,
  amount,
  fromAddress,
  slippage
}) {
  return swap({
    fromTokenAddress,
    toTokenAddress,
    amount,
    fromAddress,
    slippage
  })
}
