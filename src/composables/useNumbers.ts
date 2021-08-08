import BigNumber from 'bignumber.js'

export function RoundedFormat(amountValue) {
  const InAmount = new BigNumber(amountValue)
  if (InAmount.toNumber() > 1) {
    return InAmount.decimalPlaces(3).toNumber()
  }

  if (InAmount.toNumber() < 1) {
    return InAmount.decimalPlaces(6).toNumber()
  }
  if (!InAmount.toNumber()) {
    return 0
  }
}

export function toShowFormated(amount, decimals) {
  const InputAmount = new BigNumber(amount)
  const FormatedAmount = InputAmount.times(`1e-${decimals}`)
  return RoundedFormat(FormatedAmount)
}

export function toSendFormated(
  amount: number | string,
  decimals: number
): number | undefined {
  const InputAmount = new BigNumber(amount)
  return InputAmount.times(`1e${decimals}`).toNumber()
}
