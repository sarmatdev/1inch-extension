import httpClient from './httpClient'
const END_POINT = '/swap'

const swap = ({
  fromTokenAddress,
  toTokenAddress,
  amount,
  fromAddress,
  slippage
}) => {
  return httpClient.get(
    `${END_POINT}?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}&fromAddress=${fromAddress}&slippage=${slippage}`
  )
}

export { swap }
