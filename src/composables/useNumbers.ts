import BigNumber from 'bignumber.js'

export function toShowFormated(
  amount,
  decimals
) {
  const InputAmount = new BigNumber(amount)
  const FormatedAmount = InputAmount.times(`1e-${decimals}`).decimalPlaces(5)
  console.log(FormatedAmount)
  if (FormatedAmount.toNumber() < 1) {
    return FormatedAmount.toNumber()
  }

  if (FormatedAmount.toNumber() > 1) {
    return FormatedAmount.decimalPlaces(2).toNumber()
  }
}

export function toSendFormated(
  amount: number | string,
  decimals: number
): number | undefined {
  const InputAmount = new BigNumber(amount)
  return InputAmount.times(`1e${decimals}`).toNumber()
}
