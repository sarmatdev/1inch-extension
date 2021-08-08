import { swap } from '@/api/swap.api'
import { getQuote } from '@/api/quote.api'
import { getApproveCalldata } from '@/api/approve.api'

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

export function quoteTokens({ tokenIn, tokenOut, amount }) {
  return getQuote({
    tokenIn,
    tokenOut,
    amount
  })
}

export function approveCalldata(tokenAddress) {
  return getApproveCalldata(tokenAddress)
}
