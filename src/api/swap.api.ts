import httpClient from './httpClient'
const END_POINT = '/swap'

const swap = ({
  fromTokenAddress,
  toTokenAddress,
  amount,
  fromAddress,
  slippage
}) => {
  console.log(amount)
  return httpClient.get(
    `${END_POINT}?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount.value}&fromAddress=${fromAddress}&slippage=${slippage}`
  )
}

export { swap }
