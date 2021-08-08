import BigNumber from 'bignumber.js'

export function toShowFormated(amount, decimals) {
  const InputAmount = new BigNumber(amount)
  const FormatedAmount = InputAmount.times(`1e-${decimals}`)

  if (FormatedAmount < new BigNumber(1e-6)) {
    return FormatedAmount.decimalPlaces(3).toNumber()
  }

  if (FormatedAmount > new BigNumber(1e-6)) {
    return FormatedAmount.decimalPlaces(6).toNumber()
  }
}

export function toSendFormated(
  amount: number | string,
  decimals: number
): number | undefined {
  const InputAmount = new BigNumber(amount)
  return InputAmount.times(`1e${decimals}`).toNumber()
}
