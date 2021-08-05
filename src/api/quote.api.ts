import httpClient from './httpClient'
const END_POINT = '/quote'

const getQuote = (InputAddress, OutAddress, InputAmounT) => {
  return httpClient.get(
    `${END_POINT}?fromTokenAddress=${InputAddress}&toTokenAddress=${OutAddress}&amount=${InputAmounT}`
  )
}

export { getQuote }
